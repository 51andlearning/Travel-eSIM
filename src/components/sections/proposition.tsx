import { proposition } from "@/content/proposal";
import { Card, CardContent } from "@/components/ui/card";

export default function Proposition() {
  return (
    <section id="proposition" className="bg-[#2F3C7E] py-24 text-[#FCF6F5] md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#FCF6F5]/70" />
          <p className="text-xs uppercase tracking-[0.24em] text-[#FCF6F5]/70">
            02 · Proposition
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl font-serif text-4xl font-semibold md:text-5xl">
          {proposition.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#FCF6F5]/80">
          {proposition.subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {proposition.pillars.map((p, i) => (
            <Card
              key={p.title}
              className="border-[#FCF6F5]/15 bg-[#FCF6F5]/5 text-[#FCF6F5] backdrop-blur"
            >
              <CardContent className="p-7">
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#990011] font-serif text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#FCF6F5]/75">
                  {p.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
