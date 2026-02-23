import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail, Github, Globe, CheckCircle2 } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { cn } from '../../lib/utils';
import { t, type Language } from '../../lib/translations';
import { getAllProjects } from '../../lib/projects-json';
import { Navigation, SectionHeader, Card, Button, MotionFade, Logo } from '../ui';
import { Footer } from '../layout';

interface DendoraLandingProps {
  language: Language;
}

export const DendoraLanding: React.FC<DendoraLandingProps> = (props) => {
  const { language = 'hu' } = props || {};
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const projects = getAllProjects(language);
  
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  
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

  return <div className="min-h-dvh w-full bg-white text-black antialiased">
      {/* Header */}
      <Navigation language={language} variant="landing" />

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
              <Button variant="primary" onClick={() => scrollTo('contact')}>
                <span>{t(language, 'hero.cta.startProject')}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => scrollTo('work')}>
                <span>{t(language, 'hero.cta.seeWork')}</span>
              </Button>
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
              <Logo 
                size="lg" 
                showText 
                textContent={{
                  companyName: t(language, 'hero.brandCard.companyName'),
                  tagline: t(language, 'hero.brandCard.tagline')
                }}
                className="items-center gap-4"
              />
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
          <SectionHeader 
            title={t(language, 'services.title')} 
            subtitle={t(language, 'services.subtitle')} 
          />

          <div className="grid gap-4 md:grid-cols-3">
            <Card 
              variant="feature"
              title={t(language, 'services.features.strategy.title')} 
              description={t(language, 'services.features.strategy.description')} 
            />
            <Card 
              variant="feature"
              title={t(language, 'services.features.frontend.title')} 
              description={t(language, 'services.features.frontend.description')} 
            />
            <Card 
              variant="feature"
              title={t(language, 'services.features.backend.title')} 
              description={t(language, 'services.features.backend.description')} 
            />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <SectionHeader 
            title={t(language, 'work.title')} 
            subtitle={t(language, 'work.subtitle')} 
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => {
              const isDetailProject = ['foundrypulse', 'andihealth'].includes(project.id);
              const isFoundryPulse = project.id === 'foundrypulse';
              const projectUrl = language === 'hu' 
                ? `/work/${project.slug}` 
                : `/en/work/${project.slug}`;
              
              const title = project.metadata.title;
              const description = project.metadata.description;

              // Define background gradients for non-FoundryPulse projects
              const getProjectBackground = (projectId: string) => {
                switch (projectId) {
                  case 'andihealth':
                    return 'bg-[#494949]';
                  case 'analytics':
                    return 'bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]';
                  case 'infrastructure':
                    return 'bg-[linear-gradient(135deg,#f093fb_0%,#f5576c_100%)]';
                  default:
                    return 'bg-black';
                }
              };

              const cardContent = (
                <motion.article 
                  key={project.id} 
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
                            alt={title} 
                            className="max-h-full max-w-full object-contain brightness-0 invert" 
                          />
                        </picture>
                      </div>
                    ) : project.images.hero && isDetailProject ? (
                      <img 
                        src={project.images.hero} 
                        alt={title} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-between px-4 py-3">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white">
                          <div className="relative h-8 w-8" aria-hidden="true">
                            <div className="absolute inset-0 rounded-[6px] bg-white/10" />
                            <div className="absolute left-1 top-1 h-6 w-6 rounded-[5px] bg-white" />
                            <div className="absolute right-1 top-1 h-6 w-2.5 rounded-r-[5px] bg-black/80" />
                          </div>
                          <span className="text-sm font-medium tracking-tight">{title}</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                          <span>{t(language, 'work.caseStudy')}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold">
                      <span>{title}</span>
                    </h3>
                    <p className="mt-1 text-sm text-black/60">
                      <span>{description}</span>
                    </p>
                    {isDetailProject && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = projectUrl;
                        }}
                        className="mt-3 inline-flex items-center gap-1 text-sm text-black/70 hover:text-black transition-colors bg-transparent border-none cursor-pointer"
                      >
                        <span>{t(language, 'work.viewProject')}</span>
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </button>
                    )}
                  </div>
                </motion.article>
              );

              return isDetailProject ? (
                <a key={project.id} href={projectUrl} className="block">
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
                <Button variant="outline" onClick={() => scrollTo('contact')}><span>{t(language, 'about.cta')}</span></Button>
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