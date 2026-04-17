import Link from "next/link";
import { ArrowRight, Users2, Briefcase, Scale, Users, FileText } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "About — API Sandbox" };

const sections = [
  {
    label: "API Ltd Board",
    href: "/about/board",
    icon: Users2,
    description: "Nine directors — Chair, Deputy Chair, elected and independent directors — accountable to members.",
    meta: "9 directors",
  },
  {
    label: "Executive Team",
    href: "/about/executive",
    icon: Briefcase,
    description: "CEO, General Managers and Member Relationship Managers across every state and territory.",
    meta: "Led by John Winter, CEO",
  },
  {
    label: "Our Staff",
    href: "/about/staff",
    icon: Users,
    description: "National team supporting members, committees and strategic priorities across the country.",
    meta: "34 staff",
  },
  {
    label: "Our Committees",
    href: "/about/our-committees",
    icon: FileText,
    description: "Seven national committees plus state committees — shaping standards, education, innovation and advocacy.",
    meta: "7 national · 8 state",
  },
  {
    label: "Governance",
    href: "/about/governance",
    icon: Scale,
    description: "Constitution, corporate governance policy, whistleblower policy, and director election process.",
    meta: "AS 8000-2003 aligned",
  },
];

const values = [
  { label: "Innovation", desc: "Leading an innovation agenda for the property profession." },
  { label: "Inclusivity", desc: "Embracing inclusivity across every role, grade and region." },
  { label: "Courage", desc: "Acting courageously on standards, advocacy and member interests." },
];

const objectives = [
  { label: "Future Focused", desc: "Supporting the sector to respond and adapt to a changing operational landscape." },
  { label: "A Strong and Sustainable Association", desc: "The foundation supporting our members." },
  { label: "Powerful Voice", desc: "Raising the profile and driving positive change for the profession." },
  { label: "Skilled Professionals", desc: "Nurturing skilled and confident property professionals." },
];

const timeline = [
  { year: "1926", event: "Founded as the Commonwealth Institute of Valuers; first division established." },
  { year: "1941", event: "First Convention held." },
  { year: "1962", event: "First female member admitted." },
  { year: "1991", event: "Renamed to Australian Institute of Valuers & Land Economists Incorporated." },
  { year: "1998", event: "Renamed to Australian Property Institute Incorporated." },
  { year: "2016", event: "API becomes a unified national institute (API Limited)." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About the API"
        title="About the Australian Property Institute"
        description="Close to 8,000 members. Founded 1926. The national body for property professionals — setting standards, shaping policy, and nurturing careers."
      />

      {/* Governance navigation — primary focus */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[1.75rem] font-bold text-brand-500 tracking-[-0.02em]">Governance & leadership</h2>
          <Badge variant="muted">5 sections</Badge>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.href} href={s.href} className="group block no-underline hover:no-underline">
                <Card className="h-full transition-colors duration-150 group-hover:border-brand-500">
                  <CardContent className="p-6">
                    <div className="w-11 h-11 rounded-lg bg-brand-50 text-brand-500 grid place-items-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-ink">{s.label}</h3>
                    <div className="text-xs text-[color:var(--color-muted)] mb-3">{s.meta}</div>
                    <p className="text-sm text-ink/70 mb-4">{s.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-500">
                      View <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About statement */}
      <section className="mb-20 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-[1.5rem] font-bold text-brand-500 tracking-[-0.02em] mb-2">Who we are</h2>
          <p className="text-sm text-ink/60">Close to 8,000 members across every state and territory.</p>
        </div>
        <div className="md:col-span-2 space-y-4 text-ink/80 leading-relaxed">
          <p>Leading the industry, we set and maintain the highest standards of professional practice, education, ethics, and professional conduct for our members. The work of the API raises the bar for the entire property profession.</p>
          <p>Representing a wide range of property professionals, we advocate for our members with a range of stakeholders, providing the professional recognition each member deserves. All members of the API are highly qualified, highly skilled professionals with up-to-date professional development and experience.</p>
        </div>
      </section>

      {/* Vision + Values + Objectives — condensed */}
      <section className="mb-20 bg-surface border border-border rounded-lg p-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-3">Our vision</div>
            <p className="text-xl font-bold text-ink italic leading-snug">&ldquo;To shape the future of property professionals.&rdquo;</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-3">Our values</div>
            <dl className="grid sm:grid-cols-3 gap-5">
              {values.map((v) => (
                <div key={v.label}>
                  <dt className="font-bold text-ink mb-1">{v.label}</dt>
                  <dd className="text-sm text-ink/70">{v.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="mb-20">
        <h2 className="text-[1.75rem] font-bold text-brand-500 tracking-[-0.02em] mb-6">Strategic objectives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {objectives.map((o, i) => (
            <div key={o.label} className="border border-border rounded-lg p-5 bg-white">
              <div className="text-xs text-brand-500 font-bold mb-1">0{i + 1}</div>
              <h3 className="font-bold text-ink mb-1">{o.label}</h3>
              <p className="text-sm text-ink/70">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brief History */}
      <section>
        <h2 className="text-[1.75rem] font-bold text-brand-500 tracking-[-0.02em] mb-6">A brief history</h2>
        <div className="border-l-2 border-accent-500 pl-6 space-y-6">
          {timeline.map((t) => (
            <div key={t.year} className="relative">
              <div className="absolute -left-[calc(1.5rem+5px)] w-3 h-3 rounded-full bg-accent-500 border-2 border-white top-1" />
              <div className="text-sm font-bold text-accent-700 mb-0.5">{t.year}</div>
              <p className="text-ink/80 text-sm">{t.event}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
