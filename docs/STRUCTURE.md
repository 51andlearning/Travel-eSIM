# Structure

## Folder structure

```
travel-esim-proposal/
├── docs/                         # Project documentation (this folder)
├── public/
│   └── images/                   # Static image assets
├── src/
│   ├── app/                      # Next.js App Router entry points
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Tailwind + theme tokens
│   ├── components/
│   │   ├── sections/             # Page sections (Hero, Strategy, etc.)
│   │   └── ui/                   # shadcn primitives (button, card, ...)
│   ├── content/                  # Structured content (MDX/TS/JSON) for sections
│   └── lib/
│       └── utils.ts              # Helpers (cn, formatters)
├── components.json               # shadcn config
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Section composition rules
- Each section lives in its own file in `src/components/sections/` and exports a default React component.
- Sections are **self-contained**: they own their layout, spacing, and any section-local subcomponents.
- Sections consume content from `src/content/` rather than hardcoding copy where possible.
- Sections use shadcn primitives from `@/components/ui/*` for interactive elements (Buttons, Cards, Accordion, Tabs, Dialog, etc.).
- Sections must be composable — adding/removing one from `page.tsx` should not break others.
- Use the `cn()` helper from `@/lib/utils` for conditional class names.

## Content management approach
- Content lives in `src/content/` as TypeScript or MDX files.
- Each section pulls its own content module — no global content blob.
- Copy changes should require editing only `src/content/*`, not the component code.
- Images live in `public/images/` and are referenced by path (`/images/...`).
- No CMS integration for v1. Content is code-managed and ships with deploys.

## Naming conventions
- Components: `PascalCase.tsx`
- Content modules: `kebab-case.ts` or `kebab-case.mdx`
- Utility functions: `camelCase`
- CSS custom properties and design tokens: `--kebab-case`
