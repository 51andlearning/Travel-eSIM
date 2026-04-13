import { buttonVariants } from "@/components/ui/button";
import { cta, footer } from "@/content/proposal";
import { cn } from "@/lib/utils";

export default function Cta() {
  return (
    <section id="next-steps" className="bg-[#990011] text-[#FCF6F5]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <p className="text-xs uppercase tracking-[0.28em] text-[#FCF6F5]/70">
          08 · Next Steps
        </p>
        <h2 className="mt-5 max-w-3xl font-serif text-4xl font-semibold md:text-6xl">
          {cta.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#FCF6F5]/85">
          {cta.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={cta.primary.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-full bg-[#FCF6F5] px-6 text-sm text-[#990011] hover:bg-white"
            )}
          >
            {cta.primary.label}
          </a>
          <a
            href={cta.secondary.href}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 rounded-full border-[#FCF6F5]/40 bg-transparent px-6 text-sm text-[#FCF6F5] hover:bg-[#FCF6F5]/10 hover:text-[#FCF6F5]"
            )}
          >
            {cta.secondary.label}
          </a>
        </div>

        <p className="mt-24 max-w-4xl border-t border-[#FCF6F5]/20 pt-8 text-xs leading-relaxed text-[#FCF6F5]/60">
          {footer.confidentiality}
        </p>
      </div>
    </section>
  );
}
