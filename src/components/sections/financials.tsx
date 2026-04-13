import { financials } from "@/content/proposal";

function FinTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#FCF6F5]/15 bg-[#FCF6F5]/[0.04]">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#FCF6F5]/[0.06]">
          <tr>
            {headers.map((h, i) => (
              <th
                key={h}
                className={
                  "px-4 py-3 font-medium text-[#FCF6F5]/80 " +
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
            <tr key={r[0]} className="border-t border-[#FCF6F5]/10">
              {r.map((cell, i) => (
                <td
                  key={i}
                  className={
                    "px-4 py-3 " +
                    (i === 0
                      ? "font-medium text-[#FCF6F5]"
                      : "text-right tabular-nums text-[#FCF6F5]/80")
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
    <section id="financials" className="bg-neutral-950 py-24 text-[#FCF6F5] md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#990011]" />
          <p className="text-xs uppercase tracking-[0.24em] text-[#FCF6F5]/60">
            06 · Financials
          </p>
        </div>
        <h2 className="mt-5 font-serif text-4xl font-semibold md:text-5xl">
          {financials.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-[#990011] p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-[#FCF6F5]/70">
              Revenue (5-yr)
            </div>
            <div className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              {financials.headline.revenue}
            </div>
          </div>
          <div className="rounded-2xl border border-[#FCF6F5]/15 p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-[#FCF6F5]/70">
              Net Income (5-yr)
            </div>
            <div className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-4xl">
              {financials.headline.net}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold">
              Total Revenue by scenario
            </h3>
            <FinTable
              headers={financials.revenue.headers}
              rows={financials.revenue.rows}
            />
          </div>
          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold">
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
