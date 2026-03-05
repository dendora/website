import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowRight, Mail, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { t, type Language } from '../../lib/variant-translations';
import { getAllProjects } from '../../lib/projects-json';
import { getCurrentSiteConfig } from '../../lib/runtime-variant';
import { CONTACT_EMAIL } from '../../lib/site-config';
import { 
  Navigation, 
  SectionHeader, 
  MotionFade, 
  Logo,
  PricingSection 
} from '../ui';
import { Footer } from '../layout';

interface ConfigurableLandingProps {
  language: Language;
}

// Lightweight scroll-triggered fade for work cards
const ScrollFadeArticle: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className }) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { rootMargin: '-50px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(8px)',
        transition: `opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`,
      }}
    >
      {children}
    </article>
  );
};

// ─── Contact form component ──────────────────────────────────────────────────

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactSection: React.FC<{ language: Language }> = ({ language }) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('sending');

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source: 'main', ...formData }),
        });

        if (!res.ok) throw new Error('send failed');
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch {
        setStatus('error');
      }
    },
    [formData],
  );

  const isBusy = status === 'sending';

  return (
    <section id="contact" className="bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 md:py-20">
        <MotionFade>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-white mb-2 text-center">
            {t(language, 'contact.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-base text-gray-400 mb-10 text-center">
            {t(language, 'contact.subtitle')}
          </p>
        </MotionFade>

        {status === 'success' ? (
          <MotionFade>
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle2 className="h-10 w-10 text-emerald-400" />
              <p className="text-lg text-white font-medium">
                {t(language, 'contact.form.success')}
              </p>
            </div>
          </MotionFade>
        ) : (
          <MotionFade delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    {t(language, 'contact.form.name')}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t(language, 'contact.form.namePlaceholder')}
                    disabled={isBusy}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/25 transition disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    {t(language, 'contact.form.email')}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t(language, 'contact.form.emailPlaceholder')}
                    disabled={isBusy}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/25 transition disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  {t(language, 'contact.form.message')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t(language, 'contact.form.messagePlaceholder')}
                  disabled={isBusy}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white/25 focus:outline-none focus:ring-1 focus:ring-white/25 transition resize-none disabled:opacity-50"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">{t(language, 'contact.form.error')}</p>
              )}

              <button
                type="submit"
                disabled={isBusy}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-gray-900 transition hover:bg-gray-100 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isBusy ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {isBusy
                  ? t(language, 'contact.form.sending')
                  : t(language, 'contact.form.submit')}
              </button>
            </form>
          </MotionFade>
        )}

        <MotionFade delay={0.3}>
          <p className="mt-10 text-center text-sm text-gray-500">
            {t(language, 'contact.fallback')}{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-gray-300 underline underline-offset-2 hover:text-white transition"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </MotionFade>
      </div>
    </section>
  );
};

// ─── Main landing component ──────────────────────────────────────────────────

export const ConfigurableLanding: React.FC<ConfigurableLandingProps> = (props) => {
  const { language = 'hu' } = props || {};
  const projects = getAllProjects(language);
  const config = getCurrentSiteConfig();

  // Hero - centered, confident, minimal
  const renderHero = () => (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <MotionFade>
          <div className="mb-8 flex justify-center">
            <Logo size="md" />
          </div>
        </MotionFade>

        <MotionFade delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 leading-[1.1] mb-6">
            {t(language, 'hero.title')}
          </h1>
        </MotionFade>

        <MotionFade delay={0.2}>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t(language, 'hero.subtitle')}
          </p>
        </MotionFade>

        <MotionFade delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:bg-black/85 cursor-pointer group"
            >
              {t(language, 'hero.cta.seeWork')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-base font-medium text-black transition hover:border-black/20 hover:bg-black/5 cursor-pointer"
            >
              {t(language, 'hero.cta.startProject')}
            </a>
          </div>
        </MotionFade>
      </div>
    </section>
  );

  // Work section
  const renderWork = () => {
    if (!config.layout.showSections.work) return null;

    const detailProjects = new Set(['foundrypulse', 'andihealth']);

    const getProjectBackground = (projectId: string) => {
      switch (projectId) {
        case 'andihealth': return 'bg-[#494949]';
        case 'analytics': return 'bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]';
        case 'infrastructure': return 'bg-[linear-gradient(135deg,#f093fb_0%,#f5576c_100%)]';
        default: return 'bg-black';
      }
    };

    return (
      <section id="work" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <SectionHeader
            title={t(language, 'work.title')}
            subtitle={t(language, 'work.subtitle')}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => {
              const isDetailProject = detailProjects.has(project.id);
              const isFoundryPulse = project.id === 'foundrypulse';
              const projectUrl = language === 'hu'
                ? `/work/${project.slug}`
                : `/en/work/${project.slug}`;

              const cardContent = (
                <ScrollFadeArticle
                  delay={index * 0.05}
                  className={cn(
                    "group relative overflow-hidden rounded-xl border border-black/10 bg-white",
                    isDetailProject && "cursor-pointer hover:border-black/20 transition-colors"
                  )}
                >
                  <div className={cn("aspect-[16/10]", isFoundryPulse ? "bg-black" : getProjectBackground(project.id))}>
                    {project.images.hero && isFoundryPulse ? (
                      <div className="flex h-full w-full items-center justify-center p-8">
                        <picture>
                          <source srcSet={project.images.hero} />
                          <img
                            src={project.images.hero}
                            alt={project.metadata.title}
                            className="max-h-full max-w-full object-contain brightness-0 invert"
                            width={850}
                            height={295}
                            loading="lazy"
                            decoding="async"
                          />
                        </picture>
                      </div>
                    ) : project.images.hero && isDetailProject ? (
                      <img
                        src={project.images.hero}
                        alt={project.metadata.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-between px-4 py-3">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white">
                          <div className="relative h-8 w-8" aria-hidden="true">
                            <div className="absolute inset-0 rounded-[6px] bg-white/10" />
                            <div className="absolute left-1 top-1 h-6 w-6 rounded-[5px] bg-white" />
                            <div className="absolute right-1 top-1 h-6 w-2.5 rounded-r-[5px] bg-black/80" />
                          </div>
                          <span className="text-sm font-medium tracking-tight">{project.metadata.title}</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                          <span>{t(language, 'work.caseStudy')}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold">
                      <span>{project.metadata.title}</span>
                    </h3>
                    <p className="mt-1 text-sm text-black/70">
                      <span>{project.metadata.description}</span>
                    </p>
                    {isDetailProject && (
                      <span className="mt-3 inline-flex items-center gap-1 text-sm text-black/70 group-hover:text-black transition-colors">
                        <span>{t(language, 'work.viewProject')}</span>
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </span>
                    )}
                  </div>
                </ScrollFadeArticle>
              );

              return isDetailProject ? (
                <a key={project.id} href={projectUrl} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded-xl">
                  {cardContent}
                </a>
              ) : <React.Fragment key={project.id}>{cardContent}</React.Fragment>;
            })}
          </div>
        </div>
      </section>
    );
  };

  // Services - bento layout, first card spans full width
  const renderServices = () => {
    if (!config.layout.showSections.services) return null;

    const services = ['strategy', 'frontend', 'backend', 'ai'] as const;

    return (
      <section id="services" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <SectionHeader
            title={t(language, 'services.title')}
            subtitle={t(language, 'services.subtitle')}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <MotionFade key={service} delay={index * 0.08}>
                <div className={cn(
                  "rounded-xl border border-black/5 bg-white p-6 md:p-8 transition hover:shadow-md",
                  index === 0 && "md:col-span-2"
                )}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(language, `services.features.${service}.title`)}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {t(language, `services.features.${service}.description`)}
                  </p>
                </div>
              </MotionFade>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // About / Why Us
  const renderAbout = () => {
    if (!config.layout.showSections.about) return null;

    return (
      <section id="why-us" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <MotionFade>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-gray-900 mb-4">
                  {t(language, 'about.title')}
                </h2>
              </MotionFade>
              <MotionFade delay={0.1}>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {t(language, 'about.description')}
                </p>
              </MotionFade>
              <MotionFade delay={0.2}>
                <ul className="space-y-3">
                  {['engineering', 'delivery', 'maintainability', 'ai'].map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-black flex-shrink-0" />
                      <span>{t(language, `about.features.${feat}`)}</span>
                    </li>
                  ))}
                </ul>
              </MotionFade>
              <MotionFade delay={0.3}>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/85 cursor-pointer"
                  >
                    {t(language, 'about.cta')}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </MotionFade>
            </div>
            <div>
              <MotionFade delay={0.2}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['stack', 'approach', 'principles', 'engagement'].map((card) => (
                    <div key={card} className="rounded-xl border border-black/5 bg-white p-6 transition hover:shadow-md">
                      <div className="font-semibold text-gray-900 mb-1">{t(language, `about.cards.${card}.title`)}</div>
                      <p className="text-sm text-gray-500">{t(language, `about.cards.${card}.description`)}</p>
                    </div>
                  ))}
                </div>
              </MotionFade>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Contact — inline form + email fallback
  const renderContact = () => {
    if (!config.layout.showSections.contact) return null;

    return <ContactSection language={language} />;
  };

  // Section router - driven by config.layout.sectionsOrder
  const renderSections = () => {
    return config.layout.sectionsOrder.map((section: string) => {
      switch (section) {
        case 'hero':
          return <div key="hero">{renderHero()}</div>;
        case 'work':
          return <div key="work">{renderWork()}</div>;
        case 'pricing':
          return config.layout.showSections.pricing ? (
            <PricingSection key="pricing" language={language} />
          ) : null;
        case 'services':
          return <div key="services">{renderServices()}</div>;
        case 'about':
          return <div key="about">{renderAbout()}</div>;
        case 'contact':
          return <div key="contact">{renderContact()}</div>;
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation language={language} />
      
      <main id="main-content">
        {renderSections()}
      </main>

      <Footer language={language} />
    </div>
  );
};
