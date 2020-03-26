import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import it_res from './resources/It/it.json';
import en_res from './resources/En/en.json';
import es_res from './resources/Es/es.json';

const resources = {
    en: {
        translation: en_res
    },
    it: {
        translation: it_res
    },
    es: {
        translation: es_res
    }
}

const options = {
    order: ['localStorage', 'navigator'],
    lookupLocalStorage: 'i18nextLng',
    caches: ['localStorage'],
    excludeCacheFor: ['cimode']
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        detection: options,
        interpolation: {
            escapeValue: false
        }
    });

export const changeLanguage = (language) => {
    window.localStorage.setItem('i18nextLng', language)
    i18n.changeLanguage(language)
}

export default i18n;