// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import { highlights } from "@/lib/highlights";
import { getInsights, type Insight } from "@/lib/insightsData";

export async function getStaticProps() {
  const insights = await getInsights();
  return { props: { insights } };
}

type Item = { slug: string; title: string };

// ------------------ Dati: saraksti ------------------
const CLIENT_ITEMS: Item[] = [
  { slug: "uznemumi", title: "Uzņēmumi" },
  { slug: "gimenes-privatpersonas", title: "Ģimenes bizness un privātpersonas" },
  { slug: "starptautiskas-grupas", title: "Starptautiskas uzņēmumu grupas" },
  { slug: "jaunuznemumi", title: "Jaunuzņēmumi" },
  { slug: "investiciju-fondi", title: "Investīciju un ieguldījumu fondi" },
  { slug: "kripto", title: "Kripto" },
];

const SERVICE_ITEMS: Item[] = [
  { slug: "nodoklu-konsultacijas", title: "Nodokļu konsultācijas" },
  { slug: "riski-planosana", title: "Nodokļu risku izvērtēšana un plānošana" },
  { slug: "darijumu-strukture", title: "Darījumu strukturēšana" },
  { slug: "transfertcenas", title: "Transfertcenas" },
  { slug: "juridiskie", title: "Juridiskie pakalpojumi" },
  { slug: "stridi-vid", title: "Pārstāvība komunikācijā un strīdos ar VID" },
  { slug: "vertesana-biznesa", title: "Vērtēšanas un biznesa konsultācijas" },
  { slug: "argr", title: "Ārpakalpojuma grāmatvedība" },
];

// ------------------ MARŠRUTU KARTE PAKALPOJUMIEM ------------------
const SERVICE_ROUTE_BY_SLUG: Record<string, string> = {
  "nodoklu-konsultacijas": "/services/nodoklu-konsultacijas",
  "riski-planosana": "/services/riski-planosana",
  "darijumu-strukture": "/services/darijumu-strukturesana",
  transfertcenas: "/services/transfertcenas",
  juridiskie: "/services/juridiskie-pakalpojumi",
  "stridi-vid": "/services/parstaviba-ar-vid",
  "vertesana-biznesa": "/services/vertesanas-un-biznesa-konsultacijas",
  argr: "/services/arpakalpojuma-gramatvediba",
};

// ------------------ ĪSIE apraksti ------------------
const SHORT_BLURBS: Record<"pakalpojumi" | "klienti", Record<string, string>> = {
  klienti: {
    uznemumi: `
Strādājam gan ar vietējiem, gan starptautiskiem uzņēmumiem, palīdzot tiem orientēties sarežģītā nodokļu un juridiskajā vidē. 
Mēs sniedzam atbalstu ikdienas nodokļu jautājumos, transfertcenu dokumentācijā, darījumu strukturēšanā un M&A procesos, kā arī uzņēmumu un nemateriālo aktīvu vērtēšanā. Palīdzam ieviest darbinieku motivācijas programmas, nodrošinām starptautisko mobilitāti un risinām strīdus ar VID. 
Mūsu pieeja apvieno nodokļu, juridisko un finanšu ekspertīzi, lai radītu praktiskus risinājumus, kas samazina riskus un veicina uzņēmumu izaugsmi.
    `.trim(),
    "gimenes-privatpersonas:": "",
    "gimenes-privatpersonas": `
Ģimenes uzņēmumiem un privātpersonām svarīgi ir skaidri un droši risinājumi gan ikdienas nodokļu un juridiskajos jautājumos, gan ilgtermiņa nākotnes plānošanā. 
Mēs palīdzam optimizēt nodokļus, veidot efektīvas īpašumstruktūras, sagatavoties biznesa nodošanai vai pārdošanai, kā arī aizsargāt ģimenes mantu un aktīvus. Privātpersonām piedāvājam atbalstu ienākumu un investīciju plānošanā, mantojuma un dāvinājumu jautājumos, starptautiskās mobilitātes risinājumos un komunikācijā ar nodokļu iestādēm. 
Apvienojot konfidencialitāti, starptautisku pieredzi un integrētu skatījumu, nodrošinām stabilitāti un pārliecību gan šodien, gan nākamajām paaudzēm.
    `.trim(),
    "starptautiskas-grupas": `
Starptautiskas uzņēmumu grupas darbojas sarežģītā vidē, kur jāievēro dažādu valstu nodokļu un juridiskās prasības. 
Mēs palīdzam šos izaicinājumus pārvērst risinājumos, nodrošinot atbilstību vietējām un starptautiskajām prasībām, sagatavojot transfertcenu dokumentāciju un plānojot nodokļu struktūru, lai izvairītos no dubultās aplikšanas. Atbalstām uzņēmumus restrukturizācijas un darījumu procesā, sniedzam nodokļu un juridiskās konsultācijas ikdienas darbībā un nodrošinām vērtēšanu iekšgrupas darījumiem. Nodrošinām arī starptautisko darbinieku mobilitātes jautājumu risināšanu.
Apvienojot starptautisku skatījumu ar dziļām lokālajām zināšanām, mēs ļaujam starptautiskām grupām droši un efektīvi attīstīties Baltijā.
    `.trim(),
    jaunuznemumi: `
Jaunuzņēmumi ir strauji augoši un inovatīvi uzņēmumi, kuriem bieži nākas saskarties ar sarežģītiem juridiskiem, nodokļu un finanšu jautājumiem. 
REMPE komanda sniedz pilnvērtīgu atbalstu – no uzņēmuma struktūras un investoru līgumu sakārtošanas līdz intelektuālā īpašuma aizsardzībai un nodokļu risinājumiem. Palīdzam piesaistīt finansējumu, izveidot darbinieku motivācijas programmas, sagatavot transfertcenu dokumentāciju un veikt uzņēmuma vērtēšanu. 
Mūsu integrētā pieeja ļauj jaunuzņēmumu dibinātājiem koncentrēties uz galveno – produkta un tirgus attīstību –, vienlaikus nodrošinot stabilu un drošu pamatu ilgtspējīgai izaugsmei.
    `.trim(),
    "investiciju-fondi": `
Investīciju un ieguldījumu darbību nereti raksturo kompleksi darījumi, starptautiskas struktūras un stingras regulatīvās prasības. 
Mēs palīdzam fondiem un to pārvaldniekiem visos darbības posmos – sākot ar nodokļu un juridisko strukturēšanu, licencēšanu un atbilstību, līdz pat uzņēmumu un aktīvu vērtēšanai, M&A darījumu atbalstam un transfertcenu dokumentācijai. Piedāvājam gan stratēģiskus risinājumus, gan praktisku ikdienas atbalstu – grāmatvedības, nodokļu un strīdu jautājumos. 
Apvienojot starptautisku pieredzi un integrētu skatījumu, nodrošinām, ka fonda darbība ir efektīva, droša un investoriem pievilcīga.
    `.trim(),
    kripto: `
Kripto nozare attīstās strauji un rada gan iespējas, gan riskus. Mēs palīdzam uzņēmumiem un privātpersonām orientēties nodokļu un juridiskajos jautājumos, strukturēt darījumus un nodrošināt atbilstību vietējam un starptautiskajam.
Nodrošinām atbalstu licencēšanā, AML procedūrās, darījumu strukturēšanā, transfertcenu jautājumos un kripto aktīvu vērtēšanā. Palīdzam biržām, maksājumu pakalpojumu sniedzējiem, fondiem un privātpersonām izvairīties no riskiem.
Apvienojam nodokļu, juridisko un finanšu ekspertīzi, lai sniegtu praktiskus un drošus risinājumus.
    `.trim(),
  },
  pakalpojumi: {
    "nodoklu-konsultacijas": `
Nodokļu joma ir viena no sarežģītākajām un vienlaikus būtiskākajām biznesa vidē. Katra uzņēmuma vai investora lēmums var radīt tiešu ietekmi uz nodokļu izmaksām. 
Tāpat nodokļu regulējums nepārtraukti mainās – gan Latvijā, gan starptautiski. Tāpēc kvalitatīvas nodokļu konsultācijas ir svarīgas ikvienam uzņēmumam un privātpersonai, kas vēlas pieņemt drošus, ilgtspējīgus un stratēģiski pārdomātus lēmumus.
Mūsu komanda piedāvā plaša spektra nodokļu konsultācijas, apvienojot juridisko precizitāti ar praktisku skatījumu uz biznesa vajadzībām. Mēs palīdzam gan ikdienas jautājumos, gan kompleksās situācijās, kas prasa detalizētu analīzi un skaidru risinājumu.
    `.trim(),
    "riski-planosana": `
REMPE komanda palīdz uzņēmumiem identificēt un pārvaldīt nodokļu riskus, kā arī izstrādā efektīvas nodokļu plānošanas stratēģijas. Veicam nodokļu atbilstības auditus, izvērtējam PVN, UIN, darba spēka un transfertcenu riskus. Balstoties uz uzņēmuma biznesa mērķiem, izstrādājam drošas un efektīvas struktūras, optimizējam darījumus un plānojam pārrobežu nodokļu aspektus, nodrošinot ilgtspējīgu izaugsmi. 
Mūsu pievienotā vērtība ir stratēģiska pieeja, kas apvieno nodokļu efektivitāti ar juridisko drošību un uzņēmuma konkurētspējas saglabāšanu.
    `.trim(),
    "darijumu-strukture": `
Mūsdienu biznesa vidē arvien pieaug nepieciešamība pēc rūpīgi plānotām un juridiski, nodokļu un finanšu ziņā efektīvām darījumu struktūrām. Neatkarīgi no tā, vai tiek veikts kāds būtisks darījums, uzņēmumu reorganizācija, kapitāla piesaiste vai starptautiskas investīcijas, darījuma panākumus nosaka tā uzbūve un piemērotība konkrētajam klienta mērķim.
Mūsu pieeja darījumu strukturēšanai sniedzas tālāk par juridisku dokumentu sagatavošanu – tā ietver arī visu nepieciešamo darbību praktisku īstenošanu, lai nodrošinātu, ka iecerētā struktūra darbojas efektīvi un atbilst normatīvajām prasībām.
    `.trim(),
    transfertcenas: `
Darījumi starp saistītiem uzņēmumiem ir viena no visrūpīgāk pārbaudītajām nodokļu jomām, un neatbilstoša pieeja var radīt būtiskus riskus. REMPE speciālisti palīdz izstrādāt un ieviest transfertcenu risinājumus, kas atbilst OECD un Latvijas prasībām un vienlaikus stiprina uzņēmuma biznesa stratēģiju.
Mūsu pakalpojumi ietver: transfertcenu dokumentācijas sagatavošanu (Local File, Master File, CbCR); saistīto uzņēmumu darījumu strukturēšanu; ekonomisko analīzi un salīdzinošos pētījumus; cenu noteikšanas politikas izstrādi un ieviešanu; klientu pārstāvību VID auditos un starptautiskās procedūrās. Mūsu pieeja ir praktiska, ilgtspējīga un individuāli pielāgota katra klienta vajadzībām.
    `.trim(),
    juridiskie: `
REMPE nodrošina juridisko atbalstu ar īpašu fokusu uz nodokļiem un efektīvām darījumu struktūrām. Mēs sniedzam regulāru komercsabiedrību apkalpošanu, tostarp līgumu sagatavošanu, pārvaldības jautājumus un ikdienas juridisko konsultāciju sniegšanu.
Būtiska mūsu prakses daļa ir uzņēmumu iegādes un apvienošanās (M&A) – nodrošinām juridisko un nodokļu due diligence, darījuma struktūras izstrādi un dokumentācijas sagatavošanu. Tāpat palīdzam veidot un aizsargāt intelektuālā īpašuma struktūras, kas nodrošina ilgtermiņa konkurētspēju.
Mūsu pieeja balstās integrētā skatījumā – apvienojot juridisko, nodokļu un finanšu ekspertīzi, lai klienti iegūtu praktiski izmantojamus un biznesam izdevīgus risinājumus.
    `.trim(),
    "stridi-vid": `
Efektīva sadarbība ar Valsts ieņēmumu dienestu ir viens no priekšnosacījumiem, lai uzņēmumi un privātpersonas varētu droši sasniegt savus biznesa mērķus. Mēs nodrošinām pilnu pārstāvību visos posmos – no iesniegumiem un uzziņām līdz auditiem, lēmumu apstrīdēšanai un pārsūdzībai tiesā. 
Mēs rūpējamies, lai klienti nepārmaksā nodokļus, saņem godīgu attieksmi un strīdi ar VID tiek atrisināti ātri un saprotami.
    `.trim(),
    "vertesana-biznesa": `
Vērtēšanas pakalpojumi ir nepieciešami uzņēmumu pārdošanā un iegādē, investoru piesaistē, restrukturizācijā, nodokļu plānošanā un tiesvedībās. Mēs nodrošinām biznesa un nemateriālo aktīvu (preču zīmju, patentu, licenču u.c.) vērtēšanu atbilstoši vietējiem un starptautiskajiem standartiem (IVS, LVS 401).
Papildus vērtēšanai sniedzam biznesa konsultācijas – palīdzam definēt un īstenot stratēģijas, veicam M&A darījumu atbalstu, optimizējam kapitāla struktūru, uzlabojam procesus un piedāvājam risinājumus starptautiskas uzņēmējdarbības vajadzībām.
    `.trim(),
    argr: `
Ārpakalpojuma grāmatvedība ir veids, kā nodrošināt precīzu finanšu uzskaiti un pilnīgu atbilstību normatīvajām prasībām, vienlaikus optimizējot uzņēmuma izmaksas. Piedāvājam pilna spektra uzskaiti – no ikdienas darījumu reģistrācijas un algu aprēķiniem līdz nodokļu deklarācijām, gada pārskatiem un vadības atskaitēm.
Mūsu pieeja apvieno grāmatvedības, nodokļu un juridiskās zināšanas; ar moderniem digitālajiem risinājumiem nodrošinām ērtu datu piekļuvi, konfidencialitāti un atbalstu gan vietējiem, gan starptautiskiem uzņēmumiem.
    `.trim(),
  },
};

// ------------------ Unikāli bullet pointi ------------------
const BULLETS: Record<"pakalpojumi" | "klienti", Record<string, string[]>> = {
  pakalpojumi: {
    "nodoklu-konsultacijas": ["UIN, PVN, IIN piemērošana", "Atzinumi un riska izvērtējumi", "Starptautisku darījumu plānošana"],
    "riski-planosana": ["Tax health-check un atbilstības audits", "PVN, UIN, darba spēka un TP riski", "Nodokļu stratēģija ilgtspējīgai izaugsmei"],
    "darijumu-strukture": ["M&A un reorganizāciju modeļi", "Holding/finansējuma/IP struktūras", "Due diligence un ieviešana praksē"],
    transfertcenas: ["Local/Master File, CbCR", "Ekonomiskā analīze un benchmark", "APA/MAP atbalsts, pārstāvība"],
    juridiskie: ["Komerctiesību ikdienas atbalsts", "M&A dokumentācija un sarunas", "IP aizsardzība un licencēšana"],
    "stridi-vid": ["Iesniegumi un uzziņas", "Auditi un pārrunas ar VID", "Apstrīdēšana un tiesvedība"],
    "vertesana-biznesa": ["Biznesa un IP vērtēšana (IVS/LVS 401)", "Finanšu modeļi un scenāriji", "M&A un restrukturizācijas atbalsts"],
    argr: ["Pilns uzskaites cikls un deklarācijas", "Algu un personāla uzskaite", "Vadības atskaites un digitālie rīki"],
  },
  klienti: {
    uznemumi: ["Ikdienas nodokļi, TP un M&A", "VID komunikācija un strīdu risināšana", "Vērtēšana un motivācijas programmas"],
    "gimenes-privatpersonas": ["Īpašumstruktūras un mantojuma plāns", "Investīciju un ienākumu nodokļi", "Konfidencialitāte un praktiski risinājumi"],
    "starptautiskas-grupas": ["Transfertcenu politika un dokumentācija", "Dubultās aplikšanas novēršana", "Restrukturizācija un PE riski"],
    jaunuznemumi: ["Investoru un opciju programmu struktūra", "IP aizsardzība un licencēšana", "Starptautiska mērogošana un PVN/VAT"],
    "investiciju-fondi": ["Struktūra un licencēšana (AIFMD/UCITS)", "M&A un vērtēšana", "Transfertcenas un iekšgrupas darījumi"],
    kripto: ["VASP/PSP licencēšana un AML/KYC", "Nodokļi: tirdzniecība, staking, DeFi", "Starptautiskas struktūras un TP"],
  },
};

// ------------------ UI komponentes ------------------
function Segmented({
  value,
  onChange,
}: {
  value: "pakalpojumi" | "klienti";
  onChange: (v: "pakalpojumi" | "klienti") => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 p-1">
      {(["pakalpojumi", "klienti"] as const).map((key) => {
        const active = value === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={
              "px-4 py-2 rounded-full text-sm transition " +
              (active ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-white")
            }
          >
            {key === "pakalpojumi" ? "Pakalpojumi" : "Klienti"}
          </button>
        );
      })}
    </div>
  );
}

function LeftList({
  items,
  active,
  onSelect,
  header,
}: {
  items: Item[];
  active: string;
  onSelect: (slug: string) => void;
  header: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 overflow-hidden">
      <div className="bg-neutral-900 text-white text-sm px-4 py-3">{header}</div>
      <div className="p-2">
        {items.map((it) => {
          const isActive = it.slug === active;
          return (
            <button
              key={it.slug}
              onClick={() => onSelect(it.slug)}
              className={
                "w-full text-left px-4 py-3 rounded-xl border transition mb-2 " +
                (isActive ? "bg-neutral-100 border-neutral-300" : "bg-white border-neutral-200 hover:bg-neutral-50")
              }
            >
              {it.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ------------------ Lapa ------------------
export default function Home({ insights }: { insights: Insight[] }) {
  const [tab, setTab] = useState<"pakalpojumi" | "klienti">("pakalpojumi");
  const items = tab === "pakalpojumi" ? SERVICE_ITEMS : CLIENT_ITEMS;

  const [active, setActive] = useState<string>(items[0].slug);
  const safeActive = useMemo(() => {
    const exists = items.some((x) => x.slug === active);
    return exists ? active : items[0].slug;
  }, [items, active]);

  const current = items.find((x) => x.slug === safeActive)!;

  const ctaHref =
    tab === "klienti"
      ? `/clients/${current.slug}`
      : SERVICE_ROUTE_BY_SLUG[current.slug] ?? `/services/${current.slug}`;

  const blurb = SHORT_BLURBS[tab][current.slug] ?? "";
  const bullets = BULLETS[tab][current.slug] ?? [];

  const kicker =
    tab === "pakalpojumi"
      ? "Konsultējam un pārstāvam nodokļu jautājumos — no ikdienas PVN situācijām līdz sarežģītiem pārrobežu darījumiem un strīdiem ar VID."
      : "Strādājam ar dažādu tipu klientiem — no ģimenes uzņēmumiem un jaunuzņēmumiem līdz starptautiskām grupām un fondiem.";

  // >>> modālis kontaktinformācijai
  const [showContacts, setShowContacts] = useState(false);

  return (
    <>
      <Head>
        <title>Juridiskā un nodokļu izcilība jūsu biznesa izaugsmei — REMPE</title>
        <meta
          name="description"
          content="Mēs apvienojam ekspertīzi, precizitāti un stratēģisku skatījumu, lai palīdzētu jūsu biznesam augt."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:pt-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
              JURIDISKĀ UN NODOKĻU IZCILĪBA JŪSU BIZNESA IZAUGSMEI
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Mēs apvienojam ekspertīzi, precizitāti un stratēģisku skatījumu,
              lai palīdzētu jūsu biznesam augt.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Sazināties -> atver kontaktu modāli */}
              <button
                onClick={() => setShowContacts(true)}
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium bg-neutral-900 text-white hover:opacity-90"
              >
                Sazināties
              </button>
              {/* Saņemt piedāvājumu -> uz zvana CTA apakšā */}
              <Link
                href="#call"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium border border-neutral-200 hover:bg-neutral-50"
              >
                Saņemt piedāvājumu
              </Link>
            </div>
          </div>

          {/* virsraksts + pārslēgs */}
          <div className="mt-14 border-t border-neutral-200 pt-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-xl font-medium text-neutral-900">
                Mūsu ekspertīze jūsu biznesa izaugsmei un atbalstam
              </h2>
              <Segmented
                value={tab}
                onChange={(v) => {
                  setTab(v);
                  setActive((v === "pakalpojumi" ? SERVICE_ITEMS : CLIENT_ITEMS)[0].slug);
                }}
              />
            </div>
            <p className="mt-3 text-neutral-600">{kicker}</p>
          </div>
        </section>

        {/* Kontaktu modālis */}
        {showContacts && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 px-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setShowContacts(false)}
          >
            <div
              className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-neutral-900">Sazinies ar mums</h3>
                <button
                  onClick={() => setShowContacts(false)}
                  className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100"
                  aria-label="Aizvērt"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <a
                  href="tel:+37120000000"
                  className="block rounded-xl border border-neutral-200 px-4 py-2 hover:bg-neutral-50"
                >
                  <div className="text-neutral-500">Tālrunis</div>
                  <div className="font-medium text-neutral-900">+371 2000 0000</div>
                </a>
                <a
                  href="mailto:info@rempe.lv"
                  className="block rounded-xl border border-neutral-200 px-4 py-2 hover:bg-neutral-50"
                >
                  <div className="text-neutral-500">E-pasts</div>
                  <div className="font-medium text-neutral-900">info@rempe.lv</div>
                </a>
              </div>

              <button
                onClick={() => setShowContacts(false)}
                className="mt-5 w-full rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
              >
                Aizvērt
              </button>
            </div>
          </div>
        )}

        {/* Divkolonnu bloks */}
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <LeftList
                items={items}
                active={safeActive}
                onSelect={setActive}
                header={tab === "pakalpojumi" ? "Pakalpojumi" : "Klienti"}
              />
            </div>

            <div className="md:col-span-2 rounded-3xl border border-neutral-200 bg-white p-6">
              <h3 className="text-2xl font-semibold">{current.title}</h3>
              <p className="mt-2 text-neutral-700 whitespace-pre-line">{blurb}</p>

              {!!bullets.length && (
                <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-1">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              <Link
                href={ctaHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
              >
                Uzzināt vairāk →
              </Link>
            </div>
          </div>
        </section>

        {/* Kāpēc REMPE */}
        <section className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
              Kāpēc izvēlēties REMPE?
            </h2>
            <p className="mt-2 max-w-3xl text-neutral-600">
              REMPE ir pieredzējušu nodokļu un juridisko konsultantu komanda ar
              spēcīgu starptautisku skatījumu un praktisku pieeju. Apvienojam
              juridisko precizitāti, finanšu domāšanu un stratēģisku redzējumu.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="text-sm font-medium text-neutral-900">{h.title}</div>
                  <div className="mt-1 text-neutral-700">{h.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ziņas — īstā sekcija no lib/insightsData */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="flex items-end justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                  Jaunākās ziņas
                </h2>
                <p className="mt-2 text-neutral-600">
                  Īsas piezīmes par regulējumu, praksi un spriedumiem.
                </p>
              </div>
              <Link href="/insights" className="text-sm underline underline-offset-4">
                Skatīt visas ziņas →
              </Link>
            </div>

            {(() => {
              const items = [...(insights || [])]
    .filter((a) => a.publishedDate)
    .sort(
      (a, b) =>
        new Date(b.publishedDate || 0).getTime() -
        new Date(a.publishedDate || 0).getTime()
    )
    .slice(0, 3);

  if (items.length === 0) return null;

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((post) => (
        <article
          key={post.slug}
          className="rounded-2xl border border-neutral-200 bg-white p-6"
        >
          <div className="text-xs text-neutral-500">
            {post.publishedDate
              ? new Date(post.publishedDate).toLocaleDateString()
              : ""}
          </div>
          <h3 className="mt-2 text-[17px] font-semibold leading-snug text-neutral-900 line-clamp-2">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="mt-2 text-sm text-neutral-600 line-clamp-3">
              {post.excerpt}
            </p>
          )}
          <Link
            href={`/insights/${post.slug}`}
            className="mt-4 inline-block text-sm underline underline-offset-4"
          >
            Lasīt vairāk
          </Link>
        </article>
      ))}
    </div>
  );
})()}
          </div>
        </section>

        {/* CTA */}
        <section id="call" className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="rounded-3xl border border-neutral-200 p-8 md:p-12 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                  Sāksim ar īsu zvanu.
                </h2>
                <p className="mt-2 text-neutral-600">
                  20 minūtes, lai saprastu situāciju un piedāvātu rīcības plānu.
                </p>
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
      </main>
    </>
  );
}
