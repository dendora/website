import React, { useEffect } from 'react'
import { ArrowLeft, Check, ExternalLink, Github } from 'lucide-react'
import { type Language } from '../../lib/translations'
import { type ProjectData } from '../../lib/projects-json'
import { MotionFade, SectionHeader, Card, Button } from '../ui'

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
          {/* Hero Image */}
          {project.images.hero && (
            <div className="mb-8 flex justify-center">
              <div className="bg-black rounded-xl p-8 w-full max-w-md aspect-[16/10] flex items-center justify-center">
                <img 
                  src={project.images.hero} 
                  alt={localizedTitle}
                  className="max-h-full max-w-full object-contain brightness-0 invert"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          )}
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">{localizedTitle}</h1>
            <p className="text-xl text-black/70">{localizedSubtitle}</p>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-black/60">
              <span>{project.year}</span>
              <span>•</span>
              <span className="capitalize">{project.status.replace('-', ' ')}</span>
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
                <h3 className="text-xl font-semibold text-black mb-4">Challenge</h3>
                <p className="text-black/70 leading-relaxed">{localizedChallenge}</p>
              </div>
            </MotionFade>
            <MotionFade delay={0.2} duration={0.6}>
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Solution</h3>
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
              title="Key Features"
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
              title="Technical Stack"
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
                title="Project Gallery"
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
              Back to Home
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
                  Live Site
                </a>
              )}
              
              {project.links.github && (
                <a 
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5 cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>
          </MotionFade>
        </div>
      </section>
    </div>
  )
}