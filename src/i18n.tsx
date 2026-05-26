import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "es";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay?: boolean; includedLanguages?: string },
          elementId: string,
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

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
  translatePage: (lang: Lang) => void;
}>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
  translatePage: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = window.localStorage.getItem("lang");
    return saved === "es" ? "es" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    if (window.google?.translate) {
      window.googleTranslateElementInit?.();
      return;
    }

    if (window.document.getElementById("google-translate-script")) {
      return;
    }

    window.googleTranslateElementInit = () => {
      const container = window.document.getElementById("google_translate_element");
      if (!container || !window.google?.translate) {
        return;
      }

      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false, includedLanguages: "en,es" },
        "google_translate_element",
      );

      window.setTimeout(() => {
        const select = window.document.querySelector<HTMLSelectElement>(".goog-te-combo");
        if (!select) {
          return;
        }

        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }, 0);
    };

    const script = window.document.createElement("script");
    script.id = "google-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    window.document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const select = window.document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) {
      return;
    }

    select.value = lang;
    select.dispatchEvent(new Event("change"));
  }, [lang]);

  const t = (key: string) => messages[lang][key] ?? key;

  const translatePage = (targetLang: Lang) => {
    setLang(targetLang);
    const select = window.document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) {
      return;
    }

    select.value = targetLang;
    select.dispatchEvent(new Event("change"));
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, translatePage }}>
      {children}
      <div id="google_translate_element" aria-hidden="true" className="sr-only" />
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export default I18nContext;
