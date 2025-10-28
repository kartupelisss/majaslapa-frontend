import { renderBlocks } from "@/components/RenderBlocks";

type ServiceDoc = {
  slug: string;
  heroVirsraksts?: string;
  heroApraksts?: string;
  nosaukums?: string;
  saturaBloki?: any[];
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
    fallback: "blocking", // ļauj ģenerēt lapu arī pēc tam
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

// 🟩 Šis ir obligāti — bez tā Next nevar buildēt lapu
export default function ServicePage({ service }: { service: ServiceDoc }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* === HERO SEKCIJA === */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0a2149 0%, #163b73 100%)",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-100">
            Pakalpojumi
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl xl:text-6xl">
            {service?.heroVirsraksts || service?.nosaukums}
          </h1>

          {service?.heroApraksts && (
            <div className="mt-8 max-w-3xl space-y-6 text-white/90 whitespace-pre-line">
              {service.heroApraksts.split("\n\n").map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* === BLOKI NO PAYLOAD === */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {renderBlocks(service?.saturaBloki)}
      </section>
    </div>
  );
}
