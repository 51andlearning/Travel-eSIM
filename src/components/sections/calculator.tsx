"use client";

import { useMemo, useState } from "react";

const ARPU = 18.07; // $ per 5GB bundle (ex VAT)
const AIRLINE_SHARE = 0.08; // 8% of subscriber revenue

function formatUSD(n: number) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}k`;
  return `$${n.toFixed(0)}`;
}

function formatInt(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

export default function Calculator() {
  const [passengers, setPassengers] = useState(1_000_000);
  const [uptake, setUptake] = useState(5); // percent

  const { subscribers, revenue, airlineNet } = useMemo(() => {
    const subs = passengers * (uptake / 100);
    const rev = subs * ARPU;
    const airline = rev * AIRLINE_SHARE;
    return { subscribers: subs, revenue: rev, airlineNet: airline };
  }, [passengers, uptake]);

  return (
    <section id="calculator" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0369A1]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0369A1]">
            Interactive Calculator
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          Model your own scenario
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">
          Adjust passenger volume and attach rate to see the revenue impact for
          a 5 GB travel eSIM bundle.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* Inputs */}
          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Inputs
            </h3>

            {/* Passengers */}
            <div className="mt-6">
              <div className="flex items-end justify-between">
                <label
                  htmlFor="passengers"
                  className="text-sm font-medium text-[#0F172A]"
                >
                  Outbound passengers per year
                </label>
                <span className="font-semibold text-[#0369A1] tabular-nums">
                  {formatInt(passengers)}
                </span>
              </div>
              <input
                id="passengers"
                type="range"
                min={100_000}
                max={100_000_000}
                step={100_000}
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="mt-3 w-full accent-[#0369A1]"
              />
              <div className="mt-1 flex justify-between text-xs text-slate-500 tabular-nums">
                <span>100k</span>
                <span>100M</span>
              </div>
              <input
                type="number"
                min={0}
                step={10_000}
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value) || 0)}
                className="mt-3 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm tabular-nums focus:border-[#0369A1] focus:outline-none focus:ring-2 focus:ring-[#0369A1]/20"
              />
            </div>

            {/* Uptake */}
            <div className="mt-8">
              <div className="flex items-end justify-between">
                <label
                  htmlFor="uptake"
                  className="text-sm font-medium text-[#0F172A]"
                >
                  Passenger uptake (attach rate)
                </label>
                <span className="font-semibold text-[#0369A1] tabular-nums">
                  {uptake.toFixed(1)}%
                </span>
              </div>
              <input
                id="uptake"
                type="range"
                min={0}
                max={25}
                step={0.1}
                value={uptake}
                onChange={(e) => setUptake(Number(e.target.value))}
                className="mt-3 w-full accent-[#0369A1]"
              />
              <div className="mt-1 flex justify-between text-xs text-slate-500 tabular-nums">
                <span>0%</span>
                <span>25%</span>
              </div>
              <input
                type="number"
                min={0}
                max={100}
                step={0.1}
                value={uptake}
                onChange={(e) => setUptake(Number(e.target.value) || 0)}
                className="mt-3 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm tabular-nums focus:border-[#0369A1] focus:outline-none focus:ring-2 focus:ring-[#0369A1]/20"
              />
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-500">
              <div className="font-medium text-slate-700">Assumptions (fixed):</div>
              <ul className="mt-2 space-y-1">
                <li>• ARPU per 5 GB bundle: <span className="tabular-nums text-slate-700">${ARPU.toFixed(2)}</span> (ex VAT)</li>
                <li>• Airline revenue share: <span className="tabular-nums text-slate-700">{(AIRLINE_SHARE * 100).toFixed(0)}%</span></li>
              </ul>
            </div>
          </div>

          {/* Outputs */}
          <div className="grid grid-rows-[auto_1fr] gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                eSIM subscribers
              </div>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-[#0F172A] tabular-nums md:text-4xl">
                {formatInt(subscribers)}
              </div>
              <div className="mt-1 text-sm text-slate-500 tabular-nums">
                {formatInt(passengers)} pax × {uptake.toFixed(1)}%
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
              <div className="rounded-2xl bg-[#0F172A] p-8 text-white">
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
                  Total subscriber revenue
                </div>
                <div className="mt-3 text-4xl font-semibold tracking-tight tabular-nums md:text-5xl">
                  {formatUSD(revenue)}
                </div>
                <div className="mt-2 text-sm text-slate-300 tabular-nums">
                  {formatInt(subscribers)} × ${ARPU.toFixed(2)}
                </div>
              </div>
              <div className="rounded-2xl bg-[#0369A1] p-8 text-white">
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/75">
                  Airline net revenue
                </div>
                <div className="mt-3 text-4xl font-semibold tracking-tight tabular-nums md:text-5xl">
                  {formatUSD(airlineNet)}
                </div>
                <div className="mt-2 text-sm text-white/75 tabular-nums">
                  {formatUSD(revenue)} × {(AIRLINE_SHARE * 100).toFixed(0)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
