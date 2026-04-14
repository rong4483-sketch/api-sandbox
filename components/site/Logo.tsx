import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "mono";
  href?: string | null;
}

/**
 * API Logo — SVG reconstruction based on the official API mark.
 * Bold "API" in white on a navy block, with the wordmark to the right.
 * Drop the official SVG into /public/brand/logo.svg to replace.
 */
export function Logo({ className, variant = "default", href = "/" }: LogoProps) {
  const fill = variant === "mono" ? "currentColor" : "#002B49";
  const textColor = variant === "mono" ? "currentColor" : "#002B49";

  const mark = (
    <span className={cn("inline-flex items-center gap-3", className)} aria-label="Australian Property Institute">
      <svg viewBox="0 0 72 52" className="h-10 w-auto" aria-hidden="true">
        <rect x="0" y="0" width="72" height="52" rx="3" fill={fill} />
        <text
          x="36"
          y="36"
          textAnchor="middle"
          fontFamily="Helvetica Neue, Roboto, Arial, sans-serif"
          fontSize="28"
          fontWeight="900"
          fill="#FFFFFF"
          letterSpacing="-0.02em"
        >
          API
        </text>
      </svg>
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="text-[0.65rem] font-bold tracking-widest uppercase" style={{ color: textColor }}>
          The Australian
        </span>
        <span className="text-[0.65rem] font-bold tracking-widest uppercase" style={{ color: textColor }}>
          Property Institute
        </span>
      </span>
    </span>
  );

  if (href === null) return mark;
  return (
    <Link href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-500 rounded-lg no-underline hover:no-underline">
      {mark}
    </Link>
  );
}
