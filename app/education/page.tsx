import Link from "next/link";
import { Award, Video, School, ArrowRight, Clock, BookOpen, Calendar } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/lib/mock/certifications";

export const metadata = { title: "Education — API Sandbox" };

const pathways = [
  {
    label: "CPD Events & Webinars",
    icon: Calendar,
    desc: "Browse CPD-endorsed live and on-demand learning. Book and have hours logged automatically to your iMIS record.",
    href: "/education/cpd",
    count: "Updated weekly",
    primary: true,
  },
  {
    label: "Certifications",
    icon: Award,
    desc: "CPV, RPV and specialist certifications — the credentials that define the profession.",
    href: "#certifications",
    count: `${certifications.length} credentials`,
  },
  {
    label: "Textbooks",
    icon: BookOpen,
    desc: "Published and curated by the API for property students, practitioners and academics.",
    href: "/education/textbooks",
    count: "6 titles",
  },
  {
    label: "University-Accredited Courses",
    icon: School,
    desc: "Bachelor's and postgraduate programs accredited by the API across 12 partner universities.",
    href: "#",
    count: "12 partners",
  },
  {
    label: "Webinars & Masterclasses",
    icon: Video,
    desc: "Structured and unstructured CPD delivered by leading Australian practitioners.",
    href: "/education/cpd",
    count: "40+ per year",
  },
];

export default function EducationPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Education"
        title="Learning that counts — towards your credential, and your career."
        description="One home for every API learning pathway. Certifications, accredited degrees, endorsed CPD, and textbooks — with requirements made visible, not hidden in PDFs."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {pathways.map((p) => {
          const Icon = p.icon;
          return (
            <Link key={p.label} href={p.href} className="group block no-underline hover:no-underline">
              <Card className={`h-full transition-colors duration-150 group-hover:border-brand-500 ${p.primary ? "bg-brand-500 text-white border-0" : ""}`}>
                <CardContent className="p-6">
                  <div className={`w-11 h-11 rounded-lg grid place-items-center mb-4 ${p.primary ? "bg-accent-500 text-brand-900" : "bg-brand-50 text-brand-500"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-xl font-bold mb-1 ${p.primary ? "text-white" : "text-ink"}`}>{p.label}</h3>
                  <p className={`text-sm mb-4 ${p.primary ? "text-white/80" : "text-ink/70"}`}>{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant={p.primary ? "accent" : "muted"}>{p.count}</Badge>
                    <span className={`text-sm font-medium inline-flex items-center gap-1 ${p.primary ? "text-accent-400" : "text-brand-500"}`}>
                      View <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <section id="certifications">
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-2">Certifications</div>
          <h2 className="text-[2rem] font-bold text-brand-500 tracking-[-0.02em]">Professional credentials</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((c) => (
            <Link key={c.slug} href={`/education/${c.slug}`} className="block group no-underline hover:no-underline">
              <Card className="h-full transition-colors duration-150 group-hover:border-brand-500">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="default" className="text-base px-3 py-1">{c.code}</Badge>
                    <Badge variant="muted"><Clock className="w-3 h-3 mr-1 inline" />{c.indicativeDurationMonths} months</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{c.name}</h3>
                  <p className="text-sm text-ink/70 mb-3">{c.tagline}</p>
                  <div className="flex items-center text-sm font-medium text-brand-500 gap-1">
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
