import React from 'react';
import { Bot, FileText, Zap, BookOpen } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface AiServicesSectionProps {
  language: DimopLanguage;
}

const aiIcons = [
  <Bot key="bot" className="h-6 w-6" />,
  <FileText key="file" className="h-6 w-6" />,
  <Zap key="zap" className="h-6 w-6" />,
  <BookOpen key="book" className="h-6 w-6" />,
];

export const AiServicesSection: React.FC<AiServicesSectionProps> = ({ language }) => {
  const items = dt(language, 'ai.items') as Array<{
    title: string;
    description: string;
    roi: string;
  }>;

  return (
    <section id="ai" className="relative py-24 bg-gray-950 text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[120px] translate-y-1/3 translate-x-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400 mb-3">
            AI-native megközelítés
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {dt(language, 'ai.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-lg text-white/50 mb-16 max-w-2xl leading-relaxed">
            {dt(language, 'ai.subtitle')}
          </p>
        </MotionFade>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <MotionFade key={index} delay={0.1 + index * 0.08}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all group h-full flex flex-col">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-emerald-500/15 text-emerald-400 mb-4">
                  {aiIcons[index]}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/[0.06] px-3 py-1.5 text-xs text-emerald-400 self-start">
                  <Zap className="h-3 w-3" />
                  {item.roi}
                </div>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};
