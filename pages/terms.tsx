import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Lietošanas noteikumi — REMPE</title>
        <meta
          name="description"
          content="Lietošanas noteikumi, kas regulē REMPE tīmekļa vietnes izmantošanu."
        />
      </Head>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-20 text-neutral-800">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Lietošanas noteikumi
        </h1>

        <p className="mb-4">
          Laipni lūdzam REMPE tīmekļa vietnē. Izmantojot šo vietni, jūs
          piekrītat ievērot turpmāk norādītos noteikumus un nosacījumus. Lūdzu,
          rūpīgi tos izlasiet pirms turpināt vietnes izmantošanu.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Vietnes izmantošana</h2>
        <p className="mb-4">
          Šī vietne paredzēta informatīviem nolūkiem. Visa vietnē sniegtā
          informācija ir vispārīga, un to nedrīkst uzskatīt par juridisku vai
          nodokļu konsultāciju. REMPE neuzņemas atbildību par jebkādiem
          zaudējumiem, kas radušies vietnes izmantošanas rezultātā.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. Intelektuālais īpašums
        </h2>
        <p className="mb-4">
          Visa vietnē publicētā informācija, tai skaitā teksts, attēli, logo un
          dizains, ir REMPE īpašums vai izmantota ar atļauju. To nedrīkst
          kopēt, izplatīt vai izmantot komerciāli bez iepriekšējas rakstiskas
          piekrišanas.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Atbildības ierobežojums</h2>
        <p className="mb-4">
          REMPE neuzņemas atbildību par jebkādiem tiešiem vai netiešiem
          zaudējumiem, kas radušies vietnes izmantošanas rezultātā, tostarp
          tehniskām kļūdām vai datu zudumiem.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Izmaiņas noteikumos</h2>
        <p className="mb-4">
          REMPE patur tiesības jebkurā laikā mainīt šos noteikumus, publicējot
          atjauninātu versiju šajā lapā. Lūdzu, regulāri pārskatiet šo lapu, lai
          pārliecinātos par aktuālajiem nosacījumiem.
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
