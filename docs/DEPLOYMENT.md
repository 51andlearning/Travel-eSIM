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

Add more as features land. Mirror them in a local `.env.local` (gitignored) for development.

## How to redeploy
- **Automatic:** Every push to `main` triggers a production deploy. Every PR gets its own preview deploy.
- **Manual:** Vercel dashboard → Deployments → **Redeploy** on any prior successful deployment.
- **Rollback:** Vercel dashboard → Deployments → promote a previous deployment to Production.

## Custom domain
- Post-approval, add the custom domain in Vercel → Domains and update DNS (CNAME to `cname.vercel-dns.com`, or A records per Vercel guidance).
- Enforce HTTPS (default on Vercel).
