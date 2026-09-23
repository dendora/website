import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { LanguageSwitcher } from '../features/LanguageSwitcher';
import { t, type Language } from '../../lib/translations';
import { SECTION_IDS } from '../../lib/site-config';
import { cn } from '../../lib/utils';

export interface NavigationProps {
  language: Language;
  variant?: 'landing' | 'work';
  /** Marks the matching nav item as the current page. */
  current?: 'ai';
  homeUrl?: string;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  language,
  variant = 'landing',
  current,
  homeUrl,
  className = ''
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('');
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close mobile menu on Escape key
  React.useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const ids = SECTION_IDS[language];

  // Active section tracking via IntersectionObserver
  React.useEffect(() => {
    if (variant !== 'landing') return;
    const sections = [ids.work, ids.services, ids.contact].map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [variant, ids]);
  
  const logoUrl = homeUrl || (language === 'hu' ? '/' : '/en/');
  // Section links jump in-page on the homepage, otherwise back to the homepage section.
  const sectionHref = (id: string) => (variant === 'landing' ? `#${id}` : `${logoUrl}#${id}`);

  const navItems = [
    { key: 'work', href: sectionHref(ids.work), label: t(language, 'navigation.work'), active: activeSection === ids.work },
    { key: 'services', href: sectionHref(ids.services), label: t(language, 'navigation.pricing'), active: activeSection === ids.services },
    {
      key: 'ai',
      href: language === 'hu' ? '/ai-automatizalas/' : '/en/ai-automation/',
      label: t(language, 'navigation.aiAutomation'),
      active: current === 'ai',
      page: current === 'ai',
    },
    {
      key: 'contact',
      // The AI page has its own contact form under the same id.
      href: current === 'ai' ? `#${ids.contact}` : sectionHref(ids.contact),
      label: t(language, 'navigation.contact'),
      active: activeSection === ids.contact,
    },
  ];

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        {language === 'hu' ? 'Ugrás a tartalomhoz' : 'Skip to main content'}
      </a>
      <header className={cn('sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur', className)}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {variant === 'landing' ? (
          <a 
            href={logoUrl} 
            className="group flex items-center gap-3 cursor-pointer" 
            aria-label={t(language, 'navigation.ariaLabels.dendoraHome')}
          >
            <Logo 
              size="md" 
              showText 
              textContent={{
                companyName: t(language, 'hero.brandCard.companyName'),
                tagline: t(language, 'hero.brandCard.tagline')
              }}
            />
          </a>
        ) : (
          <a 
            href={logoUrl} 
            className="group flex items-center gap-3" 
            aria-label={t(language, 'navigation.ariaLabels.dendoraHome')}
          >
            <Logo 
              size="md" 
              showText 
              textContent={{
                companyName: t(language, 'hero.brandCard.companyName'),
                tagline: t(language, 'hero.brandCard.tagline')
              }}
            />
          </a>
        )}

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(n => (
            <a 
              key={n.key} 
              href={n.href} 
              aria-current={n.page ? 'page' : undefined}
              className={cn(
                'text-sm transition cursor-pointer',
                n.active ? 'text-black font-medium' : 'text-black/70 hover:text-accent'
              )}
            >
              <span>{n.label}</span>
            </a>
          ))}
          
          <LanguageSwitcher currentLang={language} />
        </nav>

        {/* Mobile menu button */}
        <button 
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden cursor-pointer" 
          aria-label={t(language, 'navigation.ariaLabels.toggleMenu')} 
          aria-expanded={menuOpen} 
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-2">
            <div className="grid gap-1">
              {navItems.map(n => (
                <a 
                  key={n.key} 
                  href={n.href} 
                  aria-current={n.page ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'w-full rounded-md px-2 py-2 text-left text-sm cursor-pointer block',
                    n.active ? 'text-black font-medium bg-black/5' : 'text-black/80 hover:bg-black/5'
                  )}
                >
                  <span>{n.label}</span>
                </a>
              ))}

              <div className="mt-2 mb-1 flex justify-center">
                <LanguageSwitcher currentLang={language} />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
    </>
  );
};

export { Navigation };