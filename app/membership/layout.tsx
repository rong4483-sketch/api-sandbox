import { AuthedNav } from "@/components/site/AuthedNav";

export default function CockpitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <AuthedNav />
      <div className="lg:pl-72">{children}</div>
    </div>
  );
}
