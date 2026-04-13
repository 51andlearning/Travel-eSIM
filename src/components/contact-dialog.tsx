"use client";

import { useState, type FormEvent } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

type Fields = {
  name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
};

const EMPTY: Fields = {
  name: "",
  company: "",
  position: "",
  email: "",
  phone: "",
};

type Status = "idle" | "submitting" | "sent" | "error";

export default function ContactDialog({
  label,
  className,
  showIcon = true,
}: {
  label: string;
  className?: string;
  showIcon?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("sent");
      setFields(EMPTY);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  function onChange<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  const inputBase =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F172A] placeholder:text-slate-400 focus:border-[#0369A1] focus:outline-none focus:ring-2 focus:ring-[#0369A1]/20";

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) {
          setTimeout(() => {
            setStatus("idle");
            setError(null);
          }, 200);
        }
      }}
    >
      <DialogTrigger
        render={
          <button
            type="button"
            className={
              className ??
              "inline-flex items-center gap-2 rounded-full bg-[#0369A1] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#075985]"
            }
          >
            {label}
            {showIcon ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            ) : null}
          </button>
        }
      />
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Request a working session</DialogTitle>
          <DialogDescription>
            Leave your details and the MVNE team will reach out to schedule a
            discussion.
          </DialogDescription>
        </DialogHeader>

        {status === "sent" ? (
          <div className="py-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0369A1]/10 text-[#0369A1]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-sm text-[#0F172A]">
              Thanks — your details have been sent. We&apos;ll be in touch
              shortly.
            </p>
            <div className="mt-6 flex justify-end">
              <DialogClose
                render={
                  <button
                    type="button"
                    className="rounded-full bg-[#0369A1] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#075985]"
                  >
                    Close
                  </button>
                }
              />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2 space-y-4">
            <div>
              <label
                htmlFor="c-name"
                className="block text-xs font-medium text-slate-600"
              >
                Name
              </label>
              <input
                id="c-name"
                type="text"
                required
                autoComplete="name"
                value={fields.name}
                onChange={(e) => onChange("name", e.target.value)}
                className={`mt-1 ${inputBase}`}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="c-company"
                  className="block text-xs font-medium text-slate-600"
                >
                  Company
                </label>
                <input
                  id="c-company"
                  type="text"
                  required
                  autoComplete="organization"
                  value={fields.company}
                  onChange={(e) => onChange("company", e.target.value)}
                  className={`mt-1 ${inputBase}`}
                />
              </div>
              <div>
                <label
                  htmlFor="c-position"
                  className="block text-xs font-medium text-slate-600"
                >
                  Position
                </label>
                <input
                  id="c-position"
                  type="text"
                  required
                  autoComplete="organization-title"
                  value={fields.position}
                  onChange={(e) => onChange("position", e.target.value)}
                  className={`mt-1 ${inputBase}`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="c-email"
                className="block text-xs font-medium text-slate-600"
              >
                Email address
              </label>
              <input
                id="c-email"
                type="email"
                required
                autoComplete="email"
                value={fields.email}
                onChange={(e) => onChange("email", e.target.value)}
                className={`mt-1 ${inputBase}`}
              />
            </div>

            <div>
              <label
                htmlFor="c-phone"
                className="block text-xs font-medium text-slate-600"
              >
                Mobile phone number
              </label>
              <input
                id="c-phone"
                type="tel"
                required
                autoComplete="tel"
                value={fields.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                className={`mt-1 ${inputBase}`}
              />
            </div>

            {status === "error" && error ? (
              <div className="space-y-2 rounded-lg bg-red-50 px-3 py-3 text-xs text-red-700">
                <p>{error}</p>
                <a
                  href={`mailto:edwardw@mvne.co.za?subject=${encodeURIComponent(
                    `Travel eSIM — Working session request from ${fields.name || "(name)"}`
                  )}&body=${encodeURIComponent(
                    [
                      `Name: ${fields.name}`,
                      `Company: ${fields.company}`,
                      `Position: ${fields.position}`,
                      `Email: ${fields.email}`,
                      `Mobile: ${fields.phone}`,
                      "",
                      "Sent from the Travel eSIM proposal site.",
                    ].join("\n")
                  )}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3.5 py-1.5 font-medium text-white transition hover:bg-red-700"
                >
                  Send via your email app instead
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            ) : null}

            <div className="flex justify-end gap-2 pt-2">
              <DialogClose
                render={
                  <button
                    type="button"
                    className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-[#0F172A] transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                }
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-[#0369A1] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#075985] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send request"}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
