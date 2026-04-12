import { NextRequest, NextResponse } from "next/server";

// Uses Microsoft Graph API to send contact form submissions
// App registration creds are in Vercel env vars
const TENANT_ID = process.env.MS_GRAPH_TENANT_ID!;
const CLIENT_ID = process.env.MS_GRAPH_CLIENT_ID!;
const CLIENT_SECRET = process.env.MS_GRAPH_CLIENT_SECRET!;
const FROM_MAILBOX = "Alex@AxonEdge.Tech";
const NOTIFY_EMAIL = "Alex@AxonEdge.Tech";

async function getGraphToken(): Promise<string> {
  const res = await fetch(
    `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        scope: "https://graph.microsoft.com/.default",
        client_secret: CLIENT_SECRET,
        grant_type: "client_credentials",
      }),
    }
  );
  const data = await res.json();
  if (!data.access_token) throw new Error("Failed to get Graph token");
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, vertical, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET) {
      console.error("Missing Graph API env vars");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const token = await getGraphToken();

    const rows = [
      { label: "Name", value: name },
      { label: "Email", value: email },
      phone && { label: "Phone", value: phone },
      vertical && { label: "Vertical", value: vertical },
    ]
      .filter(Boolean)
      .map(
        (r: any) =>
          `<tr>
            <td style="padding:8px 12px 8px 0;color:#9ca3af;width:100px;vertical-align:top;font-size:13px;">${r.label}</td>
            <td style="padding:8px 0;color:#ffffff;font-weight:600;font-size:13px;">${r.value}</td>
          </tr>`
      )
      .join("");

    const messageBlock = message
      ? `<div style="margin-top:20px;padding:16px;background:#0d0d1a;border-radius:8px;border-left:3px solid #f59e0b;">
          <p style="color:#9ca3af;font-size:11px;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Message</p>
          <p style="color:#ffffff;line-height:1.6;margin:0;font-size:13px;">${message
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\n/g, "<br/>")}</p>
        </div>`
      : "";

    const html = `
      <div style="font-family:-apple-system,sans-serif;max-width:580px;margin:0 auto;background:#080810;color:#ffffff;padding:32px;border-radius:12px;border:1px solid rgba(245,158,11,0.2);">
        <div style="margin-bottom:24px;">
          <h2 style="color:#f59e0b;margin:0 0 4px;font-size:20px;">New Audit Request</h2>
          <p style="color:#6b7280;margin:0;font-size:13px;">axonedge.tech contact form</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        ${messageBlock}
        <p style="color:#374151;font-size:11px;margin-top:24px;border-top:1px solid rgba(255,255,255,0.05);padding-top:16px;">Sent from axonedge.tech</p>
      </div>`;

    const mailRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(FROM_MAILBOX)}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: `New audit request: ${name}${vertical ? ` (${vertical})` : ""}`,
            body: { contentType: "HTML", content: html },
            toRecipients: [{ emailAddress: { address: NOTIFY_EMAIL } }],
            replyTo: [{ emailAddress: { name, address: email } }],
          },
          saveToSentItems: true,
        }),
      }
    );

    if (!mailRes.ok) {
      const err = await mailRes.text();
      console.error("Graph send error:", err);
      return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
