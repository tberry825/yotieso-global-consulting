import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const CONSENT_KEY = "ygc_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  const handle = (choice) => {
    localStorage.setItem(CONSENT_KEY, choice);
    localStorage.setItem(CONSENT_KEY + "_at", new Date().toISOString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 rounded-2xl border border-white/10 bg-[#0F2D57] p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-6 w-6 shrink-0 text-[#5DADE2]" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-white/85">
            We use cookies to improve your experience and analyze site traffic. By
            continuing, you agree to our use of cookies. See our{" "}
            <Link to="/cookie-policy" className="font-semibold text-[#5DADE2] underline hover:text-white">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="font-semibold text-[#5DADE2] underline hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => handle("declined")}
            className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handle("accepted")}
            className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wide text-[#0F2D57] transition-colors hover:bg-[#5DADE2] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Accept
          </button>
          <button
            type="button"
            aria-label="Close cookie banner"
            onClick={() => handle("dismissed")}
            className="rounded-full p-1.5 text-white/85 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}