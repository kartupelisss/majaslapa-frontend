// components/Navbar.tsx
import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";
import MegaMenu from "@/components/ui/MegaMenu";

const CONTACT_EMAIL = "info@rempe.lv";
const CONTACT_PHONE = "+371 2000 0000";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      {/* Augšējā kontaktu josla */}
      <div className="hidden md:flex items-center justify-end text-sm px-6 py-1.5">
        <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="hover:underline">
          {CONTACT_PHONE}
        </a>
        <span className="mx-2">•</span>
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
          {CONTACT_EMAIL}
        </a>
      </div>

      {/* Galvene */}
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <BrandMark />

        {/* Galvenā navigācija */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/contact" className="hover:underline">Birojs</Link>
          <Link href="/about" className="hover:underline">Par mums</Link>

          {/* Pakalpojumi ar drošu hover (bez “spoku zonas”) */}
          <div className="relative group">
            <button
              type="button"
              className="inline-flex items-center gap-2 hover:underline"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pakalpojumi <span aria-hidden>▾</span>
            </button>

            {/* Wrapperam nav savas “hitbox”; panelis eksistē tikai hover/focus laikā */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 z-50 pt-3">
              <div className="hidden group-hover:block group-focus-within:block">
                <MegaMenu />
              </div>
            </div>
          </div>

          <Link href="/about#karjera" className="hover:underline">Karjera</Link>
          <Link href="/insights" className="hover:underline">Ziņas</Link>
          <Link href="/contact" className="hover:underline">Kontakti</Link>
          <Link href="/privacy" className="hover:underline">Citi</Link>
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Sazināties
        </Link>
      </div>
    </header>
  );
}
