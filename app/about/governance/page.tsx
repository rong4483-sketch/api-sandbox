import Link from "next/link";
import { ArrowLeft, FileText, Shield, Scale, Vote } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = { title: "Governance — API Sandbox" };

const documents = [
  {
    title: "API Ltd Constitution",
    effective: "Effective 22 May 2022",
    description: "The foundational governing document of API Limited.",
    icon: Scale,
  },
  {
    title: "Corporate Governance Policy",
    effective: "Under periodic review",
    description: "Developed in accordance with the Australian Standard Good Governance Principles (AS 8000-2003).",
    icon: Shield,
  },
  {
    title: "Whistleblower Policy",
    effective: "Current",
    description: "API is committed to identifying and calling out misconduct and harm, and values individuals who report potential misconduct or breaches of the law.",
    icon: FileText,
  },
  {
    title: "Director Election Process",
    effective: "Annual — results announced at AGM",
    description: "Elections are held annually for elected director positions. All API members may nominate or vote.",
    icon: Vote,
  },
];

export default function GovernancePage() {
  return (
    <PageShell>
      <Link href="/about" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to About
      </Link>
      <PageHeader
        eyebrow="Governance"
        title="Governance framework"
        description="The API is committed to implementing and maintaining an effective and comprehensive corporate governance framework, underpinned by clear policies, practices and procedures."
      />

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        {documents.map((d) => {
          const Icon = d.icon;
          return (
            <Card key={d.title}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-50 text-brand-500 grid place-items-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold">{d.title}</h3>
                    <div className="text-xs text-[color:var(--color-muted)] mb-2">{d.effective}</div>
                    <p className="text-sm text-ink/75">{d.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section className="bg-surface border border-border rounded-lg p-8">
        <h2 className="text-xl font-bold text-brand-500 mb-3">Reporting & transparency</h2>
        <p className="text-sm text-ink/75 mb-4 max-w-2xl">
          Annual reports, AGM materials, and director election results are published to members via the Member Portal and are available on request through the company secretary.
        </p>
        <div className="text-xs text-[color:var(--color-muted)]">Sandbox preview — document links are placeholders.</div>
      </section>
    </PageShell>
  );
}
