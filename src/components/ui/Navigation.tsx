import React from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { LanguageSwitcher } from '../features/LanguageSwitcher';
import { t, type Language } from '../../lib/translations';
import { cn } from '../../lib/utils';

export interface NavigationProps {
  language: Language;
  variant?: 'landing' | 'work';
  homeUrl?: string;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  language,
  variant = 'landing',
  homeUrl,
  className = ''
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setMenuOpen(false);
  };
  
  const navItems = [{
    id: 'home',
    label: t(language, 'navigation.home')
  }, {
    id: 'services',
    label: t(language, 'navigation.services')
  }, {
    id: 'work',
    label: t(language, 'navigation.work')
  }, {
    id: 'about',
    label: t(language, 'navigation.about')
  }, {
    id: 'contact',
    label: t(language, 'navigation.contact')
  }] as const;

  const logoUrl = homeUrl || (language === 'hu' ? '/' : '/en/');

  return (
    <header className={cn('sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur', className)}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {variant === 'landing' ? (
          <button 
            onClick={() => scrollTo('home')} 
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
          </button>
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
          {variant === 'landing' && navItems.map(n => (
            <button 
              key={n.id} 
              onClick={() => scrollTo(n.id)} 
              className="text-sm text-black/70 transition hover:text-black cursor-pointer"
            >
              <span>{n.label}</span>
            </button>
          ))}
          
          <LanguageSwitcher currentLang={language} />
          
          <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85 cursor-pointer">
            <Mail className="h-4 w-4" />
            <span>{t(language, 'navigation.contact')}</span>
          </a>
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
              {variant === 'landing' && navItems.map(n => (
                <button 
                  key={n.id} 
                  onClick={() => scrollTo(n.id)} 
                  className="w-full rounded-md px-2 py-2 text-left text-sm text-black/80 hover:bg-black/5 cursor-pointer"
                >
                  <span>{n.label}</span>
                </button>
              ))}
              
              <div className="mt-2 mb-1 flex justify-center">
                <LanguageSwitcher currentLang={language} />
              </div>
              
              <a 
                href="mailto:hello@dendora.hu" 
                className="mt-1 inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm font-medium text-white cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                <span>{t(language, 'navigation.contact')}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export { Navigation };