import { proposition } from "@/content/proposal";

export default function Proposition() {
  return (
    <section id="proposition" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0369A1]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0369A1]">
            Proposition
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {proposition.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {proposition.subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {proposition.pillars.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-[#0369A1]/30 hover:shadow-[0_14px_40px_-20px_rgba(3,105,161,0.35)]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0369A1]/10 text-sm font-semibold text-[#0369A1]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
