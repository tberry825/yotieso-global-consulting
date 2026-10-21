import { Link } from "react-router-dom";

const BG_URL =
  "https://media.base44.com/videos/public/6a7b575f01624674781c5390/98624048d_Globe_No_Sparkles.mp4";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-start overflow-hidden bg-[#0F2D57] md:items-end">
      {/* Globe video — full-bleed space background, widened + left-anchored so the globe shifts right (no seam) */}
      <video
        src={BG_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute left-0 top-0 -z-20 h-full w-[150%] max-w-none object-cover object-center"
      />
      {/* Readability gradient — dark on the left where text sits (stronger on mobile for contrast) */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0F2D57] via-[#0F2D57]/90 to-[#0F2D57]/30 md:via-[#0F2D57]/80 md:to-transparent"
        aria-hidden="true"
      />

      {/* Text */}
      <div className="relative z-10 w-full px-6 pb-16 pt-80 md:px-24 md:pb-24 md:pt-0 lg:px-32">
        <div className="max-w-2xl text-left">
          <h1 className="font-heading text-3xl font-extrabold uppercase leading-[1.25] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Elevating Business Standards Through{" "}
            <span className="text-[#4F86C6] sm:whitespace-nowrap">Strategic Excellence</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            Empowering organizations through innovation, operational excellence,
            and global solutions.
          </p>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block rounded bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#1D2C4D] transition-all duration-300 hover:bg-[#4F86C6] hover:text-white"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}