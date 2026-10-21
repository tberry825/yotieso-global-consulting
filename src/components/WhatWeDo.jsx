import { Image } from "@/components/ui/image";

const IMG_URL =
  "https://media.base44.com/images/public/6a7b575f01624674781c5390/fe79844f3_generated_image.png";

export default function WhatWeDo() {
  return (
    <section className="bg-[#EAF3FB] px-6 py-24 md:px-24 lg:px-32">
      <div className="grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={IMG_URL}
            alt="Global consulting — modern corporate strategy"
            className="h-full w-full"
          />
        </div>

        {/* Text */}
        <div className="text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4F86C6]">
            What We Do
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[1.25] text-[#0F2D57] sm:text-4xl lg:text-5xl">
            Driving Excellence Delivering Results
          </h2>
          <div className="mt-6 h-px w-24 bg-[#0F2D57]/40" />
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#334E68] sm:text-lg">
            YOTIESO Global Consulting helps businesses strengthen operational
            excellence, elevate brand presentation, and optimize customer
            experience through comprehensive strategic evaluations and
            actionable business insights.
          </p>
        </div>
      </div>
    </section>
  );
}