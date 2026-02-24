import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'hu' | 'en';
  className?: string;
}

/**
 * Maps the current URL path to the equivalent path in the target language.
 * /work/foundrypulse → /en/work/foundrypulse
 * /en/work/foundrypulse → /work/foundrypulse
 * / → /en/
 * /en/ → /
 */
function getLocalizedPath(currentLang: 'hu' | 'en'): string {
  if (typeof window === 'undefined') {
    return currentLang === 'hu' ? '/en/' : '/';
  }
  
  const path = window.location.pathname;
  const hash = window.location.hash;
  
  if (currentLang === 'hu') {
    // Currently Hungarian → switch to English: prepend /en
    const enPath = path === '/' ? '/en/' : `/en${path}`;
    return enPath + hash;
  } else {
    // Currently English → switch to Hungarian: strip /en prefix
    const huPath = path.replace(/^\/en\/?/, '/') || '/';
    return huPath + hash;
  }
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  currentLang, 
  className = '' 
}) => {
  const otherLang = currentLang === 'hu' 
    ? { code: 'en' as const, name: 'English', flag: '🇺🇸' }
    : { code: 'hu' as const, name: 'Magyar', flag: '🇭🇺' };

  return (
    <div className={`relative inline-block ${className}`}>
      <a
        href={getLocalizedPath(currentLang)}
        hrefLang={otherLang.code}
        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-black/5 cursor-pointer"
        aria-label={`Switch to ${otherLang.name}`}
      >
        <Globe className="h-4 w-4" />
        <span>{otherLang.flag}</span>
        <span>{otherLang.name}</span>
      </a>
    </div>
  );
};