export function CockpitSkeleton() {
  return (
    <div className="space-y-6">
      <div className="skeleton h-32 w-full" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="skeleton h-60" />
        <div className="skeleton h-60" />
      </div>
      <div className="skeleton h-40" />
    </div>
  );
}
