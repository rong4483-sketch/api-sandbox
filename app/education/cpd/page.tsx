"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Calendar, MapPin, Clock, Lock, Search } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cpdEvents } from "@/lib/mock/cpd";

export default function CpdPublicBrowsePage() {
  const [query, setQuery] = useState("");
  const [format, setFormat] = useState<string>("All");

  const formats = ["All", "Webinar", "In-person", "On-demand", "Masterclass"];

  const filtered = cpdEvents.filter((e) => {
    const matchQ = query === "" || e.title.toLowerCase().includes(query.toLowerCase()) || e.presenter.toLowerCase().includes(query.toLowerCase());
    const matchF = format === "All" || e.format === format;
    return matchQ && matchF;
  });

  return (
    <PageShell>
      <Link href="/education" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to Education
      </Link>
      <PageHeader
        eyebrow="Education · CPD"
        title="CPD Events & Webinars"
        description="Browse upcoming CPD-endorsed learning. Anyone can view the catalogue — booking a seat requires member sign-in via iMIS."
      />

      <div className="mb-6 rounded-2xl border border-accent-500/40 bg-accent-500/5 p-4 flex items-start gap-3">
        <Lock className="w-4 h-4 text-accent-700 mt-0.5 shrink-0" />
        <div className="text-sm text-ink/85">
          <span className="font-semibold text-accent-700">Authentication required for booking.</span> Browsing is public; completing a booking signs you in through the iMIS member database.
        </div>
      </div>

      <div className="sticky top-[72px] z-20 -mx-6 px-6 md:-mx-8 md:px-8 py-4 bg-white/95 backdrop-blur-md border-b border-border mb-6 flex flex-col md:flex-row gap-3 md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <Input
            placeholder="Search by title or presenter…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {formats.map((f) => (
            <button
              key={f}
              onClick={() => setFormat(f)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                format === f
                  ? "bg-brand-500 text-white"
                  : "bg-white border border-border text-ink/70 hover:border-brand-500 hover:text-brand-500"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-3 text-sm text-[color:var(--color-muted)]">{filtered.length} of {cpdEvents.length} events</div>

      <div className="overflow-hidden rounded-2xl border border-border bg-white">
        <table className="w-full text-sm">
          <thead className="bg-surface-alt text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="text-left font-semibold px-5 py-3">Event</th>
              <th className="text-left font-semibold px-5 py-3">Date</th>
              <th className="text-left font-semibold px-5 py-3">Format</th>
              <th className="text-left font-semibold px-5 py-3">Hours</th>
              <th className="text-right font-semibold px-5 py-3">Price (Member)</th>
              <th className="text-right font-semibold px-5 py-3">Seats</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border align-top">
            {filtered.map((e) => (
              <tr key={e.id} className="hover:bg-surface transition-colors duration-150">
                <td className="px-5 py-4">
                  <Link href={`/education/cpd/${e.id}`} className="font-medium text-ink hover:text-brand-500 no-underline hover:no-underline">
                    {e.title}
                  </Link>
                  <div className="text-xs text-muted mt-0.5">{e.presenter}</div>
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 text-ink/80"><Calendar className="w-3.5 h-3.5" />{new Date(e.date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}</div>
                  <div className="text-xs text-muted mt-0.5 flex items-center gap-1"><MapPin className="w-3 h-3" />{e.state}</div>
                </td>
                <td className="px-5 py-4"><Badge variant="muted">{e.format}</Badge></td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1 text-ink/80"><Clock className="w-3.5 h-3.5" />{e.hours}h</div>
                  <div className="text-xs text-muted">{e.type}</div>
                </td>
                <td className="px-5 py-4 text-right whitespace-nowrap">
                  <div className="font-semibold text-brand-500 tabular-nums">{e.memberPrice === 0 ? "Free" : `$${e.memberPrice}`}</div>
                  <div className="text-xs text-muted-soft line-through tabular-nums">${e.price}</div>
                </td>
                <td className="px-5 py-4 text-right text-sm text-ink/70 tabular-nums">
                  {e.seatsLeft}/{e.seats}
                </td>
                <td className="px-5 py-4 text-right">
                  <Button asChild size="sm" variant={e.memberPrice > 0 ? "accent" : "default"}>
                    <Link href={`/education/cpd/${e.id}`} className="no-underline hover:no-underline whitespace-nowrap">
                      <Lock className="w-3.5 h-3.5" /> Book
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
