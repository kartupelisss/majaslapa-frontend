import Link from "next/link";
import { insights } from "@/lib/insightsData";

export default function NewsSection() {
  const items = [...insights]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Jaunākās ziņas
          </h2>
          <p className="mt-2 text-neutral-600">
            Īsas piezīmes par regulējumu, praksi un spriedumiem.
          </p>
        </div>
        <Link
          href="/insights"
          className="shrink-0 text-sm underline underline-offset-4"
        >
          Skatīt visas ziņas →
        </Link>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-sm"
          >
            <div className="text-xs text-neutral-500">
              {new Date(post.date).toLocaleDateString()}
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
        ))}
      </div>
    </section>
  );
}
