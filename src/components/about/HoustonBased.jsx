import { Target, Lightbulb } from "lucide-react";
import { Image } from "@/components/ui/image";

const BOARDROOM =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80";

export default function HoustonBased() {
  return (
    <section className="bg-[#f4f7fa] px-6 py-24 md:px-24 lg:px-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Image
          src={BOARDROOM}
          alt="Modern boardroom"
          fittingType="fill"
          className="h-[420px] w-full rounded-2xl"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0056b3]">
            About Yotieso
          </p>
          <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase text-[#0a1a36] sm:text-4xl">
            Houston-Based. Results-Focused.
          </h2>
          <div className="mt-4 h-1 w-20 bg-[#0056b3]" />
          <p className="mt-6 leading-relaxed text-[#4a4a4a]">
            Yotieso Global Consulting LLC is a Houston-based operations and
            business support firm dedicated to helping businesses and
            independent professionals build structure, efficiency, and
            long-term stability.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-[#0056b3]/20 bg-white p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DCE4F2] text-[#333333]">
              <Target className="h-9 w-9" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-lg font-bold uppercase text-[#0a1a36]">
              Our Mission
            </h3>
          </div>
          <p className="mt-4 leading-relaxed text-[#4a4a4a]">
            To empower organizations with objective insights and practical
            solutions that elevate standards, strengthen operations, and
            drive measurable, sustainable growth.
          </p>
        </div>
        <div className="rounded-2xl border border-[#0056b3]/20 bg-white p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DCE4F2] text-[#333333]">
              <Lightbulb className="h-9 w-9" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-lg font-bold uppercase text-[#0a1a36]">
              Our Vision
            </h3>
          </div>
          <p className="mt-4 leading-relaxed text-[#4a4a4a]">
            To be a trusted partner that businesses across industries rely on
            for clarity, consistency, and the strategic foundation needed to
            thrive long-term.
          </p>
        </div>
      </div>
    </section>
  );
}