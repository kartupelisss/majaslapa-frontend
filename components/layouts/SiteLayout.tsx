import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";      // <- tavs esošais navbar/megamenu
import Footer from "@/components/Footer";      // <- tas zilais Footer.tsx, ko jau saglabāji

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
