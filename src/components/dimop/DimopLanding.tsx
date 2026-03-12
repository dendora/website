import React from 'react';
import { ArrowRight, Mail, Menu, Phone, X } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../../lib/site-config';
import { Logo, MotionFade } from '../ui';
import { DimopHero } from './DimopHero';
import { ProblemSection } from './ProblemSection';
import { SolutionSection } from './SolutionSection';
import { ServicesSection } from './ServicesSection';
import { AiServicesSection } from './AiServicesSection';
import { LeadQualificationForm } from './LeadQualificationForm';
import { FaqSection } from './FaqSection';

interface DimopLandingProps {
  language: DimopLanguage;
}

/* ── Sticky navigation for the DIMOP page ────────────────────────── */
const DimopNav: React.FC<{ language: DimopLanguage }> = ({ language }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const links = [
    { href: '#services', label: dt(language, 'navigation.services') },
    { href: '#ai', label: dt(language, 'navigation.ai') },
    { href: '#faq', label: dt(language, 'navigation.faq') },
  ];

  const homeHref = language === 'hu' ? '/' : '/en/';
  const tagline = language === 'hu' ? 'Digitalizációs Partner' : 'Digitalization Partner';

  // Close mobile menu on Escape key
  React.useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a
          href={homeHref}
          className="group flex items-center gap-3 cursor-pointer"
          aria-label="Dendora home"
        >
          <Logo
            size="md"
            showText
            textContent={{
              companyName: 'DENDORA',
              tagline,
            }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-black/70 transition hover:text-black cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#qualification"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 cursor-pointer"
          >
            {dt(language, 'navigation.cta')}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden cursor-pointer"
          aria-label={language === 'hu' ? 'Menü váltása' : 'Toggle menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-2">
            <div className="grid gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full rounded-md px-2 py-2 text-left text-sm text-black/80 hover:bg-black/5 cursor-pointer block"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#qualification"
                onClick={() => setMenuOpen(false)}
                className="mt-1 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white cursor-pointer"
              >
                {dt(language, 'navigation.cta')}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

/* ── Final CTA section ───────────────────────────────────────────── */
const FinalCta: React.FC<{ language: DimopLanguage }> = ({ language }) => (
  <section className="py-24 bg-emerald-600 text-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <MotionFade>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {dt(language, 'cta.title')}
        </h2>
      </MotionFade>
      <MotionFade delay={0.1}>
        <p className="text-xl text-emerald-100 mb-10">
          {dt(language, 'cta.subtitle')}
        </p>
      </MotionFade>
      <MotionFade delay={0.2}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#qualification"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-emerald-700 hover:bg-emerald-50 transition cursor-pointer group"
          >
            {dt(language, 'cta.primary')}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition cursor-pointer"
          >
            <Mail className="h-5 w-5" />
            {dt(language, 'cta.secondary')}
          </a>
        </div>
      </MotionFade>
    </div>
  </section>
);

/* ── DIMOP Footer ────────────────────────────────────────────────── */
const DimopFooter: React.FC<{ language: DimopLanguage }> = ({ language }) => {
  const homeHref = language === 'hu' ? '/' : '/en/';
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <span>© {new Date().getFullYear()} Dendora Bt. {language === 'hu' ? 'Minden jog fenntartva.' : 'All rights reserved.'}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={homeHref} className="hover:text-gray-900 transition-colors">
            {language === 'hu' ? 'Főoldal' : 'Home'}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gray-900 transition-colors">
            {CONTACT_EMAIL}
          </a>
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors">
            <Phone className="h-3.5 w-3.5" />
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </footer>
  );
};

/* ── Main DIMOP Landing Page ─────────────────────────────────────── */
export const DimopLanding: React.FC<DimopLandingProps> = ({ language }) => {
  return (
    <div className="min-h-screen bg-white">
      <DimopNav language={language} />

      <main>
        <DimopHero language={language} />
        <ProblemSection language={language} />
        <SolutionSection language={language} />
        <ServicesSection language={language} />
        <AiServicesSection language={language} />
        <LeadQualificationForm language={language} />
        <FaqSection language={language} />
        <FinalCta language={language} />
      </main>

      <DimopFooter language={language} />
    </div>
  );
};
