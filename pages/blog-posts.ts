import type { NextApiRequest, NextApiResponse } from 'next'

type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt?: string
}

type PayloadResponse<T> = { docs: T[] }

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const base = process.env.NEXT_PUBLIC_PAYLOAD_URL
  if (!base) return res.status(500).json({ error: 'NEXT_PUBLIC_PAYLOAD_URL is not set' })

  try {
    const url = `${base}/api/blog-posts?limit=20&sort=-publishedDate`
    const r = await fetch(url)
    const data: PayloadResponse<BlogPost> = await r.json()
    return res.status(r.status).json(data)
  } catch (err) {
    return res.status(500).json({ error: 'Proxy error' })
  }
}
