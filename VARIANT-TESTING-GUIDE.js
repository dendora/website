/*
DENDORA WEBSITE - CONFIGURABLE VARIANTS SYSTEM

🎯 HOW TO TEST DIFFERENT WEBSITE VARIANTS

1. CHANGE THE VARIANT:
   Open: src/lib/site-config.ts
   Change line: export const CURRENT_SITE_VARIANT: SiteVariant = 'international';
   
   Available variants:
   - 'international'     → Current global approach
   - 'local-hungary'     → Hungarian local market focus  
   - 'regional-cee'      → Central/Eastern European regional focus
   - 'minimal-tech'      → Minimal tech-focused approach

2. REPLACE YOUR LANDING PAGE:
   In your Astro pages, replace:
   <DendoraLanding language={language} />
   
   With:
   <ConfigurableLanding language={language} />

3. WHAT EACH VARIANT CHANGES:

   🌍 INTERNATIONAL (current):
   - Default hero style
   - Full tech stack emphasis  
   - All projects showcased
   - Professional contact approach
   - Standard color scheme

   🇭🇺 LOCAL-HUNGARY:
   - Testimonial-focused hero (FoundryPulse testimonial)
   - Local presence section
   - Only FoundryPulse case study
   - Personal contact approach ("Beszélgessünk")
   - Warm color scheme (orange/amber)
   - Hungarian-specific copy

   🌍 REGIONAL-CEE:
   - Case study hero (FoundryPulse featured prominently)
   - Local presence + tech stack sections
   - FoundryPulse focus with all projects
   - Professional but regional approach
   - Professional color scheme
   - Regional market copy

   ⚡ MINIMAL-TECH:
   - Minimal hero style
   - Only work + tech stack sections
   - All projects, tech-focused
   - Professional contact
   - Minimal color scheme
   - Technical copy emphasis

4. EXAMPLE USAGE:

   // In your index.astro or component:
   import { ConfigurableLanding } from '../components/pages';
   
   // The component automatically uses the variant set in site-config.ts
   <ConfigurableLanding language="hu" />

5. TESTING WORKFLOW:

   Step 1: Change CURRENT_SITE_VARIANT in site-config.ts
   Step 2: Refresh the page
   Step 3: See completely different layout/content
   Step 4: Test different variants until you find what works
   Step 5: Deploy with your chosen variant

6. ADDING NEW VARIANTS:

   - Add new variant to SiteVariant type
   - Add configuration in siteConfigs object
   - Create new translation files in src/locales/variants/
   - Optionally create new hero/section components

BENEFITS:
✅ Test radically different approaches with one line change
✅ A/B test different value propositions
✅ Quickly pivot based on market feedback
✅ Maintain all variants in one codebase
✅ Easy to switch back if needed

CURRENT SETUP:
- All variants work with existing content
- FoundryPulse project data already in place
- Translation system supports all languages
- Layout components are modular and reusable
*/

// This file is for documentation only - you can delete it after reading