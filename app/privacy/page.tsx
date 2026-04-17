import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Privacy — API Sandbox" };

export default function PrivacyPage() {
  return (
    <PageShell>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to home
      </Link>

      <div className="max-w-2xl">
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-accent-700 mb-3">
          Policies
        </div>
        <h1 className="text-[2.5rem] font-bold text-brand-500 tracking-[-0.02em] leading-tight mb-4">
          Privacy Policy
        </h1>

        <Card>
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-500" />
              <Badge variant="muted">Draft — coming before launch</Badge>
            </div>
            <p className="text-sm text-ink/75 leading-relaxed">
              The production policy will cover personal information handling under the
              Privacy Act 1988 (Cth) and the Australian Privacy Principles, cookies and
              analytics, third-party integrations (iMIS, payments, email), and the
              member data lifecycle. Stub shown for sandbox review only.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
