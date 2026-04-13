import { NextRequest, NextResponse } from "next/server";

/**
 * Site-wide HTTP Basic Auth.
 *
 * Set these env vars in Vercel → Project → Settings → Environment Variables:
 *   SITE_USERNAME  (optional, default: "travel")
 *   SITE_PASSWORD  (required; if unset, site is open)
 *
 * Once set, visitors get a browser auth prompt. Credentials persist per tab.
 */
export function middleware(req: NextRequest) {
  const expectedPassword = process.env.SITE_PASSWORD;

  // If no password is configured, let everything through.
  if (!expectedPassword) return NextResponse.next();

  const expectedUsername = process.env.SITE_USERNAME ?? "travel";
  const header = req.headers.get("authorization");

  if (header?.startsWith("Basic ")) {
    try {
      // atob is available in the Edge runtime; Buffer is not.
      const decoded = atob(header.slice(6));
      const idx = decoded.indexOf(":");
      const user = idx >= 0 ? decoded.slice(0, idx) : decoded;
      const pass = idx >= 0 ? decoded.slice(idx + 1) : "";

      if (user === expectedUsername && pass === expectedPassword) {
        return NextResponse.next();
      }
    } catch {
      // malformed header — fall through to 401
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Travel eSIM Proposal", charset="UTF-8"',
    },
  });
}

// Apply to everything except Next internals and static assets.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2|ttf|otf|txt|xml)).*)",
  ],
};
