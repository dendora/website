import React, { useEffect } from 'react'
import { ArrowLeft, Check, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '../hooks/useTranslation'

interface FoundryPulseDetailsProps {
  onBack: () => void
}

export default function FoundryPulseDetails({ onBack }: FoundryPulseDetailsProps) {
  const { t } = useTranslation()
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = t('foundryPulse.features')
  
  const techStack = [
    { category: t('foundryPulse.techStack.frontend.category'), tech: t('foundryPulse.techStack.frontend.tech') },
    { category: t('foundryPulse.techStack.backend.category'), tech: t('foundryPulse.techStack.backend.tech') },
    { category: t('foundryPulse.techStack.architecture.category'), tech: t('foundryPulse.techStack.architecture.tech') },
    { category: t('foundryPulse.techStack.ui.category'), tech: t('foundryPulse.techStack.ui.tech') },
    { category: t('foundryPulse.techStack.testing.category'), tech: t('foundryPulse.techStack.testing.tech') }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-black/5 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('foundryPulse.backToWork')}
          </button>
        </div>
      </header>

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

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('foundryPulse.title')}</h1>
          <p className="text-lg text-black/70 mb-8">
            {t('foundryPulse.subtitle')}
          </p>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-black/65 leading-relaxed">
              {t('foundryPulse.description')}
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('foundryPulse.keyFeatures')}</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('foundryPulse.technicalStack')}</h2>
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
              {t('foundryPulse.conclusion')}
            </p>
            
            <div className="mt-8 flex justify-center gap-4">
              <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 rounded-lg border border-black/20 px-4 py-2 text-sm font-medium text-black/80 hover:bg-black/5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                {t('foundryPulse.backToWork')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}