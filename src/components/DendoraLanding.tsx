import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail, Github, Globe, Menu, X, CheckCircle2 } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';
import { t, type Language } from '../lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import Footer from './Footer';

interface DendoraLandingProps {
  language: Language;
}

export const DendoraLanding: React.FC<DendoraLandingProps> = ({ language }) => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
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

  const Feature: React.FC<{
    title: string;
    desc: string;
  }> = ({
    title,
    desc
  }) => <div className="group relative rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
        <CheckCircle2 className="h-4 w-4" />
      </div>
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-black/60">{desc}</p>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-black/5 transition group-hover:ring-2" />
    </div>;
  
  const Stat: React.FC<{
    value: string;
    label: string;
  }> = ({
    value,
    label
  }) => <div className="flex flex-col items-start">
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className="text-sm text-black/60">{label}</div>
    </div>;
  
  const CTAButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    ...props
  }) => <button {...props} className={cn('inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 cursor-pointer', className)}>
      {children}
    </button>;
  
  const OutlineButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    ...props
  }) => <button {...props} className={cn('inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:border-black/20 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 cursor-pointer', className)}>
      {children}
    </button>;

  return <div className="min-h-dvh w-full bg-white text-black antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <button onClick={() => scrollTo('home')} className="group flex items-center gap-3 cursor-pointer" aria-label={t(language, 'navigation.ariaLabels.dendoraHome')}>
            {/* Logo */}
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-lg bg-black" />
              <div className="absolute left-1 top-1 h-6 w-6 rounded-lg bg-white" />
              <div className="absolute right-1 top-1 h-6 w-3 rounded-r-lg bg-black" />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-semibold tracking-wide">{t(language, 'hero.brandCard.companyName')}</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/60">{t(language, 'hero.brandCard.tagline')}</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-black/70 transition hover:text-black cursor-pointer">
                <span>{n.label}</span>
              </button>)}
            <LanguageSwitcher currentLang={language} />
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85 cursor-pointer">
              <Mail className="h-4 w-4" />
              <span>{t(language, 'navigation.contact')}</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden cursor-pointer" aria-label={t(language, 'navigation.ariaLabels.toggleMenu')} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && <div className="border-t border-black/5 bg-white md:hidden">
            <nav className="mx-auto max-w-6xl px-4 py-2">
              <div className="grid gap-1">
                {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="w-full rounded-md px-2 py-2 text-left text-sm text-black/80 hover:bg-black/5 cursor-pointer">
                    <span>{n.label}</span>
                  </button>)}
                <div className="mt-2 mb-1 flex justify-center">
                  <LanguageSwitcher currentLang={language} />
                </div>
                <a href="mailto:hello@dendora.hu" className="mt-1 inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm font-medium text-white cursor-pointer">
                  <Mail className="h-4 w-4" />
                  <span>{t(language, 'navigation.contact')}</span>
                </a>
              </div>
            </nav>
          </div>}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(0,0,0,0.06),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <motion.h1 initial={prefersReducedMotion ? undefined : {
            opacity: 0,
            y: 8
          }} whileInView={prefersReducedMotion ? undefined : {
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            ease: 'easeOut'
          }} className="text-4xl font-semibold tracking-tight md:text-5xl">
              <span>{t(language, 'hero.title')}</span>
            </motion.h1>
            <p className="mt-4 text-base text-black/65 md:text-lg">
              <span>{t(language, 'hero.subtitle')}</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTAButton onClick={() => scrollTo('contact')}>
                <span>{t(language, 'hero.cta.startProject')}</span>
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <OutlineButton onClick={() => scrollTo('work')}>
                <span>{t(language, 'hero.cta.seeWork')}</span>
              </OutlineButton>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 md:max-w-md">
              <Stat value={t(language, 'hero.stats.experience.value')} label={t(language, 'hero.stats.experience.label')} />
              <Stat value={t(language, 'hero.stats.remote.value')} label={t(language, 'hero.stats.remote.label')} />
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* Brand card */}
            <motion.div initial={prefersReducedMotion ? undefined : {
            opacity: 0,
            scale: 0.98
          }} whileInView={prefersReducedMotion ? undefined : {
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            ease: 'easeOut',
            delay: 0.1
          }} className="relative w-full max-w-md overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm" aria-label="Dendora brand">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14">
                  <div className="absolute inset-0 rounded-2xl bg-black" />
                  <div className="absolute left-1 top-1 h-10 w-10 rounded-xl bg-white" />
                  <div className="absolute right-1 top-1 h-10 w-5 rounded-r-xl bg-black" />
                </div>
                <div>
                  <div className="text-xl font-semibold tracking-wide">{t(language, 'hero.brandCard.companyName')}</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-black/60">{t(language, 'hero.brandCard.tagline')}</div>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-4">
                <p className="text-sm text-black/70">
                  <span>{t(language, 'hero.brandCard.description')}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t(language, 'services.title')}</h2>
            <span className="text-sm text-black/60">{t(language, 'services.subtitle')}</span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Feature title={t(language, 'services.features.strategy.title')} desc={t(language, 'services.features.strategy.description')} />
            <Feature title={t(language, 'services.features.frontend.title')} desc={t(language, 'services.features.frontend.description')} />
            <Feature title={t(language, 'services.features.backend.title')} desc={t(language, 'services.features.backend.description')} />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t(language, 'work.title')}</h2>
            <span className="text-sm text-black/60">{t(language, 'work.subtitle')}</span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[{
            name: t(language, 'work.projects.foundryPulse.name'),
            desc: t(language, 'work.projects.foundryPulse.description'),
            brandBg: 'bg-[#0B0D10]',
            image: {
              src: '/foundrypulse-wordmark.png',
              alt: t(language, 'work.projects.foundryPulse.imageAlt')
            }
          }, {
            name: t(language, 'work.projects.analytics.name'),
            desc: t(language, 'work.projects.analytics.description'),
            brandBg: 'bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]',
            image: undefined
          }, {
            name: t(language, 'work.projects.infrastructure.name'),
            desc: t(language, 'work.projects.infrastructure.description'),
            brandBg: 'bg-[linear-gradient(135deg,#f093fb_0%,#f5576c_100%)]',
            image: undefined
          }].map((p, i) => {
            const isFoundryPulse = p.name === t(language, 'work.projects.foundryPulse.name');
            const foundryPulseUrl = language === 'hu' ? '/work/foundrypulse' : '/en/work/foundrypulse';
            
            const cardContent = (
              <motion.article 
                key={p.name} 
                initial={prefersReducedMotion ? undefined : {
                  opacity: 0,
                  y: 8
                }} 
                whileInView={prefersReducedMotion ? undefined : {
                  opacity: 1,
                  y: 0
                }} 
                viewport={{
                  once: true,
                  margin: '-50px'
                }} 
                transition={{
                  duration: 0.4,
                  delay: i * 0.05
                }} 
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-black/10 bg-white",
                  isFoundryPulse && "cursor-pointer hover:border-black/20 transition-colors"
                )}>
                  <div className={cn("aspect-[16/10]", p.brandBg)}>
                    {p.image ? (
                      <div className="flex h-full w-full items-center justify-center p-8">
                        <picture>
                          <source srcSet={p.image.src} />
                          <img src={p.image.src} alt={p.image.alt} className="max-h-full max-w-full object-contain brightness-0 invert" />
                        </picture>
                      </div>
                    ) : (
                      <div className="flex h-full w-full items-center justify-between px-4 py-3">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white">
                          <div className="relative h-8 w-8" aria-hidden="true">
                            <div className="absolute inset-0 rounded-[6px] bg-white/10" />
                            <div className="absolute left-1 top-1 h-6 w-6 rounded-[5px] bg-white" />
                            <div className="absolute right-1 top-1 h-6 w-2.5 rounded-r-[5px] bg-black/80" />
                          </div>
                          <span className="text-sm font-medium tracking-tight">{p.name}</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                          <span>{t(language, 'work.caseStudy')}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold"><span>{p.name}</span></h3>
                    <p className="mt-1 text-sm text-black/60"><span>{p.desc}</span></p>
                    {isFoundryPulse && (
                      <a 
                        href={foundryPulseUrl}
                        className="mt-3 inline-flex items-center gap-1 text-sm text-black/70 hover:text-black transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{t(language, 'work.projects.foundryPulse.details')}</span>
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </motion.article>
            );

            return isFoundryPulse ? (
              <a key={p.name} href={foundryPulseUrl} className="block">
                {cardContent}
              </a>
            ) : cardContent;
          })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t(language, 'about.title')}</h2>
              <p className="mt-4 text-black/65">
                <span>{t(language, 'about.description')}</span>
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-black/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> <span>{t(language, 'about.features.engineering')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> <span>{t(language, 'about.features.delivery')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> <span>{t(language, 'about.features.maintainability')}</span>
                </li>
              </ul>
              <div className="mt-7 flex gap-3">
                <OutlineButton onClick={() => scrollTo('contact')}><span>{t(language, 'about.cta')}</span></OutlineButton>
                <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5 cursor-pointer">
                  <Globe className="h-4 w-4" />
                  <span>dendora.hu</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent)]" />
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-black/10 p-4">
                    <div className="text-sm font-semibold">{t(language, 'about.cards.stack.title')}</div>
                    <p className="mt-1 text-sm text-black/60"><span>{t(language, 'about.cards.stack.description')}</span></p>
                  </div>
                  <div className="rounded-xl border border-black/10 p-4">
                    <div className="text-sm font-semibold">{t(language, 'about.cards.approach.title')}</div>
                    <p className="mt-1 text-sm text-black/60"><span>{t(language, 'about.cards.approach.description')}</span></p>
                  </div>
                  <div className="rounded-xl border border-black/10 p-4">
                    <div className="text-sm font-semibold">{t(language, 'about.cards.principles.title')}</div>
                    <p className="mt-1 text-sm text-black/60"><span>{t(language, 'about.cards.principles.description')}</span></p>
                  </div>
                  <div className="rounded-xl border border-black/10 p-4">
                    <div className="text-sm font-semibold">{t(language, 'about.cards.engagement.title')}</div>
                    <p className="mt-1 text-sm text-black/60"><span>{t(language, 'about.cards.engagement.description')}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t(language, 'contact.title')}</h2>
            <p className="mt-2 text-sm text-black/65">
              <span>{t(language, 'contact.subtitle')}</span>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85 cursor-pointer">
                <Mail className="h-4 w-4" />
                <span>hello@dendora.hu</span>
              </a>
              <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5 cursor-pointer">
                <Globe className="h-4 w-4" />
                <span>dendora.hu</span>
              </a>
              <a href="https://github.com/dendora" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5 cursor-pointer">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>;
};