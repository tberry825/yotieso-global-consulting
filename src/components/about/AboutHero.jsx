const HERO_IMG =
  "https://media.base44.com/images/public/6a7b575f01624674781c5390/b56fc01f1_generated_image.png";

const TEXT = (
  <div className="max-w-xl">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5e7290]">
      About Yotieso
    </p>
    <h1 className="mt-5 font-heading text-3xl font-extrabold uppercase leading-[1.12] text-[#1A1A1A] md:text-4xl lg:text-5xl">
      Built on Purpose.
      <br />
      Driven by Excellence.
    </h1>
    <p className="mt-8 max-w-lg text-base leading-relaxed text-[#333333] sm:text-lg">
      Yotieso Global Consulting LLC is a Houston-based operations and
      business support firm dedicated to helping businesses and
      independent professionals build structure, efficiency, and
      long-term stability.
    </p>
  </div>
);

export default function AboutHero() {
  return (
    <section className="bg-white">
      {/* Desktop: full-bleed image with white→transparent gradient; text sits in the white area, no hard split */}
      <div className="relative hidden h-[78vh] overflow-hidden lg:mt-[260px] lg:block">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url("${HERO_IMG}")`,
            backgroundPosition: "right center",
            backgroundSize: "auto 100%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, #ffffff 30%, rgba(255,255,255,0.96) 44%, rgba(255,255,255,0.75) 56%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0) 88%)",
          }}
        />
        <div className="relative z-10 flex h-full items-start pt-[140px] pl-24 pr-8">
          {TEXT}
        </div>
      </div>

      {/* Mobile + tablet: stacked (text, then image band) */}
      <div className="lg:hidden">
        <div className="px-6 pt-80 pb-10">
          {TEXT}
        </div>
        <div
          className="h-[420px] w-full bg-contain bg-no-repeat sm:h-[600px] md:h-[760px]"
          style={{
            backgroundImage: `url("${HERO_IMG}")`,
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Yotieso Global Consulting professional"
        />
      </div>
    </section>
  );
}