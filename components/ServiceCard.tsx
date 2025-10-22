type Card = {
  title: string;
  teaser: string;
  hoverBullets: string[];
  modalBody: string[];
};

interface ServiceCardProps {
  card: Card;
  onOpen: () => void;
  index: number;
}

export function ServiceCard({ card, onOpen, index }: ServiceCardProps) {
  return (
    <div
      className="relative flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* 🔵 Dzeltenā ciparu bumba */}
      <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD93D] text-[#0a2149] text-sm font-bold shadow-md">
        {index + 1}
      </div>

      {/* Teksts */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-[#0a2149] leading-tight mb-3">
          {card.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {card.teaser}
        </p>

        {/* Bullet punkti */}
        <ul className="space-y-2 rounded-lg bg-[#f8f9fa] p-4 mb-4">
          {card.hoverBullets.map((bullet, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-[#0a2149]"
            >
              <span className="mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFD93D]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 🔵 Poga “Uzzināt vairāk” ar balto tekstu */}
      <button
        type="button"
        onClick={onOpen}
        className="mt-auto inline-flex items-center gap-2 rounded-lg bg-[#0a2149] px-4 py-2.5 text-sm font-medium !text-white transition-all hover:bg-[#163b73] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0a2149] focus:ring-offset-2"
      >
        <span className="!text-white">Uzzināt vairāk</span>
        <svg
          className="h-4 w-4 !text-white transition-transform"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
