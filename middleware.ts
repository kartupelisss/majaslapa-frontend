// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ENABLE_LOCK = process.env.NEXT_PUBLIC_PREVIEW_LOCK === "1";

export function middleware(req: NextRequest) {
  if (!ENABLE_LOCK) return NextResponse.next();

  const { nextUrl, cookies } = req;

  // Atļaujam /unlock un JEBKURU statisku failu (/_next, /api, favicon, viss ar paplašinājumu)
  if (
    nextUrl.pathname === "/unlock" ||
    nextUrl.pathname.startsWith("/api/") ||
    nextUrl.pathname.startsWith("/_next/") ||
    nextUrl.pathname === "/favicon.ico" ||
    /\.[a-zA-Z0-9]+$/.test(nextUrl.pathname) // *.jpg, *.png, *.css, *.js, ...
  ) {
    return NextResponse.next();
  }

  const isUnlocked = cookies.get("site_auth")?.value === "1";
  if (!isUnlocked) {
    const url = nextUrl.clone();
    url.pathname = "/unlock";
    url.searchParams.set("from", nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Middleware darbosies tikai “lapām” (ne uz statikas)
  matcher: ["/((?!_next|api|favicon.ico|.*\\.).*)"],
};
