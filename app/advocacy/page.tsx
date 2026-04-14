"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Megaphone, ScrollText, ArrowRight, Calendar } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { insights, type InsightCategory } from "@/lib/mock/insights";
import { formatDate } from "@/lib/utils";
import { staggerContainer, fadeUp } from "@/lib/motion";

const categoryIcons: Record<InsightCategory, typeof FileText> = {
  Report: ScrollText,
  Submission: FileText,
  Campaign: Megaphone,
};

export default function AdvocacyPage() {
  const [tab, setTab] = useState<"all" | InsightCategory>("all");

  const featured = insights.find((i) => i.featured);
  const list = insights
    .filter((i) => !i.featured)
    .filter((i) => (tab === "all" ? true : i.category === tab));

  return (
    <PageShell>
      <PageHeader
        eyebrow="Advocacy Hub"
        title="National campaigns. Industry-shaping work."
        description="The API's voice on policy, profession, and public trust — submissions, flagship reports, and consumer campaigns."
      />

      {/* Featured */}
      {featured && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Card className="overflow-hidden border-0">
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <div className="relative bg-brand-500 p-10 text-white flex flex-col justify-between min-h-[320px]">
                <div className="relative">
                  <Badge variant="accent" className="bg-accent-500 text-white mb-4">Flagship</Badge>
                  <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-3 tracking-[-0.02em]">{featured.title}</h2>
                  <p className="text-white/80">{featured.excerpt}</p>
                </div>
                <div className="relative flex items-center gap-4 mt-6">
                  <Button variant="accent">Read the report <ArrowRight className="w-4 h-4" /></Button>
                  <span className="text-sm text-white/60 flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(featured.date)}</span>
                </div>
              </div>
              <div className="p-10 bg-surface">
                <h3 className="text-xl font-bold mb-4">What&apos;s inside</h3>
                <ul className="space-y-3 text-sm text-ink/80">
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 shrink-0" /> National commercial yield compression analysis</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 shrink-0" /> ESG & climate-risk pricing in 2026 markets</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 shrink-0" /> Office sector outlook post-hybrid work</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 shrink-0" /> Capital-flows and foreign investment trends</li>
                  <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 shrink-0" /> Retail centre recovery index</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Report">Reports</TabsTrigger>
          <TabsTrigger value="Submission">Submissions</TabsTrigger>
          <TabsTrigger value="Campaign">Campaigns</TabsTrigger>
        </TabsList>

        <TabsContent value={tab}>
          <motion.div
            key={tab}
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {list.map((i) => {
              const Icon = categoryIcons[i.category];
              return (
                <motion.div key={i.id} variants={fadeUp}>
                  <Card className="h-full transition-all duration-200 hover:border-action-500 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-500 grid place-items-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="muted" className="mb-3">{i.category}</Badge>
                      <h3 className="text-lg font-bold mb-2 leading-snug">{i.title}</h3>
                      <p className="text-sm text-ink/70 mb-4">{i.excerpt}</p>
                      <div className="text-xs text-[color:var(--color-muted)] flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {formatDate(i.date)}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}
