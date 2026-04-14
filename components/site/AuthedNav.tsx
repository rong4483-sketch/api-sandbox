"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Award, BookOpen, Library, Megaphone, Users, LogOut, ArrowUpCircle } from "lucide-react";
import { Logo } from "./Logo";
import { currentMember } from "@/lib/mock/member";
import { cn } from "@/lib/utils";

const items = [
  { label: "Dashboard", href: "/membership", icon: LayoutDashboard },
  { label: "Upgrade", href: "/membership/upgrade", icon: ArrowUpCircle },
  { label: "Education", href: "/education", icon: BookOpen },
  { label: "Standards", href: "/standards", icon: Library },
  { label: "Advocacy", href: "/advocacy", icon: Megaphone },
  { label: "Directory", href: "/directory", icon: Users },
];

export function AuthedNav() {
  const pathname = usePathname();
  const initials = `${currentMember.firstName[0]}${currentMember.lastName[0]}`;

  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 bg-white border-r border-border">
      <div className="h-20 px-6 flex items-center border-b border-border">
        <Logo />
      </div>

      <div className="px-4 py-5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-brand-500 text-white grid place-items-center font-bold">
            {initials}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold truncate">
              {currentMember.firstName} {currentMember.lastName}
            </div>
            <div className="text-xs text-[color:var(--color-muted)] flex items-center gap-1">
              <Award className="w-3 h-3" />
              {currentMember.grade} · {currentMember.certifications.join(", ")}
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {items.map((it) => {
          const active = pathname === it.href;
          const Icon = it.icon;
          return (
            <Link
              key={it.href}
              href={it.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 no-underline hover:no-underline",
                active
                  ? "bg-brand-50 text-brand-500"
                  : "text-ink/70 hover:bg-surface hover:text-ink"
              )}
            >
              <Icon className="w-5 h-5" />
              {it.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-border">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-ink/70 hover:bg-surface no-underline hover:no-underline"
        >
          <LogOut className="w-5 h-5" /> Sign out
        </Link>
      </div>
    </aside>
  );
}
