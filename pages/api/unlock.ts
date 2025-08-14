import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { password } = req.body || {};
  const ok = typeof password === "string" && password === process.env.PREVIEW_PASSWORD;

  if (!ok) return res.status(401).json({ ok: false });

  const maxAge = 60 * 60 * 24 * 7; // 7 dienas
  const isProd = process.env.NODE_ENV === "production";
  const cookie =
    `site_auth=1; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax;` +
    (isProd ? " Secure;" : "");

  res.setHeader("Set-Cookie", cookie);
  return res.status(200).json({ ok: true });
}
