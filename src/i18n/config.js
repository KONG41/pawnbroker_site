import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import kr from "./kr.json";

const resources = {
	en: { translation: en },
	kr: { translation: kr }
};
const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : import.meta.env.VITE_DEFAULT_LANG;
i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: lang,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
