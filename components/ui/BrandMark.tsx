/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function BrandMark() {
  return (
    <Link href="/" aria-label="Sākumlapa" className="flex items-center">
      {/* Fiksēts izmērs + overflow control — header vairs neizstiepjas */}
      <div className="h-10 md:h-12 w-[220px] md:w-[260px] flex items-center overflow-hidden">
        <img
          src="/logo-rempe.jpg"
          alt="REMPE — Tax / Legal / Transfer Pricing / Advisory"
          className="max-h-full w-auto block"
          loading="eager"
          decoding="async"
        />
      </div>
      <span className="sr-only">REMPE</span>
    </Link>
  );
}
