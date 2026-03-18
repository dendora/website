import React from 'react';
import { ArrowRight, Mail, Menu, Phone, X, Compass, Hammer, HeartHandshake } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { cn } from '../../lib/utils';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../../lib/site-config';
import { Logo, MotionFade } from '../ui';
import { DimopHero } from './DimopHero';
import { EligibilityAssessment } from './EligibilityAssessment';
import { FaqSection } from './FaqSection';
import { AiChatWidget } from './AiChatWidget';

interface DimopLandingProps {
  language: DimopLanguage;
}

/* ── Nav ───────────────────────────────────────────────────────── */
const DimopNav: React.FC<{ language: DimopLanguage }> = ({ language }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('');
  const homeHref = language === 'hu' ? '/' : '/en/';

  React.useEffect(() => {
    if (!menuOpen) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [menuOpen]);

  React.useEffect(() => {
    const ids = ['process', 'eligibility', 'faq'];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href={homeHref} className="flex items-center gap-3 cursor-pointer" aria-label="Dendora home">
          <Logo size="md" showText textContent={{ companyName: 'DENDORA', tagline: 'Digitalizációs Partner' }} />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#process" className={cn('text-sm transition cursor-pointer', activeSection === 'process' ? 'text-black font-medium' : 'text-black/50 hover:text-black')}>{dt(language, 'navigation.process')}</a>
          <a href="#eligibility" className={cn('text-sm transition cursor-pointer', activeSection === 'eligibility' ? 'text-black font-medium' : 'text-black/50 hover:text-black')}>{dt(language, 'navigation.assessment')}</a>
          <a href="#faq" className={cn('text-sm transition cursor-pointer', activeSection === 'faq' ? 'text-black font-medium' : 'text-black/50 hover:text-black')}>{dt(language, 'navigation.faq')}</a>
          <a href="#eligibility" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition cursor-pointer">
            {dt(language, 'navigation.cta')}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <button className="inline-flex items-center justify-center rounded-md p-2 text-black/60 hover:bg-black/5 md:hidden cursor-pointer" aria-label="Menü" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-2 grid gap-1">
            <a href="#process" onClick={() => setMenuOpen(false)} className={cn('rounded-md px-2 py-2 text-sm block', activeSection === 'process' ? 'text-black font-medium bg-black/5' : 'text-black/70 hover:bg-black/5')}>{dt(language, 'navigation.process')}</a>
            <a href="#eligibility" onClick={() => setMenuOpen(false)} className={cn('rounded-md px-2 py-2 text-sm block', activeSection === 'eligibility' ? 'text-black font-medium bg-black/5' : 'text-black/70 hover:bg-black/5')}>{dt(language, 'navigation.assessment')}</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className={cn('rounded-md px-2 py-2 text-sm block', activeSection === 'faq' ? 'text-black font-medium bg-black/5' : 'text-black/70 hover:bg-black/5')}>{dt(language, 'navigation.faq')}</a>
            <a href="#eligibility" onClick={() => setMenuOpen(false)} className="mt-1 inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
              {dt(language, 'navigation.cta')} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

/* ── Value Section ─────────────────────────────────────────────── */
const valueIcons = [
  <Compass key="c" className="h-5 w-5" />,
  <Hammer key="h" className="h-5 w-5" />,
  <HeartHandshake key="s" className="h-5 w-5" />,
];

const ValueSection: React.FC<{ language: DimopLanguage }> = ({ language }) => {
  const items = dt(language, 'value.items') as Array<{ title: string; description: string }>;
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <MotionFade>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            {dt(language, 'value.title')}
          </h2>
          <p className="text-base text-gray-500 text-center mb-14 max-w-xl mx-auto">
            {dt(language, 'value.subtitle')}
          </p>
        </MotionFade>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <MotionFade key={i} delay={0.05 + i * 0.08}>
              <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 h-full hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gray-900 text-white mb-4">
                  {valueIcons[i]}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Trust Section ─────────────────────────────────────────────── */
const TrustSection: React.FC<{ language: DimopLanguage }> = ({ language }) => {
  const items = dt(language, 'trust.items') as Array<{ title: string; description: string }>;

  return (
    <section className="py-20 bg-gray-50/80">
      <div className="max-w-5xl mx-auto px-4">
        <MotionFade>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            {dt(language, 'trust.title')}
          </h2>
          <p className="text-base text-gray-500 text-center mb-14 max-w-2xl mx-auto">
            {dt(language, 'trust.subtitle')}
          </p>
        </MotionFade>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <MotionFade key={index} delay={0.05 + index * 0.08}>
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 h-full">
                <div className="mb-4 text-xs font-semibold tracking-[0.18em] uppercase text-gray-400">
                  0{index + 1}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Process Section ───────────────────────────────────────────── */
const ProcessSection: React.FC<{ language: DimopLanguage }> = ({ language }) => {
  const steps = dt(language, 'process.steps') as Array<{ step: string; title: string; description: string }>;
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <MotionFade>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-14 text-center">
            {dt(language, 'process.title')}
          </h2>
        </MotionFade>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <MotionFade key={i} delay={0.05 + i * 0.08}>
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 h-full">
                <div className="text-4xl font-black text-gray-900/[0.06] mb-3 tabular-nums leading-none">0{s.step}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Closing CTA ──────────────────────────────────────────────── */
const FinalCtaSection: React.FC<{ language: DimopLanguage }> = ({ language }) => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <MotionFade>
        <div className="rounded-[2rem] border border-gray-200 bg-gray-950 px-8 py-10 text-center text-white shadow-sm md:px-12 md:py-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            {dt(language, 'cta.eyebrow')}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            {dt(language, 'cta.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
            {dt(language, 'cta.subtitle')}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#eligibility"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 hover:bg-gray-100 transition cursor-pointer"
            >
              {dt(language, 'cta.primary')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/85 hover:bg-white/5 transition cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/55">
            <span>{dt(language, 'cta.responseTime')}</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span>{dt(language, 'cta.quickCheck')}</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span>{CONTACT_PHONE}</span>
          </div>
        </div>
      </MotionFade>
    </div>
  </section>
);

/* ── Footer strip ──────────────────────────────────────────────── */
const DimopFooter: React.FC<{ language: DimopLanguage }> = ({ language }) => {
  const homeHref = language === 'hu' ? '/' : '/en/';
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <span>© {new Date().getFullYear()} Dendora Bt.</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={homeHref} className="hover:text-gray-900 transition-colors">{dt(language, 'footer.home')}</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gray-900 transition-colors">{CONTACT_EMAIL}</a>
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors">
            <Phone className="h-3 w-3" />{CONTACT_PHONE}
          </a>
        </div>
      </div>
    </footer>
  );
};

/* ── Page ──────────────────────────────────────────────────────── */
export const DimopLanding: React.FC<DimopLandingProps> = ({ language }) => (
  <div className="min-h-screen bg-white">
    <DimopNav language={language} />
    <main>
      <DimopHero language={language} />
      <ValueSection language={language} />
      <TrustSection language={language} />
      <ProcessSection language={language} />
      <EligibilityAssessment language={language} />
      <FaqSection language={language} />
      <FinalCtaSection language={language} />
    </main>
    <DimopFooter language={language} />
    <AiChatWidget />
  </div>
);
