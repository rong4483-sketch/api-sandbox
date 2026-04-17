"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Download, ExternalLink, ShieldCheck, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { currentMember } from "@/lib/mock/member";

const editions = [
  { version: "PropertyPRO Supporting Memorandum", date: "4 October 2020", status: "Current" },
  { version: "Supporting Memorandum", date: "10 May 2020", status: "Superseded" },
  { version: "Supporting Memorandum", date: "September 2016", status: "Archived" },
  { version: "Supporting Memorandum", date: "September 1998 (foundation)", status: "Archived" },
];

const resources = [
  { label: "PropertyPRO Supporting Memorandum (4 October 2020)", kind: "PDF", size: "1.2 MB" },
  { label: "ABFI Residential Valuation Standing Instructions", kind: "PDF", size: "680 KB" },
  { label: "Pro-Forma Residential Valuation & Security Assessment Report", kind: "Template", size: "240 KB" },
  { label: "PropertyPRO Training & Onboarding Pack", kind: "PDF", size: "3.4 MB" },
];

export default function PropertyProPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <Link href="/membership" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Dashboard
      </Link>

      <div className="flex items-center gap-2 mb-3">
        <Badge variant="accent">Members only</Badge>
        <Badge variant="muted">Residential Valuation</Badge>
      </div>
      <h1 className="text-[2.5rem] font-bold text-brand-500 tracking-[-0.02em] leading-tight mb-3">PropertyPRO</h1>
      <p className="text-lg text-ink/70 max-w-3xl mb-10">
        Standardised documents for residential mortgage valuations. Created by the API to help members meet lender and financial-institution requirements with concise, consistent templates.
      </p>

      <div className="grid lg:grid-cols-[1fr_320px] gap-10">
        <div>
          {/* About */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-brand-500 mb-3">About PropertyPRO</h2>
            <div className="space-y-3 text-ink/80 leading-relaxed">
              <p>The PropertyPRO Supporting Memorandum is the basis on which API Member valuers provide valuations of residential properties for first-mortgage purposes using the Residential Valuation and Security Assessment Pro-Forma Report.</p>
              <p>It is also the basis on which lender-clients and approved lenders mortgage insurers accept and use such reports. Many lender instructions to valuers request a PropertyPRO valuation to be undertaken in accordance with the current ABFI Residential Valuation Standing Instructions (ABFI RVSI).</p>
              <p>The API has selected PropertyPRO Technology Pty Ltd as the preferred provider for a platform-based solution producing PropertyPRO reports. PropertyPRO Technology hosts PropertyPRO Plus under agreement with the API.</p>
            </div>
          </section>

          {/* Resources */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-brand-500 mb-4">Resources</h2>
            <div className="overflow-hidden rounded-lg border border-border bg-white">
              <table className="w-full text-sm">
                <thead className="bg-surface text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                  <tr>
                    <th className="text-left font-bold px-5 py-3">Document</th>
                    <th className="text-left font-bold px-5 py-3">Type</th>
                    <th className="text-left font-bold px-5 py-3">Size</th>
                    <th className="px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {resources.map((r) => (
                    <tr key={r.label} className="hover:bg-surface/60">
                      <td className="px-5 py-3 font-medium text-ink flex items-center gap-2"><FileText className="w-4 h-4 text-brand-500" />{r.label}</td>
                      <td className="px-5 py-3"><Badge variant="muted">{r.kind}</Badge></td>
                      <td className="px-5 py-3 text-ink/60">{r.size}</td>
                      <td className="px-5 py-3 text-right">
                        <Button size="sm" variant="outline"><Download className="w-3.5 h-3.5" /> Download</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Editions */}
          <section>
            <h2 className="text-xl font-bold text-brand-500 mb-4">Previous editions</h2>
            <div className="overflow-hidden rounded-lg border border-border bg-white">
              <table className="w-full text-sm">
                <thead className="bg-surface text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                  <tr>
                    <th className="text-left font-bold px-5 py-3">Edition</th>
                    <th className="text-left font-bold px-5 py-3">Effective</th>
                    <th className="text-left font-bold px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {editions.map((e, i) => (
                    <tr key={i} className="hover:bg-surface/60">
                      <td className="px-5 py-3 font-medium text-ink">{e.version}</td>
                      <td className="px-5 py-3 text-ink/70">{e.date}</td>
                      <td className="px-5 py-3">
                        <Badge variant={e.status === "Current" ? "accent" : "muted"}>{e.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-10 self-start">
          <Card className="bg-brand-500 text-white border-0">
            <CardContent className="p-6">
              <div className="text-xs uppercase tracking-wider text-accent-400 font-bold mb-2">PropertyPRO Plus</div>
              <h3 className="text-xl font-bold mb-2">Launch the application</h3>
              <p className="text-sm text-white/80 mb-4">Hosted by PropertyPRO Technology Pty Ltd. Access is provisioned via your API member record.</p>
              <Button variant="accent" className="w-full">
                <ExternalLink className="w-4 h-4" /> Open PropertyPRO Plus
              </Button>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs text-white/70 flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>Single sign-on from your iMIS member record. Linked to {currentMember.firstName} {currentMember.lastName} · #{currentMember.memberNumber}.</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-bold text-ink mb-2">Support</h3>
              <ul className="text-sm text-ink/75 space-y-1.5">
                <li className="flex items-center justify-between">
                  <span>admin@propertypro.net.au</span>
                  <ChevronRight className="w-4 h-4 text-[color:var(--color-muted)]" />
                </li>
                <li className="flex items-center justify-between">
                  <span>ppro@api.org.au</span>
                  <ChevronRight className="w-4 h-4 text-[color:var(--color-muted)]" />
                </li>
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
