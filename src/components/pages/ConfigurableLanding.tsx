import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Mail, Github, Globe, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { t, type Language } from '../../lib/variant-translations';
import { getAllProjects } from '../../lib/projects-json';
import { getCurrentSiteConfig } from '../../lib/runtime-variant';
import { CONTACT_EMAIL } from '../../lib/site-config';
import { 
  Navigation, 
  SectionHeader, 
  Card, 
  Button, 
  MotionFade, 
  Logo,
  HeroMinimal,
  HeroTestimonialFocused,
  HeroCaseStudy,
  LocalPresenceSection 
} from '../ui';
import { Footer } from '../layout';
import { DevVariantSwitcher } from '../dev/DevVariantSwitcher';
import { useDevVariantShortcuts } from '../dev/useDevVariantShortcuts';

interface ConfigurableLandingProps {
  language: Language;
}

// Extracted to module scope to avoid remounting on every parent render
const DefaultHero: React.FC<{ language: Language; showStats: boolean }> = ({ language, showStats }) => (
  <section id="hero" className="min-h-screen flex items-center px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-8">
        <MotionFade>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {t(language, 'hero.title')}
          </h1>
        </MotionFade>
        
        <MotionFade delay={0.1}>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            {t(language, 'hero.subtitle')}
          </p>
        </MotionFade>

        <MotionFade delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:bg-black/85 cursor-pointer group"
            >
              {t(language, 'hero.cta.startProject')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-base font-medium text-black transition hover:border-black/20 hover:bg-black/5 cursor-pointer"
            >
              {t(language, 'hero.cta.seeWork')}
            </a>
          </div>
        </MotionFade>

        {showStats && (
          <MotionFade delay={0.3}>
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {t(language, 'hero.stats.experience.value')}
                </div>
                <div className="text-gray-700">
                  {t(language, 'hero.stats.experience.label')}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {t(language, 'hero.stats.remote.value')}
                </div>
                <div className="text-gray-700">
                  {t(language, 'hero.stats.remote.label')}
                </div>
              </div>
            </div>
          </MotionFade>
        )}
      </div>

      <div className="lg:pl-12">
        <MotionFade delay={0.4}>
          <Card className="p-8 bg-white shadow-xl border border-gray-100" showIcon={false}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Logo size="sm" />
                <div>
                  <div className="font-bold text-gray-900">
                    {t(language, 'hero.brandCard.companyName')}
                  </div>
                  <div className="text-sm text-gray-700">
                    {t(language, 'hero.brandCard.tagline')}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t(language, 'hero.brandCard.description')}
              </p>
            </div>
          </Card>
        </MotionFade>
      </div>
    </div>
  </section>
);

// Lightweight scroll-triggered fade for work cards (replaces motion.article)
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

export const ConfigurableLanding: React.FC<ConfigurableLandingProps> = (props) => {
  const { language = 'hu' } = props || {};
  const projects = getAllProjects(language);
  const config = getCurrentSiteConfig();
  
  // Development shortcuts for variant switching
  useDevVariantShortcuts();
  
  // Hero Component Selection
  const renderHero = () => {
    const heroProps = { language };
    
    switch (config.layout.heroStyle) {
      case 'minimal':
        return <HeroMinimal {...heroProps} />;
      case 'testimonial-focused':
        return <HeroTestimonialFocused {...heroProps} />;
      case 'case-study-hero':
        return <HeroCaseStudy {...heroProps} />;
      default:
        return <DefaultHero {...heroProps} showStats={config.layout.showSections.stats} />;
    }
  };

  // Services Section
  const renderServices = () => {
    if (!config.layout.showSections.services) return null;

    return (
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t(language, 'services.title')}
            subtitle={t(language, 'services.subtitle')}
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['strategy', 'frontend', 'backend', 'ai'].map((service, index) => (
              <MotionFade key={service} delay={index * 0.1}>
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t(language, `services.features.${service}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(language, `services.features.${service}.description`)}
                  </p>
                </Card>
              </MotionFade>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Work Section
  const renderWork = () => {
    if (!config.layout.showSections.work) return null;

    const filteredProjects = config.content.caseStudyFocus === 'foundrypulse' 
      ? projects.filter(p => p.id === 'foundrypulse')
      : projects;

    // Projects with detail pages (clickable cards)
    const detailProjects = new Set(['foundrypulse', 'andihealth']);

    // Define background gradients for non-detail projects
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

    // International variant matches original design exactly
    if (config.variant === 'international') {
      return (
        <section id="work" className="border-t border-black/5">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <SectionHeader
              title={t(language, 'work.title')}
              subtitle={t(language, 'work.subtitle')}
            />

            <div className="grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project, index) => {
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
    }

    // Other variants use modern card styling
    return (
      <section id="work" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t(language, 'work.title')}
            subtitle={config.content.emphasizeLocal 
              ? (language === 'hu' ? 'Helyi és regionális sikereink' : 'Our local and regional successes')
              : t(language, 'work.subtitle')
            }
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const isDetailProject = detailProjects.has(project.id);
              const isFoundryPulse = project.id === 'foundrypulse';
              const projectUrl = `/${language === 'en' ? 'en/' : ''}work/${project.slug}`;
              
              const cardContent = (
                <Card className={cn(
                  "group hover:shadow-xl transition-all duration-300 overflow-hidden",
                  isDetailProject && "cursor-pointer hover:border-black/20"
                )}>
                  <div className={cn(
                    "aspect-video relative overflow-hidden",
                    isFoundryPulse ? "bg-black" : getProjectBackground(project.id)
                  )}>
                    {project.images.hero && isFoundryPulse ? (
                      <div className="flex h-full w-full items-center justify-center p-8">
                        <img
                          src={project.images.hero}
                          alt={project.metadata.title}
                          className="max-h-full max-w-full object-contain brightness-0 invert"
                        />
                      </div>
                    ) : project.images.hero && isDetailProject ? (
                      <img
                        src={project.images.hero}
                        alt={project.metadata.title}
                        className="w-full h-full object-cover"
                      />
                    ) : project.images.hero ? (
                      <img
                        src={project.images.hero}
                        alt={project.metadata.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.metadata.title}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {project.metadata.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {isDetailProject && (
                      <span className="mt-4 inline-flex items-center gap-1 text-sm text-black/70 group-hover:text-black transition-colors">
                        <span>{t(language, 'work.viewProject')}</span>
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </span>
                    )}
                  </div>
                </Card>
              );

              return (
                <MotionFade key={project.id} delay={index * 0.1}>
                  {isDetailProject ? (
                    <a href={projectUrl} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded-xl">
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  )}
                </MotionFade>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // Why Us Section
  const renderWhyUs = () => {
    if (!config.layout.showSections.about) return null;

    return (
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <MotionFade>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t(language, 'about.title')}
                </h2>
              </MotionFade>
              <MotionFade delay={0.1}>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {t(language, 'about.description')}
                </p>
              </MotionFade>
              <MotionFade delay={0.2}>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-black flex-shrink-0" />
                    <span>{t(language, 'about.features.engineering')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-black flex-shrink-0" />
                    <span>{t(language, 'about.features.delivery')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-black flex-shrink-0" />
                    <span>{t(language, 'about.features.maintainability')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-black flex-shrink-0" />
                    <span>{t(language, 'about.features.ai')}</span>
                  </li>
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
                  <Card className="p-6 hover:shadow-md transition-shadow">
                    <div className="font-semibold text-gray-900 mb-1">{t(language, 'about.cards.stack.title')}</div>
                    <p className="text-sm text-gray-600">{t(language, 'about.cards.stack.description')}</p>
                  </Card>
                  <Card className="p-6 hover:shadow-md transition-shadow">
                    <div className="font-semibold text-gray-900 mb-1">{t(language, 'about.cards.approach.title')}</div>
                    <p className="text-sm text-gray-600">{t(language, 'about.cards.approach.description')}</p>
                  </Card>
                  <Card className="p-6 hover:shadow-md transition-shadow">
                    <div className="font-semibold text-gray-900 mb-1">{t(language, 'about.cards.principles.title')}</div>
                    <p className="text-sm text-gray-600">{t(language, 'about.cards.principles.description')}</p>
                  </Card>
                  <Card className="p-6 hover:shadow-md transition-shadow">
                    <div className="font-semibold text-gray-900 mb-1">{t(language, 'about.cards.engagement.title')}</div>
                    <p className="text-sm text-gray-600">{t(language, 'about.cards.engagement.description')}</p>
                  </Card>
                </div>
              </MotionFade>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Contact Section
  const renderContact = () => {
    if (!config.layout.showSections.contact) return null;

    const contactStyle = config.content.contactApproach;
    const isPersonal = contactStyle === 'personal';
    const isLocal = contactStyle === 'local';

    return (
      <section id="contact" className={cn(
        "py-24",
        isPersonal ? "bg-gradient-to-br from-orange-50 to-amber-50" : "bg-gray-900"
      )}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionFade>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-6",
              isPersonal ? "text-gray-900" : "text-white"
            )}>
              {isPersonal 
                ? (language === 'hu' ? 'Beszélgessünk a projektjéről' : 'Let\'s talk about your project')
                : t(language, 'contact.title')
              }
            </h2>
          </MotionFade>
          
          <MotionFade delay={0.1}>
            <p className={cn(
              "text-xl mb-8",
              isPersonal ? "text-gray-700" : "text-gray-300"
            )}>
              {isPersonal 
                ? (language === 'hu' 
                    ? 'Kávé mellett vagy videohívásban - mindig szívesen beszélgetünk új projektekről.'
                    : 'Over coffee or video call - we always love discussing new projects.'
                  )
                : t(language, 'contact.subtitle')
              }
            </p>
          </MotionFade>

          <MotionFade delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium transition cursor-pointer group",
                  isPersonal 
                    ? "bg-orange-600 hover:bg-orange-700 text-white" 
                    : "bg-white text-gray-900 hover:bg-gray-100"
                )}
              >
                <Mail className="mr-2 h-5 w-5" />
                {isPersonal 
                  ? (language === 'hu' ? 'Írjon nekünk' : 'Write to us')
                  : t(language, 'contact.cta.email')
                }
              </a>
              {isLocal && (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 text-base font-medium transition cursor-pointer"
                >
                  {language === 'hu' ? 'Személyes találkozó' : 'Meet in person'}
                </a>
              )}
            </div>
          </MotionFade>
        </div>
      </section>
    );
  };

  // Render sections based on config
  const renderSections = () => {
    return config.layout.sectionsOrder.map((section: string) => {
      switch (section) {
        case 'hero':
          return <div key="hero">{renderHero()}</div>;
        case 'services':
          return <div key="services">{renderServices()}</div>;
        case 'work':
          return <div key="work">{renderWork()}</div>;
        case 'about':
          return <div key="about">{renderWhyUs()}</div>;
        case 'localPresence':
          return config.layout.showSections.localPresence ? (
            <LocalPresenceSection key="localPresence" language={language} />
          ) : null;
        case 'contact':
          return <div key="contact">{renderContact()}</div>;
        default:
          return null;
      }
    });
  };

  return (
    <div className={cn(
      "min-h-screen bg-white",
      `variant-${config.variant}`,
      `color-${config.styling.colorScheme}`,
      `typography-${config.styling.typography}`
    )}>
      <Navigation 
        language={language} 
      />
      
      <main id="main-content">
        {renderSections()}
      </main>

      <Footer 
        language={language}
      />

      {/* Development-only variant switcher */}
      <DevVariantSwitcher />
    </div>
  );
};