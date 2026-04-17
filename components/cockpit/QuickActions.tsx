"use client";

import Link from "next/link";
import { FileCheck2, ArrowUpCircle, Plus, Receipt } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const actions = [
  { label: "Renew membership", icon: Receipt, href: "/membership/renewals", accent: true },
  { label: "Open PropertyPRO", icon: FileCheck2, href: "/membership/propertypro", accent: false },
  { label: "Log CPD activity", icon: Plus, href: "/education/cpd", accent: false },
  { label: "Upgrade grade", icon: ArrowUpCircle, href: "/membership/upgrade", accent: false },
];

export function QuickActions() {
  return (
    <Card className="h-full">
      <CardHeader><CardTitle className="text-lg">Quick actions</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {actions.map((a) => {
          const Icon = a.icon;
          return (
            <Link
              key={a.label}
              href={a.href}
              className={`group flex flex-col items-start gap-2 rounded-lg border p-4 transition-colors duration-150 no-underline hover:no-underline
                ${a.accent
                  ? "border-brand-500 bg-brand-500 hover:bg-brand-700 hover:border-brand-700"
                  : "border-border bg-white hover:border-brand-300"}`}
            >
              <div className={`w-9 h-9 rounded-lg grid place-items-center
                ${a.accent ? "bg-white/15 text-white" : "bg-brand-50 text-brand-500"}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-sm font-medium leading-tight ${a.accent ? "text-white" : "text-ink"}`}>{a.label}</span>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
