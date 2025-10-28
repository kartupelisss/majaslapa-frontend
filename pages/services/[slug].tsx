type ServiceDoc = {
  slug: string;
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/services`);
  const data = await res.json();

  const paths =
    data?.docs
      ?.filter((doc: ServiceDoc) => !!doc.slug)
      .map((doc: ServiceDoc) => ({ params: { slug: doc.slug } })) || [];

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const slug = params?.slug;

  if (!slug) {
    return { notFound: true };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/services?where[slug][equals]=${encodeURIComponent(
      slug
    )}`
  );

  const data = await res.json();
  const service: ServiceDoc | null = data?.docs?.[0] ?? null;

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service },
    revalidate: 60,
  };
}
