import { cta, footer } from "@/content/proposal";
import ContactDialog from "@/components/contact-dialog";

export default function Cta() {
  return (
    <section
      id="next-steps"
      className="relative overflow-hidden bg-[#0F172A] text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_30%_30%,#0369A1_0,transparent_50%),radial-gradient(circle_at_75%_80%,#38bdf8_0,transparent_45%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#38bdf8]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#38bdf8]">
            Next Steps
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          {cta.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {cta.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ContactDialog label={cta.primary.label} />
          <a
            href={cta.secondary.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {cta.secondary.label}
          </a>
        </div>

        <p className="mt-24 max-w-4xl border-t border-white/15 pt-8 text-xs leading-relaxed text-slate-400">
          {footer.confidentiality}
        </p>
      </div>
    </section>
  );
}
