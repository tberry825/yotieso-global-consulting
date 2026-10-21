import { Facebook, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
const SOCIALS = [
  {
    label: "Facebook",
    Icon: Facebook,
    href: "https://www.facebook.com/people/Yotieso-Global-Consulting-LLC/61593509905615/",
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms of Service", path: "/terms" },
  { label: "Cookie Policy", path: "/cookie-policy" },
  { label: "Accessibility", path: "/accessibility" },
];

const COMPANY_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#152B46] px-6 py-16 md:px-24 lg:px-32" aria-label="Site footer">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-2">
          <Image
            src="https://media.base44.com/images/public/6a7b575f01624674781c5390/c99cb2e7f_Yotieso_dark_logo.png"
            alt="YOTIESO Global Consulting"
            fittingType="contain"
            className="h-16 w-56 sm:h-20 sm:w-64"
          />
          <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/60">
            A Texas Limited Liability Company
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Global consulting that helps you uncover opportunities,
            strengthen operations, and position your organization for
            sustainable success.
          </p>
          {/* Social */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Follow Us
            </span>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/85 transition-all duration-300 hover:border-[#5DADE2] hover:bg-[#5DADE2] hover:text-[#0F2D57]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Company column */}
        <div className="lg:pt-[92px]">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">
            Company
          </h3>
          <ul className="mt-5 space-y-3">
            {COMPANY_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal column */}
        <div className="lg:pt-[92px]">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/90">
            Legal
          </h3>
          <ul className="mt-5 space-y-3">
            {LEGAL_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact strip + copyright */}
      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
        <span className="flex items-center gap-2 text-xs text-white/70">
          <MapPin className="h-4 w-4 text-[#5DADE2]" aria-hidden="true" />
          10924 Grant Rd #569, Houston, TX 77070
        </span>
        <span className="flex items-center gap-2 text-xs text-white/70">
          <Phone className="h-4 w-4 text-[#5DADE2]" aria-hidden="true" />
          346.517.2921
        </span>
        <span className="flex items-center gap-2 text-xs text-white/70">
          <Mail className="h-4 w-4 text-[#5DADE2]" aria-hidden="true" />
          mgiddens@yotiesoglobalconsulting.com
        </span>
        <p className="text-xs text-white/70">
          © 2026 Yotieso Global Consulting LLC. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}