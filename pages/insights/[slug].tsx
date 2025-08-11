/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { GetServerSideProps } from "next";
import Link from "next/link";

type Post = {
  title: string;
  slug: string;
  excerpt: string | null;
  content: any; // Lexical JSON
  publishedDate?: string;
};

// Vienkāršs Lexical -> React renderer (pamat-tipi)
function renderLexical(node: any): React.ReactNode {
  if (!node) return null;

  switch (node.type) {
    case "root":
      return node.children?.map((c: any, i: number) => (
        <div key={i}>{renderLexical(c)}</div>
      ));

    case "paragraph":
      return <p>{node.children?.map((c: any, i: number) => <React.Fragment key={i}>{renderLexical(c)}</React.Fragment>)}</p>;

    case "heading": {
      const kids = node.children?.map((c: any, i: number) => (
        <React.Fragment key={i}>{renderLexical(c)}</React.Fragment>
      ));
      if (node.tag === "h1") return <h1 className="text-3xl font-bold my-4">{kids}</h1>;
      if (node.tag === "h2") return <h2 className="text-2xl font-semibold my-3">{kids}</h2>;
      return <h3 className="text-xl font-semibold my-2">{kids}</h3>;
    }

    case "list": {
      const items = node.children?.map((li: any, i: number) => (
        <React.Fragment key={i}>{renderLexical(li)}</React.Fragment>
      ));
      if (node.listType === "bullet" || node.tag === "ul") return <ul className="list-disc pl-6">{items}</ul>;
      if (node.listType === "number" || node.tag === "ol") return <ol className="list-decimal pl-6">{items}</ol>;
      return null;
    }

    case "listitem":
      return <li>{node.children?.map((c: any, i: number) => <React.Fragment key={i}>{renderLexical(c)}</React.Fragment>)}</li>;

    case "text":
      return node.text;

    default:
      return null;
  }
}

export default function InsightPost({ post }: { post: Post | null }) {
  if (!post) {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-2xl">Raksts nav atrasts</h1>
      </main>
    );
  }

  const root = post.content?.root;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <p className="mb-4">
        <Link href="/insights">← Atpakaļ uz Insights</Link>
      </p>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      {post.excerpt ? <p className="text-gray-400 mb-6">{post.excerpt}</p> : null}
      <article className="prose prose-invert max-w-none">
        {renderLexical(root)}
      </article>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<{ post: Post | null }> = async ({ params }) => {
  const base = process.env.NEXT_PUBLIC_PAYLOAD_URL;
  const slug = String(params?.slug || "");
  if (!base || !slug) return { props: { post: null } };

  try {
    const r = await fetch(`${base}/api/blog-posts?where[slug][equals]=${slug}`);
    if (!r.ok) return { props: { post: null } };

    const data = await r.json();
    const doc = data?.docs?.[0];
    if (!doc) return { props: { post: null } };

    const post: Post = {
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt ?? null, // nekad undefined
      content: doc.content,         // Lexical JSON
      publishedDate: doc.publishedDate,
    };

    return { props: { post } };
  } catch {
    return { props: { post: null } };
  }
};
