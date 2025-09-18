import Head from "next/head";
import Link from "next/link";

export default function JuridiskiePakalpojumiPage() {
  const title = "Juridiskie pakalpojumi — REMPE";
  const description =
    "Komercsabiedrību ikdienas juridiskā apkalpošana, M&A, IP aizsardzība un līgumi, kā arī pārstāvība strīdos ar VID. Integrēta pieeja: tiesības + nodokļi + finanses.";

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
            Pakalpojumi
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight">
            Juridiskie pakalpojumi
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Sniedzam visaptverošu juridisko atbalstu uzņēmumiem un
            privātpersonām — no ikdienas komercdarbības līdz sarežģītiem
            darījumiem un strīdiem. Mūsu stiprā puse ir integrēts skatījums:
            juridika + nodokļi + finanšu domāšana.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <h2>Ievads</h2>
          <p>
            REMPE sniedz visaptverošus juridiskos pakalpojumus, balstoties
            praktiskā pieejā un ciešā sasaistē ar nodokļu un finanšu aspektiem.
            Tas mazina riskus un rada klientiem ilgtermiņa pievienoto vērtību.
          </p>

          <h2>Komercsabiedrību juridiskā apkalpošana</h2>
          <p>
            Ikdienas biznesa gaitā vajadzīgs ātrs un kvalitatīvs juridiskais
            atbalsts. Nodrošinām regulāru apkalpošanu gan ikdienas, gan sarežģītākos
            jautājumos:
          </p>
          <ul>
            <li>Uzņēmuma dibināšana, reorganizācija un likvidācija.</li>
            <li>Dalībnieku un akcionāru līgumi.</li>
            <li>Statūti un iekšējie normatīvie dokumenti, to grozījumi.</li>
            <li>Padomes un valdes locekļu atbildības jautājumi.</li>
            <li>Korporatīvās pārvaldības modeļu ieviešana.</li>
            <li>Darba tiesību konsultācijas un darba līgumi.</li>
            <li>Datu aizsardzības (GDPR) risinājumi.</li>
            <li>Licencēšanas un atļauju jautājumi.</li>
            <li>Ikdienas līgumi: piegādes, nomas, pakalpojumu, sadarbības u.c.</li>
          </ul>

          <h2>Uzņēmumu iegāde un apvienošanās (M&amp;A)</h2>
          <p>
            M&amp;A darījumi ir juridiski un komerciāli sarežģīti. Palīdzam visos
            posmos, lai tie noritētu droši un efektīvi:
          </p>
          <ul>
            <li>Juridiskā un nodokļu pārbaude (due diligence).</li>
            <li>Riska un saistību izvērtējums.</li>
            <li>
              Darījuma struktūra: akciju vai aktīvu iegāde, kopuzņēmumi,
              apvienošanās u.c.
            </li>
            <li>
              Darījuma dokumenti: pirkuma līgumi, akcionāru līgumi, finansēšanas
              līgumi u.c.
            </li>
            <li>Pārstāvība sarunās ar partneriem un investoriem.</li>
            <li>Noslēgšanas un pēc-darījuma posma atbalsts.</li>
          </ul>
          <p>
            Apvienojot juridisko un nodokļu ekspertīzi, nodrošinām pilnvērtīgu,
            tiesiski korektu un finansiāli izdevīgu risinājumu.
          </p>

          <h2>Intelektuālā īpašuma tiesības</h2>
          <p>
            IP ir būtiska konkurētspējas daļa. Palīdzam nodrošināt, ka zīmoli,
            izgudrojumi un dizaini ir aizsargāti un pārvaldīti:
          </p>
          <ul>
            <li>
              Preču zīmju, dizainparaugu un patentu reģistrācija Latvijā un
              starptautiski.
            </li>
            <li>IP turēšanas un struktūru modeļi grupās.</li>
            <li>Licences, franšīzes un nodošanas līgumi.</li>
            <li>IP portfeļa stratēģija un pārvaldība.</li>
            <li>
              Nodokļu un juridiskie aspekti, lai nodrošinātu efektīvu IP ienākumu
              plūsmu un atbilstību.
            </li>
            <li>Pārstāvība strīdos par IP aizsardzību un viltojumu novēršanu.</li>
          </ul>

          <h2>Pārstāvība strīdos ar Valsts ieņēmumu dienestu</h2>
          <p>
            Strīdi ar nodokļu administrāciju rada finansiālus un reputācijas
            riskus. Apvienojam nodokļu un tiesvedības pieredzi, lai efektīvi
            aizstāvētu klientu intereses:
          </p>
          <ul>
            <li>Juridiska palīdzība auditu un pārbaužu laikā.</li>
            <li>Paskaidrojumi un dokumenti VID pieprasījumiem.</li>
            <li>Lēmumu apstrīdēšana un pārsūdzēšana administratīvajās tiesās.</li>
            <li>
              Aizstāvība tiesvedībās par nodokļu piedziņu un citiem nodokļu
              strīdiem.
            </li>
            <li>Stratēģija, lai mazinātu nodokļu riskus nākotnē.</li>
          </ul>
          <p>
            Risinām ne tikai konkrētu strīdu, bet sakārtojam iekšējos procesus,
            lai līdzīgas situācijas neatkārtotos.
          </p>

          <h2>Mūsu pieeja</h2>
          <ul>
            <li>Integrēts skatījums: juridika + nodokļi + finanses.</li>
            <li>Praktiski ieviešami risinājumi, ne tikai teorija.</li>
            <li>Konfidencialitāte un atbildība par rezultātu.</li>
          </ul>
        </article>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-3 rounded-2xl border p-6">
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-lg font-medium">Vajag juridisku atbalstu?</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Pastāstiet īsi situāciju (nozare, darījums, termiņš) — iedosim
              skaidru rīcības plānu un izmaksu struktūru.
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
