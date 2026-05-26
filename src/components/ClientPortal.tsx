import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Smartphone,
  FolderOpen,
  Clock,
  UploadCloud,
  File,
  Check,
} from "lucide-react";
import { useI18n } from "../i18n";
export function ClientPortal() {
  const { lang } = useI18n();

  const L: Record<string, any> = {
    en: {
      eyebrow: "The Client Portal",
      title: "A secure place for your documents.",
      blurb:
        "No fax machines. No driving across town. Just snap a picture with your phone or upload a PDF, and we'll take it from there.",
      items: [
        "Bank-level encryption keeps your data safe",
        "100% mobile-friendly — use it from anywhere",
        "Documents neatly organized by tax year",
        "Accessible 24/7 whenever you need them",
      ],
      openPortal: "Open Client Portal",
      uploadHeading: "Upload Documents",
      taxYear: "Tax Year 2023",
      tapToUpload: "Tap to upload",
      dragDrop: "or drag and drop files here",
      uploadedFiles: "Uploaded Files",
      submit: "Submit Documents",
    },
    es: {
      eyebrow: "El Portal del Cliente",
      title: "Un lugar seguro para tus documentos.",
      blurb:
        "Sin faxes. Sin tener que desplazarte. Simplemente toma una foto con tu teléfono o sube un PDF, y nos encargamos del resto.",
      items: [
        "Cifrado a nivel bancario para mantener tus datos seguros",
        "100% compatible con dispositivos móviles — úsalo desde cualquier lugar",
        "Documentos organizados por año fiscal",
        "Accesible 24/7 cuando lo necesites",
      ],
      openPortal: "Abrir Portal del Cliente",
      uploadHeading: "Subir Documentos",
      taxYear: "Año Fiscal 2023",
      tapToUpload: "Toca para subir",
      dragDrop: "o arrastra y suelta archivos aquí",
      uploadedFiles: "Archivos Subidos",
      submit: "Enviar Documentos",
    },
  }[lang];

  return (
    <section className="py-16 sm:py-24 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span className="editorial-accent text-orange text-xl mb-4 block">
              {L.eyebrow}
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              {L.title}
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              {L.blurb}
            </p>

            <ul className="space-y-6 mb-12">
              {L.items.map((text: string, i: number) => {
                const item = [ShieldCheck, Smartphone, FolderOpen, Clock][i];
                const Icon = item;
                return (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-white/10 p-2 rounded-lg text-orange">
                      <Icon size={20} />
                    </div>
                    <span className="text-lg text-white/90">{text}</span>
                  </li>
                );
              })}
            </ul>

            <button className="bg-orange hover:bg-[#d95a15] text-white px-8 py-4 rounded font-medium text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
              <UploadCloud size={20} />
              {L.openPortal}
            </button>
          </motion.div>

          {/* Right Content - UI Mockup */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:mx-0"
          >
            {/* Phone Frame */}
            <div className="bg-white rounded-[3rem] p-4 shadow-2xl border-8 border-black/20 relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-black/20 rounded-b-3xl"></div>

              {/* Screen */}
              <div className="bg-cream rounded-[2rem] h-[520px] md:h-[600px] overflow-hidden flex flex-col border border-navy/5">
                {/* App Header */}
                <div className="bg-white p-6 pt-10 border-b border-navy/5">
                  <h3 className="font-display font-bold text-navy text-xl">
                    {L.uploadHeading}
                  </h3>
                  <p className="text-sm text-black/60">{L.taxYear}</p>
                </div>

                {/* App Body */}
                <div className="p-6 flex-1 flex flex-col gap-4 overflow-y-auto">
                  {/* Drag Zone */}
                  <div className="border-2 border-dashed border-orange/30 bg-orange/5 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange shadow-sm">
                      <UploadCloud size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-navy text-sm">
                        {L.tapToUpload}
                      </p>
                      <p className="text-xs text-black/50">{L.dragDrop}</p>
                    </div>
                  </div>

                  {/* File List */}
                  <div className="mt-4 space-y-3">
                    <p className="text-xs font-bold text-black/40 uppercase tracking-wider">
                      {L.uploadedFiles}
                    </p>

                    {/* File Card 1 */}
                    <div className="bg-white p-3 rounded-lg border border-navy/5 flex items-center gap-3 shadow-sm">
                      <div className="w-10 h-10 bg-red/10 text-red rounded flex items-center justify-center">
                        <File size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-navy truncate">
                          W-2_Employer.pdf
                        </p>
                        <div className="w-full bg-navy/5 h-1.5 rounded-full mt-2">
                          <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                        </div>
                      </div>
                      <div className="text-green-500">
                        <Check size={18} />
                      </div>
                    </div>

                    {/* File Card 2 */}
                    <div className="bg-white p-3 rounded-lg border border-navy/5 flex items-center gap-3 shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
                        <File size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-navy truncate">
                          ID_Front.jpg
                        </p>
                        <div className="w-full bg-navy/5 h-1.5 rounded-full mt-2">
                          <div className="bg-orange h-1.5 rounded-full w-[60%]"></div>
                        </div>
                      </div>
                      <p className="text-xs font-medium text-black/50">60%</p>
                    </div>
                  </div>
                </div>

                {/* App Footer */}
                <div className="bg-white p-4 border-t border-navy/5">
                  <button className="w-full bg-navy text-white py-3 rounded-lg font-medium text-sm">
                    {L.submit}
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] md:w-[120%] h-[180%] md:h-[120%] bg-orange/20 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
