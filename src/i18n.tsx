import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "es";

const messages: Record<Lang, Record<string, string>> = {
  en: {
    services: "Services",
    howItWorks: "How It Works",
    about: "About",
    resources: "Resources",
    contact: "Contact",
    call: "Call:",
    clientPortal: "Client Portal",
    dontTakeOurWord: "Don't just take our word for it.",
    hearFromClients:
      "Hear from real clients who trust us with their financial decisions.",
  },
  es: {
    services: "Servicios",
    howItWorks: "Cómo Funciona",
    about: "Acerca",
    resources: "Recursos",
    contact: "Contacto",
    call: "Llamar:",
    clientPortal: "Portal del Cliente",
    dontTakeOurWord: "No te fíes solo de nuestra palabra.",
    hearFromClients:
      "Escucha a clientes reales que confían en nosotros con sus decisiones financieras.",
  },
};

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = window.localStorage.getItem("lang");
    return saved === "es" ? "es" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (key: string) => messages[lang][key] ?? key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export default I18nContext;
