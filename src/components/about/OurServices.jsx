import {
  ShoppingCart,
  Award,
  ClipboardCheck,
  Sparkles,
  Building2,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    Icon: ShoppingCart,
    title: "Mystery Shopping Evaluations",
    desc: "Objective, on-site evaluations that reveal the real customer experience.",
  },
  {
    Icon: Award,
    title: "Brand Experience Consulting",
    desc: "Align every touchpoint with a consistent, premium brand standard.",
  },
  {
    Icon: ClipboardCheck,
    title: "Operational Standards Reviews",
    desc: "Assess processes and procedures to improve efficiency and consistency.",
  },
  {
    Icon: Sparkles,
    title: "Cleanliness & Visual Inspection",
    desc: "Detailed inspections ensuring your space reflects your standards.",
  },
  {
    Icon: Building2,
    title: "Exterior Presentation",
    desc: "Evaluate curb appeal and exterior presentation for maximum impact.",
  },
  {
    Icon: Settings,
    title: "Custom Consulting Solutions",
    desc: "Tailored engagements built around your unique business needs.",
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#f4f7fa] px-6 py-24 md:px-24 lg:px-32">
      <h2 className="text-center font-heading text-3xl font-extrabold uppercase text-[#0a1a36] sm:text-4xl">
        Our Services
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 bg-[#0056b3]" />
      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
        {SERVICES.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-black/5 bg-white p-7 transition hover:shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DCE4F2] text-[#0a1a36]">
              <Icon className="h-8 w-8" />
            </div>
            <h3 className="mt-5 font-heading text-base font-bold uppercase text-[#0a1a36]">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4a4a4a]">{desc}</p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0056b3] transition-all hover:gap-2"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}