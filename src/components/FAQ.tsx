import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../i18n";

export function FAQ() {
  const { lang, t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsByLang: Record<string, any[]> = {
    en: [
      {
        question: "Do I have to come into an office?",
        answer:
          "Not at all! 97% of our clients work with us entirely remotely. You can upload your documents through our secure Client Portal, and we can communicate via phone, text, or email—whatever is easiest for you.",
      },
      {
        question: "Is uploading my documents safe?",
        answer:
          "Yes. Our Client Portal uses bank-level encryption to ensure your personal information and documents are completely secure. It's much safer than sending documents via regular email.",
      },
      {
        question: "Do you speak Spanish?",
        answer:
          "Yes! We offer fully bilingual support. Our team is ready to assist you in Spanish with taxes, loans, or real estate needs.",
      },
      {
        question: "What if I owe money to the IRS?",
        answer:
          "Don't panic. We will review your situation to ensure every possible deduction was taken. If you still owe, we can help you understand your options, including setting up a payment plan with the IRS.",
      },
      {
        question: "How long does my return take?",
        answer:
          "Once we have all your documents, we typically prepare your return within 3-5 business days. The IRS usually issues refunds within 21 days for e-filed returns.",
      },
      {
        question: "Can you help if I haven't filed in years?",
        answer:
          "Absolutely. We help many clients catch up on unfiled returns. We'll guide you through gathering the necessary documents and get you back on track without judgment.",
      },
      {
        question: "How do you charge for real estate/insurance/loans?",
        answer:
          "These services are quoted free of charge based on your needs. For real estate and loans, we typically earn a commission from the transaction at closing, not an upfront fee from you. We will always explain exactly how we are compensated before you commit to anything.",
      },
    ],
    es: [
      {
        question: "¿Tengo que ir a una oficina?",
        answer:
          "¡Para nada! El 97% de nuestros clientes trabajan con nosotros completamente de forma remota. Puedes subir tus documentos a través de nuestro Portal Seguro y comunicarnos por teléfono, texto o correo electrónico — lo que te sea más conveniente.",
      },
      {
        question: "¿Es seguro subir mis documentos?",
        answer:
          "Sí. Nuestro Portal del Cliente utiliza cifrado a nivel bancario para garantizar que tu información personal y documentos estén completamente seguros. Es mucho más seguro que enviar documentos por correo electrónico común.",
      },
      {
        question: "¿Hablan español?",
        answer:
          "¡Sí! Ofrecemos asistencia completamente bilingüe. Nuestro equipo está listo para ayudarte en español con tus impuestos, préstamos o necesidades de bienes raíces.",
      },
      {
        question: "¿Qué pasa si le debo dinero al IRS?",
        answer:
          "No entres en pánico. Revisaremos tu situación para asegurar que se tomaron todas las deducciones posibles. Si aún debes, podemos ayudarte a entender tus opciones, incluyendo establecer un plan de pago con el IRS.",
      },
      {
        question: "¿Cuánto tiempo tarda mi declaración?",
        answer:
          "Una vez que tengamos todos tus documentos, normalmente preparamos tu declaración en 3-5 días hábiles. El IRS suele emitir reembolsos dentro de 21 días para declaraciones electrónicas.",
      },
      {
        question:
          "¿Pueden ayudar si no he presentado declaraciones durante años?",
        answer:
          "Absolutamente. Ayudamos a muchos clientes a ponerse al día con declaraciones no presentadas. Te guiaremos para recopilar los documentos necesarios y te pondremos al día sin juicios.",
      },
      {
        question: "¿Cómo cobran por bienes raíces/seguros/préstamos?",
        answer:
          "Estos servicios se cotizan sin cargo según tus necesidades. Para bienes raíces y préstamos, normalmente ganamos una comisión de la transacción al cierre, no una tarifa por adelantado. Siempre explicaremos exactamente cómo nos compensamos antes de que te comprometas.",
      },
    ],
  };

  const faqs = faqsByLang[lang] || faqsByLang.en;

  return (
    <section id="resources" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-navy mb-4">
            {lang === "es" ? "Preguntas Frecuentes" : "Common Questions"}
          </h2>
          <p className="text-lg text-black/70">
            {lang === "es"
              ? "Todo lo que necesitas saber sobre trabajar con nosotros."
              : "Everything you need to know about working with us."}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-navy/10 rounded-xl overflow-hidden bg-cream/50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-navy text-lg pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-orange shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="px-6 pb-5 text-black/80 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
