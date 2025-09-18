import Link from 'next/link';

export default function HomeLanding() {
  return (
    <section className="px-4 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          JURIDISKĀ UN NODOKĻU IZCILĪBA JŪSU BIZNESA IZAUGSMEI
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Mēs apvienojam ekspertīzi, precizitāti un stratēģisku skatījumu, lai palīdzētu jūsu biznesam augt.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border px-5 py-2.5 bg-black text-white hover:opacity-90"
          >
            Sazināties
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border px-5 py-2.5 hover:bg-gray-50"
          >
            Saņemt piedāvājumu
          </Link>
        </div>
      </div>
    </section>
  );
}
