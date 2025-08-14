import Link from "next/link";

export default function Custom404() {
  return (
    <main className="min-h-[60vh] mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Lapa nav atrasta</h1>
      <p className="mt-3 text-neutral-600">Pārbaudiet adresi vai atgriezieties sākumlapā.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50">
          ← Uz sākumu
        </Link>
        <Link href="/contact" className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90">
          Sazināties
        </Link>
      </div>
    </main>
  );
}
