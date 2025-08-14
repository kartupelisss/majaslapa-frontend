// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    const { name, email, message } = JSON.parse(req.body || "{}");

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    // Šobrīd – tikai ierakstām servera konsolē (strādā uzreiz)
    console.log("CONTACT_FORM:", { name, email, message });

    // Ja pēc tam gribēsi sūtīt e‑pastu ar Resend:
    // const RESEND_API_KEY = process.env.RESEND_API_KEY;
    // if (RESEND_API_KEY) {
    //   await fetch("https://api.resend.com/emails", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
    //     body: JSON.stringify({
    //       from: "no-reply@your-domain.dev",
    //       to: "info@juristibirojs.lv",
    //       subject: "Jauns ziņojums no mājaslapas",
    //       html: `<p><b>Vārds:</b> ${name}</p><p><b>E‑pasts:</b> ${email}</p><p>${message}</p>`,
    //     }),
    //   });
    // }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
