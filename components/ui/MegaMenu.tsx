import * as React from "react";
import Link from "next/link";

export default function MegaMenu() {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const hideTimer = React.useRef<number | null>(null);

  // helpers: atvērt/ieplānot aizvēršanu ar nelielu kavējumu
  const openMenu = React.useCallback(() => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setOpen(true);
  }, []);

  const scheduleClose = React.useCallback((delay = 220) => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      setOpen(false);
      hideTimer.current = null;
    }, delay);
  }, []);

  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !triggerRef.current?.contains(t)) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div
      className="relative"
      // svarīgi: wrapper-ā ieplānojam aizvēršanu ar kavējumu
      onMouseLeave={() => scheduleClose(220)}
      onMouseEnter={openMenu}
    >
      {/* Trigger */}
      <button
        ref={triggerRef}
        className="inline-flex items-center gap-1 text-[15px] leading-none"
        onMouseEnter={openMenu}
        onClick={() => (open ? scheduleClose(0) : openMenu())}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        Pakalpojumi
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 01.94 1.17l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.4a.75.75 0 01.02-1.19z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Panelis */}
      <div
        ref={panelRef}
        onMouseEnter={openMenu}            // ienākot panelī – atceļam aizvēršanu
        onMouseLeave={() => scheduleClose(220)} // izejot – ieplānojam aizvēršanu
        className={[
          "absolute left-1/2 -translate-x-1/2 mt-3 z-50",
          "w-[980px] max-w-[95vw]",
          "rounded-2xl border border-neutral-200 bg-white shadow-xl",
          "transition-all duration-200",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none",
        ].join(" ")}
      >
        <div className="grid grid-cols-12 gap-6 p-6">
          {/* Kolonna 1 */}
          <div className="col-span-4">
            <div className="px-1 pb-2 text-sm font-medium text-neutral-500">
              Klienti
            </div>
            <ul className="space-y-2">
              <li><NavItem href="/clients/uznemumi" label="Uzņēmumi" /></li>
              <li><NavItem href="/clients/gimenes" label="Ģimenes bizness un privātpersonas" /></li>
              <li><NavItem href="/clients/starptautiskas-grupas" label="Starptautiskas uzņēmumu grupas" /></li>
              <li><NavItem href="/clients/jaunuznemumi" label="Jaunuzņēmumi" /></li>
              <li><NavItem href="/clients/fondi" label="Investīciju un ieguldījumu fondi" /></li>
              <li><NavItem href="/clients/kripto" label="Kripto" /></li>
            </ul>
          </div>

          {/* Kolonna 2 */}
          <div className="col-span-5">
            <div className="px-1 pb-2 text-sm font-medium text-neutral-500">
              Pakalpojumi
            </div>
            <ul className="space-y-2">
              <li><NavItem href="/services/nodoklu-konsultacijas" label="Nodokļu konsultācijas" /></li>
              <li><NavItem href="/services/riski-planosana" label="Nodokļu risku izvērtēšana un nodokļu plānošana" /></li>
              <li><NavItem href="/services/darijumu-strukturesana" label="Darījumu strukturēšana" /></li>
              <li><NavItem href="/services/transfertcenas" label="Transfertcenas" /></li>
              <li><NavItem href="/services/juridiskie-pakalpojumi" label="Juridiskie pakalpojumi" /></li>
              <li><NavItem href="/services/parstaviba-ar-vid" label="Pārstāvība komunikācijā un strīdos ar VID" /></li>
              <li><NavItem href="/services/vertesanas-un-biznesa-konsultacijas" label="Vērtēšanas un biznesa konsultāciju pakalpojumi" /></li>
              <li><NavItem href="/services/arpakalpojuma-gramatvediba" label="Ārpakalpojuma grāmatvedība" /></li>
            </ul>
          </div>

          {/* Kolonna 3 – izceltais */}
          <div className="col-span-3">
            <div className="px-1 pb-2 text-sm font-medium text-neutral-500">
              Publikācija
            </div>
            <Link
              href="/insights/pvn-kedes-risku-samazinasana-e-komercija"
              className="block rounded-xl border border-neutral-200 p-4 hover:bg-neutral-50"
            >
              <div className="text-[15px] font-medium">
                Praktiski padomi: PVN un pārrobežu darījumu riski
              </div>
              <div className="mt-2 text-sm underline underline-offset-4">
                Lasīt vairāk
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2 text-[15px] leading-5 hover:bg-neutral-50"
    >
      {label}
    </Link>
  );
}
