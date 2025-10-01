import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Button, MotionFade } from '../ui';
import { t, type Language } from '../../lib/variant-translations';
import { useIsMobile } from '../../hooks/use-mobile';

interface HeroMinimalProps {
  language: Language;
  scrollTo: (id: string) => void;
}

export const HeroMinimal: React.FC<HeroMinimalProps> = ({ language, scrollTo }) => {
  const isMobile = useIsMobile();

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <MotionFade>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-8">
            {t(language, 'hero.title')}
          </h1>
        </MotionFade>
        
        <MotionFade delay={0.2}>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            {t(language, 'hero.subtitle')}
          </p>
        </MotionFade>

        <MotionFade delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollTo('work')}
              variant="primary"
              size="lg"
              className="group"
            >
              {t(language, 'hero.cta.seeWork')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </MotionFade>
      </div>
    </section>
  );
};

interface HeroTestimonialFocusedProps {
  language: Language;
  scrollTo: (id: string) => void;
}

export const HeroTestimonialFocused: React.FC<HeroTestimonialFocusedProps> = ({ language, scrollTo }) => {
  return (
    <section className="min-h-screen flex items-center px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <MotionFade>
            <div className="flex items-center gap-2 mb-6 text-orange-600">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">
                {language === 'hu' ? 'Magyarország' : 'Hungary'}
              </span>
            </div>
          </MotionFade>
          
          <MotionFade delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t(language, 'hero.title')}
            </h1>
          </MotionFade>
          
          <MotionFade delay={0.2}>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t(language, 'hero.subtitle')}
            </p>
          </MotionFade>

          <MotionFade delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollTo('work')}
                variant="primary"
                size="lg"
                className="bg-orange-600 hover:bg-orange-700"
              >
                {t(language, 'hero.cta.seeWork')}
              </Button>
              <Button 
                onClick={() => scrollTo('contact')}
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                {language === 'hu' ? 'Beszélgessünk' : 'Let\'s talk'}
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </MotionFade>
        </div>

        <div className="lg:pl-12">
          <MotionFade delay={0.4}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-orange-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  {language === 'hu' 
                    ? '"A Dendora csapat segítségével 3 hónap alatt modernizáltuk a gyártási folyamatainkat. Professzionális munkavégzés nemzetközi szinten."'
                    : '"With Dendora\'s help, we modernized our manufacturing processes in 3 months. Professional work at international level."'
                  }
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg">FP</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {language === 'hu' ? 'Autóipari Ügyfél' : 'Automotive Client'}
                  </div>
                  <div className="text-gray-600 text-sm">FoundryPulse</div>
                </div>
              </div>
            </div>
          </MotionFade>
        </div>
      </div>
    </section>
  );
};

interface HeroCaseStudyProps {
  language: Language;
  scrollTo: (id: string) => void;
}

export const HeroCaseStudy: React.FC<HeroCaseStudyProps> = ({ language, scrollTo }) => {
  return (
    <section className="min-h-screen flex items-center px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <MotionFade>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              {language === 'hu' ? 'Legutóbbi Projektünk' : 'Latest Project'}
            </div>
          </MotionFade>
          
          <MotionFade delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t(language, 'hero.title')}
            </h1>
          </MotionFade>
          
          <MotionFade delay={0.2}>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              {t(language, 'hero.subtitle')}
            </p>
          </MotionFade>
        </div>

        <MotionFade delay={0.3}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <img 
                    src="/foundrypulse-wordmark.png" 
                    alt="FoundryPulse" 
                    className="h-8 w-auto mb-4"
                  />
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {language === 'hu' 
                      ? 'Valós idejű gyártási monitoring'
                      : 'Real-time Manufacturing Monitoring'
                    }
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {language === 'hu' 
                      ? 'Modern React és TypeScript platform komplex gyártási környezethez.'
                      : 'Modern React and TypeScript platform for complex manufacturing environment.'
                    }
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'TypeScript', 'PostgreSQL', 'Docker'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => scrollTo('work')}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {language === 'hu' ? 'Projekt részletei' : 'Project Details'}
                  </Button>
                  <Button 
                    onClick={() => scrollTo('contact')}
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    {language === 'hu' ? 'Hasonló projektet szeretnék' : 'I want something similar'}
                  </Button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-12 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xl">FP</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-2">
                    {language === 'hu' ? '3 hónap' : '3 months'}
                  </div>
                  <div className="text-blue-200">
                    {language === 'hu' ? 'Fejlesztési idő' : 'Development time'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionFade>
      </div>
    </section>
  );
};