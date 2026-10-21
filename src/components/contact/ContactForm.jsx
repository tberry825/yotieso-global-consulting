import { useState } from "react";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { base44 } from "@/api/base44Client";

const INFO = [
  {
    Icon: MapPin,
    label: "Location",
    value: "10924 Grant Rd #569, Houston, TX 77070 | Remote",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "mgiddens@yotiesoglobalconsulting.com",
  },
  { Icon: Phone, label: "Phone", value: "346.517.2921" },
  { Icon: Clock, label: "Hours", value: "Mon – Fri · 9:00am – 6:00pm CT" },
];

const SERVICES = [
  "Mystery Shopping Evaluations",
  "Brand Experience Consulting",
  "Operational Standards Reviews",
  "Cleanliness & Visual Inspection",
  "Exterior Presentation",
  "Custom Consulting Solutions",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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
        source: "Contact Page",
        status: "new",
      });
      setSubmitted(true);
    } catch (err) {
      setError(
        "Something went wrong sending your message. Please try again or email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm text-[#1B2631] outline-none transition focus:border-[#5DADE2] focus:ring-2 focus:ring-[#5DADE2]/30";

  return (
    <section className="relative overflow-hidden bg-[#EAF3FB] px-6 pt-64 pb-24 md:px-24 lg:px-32">
      {/* Dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(#BFDBF5 1.4px, transparent 1.4px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 100%)",
        }}
      />
      {/* Soft navy radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 50% at 20% 30%, rgba(15,45,87,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="mt-[100px] text-sm font-semibold uppercase tracking-[0.22em] text-[#4F86C6]">
          Contact Yotieso
        </p>
        <h2 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold uppercase leading-[1.3] text-[#0F2D57] sm:text-5xl lg:text-6xl">
          Let&rsquo;s Build Something Stronger Together
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#3A4A5E] sm:text-lg">
          Have a question or ready to get started? Reach out and a Yotieso
          consultant will follow up to schedule your consultation.
        </p>
        <div className="mt-10 h-1 w-20 bg-[#4F86C6]" />

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Info cards */}
          <div className="space-y-5">
            {INFO.map(({ Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0056b3]/10 text-[#0056b3]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#0a1a36]">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-[#4a4a4a]">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex items-center justify-center rounded-2xl border border-[#5DADE2]/40 bg-[#EAF3FB] p-12 text-center">
              <div>
                <h3 className="font-heading text-xl font-bold uppercase text-[#1B2631]">
                  Thank You
                </h3>
                <p className="mt-3 text-sm text-[#3A4A5E]">
                  Your message has been received. A YOTIESO consultant will
                  reach out shortly.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_8px_30px_rgba(15,45,87,0.06)]"
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
                    className={inputCls}
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
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1B2631]">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1B2631]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us a bit about your business and what you're looking for…"
                  className={inputCls}
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
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}