import React, { useEffect } from 'react'
import { ArrowLeft, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { t, type Language } from '../lib/translations'

interface FoundryPulseDetailsProps {
  language: Language;
}

export default function FoundryPulseDetails({ language }: FoundryPulseDetailsProps) {
  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false

  // Scroll to top when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  const features = t(language, 'foundryPulse.features')
  
  const techStack = [
    { category: t(language, 'foundryPulse.techStack.frontend.category'), tech: t(language, 'foundryPulse.techStack.frontend.tech') },
    { category: t(language, 'foundryPulse.techStack.backend.category'), tech: t(language, 'foundryPulse.techStack.backend.tech') },
    { category: t(language, 'foundryPulse.techStack.architecture.category'), tech: t(language, 'foundryPulse.techStack.architecture.tech') },
    { category: t(language, 'foundryPulse.techStack.ui.category'), tech: t(language, 'foundryPulse.techStack.ui.tech') },
    { category: t(language, 'foundryPulse.techStack.testing.category'), tech: t(language, 'foundryPulse.techStack.testing.tech') }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo Display */}
          <div className="mb-8 flex justify-center">
            <div className="bg-[#0B0D10] rounded-xl p-8 w-full max-w-md aspect-[16/10] flex items-center justify-center">
              <img 
                src="/foundrypulse-wordmark.png" 
                alt="FoundryPulse wordmark with pouring ladle and pulse icon"
                className="max-h-full max-w-full object-contain brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-black/65 leading-relaxed text-lg">
              {t(language, 'foundryPulse.description')}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Key Features */}
      <section className="border-t border-black/5 bg-gray-50/30">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t(language, 'foundryPulse.keyFeatures')}</h2>
            <div className="space-y-4">
              {features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-black/70">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="border-t border-black/5">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t(language, 'foundryPulse.technicalStack')}</h2>
            <div className="grid gap-4 md:gap-6">
              {techStack.map((item, index) => (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border border-black/10 rounded-lg p-4 bg-white"
                >
                  <h3 className="font-medium text-gray-900 mb-2">{item.category}</h3>
                  <p className="text-sm text-black/70">{item.tech}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="border-t border-black/5 bg-gray-50/30">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-black/65 leading-relaxed max-w-2xl mx-auto">
              {t(language, 'foundryPulse.conclusion')}
            </p>
            
            <div className="mt-8 flex justify-center gap-4">
              <a 
                href={language === 'hu' ? '/' : '/en/'}
                className="inline-flex items-center gap-2 rounded-lg border border-black/20 px-4 py-2 text-sm font-medium text-black/80 hover:bg-black/5 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {t(language, 'foundryPulse.backToWork')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}