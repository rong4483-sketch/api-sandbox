"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/membership") || pathname === "/login") return null;

  return (
    <footer className="border-t border-border bg-white mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Logo href={null} />
          <p className="mt-4 text-sm text-[color:var(--color-muted)] max-w-md">
            National body for property valuation and advisory professionals — this is a
            non-production sandbox demonstrating the proposed &quot;National-First&quot;
            redesign for stakeholder review.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            Sandbox preview · fictional data
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink mb-3 font-sans">Pillars</h4>
          <ul className="space-y-2 text-sm text-ink/75">
            <li><Link href="/membership" className="hover:text-brand-600">Membership Portal</Link></li>
            <li><Link href="/education" className="hover:text-brand-600">Education</Link></li>
            <li><Link href="/standards" className="hover:text-brand-600">Standards</Link></li>
            <li><Link href="/advocacy" className="hover:text-brand-600">Advocacy</Link></li>
            <li><Link href="/directory" className="hover:text-brand-600">Directory</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink mb-3 font-sans">About</h4>
          <ul className="space-y-2 text-sm text-ink/75">
            <li><Link href="/about" className="hover:text-brand-600">About API</Link></li>
            <li><Link href="/about/our-committees" className="hover:text-brand-600">Our Committees</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Whistleblower Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[color:var(--color-muted)]">
          <span>© {new Date().getFullYear()} Australian Property Institute — Sandbox PoC</span>
          <span>ABN 49 007 505 866</span>
        </div>
      </div>
    </footer>
  );
}
