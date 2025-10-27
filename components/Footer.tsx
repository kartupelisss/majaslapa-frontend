import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#005BBB] text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
          {/* Left: Logo */}
          <div className="md:col-span-3">
            <Link href="/" aria-label="Sākums">
              <Image
                src="/brand/logo-rempe.jpg"
                alt="REMPE"
                width={160}
                height={40}
                className="h-auto w-[160px]"
                priority
              />
            </Link>
          </div>

          {/* Middle: Legal links + social */}
          <div className="md:col-span-6">
            <nav className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:opacity-90"
              >
                Vispārīgie noteikumi
              </Link>
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:opacity-90"
              >
                Privātuma politika
              </Link>
              <Link
                href="/cookies"
                className="underline underline-offset-4 hover:opacity-90"
              >
                Paziņojums par sīkdatnēm
              </Link>

              <div className="mt-4 flex items-center gap-4 md:mt-0">
                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition hover:bg-white/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.76-2.2 4.02 0 4.76 2.65 4.76 6.1V24h-4v-7.1c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.76V24h-4V8z" />
                  </svg>
                </Link>

                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 transition hover:bg-white/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M22 12.07C22 6.49 17.52 2 11.93 2 6.35 2 1.86 6.49 1.86 12.07c0 5.01 3.66 9.16 8.44 9.95v-7.03H7.9V12.1h2.4V9.89c0-2.38 1.42-3.69 3.6-3.69 1.04 0 2.12.19 2.12.19v2.34h-1.19c-1.17 0-1.54.73-1.54 1.48v1.89h2.63l-.42 2.89h-2.21V22c4.78-.79 8.44-4.94 8.44-9.93z" />
                  </svg>
                </Link>
              </div>
            </nav>
          </div>

          {/* Right: Newsletter */}
          <div className="md:col-span-3 md:justify-self-end">
            <p className="text-sm/5 opacity-90">
              Jaunākās ziņas.
              <br />
              Tieši Jums!
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#005BBB] transition hover:bg-white/90"
            >
              PIERAKSTĪTIES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
