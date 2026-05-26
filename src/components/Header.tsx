import React, { useState } from "react";
import { Menu, X, Upload } from "lucide-react";
import { useI18n } from "../i18n";
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useI18n();
  const navLinks = [
    { name: t("services"), href: "#services" },
    { name: t("howItWorks"), href: "#how-it-works" },
    { name: t("about"), href: "#about" },
    { name: t("resources"), href: "#resources" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <header className="bg-cream sticky top-0 z-50 border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded font-display font-bold text-xl">
              GP
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-navy leading-tight text-sm md:text-lg">
                Global Professional
              </span>
              <span className="font-display font-bold text-navy leading-tight text-sm md:text-lg">
                Consultant
              </span>
            </div>
          </div>

          {/* Desktop Nav (show on large screens only) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black hover:text-orange font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions (show on large screens only) */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+18005550199"
              className="font-medium text-navy hover:text-orange transition-colors"
            >
              (800) 555-0199
            </a>
            <button className="bg-orange hover:bg-[#d95a15] text-white px-6 py-2.5 rounded font-medium flex items-center gap-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cream shadow-sm">
              <Upload size={18} />
              {t("clientPortal")}
            </button>
          </div>

          {/* Mobile menu button (visible until large screens) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy hover:text-orange p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-cream border-t border-navy/10 relative w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-black hover:text-orange hover:bg-navy/5 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-6 pt-6 border-t border-navy/10 flex flex-col gap-4 px-3">
              <a
                href="tel:+18005550199"
                className="text-lg font-medium text-navy"
              >
                {t("call")} (800) 555-0199
              </a>
              <button className="bg-orange text-white px-4 py-3 rounded font-medium flex items-center justify-center gap-2 w-full">
                <Upload size={20} />
                {t("clientPortal")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
