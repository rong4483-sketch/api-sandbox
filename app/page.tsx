import Link from "next/link";
import {
  LayoutDashboard, BookOpen, Library, Megaphone, Users, ArrowRight, Building2, Users2,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    label: "Membership Portal",
    href: "/membership",
    icon: LayoutDashboard,
    purpose: "Authenticated member home — CPD, renewals, invoices, PropertyPRO.",
    meta: "Authenticated · iMIS",
  },
  {
    label: "Education",
    href: "/education",
    icon: BookOpen,
    purpose: "Certifications, accredited courses, CPD events, textbooks.",
    meta: "Public catalogue · gated booking",
  },
  {
    label: "Standards",
    href: "/standards",
    icon: Library,
    purpose: "Searchable valuation protocols and professional standards archive.",
    meta: "Public",
  },
  {
    label: "Advocacy",
    href: "/advocacy",
    icon: Megaphone,
    purpose: "National campaigns, policy submissions, insights reports.",
    meta: "Public",
  },
  {
    label: "Directory",
    href: "/directory",
    icon: Users,
    purpose: "Find a Property Professional — postcode, expertise, grade filters.",
    meta: "Public",
  },
  {
    label: "About",
    href: "/about",
    icon: Users2,
    purpose: "Board, Executive Team, Staff, Committees, Governance.",
    meta: "Full hierarchy",
  },
];

const proof = [
  { title: "Five pillars + About", detail: "Coherent national-first IA. APIV, PropSec and NPC2026 excluded from navigation." },
  { title: "iMIS-authenticated core", detail: "Public browse, member booking. PropertyPRO and renewals live behind sign-in." },
  { title: "Renewals PoC", detail: "Invoice → Review → Payment → Confirmation. Simulates iMIS read/write at each step." },
  { title: "Governance transparency", detail: "Board, executive, staff, committees and state divisions — all linked from /about." },
];

export default function HomePage() {
  return (
    <PageShell constrain={false}>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=700&fit=crop&q=80')",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-brand-500/80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <Badge variant="accent" className="bg-accent-500 text-white mb-5 text-xs px-3 py-1">
              Sandbox preview · API Board review
            </Badge>
            <h1 className="text-[3rem] md:text-[4rem] font-bold text-white leading-[1.05] tracking-[-0.02em]">
              A National-First<br />
              <span className="text-accent-400">Australian Property Institute.</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">
              Five pillars. One unified member experience. Architected for the WordPress-over-iMIS path — public content layered cleanly over authenticated member functions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/login" className="no-underline hover:no-underline">Sign in as demo member <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link href="/directory" className="no-underline hover:no-underline">Public: Find a professional</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-2">Information architecture</div>
            <h2 className="text-[2.25rem] font-bold text-brand-500 tracking-[-0.02em]">Five pillars plus About.</h2>
          </div>
          <p className="text-sm text-ink/70 max-w-md">Each pillar is a discrete user journey with a clear authentication boundary. No menu overlaps, no dead ends, no duplicated content.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <Link key={p.href} href={p.href} className="group block h-full no-underline hover:no-underline">
                <Card className="h-full transition-colors duration-150 group-hover:border-brand-500">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-lg bg-brand-50 text-brand-500 grid place-items-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs text-[color:var(--color-muted)]">{p.meta}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-ink">{p.label}</h3>
                    <p className="text-sm text-ink/70 mb-4">{p.purpose}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-brand-500 font-medium">
                      Open <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Architecture notice */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-4 h-4 text-brand-500" />
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">System architecture</div>
            </div>
            <h2 className="text-[1.75rem] font-bold text-brand-500 tracking-[-0.02em] leading-tight">WordPress over iMIS.</h2>
            <p className="text-sm text-ink/70 mt-3">This sandbox demonstrates the proposed production architecture: WordPress handles public content; the two existing Dynamics + iMIS databases continue to handle authenticated member functions.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {proof.map((r) => (
              <div key={r.title} className="bg-white border border-border rounded-lg p-5">
                <h3 className="font-bold text-ink mb-1">{r.title}</h3>
                <p className="text-sm text-ink/70">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board demo CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-brand-500 mb-3 tracking-[-0.02em]">Walk the Board through it.</h2>
        <p className="text-ink/70 mb-8 max-w-xl mx-auto">Sign in as Jane Valuer (AAPI, CPV) to explore the Membership Portal, PropertyPRO and the Renewals flow — or jump into the public Directory.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg"><Link href="/login" className="no-underline hover:no-underline">Sign in</Link></Button>
          <Button asChild size="lg" variant="outline"><Link href="/about/board" className="no-underline hover:no-underline">View the Board</Link></Button>
        </div>
      </section>
    </PageShell>
  );
}
