import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import { en } from "./en"

export const resources = { en }

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources,
    defaultNS: ["common"],
    supportedLngs: ["en"],
    returnNull: false,
    returnEmptyString: false,
    parseMissingKeyHandler: (key: string) => `No translation found for "${key}"`
  })

export default i18n
