import Head from "next/head";
import Link from "next/link";

export default function ArpakalpojumaGramatvedibaPage() {
  const title = "Ārpakalpojuma grāmatvedība — REMPE";
  const description =
    "Pilns grāmatvedības ārpakalpojums: ikdienas uzskaite, algas, PVN/UIN/IIN atskaites, gada pārskati, vadības atskaites, starptautiskā grāmatvedība un digitālās integrācijas.";

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
          <p className="text-xs uppercase tracking-wider text-neutral-500">Pakalpojumi</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight">Ārpakalpojuma grāmatvedība</h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-700">
            Koncentrējieties uz pamatdarbību — mēs nodrošinām precīzu uzskaiti,
            pilnu atbilstību un praktiskas vadības atskaites. Juridikas, nodokļu un
            finanšu zināšanu sinerģija ikdienas lēmumu atbalstam.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-neutral max-w-none">
          <h2>Ievads</h2>
          <p>
            Mūsdienu uzņēmējdarbības vidē nepieciešama gan precīza finanšu uzskaite,
            gan elastība un ātra pielāgošanās. Grāmatvedības ārpakalpojums ļauj
            uzņēmumam fokusēties uz izaugsmi, vienlaikus nodrošinot, ka visas
            uzskaites un nodokļu saistības tiek pildītas profesionāli un saskaņā ar
            normatīvajām prasībām un labāko praksi.
          </p>

          <h2>Ārpakalpojuma priekšrocības</h2>
          <ul>
            <li>
              <strong>Izmaksu efektivitāte</strong> — nav jāuztur iekšējā nodaļa, nav
              izmaksu par programmatūru un apmācībām.
            </li>
            <li>
              <strong>Ekspertu komanda</strong> — piekļuve speciālistiem ar pieredzi
              dažādās nozarēs un sarežģītos nodokļu jautājumos.
            </li>
            <li>
              <strong>Elastīgums</strong> — pakalpojuma apjoms pielāgots jūsu
              uzņēmuma vajadzībām un izaugsmes tempam.
            </li>
            <li>
              <strong>Atbilstība</strong> — pilna atbilstība Latvijas un
              starptautiskajiem standartiem.
            </li>
            <li>
              <strong>Konfidencialitāte un drošība</strong> — mūsdienīgi IT risinājumi
              un datu aizsardzība.
            </li>
          </ul>

          <h2>Mūsu sniegtie pakalpojumi</h2>
          <h3>Finanšu uzskaite un dokumentu apstrāde</h3>
          <p>
            Visu saimniecisko darījumu reģistrācija, rēķini, pavadzīmes, līgumi,
            avansa norēķini, pamatlīdzekļi u.c.
          </p>

          <h3>Algu un personāla uzskaite</h3>
          <p>
            Algu aprēķini, IIN un sociālo iemaksu aprēķini, atvaļinājumi un slimības
            pabalsti, iesniegumi VID un VSAA.
          </p>

          <h3>Nodokļu deklarācijas un atskaites</h3>
          <p>PVN, UIN, IIN, darba devēja atskaites, statistika un citi pienākumi.</p>

          <h3>Gada pārskati un audita atbalsts</h3>
          <p>
            Gada pārskatu sagatavošana saskaņā ar Gada pārskatu un konsolidēto gada
            pārskatu likumu, komunikācija ar auditoriem un nepieciešamie labojumi.
          </p>

          <h3>Vadības atskaites un finanšu analīze</h3>
          <p>
            Regulāras vadības atskaites, naudas plūsmas prognozes, izmaksu analīze,
            rentabilitāte un KPI, lai vadība pieņemtu laicīgus lēmumus.
          </p>

          <h3>Starptautiskā grāmatvedība</h3>
          <p>
            Atbalsts uzņēmumiem ar darbību vairākās valstīs, atbilstība IFRS un OECD
            prasībām, pārrobežu PVN un pastāvīgās pārstāvniecības jautājumi.
          </p>

          <h3>Digitālie risinājumi un integrācija</h3>
          <p>
            Mūsdienīga grāmatvedības programmatūra, integrācija ar ERP, e-komercijas
            platformām un banku API, droša dokumentu aprite un klienta portāls.
          </p>

          <h2>Kāpēc izvēlēties REMPE?</h2>
          <p>
            Apvienojam juridiskās, nodokļu un finanšu zināšanas, lai sniegtu ne tikai
            “pareizus skaitļus”, bet arī praktisku pievienoto vērtību uzņēmuma
            vadībai. Strādājam proaktīvi: savlaicīgi brīdinām par riskiem un
            piedāvājam risinājumus, nevis tikai fiksējam notikušo.
          </p>
        </article>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-3 rounded-2xl border p-6">
          <div className="flex-1 min-w-[240px]">
            <h3 className="text-lg font-medium">Vēlaties uzticamu ārpakalpojumu?</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Atsūtiet īsu informāciju par uzņēmumu (nozare, apgrozījums, darījumu
              apjoms). Sagatavosim piedāvājumu ar pakalpojumu tvērumu un termiņiem.
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
