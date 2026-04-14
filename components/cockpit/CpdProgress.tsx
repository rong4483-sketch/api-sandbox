"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { currentMember } from "@/lib/mock/member";

export function CpdProgress() {
  const { structured, unstructured, requiredStructured, requiredUnstructured, periodEnd } = currentMember.cpd;
  const completed = structured + unstructured;
  const total = requiredStructured + requiredUnstructured;
  const pct = Math.round((completed / total) * 100);
  const structuredPct = Math.round((structured / total) * 100);
  const unstructuredPct = Math.round((unstructured / total) * 100);

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="w-5 h-5 text-brand-500" />
              <CardTitle className="text-lg">CPD Progress</CardTitle>
            </div>
            <CardDescription>
              Period ending {new Date(periodEnd).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
            </CardDescription>
          </div>
          <Badge variant={pct >= 100 ? "success" : pct >= 50 ? "default" : "warning"}>
            {pct}% complete
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-3 flex items-end gap-2">
          <span className="text-4xl font-serif font-semibold text-ink">{completed}</span>
          <span className="text-lg text-[color:var(--color-muted)] pb-1">/ {total} hours</span>
        </div>

        {/* Segmented bar */}
        <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden flex">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${structuredPct}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-brand-500 h-full"
            aria-label="Structured CPD"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${unstructuredPct}%` }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="bg-accent-500 h-full"
            aria-label="Unstructured CPD"
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]">Structured</span>
            </div>
            <div className="text-2xl font-semibold">{structured}<span className="text-sm text-[color:var(--color-muted)] font-normal"> / {requiredStructured} hrs</span></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]">Unstructured</span>
            </div>
            <div className="text-2xl font-semibold">{unstructured}<span className="text-sm text-[color:var(--color-muted)] font-normal"> / {requiredUnstructured} hrs</span></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
