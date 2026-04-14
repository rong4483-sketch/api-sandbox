"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard, BookOpen, Library, Megaphone, Users, ArrowRight, CheckCircle2, XCircle, Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, fadeUp } from "@/lib/motion";

const pillars = [
  {
    label: "Membership Portal", href: "/membership", icon: LayoutDashboard,
    purpose: "Personalised member admin — CPD, renewals, invoices, profile.",
    fixes: "Replaces the fragmented 'Hub' with a true authenticated home base.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=340&fit=crop&q=80",
    imageAlt: "Modern Australian commercial building facade",
  },
  {
    label: "Education", href: "/education", icon: BookOpen,
    purpose: "All learning pathways — certifications, accredited courses, webinars.",
    fixes: "Ends the Education vs Membership menu overlap.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=340&fit=crop&q=80",
    imageAlt: "Professional development seminar in progress",
  },
  {
    label: "Standards", href: "/standards", icon: Library,
    purpose: "Searchable valuation protocols and standards archive.",
    fixes: "Surfaces 20+ years of standards in one indexed, filterable home.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=340&fit=crop&q=80",
    imageAlt: "Compliance documentation and professional standards",
  },
  {
    label: "Advocacy", href: "/advocacy", icon: Megaphone,
    purpose: "National campaigns, policy submissions, insights reports.",
    fixes: "Gives profession-facing content a dedicated, discoverable home.",
    image: "https://images.unsplash.com/photo-1577415124269-fc1140354571?w=600&h=340&fit=crop&q=80",
    imageAlt: "Australian Parliament House in Canberra",
  },
  {
    label: "Directory", href: "/directory", icon: Users,
    purpose: "Public 'Find a Property Professional' with modern filters.",
    fixes: "Live filters, postcode/suburb lookup, plain-language expertise.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=340&fit=crop&q=80",
    imageAlt: "Property valuer conducting a site inspection",
  },
];

const beforeAfter = [
  { failure: "No CPV-specific CPD requirements visible on-site", fix: "/education/cpv lists full structured + unstructured breakdown on the page itself" },
  { failure: "No Student → Associate upgrade pathway exists",    fix: "/membership/upgrade multi-step wizard with eligibility, evidence, payment, confirmation" },
  { failure: "FaPP filters fail silently — no visual response",  fix: "/directory filters update results and count on every keystroke" },
  { failure: "Blank white screen on scroll (homepage + reports)",fix: "Framer Motion transitions replace legacy scroll animations causing GPU compositing failure" },
  { failure: "Valuation Insights buried under 'Products & Services'", fix: "Elevated as a flagship card in /advocacy with dedicated detail" },
  { failure: "'The Hub' label, URL, breadcrumb and H1 all differ", fix: "Coherent pillar naming across nav, URL, breadcrumb, and H1" },
];

export default function HomePage() {
  return (
    <PageShell constrain={false}>
      {/* HERO — full-width with architectural image + navy overlay */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop&q=80')",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-brand-500/70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <Badge variant="accent" className="bg-accent-500 text-white mb-6 text-sm px-4 py-1.5">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" /> Sandbox preview · Stakeholder review
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-[3rem] md:text-[4.5rem] font-bold text-white leading-[1.05] tracking-[-0.02em]">
              A National-First<br />
              <span className="text-accent-400">Australian Property Institute.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-xl text-white/85 max-w-2xl leading-relaxed">
              One unified member experience. Five pillars. Zero dead ends. This is what the API
              could look like in 2026 — built around member utility, not organisational silos.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-action-500 hover:bg-action-600 text-white">
                <Link href="/login" className="no-underline hover:no-underline">Sign in as demo member <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link href="/directory" className="no-underline hover:no-underline">Public: Find a professional</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PILLAR GRID — 6rem section padding, cards with image containers */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-action-500 mb-3">The Pillar Model</div>
          <h2 className="text-[2.5rem] font-bold text-brand-500 leading-tight tracking-[-0.02em]">
            Five pillars, built around how members actually work.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.href} variants={fadeUp}>
                <Link href={p.href} className="group block h-full no-underline hover:no-underline">
                  <Card className="h-full transition-all duration-200 group-hover:border-action-500 group-hover:-translate-y-0.5">
                    {/* Image container */}
                    <div className="relative h-44 overflow-hidden rounded-t-lg bg-surface">
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <div className="h-10 w-10 rounded-lg bg-brand-500 text-white grid place-items-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{p.label}</h3>
                      <p className="text-sm text-ink/75 mb-4">{p.purpose}</p>
                      <p className="text-xs text-[color:var(--color-muted)] border-t border-border pt-3 mb-3">
                        <span className="font-bold text-brand-500">Fixes: </span>{p.fixes}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm text-action-500 font-medium">
                        Open {p.label} <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* BEFORE / AFTER — alternating background */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-action-500 mb-3">April 2026 Audit</div>
            <h2 className="text-[2.5rem] font-bold text-brand-500 leading-tight tracking-[-0.02em]">
              What&apos;s broken. What we&apos;ve fixed.
            </h2>
            <p className="mt-3 text-ink/70">
              Each critical failure identified in the audit maps to a specific fix in this sandbox.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {beforeAfter.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-[24px_1fr] gap-x-3 items-start py-4 border-b border-border"
              >
                <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="text-sm line-through text-ink/60">{row.failure}</div>
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div className="text-sm text-ink font-medium">{row.fix}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-brand-500 mb-4 tracking-[-0.02em]">
          See it in action.
        </h2>
        <p className="text-lg text-ink/70 mb-8 max-w-xl mx-auto">
          Sign in as Jane Valuer (Associate, CPV) to explore the Membership Portal — or jump straight into the public Directory.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg"><Link href="/login" className="no-underline hover:no-underline">Sign in</Link></Button>
          <Button asChild size="lg" variant="outline"><Link href="/standards" className="no-underline hover:no-underline">Browse standards</Link></Button>
        </div>
      </section>
    </PageShell>
  );
}
