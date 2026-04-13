import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "edwardw@mvne.co.za";
// Resend's onboarding address works without domain verification.
// Once a custom domain is verified in Resend, switch this to e.g. "no-reply@mvne.co.za".
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Travel eSIM <onboarding@resend.dev>";

type Body = {
  name?: string;
  company?: string;
  position?: string;
  email?: string;
  phone?: string;
};

function esc(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY not set");
    return NextResponse.json(
      { error: "Email service is not configured on the server." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = `Travel eSIM — Working session request from ${name}`;
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#0F172A;line-height:1.6;">
      <h2 style="color:#0369A1;margin:0 0 12px 0;">New working session request</h2>
      <p style="margin:0 0 16px 0;color:#64748B;">Submitted via the Travel eSIM proposal site.</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        <tr><td style="padding:6px 16px 6px 0;color:#64748B;">Name</td><td style="padding:6px 0;font-weight:600;">${esc(name!)}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#64748B;">Company</td><td style="padding:6px 0;font-weight:600;">${esc(company!)}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#64748B;">Position</td><td style="padding:6px 0;font-weight:600;">${esc(position!)}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#64748B;">Email</td><td style="padding:6px 0;font-weight:600;"><a href="mailto:${esc(email!)}" style="color:#0369A1;">${esc(email!)}</a></td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#64748B;">Mobile</td><td style="padding:6px 0;font-weight:600;">${esc(phone!)}</td></tr>
      </table>
    </div>
  `;
  const text = [
    "New working session request",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    `Position: ${position}`,
    `Email: ${email}`,
    `Mobile: ${phone}`,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email!,
      subject,
      html,
      text,
    });
    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[contact] send threw", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
