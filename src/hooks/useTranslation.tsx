import React, { createContext, useContext, useState, ReactNode } from 'react';
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

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, params?: Record<string, string | number>): any => {
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
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

// Helper hook for accessing specific translation sections
export const useTranslationSection = (section: string) => {
  const { t } = useTranslation();
  return (key: string, params?: Record<string, string | number>) => 
    t(`${section}.${key}`, params);
};