"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/membership") || pathname === "/login") return null;

  return (
    <footer className="bg-brand-500 text-white mt-20">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <Logo variant="mono" href={null} />
          <p className="mt-3 text-sm text-white/70 max-w-md">
            National body for property valuation and advisory professionals — this is a non-production sandbox demonstrating the proposed National-First redesign for API Board review.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            Sandbox preview · fictional data
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white mb-3">Pillars</h4>
          <ul className="space-y-1.5 text-sm text-white/70">
            <li><Link href="/membership" className="hover:text-white no-underline hover:underline">Membership Portal</Link></li>
            <li><Link href="/education" className="hover:text-white no-underline hover:underline">Education</Link></li>
            <li><Link href="/standards" className="hover:text-white no-underline hover:underline">Standards</Link></li>
            <li><Link href="/advocacy" className="hover:text-white no-underline hover:underline">Advocacy</Link></li>
            <li><Link href="/directory" className="hover:text-white no-underline hover:underline">Directory</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white mb-3">About</h4>
          <ul className="space-y-1.5 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-white no-underline hover:underline">About API</Link></li>
            <li><Link href="/about/board" className="hover:text-white no-underline hover:underline">Board</Link></li>
            <li><Link href="/about/executive" className="hover:text-white no-underline hover:underline">Executive Team</Link></li>
            <li><Link href="/about/staff" className="hover:text-white no-underline hover:underline">Our Staff</Link></li>
            <li><Link href="/about/our-committees" className="hover:text-white no-underline hover:underline">Committees</Link></li>
            <li><Link href="/about/governance" className="hover:text-white no-underline hover:underline">Governance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white mb-3">Policies</h4>
          <ul className="space-y-1.5 text-sm text-white/70">
            <li><Link href="/about/governance" className="hover:text-white no-underline hover:underline">Constitution</Link></li>
            <li><Link href="/about/governance" className="hover:text-white no-underline hover:underline">Whistleblower</Link></li>
            <li><Link href="#" className="hover:text-white no-underline hover:underline">Privacy</Link></li>
            <li><Link href="#" className="hover:text-white no-underline hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} Australian Property Institute — Sandbox PoC</span>
          <span>ABN 49 007 505 866</span>
        </div>
      </div>
    </footer>
  );
}
