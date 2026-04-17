import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { executiveTeam, memberRelationshipManagers } from "@/lib/mock/governance";

export const metadata = { title: "Executive Team — API Sandbox" };

export default function ExecutivePage() {
  return (
    <PageShell>
      <Link href="/about" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to About
      </Link>
      <PageHeader
        eyebrow="Leadership"
        title="Executive Team"
        description="The API's national executive team, led by the CEO, delivers the organisation's strategy and supports the Member Relationship Managers across every state and territory."
      />

      <section className="mb-16">
        <h2 className="text-[1.75rem] font-bold text-brand-500 mb-6 tracking-[-0.02em]">Leadership team</h2>
        <div className="overflow-hidden rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-surface text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
              <tr>
                <th className="text-left font-bold px-5 py-3">Name</th>
                <th className="text-left font-bold px-5 py-3">Role</th>
                <th className="text-left font-bold px-5 py-3">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {executiveTeam.map((m) => (
                <tr key={m.name} className="hover:bg-surface/60 transition-colors duration-150">
                  <td className="px-5 py-3 font-medium text-ink">{m.name}</td>
                  <td className="px-5 py-3 text-ink/75">{m.role}</td>
                  <td className="px-5 py-3 text-ink/60">{m.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-[1.75rem] font-bold text-brand-500 mb-2 tracking-[-0.02em]">Member Relationship Managers</h2>
        <p className="text-sm text-ink/70 mb-6 max-w-2xl">Your first point of contact on membership, events, partnerships and state-level support.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {memberRelationshipManagers.map((m) => (
            <Card key={m.name}>
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-500 grid place-items-center font-bold text-sm shrink-0">
                  {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-ink">{m.name}</div>
                  <div className="text-sm text-brand-500 font-medium">{m.coverage}</div>
                  <div className="text-xs text-ink/55 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" /> {m.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
