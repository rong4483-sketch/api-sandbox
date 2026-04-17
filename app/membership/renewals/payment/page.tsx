"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, CreditCard, Landmark, FileText, Lock, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RenewalStepper } from "@/components/renewal/Stepper";
import { outstandingInvoices } from "@/lib/mock/renewal";
import { cn, formatCurrency } from "@/lib/utils";

type Method = "card" | "bpay" | "eft";

function PaymentContent() {
  const params = useSearchParams();
  const router = useRouter();
  const ids = (params.get("ids") || "").split(",").filter(Boolean);
  const invoices = outstandingInvoices.filter((i) => ids.includes(i.id));
  const total = invoices.reduce((s, i) => s + i.total, 0);

  const [method, setMethod] = useState<Method>("card");
  const [processing, setProcessing] = useState(false);

  function handleSubmit() {
    setProcessing(true);
    setTimeout(() => {
      router.push(`/membership/renewals/confirmation?ids=${ids.join(",")}&method=${method}`);
    }, 1100);
  }

  const methods: { id: Method; label: string; desc: string; icon: typeof CreditCard }[] = [
    { id: "card", label: "Credit or debit card", desc: "Visa, Mastercard, Amex · instant processing", icon: CreditCard },
    { id: "bpay", label: "BPAY", desc: "Biller code 194721 · 2–3 business days", icon: Landmark },
    { id: "eft", label: "EFT / direct deposit", desc: "BSB 062-001 · Acc 10234567 · reference your invoice #", icon: FileText },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link href={`/membership/renewals/review?ids=${ids.join(",")}`} className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to review
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold text-brand-500 tracking-[-0.025em] leading-tight mb-2">Payment</h1>
      <p className="text-ink/70 mb-6">Select a payment method. Card payments are processed via the API online payment gateway.</p>

      <RenewalStepper current={3} />

      <div className="grid lg:grid-cols-[1fr_340px] gap-8">
        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold text-ink mb-4">Payment method</h2>
              <div className="space-y-3">
                {methods.map((m) => {
                  const Icon = m.icon;
                  const active = method === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className={cn(
                        "w-full text-left flex items-start gap-4 p-4 rounded-lg border transition-colors duration-150",
                        active ? "border-brand-500 bg-brand-50/40" : "border-border bg-white hover:border-brand-300"
                      )}
                    >
                      <div className={cn("w-5 h-5 rounded-full border-2 mt-0.5 shrink-0 grid place-items-center", active ? "border-brand-500" : "border-border")}>
                        {active && <span className="w-2.5 h-2.5 bg-brand-500 rounded-full" />}
                      </div>
                      <Icon className="w-5 h-5 text-brand-500 mt-0.5" />
                      <div className="min-w-0">
                        <div className="font-bold text-ink">{m.label}</div>
                        <div className="text-xs text-[color:var(--color-muted)] mt-0.5">{m.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {method === "card" && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold text-ink mb-1">Card details</h2>
                <div className="flex items-center gap-1.5 text-xs text-[color:var(--color-muted)] mb-5">
                  <Lock className="w-3 h-3" /> Sandbox — do not enter real card details
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-[color:var(--color-muted)] mb-1 block">Cardholder name</label>
                    <Input placeholder="Jane Valuer" defaultValue="Jane Valuer" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-wider font-bold text-[color:var(--color-muted)] mb-1 block">Card number</label>
                    <Input placeholder="•••• •••• •••• ••••" defaultValue="4242 4242 4242 4242" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-[color:var(--color-muted)] mb-1 block">Expiry</label>
                    <Input placeholder="MM/YY" defaultValue="12/28" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider font-bold text-[color:var(--color-muted)] mb-1 block">CVC</label>
                    <Input placeholder="123" defaultValue="123" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {method !== "card" && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold text-ink mb-3">{method === "bpay" ? "BPAY details" : "EFT details"}</h2>
                <div className="rounded-lg bg-surface border border-border p-5 text-sm space-y-2">
                  {method === "bpay" ? (
                    <>
                      <div className="flex justify-between"><span className="text-[color:var(--color-muted)]">Biller code</span><span className="font-mono font-bold">194721</span></div>
                      <div className="flex justify-between"><span className="text-[color:var(--color-muted)]">Customer ref</span><span className="font-mono font-bold">{invoices[0]?.id || "—"}</span></div>
                      <div className="text-xs text-[color:var(--color-muted)] pt-2 border-t border-border">Invoice will be marked pending in iMIS; paid status updates on bank reconciliation (2–3 business days).</div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between"><span className="text-[color:var(--color-muted)]">BSB</span><span className="font-mono font-bold">062-001</span></div>
                      <div className="flex justify-between"><span className="text-[color:var(--color-muted)]">Account</span><span className="font-mono font-bold">10234567</span></div>
                      <div className="flex justify-between"><span className="text-[color:var(--color-muted)]">Account name</span><span className="font-medium">Australian Property Institute Ltd</span></div>
                      <div className="flex justify-between"><span className="text-[color:var(--color-muted)]">Reference</span><span className="font-mono font-bold">{invoices[0]?.id || "—"}</span></div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <aside className="lg:sticky lg:top-10 self-start space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-sm uppercase tracking-wider font-bold text-[color:var(--color-muted)] mb-3">Summary</h3>
              <ul className="text-sm space-y-1.5 mb-4">
                {invoices.map((i) => (
                  <li key={i.id} className="flex justify-between gap-2">
                    <span className="text-ink/70 truncate">{i.description}</span>
                    <span className="font-medium shrink-0">{formatCurrency(i.total)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between pt-3 border-t border-border">
                <span className="font-bold text-ink">Total</span>
                <span className="font-bold text-brand-500 text-xl">{formatCurrency(total)}</span>
              </div>
              <Button variant="accent" className="w-full mt-5" size="lg" onClick={handleSubmit} disabled={processing}>
                {processing ? "Processing payment…" : `Pay ${formatCurrency(total)}`}
              </Button>
              <div className="mt-3 text-xs text-[color:var(--color-muted)] flex items-start gap-1.5">
                <Database className="w-3 h-3 mt-0.5 shrink-0" />
                <span>iMIS write on confirmation: invoice status, receipt, member renewal date.</span>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-5xl px-6 py-10">Loading…</div>}>
      <PaymentContent />
    </Suspense>
  );
}
