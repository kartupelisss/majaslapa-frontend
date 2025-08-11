export const getPageBySlug = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}`);
  const data = await res.json();

  const doc = data?.docs?.[0];

  return doc || null;
};
