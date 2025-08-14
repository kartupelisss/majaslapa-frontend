// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Slēdzis (ieslēdz ar NEXT_PUBLIC_PREVIEW_LOCK=1)
const ENABLE_LOCK = process.env.NEXT_PUBLIC_PREVIEW_LOCK === "1";

export function middleware(req: NextRequest) {
  if (!ENABLE_LOCK) return NextResponse.next();

  const { nextUrl, cookies } = req;
  const pathname = nextUrl.pathname;

  // Atļaujam: Next iekšējie faili, unlock lapa un API, favicon u.c.
  if (
    pathname.startsWith("/_next") ||
    pathname === "/unlock" ||
    pathname.startsWith("/api/unlock") ||
    pathname.startsWith("/api/logout") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/public") ||
    pathname.startsWith("/images") // ja izmanto /public/images
  ) {
    return NextResponse.next();
  }

  // Pārbaude
  const isUnlocked = cookies.get("site_auth")?.value === "1";
  if (!isUnlocked) {
    const url = nextUrl.clone();
    url.pathname = "/unlock";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*", // skrien uz visiem ceļiem
};
