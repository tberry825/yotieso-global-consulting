import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://media.base44.com/images/public/user_69603cc03ae9b76f3be0c533/28553dd7a_Screenshot2026-05-27at80318PM-Edited.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Brand bar */}
      <div
        className={cn(
          "flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] bg-white/90 backdrop-blur-xl border-b border-black/5",
          scrolled ? "pt-1 pb-2" : "pt-5 pb-5"
        )}
      >
        <Link
          to="/"
          className={cn(
            "transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
            scrolled ? "scale-90" : "scale-100"
          )}
        >
          <img
            src={LOGO_URL}
            alt="Yotieso Global Consulting logo"
            className={cn(
              "object-contain transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
              scrolled ? "h-24" : "h-48"
            )}
          />
        </Link>
      </div>

      {/* Navigation bar */}
      <nav
        aria-label="Primary"
        className={cn(
          "bg-[#0F2D57] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
          scrolled
            ? "bg-[#0F2D57]/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,45,87,0.25)]"
            : "bg-[#0F2D57]"
        )}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 lg:px-10">
          {/* Desktop nav */}
          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path} className="group relative py-4">
                  <Link
                    to={link.path}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-300",
                      active
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                  <span
                    className={cn(
                      "absolute -bottom-px left-0 h-[3px] bg-white transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </li>
              );
            })}
          </ul>

          {/* CTA (desktop) */}
          <Link
            to="/contact"
            className="absolute right-6 hidden rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2D57] transition-all duration-300 hover:bg-[#4F86C6] hover:text-white lg:right-10 md:inline-block"
          >
            Book Consultation
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center justify-center p-2 text-white md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-all duration-300",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-all duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-all duration-300",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "overflow-hidden bg-[#0F2D57] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden",
            mobileOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <ul className="flex flex-col px-6 pb-6 pt-2">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path} className="border-b border-white/10 last:border-0">
                  <Link
                    to={link.path}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block py-4 text-sm font-medium uppercase tracking-[0.18em] transition-colors",
                      active ? "text-white" : "text-white/75"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <Link
                to="/contact"
                className="block rounded-full bg-white px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#0F2D57]"
              >
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}