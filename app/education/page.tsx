"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Video, School, ArrowRight, Clock } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/lib/mock/certifications";
import { staggerContainer, fadeUp } from "@/lib/motion";

const pathways = [
  { label: "Certifications", icon: Award, desc: "CPV, RPV, and specialist certifications — the credentials that define the profession.", href: "#certifications", count: `${certifications.length} credentials` },
  { label: "University-Accredited Courses", icon: School, desc: "Bachelor's and postgraduate programs accredited by the API across 12 partner universities.", href: "#", count: "12 partners" },
  { label: "Webinars & Masterclasses", icon: Video, desc: "CPD-endorsed live and on-demand learning — book, attend, and have hours logged automatically.", href: "#", count: "40+ per year" },
];

export default function EducationPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Education"
        title="Learning that counts — towards your credential, and your career."
        description="One home for every API learning pathway. Certifications, accredited degrees, and endorsed CPD — with the requirements made visible, not hidden in PDFs."
      />

      <motion.div initial="hidden" animate="show" variants={staggerContainer} className="grid md:grid-cols-3 gap-6 mb-16">
        {pathways.map((p) => {
          const Icon = p.icon;
          return (
            <motion.div key={p.label} variants={fadeUp}>
              <Card className="h-full transition-all duration-200 hover:border-brand-500">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-500 grid place-items-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{p.label}</h3>
                  <p className="text-sm text-ink/75 mb-5">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="muted">{p.count}</Badge>
                    <Link href={p.href} className="text-sm font-medium text-brand-500 inline-flex items-center gap-1 hover:gap-2 transition-all no-underline hover:no-underline">
                      Explore <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <section id="certifications">
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-2">Certifications</div>
          <h2 className="text-[2rem] font-bold text-brand-500 tracking-[-0.02em]">Professional credentials</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <Link key={c.slug} href={`/education/${c.slug}`} className="block group no-underline hover:no-underline">
              <Card className="h-full transition-all duration-200 group-hover:border-brand-500">
                <CardContent className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="default" className="text-base px-3 py-1">{c.code}</Badge>
                    <Badge variant="muted"><Clock className="w-3 h-3 mr-1 inline" />{c.indicativeDurationMonths} months</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{c.name}</h3>
                  <p className="text-sm text-ink/75 mb-4">{c.tagline}</p>
                  <div className="flex items-center text-sm font-medium text-brand-500 group-hover:gap-2 gap-1 transition-all">
                    View requirements <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
