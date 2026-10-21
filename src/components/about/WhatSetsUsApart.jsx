import { Search, Briefcase, Lightbulb, FileText } from "lucide-react";

const CARDS = [
  {
    Icon: Search,
    title: ["Objective", "Analysis"],
    desc: "Unbiased evaluations that reveal real opportunities for improvement.",
  },
  {
    Icon: Briefcase,
    title: ["Industry", "Expertise"],
    desc: "Deep knowledge across sectors, tailored to your context.",
  },
  {
    Icon: Lightbulb,
    title: ["Actionable", "Recommendations"],
    desc: "Clear, practical steps you can implement right away.",
  },
  {
    Icon: FileText,
    title: ["Professional", "Reporting"],
    desc: "Detailed, polished reports that drive informed decisions.",
  },
];

export default function WhatSetsUsApart() {
  return (
    <section className="bg-[#0a1a36] px-6 py-24 md:px-24 lg:px-32">
      <h2 className="text-center font-heading text-3xl font-extrabold uppercase text-white sm:text-4xl">
        What Sets Us Apart
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 bg-[#0056b3]" />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-[#0056b3]/40 bg-white p-7 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DCE4F2] text-[#0a1a36]">
              <Icon className="h-8 w-8" />
            </div>
            <h3 className="mt-5 text-center font-heading text-base font-bold uppercase leading-tight tracking-wide text-[#0a1a36] sm:text-[13px]">
              {title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4a4a4a]">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}