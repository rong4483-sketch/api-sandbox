"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Receipt, Award } from "lucide-react";
import { CpdProgress } from "@/components/cockpit/CpdProgress";
import { RenewalAlert } from "@/components/cockpit/RenewalAlert";
import { QuickActions } from "@/components/cockpit/QuickActions";
import { MembershipSkeleton } from "@/components/skeletons/MembershipSkeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { currentMember, recentActivity } from "@/lib/mock/member";
import { formatDate } from "@/lib/utils";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function MembershipDashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
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
      <motion.div initial="hidden" animate="show" variants={staggerContainer}>
        <motion.div variants={fadeUp} className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <div className="text-sm text-[color:var(--color-muted)] mb-1">{greeting},</div>
            <h1 className="text-[2.5rem] font-bold text-brand-500">{currentMember.firstName} {currentMember.lastName}</h1>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="default">{currentMember.grade}</Badge>
              {currentMember.certifications.map((c) => (
                <Badge key={c} variant="accent">{c}</Badge>
              ))}
              <Badge variant="muted">Member #{currentMember.memberNumber}</Badge>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-6"><RenewalAlert /></motion.div>

        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 mb-6">
          <CpdProgress />
          <QuickActions />
        </motion.div>

        <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader><CardTitle className="text-lg">Recent activity</CardTitle></CardHeader>
            <CardContent>
              <ul className="divide-y divide-border -mx-6">
                {recentActivity.map((a) => {
                  const Icon = a.type === "cpd" ? Award : a.type === "invoice" ? Receipt : FileText;
                  return (
                    <li key={a.id} className="px-6 py-3 flex items-center gap-3 hover:bg-surface transition-colors duration-200">
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
              <div className="text-xs uppercase tracking-wider text-accent-400 mb-2 font-bold">Professional record</div>
              <h3 className="text-2xl font-bold mb-3">Your CPV certification</h3>
              <p className="text-sm text-white/80 mb-6 flex-1">
                Member since {formatDate(currentMember.memberSince)}. Your PI Insurance is current via the APIV scheme.
              </p>
              <a href="https://felix.api.org.au/products/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-500 no-underline hover:no-underline">
                Browse CPD courses & events →
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
