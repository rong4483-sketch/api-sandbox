import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-brand-50 text-brand-700",
        accent: "bg-accent-500/15 text-accent-700",
        outline: "border border-border text-ink",
        success: "bg-green-50 text-green-700",
        warning: "bg-amber-50 text-amber-700",
        danger: "bg-red-50 text-red-700",
        muted: "bg-slate-100 text-slate-700",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
