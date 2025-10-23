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

/**
 * Iegūst visus rakstus no Payload CMS (kolekcija "Insights raksti")
 */
export async function getInsights(): Promise<Insight[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/insights-raksti?sort=-publishedDate`,
    { next: { revalidate: 60 } }
  )

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/insights-raksti?where[slug][equals]=${slug}`
  )

  if (!res.ok) return null

  const data = (await res.json()) as { docs: Insight[] }
  return data.docs?.[0] || null
}
