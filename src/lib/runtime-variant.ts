import { getSiteConfig, type SiteVariant, siteConfigs } from './site-config';

// Runtime variant override (dev only)
let runtimeVariant: SiteVariant | null = null;

export function setRuntimeVariant(variant: SiteVariant | null) {
  runtimeVariant = variant;
  // Store in localStorage for persistence across page reloads
  if (typeof window !== 'undefined') {
    if (variant) {
      localStorage.setItem('dendora-dev-variant', variant);
    } else {
      localStorage.removeItem('dendora-dev-variant');
    }
  }
}

export function getRuntimeVariant(): SiteVariant | null {
  // Check localStorage on page load
  if (typeof window !== 'undefined' && !runtimeVariant) {
    const stored = localStorage.getItem('dendora-dev-variant');
    if (stored && stored in siteConfigs) {
      runtimeVariant = stored as SiteVariant;
    }
  }
  return runtimeVariant;
}

export function getCurrentSiteConfig() {
  const runtime = getRuntimeVariant();
  if (runtime && process.env.NODE_ENV === 'development') {
    return siteConfigs[runtime];
  }
  return getSiteConfig();
}

export function clearRuntimeVariant() {
  setRuntimeVariant(null);
}

// Dev-only helper to get all available variants
export function getAvailableVariants(): Array<{ key: SiteVariant; name: string; description: string }> {
  return [
    {
      key: 'international',
      name: 'International',
      description: 'Global tech-focused approach'
    },
    {
      key: 'local-hungary',
      name: 'Local Hungary',
      description: 'Hungarian market focus with personal touch'
    },
    {
      key: 'regional-cee',
      name: 'Regional CEE',
      description: 'Central/Eastern European regional focus'
    },
    {
      key: 'minimal-tech',
      name: 'Minimal Tech',
      description: 'Ultra-focused technical approach'
    }
  ];
}