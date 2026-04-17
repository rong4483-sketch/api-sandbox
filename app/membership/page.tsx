"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Receipt, Award, FileCheck2, ArrowRight } from "lucide-react";
import { CpdProgress } from "@/components/cockpit/CpdProgress";
import { RenewalAlert } from "@/components/cockpit/RenewalAlert";
import { QuickActions } from "@/components/cockpit/QuickActions";
import { MembershipSkeleton } from "@/components/skeletons/MembershipSkeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { currentMember, recentActivity } from "@/lib/mock/member";
import { formatDate } from "@/lib/utils";

export default function MembershipDashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="skeleton h-10 w-80 mb-8" />
        <MembershipSkeleton />
      </div>
    );
  }

  const greeting = new Date().getHours() < 12 ? "Good morning" : new Date().getHours() < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <div className="text-sm text-[color:var(--color-muted)] mb-1">{greeting},</div>
          <h1 className="text-[2.5rem] font-bold text-brand-500 tracking-[-0.02em]">{currentMember.firstName} {currentMember.lastName}</h1>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="default">{currentMember.grade}</Badge>
            {currentMember.certifications.map((c) => (
              <Badge key={c} variant="accent">{c}</Badge>
            ))}
            <Badge variant="muted">Member #{currentMember.memberNumber}</Badge>
          </div>
        </div>
      </div>

      <div className="mb-6"><RenewalAlert /></div>

      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <CpdProgress />
        <QuickActions />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <Card className="md:col-span-2">
          <CardHeader><CardTitle className="text-lg">Recent activity</CardTitle></CardHeader>
          <CardContent>
            <ul className="divide-y divide-border -mx-6">
              {recentActivity.map((a) => {
                const Icon = a.type === "cpd" ? Award : a.type === "invoice" ? Receipt : FileText;
                return (
                  <li key={a.id} className="px-6 py-3 flex items-center gap-3 hover:bg-surface transition-colors duration-150">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-500 grid place-items-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-ink truncate">{a.title}</div>
                      <div className="text-xs text-[color:var(--color-muted)]">{formatDate(a.when)}{a.hours ? ` · ${a.hours} hrs CPD` : ""}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-brand-500 text-white border-0">
          <CardContent className="p-6 h-full flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-accent-500 text-brand-900 grid place-items-center mb-4">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-2">PropertyPRO</h3>
            <p className="text-sm text-white/80 mb-4 flex-1">
              Residential mortgage valuation templates and the PropertyPRO Plus application — provisioned via your iMIS record.
            </p>
            <Link href="/membership/propertypro" className="inline-flex items-center gap-2 text-sm font-medium text-accent-400 no-underline hover:no-underline">
              Open PropertyPRO <ArrowRight className="w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
