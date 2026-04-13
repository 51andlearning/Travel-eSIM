import { otherOpportunities } from "@/content/proposal";

export default function OtherOpportunities() {
  return (
    <section id="other-opportunities" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0369A1]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0369A1]">
            Beyond eSIM
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {otherOpportunities.title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">
          {otherOpportunities.subtitle}
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {otherOpportunities.items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 transition hover:-translate-y-0.5 hover:border-[#0369A1]/30 hover:bg-white hover:shadow-[0_14px_40px_-20px_rgba(3,105,161,0.3)]"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#0369A1]">
                <span className="h-px w-6 bg-[#0369A1]" />
                Adjacent
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#0369A1]">
                Learn more
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
