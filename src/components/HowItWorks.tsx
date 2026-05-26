import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";

export function HowItWorks() {
  const { lang } = useI18n();

  const stepsByLang: Record<string, any[]> = {
    en: [
      {
        num: "01",
        title: "Reach out",
        description:
          "Call, text, or email us. We speak plain English (y Español) and are ready to listen to your needs.",
      },
      {
        num: "02",
        title: "Upload securely",
        description:
          "Snap a photo of your documents with your phone and upload them to our secure Client Portal.",
      },
      {
        num: "03",
        title: "We prepare",
        description:
          "Our experts review your files, ask any necessary questions, and prepare everything accurately.",
      },
      {
        num: "04",
        title: "You approve",
        description:
          "Review the final documents online, sign digitally, and we handle the filing or finalizing.",
      },
    ],
    es: [
      {
        num: "01",
        title: "Contacta",
        description:
          "Llama, envía un mensaje de texto o un correo electrónico. Hablamos español e inglés y estamos listos para escuchar tus necesidades.",
      },
      {
        num: "02",
        title: "Sube de forma segura",
        description:
          "Toma una foto de tus documentos con tu teléfono y súbelos a nuestro portal seguro.",
      },
      {
        num: "03",
        title: "Nosotros preparamos",
        description:
          "Nuestros expertos revisan tus archivos, hacen las preguntas necesarias y preparan todo con precisión.",
      },
      {
        num: "04",
        title: "Tú apruebas",
        description:
          "Revisa los documentos finales en línea, firma digitalmente y nosotros nos encargamos del envío o la finalización.",
      },
    ],
  };

  const steps = stepsByLang[lang] || stepsByLang.en;

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="editorial-accent text-orange text-xl mb-4 block">
            Simple Process
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-navy mb-6">
            You don't need to drive across town.
          </h2>
          <p className="text-lg text-black/70">
            We've built our entire process around making things easy for you, no
            matter where you are.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-navy/10 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
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
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full border-4 border-cream shadow-sm flex items-center justify-center mb-6 z-10">
                  <span className="font-display font-bold text-xl md:text-3xl text-navy">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-black/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
