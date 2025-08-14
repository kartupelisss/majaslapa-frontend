// pages/unlock.tsx
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function UnlockPage() {
  const router = useRouter();
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pwd }),
      });
      if (!res.ok) throw new Error("Nepareiza parole");
      const target = typeof router.query.from === "string" ? router.query.from : "/";
      router.replace(target);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Neizdevās";
      setErr(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Pieeja ar paroli</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
        <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-6">
          <h1 className="text-xl font-semibold text-neutral-900">Pieeja ar paroli</h1>
          <p className="mt-2 text-sm text-neutral-600">Šī ir privāta priekšskatījuma versija.</p>

          <form onSubmit={submit} className="mt-6 space-y-3">
            <div>
              <label className="block text-sm text-neutral-600">Parole</label>
              <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900"
              />
            </div>

            {!!err && <div className="text-sm text-red-600">{err}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Pārbaudu..." : "Ielīst iekšā"}
            </button>

            <Link
              href="/api/logout"
              className="block text-center text-xs text-neutral-500 underline underline-offset-4 mt-2"
            >
              Notīrīt piekļuvi
            </Link>
          </form>
        </div>
      </main>
    </>
  );
}
