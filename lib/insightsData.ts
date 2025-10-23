// lib/insightsData.ts

export type LexicalRichText = {
  root?: {
    children?: {
      text?: string
      children?: { text?: string }[]
    }[]
  }
}

export type Insight = {
  id: string
  slug: string
  title: string
  publishedDate: string
  excerpt?: string
  content?: LexicalRichText
  summary?: { item: string }[]
}

const BASE_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://majaslapa-ra7f.onrender.com"

/**
 * Iegūst visus rakstus no Payload CMS (kolekcija "blog-posts")
 */
export async function getInsights(): Promise<Insight[]> {
  const url = `${BASE_URL}/api/blog-posts?sort=-publishedDate`
  console.log("📡 Fetching Insights no:", url)

  const res = await fetch(url, { next: { revalidate: 60 } })

  if (!res.ok) {
    console.error("❌ Neizdevās ielādēt Insights no Payload CMS:", res.statusText)
    return []
  }

  const data = (await res.json()) as { docs: Insight[] }
  return data.docs || []
}

/**
 * Iegūst konkrētu rakstu pēc slug
 */
export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  const url = `${BASE_URL}/api/blog-posts?where[slug][equals]=${slug}`
  console.log("📡 Fetching rakstu no:", url)

  const res = await fetch(url)

  if (!res.ok) {
    console.error("❌ Neizdevās ielādēt rakstu:", res.statusText)
    return null
  }

  const data = (await res.json()) as { docs: Insight[] }
  return data.docs?.[0] || null
}
