import Link from "next/link";
import MegaMenu from "@/components/ui/MegaMenu";
import BrandMark from "@/components/ui/BrandMark";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Sākums" className="shrink-0">
          <BrandMark />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <Link href="/about" className="nav-link">Birojs</Link>
          <Link href="/about#team" className="nav-link">Par mums</Link>
          <MegaMenu />
          <Link href="/careers" className="nav-link">Karjera</Link>
          <Link href="/insights" className="nav-link">Ziņas</Link>
          <Link href="/contact" className="nav-link">Kontakti</Link>
          <Link href="/misc" className="nav-link">Citi</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4 text-sm" style={{ color: "var(--brand)" }}>
          <a href="tel:+37120000000" className="rounded-full border border-neutral-200 px-3 py-1.5 hover:bg-neutral-50">
            +371 2000 0000
          </a>
          <span className="text-neutral-300">•</span>
          <a href="mailto:info@rempe.lv" className="nav-link">
            info@rempe.lv
          </a>
        </div>
      </div>
    </header>
  );
}
