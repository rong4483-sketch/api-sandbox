"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Search, MapPin, Users, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProfessionalCard } from "./ProfessionalCard";
import { professionals, expertiseOptions, stateOptions } from "@/lib/mock/professionals";

const ALL = "__all__";

export function DirectorySearch() {
  const [location, setLocation] = useState("");
  const [state, setState] = useState<string>(ALL);
  const [expertise, setExpertise] = useState<string[]>([]);

  const toggleExpertise = (e: string) => {
    setExpertise((prev) => (prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e]));
  };

  const filtered = useMemo(() => {
    return professionals.filter((p) => {
      if (state !== ALL && p.state !== state) return false;
      if (location) {
        const q = location.toLowerCase().trim();
        const matches =
          p.suburb.toLowerCase().includes(q) ||
          p.postcode.startsWith(q) ||
          p.state.toLowerCase() === q;
        if (!matches) return false;
      }
      if (expertise.length > 0) {
        const hit = expertise.every((e) => p.expertise.includes(e));
        if (!hit) return false;
      }
      return true;
    });
  }, [location, state, expertise]);

  const activeCount = (location ? 1 : 0) + (state !== ALL ? 1 : 0) + expertise.length;

  return (
    <div className="space-y-6">
      {/* Search bar */}
      <Card>
        <CardContent className="p-5 grid md:grid-cols-[1fr_180px_auto] gap-3 items-end">
          <div>
            <label className="block text-xs font-medium text-[color:var(--color-muted)] mb-1">Suburb, postcode, or state</label>
            <div className="relative">
              <MapPin className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-muted)]" />
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Bondi, 2022, or NSW"
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[color:var(--color-muted)] mb-1">State</label>
            <Select value={state} onValueChange={setState}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All states</SelectItem>
                {stateOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          {activeCount > 0 && (
            <Button variant="ghost" onClick={() => { setLocation(""); setState(ALL); setExpertise([]); }}>
              <X className="w-4 h-4" /> Clear all
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Expertise chips */}
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)] mb-2">Expertise</div>
        <div className="flex flex-wrap gap-2">
          {expertiseOptions.map((e) => {
            const active = expertise.includes(e);
            return (
              <button
                key={e}
                onClick={() => toggleExpertise(e)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all
                  ${active
                    ? "bg-brand-500 text-white border-brand-500"
                    : "bg-white border border-border text-ink/75 hover:border-brand-300"}`}
              >
                {e}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results header */}
      <div className="flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-2 text-sm">
          <Users className="w-4 h-4 text-[color:var(--color-muted)]" />
          <span>
            Showing <span className="font-semibold text-ink">{filtered.length}</span> of {professionals.length} professionals
          </span>
        </div>
        {activeCount > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {location && (
              <Badge variant="outline" className="gap-1">{location}<button onClick={() => setLocation("")}><X className="w-3 h-3" /></button></Badge>
            )}
            {state !== ALL && (
              <Badge variant="outline" className="gap-1">{state}<button onClick={() => setState(ALL)}><X className="w-3 h-3" /></button></Badge>
            )}
            {expertise.map((e) => (
              <Badge key={e} variant="outline" className="gap-1">{e}<button onClick={() => toggleExpertise(e)}><X className="w-3 h-3" /></button></Badge>
            ))}
          </div>
        )}
      </div>

      {/* Results grid */}
      {filtered.length === 0 ? (
        <Card><CardContent className="py-16 text-center">
          <Search className="w-10 h-10 mx-auto mb-4 text-[color:var(--color-muted)]" />
          <div className="font-semibold mb-1">No professionals match</div>
          <div className="text-sm text-[color:var(--color-muted)] mb-4">Try fewer filters, or broaden your location.</div>
          <div className="flex flex-wrap justify-center gap-2">
            {expertiseOptions.slice(0, 4).map((e) => (
              <button
                key={e}
                onClick={() => setExpertise([e])}
                className="px-3 py-1 rounded-full border border-border text-xs hover:border-brand-300"
              >
                Try: {e}
              </button>
            ))}
          </div>
        </CardContent></Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => <ProfessionalCard key={p.id} p={p} />)}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
