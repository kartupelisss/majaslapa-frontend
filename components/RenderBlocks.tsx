/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { serializePayloadRichText } from "@/lib/serializePayloadRichText";


export const renderBlocks = (blocks: any[] = []) => {
  if (!blocks || blocks.length === 0) return null;

  return blocks.map((block, i) => {
    switch (block.blockType) {
      // 🟦 1. Teksta bloks
      case "teksta-bloks":
        return (
          <section key={i} className="space-y-4">
            {block.virsraksts && (
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {block.virsraksts}
              </h2>
            )}
            {block.saturs && (
              <div
                className="prose max-w-none text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: serializePayloadRichText(block.saturs) }}



              />
            )}
          </section>
        );

      // 🟩 2. Kartīšu režģis
      case "kartisu-rezgis":
        return (
          <section key={i}>
            {block.virsraksts && (
              <h2 className="text-2xl font-bold mb-8">{block.virsraksts}</h2>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {block.kartites?.map((card: any, idx: number) => (
                <div
                  key={idx}
                  className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-2">{card.virsraksts}</h3>
                  {card.apraksts && (
                    <p className="text-sm mb-3 text-gray-600">{card.apraksts}</p>
                  )}
                  {card.punkti?.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                      {card.punkti.map((p: any, j: number) => (
                        <li key={j}>{p.punktaTeksts}</li>
                      ))}
                    </ul>
                  )}
                  {card.pogasTeksts && card.pogasSaite && (
                    <Link
                      href={card.pogasSaite}
                      className="inline-block bg-[#0a2149] text-white px-4 py-2 rounded-md text-sm hover:bg-[#163b73]"
                    >
                      {card.pogasTeksts}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        );

      // 🟨 3. CTA bloks
      case "cta-bloks":
        return (
          <section key={i} className="bg-yellow-100 p-10 rounded-2xl text-center">
            {block.virsraksts && (
              <h2 className="text-2xl font-bold mb-4">{block.virsraksts}</h2>
            )}
            {block.saturs && (
              <p className="text-lg text-gray-700 whitespace-pre-line">
                {block.saturs}
              </p>
            )}
            {block.pogasTeksts && block.pogasSaite && (
              <Link
                href={block.pogasSaite}
                className="inline-block mt-6 bg-[#0a2149] text-white px-6 py-3 rounded-md text-sm hover:bg-[#163b73]"
              >
                {block.pogasTeksts}
              </Link>
            )}
          </section>
        );

      default:
        return null;
    }
  });
};
