import { ArrowLeft, Check, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

interface FoundryPulseDetailsProps {
  onBack: () => void
}

export default function FoundryPulseDetails({ onBack }: FoundryPulseDetailsProps) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const features = [
    "Real-time Operations Dashboard - Live monitoring of production lines and equipment status",
    "Multi-language Support - Internationalized interface with next-intl", 
    "Role-based Access Control - Secure JWT authentication with granular permissions",
    "Production Analytics - Data-driven insights for manufacturing optimization",
    "Configurable Storage - Flexible S3/filesystem integration for document management"
  ]

  const techStack = [
    { category: "Frontend", tech: "Next.js 15 App Router, React 19, TypeScript, Tailwind CSS" },
    { category: "Backend", tech: "PostgreSQL with Drizzle ORM for type-safe database operations" },
    { category: "Architecture", tech: "Service-oriented design with centralized business logic" },
    { category: "UI Components", tech: "Radix UI primitives with shadcn/ui styling" },
    { category: "Testing", tech: "Vitest for comprehensive test coverage" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-black/5 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to work
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
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FoundryPulse</h1>
          <p className="text-lg text-black/70 mb-8">
            A modern manufacturing operations platform built with Next.js 15 and TypeScript
          </p>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-black/65 leading-relaxed">
              FoundryPulse is a comprehensive production management system designed for manufacturing environments. 
              It features real-time factory monitoring, equipment tracking, and production analytics with a clean, 
              responsive interface built on React 19 and Tailwind CSS.
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h2>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Stack</h2>
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
              Built for scalability and maintainability with modern development practices and clean architecture patterns.
            </p>
            
            <div className="mt-8 flex justify-center gap-4">
              <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 rounded-lg border border-black/20 px-4 py-2 text-sm font-medium text-black/80 hover:bg-black/5 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to work
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}