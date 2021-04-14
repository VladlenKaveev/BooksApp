import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import ru from './ru/translation.json';
import en from './en/translation.json';
import * as RNLocalize from 'react-native-localize';
import storageService from '../modules/core/services/AsyncStorage';

const STORAGE_KEY = '@Language';

const translationGetters = {
  ru: () => require('./ru/translation.json'),
  en: () => require('./en/translation.json'),
};

const languageDetector: LanguageDetectorAsyncModule = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true,
  detect: async (callback: (lng: string) => void) => {
    const deviceLanguage = RNLocalize.findBestAvailableLanguage(
      Object.keys(translationGetters),
    )?.languageTag;
    const storageLanguage: string = await storageService.getData(STORAGE_KEY);
    if (deviceLanguage !== storageLanguage) {
      await storageService.storeData(STORAGE_KEY, deviceLanguage);
      callback(deviceLanguage);
    } else {
      callback(storageLanguage);
    }
  },
  cacheUserLanguage: () => {},
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      en: en,
      ru: ru,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
