import { executiveSummary } from "@/content/proposal";
import { Badge } from "@/components/ui/badge";

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="bg-[#FCF6F5] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#990011]" />
          <p className="text-xs uppercase tracking-[0.24em] text-[#990011]">
            01 · Executive Summary
          </p>
        </div>
        <h2 className="mt-5 font-serif text-4xl font-semibold text-neutral-900 md:text-5xl">
          {executiveSummary.title}
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {executiveSummary.stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl font-semibold text-[#990011] md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm leading-snug text-neutral-600">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-neutral-900">
              {executiveSummary.touchpoints.title}
            </h3>
            <p className="mt-4 text-neutral-600">
              {executiveSummary.touchpoints.body}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {executiveSummary.touchpoints.items.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="border-[#990011]/20 bg-white px-3 py-1.5 text-sm font-normal text-neutral-700"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
