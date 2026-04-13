import { businessCase } from "@/content/proposal";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#F8FAFC]">
          <tr>
            {headers.map((h, i) => (
              <th
                key={h}
                className={
                  "px-5 py-3 text-xs font-medium uppercase tracking-wider text-slate-500 " +
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
            <tr key={r[0]} className="border-t border-slate-100">
              {r.map((cell, i) => (
                <td
                  key={i}
                  className={
                    "px-5 py-3 " +
                    (i === 0
                      ? "font-medium text-[#0F172A]"
                      : "text-right tabular-nums text-slate-700")
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

export default function BusinessCase() {
  return (
    <section id="business-case" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0369A1]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0369A1]">
            Business Case
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {businessCase.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">
          Model parameters and passenger-attach scenarios used in the financial projections.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {businessCase.parameters.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {p.label}
              </div>
              <div className="mt-2 text-base font-semibold text-[#0F172A]">
                {p.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Tabs defaultValue="attach">
            <TabsList className="bg-white">
              <TabsTrigger value="attach">Attach Rate</TabsTrigger>
              <TabsTrigger value="uptake">Passenger Uptake</TabsTrigger>
            </TabsList>
            <TabsContent value="attach" className="mt-6">
              <Table
                headers={businessCase.attachRates.headers}
                rows={businessCase.attachRates.rows}
              />
            </TabsContent>
            <TabsContent value="uptake" className="mt-6">
              <Table
                headers={businessCase.uptake.headers}
                rows={businessCase.uptake.rows}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
