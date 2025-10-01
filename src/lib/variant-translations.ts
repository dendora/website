import enTranslations from '../locales/en.json';
import huTranslations from '../locales/hu.json';

// Variant translations (optional overrides)
import localHungaryHu from '../locales/variants/local-hungary-hu.json';
import regionalCeeEn from '../locales/variants/regional-cee-en.json';

import { getCurrentSiteConfig } from './runtime-variant';

export type Language = 'en' | 'hu';

interface Translations {
  [key: string]: any;
}

const baseTranslations: Record<Language, Translations> = {
  en: enTranslations,
  hu: huTranslations,
};

const variantTranslations: Record<string, Partial<Record<Language, Translations>>> = {
  'local-hungary': {
    hu: localHungaryHu,
  },
  'regional-cee': {
    en: regionalCeeEn,
  }
};

function mergeTranslations(base: Translations, variant?: Translations): Translations {
  if (!variant) return base;
  
  // Deep merge variant translations over base translations
  const merge = (obj1: any, obj2: any): any => {
    const result = { ...obj1 };
    for (const key in obj2) {
      if (obj2[key] && typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) {
        result[key] = merge(result[key] || {}, obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
    return result;
  };
  
  return merge(base, variant);
}

export function getTranslations(language: Language) {
  const config = getCurrentSiteConfig();
  const base = baseTranslations[language];
  
  if (!config.content.useVariantTranslations) {
    return base;
  }
  
  const variantKey = config.variant as keyof typeof variantTranslations;
  const variant = variantTranslations[variantKey]?.[language];
  
  return mergeTranslations(base, variant);
}

export function t(language: Language, key: string, params?: Record<string, string | number>): any {
  const translations = getTranslations(language);
  const keys = key.split('.');
  let value: any = translations;
  
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