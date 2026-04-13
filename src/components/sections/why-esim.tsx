import { whyEsim } from "@/content/proposal";

export default function WhyEsim() {
  return (
    <section id="why-esim" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0369A1]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0369A1]">
            Rationale
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {whyEsim.title}
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {whyEsim.benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 transition hover:border-[#0369A1]/30 hover:bg-white hover:shadow-[0_14px_40px_-20px_rgba(3,105,161,0.25)]"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0369A1] text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
