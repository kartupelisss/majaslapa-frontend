// components/ui/MegaMenu.tsx
import Link from "next/link";

// Ja gribi, vēlāk varēsi pārcelt uz lib/*
const MENU_CLIENTS = [
  { title: "Uzņēmumi", href: "/#klienti" },
  { title: "Ģimenes biznesi un privātpersonas", href: "/#klienti" },
  { title: "Starptautiskas uzņēmumu grupas", href: "/#klienti" },
  { title: "Jaunuzņēmumi", href: "/#klienti" },
  { title: "Investīciju un ieguldījumu fondi", href: "/#klienti" },
  { title: "Kripto", href: "/#klienti" },
];

const MENU_SERVICES = [
  { title: "Nodokļu konsultācijas", href: "/#pakalpojumi" },
  { title: "Nodokļu risku izvērtēšana un nodokļu plānošana", href: "/#pakalpojumi" },
  { title: "Darījumu strukturēšana", href: "/#pakalpojumi" },
  { title: "Transfertcenas", href: "/#pakalpojumi" },
  { title: "Juridiskie pakalpojumi", href: "/#pakalpojumi" },
  { title: "Pārstāvība komunikācijā un strīdos ar VID", href: "/#pakalpojumi" },
  { title: "Vērtēšanas un biznesa konsultāciju pakalpojumi", href: "/#pakalpojumi" },
  { title: "Ārpakalpojuma grāmatvedība", href: "/#pakalpojumi" },
];

export default function MegaMenu() {
  return (
    <div
      className="bg-white shadow-xl border rounded-2xl p-6 w-[1000px]"
      role="menu"
      aria-label="Galvenā izvēlne"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Klienti */}
        <div>
          <div className="text-sm font-semibold mb-2">Klienti</div>
          <div className="h-px bg-neutral-200 mb-3" />
          <ul className="space-y-1">
            {MENU_CLIENTS.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-lg hover:bg-neutral-50"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pakalpojumi */}
        <div>
          <div className="text-sm font-semibold mb-2">Pakalpojumi</div>
          <div className="h-px bg-neutral-200 mb-3" />
          <ul className="space-y-1">
            {MENU_SERVICES.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-lg hover:bg-neutral-50"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Izceltais (vari atstāt vai noņemt) */}
        <div>
          <div className="text-sm font-semibold mb-2">Izceltais</div>
          <div className="h-px bg-neutral-200 mb-3" />
          <Link href="/insights" className="group block overflow-hidden rounded-xl border">
            <div className="aspect-[16/9] bg-neutral-100 overflow-hidden">
              <img
                src="/brand/logo-rempe.jpg"
                alt="REMPE"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-neutral-500">Publikācija</div>
              <div className="mt-1 font-medium leading-snug">
                Praktiski padomi: PVN un pārrobežu darījumu riski
              </div>
              <div className="mt-2 text-sm underline underline-offset-4">Lasīt vairāk</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
