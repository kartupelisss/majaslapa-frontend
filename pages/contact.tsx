// pages/contact.tsx
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      setStatus("sending");
      // Ja tev jau ir pages/api/contact.ts — nosūtām tur:
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Head>
        <title>Kontakti — Jurista birojs</title>
        <meta name="description" content="Sazinieties ar mums par nodokļu konsultācijām." />
      </Head>

      {/* vienkārša augšējā josla ar 'atpakaļ' */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">
            ← Atpakaļ uz sākumu
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Sazināties</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          Īsi aprakstiet situāciju — atbildēsim ar rīcības plānu.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          <section className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6">
            {status === "sent" ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <div className="text-green-800 font-medium">Paldies! Ziņa nosūtīta.</div>
                <div className="mt-2 text-sm text-green-800/80">
                  Mēs sazināsimies ar jums tuvākajā laikā.
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-neutral-600">Vārds, uzvārds</label>
                  <input
                    required name="name" type="text"
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600">E-pasts</label>
                  <input
                    required name="email" type="email"
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600">Ziņa</label>
                  <textarea
                    required name="message" rows={5}
                    className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
                >
                  {status === "sending" ? "Sūtu..." : "Nosūtīt"}
                </button>

                {status === "error" && (
                  <div className="text-sm text-red-600 mt-2">
                    Neizdevās nosūtīt. Pamēģini vēlreiz vai raksti uz <a className="underline" href="mailto:info@example.com">info@example.com</a>.
                  </div>
                )}
              </form>
            )}
          </section>

          <aside className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-neutral-900">Kontakti</h2>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <li>
                E-pasts:{" "}
                <a className="underline underline-offset-4" href="mailto:info@example.com">
                  info@example.com
                </a>
              </li>
              <li>
                Tālrunis:{" "}
                <a className="underline underline-offset-4" href="tel:+37120000000">
                  +371 20 000 000
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </main>
    </>
  );
}
