import Image from "next/image";
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
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <div className="flex flex-wrap gap-3">
            <ContactDialog label={cta.primary.label} />
            <a
              href={cta.secondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {cta.secondary.label}
            </a>
          </div>
          <a
            href="https://dsg-travel-esim.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open this site on another device — QR code"
            className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-3 pr-4 transition hover:border-white/30 hover:bg-white/[0.08]"
          >
            <span className="inline-flex h-[400px] w-[400px] shrink-0 items-center justify-center rounded-2xl bg-white p-4">
              <Image
                src="/images/qr-site.svg"
                alt="QR code linking to dsg-travel-esim.vercel.app"
                width={360}
                height={360}
                className="h-full w-full"
              />
            </span>
            <span className="text-left">
              <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
                Scan to share
              </span>
              <span className="mt-1 block text-sm font-medium text-white">
                Open this proposal on another device
              </span>
            </span>
          </a>
        </div>

        <p className="mt-24 max-w-4xl border-t border-white/15 pt-8 text-xs leading-relaxed text-slate-400">
          {footer.confidentiality}
        </p>
      </div>
    </section>
  );
}
