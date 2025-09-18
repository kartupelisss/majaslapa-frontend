// pages/services/nodoklu-risku-izvertesana-un-planosana.tsx
import Head from "next/head";
import Link from "next/link";

export default function NodokluRiskiUnPlanosanaPage() {
  const title = "Nodokļu risku izvērtēšana un nodokļu plānošana — REMPE";
  const description =
    "Padziļināta nodokļu risku analīze (tax health check) un praktiska nodokļu plānošana: struktūras, procesi, starptautiskie nodokļi, PVN, UIN, darba spēka nodokļi, transfertcenas.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </Head>

      <section className="relative w-full border-b">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs uppercase tracking-wider text-neutral-500">Pakalpojumi</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-neutral-900">
            Nodokļu risku izvērtēšana un nodokļu plānošana
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Mūsdienu biznesa vide mainās strauji. Mēs identificējam nodokļu riskus un izstrādājam
            praktiskus plānošanas risinājumus, lai nodrošinātu atbilstību, optimizētu izmaksas un
            veidotu stabilu pamatu ilgtspējīgai izaugsmei.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="max-w-none text-neutral-800 leading-relaxed">
          <h2 className="mt-0 text-2xl font-semibold text-neutral-900">Ievads</h2>
          <p className="mt-3">
            REMPE komanda palīdz izvērtēt iespējamos nodokļu riskus un piedāvā skaidrus,
            īstenojamus plānošanas risinājumus. Mērķis — drošība un paredzamība: atbilstība
            normatīvajām prasībām, izmaksu optimizācija un pārdomāta uzņēmuma struktūra.
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-neutral-900">Nodokļu risku izvērtēšana</h2>
          <p className="mt-3">
            Veicam padziļinātu darbības un darījumu struktūru analīzi (tax health check), nosakot
            gan acīmredzamus, gan slēptus riskus, kas var radīt strīdus ar administrāciju, papildu
            maksājumus vai reputācijas riskus.
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Atbilstības auditi un iekšējo procedūru izvērtēšana.</li>
            <li>Paaugstināta riska darījumi: saistītās personas, aizdevumi, reorganizācijas, pārrobežu darījumi.</li>
            <li>PVN un muitas riski (priekšnodoklis, imports/eksports).</li>
            <li>Darba spēka nodokļi un darbinieku motivācijas programmas (opcijas, daļu plāni).</li>
            <li>Transfertcenu riski un dokumentācijas pietiekamība.</li>
            <li>Potenciālās tiesvedības un strīdu ierosinātāji.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-neutral-900">Nodokļu plānošana</h2>
          <p className="mt-3">
            Balstoties uz identificētajiem riskiem un biznesa mērķiem, izstrādājam pielāgotas
            nodokļu stratēģijas, kas apvieno atbilstību, izmaksu efektivitāti un ilgtspējīgas struktūras.
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Efektīvas uzņēmuma/grupas struktūras (holding, IP, licencēšana, finansēšana).</li>
            <li>PVN plānošana un starptautiskās tirdzniecības pārvaldība.</li>
            <li>Pārrobežu nodokļu stratēģijas saskaņā ar Latvijas, ES un OECD vadlīnijām.</li>
            <li>Investīciju, iegādes, pārdošanas un iziešanas darījumu strukturēšana.</li>
            <li>Nodokļu ziņā efektīvas darbinieku motivācijas programmas.</li>
            <li>Nodokļu politikas ieviešana, kas veicina izaugsmi un paredzamu biznesa vidi.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-neutral-900">Mūsu pievienotā vērtība</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Integrēts skatījums: nodokļi + juridika + finanses un praktiska ieviešana.</li>
            <li>Starptautiska pieredze dažādās nozarēs un tirgos.</li>
            <li>Konfidencialitāte un fokus uz rezultātu.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-neutral-900">Secinājums</h2>
          <p className="mt-3">
            Ar REMPE atbalstu iegūstat profesionālu risku analīzi un skaidru rīcības plānu. Tas
            palīdz pieņemt pārdomātus lēmumus, aizsargāt intereses un ilgtermiņā saglabāt
            konkurētspēju.
          </p>
        </article>

        <div className="mt-12 rounded-2xl border border-neutral-200 p-6">
          <h3 className="text-lg font-medium text-neutral-900">
            Vēlies risku karti un plānu savam biznesam?
          </h3>
          <p className="mt-2 text-sm text-neutral-700">
            Apraksti īsi situāciju, darījumu veidus un tirgus — sagatavosim sākotnējo izvērtējumu un plānu.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="inline-block rounded-xl border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50">
              Sazināties
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
