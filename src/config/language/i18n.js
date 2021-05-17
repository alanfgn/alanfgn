import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const availableLanguages = ['en-US', 'pt-BR'];

i18n
  .use(Backend)
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: 'pt-BR', 
    debug: false,
    whitelist: availableLanguages,
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;

const t = i18n.t.bind(i18n);
export { t };
