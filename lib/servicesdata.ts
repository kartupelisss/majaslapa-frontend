// lib/servicesData.ts
export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  bullets: string[];
  icon?: string; // varam ielikt Unicode/emoji vai SVG class nosaukumu
};

export const services: Service[] = [
  {
    slug: "stridi-un-parbaudes",
    title: "Strīdi un pārbaudes",
    excerpt: "Pārstāvība VID un tiesās — no skaidrojumiem līdz apelācijām.",
    bullets: [
      "Pārsūdzības un paskaidrojumi",
      "Procesa stratēģija",
      "Judikatūras izmantošana",
    ],
    icon: "🧭",
  },
  {
    slug: "pvn-un-parrobezu-darijumi",
    title: "PVN un pārrobežu darījumi",
    excerpt: "Drošas ķēdes, reģistrācijas, rēķini, atbilstība jurisdikcijās.",
    bullets: [
      "OSS/IOSS, PVN reģistrācijas",
      "Piegādes vietas noteikšana",
      "Dokumentēšana un pierādījumi",
    ],
    icon: "🌐",
  },
  {
    slug: "transfercenu-politika",
    title: "Transfercenu politika",
    excerpt: "Struktūra, dokumentācija un audits saskaņā ar OECD vadlīnijām.",
    bullets: [
      "Master/Local File minimums",
      "Salīdzināmo izvēle un metodes",
      "Dokumentācija gatavībai auditam",
    ],
    icon: "📑",
  },
  {
    slug: "ieturejuma-nodokli",
    title: "Ieturējuma nodokļi",
    excerpt: "Līgumu struktūras, atvieglotjum un dokumentu noformēšana.",
    bullets: [
      "Rezidences sertifikāti",
      "Peļņas izmaksu guvumi",
      "Atbrīvojumu plānošana",
    ],
    icon: "🏷️",
  },
  {
    slug: "restrukturizacija",
    title: "Restrukturizācija",
    excerpt: "Nodokļu ietekmes izvērtēšana uzņēmumu jaunajā jurisdikcijā.",
    bullets: [
      "Darījumu kartēšana",
      "Riska analīze",
      "Pārejas lēmumi",
    ],
    icon: "♻️",
  },
  {
    slug: "es-oecd-prakse",
    title: "ES/OECD prakse",
    excerpt: "Atbilstība direktīvām, vadlīnijām un jaunajai judikatūrai.",
    bullets: [
      "Direktīvu transponēšana",
      "Valdību pieteikumi",
      "Tiesu prakses monitorings",
    ],
    icon: "⚖️",
  },
];
