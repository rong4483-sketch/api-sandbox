import { PageShell, PageHeader } from "@/components/site/PageShell";
import { DirectorySearch } from "@/components/directory/DirectorySearch";

export default function DirectoryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="The Directory"
        title="Find a Property Professional."
        description="Search 9,000+ API-certified valuers and property professionals. Filters update the results immediately — no apply button, no silent failures."
      />
      <DirectorySearch />
    </PageShell>
  );
}
