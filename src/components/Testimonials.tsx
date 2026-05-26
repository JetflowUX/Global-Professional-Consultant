import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useI18n } from "../i18n";
const testimonials = [
  {
    quote:
      "I was so nervous about my taxes this year, but the online portal made it incredibly easy. I just took pictures of my W-2s and they handled the rest. Highly recommend!",
    name: "Maria S.",
    location: "Los Angeles, CA",
    service: "Tax Preparation",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "As a first-time homebuyer, I had a million questions. They were patient, explained everything in plain English, and helped me secure a great loan.",
    name: "David L.",
    location: "Houston, TX",
    service: "Loan Services",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Running a small business is hard enough without worrying about bookkeeping. Their accounting service is affordable and gives me peace of mind every month.",
    name: "Elena R.",
    location: "Miami, FL",
    service: "Accounting",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

export function Testimonials() {
  const { t, lang } = useI18n();

  const testimonialTranslations: Record<string, string[]> = {
    en: [testimonials[0].quote, testimonials[1].quote, testimonials[2].quote],
    es: [
      "Estaba tan nerviosa por mis impuestos este año, pero el portal en línea lo hizo increíblemente fácil. Simplemente tomé fotos de mis W-2 y ellos se encargaron del resto. ¡Lo recomiendo mucho!",
      "Como comprador de vivienda por primera vez, tenía un millón de preguntas. Fueron pacientes, me explicaron todo en un lenguaje sencillo y me ayudaron a conseguir un excelente préstamo.",
      "Llevar un pequeño negocio es bastante difícil sin preocuparse por la contabilidad. Su servicio contable es asequible y me da tranquilidad cada mes.",
    ],
  };

  const localized = testimonials.map((item, i) => ({
    ...item,
    quote: testimonialTranslations[lang]?.[i] ?? item.quote,
  }));

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-navy mb-6">
            {t("dontTakeOurWord")}
          </h2>
          <p className="text-lg text-black/70">{t("hearFromClients")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {localized.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
              className="bg-cream p-6 md:p-8 rounded-2xl border border-navy/5 flex flex-col h-full"
            >
              <div className="flex gap-1 text-orange mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-black/80 text-xl md:text-lg leading-relaxed mb-6 flex-grow italic">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-navy/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-display font-semibold text-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-black/60">
                    {testimonial.location} • {testimonial.service}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
