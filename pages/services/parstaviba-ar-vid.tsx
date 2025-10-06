import Head from "next/head";
import Link from "next/link";
import * as React from "react";

type Card = {
  title: string;
  teaser: string;
  hoverBullets: string[];
  modalBody: string[];
};

const CARDS: Card[] = [
  {
    title: "Iesniegumi un uzziņas",
    teaser:
      "Savlaicīgi un korekti dokumenti ļauj novērst strīdus jau pirms to rašanās.",
    hoverBullets: [
      "Iesniegumi par termiņiem un kārtību",
      "Juridiski saistoši uzziņu pieprasījumi",
      "Skaidrojumi un papildu informācija",
    ],
    modalBody: [
      "Sagatavojam iesniegumus un uzziņu pieprasījumus ar skaidru, juridiski korektu argumentāciju un atsaucēm uz normatīvajiem aktiem.",
      "Koordinējam komunikāciju ar VID, lai saņemtu precīzas atbildes un izvairītos no interpretācijas riskiem.",
    ],
  },
  {
    title: "Pārstāvība pārbaužu laikā",
    teaser:
      "Sagatavošanās audits, atbildes uz jautājumiem, dokumentu aprite.",
    hoverBullets: [
      "Sagatavošanās audits",
      "Komunikācijas koordinēšana",
      "Juridiskā un nodokļu argumentācija",
    ],
    modalBody: [
      "Veicam darījumu un dokumentācijas novērtējumu, sagatavojam skaidras atbildes uz audita jautājumiem.",
      "Mērķis – skaidrība un nepamatotu secinājumu nepieļaušana.",
    ],
  },
  {
    title: "Apstrīdēšana iestādē",
    teaser:
      "Lēmumu analīze un argumentēts apstrīdēšanas iesniegums ar pierādījumiem.",
    hoverBullets: [
      "Detalizēta lēmuma analīze",
      "Apstrīdēšanas iesniegums ar juridiskiem un ekonomiskiem pamatojumiem",
      "Papildu pierādījumi (TP analīze, ekspertīzes)",
    ],
    modalBody: [
      "Sagatavojam pilnu apstrīdēšanas iesniegumu ar tiesisku un ekonomisku pamatojumu.",
      "Nodrošinām papildpierādījumus – transfertcenu analīzes, salīdzināmos datus, ekspertīzes.",
    ],
  },
  {
    title: "Tiesa un TP strīdi",
    teaser:
      "Prasības pieteikumi, debates tiesā, transfertcenu dokumentācija un analīze.",
    hoverBullets: [
      "Prasības pieteikums",
      "Pierādījumu bāze",
      "Mutiskās debates un atbildes uz tiesas jautājumiem",
    ],
    modalBody: [
      "Pārstāvība tiesā, ieskaitot prasības pieteikumu un pierādījumu bāzes sagatavošanu.",
      "Transfertcenu strīdos piemērojam OECD standartus un balstāmies uz kvalitatīviem salīdzināmajiem datiem.",
    ],
  },
];

export default function ParstavibaArVIDPage() {
  const title = "Pārstāvība komunikācijā un strīdos ar VID — REMPE";
  const description =
    "Iesniegumi un uzziņas, pārstāvība pārbaužu un auditu laikā, lēmumu apstrīdēšana un pārsūdzēšana tiesā, transfertcenu strīdi. Skaidra stratēģija un juridiski pamatota argumentācija.";

  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </Head>

      {/* HERO */}
      <section className="relative w-full border-b">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-xs uppercase tracking-wider text-neutral-500">Pakalpojumi</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight">
            Pārstāvība komunikācijā un strīdos ar VID
          </h1>

          {/* Lead + garāks ievads (kreisajā kolonnā) */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <p className="text-[18.5px] leading-8 text-neutral-700">
                Efektīva sadarbība ar Valsts ieņēmumu dienestu (VID) ir viens no
                priekšnosacījumiem, lai uzņēmumi un privātpersonas varētu droši
                sasniegt savus biznesa un finanšu mērķus. Pareiza nodokļu piemērošana,
                prognozējami rezultāti un juridiskā drošība rada stabilu pamatu
                izaugsmei. Tomēr nodokļu regulējums bieži ir sarežģīts, un praksē
                rodas neskaidri jautājumi vai pat domstarpības ar VID.
              </p>
              <p className="mt-4 text-[18.5px] leading-8 text-neutral-700">
                Mēs palīdzam klientiem sasniegt skaidrību un paredzamību attiecībās ar
                VID, sagatavojot kvalitatīvus iesniegumus un uzziņu pieprasījumus,
                pārstāvot pārbaužu un auditu laikā, kā arī – ja nepieciešams –
                apstrīdot nelabvēlīgus lēmumus vai aizstāvot klientu tiesā.
              </p>

              {/* CTA (kreisajā pusē) */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/kontakti" className="btn-primary inline-flex h-10 items-center gap-2 px-4">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10l-3-2H5a3 3 0 01-3-3V5z" />
                  </svg>
                  Sazināties
                </Link>
                <Link href="/kontakti#piedavajums" className="btn-outline inline-flex h-10 items-center gap-2 px-4">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                  </svg>
                  Saņemt piedāvājumu
                </Link>
              </div>
            </div>

            {/* Labā kolonna – tukšs “gutter” glītam kreisajam līdzinājumam */}
            <div className="md:col-span-5" />
          </div>
        </div>
      </section>

      {/* OTRĀ – detalizētais saturs (kreisajā kolonnā) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <div className="prose">
              <h2>Ko tieši darām un kā strādājam</h2>

              <h3>1. Komunikācija ar VID: iesniegumi, uzziņas un skaidrojumi</h3>
              <p>
                Viens no būtiskākajiem elementiem attiecībās ar nodokļu administrāciju ir
                savlaicīga un skaidra komunikācija. Lai izvairītos no riskiem vai sankcijām, var
                vērsties VID ar:
              </p>
              <ul>
                <li><strong>Iesniegumiem</strong> – termiņu pagarinājumiem, dokumentu iesniegšanas kārtībai u.c.</li>
                <li><strong>Uzziņu pieprasījumiem</strong> – juridiski saistoši skaidrojumi konkrētai situācijai.</li>
                <li><strong>Skaidrojumiem / papildu informāciju</strong> – pēc VID pieprasījuma.</li>
              </ul>
              <p>
                Mēs nodrošinām, lai dokumenti būtu juridiski korekti, ar skaidru argumentāciju un
                atsaucēm uz normatīvajiem aktiem. Labi sagatavots iesniegums var novērst strīdu vēl
                pirms tas ir sācies.
              </p>

              <h3>2. Pārstāvība nodokļu pārbaužu un auditu ietvaros</h3>
              <ul>
                <li><strong>Sagatavošanās audits</strong> – darījumu, dokumentācijas un uzskaites izvērtējums.</li>
                <li><strong>Komunikācijas koordinēšana</strong> – pārstāvība tikšanās laikā, atbildes uz jautājumiem.</li>
                <li><strong>Juridiskā un nodokļu argumentācija</strong> – normu, judikatūras, OECD vadlīniju pamatojumi.</li>
                <li><strong>Strīdu novēršana audita laikā</strong> – mērķis panākt skaidrību jau audita gaitā.</li>
              </ul>

              <h3>3. Lēmumu apstrīdēšana iestādē</h3>
              <ul>
                <li>Detalizēti izvērtējam VID lēmumu un tā trūkumus.</li>
                <li>Izstrādājam argumentētu apstrīdēšanas iesniegumu ar juridisku/ekonomisku pamatojumu.</li>
                <li>Sniedzam papildu pierādījumus (darījumu dokumenti, TP analīze, ekspertīzes).</li>
              </ul>

              <h3>4. Lēmumu pārsūdzēšana tiesā</h3>
              <ul>
                <li><strong>Prasības pieteikums</strong> – precīzs juridiskais pamatojums.</li>
                <li><strong>Pierādījumu bāze</strong> – dokumenti, ekspertīzes, liecības.</li>
                <li><strong>Pārstāvība tiesā</strong> – debates, atbildes uz jautājumiem, skaidrojumi.</li>
                <li><strong>Transfertcenu strīdi</strong> – OECD standarti, salīdzinošās analīzes.</li>
              </ul>

              <h3>5. Strīdi transfertcenu jomā</h3>
              <ul>
                <li>Dokumentācijas atbilstības analīze.</li>
                <li>Ekonomiskā salīdzinošā analīze un datubāzu izmantošana.</li>
                <li>Starptautisko standartu piemērošana (OECD, ES prakse).</li>
                <li>Pārstāvība tiesvedībā ar skaidru un pārliecinošu prezentāciju.</li>
              </ul>

              <h3>6. Kāpēc izvēlēties profesionālu pārstāvību?</h3>
              <ul>
                <li>Samazina risku pārmaksāt nodokļus vai tikt nepamatoti sodītam.</li>
                <li>Pasargā reputāciju un nodrošina procesu atbilstību tiesību aktiem.</li>
                <li>Atbrīvo vadības laiku — komunikāciju ar VID koordinējam mēs.</li>
              </ul>

              <h3>Noslēgumā</h3>
              <p>
                Attiecības ar VID var būt izaicinošas, taču ar pareizu pieeju tās kļūst par
                uzņēmuma drošības un stabilitātes garantu. Mēs pārstāvam jūsu intereses profesionāli,
                konsekventi un ar maksimālu atdevi.
              </p>
            </div>
          </div>
          <div className="md:col-span-5" />
        </div>
      </section>

      {/* KASTĪTES (pēc tekstiem) */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Kā mēs varam palīdzēt?</h2>
        <div className="mt-6 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <ServiceCard key={i} card={c} onOpen={() => setOpenIdx(i)} />
          ))}
        </div>
      </section>

      {/* MODĀLIS KARTĒM */}
      {openIdx !== null && (
        <Modal onClose={() => setOpenIdx(null)} title={CARDS[openIdx].title}>
          {CARDS[openIdx].modalBody.map((p, k) => (
            <p key={k} className="mb-3">{p}</p>
          ))}
        </Modal>
      )}
    </>
  );
}

/* === Components === */

function ServiceCard({ card, onOpen }: { card: Card; onOpen: () => void }) {
  return (
    <div
      className={[
        "group/service service-card rounded-2xl border border-white/10",
        "flex flex-col p-5",
        "min-h-[280px] lg:min-h-[300px]",
        "transition-shadow duration-200 hover:shadow-xl",
      ].join(" ")}
    >
      <div>
        <h3 className="service-card-title text-xl font-semibold leading-snug">{card.title}</h3>
        <p className="mt-3 text-white/85 text-[15px] leading-6">{card.teaser}</p>

        {/* hover saturs plūsmā (bez absolute) */}
        <div
          className={[
            "mt-3 overflow-hidden opacity-0",
            "max-h-0",
            "transition-[max-height,opacity] duration-300 ease-out",
            "group-hover/service:max-h-48 group-hover/service:opacity-100",
          ].join(" ")}
        >
          <ul className="rounded-xl bg-white/10 p-4 text-white/95 text-sm leading-6">
            {card.hoverBullets.map((b, idx) => (
              <li key={idx} className="list-disc list-inside">{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="mt-auto inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        Uzzināt vairāk
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Aizvērt"
            className="rounded-md p-1 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mt-3 text-[15px] leading-7 text-neutral-700">{children}</div>
      </div>
    </div>
  );
}
