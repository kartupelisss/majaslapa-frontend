import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { clientsData, type ClientItem } from "@/lib/clientsData";

// ----------------- PAGE -----------------
type Props = { client: ClientItem };

export default function ClientDetail({ client }: Props) {
  return (
    <>
      <Head>
        <title>{client.title} — Klienti — REMPE</title>
        <meta name="description" content={`${client.title} — REMPE klientu segments`} />
      </Head>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:pt-24">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-wide text-neutral-500">Klientu segments</div>
            <h1 className="mt-1 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              {client.title}
            </h1>
            <p className="mt-4 text-neutral-700 whitespace-pre-line">{client.short}</p>
          </div>
        </section>

        {/* Body */}
        <section className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <article className="prose prose-neutral max-w-none">
              <div className="whitespace-pre-line text-[17px] leading-7 text-neutral-800">
                {client.long}
              </div>
            </article>

            <div className="mt-10 flex gap-3">
              <Link
                href="/#klienti"
                className="inline-flex items-center rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
              >
                ← Atpakaļ uz klientu sarakstu
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-neutral-900 text-white hover:opacity-90"
              >
                Sazināties
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ----------------- DATA -----------------
import fs from "node:fs";
import path from "node:path";

export const getStaticPaths: GetStaticPaths = async () => {
  // 1) Unikāli slugi no datiem
  const fromData = Array.from(
    new Set(
      (clientsData ?? [])
        .map((c) => c?.slug?.trim())
        .filter(Boolean) as string[]
    )
  );

  // 2) Atrodam visus STATISKOS .tsx failus mapē /pages/clients (izņemot [slug].tsx)
  //    un no datu slugiem izmetam tos, lai nebūtu ceļu pārklāšanās.
  const clientsDir = path.join(process.cwd(), "pages", "clients");
  let staticSlugs: string[] = [];
  try {
    staticSlugs = fs
      .readdirSync(clientsDir)
      .filter((f) => f !== "[slug].tsx" && f.endsWith(".tsx"))
      .map((f) => f.replace(/\.tsx?$/i, "")); // "kripto.tsx" -> "kripto"
  } catch {
    // ja mapes nav – ok
    staticSlugs = [];
  }

  const filtered = fromData.filter((slug) => !staticSlugs.includes(slug));

  return {
    paths: filtered.map((slug) => ({ params: { slug } })),
    fallback: false, // ja vajag: 'blocking'
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug || "");
  const client = clientsData.find((c) => c.slug === slug);
  if (!client) return { notFound: true };
  return { props: { client } };
};
