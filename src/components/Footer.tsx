import React from "react";
export function Footer() {
  return (
    <footer className="bg-black text-white pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded font-display font-bold text-xl">
                GP
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white leading-tight">
                  Global Professional
                </span>
                <span className="font-display font-bold text-white leading-tight">
                  Consultant
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Trusted Advisory Solutions. Professional tax, real estate, and
              financial services designed for real people.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-orange transition-colors">
                  Tax Preparation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange transition-colors">
                  Real Estate Brokerage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange transition-colors">
                  Insurance Brokerage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange transition-colors">
                  Accounting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange transition-colors">
                  Loan Services
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-orange transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-orange transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="hover:text-orange transition-colors"
                >
                  FAQ & Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange transition-colors">
                  Client Portal Login
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-orange transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Disclosures */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70 mb-8">
              <li>(800) 555-0199</li>
              <li>hello@globalprofessional.com</li>
            </ul>

            <div className="space-y-2 text-xs text-white/40">
              <p>IRS PTIN: P12345678</p>
              <p>CA DRE: #01234567</p>
              <p>NMLS: #1234567</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Global Professional Consultant
            Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="text-white/20">|</span>
            <span>Hablamos Español</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
