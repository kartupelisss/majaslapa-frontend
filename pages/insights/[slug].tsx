// pages/insights/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getInsights, getInsightBySlug, type Insight } from "@/lib/insightsData";

type Props = {
  insight: Insight | null;
};

export default function InsightPage({ insight }: Props) {
  if (!insight) {
    return (
      <div className="max-w-3xl mx-auto py-16">
        <h1 className="text-2xl font-semibold text-neutral-800">Raksts nav atrasts</h1>
        <Link href="/insights" className="text-blue-600 underline mt-4 block">
          ← Atpakaļ uz rakstiem
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{insight.title} | REMPE</title>
        <meta name="description" content={insight.excerpt || ""} />
      </Head>

      <article className="max-w-3xl mx-auto py-16 px-6">
        <div className="text-sm text-neutral-500 mb-4">
          {insight.publishedDate &&
            new Date(insight.publishedDate).toLocaleDateString("lv-LV")}
        </div>

        <h1 className="text-3xl font-bold text-neutral-900 mb-4">{insight.title}</h1>

        {insight.excerpt && (
          <p className="text-lg text-neutral-700 mb-8">{insight.excerpt}</p>
        )}

        {insight.content?.root?.children?.map((block, i) => (
          <p key={i} className="mb-4 text-neutral-800 leading-relaxed">
            {block.text ||
              block.children?.map((child) => child.text).join(" ") ||
              ""}
          </p>
        ))}

        <Link href="/insights" className="text-blue-600 underline mt-6 block">
          ← Atpakaļ uz rakstiem
        </Link>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const insights = await getInsights();
  const paths = insights.map((i) => ({ params: { slug: i.slug } }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const insight = await getInsightBySlug(slug);

  return {
    props: { insight },
    revalidate: 60,
  };
};
