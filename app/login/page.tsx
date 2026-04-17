"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Fingerprint, Loader2, CheckCircle2, ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/site/Logo";
import { currentMember } from "@/lib/mock/member";

type State = "idle" | "magic-sent" | "biometric-scanning" | "success";

export default function LoginPage() {
  const router = useRouter();
  const [state, setState] = useState<State>("idle");
  const [email, setEmail] = useState(currentMember.email);

  const sendMagicLink = (e: React.FormEvent) => {
    e.preventDefault();
    setState("magic-sent");
  };

  const startBiometric = () => {
    setState("biometric-scanning");
    setTimeout(() => {
      setState("success");
      setTimeout(() => router.push("/membership"), 600);
    }, 1800);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Brand panel — navy with architectural image */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=900&fit=crop&q=80')",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-brand-500/70" aria-hidden />
        <div className="relative">
          <Logo variant="mono" href="/" />
        </div>

        <div className="relative max-w-md">
          <h2 className="text-[2.5rem] font-bold leading-tight tracking-[-0.02em]">
            Welcome back to your professional home.
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            A modern, frictionless sign-in for API members —
            no yellow buttons, no password juggling, just secure passwordless access.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
            <div><div className="text-2xl font-bold text-accent-400">9,000+</div><div className="text-white/60">Members</div></div>
            <div><div className="text-2xl font-bold text-accent-400">$11T</div><div className="text-white/60">Property market</div></div>
            <div><div className="text-2xl font-bold text-accent-400">100+</div><div className="text-white/60">Years</div></div>
          </div>
        </div>

        <div className="relative text-xs text-white/50 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" /> Secured by passkey + magic link · no passwords stored
        </div>
      </div>

      {/* Auth card */}
      <div className="flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-ink mb-8 lg:hidden no-underline hover:no-underline">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <AnimatePresence mode="wait">
            {state === "idle" && (
              <motion.div key="idle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <h1 className="text-[2rem] font-bold mb-2 text-brand-500">Sign in</h1>
                <p className="text-ink/70 mb-8">Choose how you&apos;d like to sign in today.</p>

                <form onSubmit={sendMagicLink} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Member email</label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Mail className="w-4 h-4" /> Send magic link
                  </Button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
                  <div className="relative flex justify-center text-xs uppercase tracking-wider">
                    <span className="bg-white px-3 text-[color:var(--color-muted)]">Or</span>
                  </div>
                </div>

                <Button variant="outline" size="lg" className="w-full" onClick={startBiometric}>
                  <Fingerprint className="w-5 h-5 text-brand-500" /> Use biometric (passkey)
                </Button>

                <p className="mt-8 text-center text-sm text-[color:var(--color-muted)]">
                  New to API? <Link href="/join" className="text-brand-500 font-medium hover:underline">Become a member</Link>
                </p>
              </motion.div>
            )}

            {state === "magic-sent" && (
              <motion.div key="magic" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-brand-50 grid place-items-center mb-6">
                  <Mail className="w-7 h-7 text-brand-500" />
                </div>
                <h1 className="text-[2rem] font-bold mb-3 text-brand-500">Check your inbox</h1>
                <p className="text-ink/70 mb-8">
                  We&apos;ve sent a secure sign-in link to <strong className="text-ink">{email}</strong>.
                  Click the link and you&apos;ll be signed straight into your dashboard.
                </p>
                <div className="rounded-lg border-2 border-dashed border-accent-500/40 bg-accent-500/5 p-4 mb-6 text-sm text-ink/80">
                  <strong>Sandbox shortcut:</strong> magic links are simulated — click below to continue.
                </div>
                <Button size="lg" className="w-full" onClick={() => router.push("/membership")}>
                  Continue to dashboard
                </Button>
                <button onClick={() => setState("idle")} className="mt-4 text-sm text-[color:var(--color-muted)] hover:text-ink">
                  Use a different email
                </button>
              </motion.div>
            )}

            {state === "biometric-scanning" && (
              <motion.div key="scan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="mx-auto w-24 h-24 rounded-full bg-brand-50 grid place-items-center mb-8"
                >
                  <Fingerprint className="w-12 h-12 text-brand-500" />
                </motion.div>
                <h1 className="text-2xl font-bold mb-2 text-brand-500">Verifying your passkey</h1>
                <p className="text-ink/70 flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Follow the prompt on your device
                </p>
              </motion.div>
            )}

            {state === "success" && (
              <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="mx-auto w-24 h-24 rounded-full bg-green-50 grid place-items-center mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Welcome back, {currentMember.firstName}</h1>
                <p className="text-ink/70">Taking you to your dashboard…</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
