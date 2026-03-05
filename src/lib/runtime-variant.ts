import { getSiteConfig, type SiteVariant, siteConfigs } from './site-config';

export function getCurrentSiteConfig() {
  return getSiteConfig();
}