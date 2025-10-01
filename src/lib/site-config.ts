export type SiteVariant = 'international' | 'local-hungary' | 'regional-cee' | 'minimal-tech';

export interface SiteConfig {
  variant: SiteVariant;
  layout: {
    heroStyle: 'default' | 'minimal' | 'testimonial-focused' | 'case-study-hero';
    navigationStyle: 'default' | 'simple' | 'local-focused';
    footerStyle: 'default' | 'contact-heavy' | 'minimal';
    sectionsOrder: string[];
    showSections: {
      stats: boolean;
      services: boolean;
      work: boolean;
      testimonials: boolean;
      about: boolean;
      contact: boolean;
      localPresence: boolean;
      techStack: boolean;
    };
  };
  content: {
    emphasizeLocal: boolean;
    showTechDetails: boolean;
    casStudyFocus: 'foundrypulse' | 'all' | 'international';
    contactApproach: 'professional' | 'personal' | 'local';
    valueProposition: 'technical-excellence' | 'local-partnership' | 'regional-expertise' | 'minimal-impact';
    useVariantTranslations: boolean; // Whether to use variant-specific translation files
  };
  styling: {
    colorScheme: 'default' | 'warm' | 'minimal' | 'professional';
    typography: 'default' | 'friendly' | 'technical' | 'elegant';
  };
}

// Site variant configurations
export const siteConfigs: Record<SiteVariant, SiteConfig> = {
  'international': {
    variant: 'international',
    layout: {
      heroStyle: 'default',
      navigationStyle: 'default',
      footerStyle: 'default',
      sectionsOrder: ['hero', 'stats', 'services', 'work', 'about', 'contact'],
      showSections: {
        stats: true,
        services: true,
        work: true,
        testimonials: false,
        about: true,
        contact: true,
        localPresence: false,
        techStack: true,
      },
    },
    content: {
      emphasizeLocal: false,
      showTechDetails: true,
      casStudyFocus: 'all',
      contactApproach: 'professional',
      valueProposition: 'technical-excellence',
      useVariantTranslations: false,
    },
    styling: {
      colorScheme: 'default',
      typography: 'default',
    },
  },
  
  'local-hungary': {
    variant: 'local-hungary',
    layout: {
      heroStyle: 'testimonial-focused',
      navigationStyle: 'simple',
      footerStyle: 'contact-heavy',
      sectionsOrder: ['hero', 'localPresence', 'work', 'services', 'about', 'contact'],
      showSections: {
        stats: false,
        services: true,
        work: true,
        testimonials: true,
        about: true,
        contact: true,
        localPresence: true,
        techStack: false,
      },
    },
    content: {
      emphasizeLocal: true,
      showTechDetails: false,
      casStudyFocus: 'all',
      contactApproach: 'personal',
      valueProposition: 'local-partnership',
      useVariantTranslations: true,
    },
    styling: {
      colorScheme: 'warm',
      typography: 'friendly',
    },
  },
  
  'regional-cee': {
    variant: 'regional-cee',
    layout: {
      heroStyle: 'case-study-hero',
      navigationStyle: 'default',
      footerStyle: 'default',
      sectionsOrder: ['hero', 'work', 'services', 'localPresence', 'about', 'contact'],
      showSections: {
        stats: true,
        services: true,
        work: true,
        testimonials: true,
        about: true,
        contact: true,
        localPresence: true,
        techStack: true,
      },
    },
    content: {
      emphasizeLocal: true,
      showTechDetails: true,
      casStudyFocus: 'foundrypulse',
      contactApproach: 'professional',
      valueProposition: 'regional-expertise',
      useVariantTranslations: true,
    },
    styling: {
      colorScheme: 'professional',
      typography: 'default',
    },
  },
  
  'minimal-tech': {
    variant: 'minimal-tech',
    layout: {
      heroStyle: 'minimal',
      navigationStyle: 'simple',
      footerStyle: 'minimal',
      sectionsOrder: ['hero', 'work', 'techStack', 'contact'],
      showSections: {
        stats: false,
        services: false,
        work: true,
        testimonials: false,
        about: false,
        contact: true,
        localPresence: false,
        techStack: true,
      },
    },
    content: {
      emphasizeLocal: false,
      showTechDetails: true,
      casStudyFocus: 'all',
      contactApproach: 'professional',
      valueProposition: 'minimal-impact',
      useVariantTranslations: false,
    },
    styling: {
      colorScheme: 'minimal',
      typography: 'technical',
    },
  },
};

// Simple config switcher - change this single line to test different variants
export const CURRENT_SITE_VARIANT: SiteVariant = 'international';

export function getSiteConfig(): SiteConfig {
  return siteConfigs[CURRENT_SITE_VARIANT];
}

export function useCurrentConfig(): SiteConfig {
  return getSiteConfig();
}