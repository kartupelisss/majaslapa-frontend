/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Link from "next/link";
import { InfoBlock } from "@/components/InfoBlock";
import { ServiceCard } from "@/components/ServiceCard";
import { Modal } from "@/components/Modal";

type ServiceDoc = {
  slug: string;
  heroVirsraksts?: string;
  heroApraksts?: string;
  nosaukums?: string;
  saturaBloki?: any[];
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/services`);
  const data = await res.json();

  const paths =
    data?.docs
      ?.filter((doc: ServiceDoc) => !!doc.slug)
      .map((doc: ServiceDoc) => ({ params: { slug: doc.slug } })) || [];

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const slug = params?.slug;
  if (!slug) return { notFound: true };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/services?where[slug][equals]=${encodeURIComponent(slug)}`
  );
  const data = await res.json();
  const service: ServiceDoc | null = data?.docs?.[0] ?? null;

  if (!service) return { notFound: true };

  return {
    props: { service },
    revalidate: 60,
  };
}

// 🟦 Komponenta daļa
export default function ServicePage({ service }: { service: ServiceDoc }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // === Iegūst kartītes no CMS ===
  const cardBlocks = service?.saturaBloki?.find(
    (b: any) => b.blockType === "kartisu-rezigs"
  );
  const cards = cardBlocks?.kartites || [];

  // === Hero teksti ===
  const heroTitle = service?.heroVirsraksts || service?.nosaukums;
  const heroDesc = service?.heroApraksts || "";

  // === Info bloki ===
  const infoBlocks = service?.saturaBloki?.filter(
    (b: any) => b.blockType === "teksta-bloks" && b.virsraksts && !b.saturs
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* === HERO === */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0a2149 0%, #163b73 100%)" }}
      >
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-100">
            Pakalpojumi
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
            {heroTitle}
          </h1>

          <div className="mt-8 max-w-3xl space-y-6 text-white/90 whitespace-pre-line">
            {heroDesc.split("\n\n").map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FFD93D] hover:bg-[#FFE169] px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10l-3-2H5a3 3 0 01-3-3V5z" />
              </svg>
              Sazināties
            </Link>

            <Link
              href="/contact#piedavajums"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/60"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Saņemt piedāvājumu
            </Link>
          </div>
        </div>
      </section>

      {/* === INFO BLOKI === */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold text-foreground mb-10">
          Ko tieši darām un kā strādājam
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {infoBlocks?.map((b: any, idx: number) => (
            <InfoBlock
              key={idx}
              index={idx}
              title={b.virsraksts}
              content={
                <ul className="list-disc list-inside space-y-1">
                  {b?.punkti?.map((p: any) => (
                    <li key={p.id}>{p.teksts}</li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>

        {/* Dzeltenā kaste */}
        <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-8 mt-10">
          <h3 className="text-xl font-bold mb-4">Kāpēc izvēlēties profesionālu pārstāvību?</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Samazina risku pārmaksāt nodokļus vai tikt nepamatoti sodītam.</li>
            <li>Pasargā reputāciju un nodrošina procesu atbilstību tiesību aktiem.</li>
            <li>Atbrīvo vadības laiku — komunikāciju ar VID koordinējam mēs.</li>
          </ul>
        </div>
      </section>

      {/* === KĀ MĒS VARAM PALĪDZĒT === */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-4">Kā mēs varam palīdzēt?</h2>
        <p className="text-muted-foreground mb-8">
          Izvēlieties jūsu vajadzībām atbilstošo pakalpojumu un uzziniet, kā mēs varam palīdzēt jums risināt jautājumus ar VID.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c: any, i: number) => (
            <ServiceCard
              key={i}
              index={i}
              card={{
                title: c.virsraksts,
                teaser: c.apraksts,
                hoverBullets: c.punkti?.map((p: any) => p.teksts) || [],
                modalBody: [c.apraksts],
              }}
              onOpen={() => setOpenIdx(i)}
            />
          ))}
        </div>
      </section>

      {openIdx !== null && cards[openIdx] && (
        <Modal
          onClose={() => setOpenIdx(null)}
          title={cards[openIdx].virsraksts}
        >
          <p>{cards[openIdx].apraksts}</p>
          <ul className="list-disc list-inside mt-4 space-y-1">
            {cards[openIdx]?.punkti?.map((p: any) => (
              <li key={p.id}>{p.teksts}</li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
}
