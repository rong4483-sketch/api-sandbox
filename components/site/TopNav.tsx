"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const pillars = [
  { label: "Membership Portal", href: "/membership" },
  { label: "Education", href: "/education" },
  { label: "Standards", href: "/standards" },
  { label: "Advocacy", href: "/advocacy" },
  { label: "Directory", href: "/directory" },
  { label: "About", href: "/about" },
];

export function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const inMembership = pathname.startsWith("/membership");
  const onLogin = pathname === "/login";

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  if (inMembership || onLogin) return null;

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-500">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-8">
        <Logo variant="mono" />

        <nav className="hidden lg:flex items-center gap-6">
          {pillars.map((p) => {
            const active = pathname === p.href || pathname.startsWith(p.href + "/");
            return (
              <Link
                key={p.href}
                href={p.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-1 py-2 text-[15px] font-medium transition-colors duration-150 no-underline hover:no-underline group",
                  active ? "text-white" : "text-white/80 hover:text-white"
                )}
              >
                {p.label}
                <span
                  className={cn(
                    "absolute left-0 -bottom-0.5 h-0.5 bg-accent-500 transition-[width] duration-200 ease-out",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white hover:-translate-y-0 hover:shadow-none">
            <Link href="/login" className="no-underline hover:no-underline">
              <LogIn className="w-4 h-4" /> Member login
            </Link>
          </Button>
          <Button asChild size="sm" variant="accent">
            <Link href="/directory" className="no-underline hover:no-underline">Find a professional</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/20 bg-brand-600">
          <div className="px-6 py-4 space-y-1">
            {pillars.map((p) => {
              const active = pathname === p.href || pathname.startsWith(p.href + "/");
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-3 py-3 text-base font-medium no-underline hover:no-underline rounded-lg transition-colors",
                    active ? "bg-white/15 text-white" : "text-white/90 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {p.label}
                </Link>
              );
            })}
            <div className="pt-3 flex gap-2 border-t border-white/20 mt-2">
              <Button asChild size="sm" variant="outline" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link href="/login" className="no-underline hover:no-underline">Member login</Link>
              </Button>
              <Button asChild size="sm" variant="accent" className="flex-1">
                <Link href="/directory" className="no-underline hover:no-underline">Find a pro</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
