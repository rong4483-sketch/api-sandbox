import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { committees, stateDivisions } from "@/lib/mock/governance";

export const metadata = { title: "Our Committees — API Sandbox" };

export default function CommitteesPage() {
  return (
    <PageShell>
      <Link href="/about" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to About
      </Link>
      <PageHeader
        eyebrow="Governance"
        title="Our Committees"
        description="Consultative committees of expert industry professionals who help shape standards, education, innovation and advocacy. A charter governs each committee and stipulates its roles, responsibilities and election cycle."
      />

      <section className="mb-16">
        <h2 className="text-[1.75rem] font-bold text-brand-500 mb-6 tracking-[-0.02em]">National committees</h2>
        <div className="overflow-hidden rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-surface text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
              <tr>
                <th className="text-left font-bold px-5 py-3">Committee</th>
                <th className="text-left font-bold px-5 py-3">Purpose</th>
                <th className="text-left font-bold px-5 py-3">Chair</th>
                <th className="text-left font-bold px-5 py-3">Cadence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {committees.map((c) => (
                <tr key={c.name} className="hover:bg-surface/60 transition-colors duration-150 align-top">
                  <td className="px-5 py-4 font-medium text-ink w-64">{c.name}</td>
                  <td className="px-5 py-4 text-ink/70 max-w-md">{c.purpose}</td>
                  <td className="px-5 py-4 text-ink/70 whitespace-nowrap">{c.chair}</td>
                  <td className="px-5 py-4">
                    <Badge variant="muted">{c.meetingCadence}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-[1.75rem] font-bold text-brand-500 mb-2 tracking-[-0.02em]">State committees</h2>
        <p className="text-sm text-ink/70 mb-6 max-w-2xl">State committees shape advocacy priorities locally and provide critical advice on issues arising across the profession.</p>
        <div className="overflow-hidden rounded-lg border border-border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-surface text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
              <tr>
                <th className="text-left font-bold px-5 py-3">State / Territory</th>
                <th className="text-left font-bold px-5 py-3">Chair</th>
                <th className="text-left font-bold px-5 py-3">Member Relationship Manager</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {stateDivisions.map((s) => (
                <tr key={s.state} className="hover:bg-surface/60 transition-colors duration-150">
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
