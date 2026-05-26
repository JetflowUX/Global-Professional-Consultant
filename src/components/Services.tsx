import React, { Children } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Home,
  Shield,
  Calculator,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { useI18n } from "../i18n";
const services = [
  {
    title: "Tax Preparation",
    description:
      "We file your federal and state returns and get you every credit you qualify for. Simple, accurate, and stress-free.",
    icon: FileText,
    isLead: true,
  },
  {
    title: "Real Estate Brokerage",
    description:
      "Buying or selling? We guide you through the process with transparent advice and local market expertise.",
    icon: Home,
    isLead: false,
  },
  {
    title: "Insurance Brokerage",
    description:
      "Protect your family and assets with policies tailored to your budget and needs.",
    icon: Shield,
    isLead: false,
  },
  {
    title: "Accounting",
    description:
      "Keep your small business finances organized so you can focus on growing your company.",
    icon: Calculator,
    isLead: false,
  },
  {
    title: "Loan Services",
    description:
      "Find the right financing options with clear terms and no hidden surprises.",
    icon: Landmark,
    isLead: false,
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export function Services() {
  const { lang } = useI18n();

  const translations: Record<string, any> = {
    en: {
      eyebrow: "Everything you need,",
      accent: "under one roof.",
      blurb:
        "Professional services designed for real people. We handle the paperwork so you can handle life.",
      learnMore: "Learn more",
      services: [
        {
          title: "Tax Preparation",
          description:
            "We file your federal and state returns and get you every credit you qualify for. Simple, accurate, and stress-free.",
        },
        {
          title: "Real Estate Brokerage",
          description:
            "Buying or selling? We guide you through the process with transparent advice and local market expertise.",
        },
        {
          title: "Insurance Brokerage",
          description:
            "Protect your family and assets with policies tailored to your budget and needs.",
        },
        {
          title: "Accounting",
          description:
            "Keep your small business finances organized so you can focus on growing your company.",
        },
        {
          title: "Loan Services",
          description:
            "Find the right financing options with clear terms and no hidden surprises.",
        },
      ],
    },
    es: {
      eyebrow: "Todo lo que necesitas,",
      accent: "bajo un mismo techo.",
      blurb:
        "Servicios profesionales diseñados para personas reales. Nos encargamos del papeleo para que tú te encargues de la vida.",
      learnMore: "Más información",
      services: [
        {
          title: "Preparación de Impuestos",
          description:
            "Presentamos tus declaraciones federales y estatales y obtenemos todos los créditos que te correspondan. Simple, preciso y sin estrés.",
        },
        {
          title: "Corretaje de Bienes Raíces",
          description:
            "¿Comprando o vendiendo? Te guiamos durante el proceso con asesoría transparente y experiencia en el mercado local.",
        },
        {
          title: "Corretaje de Seguros",
          description:
            "Protege a tu familia y tus bienes con pólizas adaptadas a tu presupuesto y necesidades.",
        },
        {
          title: "Contabilidad",
          description:
            "Mantén las finanzas de tu pequeña empresa organizadas para que puedas concentrarte en hacerla crecer.",
        },
        {
          title: "Servicios de Préstamos",
          description:
            "Encuentra las opciones de financiamiento adecuadas con términos claros y sin sorpresas.",
        },
      ],
    },
  };

  const L = translations[lang];

  const localizedServices = services.map((s, i) => ({
    ...s,
    title: L.services[i].title,
    description: L.services[i].description,
  }));

  const learnMoreText = L.learnMore;

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-white border-y border-navy/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-navy mb-4">
            {L.eyebrow}{" "}
            <span className="editorial-accent text-orange">{L.accent}</span>
          </h2>
          <p className="text-lg text-black/70">{L.blurb}</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {localizedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`group relative bg-cream border border-navy/10 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${service.isLead ? "md:col-span-2 lg:col-span-2 bg-navy text-white border-none" : ""}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.isLead ? "bg-orange text-white" : "bg-navy/5 text-navy group-hover:bg-orange/10 group-hover:text-orange transition-colors"}`}
                >
                  <Icon size={28} />
                </div>

                <h3
                  className={`text-2xl font-display font-bold mb-3 ${service.isLead ? "text-white" : "text-navy"}`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-lg mb-8 flex-grow ${service.isLead ? "text-white/80 max-w-full md:max-w-md" : "text-black/70"}`}
                >
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 font-medium w-fit ${service.isLead ? "text-orange hover:text-white" : "text-navy hover:text-orange"} transition-colors`}
                >
                  {learnMoreText}{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
