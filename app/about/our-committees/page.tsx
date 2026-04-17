"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Lightbulb,
  Scale,
  BookOpen,
  Home,
  ShieldCheck,
  FlaskConical,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { committees, stateDivisions, type Committee } from "@/lib/mock/governance";

const ICONS: Record<Committee["iconKey"], LucideIcon> = {
  lightbulb: Lightbulb,
  scale: Scale,
  bookOpen: BookOpen,
  home: Home,
  shieldCheck: ShieldCheck,
  flaskConical: FlaskConical,
  graduationCap: GraduationCap,
};

export default function CommitteesPage() {
  return (
    <PageShell>
      <Link
        href="/about"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink mb-6 no-underline hover:no-underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to About
      </Link>
      <PageHeader
        eyebrow="Governance"
        title="Our Committees"
        description="Consultative committees of expert industry professionals who help shape standards, education, innovation and advocacy. A charter governs each committee and stipulates its roles, responsibilities and election cycle."
      />

      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-3xl font-bold text-brand-500 tracking-tight">National committees</h2>
          <span className="text-sm text-muted">{committees.length} committees · click to expand</span>
        </div>

        <Accordion
          type="multiple"
          className="rounded-2xl border border-border divide-y divide-border bg-white"
        >
          {committees.map((c) => {
            const Icon = ICONS[c.iconKey];
            return (
              <AccordionItem
                key={c.slug}
                value={c.slug}
                className="border-0 first:rounded-t-2xl last:rounded-b-2xl"
              >
                <AccordionTrigger className="px-6 py-5 hover:bg-surface hover:no-underline [&[data-state=open]]:bg-surface">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-500 grid place-items-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <div className="text-lg font-semibold text-ink">{c.name}</div>
                      <div className="text-sm text-muted mt-0.5 line-clamp-1">{c.purpose}</div>
                    </div>
                    <div className="hidden md:flex items-center gap-3 text-sm text-muted mr-4 shrink-0">
                      <span>Chair: <span className="text-ink font-medium">{c.chair}</span></span>
                      <span className="text-muted-soft">·</span>
                      <Badge variant="muted">{c.meetingCadence}</Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-8 pt-2">
                  <div className="max-w-3xl">
                    <h4 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">Purpose</h4>
                    <p className="text-body text-ink/85 leading-relaxed mb-8">{c.purposeFull}</p>

                    <h4 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">Leadership</h4>
                    <ul className="space-y-2.5 mb-8">
                      {c.members.filter((m) => m.role === "Chair").map((m) => (
                        <li key={`${m.name}-${m.state}`} className="flex items-start gap-3">
                          <span className="inline-flex items-center justify-center h-6 px-2.5 rounded-md bg-brand-500 text-white text-xs font-semibold shrink-0 mt-0.5 w-28">Chair</span>
                          <span className="flex-1">
                            <span className="font-semibold text-ink text-base">{m.name}</span>
                            <span className="text-muted text-sm">
                              {' '}— {m.grade}
                              {m.designations?.length ? `, ${m.designations.join(', ')}` : ''}
                              {' '}· {m.state}
                              {m.focus ? ` · ${m.focus}` : ''}
                            </span>
                          </span>
                        </li>
                      ))}
                      {c.members.filter((m) => m.role === "Deputy Chair").map((m) => (
                        <li key={`${m.name}-${m.state}`} className="flex items-start gap-3">
                          <span className="inline-flex items-center justify-center h-6 px-2.5 rounded-md border border-brand-500 bg-white text-brand-500 text-xs font-semibold shrink-0 mt-0.5 w-28">Deputy Chair</span>
                          <span className="flex-1">
                            <span className="font-semibold text-ink text-sm">{m.name}</span>
                            <span className="text-muted text-sm">
                              {' '}— {m.grade}
                              {m.designations?.length ? `, ${m.designations.join(', ')}` : ''}
                              {' '}· {m.state}
                              {m.focus ? ` · ${m.focus}` : ''}
                            </span>
                          </span>
                        </li>
                      ))}
                      <li className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center h-6 px-2.5 rounded-md bg-surface border border-border text-muted text-xs font-semibold shrink-0 mt-0.5 w-28">Staff lead</span>
                        <span className="flex-1">
                          <span className="font-semibold text-ink text-sm">{c.staffLead.name}</span>
                          <span className="text-muted text-sm">{' '}— {c.staffLead.title}</span>
                        </span>
                      </li>
                    </ul>

                    <h4 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">Elected members</h4>
                    <ul className="space-y-2">
                      {c.members.filter((m) => m.role === "Member").map((m) => (
                        <li key={`${m.name}-${m.state}`} className="flex items-start gap-3 text-sm">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink/25 shrink-0 mt-2 ml-2" aria-hidden />
                          <span className="flex-1">
                            <span className="font-medium text-ink">{m.name}</span>
                            <span className="text-muted">
                              {' '}— {m.grade}
                              {m.designations?.length ? `, ${m.designations.join(', ')}` : ''}
                              {' '}· {m.state}
                              {m.focus ? ` · ${m.focus}` : ''}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-brand-500 tracking-tight mb-2">State committees</h2>
        <p className="text-sm text-muted mb-6 max-w-2xl">State committees shape advocacy priorities locally and provide critical advice on issues arising across the profession.</p>
        <div className="overflow-hidden rounded-2xl border border-border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-surface text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="text-left font-semibold px-5 py-3">State / Territory</th>
                <th className="text-left font-semibold px-5 py-3">Chair</th>
                <th className="text-left font-semibold px-5 py-3">Member Relationship Manager</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {stateDivisions.map((s) => (
                <tr key={s.state} className="hover:bg-surface transition-colors duration-150">
                  <td className="px-5 py-3 font-medium text-ink">{s.state}</td>
                  <td className="px-5 py-3 text-ink/70">{s.chair}</td>
                  <td className="px-5 py-3 text-ink/70">{s.relationshipManager}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
