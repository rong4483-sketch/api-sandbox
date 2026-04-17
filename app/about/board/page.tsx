import Link from "next/link";
import { ArrowLeft, Users2, ChevronDown } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { boardMembers } from "@/lib/mock/governance";

export const metadata = { title: "API Ltd Board — API Sandbox" };

export default function BoardPage() {
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
        title="API Ltd Board"
        description="Accountable to API Members whilst operating in the best interests of the organisation. The Board consists of the Chair, Deputy Chair, elected directors and independent directors."
      />

      <Card variant="prominent" className="mb-10">
        <CardContent className="p-6 flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-brand-500 text-white grid place-items-center shrink-0">
            <Users2 className="w-5 h-5" />
          </div>
          <div className="text-sm text-ink/85 leading-relaxed">
            Elections are held annually with successful candidates announced at the AGM. As a membership organisation, all API members are encouraged to participate by nominating for vacant positions or voting in the annual elections. The policies, practices and procedures have been developed in accordance with the Australian Standard Good Governance Principles (AS 8000-2003).
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {boardMembers.map((m) => (
          <Card key={m.name}>
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-ink tracking-tight leading-snug">
                  {m.name}
                  {m.postNominals && (
                    <span className="text-muted text-sm font-medium ml-2">{m.postNominals}</span>
                  )}
                </h3>
                <p className="text-sm text-brand-500 font-medium mt-1">{m.role}</p>
                <p className="text-sm text-muted">{m.title}</p>
              </div>
              <details className="group">
                <summary className="list-none cursor-pointer inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 hover:text-brand-700 select-none no-underline hover:no-underline">
                  <span className="group-open:hidden">Read bio</span>
                  <span className="hidden group-open:inline">Hide bio</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="text-sm text-ink/75 leading-relaxed mt-3">{m.bio}</p>
              </details>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
