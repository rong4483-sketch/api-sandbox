"use client";

import Link from "next/link";
import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock, Calendar, MapPin, Clock, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cpdEvents } from "@/lib/mock/cpd";

export default function CpdEventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const event = cpdEvents.find((e) => e.id === id);

  const [authOpen, setAuthOpen] = useState(false);
  const [booked, setBooked] = useState(false);
  const [memberNumber, setMemberNumber] = useState("API-44817");
  const [password, setPassword] = useState("••••••••");
  const [signingIn, setSigningIn] = useState(false);

  if (!event) {
    return (
      <PageShell>
        <p>Event not found.</p>
        <Link href="/education/cpd" className="text-brand-500">Return to CPD browse</Link>
      </PageShell>
    );
  }

  function handleSignIn() {
    setSigningIn(true);
    setTimeout(() => {
      setSigningIn(false);
      setBooked(true);
    }, 900);
  }

  return (
    <PageShell>
      <Link href="/education/cpd" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> All CPD events
      </Link>

      <div className="grid lg:grid-cols-[1fr_340px] gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="default">{event.format}</Badge>
            <Badge variant="muted">{event.type} CPD</Badge>
            <span className="text-xs text-[color:var(--color-muted)]">{event.id}</span>
          </div>
          <h1 className="text-[3rem] font-bold text-brand-500 leading-tight tracking-[-0.02em] mb-3">{event.title}</h1>
          <p className="text-lg text-ink/70 mb-8 max-w-2xl">{event.description}</p>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            <div className="rounded-lg border border-border bg-white p-4 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-brand-500" />
              <div>
                <div className="text-xs text-[color:var(--color-muted)] uppercase tracking-wider font-bold">Date</div>
                <div className="font-medium text-ink">{new Date(event.date).toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand-500" />
              <div>
                <div className="text-xs text-[color:var(--color-muted)] uppercase tracking-wider font-bold">Location</div>
                <div className="font-medium text-ink">{event.state}</div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-4 flex items-center gap-3">
              <Clock className="w-5 h-5 text-brand-500" />
              <div>
                <div className="text-xs text-[color:var(--color-muted)] uppercase tracking-wider font-bold">CPD Hours</div>
                <div className="font-medium text-ink">{event.hours} hrs ({event.type.toLowerCase()})</div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-white p-4 flex items-center gap-3">
              <Users className="w-5 h-5 text-brand-500" />
              <div>
                <div className="text-xs text-[color:var(--color-muted)] uppercase tracking-wider font-bold">Availability</div>
                <div className="font-medium text-ink">{event.seatsLeft} of {event.seats} seats remaining</div>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-brand-500 mb-3">Presenter</h2>
            <p className="text-ink/80">{event.presenter}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-500 mb-3">What you'll cover</h2>
            <ul className="space-y-2 text-ink/80">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500 mt-1 shrink-0" /> Practical techniques with live case studies from current practice</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500 mt-1 shrink-0" /> Alignment to current API Valuation Protocols and professional standards</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500 mt-1 shrink-0" /> Q&A and take-home reference material</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500 mt-1 shrink-0" /> CPD hours logged automatically to your iMIS record on attendance</li>
            </ul>
          </section>
        </div>

        <aside className="lg:sticky lg:top-28 self-start space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="text-3xl font-bold text-brand-500">
                  {event.memberPrice === 0 ? "Free" : `$${event.memberPrice}`}
                </div>
                <div className="text-sm text-[color:var(--color-muted)]">Member price · ${event.price} non-member</div>
              </div>

              <Button className="w-full" size="lg" onClick={() => setAuthOpen(true)}>
                <Lock className="w-4 h-4" /> Sign in to book
              </Button>

              <div className="mt-4 pt-4 border-t border-border text-xs text-[color:var(--color-muted)] flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>Booking is gated by iMIS. Sign-in confirms your grade, applies member pricing and logs CPD hours to your record.</span>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg border border-border bg-surface p-4 text-xs text-ink/60">
            Not a member? <Link href="/membership" className="text-brand-500 font-medium">View membership options</Link> or <Link href="/directory" className="text-brand-500 font-medium">find a CPV</Link>.
          </div>
        </aside>
      </div>

      {/* iMIS Auth Dialog */}
      <Dialog open={authOpen} onOpenChange={(v) => { if (!booked) setAuthOpen(v); }}>
        <DialogContent className="max-w-md">
          {!booked ? (
            <>
              <DialogHeader>
                <div className="w-11 h-11 rounded-lg bg-brand-500 text-white grid place-items-center mb-3">
                  <Lock className="w-5 h-5" />
                </div>
                <DialogTitle>iMIS member sign-in</DialogTitle>
                <DialogDescription>
                  Booking CPD requires authentication against the API member database. Your grade, certifications and CPD balance are read from iMIS.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 py-2">
                <div>
                  <label className="text-xs uppercase tracking-wider font-bold text-[color:var(--color-muted)] mb-1 block">Member number</label>
                  <Input value={memberNumber} onChange={(e) => setMemberNumber(e.target.value)} />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider font-bold text-[color:var(--color-muted)] mb-1 block">Password</label>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="text-xs text-[color:var(--color-muted)]">Sandbox demo — pre-filled credentials resolve to Jane Valuer (AAPI, CPV).</div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" className="flex-1" onClick={() => setAuthOpen(false)}>Cancel</Button>
                <Button className="flex-1" onClick={handleSignIn} disabled={signingIn}>
                  {signingIn ? "Authenticating…" : "Sign in & book"}
                </Button>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <div className="w-11 h-11 rounded-lg bg-success/10 text-success grid place-items-center mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <DialogTitle>Booking confirmed</DialogTitle>
                <DialogDescription>
                  You're registered for <span className="font-medium text-ink">{event.title}</span> on {new Date(event.date).toLocaleDateString("en-AU", { day: "numeric", month: "long" })}.
                </DialogDescription>
              </DialogHeader>
              <div className="rounded-lg bg-surface border border-border p-4 text-sm space-y-1.5 my-3">
                <div className="flex justify-between"><span className="text-[color:var(--color-muted)]">Confirmation</span><span className="font-medium">BKG-2026-{event.id.split("-")[2]}</span></div>
                <div className="flex justify-between"><span className="text-[color:var(--color-muted)]">CPD hours</span><span className="font-medium">{event.hours} hrs ({event.type.toLowerCase()})</span></div>
                <div className="flex justify-between"><span className="text-[color:var(--color-muted)]">Charged</span><span className="font-medium">{event.memberPrice === 0 ? "Complimentary — member" : `$${event.memberPrice}`}</span></div>
                <div className="flex justify-between text-xs text-[color:var(--color-muted)] pt-1 border-t border-border"><span>iMIS write</span><span>CPD balance updated on attendance</span></div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" className="flex-1" onClick={() => { setAuthOpen(false); router.push("/education/cpd"); }}>Back to catalogue</Button>
                <Button className="flex-1" onClick={() => router.push("/membership")}>Open dashboard</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
