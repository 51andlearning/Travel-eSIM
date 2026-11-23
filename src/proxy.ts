/* Server-side access-code gate for the whole site (house standard).
   The code lives in the SITE_PIN environment variable and the signing key in
   SITE_SECRET, never in the repo. A correct code sets a signed HttpOnly cookie
   for 30 days. No page or asset is served to a visitor who has not entered the code. */
import { NextResponse, type NextRequest } from "next/server";

const COOKIE = "site_auth";
const MAX_AGE = 60 * 60 * 24 * 30;

// served before authentication: the gate page only
const PUBLIC = new Set(["/gate", "/gate.html"]);

export const config = { matcher: "/((?!_vercel).*)" };

async function sign(value: string) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(process.env.SITE_SECRET),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function equal(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function proxy(req: NextRequest) {
  const url = new URL(req.url);
  const path = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;
  if (path === "/gate") return NextResponse.rewrite(new URL("/gate.html", req.url));
  if (PUBLIC.has(path)) return NextResponse.next();

  // fail closed if the site was deployed without its secrets
  if (!process.env.SITE_PIN || !process.env.SITE_SECRET) {
    return new NextResponse("Site not configured.", { status: 503 });
  }
  const expected = await sign("ok");

  if (path === "/unlock" && req.method === "POST") {
    const form = await req.formData();
    const pin = String(form.get("pin") || "").trim().toLowerCase();
    if (equal(pin, process.env.SITE_PIN.trim().toLowerCase())) {
      return new NextResponse(null, { status: 303, headers: {
        Location: new URL("/", req.url).toString(), // NextResponse needs an absolute URL
        "Set-Cookie": `${COOKIE}=${expected}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`
      } });
    }
    await new Promise(r => setTimeout(r, 800)); // slow down guessing
    return new NextResponse(null, { status: 303, headers: { Location: new URL("/gate?e=1", req.url).toString() } });
  }

  const cookie = req.cookies.get(COOKIE)?.value;
  if (cookie && equal(cookie, expected)) return NextResponse.next();
  return new NextResponse(null, { status: 302, headers: { Location: new URL("/gate", req.url).toString(), "Cache-Control": "no-store" } });
}
