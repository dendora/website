import enTranslations from '../locales/en.json';
import huTranslations from '../locales/hu.json';

export type Language = 'en' | 'hu';

interface Translations {
  [key: string]: any;
}

const translations: Record<Language, Translations> = {
  en: enTranslations,
  hu: huTranslations,
};

export function getTranslations(language: Language) {
  return translations[language];
}

export function t(language: Language, key: string, params?: Record<string, string | number>): any {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key; // Fallback to key if translation not found
    }
  }
  
  if (typeof value === 'string' && params) {
    return value.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
      return paramKey in params ? String(params[paramKey]) : match;
    });
  }
  
  return value;
}

// Helper function for accessing specific translation sections
export function tSection(language: Language, section: string) {
  return (key: string, params?: Record<string, string | number>) => 
    t(language, `${section}.${key}`, params);
}