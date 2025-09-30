import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail, Github, Globe, Menu, X, CheckCircle2 } from 'lucide-react';
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
    mpid: "8dcb0dc7-4413-49b0-83ce-0d49bbf3779d"
  }, {
    id: 'services',
    label: 'Services',
    mpid: "2722c94f-6a99-4f4e-907c-fb85865b790c"
  }, {
    id: 'work',
    label: 'Work',
    mpid: "5cb9f6a6-286b-44a7-91e5-539b6fd51d13"
  }, {
    id: 'about',
    label: 'About',
    mpid: "412be1c6-1146-4f28-a5fa-fa0bd235f74d"
  }, {
    id: 'contact',
    label: 'Contact',
    mpid: "6555e91b-8cf4-4154-bdbb-7dced78bf490"
  }] as const;
  const Feature: React.FC<{
    title: string;
    desc: string;
  }> = ({
    title,
    desc
  }) => <SortableContainer dndKitId="98a26ba2-38d9-4fdd-a694-088a5cb2f6d2" containerType="regular" prevTag="div" className="group relative rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md" data-magicpath-id="0" data-magicpath-path="DendoraLandingPage.tsx">
      <SortableContainer dndKitId="fdb10c2d-c089-43a4-92ee-5cc9509eb982" containerType="regular" prevTag="div" className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white" data-magicpath-id="1" data-magicpath-path="DendoraLandingPage.tsx">
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
  }) => <SortableContainer dndKitId="15c1b688-754d-4f11-85f9-272aef2f0116" containerType="regular" prevTag="div" className="flex flex-col items-start" data-magicpath-id="6" data-magicpath-path="DendoraLandingPage.tsx">
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
  return <SortableContainer dndKitId="cc335de0-375e-4333-b53e-2cc75d6cc38d" containerType="regular" prevTag="div" className="min-h-dvh w-full bg-white text-black antialiased" data-magicpath-id="11" data-magicpath-path="DendoraLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="e1fc90b4-77c6-4336-bdbc-f5aeba338492" containerType="regular" prevTag="header" className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur" data-magicpath-id="12" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="62d24c85-355b-4435-81fc-04726af91699" containerType="regular" prevTag="div" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" data-magicpath-id="13" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="664c907d-189f-409f-9997-d96a829f51b2" containerType="regular" prevTag="button" onClick={() => scrollTo('home')} className="group flex items-center gap-3" aria-label="Dendora home" data-magicpath-id="14" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="4402925c-da95-4a4a-aca1-71ac85a1885a" containerType="regular" prevTag="div" className="relative h-8 w-8" data-magicpath-id="15" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="16" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-6 w-6 rounded-lg bg-white" data-magicpath-id="17" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-6 w-3 rounded-r-lg bg-black" data-magicpath-id="18" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="8338b0f3-5fec-451b-8540-c8533602e87b" containerType="regular" prevTag="div" className="flex flex-col items-start text-left" data-magicpath-id="19" data-magicpath-path="DendoraLandingPage.tsx">
              <span className="text-sm font-semibold tracking-wide" data-magicpath-id="20" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/60" data-magicpath-id="21" data-magicpath-path="DendoraLandingPage.tsx">Software Development</span>
            </SortableContainer>
          </SortableContainer>

          {/* Desktop nav */}
          <SortableContainer dndKitId="52e3beea-9bc0-4f84-b519-76d443e14b61" containerType="collection" prevTag="nav" className="hidden items-center gap-6 md:flex" data-magicpath-id="22" data-magicpath-path="DendoraLandingPage.tsx">
            {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-black/70 transition hover:text-black" data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="24" data-magicpath-path="DendoraLandingPage.tsx">{n.label}</span>
              </button>)}
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="25" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="26" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="27" data-magicpath-path="DendoraLandingPage.tsx">Contact</span>
            </a>
          </SortableContainer>

          {/* Mobile menu button */}
          <SortableContainer dndKitId="0b7691cb-2d2a-4172-a355-d24fc917abaf" containerType="regular" prevTag="button" className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} data-magicpath-id="28" data-magicpath-path="DendoraLandingPage.tsx">
            {menuOpen ? <X className="h-5 w-5" data-magicpath-id="29" data-magicpath-path="DendoraLandingPage.tsx" /> : <Menu className="h-5 w-5" data-magicpath-id="30" data-magicpath-path="DendoraLandingPage.tsx" />}
          </SortableContainer>
        </SortableContainer>

        {/* Mobile nav */}
        {menuOpen && <SortableContainer dndKitId="56d66271-882c-4adf-bb65-45bea89decf2" containerType="regular" prevTag="div" className="border-t border-black/5 bg-white md:hidden" data-magicpath-id="31" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="84341512-5b52-444d-ae19-659b4e5644aa" containerType="regular" prevTag="nav" className="mx-auto max-w-6xl px-4 py-2" data-magicpath-id="32" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="ec828547-7619-4f1c-8c32-2a1d280bd9cd" containerType="collection" prevTag="div" className="grid gap-1" data-magicpath-id="33" data-magicpath-path="DendoraLandingPage.tsx">
                {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="w-full rounded-md px-2 py-2 text-left text-sm text-black/80 hover:bg-black/5" data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="DendoraLandingPage.tsx">
                    <span data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="35" data-magicpath-path="DendoraLandingPage.tsx">{n.label}</span>
                  </button>)}
                <a href="mailto:hello@dendora.hu" className="mt-1 inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm font-medium text-white" data-magicpath-id="36" data-magicpath-path="DendoraLandingPage.tsx">
                  <Mail className="h-4 w-4" data-magicpath-id="37" data-magicpath-path="DendoraLandingPage.tsx" />
                  <span data-magicpath-id="38" data-magicpath-path="DendoraLandingPage.tsx">Contact</span>
                </a>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>}
      </SortableContainer>

      {/* Hero */}
      <SortableContainer dndKitId="a6222d55-9279-46c6-a56f-f3f5c8fba8ea" containerType="regular" prevTag="section" id="home" className="relative" data-magicpath-id="39" data-magicpath-path="DendoraLandingPage.tsx">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(0,0,0,0.06),transparent_60%)]" data-magicpath-id="40" data-magicpath-path="DendoraLandingPage.tsx" />
        <SortableContainer dndKitId="38a07548-036d-42c4-8888-16420e6e11cd" containerType="regular" prevTag="div" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24" data-magicpath-id="41" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="a69dfe9a-a8fd-438a-8be8-bfbebb98ecb5" containerType="regular" prevTag="div" className="flex flex-col justify-center" data-magicpath-id="42" data-magicpath-path="DendoraLandingPage.tsx">
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
          }} className="text-4xl font-semibold tracking-tight md:text-5xl" data-magicpath-id="43" data-magicpath-path="DendoraLandingPage.tsx">
              <span data-magicpath-id="44" data-magicpath-path="DendoraLandingPage.tsx">Minimal software, maximal impact.</span>
            </motion.h1>
            <p className="mt-4 text-base text-black/65 md:text-lg" data-magicpath-id="45" data-magicpath-path="DendoraLandingPage.tsx">
              <span data-magicpath-id="46" data-magicpath-path="DendoraLandingPage.tsx">We build lean, dependable web and mobile products. Strategy, design, and engineering — delivered with clarity.</span>
            </p>

            <SortableContainer dndKitId="19dc8483-6559-4ee9-badd-e1a4ea85cb35" containerType="regular" prevTag="div" className="mt-8 flex flex-wrap items-center gap-3" data-magicpath-id="47" data-magicpath-path="DendoraLandingPage.tsx">
              <CTAButton onClick={() => scrollTo('contact')} data-magicpath-id="48" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="49" data-magicpath-path="DendoraLandingPage.tsx">Start a project</span>
                <ArrowRight className="h-4 w-4" data-magicpath-id="50" data-magicpath-path="DendoraLandingPage.tsx" />
              </CTAButton>
              <OutlineButton onClick={() => scrollTo('work')} data-magicpath-id="51" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="52" data-magicpath-path="DendoraLandingPage.tsx">See our work</span>
              </OutlineButton>
            </SortableContainer>

            <SortableContainer dndKitId="ac97b2fc-d27a-4eb8-bc95-2564146b23d9" containerType="regular" prevTag="div" className="mt-10 grid grid-cols-3 gap-6 md:max-w-md" data-magicpath-id="53" data-magicpath-path="DendoraLandingPage.tsx">
              <Stat value="10+ yrs" label="Experience" data-magicpath-id="54" data-magicpath-path="DendoraLandingPage.tsx" />
              <Stat value="100%" label="Remote-first" data-magicpath-id="55" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="97f6547b-ba06-4feb-8105-8b9d1defaae1" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="56" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Brand card */}
            <SortableContainer dndKitId="67703e56-4b0f-4ff6-af1a-c520c7bd57af" containerType="regular" prevTag="motion.div" initial={prefersReducedMotion ? undefined : {
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
          }} className="relative w-full max-w-md overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm" aria-label="Dendora brand" data-magicpath-id="57" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="65e75fd4-a126-429e-af20-49b3b2617b47" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="58" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="5e144098-ee76-47f2-9ec0-f2750a5c7ca9" containerType="regular" prevTag="div" className="relative h-14 w-14" data-magicpath-id="59" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="absolute inset-0 rounded-2xl bg-black" data-magicpath-id="60" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute left-1 top-1 h-10 w-10 rounded-xl bg-white" data-magicpath-id="61" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute right-1 top-1 h-10 w-5 rounded-r-xl bg-black" data-magicpath-id="62" data-magicpath-path="DendoraLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="f688b5d8-d480-4fba-a077-eb34363219a9" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="text-xl font-semibold tracking-wide" data-magicpath-id="64" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-black/60" data-magicpath-id="65" data-magicpath-path="DendoraLandingPage.tsx">Software Development</div>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="9bdd41b0-3aa7-432b-a636-7846c2553949" containerType="regular" prevTag="div" className="mt-6 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-4" data-magicpath-id="66" data-magicpath-path="DendoraLandingPage.tsx">
                <p className="text-sm text-black/70" data-magicpath-id="67" data-magicpath-path="DendoraLandingPage.tsx">
                  <span data-magicpath-id="68" data-magicpath-path="DendoraLandingPage.tsx">Focused, high-quality engineering with an eye for design. We partner with startups and teams to launch and grow products.</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Services */}
      <SortableContainer dndKitId="8e373fc6-f464-40dc-a88d-03950fcdc677" containerType="regular" prevTag="section" id="services" className="border-t border-black/5 bg-white" data-magicpath-id="69" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="65ee23f1-150f-4eca-93f7-5d1cbff61494" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="70" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="b4ec64f0-0ec5-424e-97f2-1da535bf8679" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="71" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="72" data-magicpath-path="DendoraLandingPage.tsx">What we do</h2>
            <span className="text-sm text-black/60" data-magicpath-id="73" data-magicpath-path="DendoraLandingPage.tsx">Lean, reliable, shipped.</span>
          </SortableContainer>

          <SortableContainer dndKitId="73af5322-d990-4686-8d3f-6f5fc0f876c1" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-3" data-magicpath-id="74" data-magicpath-path="DendoraLandingPage.tsx">
            <Feature title="Product Strategy" desc="Scope, roadmap, and validation. We make sure we build the right thing before building it right." data-magicpath-id="75" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Design & UX" desc="Minimal, accessible interfaces that focus on clarity and speed. Prototypes to production-ready design systems." data-magicpath-id="76" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Full‑stack Development" desc="Modern web apps with React, TypeScript, and cloud-native backends. Performance and maintainability first." data-magicpath-id="77" data-magicpath-path="DendoraLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Work */}
      <SortableContainer dndKitId="690fe88e-06d0-440a-b772-43c795bea403" containerType="regular" prevTag="section" id="work" className="border-t border-black/5" data-magicpath-id="78" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="6e04eea7-ad6f-4957-b6d2-85ca3e0ad99c" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="79" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="579c1f53-f640-4f2b-8d13-4ce49502a214" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="80" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="81" data-magicpath-path="DendoraLandingPage.tsx">Selected work</h2>
            <span className="text-sm text-black/60" data-magicpath-id="82" data-magicpath-path="DendoraLandingPage.tsx">Recent highlights</span>
          </SortableContainer>

          <SortableContainer dndKitId="6b8704fd-e6cb-4f23-8046-37f84c61ef6e" containerType="collection" prevTag="div" className="grid gap-6 md:grid-cols-3" data-magicpath-id="83" data-magicpath-path="DendoraLandingPage.tsx">
            {[{
            name: 'FoundryPulse',
            desc: 'Automating corporate workflows with robust orchestration and clear oversight.',
            brandBg: 'bg-[#0B0D10]',
            image: {
              src: '/foundrypulse-wordmark.png',
              alt: 'FoundryPulse wordmark with pouring ladle and pulse icon'
            },
            mpid: "dbb8520b-24d4-4ac6-a28b-93a3e97271ac"
          }, {
            name: 'SaaS Dashboard',
            desc: 'Composable analytics with real‑time updates and role‑based access.',
            brandBg: 'bg-[linear-gradient(120deg,rgba(0,0,0,0.06),transparent)]',
            image: undefined,
            mpid: "00190da1-3fa7-4ec7-8b66-028a6f4857aa"
          }, {
            name: 'E‑commerce Revamp',
            desc: 'Headless storefront with lightning‑fast navigation and checkout.',
            brandBg: 'bg-[linear-gradient(120deg,rgba(0,0,0,0.06),transparent)]',
            image: undefined,
            mpid: "851ad404-c8f3-49d6-beef-64328c4caa47"
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
          }} className="group relative overflow-hidden rounded-xl border border-black/10 bg-white" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="DendoraLandingPage.tsx">
                <div className={cn("aspect-[16/10]", p.brandBg)} data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="flex h-full w-full items-center justify-between px-4 py-3" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="DendoraLandingPage.tsx">
                      {p.image ? <picture data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="DendoraLandingPage.tsx">
                          <source srcSet={p.image.src} data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="DendoraLandingPage.tsx" />
                          <img src={p.image.src} alt={p.image.alt} className="h-6 w-auto" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-field="src:unknown" data-magicpath-id="90" data-magicpath-path="DendoraLandingPage.tsx" />
                        </picture> : <div className="relative h-8 w-8" aria-hidden="true" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="DendoraLandingPage.tsx">
                          <div className="absolute inset-0 rounded-[6px] bg-white/10" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="DendoraLandingPage.tsx" />
                          <div className="absolute left-1 top-1 h-6 w-6 rounded-[5px] bg-white" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="DendoraLandingPage.tsx" />
                          <div className="absolute right-1 top-1 h-6 w-2.5 rounded-r-[5px] bg-black/80" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="DendoraLandingPage.tsx" />
                        </div>}
                      <span className="text-sm font-medium tracking-tight" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="95" data-magicpath-path="DendoraLandingPage.tsx">{p.name}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/70" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="DendoraLandingPage.tsx">
                      <span data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="97" data-magicpath-path="DendoraLandingPage.tsx">Case study</span>
                    </div>
                  </div>
                </div>
                <div className="p-4" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="98" data-magicpath-path="DendoraLandingPage.tsx">
                  <h3 className="text-base font-semibold" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="100" data-magicpath-path="DendoraLandingPage.tsx">{p.name}</span></h3>
                  <p className="mt-1 text-sm text-black/60" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="102" data-magicpath-path="DendoraLandingPage.tsx">{p.desc}</span></p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm text-black/70" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="DendoraLandingPage.tsx">
                    <span data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="DendoraLandingPage.tsx">Details</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="DendoraLandingPage.tsx" />
                  </div>
                </div>
              </motion.article>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* About */}
      <SortableContainer dndKitId="dc113d31-fbad-4f52-9d9b-cf1201c49ab4" containerType="regular" prevTag="section" id="about" className="border-t border-black/5 bg-white" data-magicpath-id="106" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="e60bf433-0ce5-41d7-bdb9-b42b568f7225" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="107" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="694de831-99e3-4623-8910-fbf1f471fa0c" containerType="regular" prevTag="div" className="grid items-center gap-10 md:grid-cols-2" data-magicpath-id="108" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="de912c83-29fc-4a1b-85fd-68d4cf50b3b7" containerType="regular" prevTag="div" data-magicpath-id="109" data-magicpath-path="DendoraLandingPage.tsx">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="110" data-magicpath-path="DendoraLandingPage.tsx">Built with intention</h2>
              <p className="mt-4 text-black/65" data-magicpath-id="111" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="112" data-magicpath-path="DendoraLandingPage.tsx">We’re a small team that prefers fewer meetings and more results. Clear scopes, pragmatic stacks, and steady iteration.</span>
              </p>
              <SortableContainer dndKitId="b53c0bfa-13b9-43ca-8b99-8f88025db4f9" containerType="regular" prevTag="ul" className="mt-6 grid gap-2 text-sm text-black/70" data-magicpath-id="113" data-magicpath-path="DendoraLandingPage.tsx">
                <li className="flex items-center gap-2" data-magicpath-id="114" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="115" data-magicpath-path="DendoraLandingPage.tsx" /> <span data-magicpath-id="116" data-magicpath-path="DendoraLandingPage.tsx">Senior hands‑on engineering</span>
                </li>
                <li className="flex items-center gap-2" data-magicpath-id="117" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="118" data-magicpath-path="DendoraLandingPage.tsx" /> <span data-magicpath-id="119" data-magicpath-path="DendoraLandingPage.tsx">Transparent estimates and delivery</span>
                </li>
                <li className="flex items-center gap-2" data-magicpath-id="120" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="121" data-magicpath-path="DendoraLandingPage.tsx" /> <span data-magicpath-id="122" data-magicpath-path="DendoraLandingPage.tsx">Long‑term maintainability</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="b62ae8cc-3bc2-45f4-8aa1-d9bdc5038235" containerType="regular" prevTag="div" className="mt-7 flex gap-3" data-magicpath-id="123" data-magicpath-path="DendoraLandingPage.tsx">
                <OutlineButton onClick={() => scrollTo('contact')} data-magicpath-id="124" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="125" data-magicpath-path="DendoraLandingPage.tsx">Let’s talk</span></OutlineButton>
                <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="126" data-magicpath-path="DendoraLandingPage.tsx">
                  <Globe className="h-4 w-4" data-magicpath-id="127" data-magicpath-path="DendoraLandingPage.tsx" />
                  <span data-magicpath-id="128" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
                </a>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="ced267b4-57a9-44dc-9923-0a0daf1baf96" containerType="regular" prevTag="div" className="relative" data-magicpath-id="129" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent)]" data-magicpath-id="130" data-magicpath-path="DendoraLandingPage.tsx" />
              <SortableContainer dndKitId="e0b578bb-ee76-466f-a6ba-2653d4e4c64a" containerType="regular" prevTag="div" className="overflow-hidden rounded-2xl border border-black/10 bg-white p-6" data-magicpath-id="131" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="bfc79e7d-92bc-4cd3-ab20-477cf8f7fdee" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-2" data-magicpath-id="132" data-magicpath-path="DendoraLandingPage.tsx">
                  <SortableContainer dndKitId="b084c5a0-a5b4-4319-baf4-5a585af108f0" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="133" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="134" data-magicpath-path="DendoraLandingPage.tsx">Stack</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="135" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="136" data-magicpath-path="DendoraLandingPage.tsx">TypeScript, React, Node.js, Go, Kubernetes</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="272a4527-1a89-4a8f-9204-8bb34bcdd52a" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="137" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="138" data-magicpath-path="DendoraLandingPage.tsx">Approach</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="139" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="140" data-magicpath-path="DendoraLandingPage.tsx">Ship small, iterate fast</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="923b3143-d949-4808-8a46-ad56f5ffcb49" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="141" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="142" data-magicpath-path="DendoraLandingPage.tsx">Principles</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="143" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="144" data-magicpath-path="DendoraLandingPage.tsx">Accessibility and performance</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="bc9f4149-5ab0-41d3-92ef-673331674d31" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="145" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="146" data-magicpath-path="DendoraLandingPage.tsx">Engagement</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="147" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="148" data-magicpath-path="DendoraLandingPage.tsx">Project or retainer</span></p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact */}
      <SortableContainer dndKitId="8bb1e04f-805c-452b-a6f7-ff5cd335b074" containerType="regular" prevTag="section" id="contact" className="border-t border-black/5" data-magicpath-id="149" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="e4584cba-1292-4d3d-a276-0a3703e34fa9" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="150" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="3142ccf7-0c52-4409-bb73-2cf5e1570e0d" containerType="regular" prevTag="div" className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 md:p-8" data-magicpath-id="151" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="152" data-magicpath-path="DendoraLandingPage.tsx">Let’s build something minimal</h2>
            <p className="mt-2 text-sm text-black/65" data-magicpath-id="153" data-magicpath-path="DendoraLandingPage.tsx">
              <span data-magicpath-id="154" data-magicpath-path="DendoraLandingPage.tsx">We prefer simple emails. Reach us directly — no forms.</span>
            </p>

            <SortableContainer dndKitId="166ef2fc-9240-40a1-9223-f0d756b45fc3" containerType="regular" prevTag="div" className="mt-6 flex flex-wrap items-center gap-3" data-magicpath-id="155" data-magicpath-path="DendoraLandingPage.tsx">
              <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="156" data-magicpath-path="DendoraLandingPage.tsx">
                <Mail className="h-4 w-4" data-magicpath-id="157" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="158" data-magicpath-path="DendoraLandingPage.tsx">hello@dendora.hu</span>
              </a>
              <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="159" data-magicpath-path="DendoraLandingPage.tsx">
                <Globe className="h-4 w-4" data-magicpath-id="160" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="161" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
              </a>
              <a href="https://github.com/dendora" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="162" data-magicpath-path="DendoraLandingPage.tsx">
                <Github className="h-4 w-4" data-magicpath-id="163" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="164" data-magicpath-path="DendoraLandingPage.tsx">GitHub</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="2667124f-c1e8-4f06-b067-1e4fcea2a713" containerType="regular" prevTag="footer" className="border-t border-black/5" data-magicpath-id="165" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="b3652e58-a31e-4982-8982-dad8e6b770a3" containerType="regular" prevTag="div" className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-black/60 md:flex-row" data-magicpath-id="166" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="8dc5e05f-379b-485f-bdd4-9b2623ccf4c5" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="167" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="9f24a9f0-bb08-46d3-8d15-7359ca79450b" containerType="regular" prevTag="div" className="relative h-7 w-7" data-magicpath-id="168" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="169" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-5 w-5 rounded-md bg-white" data-magicpath-id="170" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-5 w-2.5 rounded-r-md bg-black" data-magicpath-id="171" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <span data-magicpath-id="172" data-magicpath-path="DendoraLandingPage.tsx">© {new Date().getFullYear()} Dendora. All rights reserved.</span>
          </SortableContainer>
          <SortableContainer dndKitId="065d6d98-b885-43a3-b8f5-61b77d7d281c" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="173" data-magicpath-path="DendoraLandingPage.tsx">
            <a href="https://dendora.hu" className="inline-flex items-center gap-1 hover:text-black" data-magicpath-id="174" data-magicpath-path="DendoraLandingPage.tsx">
              <Globe className="h-4 w-4" data-magicpath-id="175" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="176" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
            </a>
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-1 hover:text-black" data-magicpath-id="177" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="178" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="179" data-magicpath-path="DendoraLandingPage.tsx">hello@dendora.hu</span>
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};