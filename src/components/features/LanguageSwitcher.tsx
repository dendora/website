import React, { useState, useEffect } from 'react';
import { SECTION_IDS } from '../../lib/site-config';

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

// Translate a homepage section hash (#kapcsolat ↔ #contact); other hashes pass through.
function mapHash(hash: string, from: 'hu' | 'en', to: 'hu' | 'en'): string {
  const key = (Object.keys(SECTION_IDS[from]) as (keyof typeof SECTION_IDS.hu)[])
    .find((k) => `#${SECTION_IDS[from][k]}` === hash);
  return key ? `#${SECTION_IDS[to][key]}` : hash;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  currentLang, 
  className = '' 
}) => {
  const [href, setHref] = useState(() => getDefaultPath(currentLang));

  useEffect(() => {
    const update = () => {
      const path = window.location.pathname;
      const hash = mapHash(window.location.hash, currentLang, currentLang === 'hu' ? 'en' : 'hu');
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
    };
    update();
    // Nav clicks change the hash; keep the switch pointing at the same section.
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, [currentLang]);

  const langs = [
    { code: 'hu' as const, label: 'HU', name: 'Magyar' },
    { code: 'en' as const, label: 'EN', name: 'English' },
  ];

  return (
    <div
      role="group"
      aria-label={currentLang === 'hu' ? 'Nyelv' : 'Language'}
      className={`inline-flex items-center text-sm ${className}`}
    >
      {langs.map((l, i) => (
        <React.Fragment key={l.code}>
          {i > 0 && <span className="text-black/20" aria-hidden="true">/</span>}
          {l.code === currentLang ? (
            <span aria-current="true" className="px-1.5 py-2 font-medium text-black">
              {l.label}
              <span className="sr-only"> – {l.name}</span>
            </span>
          ) : (
            <a
              href={href}
              hrefLang={l.code}
              lang={l.code}
              className="rounded px-1.5 py-2 text-black/55 transition-colors hover:text-accent"
            >
              {l.label}
              <span className="sr-only"> – {l.name}</span>
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};