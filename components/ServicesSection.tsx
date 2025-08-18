// components/ServicesSection.tsx
import { useEffect, useMemo, useState } from "react";
import { services } from "@/lib/servicesData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = {
  id?: string; // enkurs no navbar (#pakalpojumi)
};

export default function ServicesSection({ id = "pakalpojumi" }: Props) {
  // sākotnējā izvēle – pirmā vai pēc URL hash:
  const initialSlug = useMemo(() => {
    if (typeof window === "undefined") return services[0].slug;
    const h = window.location.hash.replace("#", "");
    const fromHash = h?.startsWith("pakalpojumi-")
      ? h.replace("pakalpojumi-", "")
      : null;
    return services.find((s) => s.slug === fromHash)?.slug ?? services[0].slug;
  }, []);

  const [active, setActive] = useState(initialSlug);

  // atjaunojam hash, lai var dalīties ar tiešo skatu, bet paliekam tai pašā lapā:
  useEffect(() => {
    if (typeof window === "undefined") return;
    const newHash = `#pakalpojumi-${active}`;
    // neaizraujamies ar vēstures kaudzi:
    history.replaceState(null, "", newHash);
  }, [active]);

  const current = services.find((s) => s.slug === active) ?? services[0];

  return (
    <section id={id} className="container mx-auto max-w-6xl px-4 py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Pakalpojumi</h2>
        <p className="mt-2 text-balance text-sm/6 text-muted-foreground">
          Konsultējam un pārstāvam nodokļu jautājumos — no ikdienas PVN situācijām
          līdz sarežģītiem pārrobežu darījumiem un strīdiem ar VID.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-[minmax(260px,360px)_1fr]">
        {/* Kreisā kolonna: vertikāls saraksts (tabs) */}
        <nav
          aria-label="Pakalpojumu saraksts"
          className="space-y-2 rounded-2xl border p-2"
        >
          {services.map((s) => {
            const isActive = s.slug === active;
            return (
              <button
                key={s.slug}
                onClick={() => setActive(s.slug)}
                className={[
                  "w-full text-left rounded-xl px-3 py-3 transition",
                  "flex items-center gap-3",
                  isActive
                    ? "bg-muted/50 ring-1 ring-foreground/10"
                    : "hover:bg-muted/30",
                ].join(" ")}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="text-lg">{s.icon ?? "•"}</span>
                <span className="font-medium">{s.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Labā kolonna: mainīgā kartīte */}
        <Card className="rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <div className="text-2xl">{current.icon ?? "•"}</div>
            <div>
              <h3 className="text-2xl font-semibold">{current.title}</h3>
              <p className="mt-1 text-sm/6 text-muted-foreground">
                {current.excerpt}
              </p>
            </div>
          </div>

          <ul className="mt-6 space-y-2 pl-1">
            {current.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            {/* “Uzzināt vairāk” paliek lapā — pēc noklusējuma novelkam uz kontaktu */}
            <Button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-2"
            >
              Uzzināt vairāk
              <span aria-hidden>→</span>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
