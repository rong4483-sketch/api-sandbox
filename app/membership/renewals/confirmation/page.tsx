"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Download, Mail, Database, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RenewalStepper } from "@/components/renewal/Stepper";
import { outstandingInvoices } from "@/lib/mock/renewal";
import { currentMember } from "@/lib/mock/member";

function ConfirmationContent() {
  const params = useSearchParams();
  const ids = (params.get("ids") || "").split(",").filter(Boolean);
  const method = params.get("method") || "card";
  const invoices = outstandingInvoices.filter((i) => ids.includes(i.id));
  const total = invoices.reduce((s, i) => s + i.total, 0);
  const receiptNo = `RCPT-2026-${String(Math.floor(10000 + Math.random() * 89999))}`;
  const today = new Date();

  const methodLabel =
    method === "card" ? "Credit/debit card" : method === "bpay" ? "BPAY" : "EFT / direct deposit";
  const methodStatus =
    method === "card"
      ? "Settled"
      : method === "bpay"
        ? "Pending (2–3 business days)"
        : "Pending (on bank reconciliation)";

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <RenewalStepper current={4} />

      <div className="text-center mb-12">
        <div className="inline-flex w-20 h-20 rounded-full bg-accent-500 text-brand-900 items-center justify-center mb-5 shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-500 tracking-[-0.025em] leading-tight mb-3">Payment confirmed</h1>
        <p className="text-muted text-lg">Thank you, {currentMember.firstName}. Your 2026 membership is renewed.</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        <div>
          {/* Receipt */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="text-lg font-bold text-ink">Receipt</h2>
                  <div className="text-xs text-[color:var(--color-muted)] mt-0.5">{receiptNo} · {today.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</div>
                </div>
                <Badge variant="muted">{methodStatus}</Badge>
              </div>

              <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-5">
                <div className="flex justify-between border-b border-border pb-1.5"><dt className="text-[color:var(--color-muted)]">Paid by</dt><dd className="font-medium">{currentMember.firstName} {currentMember.lastName}</dd></div>
                <div className="flex justify-between border-b border-border pb-1.5"><dt className="text-[color:var(--color-muted)]">Member #</dt><dd className="font-medium">{currentMember.memberNumber}</dd></div>
                <div className="flex justify-between border-b border-border pb-1.5"><dt className="text-[color:var(--color-muted)]">Payment method</dt><dd className="font-medium">{methodLabel}</dd></div>
                <div className="flex justify-between border-b border-border pb-1.5"><dt className="text-[color:var(--color-muted)]">Issued</dt><dd className="font-medium">{today.toLocaleDateString("en-AU")}</dd></div>
              </dl>

              <table className="w-full text-sm mb-4">
                <tbody className="divide-y divide-border">
                  {invoices.map((i) => (
                    <tr key={i.id}>
                      <td className="py-2">
                        <div className="font-medium text-ink">{i.description}</div>
                        <div className="text-xs text-[color:var(--color-muted)]">{i.id}</div>
                      </td>
                      <td className="py-2 text-right font-medium text-ink">${i.total.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr className="bg-surface">
                    <td className="py-3 px-2 font-bold text-ink">Total</td>
                    <td className="py-3 px-2 text-right font-bold text-brand-500 text-xl">${total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex gap-2 flex-wrap">
                <Button variant="outline"><Download className="w-4 h-4" /> Download PDF receipt</Button>
                <Button variant="ghost"><Mail className="w-4 h-4" /> Email to me</Button>
              </div>
            </CardContent>
          </Card>

          {/* iMIS write log */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-4 h-4 text-brand-500" />
                <h2 className="text-lg font-bold text-ink">iMIS database updates</h2>
              </div>
              <ul className="text-sm text-ink/80 space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" /> Invoice {invoices[0]?.id} marked {method === "card" ? "Paid" : "Pending"}</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" /> Member renewal date advanced to 31 December 2026</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" /> APIV Scheme coverage continued uninterrupted</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" /> Directory listing retains 'Current member' status</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" /> Tax invoice / receipt written to member document vault</li>
              </ul>
              <div className="mt-4 text-xs text-[color:var(--color-muted)]">Sandbox preview — writes simulated; no real iMIS data changed.</div>
            </CardContent>
          </Card>
        </div>

        <aside className="lg:sticky lg:top-10 self-start space-y-4">
          <Card className="bg-brand-500 text-white border-0">
            <CardContent className="p-6">
              <div className="text-xs uppercase tracking-wider text-accent-400 font-bold mb-2">What's next</div>
              <h3 className="text-xl font-bold mb-3">Log your 2026 CPD</h3>
              <p className="text-sm text-white/80 mb-4">Your renewal year runs to 31 December 2026. Book webinars and masterclasses that count towards structured hours.</p>
              <Button variant="accent" className="w-full" asChild>
                <Link href="/education/cpd" className="no-underline hover:no-underline">Browse CPD <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/membership" className="no-underline hover:no-underline">Return to dashboard</Link>
          </Button>
        </aside>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-5xl px-6 py-10">Loading…</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
