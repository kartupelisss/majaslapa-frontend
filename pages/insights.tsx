// pages/insights.tsx
import Head from "next/head";
import Link from "next/link";
import { insights } from "../lib/insightsData";

export default function InsightsIndex() {
  return (
    <>
      <Head>
        <title>Insights — Jurista birojs</title>
        <meta name="description" content="Piezīmes par regulējumu, praksi un spriedumiem." />
      </Head>

      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">
            ← Atpakaļ uz sākumu
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Insights</h1>
        <p className="mt-3 text-neutral-600">Īsas piezīmes par regulējumu, praksi un spriedumiem.</p>

        {insights.length === 0 ? (
          <p className="mt-10 text-neutral-600">Vēl nav neviena ieraksta.</p>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((p) => (
              <article key={p.slug} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="text-xs text-neutral-500">{p.date}</div>
                <h3 className="mt-2 text-[17px] font-semibold leading-snug text-neutral-900">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p.excerpt}</p>
                <Link href={`/insights/${p.slug}`} className="mt-4 inline-block text-sm underline underline-offset-4">
                  Lasīt vairāk
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
