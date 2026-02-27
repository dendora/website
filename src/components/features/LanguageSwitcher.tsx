import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'hu' | 'en';
  className?: string;
}

/**
 * Computes the default (SSR-safe) path for the language switcher.
 * The actual path is resolved client-side via useEffect to avoid hydration mismatch.
 */
function getDefaultPath(currentLang: 'hu' | 'en'): string {
  return currentLang === 'hu' ? '/en/' : '/';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  currentLang, 
  className = '' 
}) => {
  const [href, setHref] = useState(() => getDefaultPath(currentLang));

  useEffect(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (currentLang === 'hu') {
      const enPath = path === '/' ? '/en/' : `/en${path}`;
      setHref(enPath + hash);
    } else {
      const huPath = path.replace(/^\/en\/?/, '/') || '/';
      setHref(huPath + hash);
    }
  }, [currentLang]);

  const otherLang = currentLang === 'hu' 
    ? { code: 'en' as const, name: 'English', flag: '🇺🇸' }
    : { code: 'hu' as const, name: 'Magyar', flag: '🇭🇺' };

  return (
    <div className={`relative inline-block ${className}`}>
      <a
        href={href}
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