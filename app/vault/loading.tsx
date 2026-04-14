export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14 space-y-6">
      <div className="skeleton h-12 w-2/3" />
      <div className="skeleton h-6 w-1/2" />
      <div className="skeleton h-28 w-full" />
      <div className="space-y-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="skeleton h-14 w-full" />
        ))}
      </div>
    </div>
  );
}
