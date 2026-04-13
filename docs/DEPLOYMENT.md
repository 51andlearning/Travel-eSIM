# Deployment

## GitHub repo setup
1. Create a new GitHub repository (private recommended).
2. From the project root:
   ```bash
   git init
   git add .
   git commit -m "Initial build: travel-esim-proposal"
   git branch -M main
   git remote add origin git@github.com:<org>/<repo>.git
   git push -u origin main
   ```
3. Protect `main` (PRs + passing build required) once collaborators are added.

## Vercel project setup
1. In the Vercel dashboard, **Add New → Project** and import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected).
3. Root directory: **project root** (leave default if repo root equals project root).
4. Install command: `pnpm install`
5. Build command: `pnpm build`
6. Output directory: **leave blank** (Next.js handles this).
7. Node.js version: leave default (Vercel-managed).

## Root directory rules
- The repo root IS the Next.js project root.
- If the repo is later reorganized into a monorepo, set Vercel's **Root Directory** to the subfolder containing `package.json` and redeploy.

## Build command
- Local: `pnpm build`
- Vercel: `pnpm build` (configured in project settings)
- Do not commit a `vercel.json` unless routing, redirects, or function configuration require it.

## Environment variables
Manage via **Vercel → Project → Settings → Environment Variables**. Never commit secrets.

| Variable | Scope | Purpose |
|----------|-------|---------|
| `NEXT_PUBLIC_GA_ID` | Production, Preview | GA4 Measurement ID (optional) |
| `NEXT_PUBLIC_SITE_URL` | Production, Preview | Canonical site URL |
| `SITE_USERNAME` | Production, Preview | Basic-auth username (default: `travel`) |
| `SITE_PASSWORD` | Production, Preview | Basic-auth password — **site is open if unset** |
| `RESEND_API_KEY` | Production, Preview | Resend API key used by the contact form — **form returns 500 if unset** |
| `CONTACT_FROM_EMAIL` | Production, Preview | Optional. Default: `Travel eSIM <onboarding@resend.dev>`. Once a custom domain is verified in Resend, e.g. `Travel eSIM <no-reply@mvne.co.za>` |

Add more as features land. Mirror them in a local `.env.local` (gitignored) for development.

## Password protection
The site ships with HTTP Basic Auth via `src/middleware.ts`. To lock it:
1. Vercel → Project → Settings → Environment Variables
2. Add `SITE_PASSWORD` (and optionally `SITE_USERNAME`) for Production + Preview
3. Redeploy (or wait for next push) — browser will prompt for credentials on every visit
4. To remove protection, delete `SITE_PASSWORD` and redeploy

For team-scale access control (SSO, audit logs) consider Vercel's built-in Deployment Protection on the Pro plan instead.

## Contact form (Resend)
The "Request a working session" CTA opens a modal form that POSTs to `/api/contact` and emails `edwardw@mvne.co.za` via [Resend](https://resend.com).

1. Sign up at https://resend.com (free tier: 100 emails/day, 3000/month)
2. Create an API key: **API Keys → Create API Key**
3. In Vercel → Project → Settings → Environment Variables add:
   - `RESEND_API_KEY` (required) — the key from step 2
   - `CONTACT_FROM_EMAIL` (optional) — see table above
4. Redeploy
5. **Test the form** on the live site — email should arrive at edwardw@mvne.co.za within seconds

**Custom sending domain (recommended for production):** in Resend → **Domains** → Add `mvne.co.za`, add the DNS records, verify, then set `CONTACT_FROM_EMAIL="Travel eSIM <no-reply@mvne.co.za>"`. Emails from verified domains have dramatically better deliverability than `onboarding@resend.dev`.

## How to redeploy
- **Automatic:** Every push to `main` triggers a production deploy. Every PR gets its own preview deploy.
- **Manual:** Vercel dashboard → Deployments → **Redeploy** on any prior successful deployment.
- **Rollback:** Vercel dashboard → Deployments → promote a previous deployment to Production.

## Custom domain
- Post-approval, add the custom domain in Vercel → Domains and update DNS (CNAME to `cname.vercel-dns.com`, or A records per Vercel guidance).
- Enforce HTTPS (default on Vercel).
