import { otherOpportunities } from "@/content/proposal";
import { Card, CardContent } from "@/components/ui/card";

export default function OtherOpportunities() {
  return (
    <section id="other-opportunities" className="bg-[#FCF6F5] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#990011]" />
          <p className="text-xs uppercase tracking-[0.24em] text-[#990011]">
            07 · Beyond eSIM
          </p>
        </div>
        <h2 className="mt-5 font-serif text-4xl font-semibold text-neutral-900 md:text-5xl">
          {otherOpportunities.title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-neutral-600">
          {otherOpportunities.subtitle}
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {otherOpportunities.items.map((item) => (
            <Card
              key={item.title}
              className="border-neutral-200 bg-white transition hover:border-[#990011]/40"
            >
              <CardContent className="p-7">
                <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#990011]">
                  <span className="h-px w-6 bg-[#990011]" />
                  Adjacent
                </div>
                <h3 className="font-serif text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
