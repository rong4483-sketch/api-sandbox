import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/site/TopNav";
import { Footer } from "@/components/site/Footer";
import { MemberConcierge } from "@/components/concierge/MemberConcierge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "API Sandbox — National-First Redesign",
  description:
    "Stakeholder preview of the proposed Australian Property Institute digital experience — a National-First pillar architecture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <body className="antialiased">
        <TopNav />
        {children}
        <Footer />
        <MemberConcierge />
      </body>
    </html>
  );
}
