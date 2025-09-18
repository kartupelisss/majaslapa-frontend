import Head from "next/head";
import Link from "next/link";

export default function NodokluKonsultacijasPage() {
  const title = "Nodokļu konsultācijas — REMPE";
  const description =
    "Plaša spektra nodokļu konsultācijas uzņēmumiem un privātpersonām: UIN, PVN un citi netiešie nodokļi, transfertcenas, starptautiskie nodokļi, strīdi ar VID, atzinumi un riska izvērtējumi.";

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
            Nodokļu konsultācijas
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Nodokļu joma ir viena no sarežģītākajām un būtiskākajām biznesa
            vidē. Regulējums mainās gan Latvijā, gan starptautiski, tāpēc
            kvalitatīvas konsultācijas ir svarīgas ikvienam, kas vēlas pieņemt
            drošus, ilgtspējīgus un stratēģiski pārdomātus lēmumus.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <p>
            Mūsu komanda piedāvā plaša spektra nodokļu konsultācijas, apvienojot
            juridisko precizitāti ar praktisku skatījumu uz biznesa vajadzībām.
            Palīdzam gan ikdienas jautājumos, gan kompleksās situācijās, kas
            prasa detalizētu analīzi un skaidru risinājumu.
          </p>

          <h2>Uzņēmumu ienākuma nodoklis (UIN)</h2>
          <p>
            UIN piemērošana Latvijā ir cieši saistīta ar peļņas sadali un
            izdevumu atzīšanu. Visbiežāk neskaidrības rodas:
          </p>
          <ul>
            <li>ar saimniecisko darbību nesaistītu izmaksu klasifikācijā;</li>
            <li>aizdevumu darījumos un to nosacījumos;</li>
            <li>procentu maksājumos un kapitāla struktūras ierobežojumos;</li>
            <li>
              reorganizācijās (īpaši pārrobežu), t.sk. apvienošana un sadalīšana;
            </li>
            <li>saistīto personu un pārrobežu darījumos.</li>
          </ul>
          <p>
            Mēs izstrādājam un izvērtējam darījumu struktūras, analizējam to
            nodokļu ietekmi un sagatavojam juridiski pamatotus atzinumus, kas
            kalpo kā drošs pamats lēmumu pieņemšanā.
          </p>

          <h2>PVN un citi netiešie nodokļi</h2>
          <p>
            PVN ir viens no sarežģītākajiem nodokļiem — sevišķi darījumos ar ES
            dalībvalstīm, trijstūra darījumos, eksportā un pakalpojumu
            sniegšanā. Svarīga ir korekta priekšnodokļa atskaitīšana un samērīga
            pieeja jauktā režīma gadījumos.
          </p>
          <ul>
            <li>PVN risku izvērtēšana starptautiskos darījumos;</li>
            <li>darījumu atbilstības analīze un uzskaites sakārtošana;</li>
            <li>efektīvi PVN uzskaites un atskaites risinājumi;</li>
            <li>pārstāvība VID pārbaudēs;</li>
            <li>konsultācijas par akcīzes un citiem netiešajiem nodokļiem.</li>
          </ul>

          <h2>Transfertcenas</h2>
          <p>
            Globalizācijā transfertcenas ir centrāla nodokļu risku joma. Latvijā
            tās regulē vietējie akti un OECD vadlīnijas, kas prasa tirgus
            nosacījumus un atbilstošu dokumentāciju.
          </p>
          <ul>
            <li>Transfertcenu politikas izvērtēšana un padziļināta pārbaude;</li>
            <li>
              dokumentācijas sagatavošana (t.sk. zemas pievienotās vērtības
              pakalpojumi);
            </li>
            <li>funkcionālās analīzes un salīdzināmo tirgus datu pētījumi;</li>
            <li>politikas plānošana un ieviešana;</li>
            <li>grupas darījumu strukturēšana un vērtības ķēdes analīze;</li>
            <li>līgumu sagatavošana savstarpējiem darījumiem;</li>
            <li>IP struktūru izveide un ieviešana;</li>
            <li>atbalsts APA un MAP procedūrās;</li>
            <li>izmaksu sadales vienošanās (CCA).</li>
          </ul>

          <h2>Starptautiskie nodokļi</h2>
          <p>
            Starptautiskie darījumi prasa rūpīgu plānošanu un atbilstību gan
            vietējā, gan starptautiskā līmenī.
          </p>
          <ul>
            <li>darījumu struktūru analīze un nodokļu ietekmes izvērtēšana;</li>
            <li>
              atbilstība konvencijām, ES regulējumam un pārrobežu prasībām;
            </li>
            <li>pastāvīgās pārstāvniecības (PE) riska izvērtēšana;</li>
            <li>atsevišķu ienākumu veidu aplikšanas analīze valstīs;</li>
            <li>
              paplašināšanās un restrukturizācijas strukturēšana (investīcijas,
              iegādes, iziešanas darījumi).
            </li>
          </ul>

          <h2>Nodokļu un transfertcenu strīdi un tiesvedības</h2>
          <p>
            Strīdi ar VID var būt laikietilpīgi un sarežģīti. Mūsu pieeja —
            godīgi izvērtēt situāciju un aizstāvēt intereses, kur tas ir
            pamatoti.
          </p>
          <ul>
            <li>risku izvērtējums pirms procesa uzsākšanas;</li>
            <li>VID lēmumu analīze un apstrīdēšanas stratēģija;</li>
            <li>iebildumu un apstrīdēšanas dokumentu sagatavošana;</li>
            <li>pārsūdzības administratīvajās tiesās;</li>
            <li>pārstāvība sarunās ar VID un tiesvedībās.</li>
          </ul>

          <h2>Nodokļu atzinumi un riska izvērtējumi</h2>
          <p>
            Neatkarīgi un juridiski pamatoti atzinumi par nodokļu piemērošanu
            konkrētiem darījumiem vai struktūrām.
          </p>
          <ul>
            <li>
              restrukturizācijas un reorganizācijas (apvienošana, sadalīšana,
              aktīvu pārvietošana);
            </li>
            <li>būtisku aktīvu pārdošana vai iegāde;</li>
            <li>pārrobežu darījumu nodokļu ietekme;</li>
            <li>eksperta viedokļi strīdos un tiesvedībās;</li>
            <li>proaktīva nodokļu risku identificēšana un mazināšana.</li>
          </ul>
          <p>
            Veicam arī nodokļu risku izvērtējumus, lai savlaicīgi identificētu
            problēmas un novērstu tās pirms to iestāšanās — īpaši, plānojot
            būtiskus darījumus, pārstrukturēšanu vai pārdošanu.
          </p>

          <h2>Kāpēc klienti izvēlas mūs</h2>
          <ul>
            <li>Konfidencialitāte — pilnīga informācijas aizsardzība.</li>
            <li>Individuāli risinājumi katrai situācijai.</li>
            <li>Praktiska ieviešana, ne tikai teorija.</li>
            <li>Starptautiska pieredze Latvijā un ārpus tās.</li>
            <li>Integrēts skatījums: juridika + nodokļi + finanses.</li>
            <li>Fokuss uz rezultātu un risku/izmaksu optimizāciju.</li>
          </ul>

          <h2>Noslēgumā</h2>
          <p>
            REMPE nodokļu konsultācijas ir piemērotas uzņēmumiem, investoriem un
            privātpersonām, kas vēlas pārliecību par savu nodokļu jautājumu
            sakārtotību. Apvienojam juridisko precizitāti, finanšu analīzi un
            praktisko pieredzi, lai klienti pieņemtu drošus, stratēģiski pareizus
            un ilgtermiņā izdevīgus lēmumus.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border p-6">
          <h3 className="text-lg font-medium">Vajag palīdzību nodokļu jautājumos?</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Apraksti īsi situāciju — atsauksimies ar sākotnēju skatījumu un
            iespējamajiem risinājumiem.
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
