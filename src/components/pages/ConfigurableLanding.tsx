import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail, Github, Globe, CheckCircle2 } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { cn } from '../../lib/utils';
import { t, type Language } from '../../lib/variant-translations';
import { getAllProjects } from '../../lib/projects-json';
import { getCurrentSiteConfig } from '../../lib/runtime-variant';
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

export const ConfigurableLanding: React.FC<ConfigurableLandingProps> = (props) => {
  const { language = 'hu' } = props || {};
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const projects = getAllProjects(language);
  const config = getCurrentSiteConfig();
  
  // Development shortcuts for variant switching
  useDevVariantShortcuts();
  
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Hero Component Selection
  const renderHero = () => {
    const heroProps = { language, scrollTo };
    
    switch (config.layout.heroStyle) {
      case 'minimal':
        return <HeroMinimal {...heroProps} />;
      case 'testimonial-focused':
        return <HeroTestimonialFocused {...heroProps} />;
      case 'case-study-hero':
        return <HeroCaseStudy {...heroProps} />;
      default:
        return <DefaultHero {...heroProps} />;
    }
  };

  // Default Hero (existing hero)
  const DefaultHero: React.FC<{ language: Language; scrollTo: (id: string) => void }> = ({ language, scrollTo }) => (
    <section id="hero" className="min-h-screen flex items-center px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <MotionFade>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t(language, 'hero.title')}
            </h1>
          </MotionFade>
          
          <MotionFade delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              {t(language, 'hero.subtitle')}
            </p>
          </MotionFade>

          <MotionFade delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollTo('contact')}
                size="lg"
                className="group"
              >
                {t(language, 'hero.cta.startProject')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={() => scrollTo('work')}
                variant="outline"
                size="lg"
              >
                {t(language, 'hero.cta.seeWork')}
              </Button>
            </div>
          </MotionFade>

          {config.layout.showSections.stats && (
            <MotionFade delay={0.3}>
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {t(language, 'hero.stats.experience.value')}
                  </div>
                  <div className="text-gray-600">
                    {t(language, 'hero.stats.experience.label')}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {t(language, 'hero.stats.remote.value')}
                  </div>
                  <div className="text-gray-600">
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
                    <div className="text-sm text-gray-600">
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

          <div className="grid md:grid-cols-3 gap-8">
            {['strategy', 'frontend', 'backend'].map((service, index) => (
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

    const filteredProjects = config.content.casStudyFocus === 'foundrypulse' 
      ? projects.filter(p => p.id === 'foundrypulse')
      : projects;

    // Define background gradients for non-FoundryPulse projects
    const getProjectBackground = (projectId: string) => {
      switch (projectId) {
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

            <div className="grid gap-6 md:grid-cols-3">
              {filteredProjects.map((project, index) => {
                const isFoundryPulse = project.id === 'foundrypulse';
                const projectUrl = language === 'hu' 
                  ? `/work/${project.slug}` 
                  : `/en/work/${project.slug}`;
                
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
                      delay: index * 0.05
                    }} 
                    className={cn(
                      "group relative overflow-hidden rounded-xl border border-black/10 bg-white",
                      isFoundryPulse && "cursor-pointer hover:border-black/20 transition-colors"
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
                            />
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
                      <p className="mt-1 text-sm text-black/60">
                        <span>{project.metadata.description}</span>
                      </p>
                      {isFoundryPulse && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = projectUrl;
                          }}
                          className="mt-3 inline-flex items-center gap-1 text-sm text-black/70 hover:text-black transition-colors bg-transparent border-none cursor-pointer"
                        >
                          <span>{t(language, 'work.projects.foundryPulse.details')}</span>
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </button>
                      )}
                    </div>
                  </motion.article>
                );

                return isFoundryPulse ? (
                  <a key={project.id} href={projectUrl} className="block">
                    {cardContent}
                  </a>
                ) : cardContent;
              })}
            </div>
          </div>
        </section>
      );
    }

    // Other variants use modern card styling

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const isFoundryPulse = project.id === 'foundrypulse';
              const projectUrl = `/${language === 'en' ? 'en/' : ''}work/${project.slug}`;
              
              const cardContent = (
                <Card className={cn(
                  "group hover:shadow-xl transition-all duration-300 overflow-hidden",
                  isFoundryPulse && "cursor-pointer hover:border-black/20"
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
                    <p className="text-gray-600 mb-4 line-clamp-2">
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
                    {isFoundryPulse && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = projectUrl;
                        }}
                        className="mt-4 inline-flex items-center gap-1 text-sm text-black/70 hover:text-black transition-colors bg-transparent border-none cursor-pointer"
                      >
                        <span>{t(language, 'work.projects.foundryPulse.details')}</span>
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </button>
                    )}
                  </div>
                </Card>
              );

              return (
                <MotionFade key={project.id} delay={index * 0.1}>
                  {isFoundryPulse ? (
                    <a href={projectUrl} className="block">
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
              <Button
                size="lg"
                className={cn(
                  "group",
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
              </Button>
              {isLocal && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  {language === 'hu' ? 'Személyes találkozó' : 'Meet in person'}
                </Button>
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
      
      <main>
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