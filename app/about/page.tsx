"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lightbulb, Users, Shield, ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/lib/motion";

const values = [
  { label: "Innovation", desc: "To lead an innovation agenda", icon: Lightbulb },
  { label: "Inclusivity", desc: "To embrace inclusivity", icon: Users },
  { label: "Courage", desc: "To act courageously", icon: Shield },
];

const objectives = [
  { label: "Future Focused", desc: "Supporting the sector to respond and adapt to a changing operational landscape." },
  { label: "A Strong and Sustainable Association", desc: "The foundation supporting our Members." },
  { label: "Powerful Voice", desc: "Raise the profile and drive positive change for the property profession." },
  { label: "Skilled Professionals", desc: "Nurture skilled and confident property professionals." },
];

const timeline = [
  { year: "1926", event: "Founded as the Commonwealth Institute of Valuers & 1st division established." },
  { year: "1941", event: "First Convention." },
  { year: "1962", event: "First Female Member." },
  { year: "1991", event: "Renamed to Australian Institute of Valuers & Land Economists Incorporated." },
  { year: "1998", event: "Renamed to Australian Property Institute Incorporated." },
  { year: "2016", event: "API becomes a unified national institute (API Limited)." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="About API"
        description="Our journey so far."
      />

      <motion.div initial="hidden" animate="show" variants={staggerContainer} className="space-y-24">
        {/* About Us */}
        <motion.section variants={fadeUp}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-[2rem] font-bold text-brand-500 tracking-[-0.02em]">About Us</h2>
            <Badge variant="accent" className="text-sm">Close to 8,000 Members</Badge>
          </div>
          <div className="space-y-4 text-ink/80 leading-relaxed max-w-3xl">
            <p>
              Leading the industry, we set and maintain the highest standards of professional practice,
              education, ethics, and professional conduct for our Members. As a result, the work of the
              API raises the bar for the entire property profession.
            </p>
            <p>
              Representing a wide range of property professionals, we advocate for our Members with a
              range of stakeholders, providing the professional recognition each Member deserves. In turn,
              all Members of the API are highly qualified, highly skilled professionals with up-to-date
              professional development and experience.
            </p>
            <p>
              Our Members can be found across all sectors of the property profession &ndash; in private
              practice and in the public sector. This broad base of qualified and skilled professionals is
              unique to the API as we are dedicated to expanding the expertise and knowledge of our Members,
              building a strong base for the future of the property profession.
            </p>
          </div>
        </motion.section>

        {/* Vision */}
        <motion.section variants={fadeUp}>
          <h2 className="text-[2rem] font-bold text-brand-500 tracking-[-0.02em] mb-4">Vision</h2>
          <p className="text-xl text-ink/80 italic max-w-2xl">
            &ldquo;To shape the future of property professionals.&rdquo;
          </p>
        </motion.section>

        {/* Values */}
        <motion.section variants={fadeUp}>
          <h2 className="text-[2rem] font-bold text-brand-500 tracking-[-0.02em] mb-6">Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.label}>
                  <CardContent className="p-7">
                    <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-500 grid place-items-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{v.label}</h3>
                    <p className="text-sm text-ink/75">{v.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.section>

        {/* Strategic Objectives */}
        <motion.section variants={fadeUp}>
          <h2 className="text-[2rem] font-bold text-brand-500 tracking-[-0.02em] mb-6">Strategic Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((o) => (
              <Card key={o.label}>
                <CardContent className="p-7">
                  <h3 className="text-lg font-bold mb-2">{o.label}</h3>
                  <p className="text-sm text-ink/75">{o.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* A Brief History */}
        <motion.section variants={fadeUp}>
          <h2 className="text-[2rem] font-bold text-brand-500 tracking-[-0.02em] mb-8">A Brief History</h2>
          <div className="relative pl-8 border-l-2 border-accent-500 space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full bg-accent-500 border-2 border-white" />
                <div className="text-sm font-bold text-accent-700 mb-1">{t.year}</div>
                <p className="text-ink/80">{t.event}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Link to Committees */}
        <motion.section variants={fadeUp}>
          <Card className="bg-brand-500 text-white border-0">
            <CardContent className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Committees</h3>
                <p className="text-white/80">
                  Working with industry professionals to help shape the future.
                </p>
              </div>
              <Button asChild variant="accent" size="lg">
                <Link href="/about/our-committees" className="no-underline hover:no-underline">
                  View committees <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </PageShell>
  );
}
