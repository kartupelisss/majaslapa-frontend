import Head from "next/head";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Sīkdatņu politika — REMPE</title>
        <meta
          name="description"
          content="Informācija par sīkdatņu izmantošanu REMPE mājaslapā."
        />
      </Head>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-20 text-neutral-800">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Sīkdatņu politika
        </h1>

        <p className="mb-4">
          Šī vietne izmanto sīkdatnes (cookies), lai uzlabotu lietotāja
          pieredzi, analizētu vietnes apmeklējumu un nodrošinātu noteiktas
          funkcionalitātes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Kas ir sīkdatnes?</h2>
        <p className="mb-4">
          Sīkdatnes ir nelieli teksta faili, kas tiek saglabāti jūsu ierīcē, kad
          apmeklējat tīmekļa vietni. Tās palīdz vietnei atcerēties jūsu
          darbības un iestatījumus (piemēram, valodu, pieteikšanās statusu u.c.)
          noteiktu laiku.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Kādas sīkdatnes mēs izmantojam?
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Nepieciešamās sīkdatnes:</strong> Nodrošina vietnes
            pamatfunkcionalitāti (piem., navigāciju un drošību).
          </li>
          <li>
            <strong>Analītiskās sīkdatnes:</strong> Palīdz saprast, kā apmeklētāji
            izmanto vietni, lai to uzlabotu.
          </li>
          <li>
            <strong>Funkcionālās sīkdatnes:</strong> Atceras jūsu izvēles un
            personalizē saturu.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Kā var kontrolēt sīkdatnes?
        </h2>
        <p className="mb-4">
          Jūs varat mainīt sīkdatņu iestatījumus savā pārlūkā, izdzēšot vai
          bloķējot tās. Tomēr dažas vietnes funkcijas var nedarboties pareizi, ja
          sīkdatnes ir atspējotas.
        </p>

        <p className="mt-10 text-sm text-neutral-500">
          <Link href="/" className="underline underline-offset-2">
            ← Atpakaļ uz sākumlapu
          </Link>
        </p>
      </main>
    </>
  );
}
