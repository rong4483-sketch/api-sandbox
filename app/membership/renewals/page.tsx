"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Database, AlertCircle, Receipt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RenewalStepper } from "@/components/renewal/Stepper";
import { outstandingInvoices, paidInvoices } from "@/lib/mock/renewal";
import { currentMember } from "@/lib/mock/member";

export default function RenewalsPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([outstandingInvoices[0].id]);

  function toggle(id: string) {
    setSelected((s) => (s.includes(id) ? s.filter((i) => i !== id) : [...s, id]));
  }

  const selectedInvoices = outstandingInvoices.filter((i) => selected.includes(i.id));
  const total = selectedInvoices.reduce((sum, i) => sum + i.total, 0);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link href="/membership" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Dashboard
      </Link>

      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-[2.5rem] font-bold text-brand-500 tracking-[-0.02em] leading-tight">Membership Renewals</h1>
          <p className="text-ink/70 mt-1">Select outstanding invoices to renew. Balances read from iMIS in real time.</p>
        </div>
        <div className="text-right text-xs text-[color:var(--color-muted)] shrink-0">
          <div className="flex items-center gap-1 justify-end mb-1"><Database className="w-3 h-3" /> iMIS · read</div>
          <div>{currentMember.firstName} {currentMember.lastName} · #{currentMember.memberNumber}</div>
        </div>
      </div>

      <RenewalStepper current={1} />

      {/* Overdue warning */}
      <div className="mb-6 rounded-lg border border-warning/40 bg-warning/5 p-4 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-warning mt-0.5 shrink-0" />
        <div className="text-sm text-ink/80">
          <span className="font-bold">2026 membership fees are due 4 February 2026.</span> Per Constitution 7.3(b), fees unpaid for more than 31 days result in removal from the Register of Members.
        </div>
      </div>

      {/* Outstanding invoices */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-ink flex items-center gap-2"><Receipt className="w-5 h-5 text-brand-500" /> Outstanding</h2>
          <div className="text-xs text-[color:var(--color-muted)]">{outstandingInvoices.length} invoices</div>
        </div>
        <div className="space-y-3">
          {outstandingInvoices.map((inv) => {
            const on = selected.includes(inv.id);
            return (
              <button
                key={inv.id}
                onClick={() => toggle(inv.id)}
                className={`w-full text-left border rounded-lg p-5 transition-colors duration-150 ${
                  on ? "border-brand-500 bg-brand-50/40" : "border-border bg-white hover:border-brand-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-5 h-5 rounded border-2 mt-1 shrink-0 grid place-items-center ${
                    on ? "border-brand-500 bg-brand-500" : "border-border bg-white"
                  }`}>
                    {on && <span className="w-2 h-2 bg-white rounded-sm" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="font-bold text-ink">{inv.description}</div>
                        <div className="text-xs text-[color:var(--color-muted)] mt-0.5">
                          {inv.id} · Period {new Date(inv.periodStart).toLocaleDateString("en-AU", { day: "numeric", month: "short" })} – {new Date(inv.periodEnd).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xl font-bold text-ink whitespace-nowrap">${inv.total.toFixed(2)}</div>
                        <div className="text-xs text-[color:var(--color-muted)]">inc GST</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="muted">Due {new Date(inv.dueDate).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}</Badge>
                      <Badge variant="accent">{inv.status}</Badge>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Recent paid */}
      <section className="mb-10">
        <h2 className="text-sm font-bold text-[color:var(--color-muted)] uppercase tracking-wider mb-3">Recent · paid</h2>
        <div className="overflow-hidden rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <tbody>
              {paidInvoices.map((i) => (
                <tr key={i.id} className="hover:bg-surface/60">
                  <td className="px-5 py-3 font-medium text-ink/75">{i.description}</td>
                  <td className="px-5 py-3 text-ink/55 text-xs">{i.id}</td>
                  <td className="px-5 py-3 text-right text-ink/75">${i.total.toFixed(2)}</td>
                  <td className="px-5 py-3"><Badge variant="muted">Paid</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary bar */}
      <Card>
        <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-xs text-[color:var(--color-muted)] uppercase tracking-wider font-bold">Selected total</div>
            <div className="text-3xl font-bold text-brand-500">${total.toFixed(2)}</div>
            <div className="text-xs text-[color:var(--color-muted)]">{selectedInvoices.length} invoice{selectedInvoices.length === 1 ? "" : "s"} selected · includes GST</div>
          </div>
          <Button
            size="lg"
            disabled={selected.length === 0}
            onClick={() => router.push(`/membership/renewals/review?ids=${selected.join(",")}`)}
          >
            Continue to review →
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
