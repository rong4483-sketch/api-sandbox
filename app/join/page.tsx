import Link from "next/link";
import { ArrowLeft, UserPlus, GraduationCap, Award } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Become a member — API Sandbox" };

export default function JoinPage() {
  return (
    <PageShell>
      <Link
        href="/login"
        className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to sign in
      </Link>

      <div className="max-w-3xl">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-3">
          Membership
        </div>
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-brand-500 tracking-[-0.02em] leading-[1.1] mb-4">
          Become an API member
        </h1>
        <p className="text-lg text-ink/75 mb-8 max-w-2xl">
          The API is the national body for property valuation and advisory professionals —
          credentials, CPD, advocacy and the Directory, all in one place.
        </p>

        <Card className="mb-6">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-brand-500" />
              <Badge variant="muted">Draft — coming before launch</Badge>
            </div>
            <p className="text-sm text-ink/75 leading-relaxed">
              The production join flow will capture grade eligibility, qualifications,
              employer, state and payment, then route to iMIS for membership creation.
              Stub shown for sandbox review only.
            </p>
          </CardContent>
        </Card>

        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-6">
              <GraduationCap className="w-5 h-5 text-brand-500 mb-2" />
              <h3 className="font-bold text-ink mb-1">Student Member</h3>
              <p className="text-sm text-ink/70">
                For undergraduate and postgraduate students enrolled in an API-accredited
                program.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Award className="w-5 h-5 text-brand-500 mb-2" />
              <h3 className="font-bold text-ink mb-1">Associate AAPI</h3>
              <p className="text-sm text-ink/70">
                For qualified valuers and property professionals meeting experience and
                CPD requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
