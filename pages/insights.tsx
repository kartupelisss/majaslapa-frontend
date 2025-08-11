import Link from "next/link"
import type { GetServerSideProps } from "next"

type Post = { id: string; title: string; slug: string; excerpt: string | null }
type Props = { posts: Post[] }

export default function InsightsPage({ posts }: Props) {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Insights</h1>
      {posts.length === 0 ? (
        <p>Vēl nav neviena ieraksta.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.id} className="border p-4 rounded hover:shadow transition">
              <Link href={`/insights/${p.slug}`}>
                <h2 className="text-xl font-semibold hover:underline">{p.title}</h2>
                {p.excerpt ? <p className="text-sm opacity-80">{p.excerpt}</p> : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const base = process.env.NEXT_PUBLIC_PAYLOAD_URL
  if (!base) return { props: { posts: [] } }

  try {
    const r = await fetch(`${base}/api/blog-posts?limit=20&sort=-publishedDate`)
    if (!r.ok) return { props: { posts: [] } }

    // Skaidri tipi, bez `any`
    type BlogDoc = { id: string; title: string; slug: string; excerpt?: string | null }
    type ApiResp = { docs: BlogDoc[] }

    const data: ApiResp = await r.json()
    const posts: Post[] = (data?.docs ?? []).map((d) => ({
      id: d.id,
      title: d.title,
      slug: d.slug,
      excerpt: d.excerpt ?? null, // ← NEKAD `undefined`
    }))
    return { props: { posts } }
  } catch {
    return { props: { posts: [] } }
  }
}
