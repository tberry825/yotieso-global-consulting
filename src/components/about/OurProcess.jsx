import { Search, ClipboardCheck, BarChart3, Lightbulb, Headphones } from "lucide-react";

const STEPS = [
  { Icon: Search, title: "Discovery", desc: "We learn your business, goals, and challenges." },
  { Icon: ClipboardCheck, title: "Evaluation", desc: "On-site or remote assessment of your operations." },
  { Icon: BarChart3, title: "Analysis", desc: "We analyze findings against industry benchmarks." },
  { Icon: Lightbulb, title: "Recommendations", desc: "Actionable, prioritized recommendations delivered." },
  { Icon: Headphones, title: "Support", desc: "Ongoing guidance to implement and sustain change." },
];

export default function OurProcess() {
  return (
    <section className="bg-white px-6 py-24 md:px-24 lg:px-32">
      <h2 className="text-center font-heading text-3xl font-extrabold uppercase text-[#0a1a36] sm:text-4xl">
        Our Process
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 bg-[#0056b3]" />

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-[#0056b3]/30 lg:block" />
        <div className="grid gap-10 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0056b3] bg-[#DCE4F2] text-[#0a1a36]">
                <s.Icon className="h-7 w-7" />
              </div>
              <div className="mx-auto mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#0056b3] text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 font-heading text-sm font-bold uppercase text-[#0a1a36]">
                {s.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[14rem] text-xs leading-relaxed text-[#4a4a4a]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}