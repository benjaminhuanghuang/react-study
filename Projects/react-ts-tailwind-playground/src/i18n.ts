import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import type { Language } from "./types";

// Import translation files
import enUS from './languages/en-US.json';
import zhCN from './languages/zh-CN.json';
import zhTW from './languages/zh-TW.json';

// The translations
const resources = {
  enUS: { translation: enUS },
  zhCN: { translation: zhCN },
  zhTW: { translation: zhTW },
};

function isLanguage(value: any): value is Language {
  return value === "enUS" || value === "zhCN" || value === "zhTW";
}

const userLanguage: Language = isLanguage(localStorage.getItem('i18nextLng'))
  ? localStorage.getItem('i18nextLng') as Language
  : 'zhCN';// use 'zhCN' by default if not found

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: userLanguage, // Default language or user language
    fallbackLng: 'zhCN', // Use zh if the user language is not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;