# Deploying to Cloudflare Pages

This guide assumes you have **no admin access on your local machine** and no Node.js installed. We'll push the code to GitHub via the web, then let Cloudflare build it.

---

## Step 1 — Create the GitHub repo (web UI)

1. Go to https://github.com/new
2. Name: `api-sandbox` (or whatever you prefer)
3. Set to **Private** for now (you can make it public later)
4. Do NOT initialise with a README (we have one)
5. Click **Create repository**

---

## Step 2 — Upload the code (drag-and-drop)

On the empty repo page, click **uploading an existing file**.

1. Open the `api-sandbox/` folder in File Explorer
2. Select ALL files and folders inside (**not** the folder itself — its contents)
3. Drag them into the GitHub upload area
4. Scroll down, commit message: `chore: initial sandbox scaffold`
5. Click **Commit changes**

> **Tip:** You may need to do this in two passes if GitHub chokes on a large batch. Upload the root-level files first (`package.json`, `tsconfig.json`, `README.md` etc.), commit, then upload each subfolder (`app/`, `components/`, `lib/`, `public/`) in separate commits.

**Alternative:** If you have GitHub Desktop installed (no admin required — it's a user-scope app), clone the new empty repo, copy the `api-sandbox/` contents into the clone folder, and push through the Desktop UI.

---

## Step 3 — Connect Cloudflare Pages

1. Go to https://dash.cloudflare.com
2. Sign in (or sign up — free, no card required)
3. Left sidebar → **Workers & Pages**
4. Click **Create application** → **Pages** tab → **Connect to Git**
5. Authorise Cloudflare's GitHub app → select your `api-sandbox` repo
6. Configure the build:
   - **Production branch:** `main`
   - **Framework preset:** `Next.js`
   - **Build command:** `npx @cloudflare/next-on-pages@latest`
   - **Build output directory:** `.vercel/output/static`
   - **Environment variables:**
     - `NODE_VERSION` = `20`
     - `NEXT_TELEMETRY_DISABLED` = `1`

7. Click **Save and Deploy**. First build takes ~3–5 minutes.

---

## Step 4 — Post-deploy

Cloudflare will give you a URL like `https://api-sandbox.pages.dev`.

- **Custom domain:** Pages project → Custom domains → add e.g. `sandbox.api.org.au`
- **Preview deploys:** Every PR gets its own preview URL — ideal for showing stakeholders multiple variants
- **Analytics:** Free, privacy-preserving analytics in the Pages dashboard

---

## If the chatbot iframe fails to load

The Member Concierge iframes `https://apichatbot2026.netlify.app/`. If that Netlify site sends `X-Frame-Options: DENY` or a strict `Content-Security-Policy: frame-ancestors`, modern browsers will block the embed.

The widget has a built-in fallback: an "Open in new tab" button. To fully fix embedding, on the chatbot side:

```js
// In the chatbot's Netlify edge function / _headers file
X-Frame-Options: ALLOW-FROM https://*.pages.dev https://sandbox.api.org.au
Content-Security-Policy: frame-ancestors https://*.pages.dev https://sandbox.api.org.au
```

Or remove restrictive framing headers entirely for the demo.

---

## Swapping in the real logo

1. Export your brand SVG to `public/brand/logo.svg`
2. Edit `components/site/Logo.tsx`:

```tsx
import Image from "next/image";
// Replace the <svg>...</svg> block with:
<Image src="/brand/logo.svg" alt="Australian Property Institute" width={220} height={52} priority />
```

3. Commit, push — Cloudflare auto-rebuilds.

---

## Updating the sandbox

Any `git push` to `main` triggers a redeploy. Every PR gets a preview URL. No local tooling required.
