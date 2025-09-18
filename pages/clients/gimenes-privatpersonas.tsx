import Head from "next/head";
import Link from "next/link";

export default function GimenesPrivatpersonasPage() {
  const title = "Ģimenes biznesi un privātpersonas — REMPE";
  const description =
    "Individuāli nodokļu, juridiskie un finanšu risinājumi ģimenes uzņēmumiem un privātpersonām: mantošana, darījumu strukturēšana, īpašumu aizsardzība, starptautiskā mobilitāte u.c.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* OG / SEO */}
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
            Ģimenes biznesi un privātpersonas
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Ģimenes uzņēmumiem un privātpersonām svarīgi ir skaidri un droši
            risinājumi gan ikdienas nodokļu un juridiskajos jautājumos, gan
            ilgtermiņa nākotnes plānošanā. Mēs palīdzam optimizēt nodokļus,
            veidot efektīvas īpašumstruktūras, sagatavoties biznesa nodošanai
            vai pārdošanai, kā arī aizsargāt ģimenes mantu un aktīvus.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <p>
            Privātpersonām piedāvājam atbalstu ienākumu un investīciju
            plānošanā, mantojuma un dāvinājumu jautājumos, starptautiskās
            mobilitātes risinājumos un komunikācijā ar nodokļu iestādēm.
            Apvienojot konfidencialitāti, starptautisku pieredzi un integrētu
            skatījumu, nodrošinām stabilitāti un pārliecību gan šodien, gan
            nākamajām paaudzēm.
          </p>

          <h2>Ievads</h2>
          <p>
            Ģimenes uzņēmumi un privātpersonas veido nozīmīgu Latvijas un arī
            pasaules ekonomikas daļu. Daudzas no veiksmīgākajām un
            ilgtspējīgākajām kompānijām ir sākotnēji veidotas tieši kā ģimenes
            biznesi – sākot no nelielām vietējām kompānijām līdz starptautiskiem
            uzņēmumiem, kas joprojām saglabā ģimenes īpašnieku kontroli.
          </p>
          <p>
            Vienlaikus privātpersonām, īpaši uzņēmīgām un finansiāli aktīvām, ir
            nepieciešams atbalsts nodokļu, tiesību, mantisko un finanšu
            jautājumu kārtošanā, lai nodrošinātu ne tikai ikdienas atbilstību
            prasībām, bet arī ilgtermiņa drošību, mantas aizsardzību un
            efektīvu turpmāko attīstību.
          </p>
          <p>
            Mūsu komanda saprot, ka ģimenes biznesi un privātpersonas nereti
            darbojas citā vidē nekā lielās uzņēmumu grupas. Šeit lēmumus bieži
            ietekmē ne tikai finanšu un biznesa loģika, bet arī ģimenes locekļu
            savstarpējās attiecības un nākotnes redzējums vairākās paaudzēs.
            Tāpēc mūsu pieeja ir īpaši individuāla – profesionāli risinājumi
            tiek piemēroti katrai unikālajai situācijai.
          </p>

          <h2>Kā mēs varam palīdzēt ģimenes biznesiem?</h2>

          <h3>1) Nodokļu plānošana un strukturēšana</h3>
          <ul>
            <li>
              Ģimenes uzņēmumos bieži ir vairāki īpašnieki no vienas ģimenes;
              sevišķi svarīgi ir jautājumi par dividendēm un darījumiem starp
              ģimenes locekļiem.
            </li>
            <li>
              Izstrādājam efektīvas nodokļu struktūras, izmantojot
              starptautiskos līgumus un drošas optimizācijas prakses.
            </li>
            <li>Atbalsts UIN, PVN, IIN un citu nodokļu jautājumos ikdienā.</li>
          </ul>

          <h3>2) Pārvaldība, mantošana un īpašumtiesību struktūras</h3>
          <ul>
            <li>
              Mērķtiecīga mantojuma plānošana, lai izvairītos no strīdiem,
              neskaidrībām un biznesa riskiem.
            </li>
            <li>
              Juridiski skaidras un praktiski funkcionējošas mantošanas un
              īpašumtiesību struktūras.
            </li>
          </ul>

          <h3>3) Darījumu strukturēšana un kapitāla piesaiste</h3>
          <ul>
            <li>
              Sagatavojam biznesu investoru ienākšanai: juridiskais un nodokļu{" "}
              <em>due diligence</em>, optimāla īpašumtiesību un finanšu
              struktūra.
            </li>
            <li>
              Konsultējam par kapitāla piesaistes nosacījumiem un dalības
              modeļiem.
            </li>
          </ul>

          <h3>4) Uzņēmuma pārdošana vai apvienošana (M&amp;A)</h3>
          <ul>
            <li>
              Pilns juridiskais un nodokļu atbalsts – no vērtēšanas un{" "}
              <em>due diligence</em> līdz darījuma dokumentiem un reģistrācijai.
            </li>
          </ul>

          <h3>5) Īpašuma un aktīvu aizsardzība</h3>
          <ul>
            <li>
              Juridiskās struktūras, kas sargā būtiskos aktīvus (nekustamais
              īpašums, IP, iekārtas, zīmoli) no saistību un ārējo risku ietekmes.
            </li>
          </ul>

          <h2>Kā mēs varam palīdzēt privātpersonām?</h2>

          <h3>1) Nodokļu konsultācijas un deklarāciju sagatavošana</h3>
          <ul>
            <li>
              Ienākumu strukturēšana no darba, kapitāla pieauguma, dividendēm un
              īres.
            </li>
            <li>Atbalsts gada ienākumu deklarācijās.</li>
            <li>
              Starptautiskie nodokļi, dzīvojot vienā valstī un strādājot vai
              investējot citā.
            </li>
          </ul>

          <h3>2) Investīciju un īpašuma struktūru plānošana</h3>
          <ul>
            <li>
              Juridiski un nodokļu ziņā efektīva ieguldījumu (NĪ, vērtspapīri,
              uzņēmumi) organizēšana.
            </li>
            <li>
              Struktūras, kas apvieno nodokļu efektivitāti ar mantas aizsardzību.
            </li>
          </ul>

          <h3>3) Mantojuma un dāvinājuma plānošana</h3>
          <ul>
            <li>
              Mantojuma līgumi, testamenti, dāvinājumi; paredzama un taisnīga
              mantas pārdale.
            </li>
            <li>
              Konsultācijas par nodokļiem un starptautiskiem aspektiem, ja
              īpašumi ir vairākās valstīs.
            </li>
          </ul>

          <h3>4) Strīdu risināšana ar VID un citām iestādēm</h3>
          <ul>
            <li>
              Uzziņu pieprasījumi, pieteikumi, sūdzības, pārsūdzības; pārstāvība
              tiesā.
            </li>
          </ul>

          <h3>5) Starptautiskās mobilitātes un dzīvesvietas jautājumi</h3>
          <ul>
            <li>
              Rezidences statuss, dubultā aplikšana, sociālās iemaksas,
              pārcelšanās nodokļu aspekti.
            </li>
          </ul>

          <h2>Mūsu pievienotā vērtība</h2>
          <ul>
            <li>Konfidencialitāte – pilnīga klientu informācijas aizsardzība.</li>
            <li>Individuāli risinājumi – katrai situācijai pielāgota pieeja.</li>
            <li>
              Praktiska ieviešana – ne tikai teorija, bet reāli īstenojami soļi.
            </li>
            <li>Starptautiska pieredze – Latvijā un ārpus tās.</li>
            <li>
              Integrēts skatījums – juridika, nodokļi un finanses vienotā
              risinājumā.
            </li>
            <li>
              Fokuss uz rezultātu – izaugsme, stabilitāte, risku un izmaksu
              optimizācija.
            </li>
          </ul>

          <h2>Noslēgumā</h2>
          <p>
            Ģimenes uzņēmumi un privātpersonas ir mūsu prakses būtisks segments.
            Šiem klientiem visbiežāk nepieciešams visaptverošs skatījums, kas
            ietver nodokļu, tiesību un finanšu aspektus. Mēs palīdzam ne tikai
            ikdienas jautājumos, bet arī stratēģiskos lēmumos, kas nosaka
            uzņēmuma vai ģimenes mantas nākotni vairākām paaudzēm. Mūsu mērķis –
            būt uzticamam partnerim, kas sniedz drošību un pārliecību gan
            biznesa, gan privātajos jautājumos.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border p-6">
          <h3 className="text-lg font-medium">
            Vai vēlies parunāt par savu situāciju?
          </h3>
          <p className="mt-2 text-sm text-neutral-700">
            Pastāsti par izaicinājumu — atsauksimies ar sākotnēju skatījumu un
            piedāvājumu.
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
