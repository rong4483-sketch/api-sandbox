"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, Upload, CreditCard, Sparkles, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const steps = [
  { id: 1, label: "Eligibility",  icon: FileText },
  { id: 2, label: "Evidence",     icon: Upload },
  { id: 3, label: "Payment",      icon: CreditCard },
  { id: 4, label: "Confirmation", icon: Sparkles },
];

export function UpgradeStepper() {
  const [step, setStep] = useState(1);
  const [eligible, setEligible] = useState({ degree: true, supervised: true, pi: false });
  const canProceed = eligible.degree && eligible.supervised && eligible.pi;

  return (
    <div className="space-y-8">
      {/* Stepper */}
      <div className="flex items-center justify-between">
        {steps.map((s, i) => {
          const active = step === s.id;
          const done = step > s.id;
          const Icon = s.icon;
          return (
            <div key={s.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-11 h-11 rounded-full grid place-items-center transition-all
                    ${done ? "bg-brand-500 text-white" : active ? "bg-brand-500 text-white ring-4 ring-brand-500/20" : "bg-white border-2 border-border text-[color:var(--color-muted)]"}`}
                >
                  {done ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                <div className={`mt-2 text-xs font-medium ${active ? "text-ink" : "text-[color:var(--color-muted)]"}`}>{s.label}</div>
              </div>
              {i < steps.length - 1 && (
                <div className={`h-0.5 flex-1 mx-2 mb-6 transition-colors ${done ? "bg-brand-500" : "bg-border"}`} />
              )}
            </div>
          );
        })}
      </div>

      <Card>
        <CardContent className="p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
                <h2 className="text-2xl font-serif font-semibold mb-1">Eligibility check</h2>
                <p className="text-sm text-[color:var(--color-muted)] mb-6">Confirm you meet the Associate membership requirements.</p>

                <div className="space-y-3">
                  <EligibilityItem
                    label="Accredited tertiary property qualification"
                    desc="Bachelor's degree or equivalent in Property, Valuation, or related discipline."
                    checked={eligible.degree}
                    onChange={(v) => setEligible({ ...eligible, degree: v })}
                  />
                  <EligibilityItem
                    label="2+ years supervised valuation practice"
                    desc="Under an API-registered CPV or equivalent supervisor."
                    checked={eligible.supervised}
                    onChange={(v) => setEligible({ ...eligible, supervised: v })}
                  />
                  <EligibilityItem
                    label="Current Professional Indemnity Insurance"
                    desc="Via APIV scheme or equivalent provider."
                    checked={eligible.pi}
                    onChange={(v) => setEligible({ ...eligible, pi: v })}
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="2" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
                <h2 className="text-2xl font-serif font-semibold mb-1">Upload supporting evidence</h2>
                <p className="text-sm text-[color:var(--color-muted)] mb-6">Provide the documents to support your upgrade application.</p>

                <div className="space-y-4">
                  <UploadSlot label="Academic transcript" fileName="Transcript_2019.pdf" />
                  <UploadSlot label="Supervisor reference letter" fileName="Reference_McAllister.pdf" />
                  <UploadSlot label="PI Insurance Certificate of Currency" />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="3" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
                <h2 className="text-2xl font-serif font-semibold mb-1">Payment</h2>
                <p className="text-sm text-[color:var(--color-muted)] mb-6">Associate upgrade fee — fully tax deductible.</p>

                <div className="rounded-2xl border border-border p-6 bg-surface mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-ink/70">Associate Upgrade Fee</span>
                    <span className="font-semibold">$450.00</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-ink/70">Assessment panel fee</span>
                    <span className="font-semibold">$180.00</span>
                  </div>
                  <div className="border-t border-border pt-3 mt-3 flex items-center justify-between">
                    <span className="font-medium">Total (incl. GST)</span>
                    <span className="text-2xl font-serif font-semibold">$630.00</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[color:var(--color-muted)] mb-1">Card number</label>
                    <Input defaultValue="4242 4242 4242 4242" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-[color:var(--color-muted)] mb-1">Expiry</label>
                      <Input defaultValue="08 / 28" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[color:var(--color-muted)] mb-1">CVC</label>
                      <Input defaultValue="123" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-[color:var(--color-muted)]">Sandbox — no real payment will be processed.</p>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="4" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="mx-auto w-20 h-20 rounded-full bg-green-50 grid place-items-center mb-6"
                >
                  <Sparkles className="w-10 h-10 text-green-600" />
                </motion.div>
                <h2 className="text-3xl font-serif font-semibold mb-2">You&apos;re upgraded.</h2>
                <p className="text-ink/70 mb-6 max-w-md mx-auto">
                  Your application is in — you&apos;re now a Provisional Associate pending panel review (typically 14 days).
                </p>
                <Badge variant="success" className="mb-8">Application #UPG-2026-04413 submitted</Badge>
                <div className="flex justify-center gap-3 flex-wrap">
                  <Button asChild><Link href="/cockpit">Back to Cockpit</Link></Button>
                  <Button asChild variant="outline"><Link href="/academy/cpv">Plan my CPV next</Link></Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {step < 4 && (
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
          <Button
            onClick={() => setStep(step + 1)}
            disabled={step === 1 && !canProceed}
          >
            {step === 3 ? "Pay & submit" : "Continue"} <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

function EligibilityItem({ label, desc, checked, onChange }: { label: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all
        ${checked ? "border-brand-500 bg-brand-50" : "border-border bg-white hover:border-brand-300"}`}
    >
      <div className={`mt-0.5 w-5 h-5 rounded-md grid place-items-center transition-colors
        ${checked ? "bg-brand-500 text-white" : "border-2 border-border"}`}>
        {checked && <Check className="w-3.5 h-3.5" />}
      </div>
      <div className="flex-1">
        <div className="font-medium text-ink">{label}</div>
        <div className="text-sm text-[color:var(--color-muted)] mt-0.5">{desc}</div>
      </div>
    </button>
  );
}

function UploadSlot({ label, fileName }: { label: string; fileName?: string }) {
  const [uploaded, setUploaded] = useState(Boolean(fileName));
  const [name, setName] = useState(fileName ?? "");
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white">
      <div className={`w-10 h-10 rounded-lg grid place-items-center ${uploaded ? "bg-green-50 text-green-600" : "bg-brand-50 text-brand-500"}`}>
        {uploaded ? <Check className="w-5 h-5" /> : <Upload className="w-5 h-5" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium">{label}</div>
        <div className="text-xs text-[color:var(--color-muted)] truncate">{uploaded ? name : "PDF up to 5MB"}</div>
      </div>
      <Button
        size="sm"
        variant={uploaded ? "outline" : "default"}
        onClick={() => {
          if (uploaded) { setUploaded(false); setName(""); }
          else { setUploaded(true); setName(`${label.replace(/\s+/g, "_")}.pdf`); }
        }}
      >
        {uploaded ? "Replace" : "Upload"}
      </Button>
    </div>
  );
}
