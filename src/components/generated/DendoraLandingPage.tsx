import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail, Github, Globe, Phone, Menu, X, CheckCircle2 } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import { cn } from '../../lib/utils';

// @component: DendoraLandingPage
export const DendoraLandingPage: React.FC = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setMenuOpen(false);
  };
  const navItems = [{
    id: 'home',
    label: 'Home',
    mpid: "da0bc3d1-33c5-41e7-beac-a69c43b10941"
  }, {
    id: 'services',
    label: 'Services',
    mpid: "da215401-a6d1-484b-abf7-451d2e6f5cf4"
  }, {
    id: 'work',
    label: 'Work',
    mpid: "bd3c98fd-b1e2-4faa-82d4-f31c17d0166d"
  }, {
    id: 'about',
    label: 'About',
    mpid: "52bede62-8601-4a37-8b4a-6ed2ba0e3c28"
  }, {
    id: 'contact',
    label: 'Contact',
    mpid: "233a5021-354a-4761-886d-abdd56b735b0"
  }] as const;
  const Feature: React.FC<{
    title: string;
    desc: string;
  }> = ({
    title,
    desc
  }) => <SortableContainer dndKitId="4d022717-76dd-496a-9f4e-05853a3e3df3" containerType="regular" prevTag="div" className="group relative rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md" data-magicpath-id="0" data-magicpath-path="DendoraLandingPage.tsx">
      <SortableContainer dndKitId="7c41bc95-49a5-4bde-8288-a89bae9bb7e7" containerType="regular" prevTag="div" className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white" data-magicpath-id="1" data-magicpath-path="DendoraLandingPage.tsx">
        <CheckCircle2 className="h-4 w-4" data-magicpath-id="2" data-magicpath-path="DendoraLandingPage.tsx" />
      </SortableContainer>
      <h3 className="text-base font-semibold tracking-tight" data-magicpath-id="3" data-magicpath-path="DendoraLandingPage.tsx">{title}</h3>
      <p className="mt-2 text-sm text-black/60" data-magicpath-id="4" data-magicpath-path="DendoraLandingPage.tsx">{desc}</p>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-black/5 transition group-hover:ring-2" data-magicpath-id="5" data-magicpath-path="DendoraLandingPage.tsx" />
    </SortableContainer>;
  const Stat: React.FC<{
    value: string;
    label: string;
  }> = ({
    value,
    label
  }) => <SortableContainer dndKitId="b6cfddd3-676c-43be-9e73-9e724f3846f0" containerType="regular" prevTag="div" className="flex flex-col items-start" data-magicpath-id="6" data-magicpath-path="DendoraLandingPage.tsx">
      <div className="text-3xl font-semibold tracking-tight" data-magicpath-id="7" data-magicpath-path="DendoraLandingPage.tsx">{value}</div>
      <div className="text-sm text-black/60" data-magicpath-id="8" data-magicpath-path="DendoraLandingPage.tsx">{label}</div>
    </SortableContainer>;
  const CTAButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    ...props
  }) => <button {...props} className={cn('inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30', className)} data-magicpath-id="9" data-magicpath-path="DendoraLandingPage.tsx">
      {children}
    </button>;
  const OutlineButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    ...props
  }) => <button {...props} className={cn('inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:border-black/20 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10', className)} data-magicpath-id="10" data-magicpath-path="DendoraLandingPage.tsx">
      {children}
    </button>;

  // @return
  return <SortableContainer dndKitId="a652964d-4ce2-4ac8-ad9f-50b57251dac2" containerType="regular" prevTag="div" className="min-h-dvh w-full bg-white text-black antialiased" data-magicpath-id="11" data-magicpath-path="DendoraLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="7fbd506d-f36d-4e64-bbe4-99098a221c3d" containerType="regular" prevTag="header" className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur" data-magicpath-id="12" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="08b85cfc-4229-4e8d-8e97-5554f6efb81c" containerType="regular" prevTag="div" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" data-magicpath-id="13" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="bb9de970-6f3b-4656-9ade-9062afd6d8ca" containerType="regular" prevTag="button" onClick={() => scrollTo('home')} className="group flex items-center gap-3" aria-label="Dendora home" data-magicpath-id="14" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="f0342e27-25f4-4429-a04b-6cb5ff33abc8" containerType="regular" prevTag="div" className="relative h-8 w-8" data-magicpath-id="15" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="16" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-6 w-6 rounded-lg bg-white" data-magicpath-id="17" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-6 w-3 rounded-r-lg bg-black" data-magicpath-id="18" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="124413a6-0f1d-4c3a-949d-d6665c8ac0c9" containerType="regular" prevTag="div" className="flex flex-col" data-magicpath-id="19" data-magicpath-path="DendoraLandingPage.tsx">
              <span className="text-sm font-semibold tracking-wide" data-magicpath-id="20" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/60" data-magicpath-id="21" data-magicpath-path="DendoraLandingPage.tsx">Software Development</span>
            </SortableContainer>
          </SortableContainer>

          {/* Desktop nav */}
          <SortableContainer dndKitId="54b7c588-3709-446a-9455-21ff86f16f5c" containerType="collection" prevTag="nav" className="hidden items-center gap-6 md:flex" data-magicpath-id="22" data-magicpath-path="DendoraLandingPage.tsx">
            {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-black/70 transition hover:text-black" data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="23" data-magicpath-path="DendoraLandingPage.tsx">
                {n.label}
              </button>)}
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="24" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="25" data-magicpath-path="DendoraLandingPage.tsx" />
              Contact
            </a>
          </SortableContainer>

          {/* Mobile menu button */}
          <SortableContainer dndKitId="c6783068-3f6a-41ee-9118-220829662943" containerType="regular" prevTag="button" className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} data-magicpath-id="26" data-magicpath-path="DendoraLandingPage.tsx">
            {menuOpen ? <X className="h-5 w-5" data-magicpath-id="27" data-magicpath-path="DendoraLandingPage.tsx" /> : <Menu className="h-5 w-5" data-magicpath-id="28" data-magicpath-path="DendoraLandingPage.tsx" />}
          </SortableContainer>
        </SortableContainer>

        {/* Mobile nav */}
        {menuOpen && <SortableContainer dndKitId="01722d6e-fa41-461a-9b47-ba0433ef46de" containerType="regular" prevTag="div" className="border-t border-black/5 bg-white md:hidden" data-magicpath-id="29" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="18b340dc-1c84-48ee-b235-f83b90ef58c5" containerType="regular" prevTag="nav" className="mx-auto max-w-6xl px-4 py-2" data-magicpath-id="30" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="8de164e0-8b38-473f-b9ec-43fa964d6e2a" containerType="collection" prevTag="div" className="grid gap-1" data-magicpath-id="31" data-magicpath-path="DendoraLandingPage.tsx">
                {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="w-full rounded-md px-2 py-2 text-left text-sm text-black/80 hover:bg-black/5" data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="32" data-magicpath-path="DendoraLandingPage.tsx">
                    {n.label}
                  </button>)}
                <a href="mailto:hello@dendora.hu" className="mt-1 inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm font-medium text-white" data-magicpath-id="33" data-magicpath-path="DendoraLandingPage.tsx">
                  <Mail className="h-4 w-4" data-magicpath-id="34" data-magicpath-path="DendoraLandingPage.tsx" />
                  Contact
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>}
      </SortableContainer>

      {/* Hero */}
      <SortableContainer dndKitId="56e3e62a-0c5b-450d-9818-ef7d007916f1" containerType="regular" prevTag="section" id="home" className="relative" data-magicpath-id="35" data-magicpath-path="DendoraLandingPage.tsx">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(0,0,0,0.06),transparent_60%)]" data-magicpath-id="36" data-magicpath-path="DendoraLandingPage.tsx" />
        <SortableContainer dndKitId="9fcbdbf6-9b29-4d18-ad4f-51fa18764962" containerType="regular" prevTag="div" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24" data-magicpath-id="37" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="8dd17cd1-e519-4753-8df1-cf653de3672c" containerType="regular" prevTag="div" className="flex flex-col justify-center" data-magicpath-id="38" data-magicpath-path="DendoraLandingPage.tsx">
            <motion.h1 data-magicpath-motion-tag="motion.h1" initial={prefersReducedMotion ? undefined : {
            opacity: 0,
            y: 8
          }} whileInView={prefersReducedMotion ? undefined : {
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            ease: 'easeOut'
          }} className="text-4xl font-semibold tracking-tight md:text-5xl" data-magicpath-id="39" data-magicpath-path="DendoraLandingPage.tsx">
              Minimal software, maximal impact.
            </motion.h1>
            <p className="mt-4 text-base text-black/65 md:text-lg" data-magicpath-id="40" data-magicpath-path="DendoraLandingPage.tsx">
              We build lean, dependable web and mobile products. Strategy, design, and engineering — delivered with clarity.
            </p>

            <SortableContainer dndKitId="0690af64-aad7-4aa3-ad55-4520d29d7394" containerType="regular" prevTag="div" className="mt-8 flex flex-wrap items-center gap-3" data-magicpath-id="41" data-magicpath-path="DendoraLandingPage.tsx">
              <CTAButton onClick={() => scrollTo('contact')} data-magicpath-id="42" data-magicpath-path="DendoraLandingPage.tsx">
                Start a project
                <ArrowRight className="h-4 w-4" data-magicpath-id="43" data-magicpath-path="DendoraLandingPage.tsx" />
              </CTAButton>
              <OutlineButton onClick={() => scrollTo('work')} data-magicpath-id="44" data-magicpath-path="DendoraLandingPage.tsx">
                See our work
              </OutlineButton>
            </SortableContainer>

            <SortableContainer dndKitId="69eb86b2-4513-4069-b6c5-92258fa1a829" containerType="regular" prevTag="div" className="mt-10 grid grid-cols-3 gap-6 md:max-w-md" data-magicpath-id="45" data-magicpath-path="DendoraLandingPage.tsx">
              <Stat value="6+ yrs" label="Experience" data-magicpath-id="46" data-magicpath-path="DendoraLandingPage.tsx" />
              <Stat value="20+" label="Projects shipped" data-magicpath-id="47" data-magicpath-path="DendoraLandingPage.tsx" />
              <Stat value="100%" label="Remote-first" data-magicpath-id="48" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="1e1bc2e2-3017-4512-87e8-8c9dbe429dd7" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="49" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Brand card */}
            <SortableContainer dndKitId="a8d548b1-0457-489c-af24-7e4ab7f0eb38" containerType="regular" prevTag="motion.div" initial={prefersReducedMotion ? undefined : {
            opacity: 0,
            scale: 0.98
          }} whileInView={prefersReducedMotion ? undefined : {
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            ease: 'easeOut',
            delay: 0.1
          }} className="relative w-full max-w-md overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm" aria-label="Dendora brand" data-magicpath-id="50" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="d330530f-da39-4117-857e-27295f73a9fe" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="51" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="06ff62d9-1046-42d0-9660-63b8f4dac88c" containerType="regular" prevTag="div" className="relative h-14 w-14" data-magicpath-id="52" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="absolute inset-0 rounded-2xl bg-black" data-magicpath-id="53" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute left-1 top-1 h-10 w-10 rounded-xl bg-white" data-magicpath-id="54" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute right-1 top-1 h-10 w-5 rounded-r-xl bg-black" data-magicpath-id="55" data-magicpath-path="DendoraLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="16b29170-06ad-4dba-891c-65081967b656" containerType="regular" prevTag="div" data-magicpath-id="56" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="text-xl font-semibold tracking-wide" data-magicpath-id="57" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-black/60" data-magicpath-id="58" data-magicpath-path="DendoraLandingPage.tsx">Software Development</div>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="d03c24e0-a29d-44d6-b2ad-410713b64891" containerType="regular" prevTag="div" className="mt-6 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-4" data-magicpath-id="59" data-magicpath-path="DendoraLandingPage.tsx">
                <p className="text-sm text-black/70" data-magicpath-id="60" data-magicpath-path="DendoraLandingPage.tsx">
                  Focused, high-quality engineering with an eye for design. We partner with startups and teams to launch and grow products.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Services */}
      <SortableContainer dndKitId="81168c9e-3d03-4903-87a9-3de5c688a873" containerType="regular" prevTag="section" id="services" className="border-t border-black/5 bg-white" data-magicpath-id="61" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="5ae1d129-c4ec-4421-aaaf-3cf7f6f52331" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="62" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="18e0a6b1-f576-4566-afe7-4385dc7f65c5" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="63" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="64" data-magicpath-path="DendoraLandingPage.tsx">What we do</h2>
            <span className="text-sm text-black/60" data-magicpath-id="65" data-magicpath-path="DendoraLandingPage.tsx">Lean, reliable, shipped.</span>
          </SortableContainer>

          <SortableContainer dndKitId="6dd7a0f9-5d2b-4334-9563-6ebc179cba7b" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-3" data-magicpath-id="66" data-magicpath-path="DendoraLandingPage.tsx">
            <Feature title="Product Strategy" desc="Scope, roadmap, and validation. We make sure we build the right thing before building it right." data-magicpath-id="67" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Design & UX" desc="Minimal, accessible interfaces that focus on clarity and speed. Prototypes to production-ready design systems." data-magicpath-id="68" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Full‑stack Development" desc="Modern web apps with React, TypeScript, and cloud-native backends. Performance and maintainability first." data-magicpath-id="69" data-magicpath-path="DendoraLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Work */}
      <SortableContainer dndKitId="cd1aec0c-e101-4530-88ab-fa4ad6a90113" containerType="regular" prevTag="section" id="work" className="border-t border-black/5" data-magicpath-id="70" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="53972d9f-24b4-4712-9db9-0b2f10c21282" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="71" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="4cc3f7f4-2b9a-4f4d-ac7e-b13cff938ef5" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="72" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="73" data-magicpath-path="DendoraLandingPage.tsx">Selected work</h2>
            <span className="text-sm text-black/60" data-magicpath-id="74" data-magicpath-path="DendoraLandingPage.tsx">Recent highlights</span>
          </SortableContainer>

          <SortableContainer dndKitId="f097a059-7414-46fa-a5a2-84b07d4baa00" containerType="collection" prevTag="div" className="grid gap-6 md:grid-cols-3" data-magicpath-id="75" data-magicpath-path="DendoraLandingPage.tsx">
            {[{
            name: 'SaaS Dashboard',
            desc: 'Composable analytics with real‑time updates and role‑based access.',
            mpid: "0852acc7-e9c8-45c1-9abf-95ee8a237f3e"
          }, {
            name: 'E‑commerce Revamp',
            desc: 'Headless storefront with lightning‑fast navigation and checkout.',
            mpid: "329cc4da-f713-4410-962a-f01cebffee1c"
          }, {
            name: 'Mobile Companion',
            desc: 'Cross‑platform app for field operations with offline sync.',
            mpid: "744b2fb2-052d-4fe9-b085-835ba5fb7d6e"
          }].map((p, i) => <motion.article data-magicpath-motion-tag="motion.article" key={p.name} initial={prefersReducedMotion ? undefined : {
            opacity: 0,
            y: 8
          }} whileInView={prefersReducedMotion ? undefined : {
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-50px'
          }} transition={{
            duration: 0.4,
            delay: i * 0.05
          }} className="group relative overflow-hidden rounded-xl border border-black/10 bg-white" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="DendoraLandingPage.tsx">
                <div className="aspect-[16/10] bg-[linear-gradient(120deg,rgba(0,0,0,0.06),transparent)]" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="77" data-magicpath-path="DendoraLandingPage.tsx" />
                <div className="p-4" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="78" data-magicpath-path="DendoraLandingPage.tsx">
                  <h3 className="text-base font-semibold" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="79" data-magicpath-path="DendoraLandingPage.tsx">{p.name}</h3>
                  <p className="mt-1 text-sm text-black/60" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="80" data-magicpath-path="DendoraLandingPage.tsx">{p.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm text-black/70" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="DendoraLandingPage.tsx">
                    <span data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="DendoraLandingPage.tsx">Details</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="DendoraLandingPage.tsx" />
                  </div>
                </div>
              </motion.article>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* About */}
      <SortableContainer dndKitId="44312667-7292-444e-8fd2-f431740359a9" containerType="regular" prevTag="section" id="about" className="border-t border-black/5 bg-white" data-magicpath-id="84" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="48713209-5db9-4461-84fa-0533dca22bd4" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="85" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="591d3ae1-33f5-4fc3-bb56-fa5c1489b625" containerType="regular" prevTag="div" className="grid items-center gap-10 md:grid-cols-2" data-magicpath-id="86" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="2b2c9531-0f3e-4aaf-a055-b0703eefdab2" containerType="regular" prevTag="div" data-magicpath-id="87" data-magicpath-path="DendoraLandingPage.tsx">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="88" data-magicpath-path="DendoraLandingPage.tsx">Built with intention</h2>
              <p className="mt-4 text-black/65" data-magicpath-id="89" data-magicpath-path="DendoraLandingPage.tsx">
                We’re a small team that prefers fewer meetings and more results. Clear scopes, pragmatic stacks, and steady iteration.
              </p>
              <SortableContainer dndKitId="fc5e495c-1f05-4e99-af81-f3e20f9fbdb3" containerType="regular" prevTag="ul" className="mt-6 grid gap-2 text-sm text-black/70" data-magicpath-id="90" data-magicpath-path="DendoraLandingPage.tsx">
                <li className="flex items-center gap-2" data-magicpath-id="91" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="92" data-magicpath-path="DendoraLandingPage.tsx" /> Senior hands‑on engineering
                </li>
                <li className="flex items-center gap-2" data-magicpath-id="93" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="94" data-magicpath-path="DendoraLandingPage.tsx" /> Transparent estimates and delivery
                </li>
                <li className="flex items-center gap-2" data-magicpath-id="95" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="96" data-magicpath-path="DendoraLandingPage.tsx" /> Long‑term maintainability
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="89ac4d1c-0002-4ad1-9a60-f9aa1a0998b6" containerType="regular" prevTag="div" className="mt-7 flex gap-3" data-magicpath-id="97" data-magicpath-path="DendoraLandingPage.tsx">
                <OutlineButton onClick={() => scrollTo('contact')} data-magicpath-id="98" data-magicpath-path="DendoraLandingPage.tsx">Let’s talk</OutlineButton>
                <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="99" data-magicpath-path="DendoraLandingPage.tsx">
                  <Globe className="h-4 w-4" data-magicpath-id="100" data-magicpath-path="DendoraLandingPage.tsx" />
                  dendora.hu
                </a>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="d3bcff08-2d5a-475f-b761-2e8e497a16af" containerType="regular" prevTag="div" className="relative" data-magicpath-id="101" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent)]" data-magicpath-id="102" data-magicpath-path="DendoraLandingPage.tsx" />
              <SortableContainer dndKitId="c174a75f-f8b8-4966-b680-532916500ca3" containerType="regular" prevTag="div" className="overflow-hidden rounded-2xl border border-black/10 bg-white p-6" data-magicpath-id="103" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="6b79ae96-9741-41c9-923e-677f9c15cfd7" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-2" data-magicpath-id="104" data-magicpath-path="DendoraLandingPage.tsx">
                  <SortableContainer dndKitId="8a459653-419d-4445-8812-11ac48407d5a" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="105" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="106" data-magicpath-path="DendoraLandingPage.tsx">Stack</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="107" data-magicpath-path="DendoraLandingPage.tsx">TypeScript, React, Node.js</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="ad7a6fca-0d6d-4eb9-b392-8e3b63d70acb" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="108" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="109" data-magicpath-path="DendoraLandingPage.tsx">Approach</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="110" data-magicpath-path="DendoraLandingPage.tsx">Ship small, iterate fast</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="e76d7b4a-5790-45fa-938d-79ae67fae225" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="111" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="112" data-magicpath-path="DendoraLandingPage.tsx">Principles</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="113" data-magicpath-path="DendoraLandingPage.tsx">Accessibility and performance</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="2f1a2f1a-336b-4f01-ae7b-eae00911bc8f" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="114" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="115" data-magicpath-path="DendoraLandingPage.tsx">Engagement</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="116" data-magicpath-path="DendoraLandingPage.tsx">Project or retainer</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact */}
      <SortableContainer dndKitId="dbff8759-4873-4150-adc2-f10e1d1e94c7" containerType="regular" prevTag="section" id="contact" className="border-t border-black/5" data-magicpath-id="117" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="5e0098d1-ca53-412e-95bf-bdfd3a23472f" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="118" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="18ca4577-0b53-4d27-be45-40964843ad40" containerType="regular" prevTag="div" className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 md:p-8" data-magicpath-id="119" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="120" data-magicpath-path="DendoraLandingPage.tsx">Let’s build something minimal</h2>
            <p className="mt-2 text-sm text-black/65" data-magicpath-id="121" data-magicpath-path="DendoraLandingPage.tsx">
              Tell us about your product, timeline, and constraints. We’ll reply with next steps.
            </p>

            <SortableContainer dndKitId="09f371e1-232e-40d9-95f6-420c33166f5b" containerType="regular" prevTag="form" onSubmit={e => {
            e.preventDefault();
            const data = new FormData(e.currentTarget as HTMLFormElement);
            const subject = encodeURIComponent(`New project inquiry from ${data.get('name') || 'Someone'}`);
            const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nMessage:\n${data.get('message')}\n`);
            window.location.href = `mailto:hello@dendora.hu?subject=${subject}&body=${body}`;
          }} className="mt-6 grid gap-4" data-magicpath-id="122" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="b714337f-85fb-495a-bf29-b499f134be94" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-2" data-magicpath-id="123" data-magicpath-path="DendoraLandingPage.tsx">
                <label className="grid gap-2" data-magicpath-id="124" data-magicpath-path="DendoraLandingPage.tsx">
                  <span className="text-sm" data-magicpath-id="125" data-magicpath-path="DendoraLandingPage.tsx">Name</span>
                  <input name="name" required placeholder="Jane Doe" className="h-10 rounded-md border border-black/15 px-3 text-sm outline-none ring-0 transition focus:border-black/25 focus:ring-2 focus:ring-black/10" data-magicpath-id="126" data-magicpath-path="DendoraLandingPage.tsx" />
                </label>
                <label className="grid gap-2" data-magicpath-id="127" data-magicpath-path="DendoraLandingPage.tsx">
                  <span className="text-sm" data-magicpath-id="128" data-magicpath-path="DendoraLandingPage.tsx">Email</span>
                  <input type="email" name="email" required placeholder="jane@company.com" className="h-10 rounded-md border border-black/15 px-3 text-sm outline-none transition focus:border-black/25 focus:ring-2 focus:ring-black/10" data-magicpath-id="129" data-magicpath-path="DendoraLandingPage.tsx" />
                </label>
              </SortableContainer>
              <label className="grid gap-2" data-magicpath-id="130" data-magicpath-path="DendoraLandingPage.tsx">
                <span className="text-sm" data-magicpath-id="131" data-magicpath-path="DendoraLandingPage.tsx">Company</span>
                <input name="company" placeholder="Company LLC" className="h-10 rounded-md border border-black/15 px-3 text-sm outline-none transition focus:border-black/25 focus:ring-2 focus:ring-black/10" data-magicpath-id="132" data-magicpath-path="DendoraLandingPage.tsx" />
              </label>
              <label className="grid gap-2" data-magicpath-id="133" data-magicpath-path="DendoraLandingPage.tsx">
                <span className="text-sm" data-magicpath-id="134" data-magicpath-path="DendoraLandingPage.tsx">Message</span>
                <textarea name="message" required rows={isMobile ? 5 : 6} placeholder="What are you building? Timelines? Links?" className="rounded-md border border-black/15 px-3 py-2 text-sm outline-none transition focus:border-black/25 focus:ring-2 focus:ring-black/10" data-magicpath-id="135" data-magicpath-path="DendoraLandingPage.tsx" />
              </label>

              <SortableContainer dndKitId="1880e923-53e6-4d2b-b97c-287360fdb3aa" containerType="regular" prevTag="div" className="mt-2 flex flex-wrap items-center gap-3" data-magicpath-id="136" data-magicpath-path="DendoraLandingPage.tsx">
                <CTAButton type="submit" data-magicpath-id="137" data-magicpath-path="DendoraLandingPage.tsx">
                  Send email
                  <Mail className="h-4 w-4" data-magicpath-id="138" data-magicpath-path="DendoraLandingPage.tsx" />
                </CTAButton>
                <a href="tel:+3612345678" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="139" data-magicpath-path="DendoraLandingPage.tsx">
                  <Phone className="h-4 w-4" data-magicpath-id="140" data-magicpath-path="DendoraLandingPage.tsx" />
                  +36 1 234 5678
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="141" data-magicpath-path="DendoraLandingPage.tsx">
                  <Github className="h-4 w-4" data-magicpath-id="142" data-magicpath-path="DendoraLandingPage.tsx" />
                  GitHub
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="1d8511f1-ab6d-48be-b1b2-2e93f60e3282" containerType="regular" prevTag="footer" className="border-t border-black/5" data-magicpath-id="143" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="c93fd76a-59db-4c3c-b641-8d2b051f4594" containerType="regular" prevTag="div" className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-black/60 md:flex-row" data-magicpath-id="144" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="d061d2d3-6cd7-4d94-b6ea-75ce9629a653" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="145" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="08cf3ef9-3a32-4cb3-8f90-40406cfdf1ce" containerType="regular" prevTag="div" className="relative h-7 w-7" data-magicpath-id="146" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="147" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-5 w-5 rounded-md bg-white" data-magicpath-id="148" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-5 w-2.5 rounded-r-md bg-black" data-magicpath-id="149" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <span data-magicpath-id="150" data-magicpath-path="DendoraLandingPage.tsx">© {new Date().getFullYear()} Dendora. All rights reserved.</span>
          </SortableContainer>
          <SortableContainer dndKitId="97aab1d4-0b01-4543-99ea-8dd1340b8ac2" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="151" data-magicpath-path="DendoraLandingPage.tsx">
            <a href="https://dendora.hu" className="inline-flex items-center gap-1 hover:text-black" data-magicpath-id="152" data-magicpath-path="DendoraLandingPage.tsx">
              <Globe className="h-4 w-4" data-magicpath-id="153" data-magicpath-path="DendoraLandingPage.tsx" />
              dendora.hu
            </a>
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-1 hover:text-black" data-magicpath-id="154" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="155" data-magicpath-path="DendoraLandingPage.tsx" />
              hello@dendora.hu
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};