// lib/insightsData.ts
export type Insight = {
  slug: string;
  title: string;
  date: string;     // ISO: YYYY-MM-DD
  excerpt: string;  // īss apraksts kartītēm
  content: string[]; // raksta rindkopas
};

export const insights: Insight[] = [
  {
    slug: "pvn-kedes-risku-samazinasana-e-komercija",
    title: "PVN ķēdes risku samazināšana e-komercijā",
    date: "2025-08-01",
    excerpt:
      "Praktiskas pārbaudes un dokumentēšana, kas palīdz izvairīties no noraidītām atskaitēm.",
    content: [
      "E-komercijas PVN riski visbiežāk rodas no nepilnīgas ķēdes dokumentēšanas un neprecīzām piegādes vietas interpretācijām.",
      "Minimālais drošības komplekts: pircēja identifikācija, piegādes pierādījumi (CMR, kurjera izsekošana), rēķinos korekti PVN kodi, OSS/IOSS reģistrācijas apliecinājumi.",
      "Iekšējās pārbaudes: izlases pārbaude 5–10 pasūtījumiem mēnesī, neatbilstību protokols un koriģējošas darbības 30 dienu laikā.",
    ],
  },
  {
    slug: "transfertcenu-dokumentacijas-minimums-2025",
    title: "Transfertcenu dokumentācijas minimums 2025",
    date: "2025-07-18",
    excerpt:
      "Kā nepāršaut pāri prasībām un tomēr izturēt auditu.",
    content: [
      "2025. gadā pamatprincipi paliek: Master File + Local File atbilstoši OECD vadlīnijām.",
      "Praktiski: skaidra darījumu kartēšana, salīdzināmo izvēle un konsekventa metožu pielietošana.",
      "Dokumentācijai jābūt gatavai iesniegšanai saprātīgā termiņā — ieteicami 30–60 dienas.",
    ],
  },
  {
    slug: "ieturejuma-nodoklis-biezakas-kludas",
    title: "Ieturējuma nodoklis: biežākās kļūdas",
    date: "2025-06-30",
    excerpt:
      "Līgumu formulējumi un atbrīvojumu pierādīšana praksē.",
    content: [
      "Klasiska kļūda — uzskatīt, ka dubultās aplikšanas līgums automātiski atbrīvo no ieturējuma nodokļa.",
      "Nepietiek tikai ar rezidences sertifikātu — jāvērtē patiesais labuma guvējs un maksājuma būtība.",
      "Iekšējais kontrolsaraksts: līguma kvalifikācija, rezidences sertifikāts, atbrīvojuma normu piemērošana, pierādījumi par pakalpojuma sniegšanas vietu.",
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((p) => p.slug === slug);
}
