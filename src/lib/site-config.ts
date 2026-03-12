export type SiteVariant = 'default' | 'minimal';

export interface SiteConfig {
  variant: SiteVariant;
  layout: {
    sectionsOrder: string[];
    showSections: {
      services: boolean;
      work: boolean;
      about: boolean;
      contact: boolean;
      pricing: boolean;
    };
  };
}

// Two variants: full site and stripped-down portfolio link
export const siteConfigs: Record<SiteVariant, SiteConfig> = {
  'default': {
    variant: 'default',
    layout: {
      // Proof-first: show work before promises
      sectionsOrder: ['hero', 'work', 'pricing', 'contact'],
      showSections: {
        services: false,
        work: true,
        about: false,
        contact: true,
        pricing: true,
      },
    },
  },

  'minimal': {
    variant: 'minimal',
    layout: {
      sectionsOrder: ['hero', 'work', 'contact'],
      showSections: {
        services: false,
        work: true,
        about: false,
        contact: true,
        pricing: false,
      },
    },
  },
};

// Centralized contact info
export const CONTACT_EMAIL = 'hello@dendora.hu';
export const CONTACT_PHONE = '+36 30 686 3734';
export const SITE_URL = 'https://dendora.hu';

export const CURRENT_SITE_VARIANT: SiteVariant = 'default';

export function getSiteConfig(): SiteConfig {
  return siteConfigs[CURRENT_SITE_VARIANT];
}

export function useCurrentConfig(): SiteConfig {
  return getSiteConfig();
}