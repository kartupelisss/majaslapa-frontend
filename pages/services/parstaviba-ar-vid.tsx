import { useState } from "react";
import Link from "next/link";
import { InfoBlock } from "@/components/InfoBlock";
import { ServiceCard } from "@/components/ServiceCard";
import { Modal } from "@/components/Modal";

type Card = {
  title: string;
  teaser: string;
  hoverBullets: string[];
  modalBody: string[];
};

const CARDS: Card[] = [
  {
    title: "Iesniegumi un uzziņas",
    teaser: "Savlaicīgi un korekti dokumenti ļauj novērst strīdus jau pirms to rašanās.",
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
    teaser: "Sagatavošanās audits, atbildes uz jautājumiem, dokumentu aprite.",
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
    teaser: "Lēmumu analīze un argumentēts apstrīdēšanas iesniegums ar pierādījumiem.",
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
    teaser: "Prasības pieteikumi, debates tiesā, transfertcenu dokumentācija un analīze.",
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

export default function VIDServicesPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* === HERO BANERIS === */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0a2149 0%, #163b73 100%)",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-100">
            Pakalpojumi
          </p>

          {/* ❗ Virsraksts netiek aiztikts */}
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white !text-white lg:text-5xl xl:text-6xl">
            Pārstāvība komunikācijā un<br />strīdos ar VID
          </h1>

          <div className="mt-8 max-w-3xl space-y-6 text-white/90">
            <p>
              Efektīva sadarbība ar Valsts ieņēmumu dienestu (VID) ir viens no
              priekšnosacījumiem, lai uzņēmumi un privātpersonas varētu droši
              sasniegt savus biznesa un finanšu mērķus. Pareiza nodokļu
              piemērošana, prognozējami rezultāti un juridiskā drošība rada
              stabilu pamatu izaugsmei.
            </p>
            <p>
              Mēs palīdzam klientiem sasniegt skaidrību un paredzamību
              attiecībās ar VID, sagatavojot kvalitatīvus iesniegumus un uzziņu
              pieprasījumus, pārstāvot pārbaužu un auditu laikā, kā arī – ja
              nepieciešams – apstrīdot nelabvēlīgus lēmumus vai aizstāvot
              klientu tiesā.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
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
        </div>
      </section>

      {/* === GALVENĀ SATURA BLOKI === */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold text-foreground mb-10">
          Ko tieši darām un kā strādājam
        </h2>

        {/* ✅ Divas kolonnas, pēdējā centrēta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <InfoBlock
            index={0}
            title="Komunikācija ar VID: iesniegumi, uzziņas un skaidrojumi"
            content={
              <>
                <p>
                  Viens no būtiskākajiem elementiem attiecībās ar nodokļu
                  administrāciju ir savlaicīga un skaidra komunikācija. Lai
                  izvairītos no riskiem vai sankcijām, var vērsties VID ar:
                </p>
                <ul className="list-disc list-inside">
                  <li>Iesniegumiem – termiņu pagarinājumiem, dokumentu iesniegšanas kārtībai u.c.</li>
                  <li>Uzziņu pieprasījumiem – juridiski saistoši skaidrojumi konkrētai situācijai.</li>
                  <li>Skaidrojumiem / papildu informāciju – pēc VID pieprasījuma.</li>
                </ul>
              </>
            }
          />
          <InfoBlock
            index={1}
            title="Pārstāvība nodokļu pārbaužu un auditu ietvaros"
            content={
              <ul className="list-disc list-inside">
                <li>Sagatavošanās audits – darījumu, dokumentācijas un uzskaites izvērtējums.</li>
                <li>Komunikācijas koordinēšana – pārstāvība tikšanās laikā, atbildes uz jautājumiem.</li>
                <li>Juridiskā un nodokļu argumentācija – normu, judikatūras, OECD vadlīniju pamatojumi.</li>
              </ul>
            }
          />
          <InfoBlock
            index={2}
            title="Lēmumu apstrīdēšana iestādē"
            content={
              <ul className="list-disc list-inside">
                <li>Detalizēti izvērtējam VID lēmumu un tā trūkumus.</li>
                <li>Izstrādājam argumentētu apstrīdēšanas iesniegumu ar juridisku/ekonomisku pamatojumu.</li>
                <li>Sniedzam papildu pierādījumus (darījumu dokumenti, TP analīze, ekspertīzes).</li>
              </ul>
            }
          />
          <InfoBlock
            index={3}
            title="Lēmumu pārsūdzēšana tiesā"
            content={
              <ul className="list-disc list-inside">
                <li>Prasības pieteikums – precīzs juridiskais pamatojums.</li>
                <li>Pierādījumu bāze – dokumenti, ekspertīzes, liecības.</li>
                <li>Pārstāvība tiesā – debates, atbildes uz jautājumiem, skaidrojumi.</li>
              </ul>
            }
          />
          <div className="md:col-span-2 flex justify-center">
            <InfoBlock
              index={4}
              title="Strīdi transfertcenu jomā"
              content={
                <ul className="list-disc list-inside">
                  <li>Dokumentācijas atbilstības analīze.</li>
                  <li>Ekonomiskā salīdzinošā analīze un datubāzu izmantošana.</li>
                  <li>Starptautisko standartu piemērošana (OECD, ES prakse).</li>
                </ul>
              }
            />
          </div>
        </div>

        {/* Dzeltenā kaste paliek */}
        <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-8 mt-10">
          <h3 className="text-xl font-bold mb-4">
            Kāpēc izvēlēties profesionālu pārstāvību?
          </h3>
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
          {CARDS.map((card, i) => (
            <ServiceCard key={i} card={card} index={i} onOpen={() => setOpenIdx(i)} />
          ))}
        </div>
      </section>

      {openIdx !== null && (
        <Modal onClose={() => setOpenIdx(null)} title={CARDS[openIdx].title}>
          {CARDS[openIdx].modalBody.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Modal>
      )}
    </div>
  );
}

/* 🟦 Lai “Uzzināt vairāk” pogas teksts būtu balts:
   ServiceCard komponentā atver pogas elementu un pievieno:
   className="bg-[#0a2149] text-white hover:bg-[#163b73]"
*/
