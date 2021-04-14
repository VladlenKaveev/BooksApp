import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ru from './ru/translation.json';
import en from './en/translation.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  resources: {
    en: en,
    ru: ru,
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
