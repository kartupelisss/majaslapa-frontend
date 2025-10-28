/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from "next";
import { getPageBySlug } from "@/lib/getPageBySlug";
import { renderBlocks } from "@/components//RenderBlocks";

export default function ServicePage({ page }: any) {
  if (!page) return <div>Lapa nav atrasta</div>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* === HERO === */}
      <section className="bg-gradient-to-b from-[#0a2149] to-[#163b73] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-xs mb-3 opacity-70">Pakalpojumi</p>
          <h1 className="text-4xl font-bold mb-6">{page.heroTitle}</h1>
          <div
            className="text-white/90 space-y-4"
            dangerouslySetInnerHTML={{ __html: page.heroDescription }}
          />
        </div>
      </section>

      {/* === BLOKI NO CMS === */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {renderBlocks(page.saturaBloki)}
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const page = await getPageBySlug(slug, "pakalpojumi");
  return { props: { page } };
};
