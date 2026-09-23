import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowRight, Mail, Phone, CheckCircle2, Send, Loader2, X, Tag } from 'lucide-react';
import { cn } from '../../lib/utils';
import { t, type Language } from '../../lib/variant-translations';
import { getAllProjects, type ProjectData } from '../../lib/projects-json';
import { getCurrentSiteConfig } from '../../lib/runtime-variant';
import { CONTACT_EMAIL, CONTACT_PHONE, SECTION_IDS } from '../../lib/site-config';
import { 
  Navigation, 
  SectionHeader, 
  MotionFade, 
  PricingSection 
} from '../ui';
import { useReveal } from '../ui/MotionFade';
import { renderEmphasis } from '../ui/renderEmphasis';
import { Footer } from '../layout';
import { AiChatWidget } from '../dimop/AiChatWidget';

interface ConfigurableLandingProps {
  language: Language;
}

// Brand mark as a hairline technical drawing: hatched solid areas, dimension chains, radius callout.
const HeroMark: React.FC = () => (
  <svg className="hero-mark schematic" viewBox="-3 -10 45 54" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="hm-grid" width="2" height="2" patternUnits="userSpaceOnUse">
        <path d="M2 0H0V2" className="hm-grid" />
      </pattern>
      <pattern id="hm-hatch" width="1.1" height="1.1" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="1.1" className="hm-hatch" />
      </pattern>
      <radialGradient id="hm-fade-g">
        <stop offset="0.55" stopColor="#fff" />
        <stop offset="1" stopColor="#000" />
      </radialGradient>
      <mask id="hm-fade">
        <rect x="-4" y="-4" width="42" height="42" fill="url(#hm-fade-g)" />
      </mask>
    </defs>

    <rect x="-4" y="-4" width="42" height="42" fill="url(#hm-grid)" mask="url(#hm-fade)" />

    <path
      fill="url(#hm-hatch)"
      fillRule="evenodd"
      d="M8 0h16a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8zM16 4h-4a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h4z"
    />
    <path
      className="hm-line"
      d="M8 0h16a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8zM16 4h-4a8 8 0 0 0-8 8v8a8 8 0 0 0 8 8h4z"
    />
    <path className="hm-thin" d="M14.8 16h2.4M16 14.8v2.4" />

    {/* Top dimension chain: 16 | 16 */}
    <path className="hm-thin" d="M0 -1.5V-6.5M16 -1.5V-6.5M32 -1.5V-6.5M-1 -5H33" />
    <path className="hm-thin" d="M-0.6 -4.4l1.2-1.2M15.4 -4.4l1.2-1.2M31.4 -4.4l1.2-1.2" />
    <text className="hm-text" x="8" y="-6.2" textAnchor="middle">16</text>
    <text className="hm-text" x="24" y="-6.2" textAnchor="middle">16</text>

    {/* Right dimension: 32 */}
    <path className="hm-thin" d="M33.5 0H38.5M33.5 32H38.5M37 -1V33" />
    <path className="hm-thin" d="M36.4 0.6l1.2-1.2M36.4 32.6l1.2-1.2" />
    <text className="hm-text" x="39.4" y="16" textAnchor="middle" transform="rotate(90 39.4 16)">32</text>

    {/* Radius callout */}
    <path className="hm-thin" d="M2.34 29.66L-0.5 34.5H5" />
    <text className="hm-text" x="5.6" y="35" dominantBaseline="middle">R 8</text>

    {/* Title block */}
    <path className="hm-thin" d="M0 38.5H32" />
    <text className="hm-text" x="0" y="41">DENDORA — D-01</text>
    <text className="hm-text" x="32" y="41" textAnchor="end">1 : 1</text>
  </svg>
);

// Keep in sync with WIDTHS in scripts/optimize-screenshots.mjs.
const WORK_SHOT_WIDTHS = [480, 800, 1200];
const WORK_SHOT_SIZES = '(min-width: 1152px) 548px, (min-width: 768px) calc(50vw - 28px), calc(100vw - 32px)';

// Hairline system schematic (same drawing language as HeroMark) for projects under NDA.
const WorkDiagram: React.FC<{ kind: 'production' | 'pipeline'; caption: string }> = ({ kind, caption }) => {
  const id = `wd-${kind}`;
  return (
    <svg className="work-diagram schematic h-full w-full" viewBox="0 0 160 100" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={`${id}-grid`} width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M5 0H0V5" className="hm-grid" />
        </pattern>
        <pattern id={`${id}-hatch`} width="2" height="2" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="2" className="hm-hatch" />
        </pattern>
      </defs>
      <rect width="160" height="100" fill={`url(#${id}-grid)`} />

      {kind === 'production' ? (
        <>
          {/* Live sensor trace with a pulse against a threshold */}
          <path className="hm-thin" d="M16 14V56H146" />
          <path className="hm-thin" d="M16 26H146" />
          <text className="hm-text" x="146" y="23.5" textAnchor="end">T max</text>
          <text className="hm-text" x="19" y="17">°C</text>
          <text className="hm-text" x="146" y="61" textAnchor="end">t</text>
          <path
            className="hm-line"
            d="M16 44L26 43L34 45L42 42L50 44L58 43L66 44L72 41L76 44L80 30L84 49L88 38L92 44L100 43L108 45L116 42L124 44L132 43L140 44L146 43"
          />
          <circle className="hm-dot" cx="80" cy="30" r="1.1" />
          <path className="hm-thin" d="M80 30V20H92" />
          <text className="hm-text" x="93.5" y="21">PULSE</text>

          {/* Production lines */}
          <rect className="hm-line" x="16" y="66" width="34" height="13" rx="2" />
          <rect x="63" y="66" width="34" height="13" rx="2" fill={`url(#${id}-hatch)`} />
          <rect className="hm-line" x="63" y="66" width="34" height="13" rx="2" />
          <rect className="hm-line" x="110" y="66" width="36" height="13" rx="2" />
          <path className="hm-thin" d="M50 72.5H63M97 72.5H110M60 70.5l3 2-3 2M107 70.5l3 2-3 2" />
          <text className="hm-text" x="21" y="73.6">L1</text>
          <text className="hm-text" x="115" y="73.6">L3</text>
          <circle className="hm-dot" cx="45" cy="72.5" r="1" />
          <circle className="hm-dot" cx="141" cy="72.5" r="1" />
        </>
      ) : (
        <>
          {/* Sources → ingest → stream → warehouse → dashboards */}
          {[26, 42, 58].map((y) => (
            <circle key={y} className="hm-line" cx="18" cy={y} r="3" />
          ))}
          <path className="hm-thin" d="M21 26L36 38M21 42H36M21 58L36 46" />
          <rect className="hm-line" x="36" y="33" width="26" height="18" rx="2" />
          <text className="hm-text" x="49" y="43" textAnchor="middle">INGEST</text>
          <path className="hm-thin" d="M62 42H76M73 40l3 2-3 2" />
          <rect x="76" y="33" width="26" height="18" rx="2" fill={`url(#${id}-hatch)`} />
          <rect className="hm-line" x="76" y="33" width="26" height="18" rx="2" />
          <text className="hm-text" x="89" y="57" textAnchor="middle">STREAM</text>
          <path className="hm-thin" d="M102 42H116M113 40l3 2-3 2" />
          <path className="hm-line" d="M116 33a15 4 0 0 0 30 0a15 4 0 0 0-30 0V51a15 4 0 0 0 30 0V33" />
          <text className="hm-text" x="131" y="45" textAnchor="middle">DWH</text>
          <path className="hm-thin" d="M131 55V64M129 61l2 3 2-3" />
          <rect className="hm-line" x="110" y="64" width="36" height="16" rx="2" />
          <path className="hm-thin" d="M115 76V72M120 76V69M125 76V71M130 76V67M135 76V70M140 76V68" />
          <text className="hm-text" x="106" y="74" textAnchor="end">BI</text>
        </>
      )}

      {/* Title block */}
      <path className="hm-thin" d="M16 87H146" />
      <text className="hm-text" x="16" y="93">{caption}</text>
      <text className="hm-text" x="146" y="93" textAnchor="end">NDA</text>
    </svg>
  );
};

const WorkCard: React.FC<{
  project: ProjectData;
  language: Language;
  categoryLabel: string;
  delay: number;
}> = ({ project, language, categoryLabel, delay }) => {
  const { ref, className: revealClass } = useReveal<HTMLAnchorElement>();
  const href = language === 'hu' ? `/work/${project.slug}/` : `/en/work/${project.slug}/`;
  const host = project.links.website ? new URL(project.links.website).host : null;
  const shot = project.images.screenshot;
  const diagram = project.images.diagram;
  const srcSet = (ext: string) =>
    WORK_SHOT_WIDTHS.map((w) => `/work/${shot}-${w}.${ext} ${w}w`).join(', ');
  const topTech = project.techStack.slice(0, 3);
  const ongoing = project.status === 'in-progress';

  return (
    <a
      ref={ref}
      href={href}
      style={{ '--reveal-delay': `${delay}s` } as React.CSSProperties}
      className={cn(revealClass, 'work-link group block rounded-2xl')}
    >
      <article className="work-card overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm">
        {shot && (
          <div className="flex h-7 items-center gap-1.5 border-b border-black/[0.06] bg-white px-3" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-black/10" />
            <span className="h-2 w-2 rounded-full bg-black/10" />
            <span className="h-2 w-2 rounded-full bg-black/10" />
            {host && <span className="ml-2 truncate text-[11px] text-gray-500">{host}</span>}
          </div>
        )}

        <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
          {shot ? (
            <picture>
              <source type="image/avif" srcSet={srcSet('avif')} sizes={WORK_SHOT_SIZES} />
              <source type="image/webp" srcSet={srcSet('webp')} sizes={WORK_SHOT_SIZES} />
              <img
                src={`/work/${shot}-800.webp`}
                alt={t(language, 'work.screenshotAlt', { title: project.metadata.title })}
                width={1200}
                height={750}
                loading="lazy"
                decoding="async"
                className="work-shot h-full w-full object-cover object-top"
              />
            </picture>
          ) : diagram ? (
            <div className="work-shot h-full w-full">
              <WorkDiagram
                kind={diagram}
                caption={`${project.metadata.title.toUpperCase()} — ${t(language, 'work.schematic').toUpperCase()}`}
              />
            </div>
          ) : (
            <div className="work-shot flex h-full w-full flex-col justify-end p-6 md:p-8" aria-hidden="true">
              <span className="display-heading text-4xl leading-none text-gray-900 md:text-5xl">
                {project.metadata.title}
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">
              {categoryLabel} · {project.year}
            </p>
            {ongoing && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-600">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-900" aria-hidden="true" />
                {t(language, 'work.ongoing')}
              </span>
            )}
          </div>
          <h3 className="mt-1.5 text-base font-semibold text-gray-900">
            {project.metadata.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {project.metadata.description}
          </p>

          {topTech.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {topTech.map((tech) => (
                <span key={tech} className="inline-block rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 transition-colors group-hover:text-accent">
            {t(language, 'work.viewProject')}
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </a>
  );
};

// ─── Contact form component ──────────────────────────────────────────────────

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactSection: React.FC<{ language: Language }> = ({ language }) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [serviceCategory, setServiceCategory] = useState<string | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Listen for prefill events from pricing card CTAs
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{
        message?: string;
        serviceCategory?: string;
      }>).detail;
      if (!detail) return;
      if (detail.serviceCategory) setServiceCategory(detail.serviceCategory);
      if (detail.message) {
        setFormData((prev) => ({ ...prev, message: detail.message ?? prev.message }));
      }
      // Defer focus until after smooth-scroll settles
      window.setTimeout(() => {
        messageRef.current?.focus();
        messageRef.current?.setSelectionRange(
          messageRef.current.value.length,
          messageRef.current.value.length,
        );
      }, 600);
    };
    window.addEventListener('dendora:prefill-contact', handler);
    return () => window.removeEventListener('dendora:prefill-contact', handler);
  }, []);

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
          body: JSON.stringify({
            source: 'main',
            ...(serviceCategory ? { serviceCategory } : {}),
            ...formData,
          }),
        });

        if (!res.ok) throw new Error('send failed');
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setServiceCategory(null);
      } catch {
        setStatus('error');
      }
    },
    [formData, serviceCategory],
  );

  const isBusy = status === 'sending';

  return (
    <section id={SECTION_IDS[language].contact} className="on-dark bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
        <MotionFade>
          <h2 className="display-heading text-4xl leading-[1.05] md:text-5xl text-white mb-3 text-center">
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
              {serviceCategory && (
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    <Tag className="h-3 w-3" />
                    {serviceCategory}
                    <button
                      type="button"
                      onClick={() => setServiceCategory(null)}
                      aria-label="Szolgáltatás eltávolítása"
                      className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-emerald-400/20 cursor-pointer"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                </div>
              )}
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
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-accent-on-dark focus:outline-none focus:ring-1 focus:ring-accent-on-dark transition disabled:opacity-50"
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
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-accent-on-dark focus:outline-none focus:ring-1 focus:ring-accent-on-dark transition disabled:opacity-50"
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
                  ref={messageRef}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t(language, 'contact.form.messagePlaceholder')}
                  disabled={isBusy}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-accent-on-dark focus:outline-none focus:ring-1 focus:ring-accent-on-dark transition resize-none disabled:opacity-50"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">{t(language, 'contact.form.error')}</p>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isBusy}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-hover cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
              </div>
            </form>
          </MotionFade>
        )}

        <MotionFade delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-sm text-gray-400">
              {t(language, 'contact.fallback')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 text-gray-300 hover:text-accent-on-dark transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                {CONTACT_EMAIL}
              </a>
              <span className="text-gray-600" aria-hidden="true">|</span>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-1.5 text-gray-300 hover:text-accent-on-dark transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                {CONTACT_PHONE}
              </a>
            </div>
          </div>
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

  // Hero — left-aligned; rendered without fade so the H1 paints immediately (LCP)
  const renderHero = () => (
    <section id="hero" className="relative overflow-hidden">
      <HeroMark />
      <div className="relative mx-auto flex max-w-6xl items-center px-4 pt-20 pb-16 sm:pt-24 md:min-h-[min(80svh,52rem)] md:pt-28 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="display-heading hero-title text-[3.25rem] text-gray-900 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {renderEmphasis(t(language, 'hero.title'))}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 md:mt-8 md:text-xl">
            {t(language, 'hero.subtitle')}
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`#${SECTION_IDS[language].work}`}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-accent-hover"
            >
              {t(language, 'hero.cta.seeWork')}
              <ArrowRight className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" />
            </a>
            <a
              href={`#${SECTION_IDS[language].contact}`}
              className="self-start text-base font-medium text-gray-900 underline decoration-black/20 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-current sm:self-auto"
            >
              {t(language, 'hero.cta.startProject')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // Work section
  const renderWork = () => {
    if (!config.layout.showSections.work) return null;

    const categoryLabels: Record<string, Record<Language, string>> = {
      'website': { en: 'Website', hu: 'Weboldal' },
      'web-application': { en: 'Web App', hu: 'Webalkalmazás' },
      'data-platform': { en: 'Platform', hu: 'Platform' },
      'infrastructure': { en: 'Infrastructure', hu: 'Infrastruktúra' },
    };

    return (
      <section id={SECTION_IDS[language].work} className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <SectionHeader
            title={t(language, 'work.title')}
            subtitle={t(language, 'work.subtitle')}
            display
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2 items-start">
            {projects.map((project, index) => (
              <WorkCard
                key={project.id}
                project={project}
                language={language}
                categoryLabel={categoryLabels[project.category]?.[language] ?? project.category}
                delay={(index % 2) * 0.08}
              />
            ))}
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
      <AiChatWidget context="general" language={language} />
    </div>
  );
};
