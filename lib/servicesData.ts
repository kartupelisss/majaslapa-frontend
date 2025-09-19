// lib/servicesData.ts
export type Service = {
  title: string;
  slug: string;
  href: string;
  short?: string;
  icon?: string;
};

export const servicesData: Service[] = [
  {
    title: "Nodokļu konsultācijas",
    slug: "nodoklu-konsultacijas",
    href: "/services/nodoklu-konsultacijas",
  },
  {
    title: "Nodokļu risku izvērtēšana un nodokļu plānošana",
    slug: "riski-planosana",
    href: "/services/riski-planosana",
  },
  {
    title: "Darījumu strukturēšana",
    slug: "darijumu-strukturesana",
    href: "/services/darijumu-strukturesana",
  },
  {
    title: "Transfertcenas",
    slug: "transfertcenas",
    href: "/services/transfertcenas",
  },
  {
    title: "Juridiskie pakalpojumi",
    slug: "juridiskie-pakalpojumi",
    href: "/services/juridiskie-pakalpojumi",
  },
  {
    title: "Pārstāvība komunikācijā un strīdos ar VID",
    slug: "parstaviba-ar-vid",
    href: "/services/parstaviba-ar-vid",
  },
  {
    title: "Vērtēšanas un biznesa konsultāciju pakalpojumi",
    slug: "vertesanas-un-biznesa-konsultacijas",
    href: "/services/vertesanas-un-biznesa-konsultacijas",
  },
  {
    title: "Ārpakalpojuma grāmatvedība",
    slug: "arpakalpojuma-gramatvediba",
    href: "/services/arpakalpojuma-gramatvediba",
  },
];
