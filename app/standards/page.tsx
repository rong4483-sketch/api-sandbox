"use client";

import { useMemo, useState } from "react";
import { Search, FileText, Download, X } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { protocols, protocolSectors, protocolStatuses, type Protocol } from "@/lib/mock/protocols";
import { formatDate } from "@/lib/utils";

const ALL = "__all__";

export default function StandardsPage() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState<string>(ALL);
  const [status, setStatus] = useState<string>(ALL);

  const filtered = useMemo(() => {
    return protocols.filter((p) => {
      if (sector !== ALL && p.sector !== sector) return false;
      if (status !== ALL && p.status !== status) return false;
      if (query) {
        const q = query.toLowerCase();
        if (!p.title.toLowerCase().includes(q) && !p.summary.toLowerCase().includes(q) && !p.id.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [query, sector, status]);

  const activeFilters = (sector !== ALL ? 1 : 0) + (status !== ALL ? 1 : 0) + (query ? 1 : 0);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Standards"
        title="Every valuation protocol. Searchable."
        description="20+ years of standards, protocols, and exposure drafts — indexed, filterable, and versioned."
      />

      <Card className="mb-6">
        <CardContent className="p-5 grid md:grid-cols-[1fr_200px_200px_auto] gap-3 items-end">
          <div>
            <label className="block text-xs font-medium text-[color:var(--color-muted)] mb-1">Search</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-muted)]" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title, ID, or summary…"
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[color:var(--color-muted)] mb-1">Sector</label>
            <Select value={sector} onValueChange={setSector}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All sectors</SelectItem>
                {protocolSectors.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs font-medium text-[color:var(--color-muted)] mb-1">Status</label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All statuses</SelectItem>
                {protocolStatuses.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          {activeFilters > 0 && (
            <Button variant="ghost" onClick={() => { setQuery(""); setSector(ALL); setStatus(ALL); }}>
              <X className="w-4 h-4" /> Clear
            </Button>
          )}
        </CardContent>
      </Card>

      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-[color:var(--color-muted)]">
          Showing <span className="font-semibold text-ink">{filtered.length}</span> of {protocols.length} protocols
        </div>
        {activeFilters > 0 && <Badge variant="muted">{activeFilters} filter{activeFilters > 1 ? "s" : ""} active</Badge>}
      </div>

      {filtered.length === 0 ? (
        <Card><CardContent className="py-16 text-center">
          <Search className="w-10 h-10 mx-auto mb-4 text-[color:var(--color-muted)]" />
          <div className="font-semibold mb-1">No protocols match</div>
          <div className="text-sm text-[color:var(--color-muted)]">Try clearing filters or broadening your search.</div>
        </CardContent></Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-3 px-5 font-semibold text-ink">ID</th>
                    <th className="py-3 px-5 font-semibold text-ink">Title</th>
                    <th className="py-3 px-5 font-semibold text-ink">Sector</th>
                    <th className="py-3 px-5 font-semibold text-ink">Status</th>
                    <th className="py-3 px-5 font-semibold text-ink">Version</th>
                    <th className="py-3 px-5 font-semibold text-ink">Issued</th>
                    <th className="py-3 px-5" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <ProtocolRow key={p.id} p={p} />
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </PageShell>
  );
}

function ProtocolRow({ p }: { p: Protocol }) {
  const statusVariant = p.status === "Current" ? "success" : p.status === "Exposure Draft" ? "warning" : "muted";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <tr className="border-b border-border last:border-0 hover:bg-surface cursor-pointer transition-colors">
          <td className="py-4 px-5 font-mono text-xs text-[color:var(--color-muted)]">{p.id}</td>
          <td className="py-4 px-5 font-medium text-ink">{p.title}</td>
          <td className="py-4 px-5"><Badge variant="default">{p.sector}</Badge></td>
          <td className="py-4 px-5"><Badge variant={statusVariant}>{p.status}</Badge></td>
          <td className="py-4 px-5 font-mono text-xs">{p.version}</td>
          <td className="py-4 px-5 text-[color:var(--color-muted)]">{formatDate(p.issuedDate)}</td>
          <td className="py-4 px-5 text-right"><Button size="sm" variant="ghost">View</Button></td>
        </tr>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="default">{p.id}</Badge>
            <Badge variant={statusVariant}>{p.status}</Badge>
            <Badge variant="muted">{p.sector}</Badge>
          </div>
          <DialogTitle className="text-2xl font-serif">{p.title}</DialogTitle>
          <DialogDescription>
            Version {p.version} · Issued {formatDate(p.issuedDate)} · Applies to {p.appliesTo.join(", ")}
          </DialogDescription>
        </DialogHeader>
        <div className="pt-2">
          <p className="text-ink/80 leading-relaxed">{p.summary}</p>
        </div>
        <div className="flex gap-2 pt-4 border-t border-border">
          <Button><FileText className="w-4 h-4" /> Open full document</Button>
          <Button variant="outline"><Download className="w-4 h-4" /> Download PDF</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
