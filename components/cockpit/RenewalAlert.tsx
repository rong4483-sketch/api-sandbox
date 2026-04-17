"use client";

import Link from "next/link";
import { AlertTriangle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { currentMember } from "@/lib/mock/member";
import { daysUntil, formatDate } from "@/lib/utils";

export function RenewalAlert() {
  const due = currentMember.renewalDue;
  const days = daysUntil(due);
  const urgent = days <= 45;

  return (
    <Card className={urgent ? "border-amber-300 bg-amber-50/40" : ""}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className={`w-10 h-10 rounded-xl grid place-items-center ${urgent ? "bg-amber-100 text-amber-700" : "bg-brand-50 text-brand-500"}`}>
              {urgent ? <AlertTriangle className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-sm font-semibold text-ink mb-0.5">
                {urgent ? "Renewal due soon" : "Upcoming renewal"}
              </div>
              <div className="text-sm text-ink/70">
                Due {formatDate(due)} · <span className={urgent ? "font-semibold text-amber-700" : ""}>{days} days remaining</span>
              </div>
            </div>
          </div>
          <Button size="sm" variant={urgent ? "accent" : "outline"} asChild>
            <Link href="/membership/renewals" className="no-underline hover:no-underline">Renew now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
