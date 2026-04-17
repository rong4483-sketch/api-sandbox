import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Contact — API Sandbox" };

export default function ContactPage() {
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
          Support
        </div>
        <h1 className="text-[2.5rem] font-bold text-brand-500 tracking-[-0.02em] leading-tight mb-4">
          Contact the API
        </h1>

        <Card className="mb-4">
          <CardContent className="p-6 space-y-3">
            <Badge variant="muted">Draft — coming before launch</Badge>
            <p className="text-sm text-ink/75 leading-relaxed">
              The production contact page will route enquiries by topic — membership,
              education, Standards, media, and APIV — to the right team with SLA
              expectations. Stub shown for sandbox review only.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-muted)] mb-4">
              National Office
            </h2>
            <ul className="space-y-3 text-sm text-ink/80">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-500 mt-0.5" />
                <span>General enquiries — published at launch</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-500 mt-0.5" />
                <span>Member Services — published at launch</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-500 mt-0.5" />
                <span>Level 2, 37 Bligh Street, Sydney NSW 2000</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
