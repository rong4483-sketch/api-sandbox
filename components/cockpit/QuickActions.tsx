"use client";

import Link from "next/link";
import { FileDown, ArrowUpCircle, Plus, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const actions = [
  { label: "Download certificate", icon: FileDown, href: "#", accent: false },
  { label: "Upgrade membership",   icon: ArrowUpCircle, href: "/membership/upgrade", accent: true },
  { label: "Log CPD activity",     icon: Plus, href: "#", accent: false },
  { label: "Update details",       icon: User, href: "#", accent: false },
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
              className={`group flex flex-col items-start gap-2 rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm
                ${a.accent
                  ? "border-accent-500/40 bg-accent-500/5 hover:border-accent-500"
                  : "border-border bg-white hover:border-brand-300"}`}
            >
              <div className={`w-9 h-9 rounded-lg grid place-items-center
                ${a.accent ? "bg-accent-500 text-brand-900" : "bg-brand-50 text-brand-500 group-hover:bg-brand-500 group-hover:text-white"} transition-colors`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-ink leading-tight">{a.label}</span>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
