"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Sparkles, X, ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CHATBOT_URL = "https://api-chatbot.pages.dev/";

const suggestedPrompts = [
  "Find specific CPV CPD rules",
  "Locate the 2026 Valuation Insights Report",
  "What's my current CPD balance?",
  "Explain Valuation Protocol VP-015",
];

export function MemberConcierge() {
  const [open, setOpen] = React.useState(false);
  const [iframeFailed, setIframeFailed] = React.useState(false);
  const [maximized, setMaximized] = React.useState(false);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          aria-label="Open Member Concierge"
          className={cn(
            "fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full",
            "bg-brand-500 text-white shadow-lg pulse-ring",
            "hover:bg-brand-700 transition-colors",
            "flex items-center justify-center"
          )}
        >
          <Sparkles className="w-7 h-7" />
        </button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <AnimatePresence>
          {open && (
            <>
              <DialogPrimitive.Overlay asChild forceMount>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm"
                />
              </DialogPrimitive.Overlay>

              <DialogPrimitive.Content asChild forceMount>
                <motion.div
                  initial={{ opacity: 0, x: 400 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 400 }}
                  transition={{ type: "tween", duration: 0.25 }}
                  className={cn(
                    "fixed z-50 bg-white shadow-2xl flex flex-col",
                    maximized
                      ? "inset-0 sm:inset-[5vh_5vw] sm:rounded-2xl overflow-hidden"
                      : "right-0 top-0 h-full w-full sm:max-w-md"
                  )}
                >
                  {/* Header */}
                  <div className="h-20 px-5 flex items-center justify-between border-b border-border bg-brand-500 text-white">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-white" />
                      <div>
                        <DialogPrimitive.Title className="text-base font-semibold">Member Concierge</DialogPrimitive.Title>
                        <div className="text-xs text-white/75">AI assistant for standards, CPD, and guidance</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setMaximized((m) => !m)}
                        aria-label={maximized ? "Restore" : "Maximize"}
                        className="hidden sm:inline-flex p-2 hover:bg-white/10 rounded-lg"
                      >
                        {maximized ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                      </button>
                      <DialogPrimitive.Close className="p-2 hover:bg-white/10 rounded-lg">
                        <X className="w-5 h-5" />
                      </DialogPrimitive.Close>
                    </div>
                  </div>

                  {/* Iframe / fallback */}
                  <div className="flex-1 relative">
                    {!iframeFailed ? (
                      <iframe
                        src={CHATBOT_URL}
                        title="Member Concierge Chat"
                        className="w-full h-full border-0"
                        onError={() => setIframeFailed(true)}
                      />
                    ) : (
                      <div className="p-6 flex flex-col items-center justify-center h-full text-center">
                        <div className="w-12 h-12 rounded-full bg-brand-50 grid place-items-center mb-4">
                          <Sparkles className="w-6 h-6 text-brand-500" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Open in new tab</h3>
                        <p className="text-sm text-ink/70 mb-5 max-w-xs">
                          The chatbot can&apos;t be embedded directly. Click below to open it in a new window.
                        </p>
                        <a
                          href={CHATBOT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600"
                        >
                          Launch chatbot <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="px-5 py-3 border-t border-border bg-surface text-[0.7rem] text-[color:var(--color-muted)] text-center">
                    Beta · answers grounded in API Standards via RAG
                  </div>
                </motion.div>
              </DialogPrimitive.Content>
            </>
          )}
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
