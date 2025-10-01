import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation, Language } from '../hooks/useTranslation';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useTranslation();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-black/5 cursor-pointer"
        onClick={() => {
          const nextLanguage = language === 'en' ? 'hu' : 'en';
          setLanguage(nextLanguage);
        }}
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLang?.flag}</span>
        <span>{currentLang?.code.toUpperCase()}</span>
      </button>
    </div>
  );
};