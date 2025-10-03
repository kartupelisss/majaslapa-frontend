/* eslint-disable @next/next/no-img-element */
export default function BrandMark() {
  return (
    // tikai logo vizuālais bloks — BEZ <Link>
    <div className="flex items-center">
      <div className="h-10 md:h-12 w-[220px] md:w-[260px] flex items-center overflow-hidden">
        <img
          src="/logo-rempe.jpg"
          alt="REMPE — Tax / Legal / Transfer Pricing / Advisory"
          className="max-h-full w-auto block"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
