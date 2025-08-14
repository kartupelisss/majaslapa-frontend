// next.config.ts
import type { NextConfig } from "next";

const isPreview = process.env.NEXT_PUBLIC_PREVIEW_LOCK === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async headers() {
    const base = [
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ];
    const withRobots = isPreview
      ? [...base, { key: "X-Robots-Tag", value: "noindex, nofollow" }]
      : base;

    return [{ source: "/:path*", headers: withRobots }];
  },
};

export default nextConfig;
