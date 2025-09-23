import type { ReactNode } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();

  // šeit uzskaiti lapas, kurās nevajag header/footer
  const HIDE_CHROME_ROUTES = ["/unlock"];
  const hideChrome = HIDE_CHROME_ROUTES.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideChrome && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideChrome && <Footer />}
    </div>
  );
}
