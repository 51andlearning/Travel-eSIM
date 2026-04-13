import { financials } from "@/content/proposal";

function FinTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/[0.04]">
          <tr>
            {headers.map((h, i) => (
              <th
                key={h}
                className={
                  "px-5 py-3 text-xs font-medium uppercase tracking-wider text-slate-400 " +
                  (i === 0 ? "" : "text-right")
                }
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-white/5">
              {r.map((cell, i) => (
                <td
                  key={i}
                  className={
                    "px-5 py-3 " +
                    (i === 0
                      ? "font-medium text-white"
                      : "text-right tabular-nums text-slate-200")
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Financials() {
  return (
    <section
      id="financials"
      className="relative overflow-hidden bg-[#0F172A] py-24 text-white md:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(circle_at_80%_20%,#0369A1_0,transparent_45%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#38bdf8]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#38bdf8]">
            Financials
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          {financials.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-[#0369A1] p-8">
            <div className="text-xs font-medium uppercase tracking-[0.24em] text-white/75">
              Revenue · 5-year
            </div>
            <div className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              {financials.headline.revenue}
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 p-8">
            <div className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
              Net Income · 5-year
            </div>
            <div className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              {financials.headline.net}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold tracking-tight">
              Total Revenue by scenario
            </h3>
            <FinTable
              headers={financials.revenue.headers}
              rows={financials.revenue.rows}
            />
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold tracking-tight">
              Net Income by scenario
            </h3>
            <FinTable
              headers={financials.netIncome.headers}
              rows={financials.netIncome.rows}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
