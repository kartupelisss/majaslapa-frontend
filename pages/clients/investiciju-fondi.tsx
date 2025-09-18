import Head from "next/head";
import Link from "next/link";

export default function InvesticijuFondiPage() {
  const title = "Investīciju un ieguldījumu fondi — REMPE";
  const description =
    "Nodokļu un juridiskā strukturēšana, licencēšana un atbilstība, M&A atbalsts, transfertcenas un vērtēšana investīciju un ieguldījumu fondiem Baltijā.";

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
            Klienti
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight">
            Investīciju un ieguldījumu fondi
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Fonu darbību raksturo kompleksi darījumi, starptautiskas struktūras
            un stingras regulatīvās prasības. Mēs palīdzam visos posmos — no
            nodokļu un juridiskās strukturēšanas un licencēšanas līdz vērtēšanai,
            M&amp;A atbalstam un transfertcenām.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <h2>Ievads</h2>
          <p>
            Fonu pārvaldnieki, privātā un riska kapitāla fondi, NĪ ieguldījumu
            fondi un citi alternatīvie ieguldījumu veidi darbojas dinamiskā un
            regulējumā stingri uzraudzītā vidē. Lai nodrošinātu efektīvu darbību
            un investoru interešu aizsardzību, nepieciešams spēcīgs nodokļu,
            juridiskais, grāmatvedības un darījumu strukturēšanas atbalsts.
          </p>

          <h2>Kā mēs palīdzam fondiem</h2>

          <h3>1) Nodokļu plānošana un strukturēšana</h3>
          <ul>
            <li>
              Starptautiska plānošana: investīciju jurisdikciju izvēle (piem.,
              Luksemburga, Īrija, Malta, Baltija), ņemot vērā līgumus un
              peļņas repatriāciju.
            </li>
            <li>
              Strukturēšanas modeļi: holdingi, SPV, īpašumtiesību slāņošana
              ar atbilstību vietējiem un starptautiskajiem noteikumiem.
            </li>
            <li>Investoru nodokļu ietekmes analīze dažādās valstīs.</li>
          </ul>

          <h3>2) Juridiskais atbalsts un regulatīvā atbilstība</h3>
          <ul>
            <li>Licencēšana un atļaujas (AIFMD, UCITS, AML/CTF prasības).</li>
            <li>Ikdienas atbilstība: pārskati, risku kontrole, investoru informēšana.</li>
            <li>Darījumu dokumentācija: ieguldījumu, akcionāru, aizdevumu līgumi.</li>
          </ul>

          <h3>3) Transfertcenas un iekšgrupas norēķini</h3>
          <ul>
            <li>Politiku izstrāde un dokumentācija saskaņā ar OECD un Latvijas prasībām.</li>
            <li>Vadības maksu, konsultāciju un finansējuma darījumu analīze.</li>
            <li>Strīdu risināšana ar VID — apstrīdēšana un pārsūdzības.</li>
          </ul>

          <h3>4) Darījumu strukturēšana un M&amp;A atbalsts</h3>
          <ul>
            <li>Aktīvu vs. akciju pārdošanas nodokļu un juridiskā efektivitāte.</li>
            <li>Finanšu, nodokļu un juridiskais <em>due diligence</em>.</li>
            <li>Struktūra investīciju izejai un nodokļu optimizācija.</li>
          </ul>

          <h3>5) Vērtēšanas pakalpojumi</h3>
          <ul>
            <li>Uzņēmumu vērtēšana (DCF, salīdzināmie darījumi, multiplikatori).</li>
            <li>Nemateriālie aktīvi: IP, zīmoli, licences, tehnoloģijas.</li>
            <li>
              Finanšu instrumenti: konvertējamie aizdevumi, opcijas, kapitāldaļas;
              atbilstība IVS/IFRS/LVS 401.
            </li>
          </ul>

          <h3>6) Ikdienas atbalsts pārvaldniekiem un investoriem</h3>
          <ul>
            <li>Grāmatvedība, PVN un UIN piemērošana, atskaites.</li>
            <li>Personāla nodokļi, daļu/opciju programmas pārvaldības komandai.</li>
            <li>Komerc- un nodokļu strīdi.</li>
          </ul>

          <h2>Tipiskie klienti</h2>
          <ul>
            <li>Privātā kapitāla fondi (attīstības un restrukturizācijas darījumi).</li>
            <li>Riska kapitāla fondi (start-up un scale-up investīcijas).</li>
            <li>Nekustamā īpašuma un infrastruktūras fondi.</li>
            <li>Publiskie ieguldījumu fondi (UCITS).</li>
          </ul>

          <h2>Kāpēc izvēlas mūs</h2>
          <ul>
            <li>Konfidencialitāte un drošība.</li>
            <li>Individuāli pielāgoti risinājumi katram fonda modelim.</li>
            <li>Praktiska ieviešana — ne tikai teorija.</li>
            <li>Starptautiska pieredze un integrēts skatījums.</li>
            <li>Fokuss uz rezultātu un risku/izmaksu optimizāciju.</li>
          </ul>

          <h2>Noslēgums</h2>
          <p>
            Fonu vide ir starptautiski saistīta un juridiski sarežģīta — katrs
            solis ietekmē atdevi. REMPE nodrošina atbalstu visā ciklā: no
            struktūras un licencēm līdz M&amp;A, transfertcenām, vērtēšanai un
            ikdienas atbilstībai, lai fonda darbība būtu efektīva, droša un
            investoriem pievilcīga.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border p-6">
          <h3 className="text-lg font-medium">Vēlaties pārrunāt fondu struktūru?</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Pastāstiet par mandātu, investoru profilu un mērķiem — sagatavosim
            sākotnējo skatījumu un rīcības plānu.
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
