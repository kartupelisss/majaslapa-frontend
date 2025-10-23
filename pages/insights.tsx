import Head from "next/head";
import Link from "next/link";
import { getInsights, type Insight } from "@/lib/insightsData";

export default async function InsightsList() {
  // Iegūstam visus rakstus no Payload CMS
  const items: Insight[] = await getInsights();

  return (
    <>
      <Head>
        <title>Insights — REMPE</title>
        <meta
          name="description"
          content="Īsi skaidrojumi un analīze par aktuālajiem nodokļu tematiem."
        />
      </Head>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
              Insights
            </h1>
            <p className="mt-2 text-neutral-600">
              Īsi skaidrojumi un analīze par aktuālajiem nodokļu tematiem.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((post) => {
              const date = post.publishedDate
                ? new Date(post.publishedDate).toLocaleDateString()
                : null;

              return (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-sm"
                >
                  <div className="text-xs text-neutral-500">
                    {date ? date : "—"}
                  </div>

                  <h3 className="mt-2 text-[17px] font-semibold leading-snug text-neutral-900 line-clamp-2">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="mt-2 text-sm text-neutral-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <Link
                    href={`/insights/${post.slug}`}
                    className="mt-3 inline-block text-sm underline underline-offset-4"
                  >
                    Lasīt vairāk
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
