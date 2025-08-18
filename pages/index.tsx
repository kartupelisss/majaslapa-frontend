// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import BrandMark from "../components/ui/BrandMark";

/** ---- Dati: Pakalpojumi (izmanto gan mega-menu, gan sadaļa) ---- */
type Service = {
  slug: string;
  title: string;
  excerpt: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    slug: "stridi-un-parbaudes",
    title: "Strīdi un pārbaudes",
    excerpt: "Pārstāvība VID un tiesās — no skaidrojumiem līdz apelācijām.",
    bullets: ["Pārsūdzības un paskaidrojumi", "Procesa stratēģija", "Judikatūras izmantošana"],
  },
  {
    slug: "pvn-un-parrobezu-darijumi",
    title: "PVN un pārrobežu darījumi",
    excerpt: "Drošas ķēdes, reģistrācijas, rēķini, atbilstība jurisdikcijās.",
    bullets: ["OSS/IOSS, PVN reģistrācijas", "Piegādes vietas noteikšana", "Dokumentēšana un pierādījumi"],
  },
  {
    slug: "transfercenu-politika",
    title: "Transfercenu politika",
    excerpt: "Struktūra, dokumentācija un audits saskaņā ar OECD vadlīnijām.",
    bullets: ["Master/Local File minimums", "Salīdzināmo izvēle un metodes", "Dokumentācija gatavībai auditam"],
  },
  {
    slug: "ieturejuma-nodokli",
    title: "Ieturējuma nodokļi",
    excerpt: "Līgumu struktūras, atvieglojumi un dokumentu noformēšana.",
    bullets: ["Rezidences sertifikāti", "Peļņas izmaksu guvumi", "Atbrīvojumu plānošana"],
  },
  {
    slug: "restrukturizacija",
    title: "Restrukturizācija",
    excerpt: "Nodokļu ietekmes izvērtēšana uzņēmumu jaunajā jurisdikcijā.",
    bullets: ["Darījumu kartēšana", "Riska analīze", "Pārejas lēmumi"],
  },
  {
    slug: "es-oecd-prakse",
    title: "ES/OECD prakse",
    excerpt: "Atbilstība direktīvām, vadlīnijām un jaunajai judikatūrai.",
    bullets: ["Direktīvu transponēšana", "Valdību pieteikumi", "Tiesu prakses monitorings"],
  },
];

/** ---- Interaktīvā Pakalpojumu sadaļa mājaslapā ---- */
function PakalpojumiInteractive() {
  const initialSlug = useMemo(() => {
    if (typeof window === "undefined") return SERVICES[0].slug;
    const h = window.location.hash.replace("#", "");
    return h.startsWith("pakalpojumi-") ? h.replace("pakalpojumi-", "") : SERVICES[0].slug;
  }, []);
  const [active, setActive] = useState<string>(initialSlug);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h.startsWith("pakalpojumi-")) {
        const slug = h.replace("pakalpojumi-", "");
        if (slug !== active) setActive(slug);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [active]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    history.replaceState(null, "", `#pakalpojumi-${active}`);
  }, [active]);

  const current = SERVICES.find((s) => s.slug === active) ?? SERVICES[0];

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-[minmax(260px,360px)_1fr]">
      <nav aria-label="Pakalpojumu saraksts" className="space-y-2 rounded-2xl border border-neutral-200 p-2 bg-white">
        {SERVICES.map((s) => {
          const isActive = s.slug === active;
          return (
            <button
              key={s.slug}
              onClick={() => setActive(s.slug)}
              className={[
                "w-full text-left rounded-xl px-3 py-3 transition",
                isActive ? "bg-neutral-100 ring-1 ring-neutral-900/10" : "hover:bg-neutral-50",
              ].join(" ")}
              aria-current={isActive ? "true" : undefined}
            >
              <span className="font-medium">{s.title}</span>
            </button>
          );
        })}
      </nav>

      <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
        <h3 className="text-2xl font-semibold">{current.title}</h3>
        <p className="mt-1 text-sm text-neutral-600">{current.excerpt}</p>

        <ul className="mt-6 space-y-2 pl-1">
          {current.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium border border-neutral-200 hover:bg-neutral-50"
          >
            Uzzināt vairāk →
          </Link>
        </div>
      </div>
    </div>
  );
}

/** ---- Galvenā lapa ---- */
export default function Home() {
  // Mega-menu (hover) vadība
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };
  const delayedClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenuOpen(false), 120);
  };

  function goToService(slug: string) {
    window.location.hash = `pakalpojumi-${slug}`;
    const el = document.querySelector("#pakalpojumi");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  return (
    <>
      <Head>
        <title>Nodokļu risinājumi ar precizitāti — Jurista birojs</title>
        <meta
          name="description"
          content="Stratēģiskas nodokļu konsultācijas ar juridisko precizitāti un finanšu domāšanu. Latvijā un pārrobežu darījumos."
        />
        <meta property="og:title" content="Nodokļu risinājumi ar precizitāti — Jurista birojs" />
        <meta property="og:description" content="Stratēģiskas nodokļu konsultācijas ar juridisko precizitāti un finanšu domāšanu." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Sticky Header + mega-menu uz hover */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="relative mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <BrandMark />

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link className="hover:opacity-80" href="/insights">Insights</Link>

            {/* Services trigger: bultiņa griežas, kad atvērts */}
            <div
              className="relative group"
              onMouseEnter={openMenu}
              onMouseLeave={delayedClose}
              onFocus={openMenu}
              onBlur={delayedClose}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:opacity-80"
                aria-haspopup="true"
                aria-expanded={menuOpen}
              >
                <span>Services</span>
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className={
                    "h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:opacity-100 " +
                    (menuOpen ? "rotate-180" : "rotate-0")
                  }
                >
                  <path
                    d="M6 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>

              {/* Mega menu panelis (necaurspīdīgs) */}
              {menuOpen && (
                <div
                  className="absolute left-1/2 z-50 mt-3 w-[82vw] max-w-5xl -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white shadow-2xl ring-1 ring-neutral-900/5"
                  onMouseEnter={openMenu}
                  onMouseLeave={delayedClose}
                  aria-label="Pakalpojumu izvēlne"
                >
                  {/* Paneļa headeris */}
                  <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-6 py-4">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-neutral-500">Pakalpojumi</div>
                      <div className="mt-1 h-1 w-8 rounded-full bg-neutral-900/80" aria-hidden />
                    </div>
                    <button
                      onClick={() => {
                        window.location.hash = "pakalpojumi";
                        document.querySelector("#pakalpojumi")?.scrollIntoView({ behavior: "smooth" });
                        setMenuOpen(false);
                      }}
                      className="text-sm underline underline-offset-4 hover:opacity-80"
                    >
                      Skatīt visu sadaļu
                    </button>
                  </div>

                  {/* Paneļa saturs */}
                  <div className="grid md:grid-cols-[2fr_1fr] gap-6 p-6">
                    {/* Saraksts (2 kolonnas) */}
                    <div className="grid grid-cols-2 gap-x-10 gap-y-3 pr-6 md:border-r md:border-neutral-200">
                      {SERVICES.map((s) => (
                        <button
                          key={s.slug}
                          onClick={() => goToService(s.slug)}
                          className="text-left text-sm py-1 hover:underline decoration-neutral-300 underline-offset-4"
                        >
                          {s.title}
                        </button>
                      ))}

                      <button
                        onClick={() => {
                          window.location.hash = "pakalpojumi";
                          document.querySelector("#pakalpojumi")?.scrollIntoView({ behavior: "smooth" });
                          setMenuOpen(false);
                        }}
                        className="col-span-2 mt-2 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 hover:opacity-80"
                      >
                        Show all <span aria-hidden>→</span>
                      </button>
                    </div>

                    {/* Featured bloks */}
                    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                      <div className="text-xs text-neutral-500">Featured</div>
                      <div className="mt-2 text-sm font-medium leading-snug">
                        Nodokļu strīdu stratēģijas: 3 praktiski soļi pirms VID sarunām
                      </div>
                      <Link href="/insights" className="mt-3 inline-block text-sm underline underline-offset-4">
                        Lasīt vairāk
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link className="hover:opacity-80" href="/about">About</Link>
            <Link className="hover:opacity-80" href="/contact">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
          >
            Sazināties
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 lg:pt-28">
          <div className="max-w-6xl">
            <h1 className="text-[38px] md:text-[52px] lg:text-[64px] font-medium tracking-tight leading-[1.06] text-neutral-900">
              <span className="block">Skaldi sarežģīto vienkāršos soļos</span>
              <span className="block md:whitespace-nowrap">Augstas klases nodokļu risinājumi</span>
            </h1>

            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-neutral-500">
              Stratēģiskas konsultācijas ar juridisko precizitāti un finanšu domāšanu.
              Latvijā un pārrobežu darījumos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium bg-neutral-900 text-white hover:opacity-90"
              >
                Iesākt sarunu
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium border border-neutral-200 hover:bg-neutral-50"
              >
                Skatīt Insights
              </Link>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-16 border-t border-neutral-200 pt-5 text-sm text-neutral-500">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="shrink-0">› 15+ gadu pieredze</div>
              <div className="hidden sm:block h-4 w-px bg-neutral-200" />
              <div className="shrink-0">Regulāri pārstāvam VID un tiesās</div>
              <div className="hidden sm:block h-4 w-px bg-neutral-200" />
              <div className="shrink-0">OECD un ES prakses skatījums</div>
              <div className="hidden sm:block h-4 w-px bg-neutral-200" />
              <div className="shrink-0">Nozares: ražošana, e-komercija, HoReCa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pakalpojumi */}
      <section id="pakalpojumi" className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Pakalpojumi</h2>
            <p className="mt-3 text-neutral-500">
              Konsultējam un pārstāvam nodokļu jautājumos — no ikdienas PVN situācijām līdz sarežģītiem
              pārrobežu darījumiem un strīdiem ar VID.
            </p>
          </div>

          <PakalpojumiInteractive />
        </div>
      </section>

      {/* Insights */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Jaunākie Insights</h2>
            <p className="mt-3 text-neutral-500">Īsas piezīmes par regulējumu, praksi un spriedumiem.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article key={i} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="text-xs text-neutral-500">2025-08-01</div>
                <h3 className="mt-2 text-[17px] font-semibold leading-snug text-neutral-900">
                  PVN ķēdes risku samazināšana e-komercijā
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  Praktiskas pārbaudes un dokumentēšana, kas palīdz izvairīties no noraidītām atskaitēm.
                </p>
                <Link href="/insights" className="mt-4 inline-block text-sm underline underline-offset-4">
                  Lasīt vairāk
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-neutral-200 p-8 md:p-12 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Sāksim ar īsu zvanu.</h2>
              <p className="mt-2 text-neutral-500">20 minūtes, lai saprastu situāciju un piedāvātu rīcības plānu.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium bg-neutral-900 text-white hover:opacity-90"
            >
              Pieteikt konsultāciju
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-neutral-500">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>© {new Date().getFullYear()} Jurista birojs · Tax</div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:opacity-80">Privātums</Link>
              <Link href="/terms" className="hover:opacity-80">Noteikumi</Link>
              <Link href="/contact" className="hover:opacity-80">Kontakti</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
