import React from "react";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { useI18n } from "../i18n";
export function ContactCTA() {
  const { lang } = useI18n();
  const L: Record<string, any> = {
    en: {
      eyebrow: "Get in Touch",
      title: "Let's talk. Call, text, or send a message.",
      blurb:
        "We're here to help answer your questions and get you started. Reach out however is most convenient for you.",
      call: "Call or Text Us",
      email: "Email Us",
      hours: "Business Hours",
      schedule: "Mon-Fri: 9am - 6pm",
      saturday: "Sat: 10am - 2pm (Tax Season Only)",
      formTitle: "Send us a message",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailAddress: "Email Address",
      help: "How can we help you?",
      select: "Select a service...",
      message: "Message",
      messagePlaceholder: "Tell us a bit about what you need...",
      send: "Send Message",
      response: "We typically respond within 1 business day.",
      options: [
        ["tax", "Tax Preparation"],
        ["real-estate", "Real Estate Brokerage"],
        ["insurance", "Insurance Brokerage"],
        ["accounting", "Accounting"],
        ["loans", "Loan Services"],
        ["other", "Other / General Question"],
      ],
    },
    es: {
      eyebrow: "Ponte en Contacto",
      title: "Hablemos. Llama, envía un mensaje o escríbenos.",
      blurb:
        "Estamos aquí para responder tus preguntas y ayudarte a comenzar. Contáctanos de la manera que te resulte más conveniente.",
      call: "Llámanos o envíanos un mensaje",
      email: "Envíanos un correo",
      hours: "Horario de atención",
      schedule: "Lun-Vie: 9am - 6pm",
      saturday: "Sáb: 10am - 2pm (Solo temporada de impuestos)",
      formTitle: "Envíanos un mensaje",
      fullName: "Nombre completo",
      phoneNumber: "Número de teléfono",
      emailAddress: "Correo electrónico",
      help: "¿Cómo podemos ayudarte?",
      select: "Selecciona un servicio...",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos un poco sobre lo que necesitas...",
      send: "Enviar mensaje",
      response: "Normalmente respondemos dentro de 1 día hábil.",
      options: [
        ["tax", "Preparación de Impuestos"],
        ["real-estate", "Corretaje de Bienes Raíces"],
        ["insurance", "Corretaje de Seguros"],
        ["accounting", "Contabilidad"],
        ["loans", "Servicios de Préstamos"],
        ["other", "Otra / Pregunta general"],
      ],
    },
  }[lang];
  return (
    <section id="contact" className="py-16 sm:py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <span className="editorial-accent text-orange text-xl mb-4 block">{L.eyebrow}</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-6">{L.title}</h2>
            <p className="text-lg text-white/80 mb-12 max-w-md">{L.blurb}</p>

            <div className="space-y-8">
              <a
                href="tel:+18005550199"
                className="flex items-start gap-4 group w-full md:w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-lg p-1 md:-ml-1"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">{L.call}</p>
                  <p className="text-2xl font-display font-bold group-hover:text-orange transition-colors">
                    (800) 555-0199
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@globalprofessional.com"
                className="flex items-start gap-4 group w-full md:w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-lg p-1 md:-ml-1"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">{L.email}</p>
                  <p className="text-xl font-medium group-hover:text-orange transition-colors">
                    hello@globalprofessional.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">{L.hours}</p>
                  <p className="text-lg font-medium">{L.schedule}</p>
                  <p className="text-white/80">{L.saturday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 text-black shadow-xl">
            <h3 className="text-2xl font-display font-bold text-navy mb-6">{L.formTitle}</h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black/70 mb-1.5"
                  >
                    {L.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-cream/50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black/70 mb-1.5"
                  >
                    {L.phoneNumber}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-cream/50 focus:bg-white"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black/70 mb-1.5"
                >
                  {L.emailAddress}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-cream/50 focus:bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-black/70 mb-1.5"
                >
                  {L.help}
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-cream/50 focus:bg-white appearance-none"
                >
                  <option value="">{L.select}</option>
                  {L.options.map(([value, label]: [string, string]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black/70 mb-1.5"
                >
                  {L.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-cream/50 focus:bg-white resize-none"
                  placeholder={L.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange hover:bg-[#d95a15] text-white py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
              >
                <Send size={20} />
                {L.send}
              </button>

              <p className="text-xs text-center text-black/50 mt-4">{L.response}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
