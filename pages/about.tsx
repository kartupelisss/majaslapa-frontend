// pages/about.tsx
import Head from "next/head";
import Link from "next/link";
import { CheckCircle2, Quote, Mail, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Par juristu — Jurista birojs</title>
        <meta
          name="description"
          content="Boutique birojs ar fokusu uz nodokļu konsultācijām, pārrobežu darījumiem un strīdiem ar VID."
        />
      </Head>

      {/* Augšējā josla */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">
            ← Atpakaļ uz sākumu
          </Link>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
          >
            Sazināties
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:py-14">
        {/* Hero: saturs + foto vietturis */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Par juristu
            </h1>

            <p className="mt-4 text-neutral-600 leading-relaxed max-w-2xl">
              Boutique birojs ar fokusu uz nodokļu konsultācijām, pārrobežu darījumiem un
              strīdiem ar VID. Praktiska pieeja, precīzi dokumenti un skaidra komunikācija ar
              finanšu un vadības komandām.
            </p>

            {/* “Badges” */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "15+ gadu pieredze",
                "OECD/ES prakse",
                "VID un tiesvedība",
                "PVN · transfertcenas",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Ikonu saraksts */}
            <ul className="mt-8 space-y-3">
              {[
                "Nodokļu konsultācijas un tiesvedība ar konsekventu rezultātu piegādi.",
                "ES un OECD vadlīniju praktiska piemērošana ikdienas procesos.",
                "Nozares: ražošana, e-komercija, HoReCa, finanšu pakalpojumi.",
              ].map((line, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            {/* Citāts */}
            <figure className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="flex gap-3 text-neutral-800">
                <Quote className="h-5 w-5 mt-0.5 shrink-0" aria-hidden />
                <blockquote className="text-[15px] leading-relaxed">
                  Mans uzdevums ir sarežģīto sadalīt vienkāršos soļos — lai lēmumi ir
                  izpildāmi, dokumenti aizstāvami un risks prognozējams.
                </blockquote>
              </div>
            </figure>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-sm font-medium text-neutral-900">Izglītība</div>
                <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                  <li>Mg.iur., finanšu un nodokļu tiesības</li>
                  <li>Starptautiskās nodokļu programmas (OECD/IBFD)</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-sm font-medium text-neutral-900">Valodas</div>
                <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                  <li>Latviešu, angļu, krievu</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Sazināties
              </Link>
              <a
                href="mailto:info@example.com"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
              >
                <Mail className="h-4 w-4" /> info@example.com
              </a>
              <a
                href="tel:+37120000000"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
              >
                <Phone className="h-4 w-4" /> +371 20 000 000
              </a>
            </div>
          </div>

          {/* RIGHT — foto vietturis */}
          <div className="relative">
            <div
              className="rounded-3xl border border-neutral-200 bg-neutral-100 h-[360px] md:h-[440px] lg:h-[520px]"
              aria-label="Foto vieta"
              style={{
                backgroundImage:
                  "radial-gradient(600px 240px at 20% 0%, rgba(0,0,0,.04), transparent 60%)",
              }}
            />
            {/* zem foto – maza piezīme */}
            <div className="mt-3 text-xs text-neutral-500">
              Foto vietturis — ieliksim reālu portretu vēlāk (1200×1500 ieteicams).
            </div>
          </div>
        </section>

        {/* Neliela horizontāla līnija un “īsi fakti” */}
        <section className="mt-14 border-t border-neutral-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { k: "> 15 gadi", v: "Nodokļu konsultācijas" },
              { k: "100+ projekti", v: "PVN / transfertcenas" },
              { k: "VID & tiesas", v: "Regulāra pārstāvība" },
            ].map((item) => (
              <div key={item.k} className="rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="text-base font-semibold text-neutral-900">{item.k}</div>
                <div className="text-sm text-neutral-600">{item.v}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
