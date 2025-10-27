import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privātuma politika — REMPE</title>
        <meta
          name="description"
          content="Informācija par personas datu apstrādi un privātuma principiem REMPE tīmekļa vietnē."
        />
      </Head>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-20 text-neutral-800">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Privātuma politika
        </h1>

        <p className="mb-4">
          REMPE apņemas aizsargāt apmeklētāju un klientu privātumu. Šī
          privātuma politika izskaidro, kā mēs apstrādājam personas datus, kas
          iegūti, izmantojot mūsu tīmekļa vietni.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Datu apstrādes nolūks</h2>
        <p className="mb-4">
          Mēs apstrādājam personas datus, lai nodrošinātu pakalpojumus, sniegtu
          atbildes uz pieprasījumiem un uzlabotu vietnes funkcionalitāti.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. Apstrādātie personas dati
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Vārds un uzvārds</li>
          <li>E-pasta adrese un tālruņa numurs</li>
          <li>IP adrese un pārlūka dati</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Datu glabāšanas ilgums</h2>
        <p className="mb-4">
          Personas dati tiek glabāti tikai tik ilgi, cik nepieciešams attiecīgā
          nolūka sasniegšanai vai kā to pieprasa normatīvie akti.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Jūsu tiesības
        </h2>
        <p className="mb-4">
          Jums ir tiesības piekļūt saviem datiem, pieprasīt to labošanu, dzēšanu
          vai ierobežot apstrādi. Lai izmantotu savas tiesības, sazinieties ar
          mums pa e-pastu:{" "}
          <a href="mailto:info@rempe.lv" className="underline">
            info@rempe.lv
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Sīkdatnes</h2>
        <p className="mb-4">
          Mēs izmantojam sīkdatnes, lai uzlabotu vietnes darbību un analizētu
          tās izmantošanu. Vairāk informācijas atradīsiet mūsu{" "}
          <Link href="/cookies" className="underline underline-offset-2">
            Sīkdatņu politikā
          </Link>
          .
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
