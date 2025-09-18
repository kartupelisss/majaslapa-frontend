import Head from "next/head";
import Link from "next/link";

export default function JaunuznemumiPage() {
  const title = "Jaunuzņēmumi — REMPE";
  const description =
    "Pilnvērtīgs juridiskais, nodokļu un finanšu atbalsts jaunuzņēmumiem: struktūra, investori, IP, motivācijas programmas, transfertcenas, vērtēšana un starptautiskā mērogošana.";

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
            Jaunuzņēmumi
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Jaunuzņēmumi ir strauji augoši un inovatīvi uzņēmumi, kuriem bieži
            nākas saskarties ar sarežģītiem juridiskiem, nodokļu un finanšu
            jautājumiem. REMPE komanda sniedz pilnvērtīgu atbalstu&nbsp;— no
            struktūras un investoru līgumiem līdz IP aizsardzībai un nodokļu
            risinājumiem, lai dibinātāji var koncentrēties uz produktu un tirgu.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <h2>Ievads</h2>
          <p>
            Jaunuzņēmumi (start-up) ir dinamiskas, inovatīvas organizācijas ar
            augstu nenoteiktību un strauju attīstības tempu. Tie fokusējas uz
            jaunu tehnoloģiju, biznesa modeļu vai pakalpojumu izstrādi, lai īsā
            laikā sasniegtu būtisku izaugsmi. Baltijā segments strauji attīstās
            — no programmatūras un biotehnoloģijām līdz fintech, enerģētikai un
            e-komercijai.
          </p>
          <ul>
            <li>Strauji produktu/ideju cikli;</li>
            <li>vajadzība pēc ārējā finansējuma (angel, VC, granti, ES atbalsts);</li>
            <li>augstas prasības pret caurspīdību un rentabilitāti;</li>
            <li>talantu piesaiste ar opciju/daļu programmām;</li>
            <li>augstāks risku līmenis, t.sk. nodokļos un juridikā.</li>
          </ul>

          <h2>Galvenie izaicinājumi jaunuzņēmumiem</h2>

          <h3>1) Juridiskās struktūras izvēle un pārvaldība</h3>
          <p>
            No SIA līdz investoru ienākšanai piemērotai struktūrai: daļu
            kategorijas, akcionāru līgumi, IP strukturēšana.
          </p>

          <h3>2) Nodokļu un finanšu risku vadība</h3>
          <p>
            Efektīva plānošana un kļūdu novēršana sākumposmā, valsts atbalsta
            instrumentu izmantošana (piem., jaunuzņēmumu režīms, inovāciju
            atlaides).
          </p>

          <h3>3) Finansējuma piesaiste</h3>
          <p>
            Investori sagaida korektu nodokļu režīmu, sakārtotu grāmatvedību un
            dokumentāciju, kas aizsargā viņu intereses.
          </p>

          <h3>4) Intelektuālais īpašums (IP)</h3>
          <p>
            Programmatūra, algoritmi, patenti, preču zīmes, dizains. Kritiski
            skaidri, kam IP pieder — dibinātājam, darbiniekam vai sabiedrībai.
          </p>

          <h3>5) Talantu piesaiste un noturēšana</h3>
          <p>
            Opciju/daļu plāni ar nodokļu ziņā efektīvu dizainu, lai motivētu
            komandu un saglabātu izmaksu kontroli.
          </p>

          <h3>6) Starptautiska paplašināšanās</h3>
          <p>
            No transfertcenām un PVN/VAT līdz PE riskam un starptautiskai
            struktūrai, jau pirmajos mēnešos strādājot ārpus Latvijas.
          </p>

          <h2>REMPE atbalsts jaunuzņēmumiem</h2>

          <h3>Juridiskie pakalpojumi</h3>
          <ul>
            <li>Uzņēmuma reģistrācija un piemērotās struktūras izvēle.</li>
            <li>Akcionāru līgumi un investoru aizsardzības mehānismi.</li>
            <li>
              IP aizsardzība un struktūras — preču zīmes, licences, patenti,
              autortiesības, IP holdinga modeļi.
            </li>
            <li>
              Darbinieku līgumi, darba tiesības, attālinātais un starptautiskais darbs.
            </li>
          </ul>

          <h3>Nodokļu konsultācijas</h3>
          <ul>
            <li>Jaunuzņēmumu nodokļu režīms un atvieglojumi.</li>
            <li>PVN/VAT e-komercijā un digitālajos pakalpojumos.</li>
            <li>UIN plānošana un reinvestētās peļņas režīmi.</li>
            <li>Nodokļu risku izvērtēšana un preventīva rīcība.</li>
            <li>Starptautiskā plānošana (holdings, IP struktūras).</li>
          </ul>

          <h3>Transfertcenas un starptautiskie darījumi</h3>
          <ul>
            <li>Transfertcenu dokumentācija (Local/Master File).</li>
            <li>Funkcionālā analīze un caurspīdīga darījumu struktūra.</li>
            <li>PE riska izvērtēšana ārzemju tirgos, licences/honorāri.</li>
          </ul>

          <h3>Finansējums un investoru attiecības</h3>
          <ul>
            <li>Due diligence sagatavošana un “investor-ready” struktūra.</li>
            <li>Finanšu modeļi un prognozes.</li>
            <li>Akciju/opciju emisijas strukturēšana.</li>
            <li>ES fondu un valsts atbalsta programmu piesaiste.</li>
          </ul>

          <h3>Darbinieku motivācijas programmas</h3>
          <ul>
            <li>Opciju plānu izveide un ieviešana.</li>
            <li>Darbinieku līdzdalības programmas (daļas/akcijas).</li>
            <li>Efektīvas nodokļu shēmas ar motivācijas saglabāšanu.</li>
          </ul>

          <h3>Biznesa un vērtēšanas pakalpojumi</h3>
          <ul>
            <li>Nemateriālo aktīvu (piem., programmatūras, patenta) vērtēšana.</li>
            <li>Uzņēmuma vērtēšana pirms investīcijām vai kapitāla palielināšanas.</li>
            <li>Mērogošanas, tirgus un izaugsmes stratēģiju konsultācijas.</li>
          </ul>

          <h2>Mūsu pievienotā vērtība</h2>
          <ul>
            <li>Konfidencialitāte un drošība.</li>
            <li>Individuāli pielāgoti risinājumi.</li>
            <li>Praktiska ieviešana — ne tikai teorija.</li>
            <li>Starptautiska pieredze un integrēts skatījums.</li>
            <li>Fokuss uz rezultātu un izmaksu/riska optimizāciju.</li>
          </ul>

          <h2>Secinājums</h2>
          <p>
            Jaunuzņēmumi apvieno radošumu, tehnoloģiju un uzņēmību, bet saskaras
            ar augstu nenoteiktību un konkurenci. REMPE var būt stratēģiskais
            partneris nodokļos, juridikā un finansēs — lai piesaistītu
            finansējumu, izvairītos no riskiem, aizsargātu IP un radītu pievilcīgu
            vidi darbiniekiem un investoriem. Ar stabilu pamatu rodas iespēja
            pāraugt par ilgtspējīgu uzņēmumu ar starptautisku potenciālu.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border p-6">
          <h3 className="text-lg font-medium">Vai gatavi nākamajam solim?</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Pastāstiet par komandu, produktu un mērķtirgiem — sagatavosim
            sākotnējo rīcības plānu.
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
