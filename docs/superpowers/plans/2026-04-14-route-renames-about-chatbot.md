# Route Renames, About Pages & Nav Updates — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename three routes (Cockpit→Membership Portal, Academy→Education, Vault→Standards), add About and Committees pages, update all navigation, and add About links to the footer.

**Architecture:** Folder renames for routes, content updates across nav components and homepage, two new page files under `app/about/`. The chatbot iframe integration is already complete — no work needed there.

**Tech Stack:** Next.js 15 App Router, React 19, Tailwind v4, shadcn/ui, Framer Motion, Lucide React

---

## File Structure

### Files to create
- `app/about/page.tsx` — About API page
- `app/about/our-committees/page.tsx` — Committees page

### Files to move (folder renames)
- `app/cockpit/` → `app/membership/`
- `app/academy/` → `app/education/`
- `app/vault/` → `app/standards/`
- `components/skeletons/CockpitSkeleton.tsx` → `components/skeletons/MembershipSkeleton.tsx`

### Files to modify (content updates)
- `components/site/TopNav.tsx` — pillar labels, hrefs, pathname check
- `components/site/AuthedNav.tsx` — sidebar labels, hrefs, icons
- `components/site/Footer.tsx` — pillar links, pathname check, add About section
- `app/page.tsx` — homepage pillar grid labels/hrefs/descriptions, beforeAfter references, CTA section
- `app/login/page.tsx` — redirect target `/cockpit` → `/membership`
- `app/membership/page.tsx` (after move) — import path for skeleton, link to `/education/cpv`
- `app/membership/upgrade/page.tsx` (after move) — import path for UpgradeStepper
- `app/education/page.tsx` (after move) — eyebrow text, certification link hrefs
- `app/education/[slug]/page.tsx` (after move) — back link, upgrade link
- `app/standards/page.tsx` (after move) — eyebrow text
- `components/cockpit/QuickActions.tsx` — upgrade href
- `components/cockpit/UpgradeStepper.tsx` — back link, CPV link text
- `lib/mock/certifications.ts` — "Cockpit" text reference

---

### Task 1: Rename route folders

Since there is no local Node.js, all changes are made to files in the OneDrive working copy then pushed via git. Folder renames are done by moving files.

**Files:**
- Move: `app/cockpit/` → `app/membership/`
- Move: `app/academy/` → `app/education/`
- Move: `app/vault/` → `app/standards/`
- Move: `components/skeletons/CockpitSkeleton.tsx` → `components/skeletons/MembershipSkeleton.tsx`

- [ ] **Step 1: Move cockpit folder to membership**

```bash
mv "app/cockpit" "app/membership"
```

- [ ] **Step 2: Move academy folder to education**

```bash
mv "app/academy" "app/education"
```

- [ ] **Step 3: Move vault folder to standards**

```bash
mv "app/vault" "app/standards"
```

- [ ] **Step 4: Rename CockpitSkeleton to MembershipSkeleton**

```bash
mv "components/skeletons/CockpitSkeleton.tsx" "components/skeletons/MembershipSkeleton.tsx"
```

- [ ] **Step 5: Update MembershipSkeleton export name**

In `components/skeletons/MembershipSkeleton.tsx`, change:

```tsx
export function CockpitSkeleton() {
```

to:

```tsx
export function MembershipSkeleton() {
```

- [ ] **Step 6: Verify folder structure**

```bash
ls app/membership/ app/education/ app/standards/ components/skeletons/
```

Expected: `membership/` contains `layout.tsx`, `page.tsx`, `upgrade/`. `education/` contains `page.tsx`, `[slug]/`. `standards/` contains `page.tsx`, `loading.tsx`. Skeletons contains `MembershipSkeleton.tsx`.

---

### Task 2: Update TopNav

**Files:**
- Modify: `components/site/TopNav.tsx`

- [ ] **Step 1: Update pillars array**

Change lines 12-18 from:

```tsx
export const pillars = [
  { label: "Cockpit", href: "/cockpit" },
  { label: "Academy", href: "/academy" },
  { label: "Vault", href: "/vault" },
  { label: "Advocacy", href: "/advocacy" },
  { label: "Directory", href: "/directory" },
];
```

to:

```tsx
export const pillars = [
  { label: "Membership Portal", href: "/membership" },
  { label: "Education", href: "/education" },
  { label: "Standards", href: "/standards" },
  { label: "Advocacy", href: "/advocacy" },
  { label: "Directory", href: "/directory" },
];
```

- [ ] **Step 2: Update pathname check for hiding nav**

Change line 25-26 from:

```tsx
  const inCockpit = pathname.startsWith("/cockpit");
  const onLogin = pathname === "/login";
  if (inCockpit || onLogin) return null;
```

to:

```tsx
  const inMembership = pathname.startsWith("/membership");
  const onLogin = pathname === "/login";
  if (inMembership || onLogin) return null;
```

- [ ] **Step 3: Update inCockpit reference in login button**

Change line 59 from:

```tsx
          {!inCockpit && (
```

to:

```tsx
          {!inMembership && (
```

---

### Task 3: Update AuthedNav

**Files:**
- Modify: `components/site/AuthedNav.tsx`

- [ ] **Step 1: Update items array**

Change lines 10-17 from:

```tsx
const items = [
  { label: "Dashboard", href: "/cockpit", icon: LayoutDashboard },
  { label: "Upgrade", href: "/cockpit/upgrade", icon: ArrowUpCircle },
  { label: "Academy", href: "/academy", icon: BookOpen },
  { label: "Vault", href: "/vault", icon: Library },
  { label: "Advocacy", href: "/advocacy", icon: Megaphone },
  { label: "Directory", href: "/directory", icon: Users },
];
```

to:

```tsx
const items = [
  { label: "Dashboard", href: "/membership", icon: LayoutDashboard },
  { label: "Upgrade", href: "/membership/upgrade", icon: ArrowUpCircle },
  { label: "Education", href: "/education", icon: BookOpen },
  { label: "Standards", href: "/standards", icon: Library },
  { label: "Advocacy", href: "/advocacy", icon: Megaphone },
  { label: "Directory", href: "/directory", icon: Users },
];
```

---

### Task 4: Update Footer

**Files:**
- Modify: `components/site/Footer.tsx`

- [ ] **Step 1: Update pathname check**

Change line 9 from:

```tsx
  if (pathname.startsWith("/cockpit") || pathname === "/login") return null;
```

to:

```tsx
  if (pathname.startsWith("/membership") || pathname === "/login") return null;
```

- [ ] **Step 2: Update Pillars list and add About section**

Change lines 27-35 from:

```tsx
        <div>
          <h4 className="text-sm font-semibold text-ink mb-3 font-sans">Pillars</h4>
          <ul className="space-y-2 text-sm text-ink/75">
            <li><Link href="/cockpit" className="hover:text-brand-600">Cockpit</Link></li>
            <li><Link href="/academy" className="hover:text-brand-600">Academy</Link></li>
            <li><Link href="/vault" className="hover:text-brand-600">Vault</Link></li>
            <li><Link href="/advocacy" className="hover:text-brand-600">Advocacy</Link></li>
            <li><Link href="/directory" className="hover:text-brand-600">Directory</Link></li>
          </ul>
        </div>
```

to:

```tsx
        <div>
          <h4 className="text-sm font-semibold text-ink mb-3 font-sans">Pillars</h4>
          <ul className="space-y-2 text-sm text-ink/75">
            <li><Link href="/membership" className="hover:text-brand-600">Membership Portal</Link></li>
            <li><Link href="/education" className="hover:text-brand-600">Education</Link></li>
            <li><Link href="/standards" className="hover:text-brand-600">Standards</Link></li>
            <li><Link href="/advocacy" className="hover:text-brand-600">Advocacy</Link></li>
            <li><Link href="/directory" className="hover:text-brand-600">Directory</Link></li>
          </ul>
        </div>
```

- [ ] **Step 3: Replace Governance column with About + Governance combined**

Change lines 37-44 from:

```tsx
        <div>
          <h4 className="text-sm font-semibold text-ink mb-3 font-sans">Governance</h4>
          <ul className="space-y-2 text-sm text-ink/75">
            <li><Link href="#" className="hover:text-brand-600">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Whistleblower Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Feedback</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Contact</Link></li>
          </ul>
        </div>
```

to:

```tsx
        <div>
          <h4 className="text-sm font-semibold text-ink mb-3 font-sans">About</h4>
          <ul className="space-y-2 text-sm text-ink/75">
            <li><Link href="/about" className="hover:text-brand-600">About API</Link></li>
            <li><Link href="/about/our-committees" className="hover:text-brand-600">Our Committees</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Whistleblower Policy</Link></li>
            <li><Link href="#" className="hover:text-brand-600">Contact</Link></li>
          </ul>
        </div>
```

---

### Task 5: Update Homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update pillars array**

Change lines 14-19 from:

```tsx
const pillars = [
  { label: "The Cockpit",  href: "/cockpit",   icon: LayoutDashboard, purpose: "Personalised member admin — CPD, renewals, invoices, profile.", fixes: "Replaces the fragmented 'Hub' with a true authenticated home base." },
  { label: "The Academy",  href: "/academy",   icon: BookOpen,       purpose: "All learning pathways — certifications, accredited courses, webinars.", fixes: "Ends the Education vs Membership menu overlap." },
  { label: "The Vault",    href: "/vault",     icon: Library,        purpose: "Searchable valuation protocols and standards archive.",               fixes: "Surfaces 20+ years of standards in one indexed, filterable home." },
  { label: "Advocacy Hub", href: "/advocacy",  icon: Megaphone,      purpose: "National campaigns, policy submissions, insights reports.",           fixes: "Gives profession-facing content a dedicated, discoverable home." },
  { label: "The Directory",href: "/directory", icon: Users,          purpose: "Public 'Find a Property Professional' with modern filters.",          fixes: "Live filters, postcode/suburb lookup, plain-language expertise." },
];
```

to:

```tsx
const pillars = [
  { label: "Membership Portal", href: "/membership", icon: LayoutDashboard, purpose: "Personalised member admin — CPD, renewals, invoices, profile.", fixes: "Replaces the fragmented 'Hub' with a true authenticated home base." },
  { label: "Education",         href: "/education",  icon: BookOpen,       purpose: "All learning pathways — certifications, accredited courses, webinars.", fixes: "Ends the Education vs Membership menu overlap." },
  { label: "Standards",         href: "/standards",  icon: Library,        purpose: "Searchable valuation protocols and standards archive.",               fixes: "Surfaces 20+ years of standards in one indexed, filterable home." },
  { label: "Advocacy Hub",      href: "/advocacy",   icon: Megaphone,      purpose: "National campaigns, policy submissions, insights reports.",           fixes: "Gives profession-facing content a dedicated, discoverable home." },
  { label: "The Directory",     href: "/directory",  icon: Users,          purpose: "Public 'Find a Property Professional' with modern filters.",          fixes: "Live filters, postcode/suburb lookup, plain-language expertise." },
];
```

- [ ] **Step 2: Update beforeAfter references**

Change lines 23-24 from:

```tsx
  { failure: "No CPV-specific CPD requirements visible on-site", fix: "/academy/cpv lists full structured + unstructured breakdown on the page itself" },
  { failure: "No Student → Associate upgrade pathway exists",    fix: "/cockpit/upgrade multi-step wizard with eligibility, evidence, payment, confirmation" },
```

to:

```tsx
  { failure: "No CPV-specific CPD requirements visible on-site", fix: "/education/cpv lists full structured + unstructured breakdown on the page itself" },
  { failure: "No Student → Associate upgrade pathway exists",    fix: "/membership/upgrade multi-step wizard with eligibility, evidence, payment, confirmation" },
```

- [ ] **Step 3: Update CTA section**

Change lines 154-155 from:

```tsx
          Sign in as Jane Valuer (Associate, CPV) to explore The Cockpit — or jump straight into the public Directory.
        </p>
```

to:

```tsx
          Sign in as Jane Valuer (Associate, CPV) to explore the Membership Portal — or jump straight into the public Directory.
        </p>
```

Change line 158 from:

```tsx
          <Button asChild size="lg" variant="outline"><Link href="/vault">Browse standards</Link></Button>
```

to:

```tsx
          <Button asChild size="lg" variant="outline"><Link href="/standards">Browse standards</Link></Button>
```

- [ ] **Step 4: Commit renames and nav updates**

```bash
git add -A
git commit -m "refactor: rename Cockpit→Membership Portal, Academy→Education, Vault→Standards

Update all route folders, nav components, footer, and homepage references.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 6: Update internal cross-references

**Files:**
- Modify: `app/login/page.tsx` (lines 29, 130)
- Modify: `app/membership/page.tsx` (lines 10, 89)
- Modify: `app/education/page.tsx` (lines 25, 60)
- Modify: `app/education/[slug]/page.tsx` (lines 22, 106)
- Modify: `components/cockpit/QuickActions.tsx` (line 9)
- Modify: `components/cockpit/UpgradeStepper.tsx` (lines 151, 152)
- Modify: `lib/mock/certifications.ts` (line 56)

- [ ] **Step 1: Update login page redirect**

In `app/login/page.tsx`, change all instances of `/cockpit` to `/membership`:

Line 29:
```tsx
      setTimeout(() => router.push("/membership"), 600);
```

Line 130:
```tsx
                <Button size="lg" className="w-full" onClick={() => router.push("/membership")}>
```

- [ ] **Step 2: Update membership dashboard imports and links**

In `app/membership/page.tsx`:

Change line 10 from:
```tsx
import { CockpitSkeleton } from "@/components/skeletons/CockpitSkeleton";
```
to:
```tsx
import { MembershipSkeleton } from "@/components/skeletons/MembershipSkeleton";
```

Change line 28 from:
```tsx
        <CockpitSkeleton />
```
to:
```tsx
        <MembershipSkeleton />
```

Change line 89 from:
```tsx
              <Link href="/academy/cpv" className="inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-500">
```
to:
```tsx
              <Link href="/education/cpv" className="inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-500">
```

- [ ] **Step 3: Update education page eyebrow and links**

In `app/education/page.tsx`:

Change line 25 (the PageHeader eyebrow) from:
```tsx
        eyebrow="The Academy"
```
to:
```tsx
        eyebrow="Education"
```

Change line 26 (the title) from:
```tsx
        title="Learning that counts — towards your credential, and your career."
```
to:
```tsx
        title="Learning that counts — towards your credential, and your career."
```
(title stays the same)

Change line 60 from:
```tsx
            <Link key={c.slug} href={`/academy/${c.slug}`} className="block group">
```
to:
```tsx
            <Link key={c.slug} href={`/education/${c.slug}`} className="block group">
```

- [ ] **Step 4: Update education [slug] page links**

In `app/education/[slug]/page.tsx`:

Change line 22 from:
```tsx
      <Link href="/academy" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6">
```
to:
```tsx
      <Link href="/education" className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-muted)] hover:text-ink mb-6">
```

Change line 106 from:
```tsx
                <Link href="/cockpit/upgrade">Apply now</Link>
```
to:
```tsx
                <Link href="/membership/upgrade">Apply now</Link>
```

- [ ] **Step 5: Update standards page eyebrow**

In `app/standards/page.tsx`:

Change line 42 (the PageHeader eyebrow) from:
```tsx
        eyebrow="The Vault"
```
to:
```tsx
        eyebrow="Standards"
```

- [ ] **Step 6: Update cockpit component cross-references**

In `components/cockpit/QuickActions.tsx`, change line 9 from:
```tsx
  { label: "Upgrade membership",   icon: ArrowUpCircle, href: "/cockpit/upgrade", accent: true },
```
to:
```tsx
  { label: "Upgrade membership",   icon: ArrowUpCircle, href: "/membership/upgrade", accent: true },
```

In `components/cockpit/UpgradeStepper.tsx`, change line 151 from:
```tsx
                  <Button asChild><Link href="/cockpit">Back to Cockpit</Link></Button>
```
to:
```tsx
                  <Button asChild><Link href="/membership">Back to Dashboard</Link></Button>
```

Change line 152 from:
```tsx
                  <Button asChild variant="outline"><Link href="/academy/cpv">Plan my CPV next</Link></Button>
```
to:
```tsx
                  <Button asChild variant="outline"><Link href="/education/cpv">Plan my CPV next</Link></Button>
```

- [ ] **Step 7: Update mock data reference**

In `lib/mock/certifications.ts`, change line 56 from:
```tsx
          { label: "Submit annual CPD declaration via Cockpit" },
```
to:
```tsx
          { label: "Submit annual CPD declaration via Membership Portal" },
```

- [ ] **Step 8: Commit cross-reference updates**

```bash
git add -A
git commit -m "fix: update all internal cross-references to new route names

Login redirect, certification links, upgrade stepper, quick actions,
and mock data all point to /membership, /education, /standards.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 7: Create About page

**Files:**
- Create: `app/about/page.tsx`

- [ ] **Step 1: Create the About page**

Create `app/about/page.tsx` with the following content:

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lightbulb, Users, Shield, ArrowRight } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/lib/motion";

const values = [
  { label: "Innovation", desc: "To lead an innovation agenda", icon: Lightbulb },
  { label: "Inclusivity", desc: "To embrace inclusivity", icon: Users },
  { label: "Courage", desc: "To act courageously", icon: Shield },
];

const objectives = [
  { label: "Future Focused", desc: "Supporting the sector to respond and adapt to a changing operational landscape." },
  { label: "A Strong and Sustainable Association", desc: "The foundation supporting our Members." },
  { label: "Powerful Voice", desc: "Raise the profile and drive positive change for the property profession." },
  { label: "Skilled Professionals", desc: "Nurture skilled and confident property professionals." },
];

const timeline = [
  { year: "1926", event: "Founded as the Commonwealth Institute of Valuers & 1st division established." },
  { year: "1941", event: "First Convention." },
  { year: "1962", event: "First Female Member." },
  { year: "1991", event: "Renamed to Australian Institute of Valuers & Land Economists Incorporated." },
  { year: "1998", event: "Renamed to Australian Property Institute Incorporated." },
  { year: "2016", event: "API becomes a unified national institute (API Limited)." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="About API"
        description="Our journey so far."
      />

      <motion.div initial="hidden" animate="show" variants={staggerContainer} className="space-y-20">
        {/* About Us */}
        <motion.section variants={fadeUp}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-serif font-semibold">About Us</h2>
            <Badge variant="accent" className="text-sm">Close to 8,000 Members</Badge>
          </div>
          <div className="space-y-4 text-ink/80 leading-relaxed max-w-3xl">
            <p>
              Leading the industry, we set and maintain the highest standards of professional practice,
              education, ethics, and professional conduct for our Members. As a result, the work of the
              API raises the bar for the entire property profession.
            </p>
            <p>
              Representing a wide range of property professionals, we advocate for our Members with a
              range of stakeholders, providing the professional recognition each Member deserves. In turn,
              all Members of the API are highly qualified, highly skilled professionals with up-to-date
              professional development and experience.
            </p>
            <p>
              Our Members can be found across all sectors of the property profession &ndash; in private
              practice and in the public sector. This broad base of qualified and skilled professionals is
              unique to the API as we are dedicated to expanding the expertise and knowledge of our Members,
              building a strong base for the future of the property profession.
            </p>
          </div>
        </motion.section>

        {/* Vision */}
        <motion.section variants={fadeUp}>
          <h2 className="text-3xl font-serif font-semibold mb-4">Vision</h2>
          <p className="text-xl text-ink/80 italic max-w-2xl">
            &ldquo;To shape the future of property professionals.&rdquo;
          </p>
        </motion.section>

        {/* Values */}
        <motion.section variants={fadeUp}>
          <h2 className="text-3xl font-serif font-semibold mb-6">Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.label}>
                  <CardContent className="p-7">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 grid place-items-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2">{v.label}</h3>
                    <p className="text-sm text-ink/75">{v.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.section>

        {/* Strategic Objectives */}
        <motion.section variants={fadeUp}>
          <h2 className="text-3xl font-serif font-semibold mb-6">Strategic Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((o) => (
              <Card key={o.label}>
                <CardContent className="p-7">
                  <h3 className="font-serif text-lg font-semibold mb-2">{o.label}</h3>
                  <p className="text-sm text-ink/75">{o.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* A Brief History */}
        <motion.section variants={fadeUp}>
          <h2 className="text-3xl font-serif font-semibold mb-8">A Brief History</h2>
          <div className="relative pl-8 border-l-2 border-accent-500 space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full bg-accent-500 border-2 border-white" />
                <div className="text-sm font-semibold text-accent-600 mb-1">{t.year}</div>
                <p className="text-ink/80">{t.event}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Link to Committees */}
        <motion.section variants={fadeUp}>
          <Card className="bg-brand-500 text-white border-0">
            <CardContent className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Our Committees</h3>
                <p className="text-white/80">
                  Working with industry professionals to help shape the future.
                </p>
              </div>
              <Button asChild variant="accent" size="lg">
                <Link href="/about/our-committees">
                  View committees <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </PageShell>
  );
}
```

- [ ] **Step 2: Commit About page**

```bash
git add app/about/page.tsx
git commit -m "feat: add About API page with vision, values, history timeline

Content sourced from live api.org.au/about/ — includes About Us,
Vision, Values, Strategic Objectives, and Brief History sections.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 8: Create Committees page

**Files:**
- Create: `app/about/our-committees/page.tsx`

- [ ] **Step 1: Create the Committees page**

Create `app/about/our-committees/page.tsx` with the following content:

```tsx
"use client";

import { motion } from "framer-motion";
import { Lightbulb, Map, GraduationCap, Scale, Home, BookOpen, FlaskConical } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/lib/motion";

const committees = [
  {
    name: "Innovation Futures Advisory Group",
    desc: "Providing sector insights, guiding the Australian Property Institute\u2019s future.",
    icon: Lightbulb,
  },
  {
    name: "State Committees",
    desc: "Shaping our advocacy agenda and providing critical advice and insight into issues arising in the industry.",
    icon: Map,
  },
  {
    name: "YPP Committees",
    desc: "The voice of the newest Members of our industry, helping inform the professional and social development of our Young Property Professionals.",
    icon: GraduationCap,
  },
  {
    name: "Standards Committee",
    desc: "An expert committee assisting in developing and maintaining exceptional industry standards.",
    icon: Scale,
  },
  {
    name: "Residential Valuation Industry Group",
    desc: "Providing industry leadership on residential valuations policies, operations and quality.",
    icon: Home,
  },
  {
    name: "National Education Committee",
    desc: "Informing and developing the educational priorities at a national level.",
    icon: BookOpen,
  },
  {
    name: "APREF Committees",
    desc: "Facilitating research and guiding scholarships, bursaries, and prizes in valuation and land economy.",
    icon: FlaskConical,
  },
];

export default function CommitteesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="Our Committees"
        description="Working with industry professionals to help shape the future."
      />

      <div className="space-y-4 text-ink/80 leading-relaxed max-w-3xl mb-12">
        <p>
          This helps us ensure we remain firmly connected to the industry and are able to respond
          to issues arising in the sector. Our committees are specifically designed to ensure the
          API meets the diverse needs of our Members across a broad range of functions. Participation
          in committees is strongly encouraged and is a great way to help shape the industry and grow
          your leadership skills.
        </p>
        <p>
          A charter governs each committee and stipulates the roles and responsibilities of various
          committee positions, as well as the duties of API staff in supporting our committees. It
          also outlines the committee terms and regular election cycles.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {committees.map((c) => {
          const Icon = c.icon;
          return (
            <motion.div key={c.name} variants={fadeUp}>
              <Card className="h-full">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 grid place-items-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{c.name}</h3>
                  <p className="text-sm text-ink/75">{c.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA Banner */}
      <div className="rounded-2xl bg-brand-500 px-8 py-10 text-center text-white">
        <h3 className="font-serif text-2xl font-semibold mb-3">Interested in joining a committee?</h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          Put your hand up to represent your region and help shape the future of the profession.
        </p>
        <Button variant="accent" size="lg">
          Expression of interest
        </Button>
      </div>
    </PageShell>
  );
}
```

- [ ] **Step 2: Commit Committees page**

```bash
git add app/about/our-committees/page.tsx
git commit -m "feat: add Committees page with 7 committee cards and CTA

Lists Innovation, State, YPP, Standards, Residential Valuation,
Education, and APREF committees. Informational cards only.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

### Task 9: Push to GitHub and verify deploy

- [ ] **Step 1: Clone repo to temp directory with token**

```bash
cd /tmp && rm -rf api-sandbox-push
git clone https://<TOKEN>@github.com/rong4483-sketch/api-sandbox.git api-sandbox-push
```

- [ ] **Step 2: Copy all changed files from OneDrive to the clone**

Copy the full `app/`, `components/`, `lib/`, and `docs/` directories from the OneDrive working copy to `/tmp/api-sandbox-push/`, overwriting existing files.

- [ ] **Step 3: Stage and push**

```bash
cd /tmp/api-sandbox-push
git add -A
git status
git commit -m "feat: rename routes, add About & Committees pages, update nav

- Cockpit → Membership Portal (/membership)
- Academy → Education (/education)
- Vault → Standards (/standards)
- New: /about (About API page)
- New: /about/our-committees (Committees page)
- Footer now includes About links
- All internal cross-references updated

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
git push origin main
```

- [ ] **Step 4: Verify Vercel deploy**

Wait for Vercel auto-deploy. Check:
- Homepage loads, pillar cards show new names
- `/membership` loads the dashboard
- `/membership/upgrade` loads the upgrade stepper
- `/education` loads with certifications
- `/education/cpv` and `/education/rpv` load detail pages
- `/standards` loads the protocols table
- `/about` loads with all sections (About Us, Vision, Values, Objectives, History, Committees link)
- `/about/our-committees` loads with 7 committee cards
- Footer shows About section with two links
- TopNav shows updated pillar names
- Login redirects to `/membership`
- Member Concierge chatbot still opens and loads iframe
