// components/ServicesSection.tsx
import * as React from "react";
import { useRouter } from "next/router";
import { servicesData, Service } from "@/lib/servicesData";

export default function ServicesSection() {
  const [active, setActive] = React.useState<Service>(servicesData[0]);
  const router = useRouter();

  const handleLearnMore = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // Ja kāds wrapperis vēl ir <a href="#contact">, neļaujam tam aktivizēties
      e.preventDefault();
      e.stopPropagation();
      const to = active.href || `/services/${active.slug}`;
      router.push(to);
    },
    [active, router]
  );

  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Mūsu ekspertīze jūsu biznesa izaugsmei un atbalstam
        </h2>
        {/* Tavs pārslēdzējs “Pakalpojumi / Klienti” paliek kā bija */}
      </div>

      {/* Čipi */}
      <div className="mt-6 flex flex-wrap gap-3 rounded-2xl border p-4">
        {servicesData.map((s) => (
          <button
            key={s.slug}
            onClick={() => setActive(s)}
            type="button"
            className={`rounded-full border px-4 py-2 text-sm ${
              active.slug === s.slug ? "bg-black text-white" : "hover:bg-neutral-50"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Aktīvā pakalpojuma kopsavilkums un CTA */}
      <div className="mt-6 rounded-2xl border p-6">
        <h3 className="text-2xl font-semibold">{active.title}</h3>
        {active.short && <p className="mt-3 text-neutral-700">{active.short}</p>}

        <div className="mt-6">
          <button
            type="button"
            onClick={handleLearnMore}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-neutral-50"
            aria-label={`Lasīt vairāk par: ${active.title}`}
          >
            Uzzināt vairāk <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
