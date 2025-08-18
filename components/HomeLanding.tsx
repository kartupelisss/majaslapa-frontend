// components/HomeLanding.tsx
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ChevronRight, FileText, Scale, Building2, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

type Insight = {
  id: string | number;
  title: string;
  excerpt: string;
  topic: string;
  date: string;
  slug?: string;
};

type Service = {
  slug: string;
  title: string;
  excerpt: string;
  bullets: string[];
  icon?: React.ReactNode;
};

export default function HomeLanding({ insights = [] as Insight[] }: { insights?: Insight[] }) {
  // Fallback dati, ja no CMS vēl nenāk saturs
  const fallback = useMemo<Insight[]>(
    () => [
      { id: 1, title: "PVN politikas jaunumi 2025", excerpt: "Svarīgākās izmaiņas un ko plānot.", topic: "Nodokļu jaunumi", date: "2025-08-01" },
      { id: 2, title: "Pārrobežu restrukturizācija", excerpt: "Riski un iespējas ES ietvaros.", topic: "Starptautiskie nodokļi", date: "2025-07-22" },
      { id: 3, title: "Transfercenu dokumentēšana", excerpt: "5 biežākās kļūdas un ko darīt.", topic: "Transfercenas", date: "2025-07-10" },
    ],
    []
  );

  const data = insights.length ? insights : fallback;

  // --- Pakalpojumu dati (vertikālais saraksts + detalizācija labajā pusē) ---
  const services: Service[] = [
    {
      slug: "stridi-un-parbaudes",
      title: "Strīdi un pārbaudes",
      excerpt: "Pārstāvība VID un tiesās — no skaidrojumiem līdz apelācijām.",
      bullets: ["Pārsūdzības un paskaidrojumi", "Procesa stratēģija", "Judikatūras izmantošana"],
      icon: <FileText size={20} aria-hidden />,
    },
    {
      slug: "pvn-un-parrobezu-darijumi",
      title: "PVN un pārrobežu darījumi",
      excerpt: "Drošas ķēdes, reģistrācijas, rēķini, atbilstība jurisdikcijās.",
      bullets: ["OSS/IOSS, PVN reģistrācijas", "Piegādes vietas noteikšana", "Dokumentēšana un pierādījumi"],
      icon: <Building2 size={20} aria-hidden />,
    },
    {
      slug: "transfercenu-politika",
      title: "Transfercenu politika",
      excerpt: "Struktūra, dokumentācija un audits saskaņā ar OECD vadlīnijām.",
      bullets: ["Master/Local File minimums", "Salīdzināmo izvēle un metodes", "Dokumentācija gatavībai auditam"],
      icon: <Scale size={20} aria-hidden />,
    },
    {
      slug: "ieturejuma-nodokli",
      title: "Ieturējuma nodokļi",
      excerpt: "Līgumu struktūras, atvieglojumi un dokumentu noformēšana.",
      bullets: ["Rezidences sertifikāti", "Peļņas izmaksu guvumi", "Atbrīvojumu plānošana"],
      icon: <FileText size={20} aria-hidden />,
    },
    {
      slug: "restrukturizacija",
      title: "Restrukturizācija",
      excerpt: "Nodokļu ietekmes izvērtēšana uzņēmumu jaunajā jurisdikcijā.",
      bullets: ["Darījumu kartēšana", "Riska analīze", "Pārejas lēmumi"],
      icon: <Building2 size={20} aria-hidden />,
    },
    {
      slug: "es-oecd-prakse",
      title: "ES/OECD prakse",
      excerpt: "Atbilstība direktīvām, vadlīnijām un jaunajai judikatūrai.",
      bullets: ["Direktīvu transponēšana", "Valdību pieteikumi", "Tiesu prakses monitorings"],
      icon: <Scale size={20} aria-hidden />,
    },
  ];

  // sākotnējā izvēle – pēc hash (#pakalpojumi-<slug>) vai pirmā
  const initialSlug = useMemo(() => {
    if (typeof window === "undefined") return services[0].slug;
    const h = window.location.hash.replace("#", "");
    const fromHash = h?.startsWith("pakalpojumi-") ? h.replace("pakalpojumi-", "") : null;
    return services.find((s) => s.slug === fromHash)?.slug ?? services[0].slug;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [active, setActive] = useState<string>(initialSlug);
  const current = services.find((s) => s.slug === active) ?? services[0];

  // URL hash atjaunošana, paliekot tajā pašā lapā
  useEffect(() => {
    if (typeof window === "undefined") return;
    history.replaceState(null, "", `#pakalpojumi-${active}`);
  }, [active]);

  // ---- Kontaktformas stāvoklis + submit handleris ----
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSent(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      setSent(r.ok ? "ok" : "error");
      if (r.ok) e.currentTarget.reset();
    } catch {
      setSent("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-neutral-900" aria-hidden />
            <span className="font-semibold tracking-tight">Juridiskais birojs • Tax</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="hover:opacity-80 transition" href="#insights">Insights</a>
            {/* Enkurs uz JAUNO pakalpojumu sadaļu */}
            <a className="hover:opacity-80 transition" href="#pakalpojumi">Pakalpojumi</a>
            <a className="hover:opacity-80 transition" href="#about">Par mums</a>
            <a className="hover:opacity-80 transition" href="#contact">Kontakti</a>
          </nav>
          <Button>
            <a href="#contact">Sazināties</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_100%_10%,rgba(20,20,20,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl"
          >
            Skaldi sarežģīto vienkāršos soļos: augstas klases{" "}
            <span className="whitespace-nowrap">nodokļu risinājumi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-neutral-600"
          >
            Stratēģiskas konsultācijas ar juridisko precizitāti un finanšu domāšanu. Latvijā un pārrobežu darījumos.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button className="flex items-center gap-2" size="lg">
              <a href="#contact" className="flex items-center">
                Iesākt sarunu <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
            <Button className="flex items-center gap-2" size="lg" variant="outline">
              <a href="#insights" className="flex items-center">
                Skatīt Insights <ChevronRight className="ml-2" size={16} />
              </a>
            </Button>
          </div>

          {/* Trust bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-neutral-500">
            {[
              ">15 gadu pieredze",
              "Regulāri pārstāvība VID un tiesās",
              "ES un OECD prakses skatījums",
              "Klienti: ražošana, e-komercija, HoReCa, finanses",
            ].map((t, i) => (
              <div key={i} className="border-l pl-4">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="border-t bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Insights</h2>
              <p className="mt-1 text-neutral-600">Īsi skaidrojumi un analīze par aktuālajiem nodokļu tematiem.</p>
            </div>
            <div className="w-full max-w-xs hidden md:flex items-center gap-2">
              <Input placeholder="Meklēt tēmās…" />
              <Button variant="outline">Meklēt</Button>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((post) => (
              <Card key={post.id} className="rounded-2xl hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base font-semibold tracking-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-neutral-500">
                    {post.topic} • {new Date(post.date).toLocaleDateString()}
                  </div>
                  <p className="mt-2 text-sm text-neutral-700 line-clamp-3">{post.excerpt}</p>

                  <Link
                    href={`/insights/${post.slug ?? post.id}`}
                    className="inline-block mt-2 text-sm underline"
                  >
                    Lasīt tālāk
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pakalpojumi (JAUNA FUNKCIJA: vertikāls saraksts + mainīga kartīte) */}
      <section id="pakalpojumi" className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Pakalpojumi</h2>
            <p className="mt-1 text-neutral-600">
              Konsultējam un pārstāvam nodokļu jautājumos — no ikdienas PVN situācijām līdz sarežģītiem
              pārrobežu darījumiem un strīdiem ar VID.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(260px,360px)_1fr]">
            {/* Kreisā kolonna: vertikāls saraksts */}
            <nav aria-label="Pakalpojumu saraksts" className="space-y-2 rounded-2xl border p-2">
              {services.map((s) => {
                const isActive = s.slug === active;
                return (
                  <button
                    key={s.slug}
                    onClick={() => setActive(s.slug)}
                    className={[
                      "w-full text-left rounded-xl px-3 py-3 transition",
                      "flex items-center gap-3",
                      isActive ? "bg-neutral-100 ring-1 ring-neutral-900/10" : "hover:bg-neutral-50",
                    ].join(" ")}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="shrink-0">{s.icon ?? <FileText size={20} aria-hidden />}</span>
                    <span className="font-medium">{s.title}</span>
                  </button>
                );
              })}
            </nav>

            {/* Labā kolonna: mainīgā kartīte */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1">{current.icon ?? <FileText size={20} aria-hidden />}</div>
                  <div>
                    <h3 className="text-2xl font-semibold">{current.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{current.excerpt}</p>
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
                  {/* Paliekam lapā — novelkam uz kontaktu */}
                  <Button
                    onClick={() => {
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="inline-flex items-center gap-2"
                  >
                    Uzzināt vairāk <span aria-hidden>→</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Par juristu</h2>
              <p className="mt-4 text-neutral-700">
                Boutique birojs ar lielo biroju pieredzi. Rūpīga analīze, praktiski ieteikumi, ātra iesaiste.
              </p>
              <ul className="mt-6 space-y-2 text-neutral-700">
                <li>• Nodokļu konsultācijas un tiesvedība</li>
                <li>• Baltija, ES, OECD</li>
                <li>• Lekcijas un semināri finanšu komandām</li>
              </ul>
              <Button className="mt-6" variant="outline">
                <Link href="/about" className="inline-block">Lasīt vairāk</Link>
              </Button>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-neutral-100 shadow-sm" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Sazināsimies</h2>
              <p className="mt-2 text-neutral-700 max-w-xl">
                Pastāsti par situāciju – iesakām nākamos soļus un skaidru izpildes grafiku.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <Card className="rounded-2xl">
                  <CardContent className="p-4 flex items-center gap-3 text-sm">
                    <Mail size={20} aria-hidden />
                    <div>
                      <div className="font-medium">E-pasts</div>
                      <a href="mailto:info@juristibirojs.lv" className="text-neutral-600">info@juristibirojs.lv</a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl">
                  <CardContent className="p-4 flex items-center gap-3 text-sm">
                    <Phone size={20} aria-hidden />
                    <div>
                      <div className="font-medium">Tālrunis</div>
                      <a href="tel:+37120000000" className="text-neutral-600">+371 20 000 000</a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <form className="grid gap-3" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm">Vārds, Uzvārds</label>
                    <Input name="name" placeholder="Jānis Bērziņš" required />
                  </div>
                  <div>
                    <label className="text-sm">E-pasts</label>
                    <Input name="email" type="email" placeholder="janis@uznemums.lv" required />
                  </div>
                  <div>
                    <label className="text-sm">Ziņojums</label>
                    <textarea
                      name="message"
                      className="w-full border rounded-xl px-3 py-2 text-sm min-h-28 outline-none focus:ring-2 focus:ring-neutral-900/20"
                      placeholder="Īss apraksts par jautājumu…"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-fit" disabled={sending}>
                    {sending ? "Sūtām..." : "Nosūtīt"}
                  </Button>
                  {sent === "ok" && <div className="text-sm text-green-600 mt-1">Paldies! Ziņa nosūtīta.</div>}
                  {sent === "error" && <div className="text-sm text-red-600 mt-1">Neizdevās nosūtīt. Pamēģini vēlreiz.</div>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Juridiskais birojs • Tax</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:opacity-80">Privātums</Link>
            <Link href="/terms" className="hover:opacity-80">Noteikumi</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
