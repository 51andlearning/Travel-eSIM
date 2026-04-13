import { whatIsEsim } from "@/content/proposal";

export default function WhatIsEsim() {
  return (
    <section id="what-is-esim" className="bg-[#FCF6F5] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#990011]" />
          <p className="text-xs uppercase tracking-[0.24em] text-[#990011]">
            03 · Definitions
          </p>
        </div>
        <h2 className="mt-5 font-serif text-4xl font-semibold text-neutral-900 md:text-5xl">
          {whatIsEsim.title}
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {whatIsEsim.cards.map((c, i) => (
            <div
              key={c.label}
              className={
                i === 0
                  ? "rounded-2xl border border-neutral-200 bg-white p-8 md:p-10"
                  : "rounded-2xl bg-neutral-900 p-8 text-[#FCF6F5] md:p-10"
              }
            >
              <div
                className={
                  i === 0
                    ? "font-serif text-sm uppercase tracking-[0.24em] text-[#990011]"
                    : "font-serif text-sm uppercase tracking-[0.24em] text-[#FCF6F5]/60"
                }
              >
                {c.label}
              </div>
              <p
                className={
                  i === 0
                    ? "mt-5 font-serif text-xl leading-relaxed text-neutral-800 md:text-2xl"
                    : "mt-5 font-serif text-xl leading-relaxed md:text-2xl"
                }
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
