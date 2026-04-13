import { whatIsEsim } from "@/content/proposal";

export default function WhatIsEsim() {
  return (
    <section id="what-is-esim" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0369A1]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0369A1]">
            Definitions
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {whatIsEsim.title}
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {whatIsEsim.cards.map((c, i) => (
            <div
              key={c.label}
              className={
                i === 0
                  ? "rounded-2xl border border-slate-200 bg-white p-8 md:p-10"
                  : "rounded-2xl bg-[#0F172A] p-8 text-white md:p-10"
              }
            >
              <div
                className={
                  i === 0
                    ? "text-xs font-medium uppercase tracking-[0.24em] text-[#0369A1]"
                    : "text-xs font-medium uppercase tracking-[0.24em] text-[#38bdf8]"
                }
              >
                {c.label}
              </div>
              <p
                className={
                  i === 0
                    ? "mt-5 text-xl leading-relaxed text-slate-700 md:text-2xl"
                    : "mt-5 text-xl leading-relaxed text-slate-200 md:text-2xl"
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
