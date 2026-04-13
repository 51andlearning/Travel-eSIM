const NAV = [
  { label: "Executive Summary", href: "#executive-summary" },
  { label: "Proposition", href: "#proposition" },
  { label: "Business Case", href: "#business-case" },
  { label: "Financials", href: "#financials" },
  { label: "Next Steps", href: "#next-steps" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="/" className="flex items-center gap-2 text-[#0F172A]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#0369A1] text-xs font-semibold text-white">
            M
          </span>
          <span className="text-sm font-semibold tracking-tight">
            MVNE · Travel eSIM
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-slate-600 transition hover:text-[#0369A1]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#next-steps"
          className="hidden rounded-full bg-[#0369A1] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#075985] md:inline-flex"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
