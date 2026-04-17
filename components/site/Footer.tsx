"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const linkClass =
  "text-white/70 hover:text-white no-underline hover:underline underline-offset-4 decoration-2 transition-colors duration-150";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/membership") || pathname === "/login") return null;

  return (
    <footer className="bg-brand-500 text-white mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <Logo variant="mono" href={null} />
          <p className="mt-4 text-sm text-white/70 max-w-md leading-relaxed">
            National body for property valuation and advisory professionals — this is a non-production sandbox demonstrating the proposed National-First redesign for API Board review.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            Sandbox preview · fictional data
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Pillars</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/membership" className={linkClass}>Membership Portal</Link></li>
            <li><Link href="/education" className={linkClass}>Education</Link></li>
            <li><Link href="/standards" className={linkClass}>Standards</Link></li>
            <li><Link href="/advocacy" className={linkClass}>Advocacy</Link></li>
            <li><Link href="/directory" className={linkClass}>Directory</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className={linkClass}>About API</Link></li>
            <li><Link href="/about/board" className={linkClass}>Board</Link></li>
            <li><Link href="/about/executive" className={linkClass}>Executive Team</Link></li>
            <li><Link href="/about/staff" className={linkClass}>Our Staff</Link></li>
            <li><Link href="/about/our-committees" className={linkClass}>Committees</Link></li>
            <li><Link href="/about/governance" className={linkClass}>Governance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about/governance" className={linkClass}>Constitution</Link></li>
            <li><Link href="/about/governance" className={linkClass}>Whistleblower</Link></li>
            <li><Link href="#" className={linkClass}>Privacy</Link></li>
            <li><Link href="#" className={linkClass}>Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} Australian Property Institute — Sandbox PoC</span>
          <span>ABN 49 007 505 866</span>
        </div>
      </div>
    </footer>
  );
}
