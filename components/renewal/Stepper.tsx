"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { num: 1, label: "Select invoices" },
  { num: 2, label: "Review" },
  { num: 3, label: "Payment" },
  { num: 4, label: "Confirmation" },
];

export function RenewalStepper({ current }: { current: 1 | 2 | 3 | 4 }) {
  return (
    <ol className="flex items-center gap-0 mb-10 border border-border rounded-2xl bg-white overflow-hidden shadow-sm">
      {steps.map((s) => {
        const done = s.num < current;
        const active = s.num === current;
        return (
          <li
            key={s.num}
            className={cn(
              "flex items-center gap-3 px-5 py-4 flex-1 border-r border-border last:border-r-0 text-sm transition-colors duration-200",
              active && "bg-brand-500 text-white",
              done && "bg-brand-50 text-brand-700"
            )}
          >
            <div
              className={cn(
                "w-7 h-7 rounded-full grid place-items-center text-xs font-semibold shrink-0",
                active && "bg-white text-brand-500 ring-2 ring-white/60",
                done && "bg-brand-500 text-white",
                !active && !done && "bg-white text-muted-soft border border-border-strong"
              )}
            >
              {done ? <Check className="w-4 h-4" /> : s.num}
            </div>
            <div className={cn("font-medium whitespace-nowrap", !active && !done && "text-muted")}>
              Step {s.num} · {s.label}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
