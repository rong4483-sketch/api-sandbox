import { UpgradeStepper } from "@/components/cockpit/UpgradeStepper";
import { Badge } from "@/components/ui/badge";

export default function UpgradePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <Badge variant="accent" className="mb-3">Provisional → Associate</Badge>
        <h1 className="text-4xl font-serif font-semibold text-ink">Upgrade your membership</h1>
        <p className="mt-2 text-ink/70">
          Four steps. Clear criteria. The path from Provisional to full Associate — the pathway that didn&apos;t exist on the old site.
        </p>
      </div>
      <UpgradeStepper />
    </div>
  );
}
