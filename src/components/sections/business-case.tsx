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
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-neutral-50">
          <tr>
            {headers.map((h, i) => (
              <th
                key={h}
                className={
                  "px-4 py-3 font-medium text-neutral-700 " +
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
            <tr key={r[0]} className="border-t border-neutral-100">
              {r.map((cell, i) => (
                <td
                  key={i}
                  className={
                    "px-4 py-3 " +
                    (i === 0
                      ? "font-medium text-neutral-900"
                      : "text-right tabular-nums text-neutral-700")
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
    <section id="business-case" className="bg-[#FCF6F5] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#990011]" />
          <p className="text-xs uppercase tracking-[0.24em] text-[#990011]">
            05 · Business Case
          </p>
        </div>
        <h2 className="mt-5 font-serif text-4xl font-semibold text-neutral-900 md:text-5xl">
          {businessCase.title}
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {businessCase.parameters.map((p) => (
            <div
              key={p.label}
              className="rounded-xl border border-neutral-200 bg-white p-5"
            >
              <div className="text-xs uppercase tracking-wider text-neutral-500">
                {p.label}
              </div>
              <div className="mt-2 font-serif text-base font-medium text-neutral-900">
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
