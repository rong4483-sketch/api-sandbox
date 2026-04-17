import Link from "next/link";
import { ArrowLeft, Users2 } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { boardMembers } from "@/lib/mock/governance";

export const metadata = { title: "API Ltd Board — API Sandbox" };

export default function BoardPage() {
  return (
    <PageShell>
      <Link href="/about" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to About
      </Link>
      <PageHeader
        eyebrow="Governance"
        title="API Ltd Board"
        description="Accountable to API Members whilst operating in the best interests of the organisation. The Board consists of the Chair, Deputy Chair, elected directors and independent directors."
      />

      <div className="mb-10 rounded-lg border border-border bg-surface p-6 flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-brand-500 text-white grid place-items-center shrink-0">
          <Users2 className="w-5 h-5" />
        </div>
        <div className="text-sm text-ink/80">
          Elections are held annually with successful candidates announced at the AGM. As a membership organisation, all API members are encouraged to participate by nominating for vacant positions or voting in the annual elections. The policies, practices and procedures have been developed in accordance with the Australian Standard Good Governance Principles (AS 8000-2003).
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {boardMembers.map((m) => (
          <Card key={m.name}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-ink">
                    {m.name}
                    {m.postNominals && <span className="text-ink/60 text-sm font-medium ml-2">{m.postNominals}</span>}
                  </h3>
                  <p className="text-sm text-brand-500 font-medium mt-0.5">{m.role}</p>
                  <p className="text-sm text-ink/60">{m.title}</p>
                </div>
                <Badge variant="muted" className="shrink-0">Director</Badge>
              </div>
              <p className="text-sm text-ink/75 leading-relaxed">{m.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
