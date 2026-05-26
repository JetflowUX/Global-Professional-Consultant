import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";

const statsBase = [
  { value: "10+", key: "years" },
  { value: "2,500+", key: "clients" },
  { value: "$3M+", key: "refunds" },
  { value: "2", key: "languages" },
];

export function TrustStats() {
  const { lang } = useI18n();
  const labels: Record<string, Record<string, string>> = {
    en: {
      years: "Years in Business",
      clients: "Clients Served",
      refunds: "Refunds Secured",
      languages: "Languages Spoken",
    },
    es: {
      years: "Años en el negocio",
      clients: "Clientes atendidos",
      refunds: "Reembolsos asegurados",
      languages: "Idiomas hablados",
    },
  };
  const stats = statsBase.map((s) => ({ ...s, label: labels[lang][s.key] }));

  return (
    <section className="py-20 bg-cream border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-2">
                {stat.value}
              </div>
              <div className="editorial-accent text-black/70 text-lg md:text-xl">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
