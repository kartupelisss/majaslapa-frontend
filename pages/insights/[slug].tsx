// pages/insights/[slug].tsx
import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useMemo, useState } from "react";
import { insights, getInsightBySlug, type Insight } from "../../lib/insightsData";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: insights.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getInsightBySlug(slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};

export default function InsightPage({ post }: { post: Insight }) {
  const [copied, setCopied] = useState(false);

  const minutes = useMemo(() => {
    const words = post.content.join(" ").trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }, [post]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  const more = insights.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Head>
        <title>{`${post.title} — Insights`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">
            ← Atpakaļ uz sākumu
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <section className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span>{post.date}</span>
            <span className="h-3 w-px bg-neutral-200" />
            <span>{minutes} min lasījums</span>
          </div>

          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            {post.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-neutral-600">{post.excerpt}</p>
        </section>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_min(65ch,100%)_1fr] gap-8">
          <aside className="hidden md:block sticky top-24 self-start">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-600">
              <div className="font-medium text-neutral-900">Darbības</div>
              <button
                onClick={copyLink}
                className="mt-3 w-full rounded-xl border border-neutral-200 px-3 py-2 text-left hover:bg-neutral-50"
              >
                {copied ? "Saite nokopēta ✓" : "Kopīgot saiti"}
              </button>
            </div>
          </aside>

          <article className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
            <div className="text-[17px] leading-[1.8] text-neutral-800">
              {post.content.map((para, i) => (
                <p
                  key={i}
                  className={`mb-5 ${
                    i === 0
                      ? "first-letter:text-5xl first-letter:font-semibold first-letter:leading-[0.9] first-letter:mr-2 first-letter:float-left first-letter:mt-1"
                      : ""
                  }`}
                >
                  {para}
                </p>
              ))}

              <div className="my-8 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-neutral-700">
                <div className="text-sm font-medium text-neutral-900">Kopsavilkums</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>{post.excerpt}</li>
                  {post.content.slice(0, 2).map((p, i) => (
                    <li key={`k${i}`}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Link
                href="/insights"
                className="rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
              >
                ← Atpakaļ uz Insights
              </Link>
              <Link
                href="/"
                className="rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
              >
                ← Uz sākumu
              </Link>
            </div>
          </article>

          <div className="hidden md:block" />
        </section>

        {more.length > 0 && (
          <section className="mt-16 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900">Citi raksti</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {more.map((p) => (
                <article key={p.slug} className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <div className="text-xs text-neutral-500">{p.date}</div>
                  <h3 className="mt-2 text-[17px] font-semibold leading-snug text-neutral-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{p.excerpt}</p>
                  <Link
                    href={`/insights/${p.slug}`}
                    className="mt-4 inline-block text-sm underline underline-offset-4"
                  >
                    Lasīt vairāk
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
