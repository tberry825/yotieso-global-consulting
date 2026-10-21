import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What is Mystery Shopping?",
    a: "Mystery shopping is an objective, on-site evaluation of your business from a customer's perspective to assess service, standards, and overall experience.",
  },
  {
    q: "How long does an evaluation take?",
    a: "Most evaluations take between one and three hours on-site, depending on the scope and number of touchpoints assessed.",
  },
  {
    q: "Can services be customized for my business?",
    a: "Yes. Every engagement is tailored to your industry, goals, and operational realities.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Absolutely. We work with organizations of all sizes, including startups and small businesses building their foundation.",
  },
  {
    q: "How will I receive my reports and recommendations?",
    a: "You'll receive a detailed, professional report plus a consultation to walk through findings and recommended next steps.",
  },
];

export default function AboutFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-[#f4f7fa] px-6 py-24 md:px-24 lg:px-32">
      <div className="grid gap-12 lg:grid-cols-2">
        <h2 className="font-heading text-3xl font-extrabold uppercase text-[#0a1a36] sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {FAQS.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-heading text-base font-semibold text-[#0a1a36]">
                  {f.q}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-[#0056b3] transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-relaxed text-[#4a4a4a]">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}