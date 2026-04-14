# Design Spec: Route Renames, About Pages & Chatbot Integration

**Date:** 2026-04-14
**Status:** Draft
**Scope:** Rename 3 routes, add 2 new pages, update navigation, embed chatbot

---

## 1. Route Renames

Three existing routes are renamed. Each rename touches: the `app/` folder name, all nav labels (TopNav, AuthedNav), the homepage pillar grid, page titles/eyebrows, and any internal links or mock data references.

| Current Label | Current Route | New Label | New Route |
|---|---|---|---|
| Cockpit | `/cockpit` | Membership Portal | `/membership` |
| Academy | `/academy` | Education | `/education` |
| Vault | `/vault` | Standards | `/standards` |

### Sub-routes that move

| Current | New |
|---|---|
| `/cockpit/upgrade` | `/membership/upgrade` |
| `/cockpit/layout.tsx` (AuthedNav layout) | `/membership/layout.tsx` |
| `/academy/[slug]` (CPV, RPV detail pages) | `/education/[slug]` |

### Content changes

- **Membership Portal** — straight rename only. Page content (greeting, CPD progress, renewal alert, quick actions, recent activity, professional record) stays identical.
- **Education** — straight rename only. Learning pathways grid, certification cards (CPV, RPV), and dynamic `[slug]` detail pages stay identical.
- **Standards** — straight rename only. Protocol search, sector/status filters, protocol table, and detail dialog stay identical.

### Files affected

- `app/cockpit/` → `app/membership/` (folder rename)
- `app/cockpit/layout.tsx` → `app/membership/layout.tsx`
- `app/cockpit/page.tsx` → `app/membership/page.tsx`
- `app/cockpit/upgrade/page.tsx` → `app/membership/upgrade/page.tsx`
- `app/academy/` → `app/education/` (folder rename)
- `app/academy/page.tsx` → `app/education/page.tsx`
- `app/academy/[slug]/` → `app/education/[slug]/`
- `app/vault/` → `app/standards/` (folder rename)
- `app/vault/page.tsx` → `app/standards/page.tsx`
- `app/vault/loading.tsx` → `app/standards/loading.tsx`
- `components/site/TopNav.tsx` — update `pillars` array labels and hrefs
- `components/site/AuthedNav.tsx` — update sidebar link labels and hrefs
- `components/skeletons/CockpitSkeleton.tsx` → `components/skeletons/MembershipSkeleton.tsx` (referenced in `app/cockpit/page.tsx`)
- `app/page.tsx` — update homepage pillar grid (names, descriptions, hrefs)
- `lib/mock/certifications.ts` — update any href references from `/academy/` to `/education/`
- `lib/mock/member.ts` — update any activity log links referencing old routes

---

## 2. About Page (`/about`)

New public page using the existing `PageShell` component. Content sourced from the live API website (api.org.au/about/).

### Layout

Framer Motion staggered fade-in for each section, matching the sandbox's existing animation style.

### Sections (in order)

#### 2.1 PageHeader
- **Eyebrow:** "About"
- **Title:** "About API"
- **Description:** "Our journey so far."

#### 2.2 About Us
Three paragraphs from the live site:

1. "Leading the industry, we set and maintain the highest standards of professional practice, education, ethics, and professional conduct for our Members. As a result, the work of the API raises the bar for the entire property profession."
2. "Representing a wide range of property professionals, we advocate for our Members with a range of stakeholders, providing the professional recognition each Member deserves. In turn, all Members of the API are highly qualified, highly skilled professionals with up-to-date professional development and experience."
3. "Our Members can be found across all sectors of the property profession -- in private practice and in the public sector. This broad base of qualified and skilled professionals is unique to the API as we are dedicated to expanding the expertise and knowledge of our Members, building a strong base for the future of the property profession."

Plus a stat badge: "Close to 8,000 Members" (from the homepage).

#### 2.3 Vision
"To shape the future of property professionals."

#### 2.4 Values
Three icon cards using Lucide icons:
- **Innovation** — "To lead an innovation agenda" (icon: Lightbulb)
- **Inclusivity** — "To embrace inclusivity" (icon: Users)
- **Courage** — "To act courageously" (icon: Shield)

#### 2.5 Strategic Objectives
Four cards, each with bold label + description:
- **Future Focused** -- Supporting the sector to respond and adapt to a changing operational landscape.
- **A Strong and Sustainable Association** -- The foundation supporting our Members.
- **Powerful Voice** -- Raise the profile and drive positive change for the property profession.
- **Skilled Professionals** -- Nurture skilled and confident property professionals.

#### 2.6 A Brief History
Vertical timeline component with dots on a line. Six milestones:
- **1926** -- Founded as the Commonwealth Institute of Valuers & 1st division established.
- **1941** -- First Convention.
- **1962** -- First Female Member.
- **1991** -- Renamed to Australian Institute of Valuers & Land Economists Incorporated.
- **1998** -- Renamed to Australian Property Institute Incorporated.
- **2016** -- API becomes a unified national institute (API Limited).

Design: vertical line with circular dot markers, year on the left, description on the right. Gold accent colour (#C9A227) for the dots/line.

#### 2.7 Link to Committees
Card/banner at the bottom: "Our Committees -- Working with industry professionals to help shape the future." Button links to `/about/our-committees`.

### File structure
- `app/about/page.tsx` — main About page
- No new components needed — built inline using existing UI primitives (Card, Badge) and Framer Motion

---

## 3. Committees Page (`/about/our-committees`)

New public page nested under the About route. Uses `PageShell`.

### Layout

#### 3.1 PageHeader
- **Eyebrow:** "About"
- **Title:** "Our Committees"
- **Description:** "Working with industry professionals to help shape the future."

#### 3.2 Introduction
Two paragraphs from the live site:

1. "This helps us ensure we remain firmly connected to the industry and are able to respond to issues arising in the sector. Our committees are specifically designed to ensure the API meets the diverse needs of our Members across a broad range of functions. Participation in committees is strongly encouraged and is a great way to help shape the industry and grow your leadership skills."
2. "A charter governs each committee and stipulates the roles and responsibilities of various committee positions, as well as the duties of API staff in supporting our committees. It also outlines the committee terms and regular election cycles."

#### 3.3 Committee Cards Grid
Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop). Seven cards:

| Committee | Description | Icon |
|---|---|---|
| Innovation Futures Advisory Group | Providing sector insights, guiding the Australian Property Institute's future. | Lightbulb |
| State Committees | Shaping our advocacy agenda and providing critical advice and insight into issues arising in the industry. | Map |
| YPP Committees | The voice of the newest Members of our industry, helping inform the professional and social development of our Young Property Professionals. | GraduationCap |
| Standards Committee | An expert committee assisting in developing and maintaining exceptional industry standards. | Scale |
| Residential Valuation Industry Group | Providing industry leadership on residential valuations policies, operations and quality. | Home |
| National Education Committee | Informing and developing the educational priorities at a national level. | BookOpen |
| APREF Committees | Facilitating research and guiding scholarships, bursaries, and prizes in valuation and land economy. | FlaskConical |

Cards are informational only -- no click-through to member listings or sub-pages.

#### 3.4 CTA Banner
"Interested in joining a committee?" with a placeholder button. Teal background band matching the sandbox's accent style.

### File structure
- `app/about/our-committees/page.tsx` — Committees page
- `app/about/layout.tsx` — optional shared layout for About sub-routes (or omit if not needed)

---

## 4. Navigation Changes

### TopNav (`components/site/TopNav.tsx`)
Update the `pillars` array:

```
Before: Cockpit, Academy, Vault, Advocacy, Directory
After:  Membership Portal, Education, Standards, Advocacy, Directory
```

Routes update accordingly. No "About" link added to the main nav -- it stays focused on member-facing pillars.

### AuthedNav (`components/site/AuthedNav.tsx`)
Update sidebar links:

```
Before: Dashboard (/cockpit), Upgrade (/cockpit/upgrade), Academy, Vault, Advocacy, Directory
After:  Dashboard (/membership), Upgrade (/membership/upgrade), Education, Standards, Advocacy, Directory
```

### Footer (`components/site/Footer.tsx`)
Add an "About" column/section with two links:
- About API → `/about`
- Our Committees → `/about/our-committees`

Existing footer content stays.

### Homepage (`app/page.tsx`)
Update the 5 pillar cards:
- Names: Membership Portal, Education, Standards, Advocacy, Directory
- Routes: `/membership`, `/education`, `/standards`, `/advocacy`, `/directory`
- Descriptions: update to match new labels (e.g. "Your membership dashboard" instead of "Your cockpit")

No About card on the homepage.

---

## 5. Chatbot Integration

### Current state
`components/concierge/MemberConcierge.tsx` is a floating widget with a mock chat UI returning canned responses.

### Change
Replace the mock chat message area with an iframe loading `https://apichatbot2026.netlify.app/`.

### Details
- The floating toggle button (open/close) stays as-is
- The widget shell (header bar with "Member Concierge" title, close button, rounded container with shadow) stays as-is
- The inner content area (currently fake message bubbles + input field) is replaced with a single iframe
- iframe: `src="https://apichatbot2026.netlify.app/"`, `border: none`, fills the chat body area
- Approximate dimensions: 400px wide x 500px tall on desktop, full-width on mobile
- No message passing between parent and iframe
- No API integration -- simple embed only
- If the Netlify site is down, the iframe shows a blank/error state -- acceptable for a PoC

### File affected
- `components/concierge/MemberConcierge.tsx` — replace chat body with iframe

---

## 6. What Doesn't Change

- `/login` page -- unchanged
- Floating widget button behaviour (open/close toggle) -- unchanged
- All mock data content -- protocols, certifications, professionals, member profile stay the same
- Page content for Membership Portal, Education, Standards, Advocacy, Directory -- only labels/routes change
- Dynamic `/education/[slug]` pages (CPV, RPV) -- content stays, route prefix changes
- `globals.css`, `tailwind.config`, brand colours, fonts -- unchanged
- `lib/utils.ts`, `lib/motion.ts` -- unchanged

---

## 7. New Route Summary

After implementation, the full route map will be:

| Route | Page | Type |
|---|---|---|
| `/` | Homepage | Public |
| `/login` | Login | Public |
| `/about` | About API | Public |
| `/about/our-committees` | Our Committees | Public |
| `/membership` | Membership Portal (dashboard) | Authenticated layout |
| `/membership/upgrade` | Student → Associate upgrade | Authenticated layout |
| `/education` | Education (learning pathways) | Public |
| `/education/cpv` | CPV certification detail | Public |
| `/education/rpv` | RPV certification detail | Public |
| `/standards` | Standards (protocols archive) | Public |
| `/advocacy` | Advocacy (insights & reports) | Public |
| `/directory` | Directory (find professionals) | Public |

Plus the floating Member Concierge widget on all pages (now embedding the Netlify chatbot).
