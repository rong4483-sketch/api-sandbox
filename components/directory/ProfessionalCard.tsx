"use client";

import { motion } from "framer-motion";
import { MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Professional } from "@/lib/mock/professionals";

export function ProfessionalCard({ p }: { p: Professional }) {
  const initials = `${p.firstName[0]}${p.lastName[0]}`;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full transition-all duration-200 hover:border-action-500">
        <CardContent className="p-5">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-brand-500 text-white grid place-items-center font-semibold text-sm shrink-0">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-ink truncate">{p.firstName} {p.lastName}</div>
              <div className="text-xs text-[color:var(--color-muted)] truncate">{p.firm}</div>
            </div>
          </div>

          <div className="space-y-2 text-sm text-ink/75 mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[color:var(--color-muted)]" />
              {p.suburb} {p.postcode}, {p.state}
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[color:var(--color-muted)]" />
              {p.certifications.join(" · ")} · {p.yearsExperience} years
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {p.expertise.map((e) => (
              <Badge key={e} variant="default" className="text-[0.7rem]">{e}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
