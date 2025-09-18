import Head from "next/head";
import Link from "next/link";

export default function ParstavibaArVIDPage() {
  const title = "Pārstāvība komunikācijā un strīdos ar VID — REMPE";
  const description =
    "Iesniegumi un uzziņas, pārstāvība pārbaužu un auditu laikā, lēmumu apstrīdēšana un pārsūdzēšana tiesā, transfertcenu strīdi. Skaidra stratēģija un juridiski pamatota argumentācija.";

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
            Pārstāvība komunikācijā un strīdos ar VID
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Efektīva sadarbība ar Valsts ieņēmumu dienestu ir priekšnoteikums
            drošai uzņēmējdarbībai. Mēs nodrošinām pilnu pārstāvību — no
            skaidrojumiem un uzziņām līdz auditiem, apstrīdēšanai un tiesvedībai.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <h2>Ievads</h2>
          <p>
            Nodokļu regulējums bieži ir sarežģīts, un praksē rodas neskaidri
            jautājumi vai domstarpības ar VID. REMPE palīdz sasniegt skaidrību
            un paredzamību: sagatavojam kvalitatīvus iesniegumus un uzziņas,
            pārstāvam pārbaužu un auditu laikā, kā arī — ja nepieciešams —
            apstrīdam lēmumus un aizstāvam klientus tiesā.
          </p>

          <h2>1. Komunikācija ar VID: iesniegumi, uzziņas, skaidrojumi</h2>
          <p>
            Savlaicīga un korekta komunikācija ar administrāciju ļauj novērst
            strīdus vēl pirms to rašanās.
          </p>
          <ul>
            <li>
              <strong>Iesniegumi</strong> — vispārīgi jautājumi, termiņi, dokumentu kārtība.
            </li>
            <li>
              <strong>Uzziņu pieprasījumi</strong> — juridiski saistoši skaidrojumi
              par normu piemērošanu konkrētā situācijā.
            </li>
            <li>
              <strong>Skaidrojumi un papildu informācija</strong> — grāmatvedības
              un darījumu dokumentu sniegšana pēc pieprasījuma.
            </li>
          </ul>
          <p>
            Mēs sagatavojam dokumentus ar skaidru argumentāciju un atsaucēm uz
            normām, lai aizsargātu nodokļu maksātāja intereses.
          </p>

          <h2>2. Pārstāvība pārbaužu un auditu laikā</h2>
          <ul>
            <li>
              <strong>Sagatavošanās audits</strong> — darījumu, dokumentācijas un
              uzskaites izvērtējums, stratēģija.
            </li>
            <li>
              <strong>Komunikācijas koordinēšana</strong> — tikšanās, atbildes uz
              jautājumiem, dokumentu aprite.
            </li>
            <li>
              <strong>Juridiskā un nodokļu argumentācija</strong> — atsauces uz
              normām, judikatūru, OECD vadlīnijām (TP).
            </li>
            <li>
              <strong>Strīdu novēršana audita gaitā</strong> — mērķis ir panākt
              skaidrību un nepieļaut nepamatotus secinājumus.
            </li>
          </ul>

          <h2>3. Lēmumu apstrīdēšana iestādē</h2>
          <p>
            VID interpretācija ne vienmēr ir pareiza. Nelabvēlīgu lēmumu var un
            nereti vajag apstrīdēt iestādē (pie VID ģenerāldirektora) kā obligātu
            priekšposmu pirms tiesas.
          </p>
          <ul>
            <li>Detalizēta lēmuma analīze un nepilnību identificēšana.</li>
            <li>
              Argumentēts apstrīdēšanas iesniegums ar juridiskiem un ekonomiskiem
              pamatojumiem.
            </li>
            <li>
              Papildu pierādījumi: darījumu dokumentācija, TP analīze, ekspertīzes.
            </li>
          </ul>

          <h2>4. Lēmumu pārsūdzēšana tiesā</h2>
          <ul>
            <li>
              <strong>Prasības pieteikums</strong> — juridiski precīzs dokuments par
              neatbilstībām un faktiskajiem apstākļiem.
            </li>
            <li>
              <strong>Pierādījumu bāze</strong> — dokumenti, liecības, ekspertīzes,
              TP salīdzināmie dati.
            </li>
            <li>
              <strong>Pārstāvība sēdēs</strong> — mutiskās debates un atbildes uz
              tiesas jautājumiem.
            </li>
          </ul>

          <h2>5. Transfertcenu strīdi</h2>
          <p>
            Viena no sarežģītākajām jomām — “arm’s length” pierādīšana, salīdzinošie
            pētījumi un OECD standartiem atbilstoša dokumentācija.
          </p>
          <ul>
            <li>Esošās TP dokumentācijas pietiekamības un kvalitātes audits.</li>
            <li>Ekonomiskā analīze: funkcijas, riski, salīdzināmie darījumi.</li>
            <li>Starptautisko standartu (OECD/ES) piemērošana praksē.</li>
            <li>Pārstāvība tiesvedībā TP lietās.</li>
          </ul>

          <h2>6. Kāpēc izvēlēties profesionālu pārstāvību?</h2>
          <ul>
            <li>Nepārmaksāt nodokļus un izvairīties no nepamatotām sankcijām.</li>
            <li>Samazināt reputācijas riskus publisku strīdu laikā.</li>
            <li>
              Nodrošināt, ka procesi tiek pārvaldīti atbilstoši tiesību aktiem,
              taupot vadības laiku.
            </li>
          </ul>

          <h2>Noslēgumā</h2>
          <p>
            Attiecības ar VID var būt izaicinošas, taču ar pareizu stratēģiju tās
            kļūst par drošības un stabilitātes pamatu. REMPE nodrošina augstākā
            līmeņa nodokļu un juridisko ekspertīzi — iestādē un tiesā.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-3 rounded-2xl border p-6">
          <div className="flex-1 min-w-[240px]">
            <h3 className="text-lg font-medium">Ir jautājums vai strīds ar VID?</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Iedodiet īsu situācijas aprakstu (temats, termiņš, dokumenti).
              Sniegsim skaidru rīcības plānu un termiņu grafiku.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-block rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50"
            >
              Iesniegt jautājumu
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
