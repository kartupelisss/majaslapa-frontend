import Head from "next/head";
import Link from "next/link";

export default function StarptautiskasGrupasPage() {
  const title = "Starptautiskas uzņēmumu grupas — REMPE";
  const description =
    "Transfertcenas, nodokļu plānošana, restrukturizācija, juridiskais atbalsts, vērtēšana un darbinieku mobilitāte starptautiskām uzņēmumu grupām Baltijā.";

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
          <p className="text-xs uppercase tracking-wider text-neutral-500">
            Klienti
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight">
            Starptautiskas uzņēmumu grupas
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Starptautiskas uzņēmumu grupas darbojas sarežģītā vidē, kur jāievēro
            dažādu valstu nodokļu un juridiskās prasības. Mēs palīdzam šos
            izaicinājumus pārvērst risinājumos — no atbilstības, transfertcenām
            un nodokļu plānošanas līdz restrukturizācijai un vērtēšanai Baltijā.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <p>
            Starptautiskas uzņēmumu grupas ir viens no mūsu galvenajiem klientu
            segmentiem. Darbība vairākās valstīs nozīmē plašas izaugsmes
            iespējas, bet arī sarežģītu normatīvās vides, nodokļu un
            uzņēmējdarbības prasību un risku kopumu. Mēs palīdzam sabalansēt
            globālo stratēģiju ar lokālo likumdošanu Latvijā un Baltijā.
          </p>

          <h2>Starptautisku grupu vajadzības</h2>
          <ul>
            <li>
              <strong>Komplekss regulējums.</strong> Katra valsts nosaka savus
              nodokļu, grāmatvedības un juridiskos noteikumus — jāpanāk
              atbilstība, saglabājot efektivitāti.
            </li>
            <li>
              <strong>Transfertcenas un dokumentācija.</strong> Nepieciešama
              politika un dokumenti, kas atbilst OECD un vietējām prasībām.
            </li>
            <li>
              <strong>Nodokļu plānošana.</strong> Grupas struktūra jāveido tā,
              lai izvairītos no dubultās aplikšanas un optimizētu resursus.
            </li>
            <li>
              <strong>Investīcijas un restrukturizācija.</strong> M&amp;A,
              reorganizācijas, aktīvu pārkārtošana.
            </li>
            <li>
              <strong>Starptautiskie darījumu riski.</strong> Valūtas,
              atšķirīgas tiesību normas, risku sadale.
            </li>
            <li>
              <strong>Vērtēšana.</strong> Aktīvu, IP un uzņēmumu taisnīgās
              vērtības noteikšana.
            </li>
            <li>
              <strong>Darbinieku mobilitāte.</strong> Nodokļi, sociālās iemaksas
              un rezidence speciālistiem, kas strādā vairākās valstīs.
            </li>
          </ul>

          <h2>Kā mēs palīdzam starptautiskām grupām</h2>

          <h3>1) Transfertcenas</h3>
          <ul>
            <li>Politikas izstrāde atbilstoši OECD un Baltijas prasībām.</li>
            <li>Local File un Master File sagatavošana.</li>
            <li>Risku izvērtēšana un benchmark pētījumi.</li>
            <li>Konsultācijas par peļņas sadales modeļiem.</li>
          </ul>

          <h3>2) Nodokļu konsultācijas un plānošana</h3>
          <ul>
            <li>Grupas struktūras analīze un risku mazināšana.</li>
            <li>PVN un muitas jautājumi starptautiskajos darījumos.</li>
            <li>Holdingā un IP struktūru izveide un finansēšana.</li>
          </ul>

          <h3>3) Juridiskie pakalpojumi</h3>
          <ul>
            <li>Uzņēmumu reģistrācija un restrukturizācija.</li>
            <li>M&amp;A dokumentācija, <em>due diligence</em>, ikdienas atbalsts.</li>
            <li>Darījumu līgumi un saskaņošana.</li>
          </ul>

          <h3>4) Vērtēšana un finanšu konsultācijas</h3>
          <ul>
            <li>Biznesa un nemateriālo aktīvu vērtēšana (IP, zīmoli u.c.).</li>
            <li>
              Taisnīgās vērtības noteikšana finanšu pārskatiem (IFRS/IAS).
            </li>
            <li>Darījumu atbalsts un finanšu modeļi.</li>
          </ul>

          <h3>5) Darbinieku mobilitāte (Global Workforce)</h3>
          <ul>
            <li>Rezidence, nodokļi un sociālās iemaksas vairāku valstu darbā.</li>
            <li>Darbinieku motivācijas programmas (opcijas, daļas).</li>
          </ul>

          <h3>6) Strīdu risināšana un pārstāvība</h3>
          <ul>
            <li>Pārstāvība VID auditos un pārbaužu laikā.</li>
            <li>
              Strīdi par transfertcenām, PVN vai CIT; pārsūdzības tiesā,
              arī starptautiska arbitrāža.
            </li>
          </ul>

          <h2>Mūsu pievienotā vērtība</h2>
          <ul>
            <li>
              Lokālās un starptautiskās ekspertīzes kombinācija (OECD, ES, Baltija).
            </li>
            <li>
              Praktiska pieredze dažādās nozarēs (ražošana, tirdzniecība, IT,
              finanšu sektors).
            </li>
            <li>Elastīga un ilgtspējīga pieeja — ne tikai īstermiņa optimizācija.</li>
            <li>
              Integrēts skatījums — juridika, nodokļi un finanses vienotā risinājumā.
            </li>
            <li>Fokuss uz rezultātu un risku mazināšanu.</li>
          </ul>

          <h2>Noslēgumā</h2>
          <p>
            Starptautiskām uzņēmumu grupām ir vajadzības, kas prasa augstu
            kompetenci, starptautisko normu pārzināšanu un elastīgu pieeju. Mēs
            palīdzam droši un efektīvi darboties Latvijā un Baltijā, saskaņojot
            lokālās prasības ar globālo grupas stratēģiju.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border p-6">
          <h3 className="text-lg font-medium">Parunāsim par jūsu grupu?</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Pastāstiet par struktūru, tirgiem un izaicinājumiem — sagatavosim
            sākotnēju skatījumu un rīcības plānu.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50"
            >
              Sazināties
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
