import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";

export default function CTASection() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", service: "", website: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { website, ...payload } = form;
    if (website) {
      setSubmitted(true);
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await base44.entities.Consultation.create({
        ...payload,
        source: "Home CTA",
        status: "new",
      });
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or use the contact page.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 md:px-24 lg:px-32">
      {/* Dotted-map texture (right) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(#BFDBF5 1.4px, transparent 1.4px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(to right, transparent 0%, transparent 45%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, transparent 45%, black 100%)",
        }}
      />
      {/* Abstract network lines (left) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-1/2 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 47%, #BBD4F0 48%, #BBD4F0 49%, transparent 50%), linear-gradient(65deg, transparent 47%, #D6E6F7 48%, #D6E6F7 49%, transparent 50%)",
          backgroundSize: "46px 46px, 70px 70px",
          maskImage:
            "linear-gradient(to right, black 0%, transparent 55%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#5DADE2]">
          - Let&rsquo;s Grow Together -
        </p>
        <h2 className="mt-5 font-heading text-3xl font-extrabold uppercase leading-tight text-[#1B2631] sm:text-4xl lg:text-5xl">
          Ready to Elevate Your Business?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#3A4A5E] sm:text-lg">
          Partner with YOTIESO Global Consulting to uncover opportunities,
          strengthen your operations, and position your organization for
          sustainable success.
        </p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-10 inline-block rounded-md bg-[#1B2631] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#0F2D57]"
        >
          Book Your Consultation
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 40 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden"
            >
              {submitted ? (
                <div className="rounded-xl border border-[#5DADE2]/40 bg-[#EAF3FB] px-8 py-10 text-center">
                  <h3 className="font-heading text-xl font-bold uppercase text-[#1B2631]">
                    Thank You
                  </h3>
                  <p className="mt-3 text-sm text-[#3A4A5E]">
                    Your request has been received. A YOTIESO consultant will
                    reach out shortly to schedule your consultation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto max-w-xl rounded-xl border border-black/10 bg-white/80 p-8 text-left shadow-[0_8px_30px_rgba(15,45,87,0.08)] backdrop-blur"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1B2631]">
                        Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm text-[#1B2631] outline-none transition focus:border-[#5DADE2] focus:ring-2 focus:ring-[#5DADE2]/30"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1B2631]">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm text-[#1B2631] outline-none transition focus:border-[#5DADE2] focus:ring-2 focus:ring-[#5DADE2]/30"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1B2631]">
                      Service Interest
                    </label>
                    <input
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      placeholder="e.g. Operations, Strategy, Brand"
                      className="w-full rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm text-[#1B2631] outline-none transition focus:border-[#5DADE2] focus:ring-2 focus:ring-[#5DADE2]/30"
                    />
                  </div>
                  {/* Honeypot anti-spam field — hidden from real users */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />
                  {error && (
                    <p className="mt-4 text-sm text-red-600">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 w-full rounded-md bg-[#1B2631] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#0F2D57] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Request Consultation"}
                  </button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}