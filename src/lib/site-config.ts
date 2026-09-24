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
// Hidden to cut spam calls; set true to show it everywhere again (JSON-LD "telephone" in the layouts must be re-added by hand).
export const SHOW_PHONE = false;
// Folded to '' at build time while hidden, so the number never ships in the client bundle.
export const CONTACT_PHONE = SHOW_PHONE ? '+36 30 686 3734' : '';
export const SITE_URL = 'https://dendora.hu';
export const FACEBOOK_URL = 'https://www.facebook.com/dendora.hu/';

// Homepage section anchors per language (HU URLs stay readable: /#kapcsolat).
export const SECTION_IDS = {
  hu: { work: 'munkaink', services: 'szolgaltatasok', contact: 'kapcsolat' },
  en: { work: 'work', services: 'services', contact: 'contact' },
} as const;

export const CURRENT_SITE_VARIANT: SiteVariant = 'default';

export function getSiteConfig(): SiteConfig {
  return siteConfigs[CURRENT_SITE_VARIANT];
}

export function useCurrentConfig(): SiteConfig {
  return getSiteConfig();
}