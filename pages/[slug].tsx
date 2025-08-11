import { GetServerSideProps } from 'next'

type PageDoc = { title: string; slug: string; content: string }
type PageProps = { page: PageDoc | null }

export default function DynamicPage({ page }: PageProps) {
  if (!page) return <h1 className="text-center text-2xl mt-8">404 Lapa nav atrasta</h1>
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
      <p>{page.content}</p>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const base = process.env.NEXT_PUBLIC_PAYLOAD_URL
  const slug = String(params?.slug || '')
  const r = await fetch(`${base}/api/pages?where[slug][equals]=${slug}`)
  if (!r.ok) return { props: { page: null } }

  const data = await r.json()
  const doc = data?.docs?.[0] || null
  return { props: { page: doc } }
}
