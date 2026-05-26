import React from "react";
import { useI18n } from "../i18n";

export function AnnouncementBar() {
  const { lang, setLang } = useI18n();
  return (
    <div className="bg-navy text-white py-2 px-4 text-sm font-medium flex justify-between items-center">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <span>IRS-Authorized e-File Provider • Licensed in CA</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang("en")}
            className={`hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded px-1 ${lang === "en" ? "font-semibold" : ""}`}
          >
            EN
          </button>
          <span className="text-white/50">|</span>
          <button
            onClick={() => setLang("es")}
            className={`hover:text-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded px-1 ${lang === "es" ? "font-semibold" : ""}`}
          >
            ES
          </button>
        </div>
      </div>
    </div>
  );
}
