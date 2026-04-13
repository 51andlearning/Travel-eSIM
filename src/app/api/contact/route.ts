import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "edwardw@mvne.co.za";

type Body = {
  name?: string;
  company?: string;
  position?: string;
  email?: string;
  phone?: string;
};

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, company, position, email, phone } = body;
  const missing = ["name", "company", "position", "email", "phone"].filter(
    (k) => !body[k as keyof Body]?.toString().trim()
  );
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email!)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // FormSubmit.co — no API key, no signup required.
  // The very first submission triggers an "Activate Form" email to TO_EMAIL.
  // Once Edward clicks the activate link, all subsequent submissions are
  // delivered straight to his inbox without any further action.
  try {
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Travel eSIM — Working session request from ${name}`,
          _replyto: email,
          _template: "table",
          _captcha: "false",
          Name: name,
          Company: company,
          Position: position,
          Email: email,
          "Mobile Phone": phone,
        }),
      }
    );

    const data: { success?: string | boolean; message?: string } = await res
      .json()
      .catch(() => ({}));

    const success =
      res.ok && (data.success === true || data.success === "true");
    if (!success) {
      console.error("[contact] FormSubmit error", res.status, data);
      return NextResponse.json(
        {
          error:
            data.message?.toString() ??
            "Failed to send. Please try again or email edwardw@mvne.co.za directly.",
        },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[contact] FormSubmit threw", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
