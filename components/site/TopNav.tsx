"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const pillars = [
  { label: "Membership Portal", href: "/membership" },
  { label: "Education", href: "/education" },
  { label: "Standards", href: "/standards" },
  { label: "Advocacy", href: "/advocacy" },
  { label: "Directory", href: "/directory" },
];

export function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Hide on authed cockpit layout and login — AuthedNav handles that context
  const inMembership = pathname.startsWith("/membership");
  const onLogin = pathname === "/login";
  if (inMembership || onLogin) return null;

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-500">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo variant="mono" />

        <nav className="hidden lg:flex items-center gap-1">
          {pillars.map((p) => {
            const active = pathname === p.href || pathname.startsWith(p.href + "/");
            return (
              <Link
                key={p.href}
                href={p.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 no-underline hover:no-underline",
                  active ? "text-white bg-white/15" : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {p.label}
                {active && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent-500 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {!inMembership && (
            <Button asChild size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
              <Link href="/login" className="no-underline hover:no-underline">
                <LogIn className="w-4 h-4" /> Member login
              </Link>
            </Button>
          )}
          <Button asChild size="sm" className="bg-action-500 hover:bg-action-600 text-white">
            <Link href="/directory" className="no-underline hover:no-underline">Find a professional</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-white/20 bg-brand-600 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {pillars.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-white no-underline hover:no-underline hover:text-accent-400"
                >
                  {p.label}
                </Link>
              ))}
              <div className="pt-3 flex gap-2 border-t border-white/20 mt-2">
                <Button asChild size="sm" variant="outline" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Link href="/login" className="no-underline hover:no-underline">Member login</Link>
                </Button>
                <Button asChild size="sm" className="flex-1 bg-action-500 hover:bg-action-600 text-white">
                  <Link href="/directory" className="no-underline hover:no-underline">Find a pro</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
