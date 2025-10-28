import { renderBlocks } from "@/components/RenderBlocks";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export default async function ServicePage({ params }: ServicePageProps) {
  // --- Datu ielāde no Payload ---
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/services/${params.slug}`,
    { cache: "no-store" } // lai vienmēr rāda jaunāko saturu
  );

  if (!res.ok) {
    console.error("Neizdevās ielādēt datus no Payload:", res.status);
    return <div>Kļūda ielādējot pakalpojumu.</div>;
  }

  const data = await res.json();
  const service = data?.doc;

  // --- Renderēšana ---
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

      {/* === DINAMISKIE BLOKI NO PAYLOAD === */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {renderBlocks(service?.saturaBloki)}
      </section>
    </div>
  );
}
