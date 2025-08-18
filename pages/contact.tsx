// pages/contact.tsx
import Head from "next/head";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Sazināties — Jurista birojs</title>
        <meta name="description" content="Sazinieties par projektu vai konsultāciju." />
      </Head>

      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">
            ← Atpakaļ uz sākumu
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Sazināties</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          Īss apraksts par vajadzību, aptuvenie termiņi, un mēs atgriezīsimies ar risinājuma plānu.
        </p>

        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="Vārds, Uzvārds" />
          <input className="rounded-xl border border-neutral-300 px-3 py-2" placeholder="E-pasts" />
          <input className="rounded-xl border border-neutral-300 px-3 py-2 md:col-span-2" placeholder="Tālrunis" />
          <textarea className="rounded-xl border border-neutral-300 px-3 py-2 md:col-span-2" rows={5} placeholder="Ziņa" />
          <button className="rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium md:col-span-2 hover:opacity-90">
            Pieteikt konsultāciju
          </button>
        </form>
      </main>
    </>
  );
}
