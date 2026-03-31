import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Send via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AxonEdge Contact <onboarding@resend.dev>",
        to: ["alexm@axonedge.tech"],
        reply_to: email,
        subject: `New inquiry from ${name} — AxonEdge`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d1a; color: #ffffff; padding: 32px; border-radius: 12px;">
            <h2 style="color: #386aff; margin-bottom: 8px;">New Contact Form Submission</h2>
            <p style="color: #a0a0b8; margin-bottom: 24px;">axonedge.tech</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #606080; width: 100px;">Name</td>
                <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #606080;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #386aff;">${email}</a></td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #150f1f; border-radius: 8px; border-left: 3px solid #386aff;">
              <p style="color: #606080; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="color: #ffffff; line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
            </div>
            <p style="color: #404060; font-size: 12px; margin-top: 24px;">Sent from axonedge.tech contact form</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
