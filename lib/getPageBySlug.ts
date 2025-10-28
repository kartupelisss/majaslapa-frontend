export const getPageBySlug = async (slug: string, collection: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/${collection}?where[slug][equals]=${slug}`
  );

  if (!res.ok) {
    console.error(`Fetch failed: ${res.status} ${res.statusText}`);
    return null;
  }

  const data = await res.json();
  const doc = data?.docs?.[0];
  return doc || null;
};
