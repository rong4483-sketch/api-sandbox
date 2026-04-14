import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Award, Download, CheckCircle2, FileDown } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { certifications } from "@/lib/mock/certifications";

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export default async function CertificationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cert = certifications.find((c) => c.slug === slug);
  if (!cert) notFound();

  return (
    <PageShell>
      <Link href="/academy" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Academy
      </Link>

      <div className="grid lg:grid-cols-[1fr_320px] gap-10">
        {/* Main */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="default" className="text-base px-3 py-1">{cert.code}</Badge>
            <Badge variant="muted"><Clock className="w-3 h-3 mr-1 inline" />{cert.indicativeDurationMonths}-month indicative pathway</Badge>
          </div>
          <h1 className="text-5xl font-serif font-semibold text-ink leading-tight mb-4">{cert.name}</h1>
          <p className="text-xl text-ink/70 mb-8 max-w-2xl">{cert.tagline}</p>

          <div className="rounded-2xl bg-white border border-border p-6 mb-10">
            <p className="text-ink/80 leading-relaxed">{cert.overview}</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-brand-500" /> Eligibility
            </h2>
            <ul className="space-y-2">
              {cert.eligibility.map((e, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border">
                  <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-500 grid place-items-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-ink/85">{e}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-2 flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-500" /> CPD & ongoing requirements
            </h2>
            <p className="text-sm text-[color:var(--color-muted)] mb-5">
              All requirements — on this page. No PDFs to hunt for.
            </p>

            <Accordion type="multiple" defaultValue={cert.requirements.map((r) => r.category)} className="bg-white border border-border rounded-2xl px-6">
              {cert.requirements.map((req) => (
                <AccordionItem key={req.category} value={req.category}>
                  <AccordionTrigger className="font-serif text-lg">{req.category}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {req.items.map((item, i) => (
                        <li key={i} className="flex items-start justify-between gap-4 py-2">
                          <div className="flex-1">
                            <div className="font-medium text-ink">{item.label}</div>
                            {item.detail && <div className="text-sm text-[color:var(--color-muted)] mt-0.5">{item.detail}</div>}
                          </div>
                          {item.hours !== undefined && (
                            <Badge variant="default" className="shrink-0">{item.hours} hrs</Badge>
                          )}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="outline"><FileDown className="w-4 h-4" /> Download full policy (PDF)</Button>
              <Button variant="ghost">Download audit checklist</Button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-28 self-start">
          <Card className="bg-gradient-to-br from-brand-500 to-brand-700 text-white border-0">
            <CardContent className="p-6">
              <div className="text-xs uppercase tracking-wider text-accent-400 font-semibold mb-2">Ready to apply?</div>
              <h3 className="font-serif text-xl font-semibold mb-4">Start your {cert.code} application</h3>
              <div className="space-y-2 text-sm text-white/85 mb-5">
                <div className="flex justify-between"><span>Renewal period</span><span className="font-medium text-white">{cert.renewalPeriodYears} year</span></div>
                <div className="flex justify-between"><span>Mentor hours</span><span className="font-medium text-white">{cert.mentorHours} hrs</span></div>
                <div className="flex justify-between"><span>Assessment</span><span className="font-medium text-white text-right text-xs">{cert.assessmentFormat}</span></div>
              </div>
              <Button variant="accent" className="w-full" asChild>
                <Link href="/cockpit/upgrade">Apply now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Need help?</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-ink/70 mb-3">Ask the Member Concierge for specific guidance on {cert.code} requirements.</p>
              <Button variant="outline" size="sm" className="w-full"><Download className="w-4 h-4" /> Call: 1800 111 274</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </PageShell>
  );
}
