# API Sandbox — National-First Redesign PoC

A high-fidelity visual Proof-of-Concept for the Australian Property Institute's proposed digital redevelopment. Built for CEO and internal stakeholder review.

**This is not production code.** All data is fictional. No authentication is real. No payments are processed. Use `https://apichatbot2026.netlify.app/` is iframe-embedded as the "Member Concierge."

---

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** (CSS-first `@theme` config)
- **Framer Motion** for transitions and micro-interactions
- **Lucide React** for icons
- **Radix UI** primitives (dialog, select, tabs, accordion, progress)
- Design tokens pinned to the API brand palette (teal `#1D5F6E`, gold `#C9A227`)

---

## Route map

| Route | Purpose |
|---|---|
| `/` | Marketing landing — hero, pillar grid, audit before/after |
| `/login` | Magic Link + Biometric passwordless auth demo |
| `/cockpit` | Authed member dashboard (Jane Valuer, CPV) |
| `/cockpit/upgrade` | Provisional → Associate multi-step upgrade flow |
| `/academy` | Learning pillar landing — certifications, degrees, webinars |
| `/academy/cpv` | Full CPV requirements on-page (no hidden PDF) |
| `/academy/rpv` | RPV certification page |
| `/vault` | Searchable Valuation Protocols table (20 seeded) |
| `/advocacy` | Campaigns + featured Valuation Insights flagship |
| `/directory` | Public Find-a-Professional with live filters |

Persistent floating **Member Concierge** widget on every route (bottom-right).

---

## Running locally (if you have Node.js 20+)

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Note: this project was scaffolded by hand (no Node on the origin machine). You may need to delete `package-lock.json` (if created) and re-install if npm reports peer-dep warnings.

---

## Deploying to Cloudflare Pages

The project targets Cloudflare Pages for zero-cost, high-performance hosting. See `CLOUDFLARE.md` for step-by-step deployment.

**TL;DR:**
1. Push this folder to a new GitHub repo.
2. In Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npx @cloudflare/next-on-pages@latest`
4. Build output: `.vercel/output/static`
5. Set env var `NODE_VERSION=20`.

---

## Replacing the logo

Drop the official API SVG logo into `public/brand/logo.svg`, then edit `components/site/Logo.tsx` to swap the inline SVG for an `<Image>` tag.

---

## Mock data

All seeded data lives under `lib/mock/`:
- `member.ts` — Jane Valuer persona + CPD state + recent activity
- `certifications.ts` — Full CPV and RPV requirements trees
- `protocols.ts` — 20 Valuation Protocols (sector × status matrix)
- `professionals.ts` — 50 fictional property professionals for the Directory
- `insights.ts` — 6 advocacy/insight/campaign cards

Everything is fully typed and deterministic.

---

## Known limitations (intentional)

- No real authentication — login is a UI demo that routes to `/cockpit`
- No real payment — upgrade flow is a visual demo
- No CMS — content is hardcoded in mock files
- No real PDFs — "Download" buttons are visual only
- The Member Concierge iframe depends on the upstream chatbot allowing embedding; there's a graceful fallback to open in a new tab

---

## Project generated

Handcrafted implementation of the 16-task plan in `../api-sandbox-plan.md`.
