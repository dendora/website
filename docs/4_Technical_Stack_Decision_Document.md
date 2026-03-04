# Technical Stack Decision Document

*Last updated: 2026-03-04*

------------------------------------------------------------------------

# 1. FRONTEND

Recommended: Next.js\
Reason: - SSR - SEO-friendly - High performance - Vercel deploy

Alternative: - Astro (content heavy) - Nuxt (Vue ecosystem)

------------------------------------------------------------------------

# 2. BACKEND

Options: - Node.js (NestJS) - Go (high performance APIs) - Python
(AI-heavy workflows)

------------------------------------------------------------------------

# 3. CMS

-   Headless CMS (Strapi / Payload)
-   Or MDX-based content

------------------------------------------------------------------------

# 4. INFRASTRUCTURE

-   Kubernetes
-   Terraform
-   CI/CD pipeline
-   Monitoring stack

------------------------------------------------------------------------

# 5. AI STACK

-   LLM provider abstraction
-   Vector DB
-   API gateway
-   Usage monitoring

------------------------------------------------------------------------

# 6. PERFORMANCE TARGETS

-   Lighthouse \> 90
-   \<2s load
-   99.9% uptime
