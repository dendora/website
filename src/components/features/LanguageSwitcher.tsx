import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'hu' | 'en';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  currentLang, 
  className = '' 
}) => {
  const languages = [
    { code: 'hu' as const, name: 'Magyar', flag: '🇭🇺', href: '/' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸', href: '/en/' },
  ];

  const otherLang = languages.find(lang => lang.code !== currentLang);

  return (
    <div className={`relative inline-block ${className}`}>
      <a
        href={otherLang?.href}
        hrefLang={otherLang?.code}
        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-black/5 cursor-pointer"
        aria-label={`Switch to ${otherLang?.name}`}
      >
        <Globe className="h-4 w-4" />
        <span>{otherLang?.flag}</span>
        <span>{otherLang?.name}</span>
      </a>
    </div>
  );
};