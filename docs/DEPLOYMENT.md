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

Add more as features land. Mirror them in a local `.env.local` (gitignored) for development.

## Password protection
The site ships with HTTP Basic Auth via `src/middleware.ts`. To lock it:
1. Vercel → Project → Settings → Environment Variables
2. Add `SITE_PASSWORD` (and optionally `SITE_USERNAME`) for Production + Preview
3. Redeploy (or wait for next push) — browser will prompt for credentials on every visit
4. To remove protection, delete `SITE_PASSWORD` and redeploy

For team-scale access control (SSO, audit logs) consider Vercel's built-in Deployment Protection on the Pro plan instead.

## Contact form (FormSubmit)
The "Request a working session" CTA opens a modal form that POSTs to `/api/contact`, which forwards to `https://formsubmit.co/ajax/edwardw@mvne.co.za`. **No API key, no env var, no Vercel config.**

### One-time activation
The first time the form is submitted on production, FormSubmit emails `edwardw@mvne.co.za` an "Activate Form" link. Click that link once. From then on, every submission is delivered straight to his inbox.

### Changing the recipient
Edit `TO_EMAIL` in `src/app/api/contact/route.ts` and push. The new address will need to repeat the one-time activation.

### Upgrading deliverability later
If submissions start landing in spam or the volume exceeds FormSubmit's free limits, swap the implementation in `route.ts` to a transactional email service (Resend, SendGrid, Postmark) — straightforward refactor, the front-end stays the same.

## How to redeploy
- **Automatic:** Every push to `main` triggers a production deploy. Every PR gets its own preview deploy.
- **Manual:** Vercel dashboard → Deployments → **Redeploy** on any prior successful deployment.
- **Rollback:** Vercel dashboard → Deployments → promote a previous deployment to Production.

## Custom domain
- Post-approval, add the custom domain in Vercel → Domains and update DNS (CNAME to `cname.vercel-dns.com`, or A records per Vercel guidance).
- Enforce HTTPS (default on Vercel).
