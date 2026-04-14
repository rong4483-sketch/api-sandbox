import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 text-center">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700 mb-3">404</div>
        <h1 className="text-5xl font-serif font-semibold mb-3">Page not found</h1>
        <p className="text-ink/70 mb-6 max-w-md mx-auto">
          The link may have moved — or this may be a page that doesn&apos;t exist in the sandbox yet.
        </p>
        <Button asChild><Link href="/">Back to home</Link></Button>
      </div>
    </div>
  );
}
