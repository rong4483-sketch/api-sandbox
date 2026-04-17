import Link from "next/link";
import { ArrowLeft, School } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "University-Accredited Courses — API Sandbox" };

export default function AccreditedCoursesPage() {
  return (
    <PageShell>
      <Link
        href="/education"
        className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Education
      </Link>

      <PageHeader
        eyebrow="Education · Accreditation"
        title="University-Accredited Courses"
        description="Bachelor's and postgraduate programs accredited by the API across 12 Australian partner universities — the pathway to CPV and Associate AAPI."
      />

      <Card className="max-w-3xl">
        <CardContent className="p-6 space-y-3">
          <div className="flex items-center gap-2">
            <School className="w-4 h-4 text-brand-500" />
            <Badge variant="muted">Draft — coming before launch</Badge>
          </div>
          <p className="text-sm text-ink/75 leading-relaxed">
            The production page will list accredited programs by university, program type
            (Bachelor, Postgraduate, Graduate Diploma) and accreditation status, with a
            plain-English explainer of what API accreditation means for a graduate&rsquo;s
            route to CPV. Stub shown for sandbox review only.
          </p>
        </CardContent>
      </Card>
    </PageShell>
  );
}
