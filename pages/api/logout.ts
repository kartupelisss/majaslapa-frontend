import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const isProd = process.env.NODE_ENV === "production";
  const cookie = `site_auth=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax;` + (isProd ? " Secure;" : "");
  res.setHeader("Set-Cookie", cookie);
  res.setHeader("Cache-Control", "no-store");
  // Vienkārši pāradresējam atpakaļ uz /unlock
  res.writeHead(302, { Location: "/unlock" });
  res.end();
}
