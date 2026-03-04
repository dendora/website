import dimopHu from '../locales/dimop/hu.json';
import dimopEn from '../locales/dimop/en.json';

export type DimopLanguage = 'hu' | 'en';

const dimopTranslations: Record<DimopLanguage, Record<string, any>> = {
  hu: dimopHu,
  en: dimopEn,
};

/**
 * Get a DIMOP-specific translation by dot-notation key.
 * Falls back to the key string if not found.
 */
export function dt(language: DimopLanguage, key: string, params?: Record<string, string | number>): any {
  const translations = dimopTranslations[language];
  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      if (import.meta.env?.DEV) console.warn(`DIMOP translation key "${key}" not found for "${language}"`);
      return key;
    }
  }

  if (typeof value === 'string' && params) {
    return value.replace(/\{(\w+)\}/g, (_match: string, paramKey: string) => {
      return paramKey in params ? String(params[paramKey]) : _match;
    });
  }

  return value;
}
