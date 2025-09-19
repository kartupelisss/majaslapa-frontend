import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { clientsData, type ClientItem } from "@/lib/clientsData";

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

export const getStaticPaths: GetStaticPaths = async () => {
  // 1) Izvelkam slugus un deduplikojam (aizsardzībai pret dublikātiem datu avotā)
  const uniqueSlugs = Array.from(
    new Set(
      (clientsData ?? [])
        .map(c => c?.slug?.trim())
        .filter(Boolean) as string[]
    )
  );

  return {
    paths: uniqueSlugs.map(slug => ({ params: { slug } })),
    fallback: false, // vai 'blocking' – kā tev ērtāk
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.slug || "");
  const client = clientsData.find(c => c.slug === slug);
  if (!client) return { notFound: true };
  return { props: { client } };
};
