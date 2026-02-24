import React from 'react';
import { MapPin, Clock, Users, Award } from 'lucide-react';
import { MotionFade, SectionHeader } from '../ui';
import { t, type Language } from '../../lib/variant-translations';

interface LocalPresenceSectionProps {
  language: Language;
}

export const LocalPresenceSection: React.FC<LocalPresenceSectionProps> = ({ language }) => {
  const features = [
    {
      icon: MapPin,
      title: language === 'hu' ? 'Helyi jelenlét' : 'Local Presence',
      description: language === 'hu' 
        ? 'Magyarországon alapított csapat, helyi piaci ismeretekkel és kapcsolatokkal.'
        : 'Hungary-based team with local market knowledge and connections.',
    },
    {
      icon: Clock,
      title: language === 'hu' ? 'Azonos időzóna' : 'Same Timezone',
      description: language === 'hu'
        ? 'Munkaóráink egyeznek, gyors kommunikáció és együttműködés.'
        : 'Our working hours align, enabling fast communication and collaboration.',
    },
    {
      icon: Users,
      title: language === 'hu' ? 'Személyes kapcsolat' : 'Personal Relationship',
      description: language === 'hu'
        ? 'Szükség esetén személyes találkozók, hosszú távú partnerség.'
        : 'In-person meetings when needed, long-term partnership focus.',
    },
    {
      icon: Award,
      title: language === 'hu' ? 'Helyi referenciák' : 'Local References',
      description: language === 'hu'
        ? 'Magyarországi ügyfelek és sikeres nemzetközi projektek.'
        : 'Hungarian clients and successful international projects.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={language === 'hu' ? 'Miért dolgozz velünk?' : 'Why Work With Us?'}
          subtitle={language === 'hu' 
            ? 'Helyi csapat, nemzetközi tapasztalat'
            : 'Local team, international experience'
          }
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <MotionFade key={feature.title} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </MotionFade>
          ))}
        </div>

        <MotionFade delay={0.5}>
          <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {language === 'hu' 
                    ? 'Közép-Európai tapasztalat'
                    : 'Central European Experience'
                  }
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {language === 'hu'
                    ? 'Értjük a helyi üzleti kultúrát, az EU szabályozásokat, és a regionális kihívásokat. Tapasztalatunk nemzetközi autóipari projektekben és helyi partneri kapcsolatokban.'
                    : 'We understand local business culture, EU regulations, and regional challenges. Experience in international automotive projects and local partnerships.'
                  }
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>{language === 'hu' ? 'Magyar nyelv' : 'Hungarian Language'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>{language === 'hu' ? 'EU szabályok' : 'EU Compliance'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>{language === 'hu' ? 'Helyi hálózat' : 'Local Network'}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6">
                  <div className="text-center">
                    <img 
                      src="/foundrypulse-wordmark.png" 
                      alt="FoundryPulse" 
                      className="h-8 w-auto mx-auto mb-4"
                      width={850}
                      height={295}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {language === 'hu' ? 'Autóipari projekt' : 'Automotive Project'}
                    </div>
                    <p className="text-gray-700">
                      {language === 'hu'
                        ? 'Nemzetközi öntöde modernizálása'
                        : 'International foundry modernization'
                      }
                    </p>
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