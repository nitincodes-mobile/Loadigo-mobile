import i18n from 'i18next';

import en from './translation/en.json';
import { getLocales } from 'react-native-localize';
import { initReactI18next } from 'react-i18next';

const getDeviceLanguage = (): string => {
  const locales = getLocales();
  return locales[0]?.languageTag || 'en';
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
  },
  lng: getDeviceLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
