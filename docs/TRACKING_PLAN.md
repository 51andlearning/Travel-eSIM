# Tracking Plan

All tracking is **placeholder / opt-in** until stakeholders confirm measurement requirements and privacy constraints.

## Google Analytics (placeholder)
- **Property:** GA4 — Measurement ID TBD (`G-XXXXXXXXXX`)
- **Install method:** `next/script` in `app/layout.tsx`, gated by `NEXT_PUBLIC_GA_ID` env var.
- **Status:** Not yet installed. Add when measurement ID is provisioned.

## Vercel Web Analytics (option)
- **Package:** `@vercel/analytics`
- **Status:** Recommended. Provides privacy-friendly pageview metrics with zero config.
- **Install:** `pnpm add @vercel/analytics` and mount `<Analytics />` in `app/layout.tsx`.
- **Enable condition:** Turn on once Vercel project is live.

## Event tracking (placeholder)
Suggested events to define once GA4 or another analytics tool is wired:

| Event | Trigger | Properties |
|-------|---------|------------|
| `section_view` | Section scrolled into viewport ≥ 50% | `section_name` |
| `cta_click` | Primary CTA button click | `cta_label`, `section_name` |
| `nav_click` | Top-nav link click | `link_label`, `destination` |
| `accordion_open` | FAQ/accordion expanded | `item_label` |
| `outbound_click` | External link click | `url` |

## Form submission tracking (placeholder)
- No forms ship in v1.
- When added: emit `form_submit` with `form_name` and a boolean `success`; also log server-side.

## Conversion goals (placeholder)
Define once success criteria are confirmed. Draft candidates:
- **Primary:** CTA click on "Next Steps" / "Approve"
- **Secondary:** Deep scroll to investment/commercials section
- **Tertiary:** Visit to `/appendix` page

## Privacy & consent
- No third-party cookies until a consent flow is agreed.
- Prefer server-side or cookieless analytics (Vercel Web Analytics) for v1.
- Review with legal before enabling GA4 in production.
