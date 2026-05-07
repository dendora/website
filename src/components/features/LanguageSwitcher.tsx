import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'hu' | 'en';
  className?: string;
}

/**
 * HU paths that have no EN counterpart. When the user is on one of these
 * and clicks the language switcher, send them to the EN homepage instead
 * of generating a 404.
 */
const HU_ONLY_PATH_PREFIXES = ['/dimop'];

/**
 * Cross-language slug map for pages where the slug differs.
 * Keys are HU paths (with leading slash, no trailing slash) → EN paths.
 */
const SLUG_MAP_HU_TO_EN: Record<string, string> = {
  '/ai-automatizalas': '/en/ai-automation',
};
const SLUG_MAP_EN_TO_HU: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_MAP_HU_TO_EN).map(([hu, en]) => [en, hu]),
);

function normalizePath(path: string): string {
  return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
}

function isHuOnlyPath(path: string): boolean {
  return HU_ONLY_PATH_PREFIXES.some(
    (p) => path === p || path === `${p}/` || path.startsWith(`${p}/`),
  );
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
    const normalized = normalizePath(path);

    if (currentLang === 'hu') {
      if (isHuOnlyPath(path)) {
        setHref('/en/');
        return;
      }
      const mapped = SLUG_MAP_HU_TO_EN[normalized];
      if (mapped) {
        setHref(`${mapped}/${hash}`);
        return;
      }
      const enPath = path === '/' ? '/en/' : `/en${path}`;
      setHref(enPath + hash);
    } else {
      const mapped = SLUG_MAP_EN_TO_HU[normalized];
      if (mapped) {
        setHref(`${mapped}/${hash}`);
        return;
      }
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