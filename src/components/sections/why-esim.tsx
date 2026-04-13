import { whyEsim } from "@/content/proposal";

export default function WhyEsim() {
  return (
    <section id="why-esim" className="bg-neutral-950 py-24 text-[#FCF6F5] md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#990011]" />
          <p className="text-xs uppercase tracking-[0.24em] text-[#FCF6F5]/60">
            04 · Rationale
          </p>
        </div>
        <h2 className="mt-5 font-serif text-4xl font-semibold md:text-5xl">
          {whyEsim.title}
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-x-14 md:gap-y-12">
          {whyEsim.benefits.map((b, i) => (
            <div key={b.title} className="border-l-2 border-[#990011] pl-5">
              <div className="font-serif text-sm text-[#FCF6F5]/50">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-serif text-xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#FCF6F5]/75">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
