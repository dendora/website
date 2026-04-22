import React, { useEffect } from 'react'
import { ArrowLeft, Check, ExternalLink } from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.85 3.15 8.96 7.52 10.42.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.3-3.71-1.3-.5-1.27-1.22-1.61-1.22-1.61-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.39.11-2.9 0 0 .92-.29 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.42 3.02-1.13 3.02-1.13.6 1.51.22 2.62.11 2.9.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1 .74 2.02 0 1.46-.01 2.64-.01 3 0 .29.2.64.76.53A11.01 11.01 0 0 0 23 11.5C23 5.24 18.27.5 12 .5Z" />
  </svg>
)
import { type Language, t } from '../../lib/translations'
import { type ProjectData } from '../../lib/projects-json'
import { MotionFade, SectionHeader } from '../ui'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

interface ProjectDetailsPageProps {
  language: Language;
  project: ProjectData;
}

export default function ProjectDetailsPage({ language, project }: ProjectDetailsPageProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const localizedTitle = project.metadata.title;
  const localizedSubtitle = project.metadata.subtitle;
  const localizedOverview = project.content.overview;
  const localizedChallenge = project.content.challenge;
  const localizedSolution = project.content.solution;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <MotionFade duration={0.6}>
          {/* Hero Image or HTML */}
          {(project.images.heroHtml || project.images.hero) && (() => {
            const bgStyle: React.CSSProperties = project.cardBackground
              ? { background: project.cardBackground.replace(/_/g, ' ') }
              : { background: 'rgba(0,0,0,0.05)' };
            const content = project.images.heroHtml ? (
              <div dangerouslySetInnerHTML={{ __html: project.images.heroHtml }} />
            ) : (
              <img
                src={project.images.hero}
                alt={localizedTitle}
                className="max-h-full max-w-[65%] object-contain brightness-0 invert drop-shadow-lg"
                loading="lazy"
                decoding="async"
              />
            );
            return (
              <div className="mb-8 flex justify-center">
                {project.links.website ? (
                  <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="rounded-xl p-8 w-full max-w-md aspect-[16/10] flex items-center justify-center transition-opacity hover:opacity-90" style={bgStyle}>
                    {content}
                  </a>
                ) : (
                  <div className="rounded-xl p-8 w-full max-w-md aspect-[16/10] flex items-center justify-center" style={bgStyle}>
                    {content}
                  </div>
                )}
              </div>
            );
          })()}
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">{localizedTitle}</h1>
            <p className="text-xl text-black/70">{localizedSubtitle}</p>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-black/60">
              <span>{project.year}</span>
            </div>
          </div>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-black/65 leading-relaxed text-lg">
              {localizedOverview}
            </p>
          </div>
        </MotionFade>
      </section>

      {/* Challenge & Solution */}
      <section className="border-t border-black/5 bg-gray-50/30">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <MotionFade delay={0.1} duration={0.6}>
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">{t(language, 'projectDetails.challenge')}</h3>
                <p className="text-black/70 leading-relaxed">{localizedChallenge}</p>
              </div>
            </MotionFade>
            <MotionFade delay={0.2} duration={0.6}>
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">{t(language, 'projectDetails.solution')}</h3>
                <p className="text-black/70 leading-relaxed">{localizedSolution}</p>
              </div>
            </MotionFade>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="border-t border-black/5">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <MotionFade delay={0.1} duration={0.6}>
            <SectionHeader 
              title={t(language, 'projectDetails.keyFeatures')}
              alignment="left"
            />
            <div className="space-y-4">
              {project.features.map((feature, index) => (
                <MotionFade
                  key={index}
                  delay={index * 0.1}
                  duration={0.4}
                  direction="right"
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black/90">
                      {feature.title}
                    </h3>
                    <p className="text-black/70 text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </MotionFade>
              ))}
            </div>
          </MotionFade>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="border-t border-black/5 bg-gray-50/30">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <MotionFade delay={0.2} duration={0.6}>
            <SectionHeader 
              title={t(language, 'projectDetails.technicalStack')}
              alignment="left"
            />
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <MotionFade
                  key={index}
                  delay={index * 0.05}
                  duration={0.4}
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-black/10 text-black/80">
                    {tech}
                  </span>
                </MotionFade>
              ))}
            </div>
          </MotionFade>
        </div>
      </section>

      {/* Gallery Section (if images provided) */}
      {project.images.gallery && project.images.gallery.length > 0 && (
        <section className="border-t border-black/5">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <MotionFade delay={0.3} duration={0.6}>
              <SectionHeader 
                title={t(language, 'projectDetails.projectGallery')}
                alignment="left"
              />
              <div className="grid gap-4 md:grid-cols-2">
                {project.images.gallery.map((image, index) => (
                  <MotionFade
                    key={index}
                    delay={index * 0.1}
                    duration={0.4}
                  >
                    <img
                      src={image}
                      alt={`${localizedTitle} - Image ${index + 1}`}
                      className="rounded-lg border border-black/10"
                      loading="lazy"
                      decoding="async"
                    />
                  </MotionFade>
                ))}
              </div>
            </MotionFade>
          </div>
        </section>
      )}

      {/* Navigation & Links */}
      <section className="border-t border-black/5 bg-gray-50/30">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <MotionFade
            delay={0.3}
            duration={0.6}
            className="flex justify-between items-center"
          >
            <a 
              href={language === 'hu' ? '/' : '/en/'}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:border-black/20 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              {t(language, 'projectDetails.backToHome')}
            </a>
            
            <div className="flex gap-3">
              {project.links.website && (
                <a 
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85 cursor-pointer"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t(language, 'projectDetails.liveSite')}
                </a>
              )}
              
              {project.links.github && (
                <a 
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5 cursor-pointer"
                >
                  <GithubIcon className="h-4 w-4" />
                  {t(language, 'projectDetails.github')}
                </a>
              )}
            </div>
          </MotionFade>
        </div>
      </section>
    </div>
  )
}