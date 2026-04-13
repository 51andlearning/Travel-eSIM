import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/content/proposal";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#990011] text-[#FCF6F5]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_20%_10%,#fff_0,transparent_40%),radial-gradient(circle_at_80%_90%,#fff_0,transparent_40%)]"
      />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-24 md:px-10">
        <p className="mb-6 font-sans text-xs uppercase tracking-[0.28em] text-[#FCF6F5]/70">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#FCF6F5]/85 md:text-xl">
          {hero.subtitle}
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={hero.primaryCta.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-full bg-[#FCF6F5] px-6 text-sm text-[#990011] hover:bg-white"
            )}
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 rounded-full border-[#FCF6F5]/40 bg-transparent px-6 text-sm text-[#FCF6F5] hover:bg-[#FCF6F5]/10 hover:text-[#FCF6F5]"
            )}
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
