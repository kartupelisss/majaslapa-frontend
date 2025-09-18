import Head from "next/head";
import Link from "next/link";

export default function TransfertcenasPage() {
  const title = "Transfertcenas — REMPE";
  const description =
    "Pilna spektra transfertcenu atbalsts: politika un dokumentācija (Local/Master File, CbCR), ekonomiskā analīze, salīdzinošie pētījumi, APA/MAP, strīdu risināšana un līgumi.";

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
            Transfertcenas
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Darījumi starp saistītajiem uzņēmumiem ir viena no visrūpīgāk
            uzraudzītajām nodokļu jomām. Mēs palīdzam izstrādāt un ieviest
            transfertcenu risinājumus, kas atbilst OECD un Latvijas prasībām
            un vienlaikus balsta jūsu biznesa stratēģiju.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <h2>Kāpēc transfertcenas ir svarīgas?</h2>
          <ul>
            <li>
              <strong>Nodokļu risks.</strong> Nepietiekama vai neatbilstoša
              transfertcenu politika var radīt papildu nodokļu maksājumus un
              soda sankcijas.
            </li>
            <li>
              <strong>Starptautiskās prasības.</strong> Lielākajām grupām
              obligāti jāgatavo <em>Master File</em>, <em>Local File</em> un{" "}
              <em>Country-by-Country</em> ziņojumi.
            </li>
            <li>
              <strong>Efektīva biznesa vadība.</strong> Labi strukturēta politika
              palīdz taisnīgi sadalīt peļņu atbilstoši funkcijām un riskiem.
            </li>
          </ul>

          <h2>REMPE piedāvātie pakalpojumi transfertcenām</h2>
          <h3>1) Transfertcenu dokumentācijas izstrāde</h3>
          <ul>
            <li>Pilna dokumentācija: Vietējā (Local), Globālā (Master), CbCR.</li>
            <li>Esošo politiku un dokumentācijas audits ar uzlabojumu ieteikumiem.</li>
            <li>Atbilstības nodrošināšana Latvijas normām un OECD vadlīnijām.</li>
          </ul>

          <h3>2) Politikas izstrāde un ieviešana</h3>
          <ul>
            <li>Grupas transfertcenu stratēģija un iekšējie noteikumi.</li>
            <li>Cenu noteikšanas mehānismi: preces, pakalpojumi, aizdevumi, IP.</li>
            <li>Regulāra atjaunošana atbilstoši tirgum un regulējumam.</li>
          </ul>

          <h3>3) Esošās politikas pārbaude un izvērtējums</h3>
          <ul>
            <li>Efektivitātes audits un risku identifikācija.</li>
            <li>Atbilstības pārbaude OECD un Latvijas prasībām.</li>
          </ul>

          <h3>4) Ekonomiskā analīze un salīdzinošie pētījumi</h3>
          <ul>
            <li>Salīdzināmo darījumu pētījumi vietējās un starptautiskās DB.</li>
            <li>Rentabilitātes un peļņas sadales modeļu novērtējums.</li>
            <li>Finanšu darījumu (aizdevumi, garantijas, cash-pool) analīze.</li>
          </ul>

          <h3>5) Strīdu risināšana un pārstāvība</h3>
          <ul>
            <li>Pārstāvība transfertcenu auditos un komunikācijā ar VID.</li>
            <li>Strīdu vadība par korekcijām un papildu nodokļiem.</li>
          </ul>

          <h3>6) APA un MAP atbalsts</h3>
          <ul>
            <li>Vienpusējās, divpusējās un daudzpusējās APA procedūras.</li>
            <li>Savstarpējās saskaņošanas procedūras (MAP) starp valstīm.</li>
          </ul>

          <h3>7) Starptautiski risinājumi un risku vadība</h3>
          <ul>
            <li>BEPS/OECD iniciatīvu ietekmes analīze un ieviešana.</li>
            <li>Dubultās aplikšanas risku mazināšanas risinājumi.</li>
            <li>Atbalsts M&amp;A un restrukturizāciju gadījumos.</li>
          </ul>

          <h3>8) Līgumu sagatavošana</h3>
          <ul>
            <li>Līgumi saistīto uzņēmumu darījumiem atbilstoši TP prasībām.</li>
          </ul>

          <h2>Nozaru un darījumu specifika</h2>
          <ul>
            <li>
              <strong>Ražošana un loģistika</strong> — piegādes ķēdes, noliktavas,
              sadales centri.
            </li>
            <li>
              <strong>Tirdzniecība</strong> — vairums/mazums, iepirkuma un
              pārdošanas struktūras.
            </li>
            <li>
              <strong>Pakalpojumi</strong> — profesionālie, atbalsta un centralizētie
              pakalpojumi.
            </li>
            <li>
              <strong>Finanšu darījumi</strong> — aizdevumi, garantijas, cash-pool,
              citi finansēšanas risinājumi.
            </li>
            <li>
              <strong>IT un digitālie uzņēmumi</strong> — IP izstrāde, vērtēšana,
              licencēšana.
            </li>
            <li>
              <strong>Atbalsta funkcijas</strong> — vadība, mārketings, IT,
              grāmatvedība u.c.
            </li>
          </ul>

          <h2>Secinājums</h2>
          <p>
            Transfertcenu jautājumi nav tikai formāla atbilstība — tie ietekmē
            peļņas sadali, risku pārvaldību un grupas ilgtspēju. REMPE palīdz
            izstrādāt un īstenot politiku, kas vienlaikus atbilst likumam un
            stiprina konkurētspēju — ikdienā, auditos un starptautiskā līmenī.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border p-6">
          <h3 className="text-lg font-medium">Vai vajag Local/Master File vai CbCR?</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Atsūti īsu aprakstu par grupas struktūru un darījumiem: sagatavosim
            sākotnējo prasību karti un darba plānu ar termiņiem.
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
