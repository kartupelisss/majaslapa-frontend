import Head from "next/head";
import Link from "next/link";

export default function KriptoPage() {
  const title = "Kripto — REMPE";
  const description =
    "Nodokļi, juridiskā struktūra, licencēšana, AML/KYC, transfertcenas un kripto aktīvu vērtēšana uzņēmumiem, fondiem un privātpersonām kripto nozarē.";

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
          <h1 className="mt-2 text-3xl font-semibold leading-tight">Kripto</h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Kripto nozare attīstās strauji un rada gan iespējas, gan riskus. Mēs
            palīdzam uzņēmumiem, fondiem un privātpersonām strukturēt darījumus,
            sakārtot nodokļus un atbilstību (licencēšana, AML/KYC), kā arī
            sagatavot transfertcenu dokumentāciju un kripto aktīvu vērtēšanu.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <h2>Ievads</h2>
          <p>
            Kriptovalūtu un blokķēžu industrija vairs nav šaura niša — tā kļuvusi
            par pilnvērtīgu finanšu instrumentu un investīciju klasi. Klientu
            loks: biržas, maksājumu pakalpojumu sniedzēji, protokolu izstrādātāji,
            fondi un arī privāti/institucionāli investori. Vidi raksturo augsts
            inovāciju temps, regulējuma dinamika, globāla darbība un augstāki
            riski/atdeves iespējas.
          </p>

          <h2>Kā mēs varam palīdzēt kripto klientiem</h2>

          <h3>1) Nodokļu konsultācijas un plānošana</h3>
          <ul>
            <li>
              Kripto–kripto un kripto–fiat darījumu aplikšana; peļņa no tirdzniecības,
              <em>staking</em>, <em>lending</em>, <em>mining</em>, NFT, DeFi transakcijas.
            </li>
            <li>Grāmatvedības atspoguļojums un deklarācijas Latvijā un citur.</li>
            <li>PVN piemērošana digitālajos pakalpojumos un starptautiskos darījumos.</li>
            <li>UIN un starptautiskie nodokļi (dubultā aplikšana, rezidence).</li>
          </ul>

          <h3>2) Juridiskā struktūra un licencēšana</h3>
          <ul>
            <li>Sabiedrību, fondu un SPV struktūras kripto projektiem.</li>
            <li>
              Licencēšana: virtuālo aktīvu pakalpojumu sniedzējs, maksājumu iestāde u.c.
            </li>
            <li>AML/KYC iekšējās politikas, procedūras un ieviešana.</li>
            <li>
              Dokumentācija: token sale, whitepaper, investoru un partneru līgumi.
            </li>
          </ul>

          <h3>3) Transfertcenas un starptautiskā struktūra</h3>
          <ul>
            <li>
              Politikas izstrāde un dokumentācija (OECD + vietējās prasības) grupām,
              kurās funkcijas sadalītas pa valstīm (izstrāde, mārketings, HQ).
            </li>
            <li>Caurskatāmi finanšu plūsmu un licenču/honorāru modeļi.</li>
          </ul>

          <h3>4) Vērtēšana un konsultācijas</h3>
          <ul>
            <li>IP, programmatūras, tokenu un uzņēmumu vērtēšana.</li>
            <li>Vērtējumi investīciju piesaistei, pārdošanai vai atskaitēm.</li>
          </ul>

          <h3>5) Strīdi ar VID un regulatoriem</h3>
          <ul>
            <li>Uzzinas, sūdzības, pārsūdzības; pārstāvība nodokļu procesos.</li>
            <li>Sadarbība ar finanšu uzraugiem un atbilstības jautājumi.</li>
          </ul>

          <h2>Tipiskie klientu veidi</h2>
          <ul>
            <li>
              <strong>Biržas un brokeri:</strong> licencēšana, AML, nodokļi, starptautiska
              struktūra.
            </li>
            <li>
              <strong>Maksājumu risinājumu sniedzēji:</strong> PVN piemērošana, darījumu
              līgumi, atbilstība.
            </li>
            <li>
              <strong>Investori un fondi:</strong> nodokļu scenāriji, struktūras (holdings,
              fondi), starptautiskā plānošana.
            </li>
            <li>
              <strong>Privātpersonas:</strong> ienākumu deklarēšana, grāmatvedība, atbalsts
              auditos.
            </li>
          </ul>

          <h2>Mūsu priekšrocības</h2>
          <ul>
            <li>Konfidencialitāte un drošība.</li>
            <li>Individuāli pielāgoti, praktiski ieviešami risinājumi.</li>
            <li>Starptautiska pieredze un integrēts nodokļu–juridiskais–finanšu skatījums.</li>
            <li>Fokuss uz risku mazināšanu un ilgtspējīgu izaugsmi.</li>
          </ul>

          <h2>Secinājums</h2>
          <p>
            Kripto nozare ir strauja un dinamiska, bet arī regulatīvi sarežģīta.
            Mēs palīdzam izmantot iespējas, vienlaikus izvairoties no liekiem
            riskiem — no struktūras un licencēm līdz nodokļiem, transfertcenām,
            vērtēšanai un strīdu risināšanai.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border p-6">
          <h3 className="text-lg font-medium">Vajag palīdzību kripto jautājumos?</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Pastāstiet par projektu un jurisdikcijām — sagatavosim sākotnējo
            rīcības plānu.
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
