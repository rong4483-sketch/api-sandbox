"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  constrain?: boolean;
}

export function PageShell({ children, className, constrain = true }: PageShellProps) {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageTransition}
      className={cn(
        "min-h-[70vh]",
        constrain && "mx-auto max-w-7xl px-6 py-10 md:py-14",
        className
      )}
    >
      {children}
    </motion.main>
  );
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700 mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-ink leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-lg text-ink/70 max-w-2xl">{description}</p>
        )}
      </div>
      {actions && <div className="flex gap-2 flex-wrap">{actions}</div>}
    </div>
  );
}
