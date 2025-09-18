import Head from "next/head";
import Link from "next/link";

export default function DarijumuStrukturesanaPage() {
  const title = "Darījumu strukturēšana — REMPE";
  const description =
    "Juridiski, nodokļu un finanšu ziņā efektīvas darījumu struktūras: reorganizācijas, M&A, pārrobežu un investīciju modeļi, due diligence un dokumentācija.";

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
            Darījumu strukturēšana
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Rūpīgi plānotas, juridiski, nodokļu un finanšu ziņā efektīvas
            struktūras ir pamats veiksmīgiem darījumiem — no reorganizācijām un
            M&amp;A līdz starptautiskām investīcijām.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <h2>Ievads</h2>
          <p>
            Mūsdienu biznesa vidē arvien pieaug nepieciešamība pēc rūpīgi
            plānotām un juridiski, nodokļu un finanšu ziņā efektīvām darījumu
            struktūrām. Neatkarīgi no tā, vai tiek veikts nozīmīgs darījums,
            uzņēmumu apvienošana, kapitāla piesaiste, restrukturizācija vai
            starptautiskas investīcijas — panākumus nosaka uzbūve un tās
            atbilstība konkrētajam mērķim.
          </p>
          <p>
            REMPE komanda nodrošina visaptverošu darījumu strukturēšanas
            atbalstu, apvienojot juridisko ekspertīzi ar padziļinātu nodokļu un
            finanšu izpratni. Mēs palīdzam izstrādāt darījuma modeli, kas
            sasniedz vēlamo rezultātu, samazina riskus un nodrošina atbilstību
            normatīvajām prasībām.
          </p>

          <h2>Mūsu pakalpojumu tvērums</h2>
          <ul>
            <li>
              Nodokļu un juridisko aspektu izvērtēšana dažādu darījuma alternatīvu
              ietvaros.
            </li>
            <li>
              Optimālas darījuma struktūras izstrāde, ņemot vērā uzņēmuma
              stratēģiskos mērķus un ilgtermiņa attīstības plānus.
            </li>
            <li>
              Starptautisko darījumu strukturēšana: pārrobežu reorganizācijas,
              holdinga struktūras, IP struktūras, licencēšana, ieguldījumu un
              finansējuma modeļi.
            </li>
            <li>
              Juridiskā un nodokļu padziļinātā pārbaude (due diligence), lai
              identificētu un pārvaldītu riskus.
            </li>
            <li>
              Darījuma noslēguma dokumentācijas sagatavošana un ieviešana
              praksē.
            </li>
          </ul>

          <h2>Mūsu pieeja</h2>
          <p>
            Balstāmies individuālos risinājumos, ņemot vērā jūsu nozares specifiku
            un mērķus. Strādājot ar vietējiem un starptautiskiem uzņēmumiem,
            piedāvājam struktūras, kas nodrošina fiskālu efektivitāti un tiesisku
            drošību.
          </p>
          <p>
            Darījumu strukturēšana ir stratēģiska pieeja uzņēmuma nākotnes
            vērtības radīšanai. Mēs palīdzam ne tikai veiksmīgi noslēgt konkrētu
            darījumu, bet arī izveidot struktūru, kas kalpo par pamatu izaugsmei
            un mērķu sasniegšanai.
          </p>

          <h2>Ko iegūstat</h2>
          <ul>
            <li>Prognozējamu nodokļu rezultātu un atbilstību prasībām.</li>
            <li>Samazinātus juridiskos un finanšu riskus.</li>
            <li>Efektīvu kapitāla un naudas plūsmas struktūru.</li>
            <li>Praktiski ieviešamus dokumentus un skaidru laika grafiku.</li>
          </ul>
        </article>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-3 rounded-2xl border p-6">
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-lg font-medium">Vajag izstrādāt darījuma modeli?</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Pastāstiet par situāciju (mērķis, darījuma puses, jurisdikcijas) —
              sagatavosim sākotnēju struktūras skici un soļu plānu.
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
