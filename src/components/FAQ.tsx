import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
const faqs = [
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
    question: "¿Hablan español?",
    answer:
      "¡Sí! Ofrecemos asistencia completamente bilingüe. Nuestro equipo está listo para ayudarle en español con sus impuestos, préstamos, o necesidades de bienes raíces.",
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
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="resources" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-navy mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-black/70">
            Everything you need to know about working with us.
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
