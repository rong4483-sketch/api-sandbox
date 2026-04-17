import Link from "next/link";
import { ArrowLeft, BookOpen, ShoppingCart } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { textbooks } from "@/lib/mock/textbooks";

export const metadata = { title: "Textbooks — API Sandbox" };

export default function TextbooksPage() {
  return (
    <PageShell>
      <Link href="/education" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6 no-underline hover:no-underline">
        <ArrowLeft className="w-4 h-4" /> Back to Education
      </Link>
      <PageHeader
        eyebrow="Education · Resources"
        title="Textbooks"
        description="Published and curated by the API for property students, practitioners and academics. Prices include GST; shipping within Australia."
      />

      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm text-[color:var(--color-muted)]">{textbooks.length} titles · public catalogue</div>
        <div className="text-sm text-[color:var(--color-muted)]">Members receive 15% off at checkout</div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-white mb-10">
        <table className="w-full text-sm">
          <thead className="bg-surface text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
            <tr>
              <th className="text-left font-bold px-5 py-3">Title</th>
              <th className="text-left font-bold px-5 py-3">Author</th>
              <th className="text-left font-bold px-5 py-3">Format</th>
              <th className="text-left font-bold px-5 py-3">Audience</th>
              <th className="text-right font-bold px-5 py-3">Price</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border align-top">
            {textbooks.map((t) => (
              <tr key={t.slug} className="hover:bg-surface/60 transition-colors duration-150">
                <td className="px-5 py-4">
                  <div className="font-medium text-ink flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                    <div>
                      <div>{t.title}</div>
                      <div className="text-xs text-[color:var(--color-muted)] mt-0.5">{t.year} edition</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-ink/75 whitespace-nowrap">{t.authors}</td>
                <td className="px-5 py-4 text-ink/70">{t.format}</td>
                <td className="px-5 py-4 text-ink/70 max-w-xs">{t.audience}</td>
                <td className="px-5 py-4 text-right font-bold text-ink whitespace-nowrap">${t.price}<span className="text-xs font-normal text-[color:var(--color-muted)] ml-1">inc GST</span></td>
                <td className="px-5 py-4 text-right">
                  <Button size="sm" variant="outline" className="whitespace-nowrap">
                    <ShoppingCart className="w-4 h-4" /> Order
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="rounded-lg border border-border bg-surface p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-brand-500 mb-1">About the catalogue</h2>
            <p className="text-sm text-ink/70 max-w-2xl">The API publishes and curates textbooks to support property education across Australian universities and VET providers. Revenue supports APREF research grants.</p>
          </div>
          <Badge variant="accent">Public resource</Badge>
        </div>
      </section>
    </PageShell>
  );
}
