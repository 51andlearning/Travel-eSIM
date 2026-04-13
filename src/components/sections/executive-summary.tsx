import { executiveSummary } from "@/content/proposal";

export default function ExecutiveSummary() {
  return (
    <section
      id="executive-summary"
      className="relative overflow-hidden bg-[#0F172A] py-24 text-white md:py-32"
    >
      {/* Background image: aircraft taking off */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url(/images/hero-aircraft.jpg)" }}
      />
      {/* Dark navy gradient overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/70 via-[#0F172A]/85 to-[#0F172A]"
      />
      {/* Brand colour glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.45] [background-image:radial-gradient(circle_at_15%_20%,#38bdf8_0,transparent_45%),radial-gradient(circle_at_85%_80%,#0369A1_0,transparent_45%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#38bdf8]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#38bdf8]">
            Executive Summary
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Travel eSIM is a {" "}
          <span className="text-[#38bdf8]">$4.4B opportunity</span> hiding inside your existing passenger journey.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          A your-branded, itinerary-aware travel eSIM integrated across every touchpoint — with loyalty earn and burn.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {executiveSummary.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-slate-300">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {executiveSummary.touchpoints.title}
            </h3>
            <p className="mt-4 text-slate-300">
              {executiveSummary.touchpoints.body}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {executiveSummary.touchpoints.items.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
