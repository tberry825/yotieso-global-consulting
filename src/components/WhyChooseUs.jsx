import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileBarChart,
  BadgeCheck,
  Smile,
  ShieldCheck,
} from "lucide-react";

const FEATURES = [
  {
    Icon: ClipboardCheck,
    title: "Objective Evaluations",
    desc: "Unbiased assessments that reveal opportunities for measurable growth.",
  },
  {
    Icon: FileBarChart,
    title: "Actionable Reporting",
    desc: "Clear, data-driven reports that turn insights into action.",
  },
  {
    Icon: BadgeCheck,
    title: "Brand Consistency",
    desc: "Ensuring your brand message is consistent, professional, and impactful.",
  },
  {
    Icon: Smile,
    title: "Customer Experience",
    desc: "Improving every touchpoint to create lasting customer satisfaction and loyalty.",
  },
  {
    Icon: ShieldCheck,
    title: "Professional Standards",
    desc: "Raising the bar with industry best practices and global standards.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#0F2D57] px-6 py-24 md:px-24 lg:px-32">
      {/* Global business texture */}
      <img
        src="https://media.base44.com/images/public/6a7b575f01624674781c5390/efde02d7d_generated_image.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14] mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(79,134,198,0.18) 0%, transparent 60%)",
        }}
      />
      {/* Header */}
      <div className="max-w-3xl text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A6BEE0]">
          Why Businesses Choose Us –
        </p>
        <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase leading-[1.25] text-white sm:text-4xl lg:text-5xl">
          Insight. Strategy. Stronger Business Outcomes
        </h2>
      </div>

      {/* Icon row */}
      <div className="mt-16 grid w-full grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
        {FEATURES.map(({ Icon, title, desc }, i) => (
          <div key={title} className="flex flex-col items-center text-center">
            <motion.div
              initial={{ x: -60, rotate: -90, opacity: 0 }}
              whileInView={{ x: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="flex h-28 w-28 items-center justify-center rounded-full bg-[#DCE4F2] text-[#0a1a36]"
            >
              <Icon className="h-12 w-12" strokeWidth={1.5} />
            </motion.div>
            <h3 className="mt-5 font-heading text-base font-bold uppercase tracking-wide text-white">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}