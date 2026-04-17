import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { executiveTeam, memberRelationshipManagers } from "@/lib/mock/governance";

export const metadata = { title: "Our Staff — API Sandbox" };

const additionalStaff = [
  { name: "Adrian Montesano", role: "Digital Marketing & Communications Officer", location: "Melbourne" },
  { name: "Alfie-Alan Stringer", role: "Member Support Officer", location: "Sydney" },
  { name: "Anika Fasavalu", role: "Member Support Officer", location: "Karratha, WA" },
  { name: "Cameron Musa", role: "Graphic Designer", location: "Sydney" },
  { name: "Carmen Cheuk", role: "Financial Accountant", location: "Sydney" },
];

export default function StaffPage() {
  const all = [
    ...executiveTeam.map((s) => ({ ...s, team: "Leadership" })),
    ...memberRelationshipManagers.map((m) => ({ name: m.name, role: `Member Relationship Manager — ${m.coverage}`, location: m.location, team: "Member Relationships" })),
    ...additionalStaff.map((s) => ({ ...s, team: "Operations" })),
  ];

  return (
    <PageShell>
      <Link href="/about" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to About
      </Link>
      <PageHeader
        eyebrow="People"
        title="Our Staff"
        description="The national team supporting the API's members, committees and strategic priorities. 34 staff across every state and territory."
      />

      <div className="mb-4 flex items-center justify-between text-sm text-[color:var(--color-muted)]">
        <div>{all.length} of 34 staff displayed · sandbox preview</div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-surface text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
            <tr>
              <th className="text-left font-bold px-5 py-3">Name</th>
              <th className="text-left font-bold px-5 py-3">Role</th>
              <th className="text-left font-bold px-5 py-3">Team</th>
              <th className="text-left font-bold px-5 py-3">Location</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {all.map((s) => (
              <tr key={s.name} className="hover:bg-surface/60 transition-colors duration-150">
                <td className="px-5 py-3 font-medium text-ink">{s.name}</td>
                <td className="px-5 py-3 text-ink/75">{s.role}</td>
                <td className="px-5 py-3 text-ink/60">{s.team}</td>
                <td className="px-5 py-3 text-ink/60">{s.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
