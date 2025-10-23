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
 * Iegūst visus rakstus no Payload CMS (kolekcija "insights")
 */
export async function getInsights(): Promise<Insight[]> {
  const url = `${BASE_URL}/api/insights?sort=-publishedDate`
  console.log("📡 Fetching Insights no:", url)

  try {
    const res = await fetch(url, { cache: 'no-store' })

    if (!res.ok) {
      console.error("❌ Neizdevās ielādēt Insights no Payload CMS:", res.statusText)
      return []
    }

    const data = (await res.json()) as { docs: Insight[] }
    return data.docs || []
  } catch (err) {
    console.error("🚨 Kļūda sazinoties ar Payload CMS:", err)
    return []
  }
}

/**
 * Iegūst konkrētu rakstu pēc slug
 */
export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  const url = `${BASE_URL}/api/insights?where[slug][equals]=${slug}`
  console.log("📡 Fetching rakstu no:", url)

  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.error("❌ Neizdevās ielādēt rakstu:", res.statusText)
      return null
    }

    const data = (await res.json()) as { docs: Insight[] }
    return data.docs?.[0] || null
  } catch (err) {
    console.error("🚨 Kļūda sazinoties ar Payload CMS:", err)
    return null
  }
}
