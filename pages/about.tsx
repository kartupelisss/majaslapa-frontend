// pages/about.tsx
import Head from "next/head";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Par mums — REMPE</title>
        <meta
          name="description"
          content="REMPE ir neatkarīgs nodokļu, juridisko, transfertcenu un vērtēšanas pakalpojumu birojs. Praktiski, elastīgi, ar starptautisku skatījumu."
        />
      </Head>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:pt-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Par mums
            </h1>
            <p className="mt-3 text-lg text-neutral-700">
              <span className="font-medium">REMPE – nodokļu, juridisko un finanšu konsultāciju birojs.</span>
            </p>
          </div>
        </section>

        {/* Intro bloks */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-5 text-neutral-700 leading-relaxed">
              <p>
                REMPE ir neatkarīgs uzņēmums, kas specializējas nodokļu, juridisko, transfertcenu un
                vērtēšanas pakalpojumu sniegšanā. Mēs strādājam ar uzņēmumiem, uzņēmējiem un
                starptautiskām grupām, palīdzot tiem strukturēt darījumus, pārvaldīt riskus un pieņemt
                stratēģiski pamatotus lēmumus.
              </p>
              <p>
                REMPE mērķis ir būt uzticamam partnerim klientiem, nodrošinot ne tikai
                juridisku un nodokļu atbilstību, bet arī palīdzot veidot efektīvas struktūras,
                kas veicina izaugsmi un konkurētspēju globālajā tirgū.
              </p>
              <p>
                REMPE darbojas elastīgi un personalizēti – katrs risinājums tiek pielāgots konkrētā
                klienta biznesa vajadzībām. Mēs iedziļināmies klienta darbībā, analizējam riskus un
                iespējas, lai sniegtu praktiskus ieteikumus, kas strādā reālajā uzņēmējdarbības vidē.
              </p>
            </div>

            {/* Side card */}
            <aside className="rounded-3xl border border-neutral-200 bg-white p-6">
              <div className="text-sm uppercase tracking-wide text-neutral-500">Mūsu pieeja</div>
              <ul className="mt-3 list-disc pl-5 text-neutral-700 space-y-2">
                <li>Praktiski risinājumi ar biznesa domāšanu</li>
                <li>Elastība un individuāla attieksme</li>
                <li>Konfidencialitāte un atbildība par rezultātu</li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
              >
                Sazināties ar REMPE
              </Link>
            </aside>
          </div>
        </section>

        {/* Kompetences */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
              Mūsu kompetences
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Nodokļu konsultācijas un plānošana",
                "Transfertcenu dokumentācija un stratēģija",
                "Uzņēmumu un darījumu strukturēšana",
                "Biznesa un nemateriālo aktīvu vērtēšana",
                "Pārstāvība nodokļu strīdos un komunikācijā ar VID",
                "Atbalsts M&A un starptautiskos darījumos",
              ].map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Par vadītāju */}
        <section id="team" className="border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Persona card */}
              <div className="lg:col-span-1">
                <div className="rounded-3xl border border-neutral-200 bg-white p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-neutral-200 grid place-items-center text-neutral-700 font-medium">
                      DR
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-neutral-900">
                        Dīns Ričards Rempe
                      </div>
                      <div className="text-neutral-600">Dibinātājs un vadītājs</div>
                    </div>
                  </div>

                  <div className="mt-6 text-sm text-neutral-600">
                    Sertificēts nodokļu konsultants ar plašu pieredzi nodokļu tiesību, transfertcenu un
                    korporatīvo darījumu jomā.
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50 w-full"
                  >
                    Sazināties par konsultāciju
                  </Link>
                </div>
              </div>

              {/* Persona bio */}
              <div className="lg:col-span-2 space-y-5 text-neutral-700 leading-relaxed">
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
                  Par vadītāju — Dīns Ričards Rempe
                </h3>
                <p>
                  Dīna profesionālā karjera veidojusies, strādājot pie sarežģītiem projektiem Latvijā
                  un starptautiskā mērogā, tostarp:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>transfertcenu politiku izstrāde un ieviešana uzņēmumu grupām;</li>
                  <li>biznesa un nemateriālo aktīvu vērtēšana;</li>
                  <li>pārrobežu darījumu strukturēšana un nodokļu plānošana;</li>
                  <li>juridisko un nodokļu risku analīze un pārstāvība tiesvedībās.</li>
                </ul>
                <p>
                  Ar akadēmisko izglītību tiesību zinātnēs un LL.M. grādu, Dīns ir izveidojis reputāciju
                  kā uz rezultātu orientēts padomdevējs, kurš spēj apvienot juridisko precizitāti ar
                  biznesa domāšanu. Viņš regulāri sadarbojas ar uzņēmumu īpašniekiem, finanšu direktoriem
                  un investoriem, lai atrastu risinājumus, kas ne tikai nodrošina atbilstību likumiem,
                  bet arī dod praktisku pievienoto vērtību.
                </p>
                <p>
                  Dīnu raksturo analītiska domāšana, precizitāte un spēja sarežģītus jautājumus
                  izskaidrot saprotami. Viņš uzskata, ka konsultanta uzdevums nav tikai sniegt juridiski
                  pareizu atbildi, bet arī palīdzēt klientam pieņemt stratēģiskus lēmumus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Izglītība un sertifikāti */}
        <section id="education" className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Izglītība un sertifikāti
            </h3>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                  <li>
                    Rīgas Juridiskā augstskola — maģistra grāds tiesību zinātnēs (LL.M)
                  </li>
                  <li>
                    Latvijas Nodokļu konsultantu asociācija — sertificēts nodokļu konsultants
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="font-medium text-neutral-900">
                  Latvijas Republikas Uzņēmumu reģistrs — atzīts mantiskā ieguldījuma vērtētājs ar
                  tiesībām vērtēt:
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-700">
                  <li>nemateriālos aktīvus un intelektuālo īpašumu (Intellectual Property);</li>
                  <li>uzņēmumus (Business);</li>
                  <li>parādsaistības un prasījuma tiesības (Debt/Claims);</li>
                  <li>kapitāldaļas un akcijas (Equity/Shares);</li>
                  <li>preču zīmes (Trademarks).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="rounded-3xl border border-neutral-200 p-8 md:p-12 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                  Sāksim ar īsu zvanu.
                </h2>
                <p className="mt-2 text-neutral-600">
                  20 minūtes, lai saprastu situāciju un piedāvātu rīcības plānu.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium bg-neutral-900 text-white hover:opacity-90"
              >
                Pieteikt konsultāciju
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
