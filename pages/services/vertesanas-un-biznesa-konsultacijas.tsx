import Head from "next/head";
import Link from "next/link";

export default function VertesanasUnBiznesaKonsultacijasPage() {
  const title = "Vērtēšanas un biznesa konsultāciju pakalpojumi — REMPE";
  const description =
    "Neatkarīga uzņēmumu, nemateriālo aktīvu un finanšu instrumentu vērtēšana (IVS, LVS 401) un praktiskas biznesa konsultācijas: stratēģija, M&A, finanses, procesu optimizācija un starptautiska darbība.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </Head>

      {/* Hero */}
      <section className="relative w-full border-b">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs uppercase tracking-wider text-neutral-500">Pakalpojumi</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight">
            Vērtēšanas un biznesa konsultāciju pakalpojumi
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Neatkarīga, caurspīdīga un starptautiskiem standartiem atbilstoša
            vērtēšana, kā arī praktiskas konsultācijas lēmumu pieņemšanai, darījumu
            strukturēšanai un ilgtspējīgai izaugsmei.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <h2>Vērtēšanas pakalpojumu būtība un nozīme</h2>
          <p>
            Vērtēšana nav tikai aprēķins. Tā ir padziļināta analīze par biznesa modeli,
            tirgus tendencēm, konkurenci, finanšu stabilitāti un tiesisko/nodokļu vidi.
            Neatkarīgs vērtējums nodrošina skaidru pamatu darījumiem, investīcijām un
            restrukturizācijai, mazinot subjektivitāti un lēmumu risku.
          </p>

          <h2>Vērtēšanas jomas</h2>
          <h3>1) Biznesa vērtēšana</h3>
          <p>
            Vērtējam uzņēmumus un to daļas dažādos scenārijos: pārdošana/iegāde (M&amp;A),
            investoru piesaiste, restrukturizācija, akcionāru strīdi un tiesvedības,
            mantojuma un nodokļu vajadzības, kā arī finanšu pārskatu sagatavošana.
            Balstāmies uz starptautiskajiem standartiem (IVS) un vietējiem (LVS&nbsp;401).
          </p>
          <ul>
            <li>DCF, tirgus multiplikatori un salīdzināmo darījumu metodes.</li>
            <li>Neatkarīgi atzinumi darījumiem ar saistītajām pusēm.</li>
            <li>Vērtējumi nodokļu un finanšu uzskaites vajadzībām.</li>
          </ul>

          <h3>2) Nemateriālo aktīvu vērtēšana</h3>
          <p>
            Preču zīmes, patenti, dizains, programmatūra, licences, klientu bāzes — nereti
            būtiskākā uzņēmuma vērtība ir nemateriāla. Sagatavojam atzinumus IP darījumiem,
            finanšu pārskatiem, transfertcenu politikām un strīdiem.
          </p>

          <h3>3) Finanšu instrumentu un citu aktīvu vērtēšana</h3>
          <ul>
            <li>Akcijas, obligācijas un citi kapitāla tirgus instrumenti.</li>
            <li>Īpaši aktīvi: licences, koncesijas, enerģētikas projekti u.c.</li>
            <li>Nekustamais īpašums biznesa darījumu kontekstā.</li>
          </ul>

          <h2>Biznesa konsultācijas</h2>
          <h3>1) Stratēģiskās konsultācijas</h3>
          <p>
            Palīdzam definēt un īstenot izaugsmes, efektivitātes un risku mazināšanas
            stratēģijas, analizējot tirgus vidi, konkurenci, iekšējos procesus un finanšu
            rādītājus.
          </p>

          <h3>2) Darījumu konsultācijas (M&amp;A)</h3>
          <ul>
            <li>Mērķu identificēšana un sākotnējā izvērtēšana.</li>
            <li>Vērtēšana, darījumu strukturēšana un nodokļu efektivitāte.</li>
            <li>Sarunu atbalsts un dokumentācijas koordinācija.</li>
          </ul>

          <h3>3) Finanšu konsultācijas un risku vadība</h3>
          <ul>
            <li>Kapitāla struktūra, finansējuma avotu salāgošana, likviditāte.</li>
            <li>Naudas plūsmas plānošana un jutīguma analīzes.</li>
            <li>Riska profila izvērtēšana un uzlabojumi.</li>
          </ul>

          <h3>4) Organizatoriskā efektivitāte un procesu optimizācija</h3>
          <ul>
            <li>Struktūra, lēmumu plūsma, KPI un vadības atskaites.</li>
            <li>Procesu pārskatīšana, digitalizācija un automatizācija.</li>
          </ul>

          <h3>5) Starptautiskā biznesa atbalsts</h3>
          <ul>
            <li>Starptautiskas struktūras un nodokļu efektivitāte.</li>
            <li>Transfertcenu un OECD/ES prasību ieviešana.</li>
            <li>IFRS un citu standartu piemērošana praksē.</li>
          </ul>

          <h2>Klientiem sniegtā pievienotā vērtība</h2>
          <ul>
            <li>Konfidencialitāte un uzticamība neatkarīgos atzinumos.</li>
            <li>Individuāli pielāgoti risinājumi katram gadījumam.</li>
            <li>Praktiska ieviešana — ne tikai teorija.</li>
            <li>Starptautiska pieredze un salāgojami risinājumi Baltijā.</li>
            <li>Integrēts skatījums: juridika + nodokļi + finanses.</li>
            <li>Fokuss uz rezultātu un izmaksu/riska līdzsvaru.</li>
          </ul>

          <h2>Noslēgumā</h2>
          <p>
            Vērtēšana un biznesa konsultācijas ir būtisks instruments lēmumu pieņemšanā visos
            uzņēmuma dzīves cikla posmos — no izaugsmes līdz transformācijai. Mūsu mērķis ir
            nodrošināt, lai katrs risinājums ir praktisks, pārbaudāms un atbilst augstākajiem
            kvalitātes standartiem.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-3 rounded-2xl border p-6">
          <div className="flex-1 min-w-[240px]">
            <h3 className="text-lg font-medium">Nepieciešams neatkarīgs vērtējums?</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Atsūti īsu situācijas aprakstu (mērķis, aktīvs, termiņš). Sagatavosim darba
              plānu, metodoloģiju un izmaksu piedāvājumu.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-block rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50"
            >
              Sazināties
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50"
            >
              Saņemt piedāvājumu
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
