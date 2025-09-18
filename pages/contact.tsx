import Head from "next/head";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
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
      phone: String(fd.get("phone") || ""),
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
    <>
      <Head>
        <title>Sazināties — REMPE</title>
        <meta
          name="description"
          content="Īss apraksts par vajadzību, aptuvenie termiņi, un mēs atgriezīsimies ar risinājuma plānu."
        />
      </Head>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
              Sazināties
            </h1>
            <p className="mt-2 text-neutral-600">
              Īss apraksts par vajadzību, aptuvenie termiņi, un mēs atgriezīsimies ar risinājuma plānu.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-4 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input name="name" placeholder="Vārds, Uzvārds" required />
                <Input name="email" type="email" placeholder="E-pasts" required />
              </div>

              <Input name="phone" placeholder="Tālrunis" />

              <textarea
                name="message"
                className="min-h-32 w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10"
                placeholder="Ziņa"
                required
              />

              <Button type="submit" disabled={sending} className="w-full md:w-auto">
                {sending ? "Sūtām..." : "Pieteikt konsultāciju"}
              </Button>

              {sent === "ok" && (
                <div className="text-sm text-green-600">Paldies! Ziņa nosūtīta.</div>
              )}
              {sent === "error" && (
                <div className="text-sm text-red-600">Neizdevās nosūtīt. Pamēģini vēlreiz.</div>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
