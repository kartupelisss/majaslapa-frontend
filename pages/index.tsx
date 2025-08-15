// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import BrandMark from "../components/ui/BrandMark";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nodokļu risinājumi ar precizitāti — Jurista birojs</title>
        <meta
          name="description"
          content="Stratēģiskas nodokļu konsultācijas ar juridisko precizitāti un finanšu domāšanu. Latvijā un pārrobežu darījumos."
        />
        <meta property="og:title" content="Nodokļu risinājumi ar precizitāti — Jurista birojs" />
        <meta
          property="og:description"
          content="Stratēģiskas nodokļu konsultācijas ar juridisko precizitāti un finanšu domāšanu."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Header ar logo (tikai šajā lapā) */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <BrandMark />

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link className="hover:opacity-80" href="/insights">Insights</Link>
            <Link className="hover:opacity-80" href="/services">Services</Link>
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
            <h1
              className="
                text-[38px] md:text-[52px] lg:text-[64px]
                font-medium tracking-tight leading-[1.06]
                text-neutral-900
              "
            >
              <span className="block">Skaldi sarežģīto vienkāršos soļos</span>
              <span className="block md:whitespace-nowrap">
                Augstas klases nodokļu risinājumi
              </span>
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
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

      {/* Services */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Mūsu fokuss</h2>
            <p className="mt-3 text-neutral-500">
              Praktiski un droši nodokļu risinājumi, pielāgoti biznesa realitātei.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Transfertcenu politika", text: "Struktūra, dokumentācija un audits saskaņā ar OECD vadlīnijām." },
              { title: "PVN un pārrobežu darījumi", text: "Drošas ķēdes, reģistrācijas, rēķini, atbilstība jurisdikcijās." },
              { title: "Strīdi un pārbaudes", text: "Pārstāvība VID un tiesās — no skaidrojumiem līdz apelācijām." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-neutral-200 p-6 bg-white">
                <h3 className="text-lg font-semibold text-neutral-900">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-500">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium border border-neutral-200 hover:bg-neutral-50"
            >
              Visi pakalpojumi
            </Link>
          </div>
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
