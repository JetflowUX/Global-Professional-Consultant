import React from "react";
import { useI18n } from "../i18n";
export function Footer() {
  const { lang } = useI18n();
  const L: Record<string, any> = {
    en: {
      aboutTitle: "About",
      servicesTitle: "Services",
      contactTitle: "Contact",
      services: [
        "Tax Preparation",
        "Real Estate Brokerage",
        "Insurance Brokerage",
        "Accounting",
        "Loan Services",
      ],
      company: [
        "How It Works",
        "About Us",
        "FAQ & Resources",
        "Client Portal Login",
        "Contact",
      ],
      policies: ["Privacy Policy", "Terms of Service"],
      rights: "© 2024 Global Professional Consultant. All rights reserved.",
    },
    es: {
      aboutTitle: "Acerca",
      servicesTitle: "Servicios",
      contactTitle: "Contacto",
      services: [
        "Preparación de Impuestos",
        "Corretaje de Bienes Raíces",
        "Corretaje de Seguros",
        "Contabilidad",
        "Servicios de Préstamos",
      ],
      company: [
        "Cómo Funciona",
        "Sobre Nosotros",
        "Preguntas y Recursos",
        "Acceso al Portal del Cliente",
        "Contacto",
      ],
      policies: ["Política de Privacidad", "Términos del Servicio"],
      rights:
        "© 2024 Global Professional Consultant. Todos los derechos reservados.",
    },
  }[lang];

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
            <h4 className="font-display font-bold text-lg mb-6">
              {L.servicesTitle}
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              {L.services.map((label: string) => (
                <li key={label}>
                  <a href="#" className="hover:text-orange transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">{L.aboutTitle}</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {L.company.map((label: string, index: number) => {
                const href = ["#how-it-works", "#about", "#resources", "#", "#contact"][index];
                return (
                  <li key={label}>
                    <a href={href} className="hover:text-orange transition-colors">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact & Disclosures */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">
              {L.contactTitle}
            </h4>
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
          <p>{L.rights}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              {L.policies[0]}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {L.policies[1]}
            </a>
            <span className="text-white/20">|</span>
            <span>{lang === "es" ? "Hablamos Español" : "We speak Spanish"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
