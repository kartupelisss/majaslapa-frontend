// pages/services/index.tsx
import Head from "next/head";
import Link from "next/link";
import {
  Scale, Globe2, Gavel, FileText, Shuffle, Landmark
} from "lucide-react";

type Service = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SERVICES: Service[] = [
  {
    slug: "transfertcenu-politika",
    title: "Transfertcenu politika",
    summary: "Struktūra, dokumentācija un audits saskaņā ar OECD vadlīnijām.",
    bullets: [
      "Master/Local File minimums",
      "Salīdzināmo izvēle un metodes",
      "Dokumentācijas gatavība auditam",
    ],
    icon: Scale,
  },
  {
    slug: "pvn-un-parrobezu-darijumi",
    title: "PVN un pārrobežu darījumi",
    summary: "Drošas ķēdes, reģistrācijas, rēķini, atbilstība jurisdikcijās.",
    bullets: [
      "OSS/IOSS, PVN reģistrācijas",
      "Piegādes vietas noteikšana",
      "Dokumentēšana un pierādījumi",
    ],
    icon: Globe2,
  },
  {
    slug: "stridi-un-parbaudes",
    title: "Strīdi un pārbaudes",
    summary: "Pārstāvība VID un tiesās — no skaidrojumiem līdz apelācijām.",
    bullets: [
      "Pārsūdzības un paskaidrojumi",
      "Procesa stratēģija",
      "Judikatūras izmantošana",
    ],
    icon: Gavel,
  },
  {
    slug: "ieturejuma-nodokli",
    title: "Ieturējuma nodokļi",
    summary: "Līgumu struktūras, atvieglojumi un dokumentu noformēšana.",
    bullets: [
      "Rezidences sertifikāti",
      "Patiesā labuma guvējs",
      "Atbrīvojumu piemērošana",
    ],
    icon: FileText,
  },
  {
    slug: "restrukturizacija",
    title: "Restrukturizācija",
    summary: "Nodokļu ietekmes izvērtēšana uzņēmumu darījumos un grupas iekšienē.",
    bullets: [
      "Darījumu kartēšana",
      "Riska analīze",
      "Praktiska ieviešana",
    ],
    icon: Shuffle,
  },
  {
    slug: "es-oecd-prakse",
    title: "ES/OECD prakse",
    summary: "Atbilstība direktīvām, vadlīnijām un jaunajai judikatūrai.",
    bullets: [
      "Direktīvu transponēšana",
      "Vadlīniju pielietojums",
      "Tiesu prakses monitorings",
    ],
    icon: Landmark,
  },
];

export default function ServicesIndex() {
  return (
    <>
      <Head>
        <title>Pakalpojumi — Jurista birojs</title>
        <meta
          name="description"
          content="Praktiski un droši nodokļu risinājumi, pielāgoti biznesa realitātei."
        />
      </Head>

      {/* Top josla */}
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

      <main>
        {/* Hero ar maigu akcentu */}
        <section className="relative border-b border-neutral-200">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(800px 300px at 20% -10%, rgba(0,0,0,.04), transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 relative">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Pakalpojumi
            </h1>
            <p className="mt-3 max-w-3xl text-neutral-600">
              Konsultējam un pārstāvam nodokļu jautājumos — no ikdienas PVN
              situācijām līdz sarežģītiem pārrobežu darījumiem un strīdiem ar VID.
            </p>

            {/* Ātrā navigācija */}
            <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
              {SERVICES.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="whitespace-nowrap rounded-full border border-neutral-200 px-3 py-1.5 text-sm hover:bg-neutral-50"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Cards grid */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  id={s.slug}
                  key={s.slug}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 transition
                             hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 group-hover:bg-white transition">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600">{s.summary}</p>
                      <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-neutral-700">
                        {s.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>

                      <div className="mt-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium border border-neutral-200 hover:bg-neutral-50"
                        >
                          Uzzināt vairāk
                          <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Apakšas CTA */}
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium bg-neutral-900 text-white hover:opacity-90"
            >
              Sazināties par projektu
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
