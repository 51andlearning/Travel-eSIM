import Image from "next/image";
import ContactDialog from "@/components/contact-dialog";

const NAV = [
  { label: "Executive Summary", href: "#executive-summary" },
  { label: "Proposition", href: "#proposition" },
  { label: "Calculator", href: "#calculator" },
  { label: "Next Steps", href: "#next-steps" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="/" className="flex items-center gap-3 text-[#0F172A]">
          <Image
            src="/images/mvne-logo.png"
            alt="MVNE"
            width={600}
            height={236}
            priority
            className="h-9 w-auto"
          />
          <span
            aria-hidden
            className="hidden h-8 w-px bg-slate-200 sm:block"
          />
          <Image
            src="/images/dsg-proud-member.png"
            alt="Proud member of DSG"
            width={964}
            height={620}
            priority
            className="hidden h-9 w-auto sm:block"
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => {
            const isCalculator = n.href === "#calculator";
            return (
              <a
                key={n.href}
                href={n.href}
                className={
                  isCalculator
                    ? "text-sm font-medium text-[#cd2026] transition hover:text-[#a8181d]"
                    : "text-sm text-slate-600 transition hover:text-[#0369A1]"
                }
              >
                {n.label}
              </a>
            );
          })}
        </nav>
        <ContactDialog
          label="Get in touch"
          showIcon={false}
          className="inline-flex items-center rounded-full bg-[#0369A1] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#075985]"
        />
      </div>
    </header>
  );
}
