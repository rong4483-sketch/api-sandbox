"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft, Database, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RenewalStepper } from "@/components/renewal/Stepper";
import { outstandingInvoices } from "@/lib/mock/renewal";
import { currentMember } from "@/lib/mock/member";

function ReviewContent() {
  const params = useSearchParams();
  const router = useRouter();
  const ids = (params.get("ids") || "").split(",").filter(Boolean);
  const invoices = outstandingInvoices.filter((i) => ids.includes(i.id));
  const subtotal = invoices.reduce((s, i) => s + i.amount, 0);
  const gst = invoices.reduce((s, i) => s + i.gst, 0);
  const total = subtotal + gst;

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link href="/membership/renewals" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to invoice selection
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold text-brand-500 tracking-[-0.025em] leading-tight mb-2">Review your renewal</h1>
      <p className="text-ink/70 mb-6">Confirm details before proceeding to payment. Member record and grade are read from iMIS.</p>

      <RenewalStepper current={2} />

      <div className="grid lg:grid-cols-[1fr_340px] gap-8">
        <div>
          {/* Member record */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-ink">Member record</h2>
                <div className="text-xs text-[color:var(--color-muted)] flex items-center gap-1"><Database className="w-3 h-3" /> iMIS · read</div>
              </div>
              <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-[color:var(--color-muted)]">Name</dt><dd className="font-medium text-ink">{currentMember.firstName} {currentMember.lastName}</dd></div>
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-[color:var(--color-muted)]">Member #</dt><dd className="font-medium text-ink">{currentMember.memberNumber}</dd></div>
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-[color:var(--color-muted)]">Grade</dt><dd className="font-medium text-ink">{currentMember.grade} (AAPI)</dd></div>
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-[color:var(--color-muted)]">Certification</dt><dd className="font-medium text-ink">{currentMember.certifications.join(", ")}</dd></div>
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-[color:var(--color-muted)]">State</dt><dd className="font-medium text-ink">{currentMember.state}</dd></div>
                <div className="flex justify-between border-b border-border pb-2"><dt className="text-[color:var(--color-muted)]">Member since</dt><dd className="font-medium text-ink">{new Date(currentMember.memberSince).toLocaleDateString("en-AU", { month: "short", year: "numeric" })}</dd></div>
              </dl>
            </CardContent>
          </Card>

          {/* Line items */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-bold text-ink mb-4">Line items</h2>
              {invoices.length === 0 && (
                <p className="text-sm text-[color:var(--color-muted)]">No invoices selected. <Link href="/membership/renewals" className="text-brand-500">Back to selection</Link>.</p>
              )}
              {invoices.map((inv) => (
                <div key={inv.id} className="mb-6 last:mb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-bold text-ink">{inv.description}</div>
                      <div className="text-xs text-[color:var(--color-muted)]">{inv.id}</div>
                    </div>
                    <Badge variant="muted">Due {new Date(inv.dueDate).toLocaleDateString("en-AU", { day: "numeric", month: "short" })}</Badge>
                  </div>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-border">
                      {inv.lineItems.map((li, i) => (
                        <tr key={i}>
                          <td className="py-2 text-ink/75">{li.label}</td>
                          <td className="py-2 text-right text-ink/75">${li.amount.toFixed(2)}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="py-2 text-ink/60">GST</td>
                        <td className="py-2 text-right text-ink/60">${inv.gst.toFixed(2)}</td>
                      </tr>
                      <tr className="bg-surface">
                        <td className="py-2 px-2 font-bold text-ink">Invoice total</td>
                        <td className="py-2 px-2 text-right font-bold text-ink">${inv.total.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Summary sidebar */}
        <aside className="lg:sticky lg:top-10 self-start space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-sm uppercase tracking-wider font-bold text-[color:var(--color-muted)] mb-3">Order summary</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-ink/70">Subtotal</dt><dd className="font-medium">${subtotal.toFixed(2)}</dd></div>
                <div className="flex justify-between"><dt className="text-ink/70">GST</dt><dd className="font-medium">${gst.toFixed(2)}</dd></div>
                <div className="flex justify-between pt-3 border-t border-border"><dt className="font-bold text-ink">Total due</dt><dd className="font-bold text-brand-500 text-xl">${total.toFixed(2)}</dd></div>
              </dl>
              <Button className="w-full mt-5" size="lg" onClick={() => router.push(`/membership/renewals/payment?ids=${ids.join(",")}`)} disabled={invoices.length === 0}>
                Proceed to payment →
              </Button>
            </CardContent>
          </Card>

          <div className="rounded-lg border border-border bg-surface p-4 text-xs text-ink/70 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
            <div>
              CPD record, APIV scheme coverage and Directory listing will remain active upon payment confirmation.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function ReviewPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-5xl px-6 py-10">Loading…</div>}>
      <ReviewContent />
    </Suspense>
  );
}
