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
    mpid: "001e8d58-aeda-48c1-b370-86205213f3f8"
  }, {
    id: 'services',
    label: 'Services',
    mpid: "cb3fed63-b6df-447a-81a5-7ee8f26b98d2"
  }, {
    id: 'work',
    label: 'Work',
    mpid: "5a360593-ad62-48a4-bcc1-e625d9fd480d"
  }, {
    id: 'about',
    label: 'About',
    mpid: "fd7ec9a0-afa7-4032-a075-e0c1b9afd26b"
  }, {
    id: 'contact',
    label: 'Contact',
    mpid: "b24b7d93-8da6-4f11-b22a-aa7985995de4"
  }] as const;
  const Feature: React.FC<{
    title: string;
    desc: string;
  }> = ({
    title,
    desc
  }) => <SortableContainer dndKitId="63e69aab-c4bb-408f-b258-947d3b4e525a" containerType="regular" prevTag="div" className="group relative rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md" data-magicpath-id="0" data-magicpath-path="DendoraLandingPage.tsx">
      <SortableContainer dndKitId="e60a24e7-947b-4a63-828a-196a373b44bb" containerType="regular" prevTag="div" className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white" data-magicpath-id="1" data-magicpath-path="DendoraLandingPage.tsx">
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
  }) => <SortableContainer dndKitId="3d9399ac-81a7-44ca-8979-8e5d5fb3d9bb" containerType="regular" prevTag="div" className="flex flex-col items-start" data-magicpath-id="6" data-magicpath-path="DendoraLandingPage.tsx">
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
  return <SortableContainer dndKitId="60f34621-5503-47df-9a29-344cdd43cf60" containerType="regular" prevTag="div" className="min-h-dvh w-full bg-white text-black antialiased" data-magicpath-id="11" data-magicpath-path="DendoraLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="76c7520a-b81d-4de1-9863-e0f976b6d69e" containerType="regular" prevTag="header" className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur" data-magicpath-id="12" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="d9ce6607-c923-4267-bded-2fb4bcfc03fe" containerType="regular" prevTag="div" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" data-magicpath-id="13" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="4ebc5cc9-24fd-4191-acdc-7e5d08681c94" containerType="regular" prevTag="button" onClick={() => scrollTo('home')} className="group flex items-center gap-3" aria-label="Dendora home" data-magicpath-id="14" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="dd84d690-cce6-4e74-9df1-95ea400e6d7e" containerType="regular" prevTag="div" className="relative h-8 w-8" data-magicpath-id="15" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="16" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-6 w-6 rounded-lg bg-white" data-magicpath-id="17" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-6 w-3 rounded-r-lg bg-black" data-magicpath-id="18" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="52cb6d71-72f4-4b4e-a271-06d4035a8065" containerType="regular" prevTag="div" className="flex flex-col items-start text-left" data-magicpath-id="19" data-magicpath-path="DendoraLandingPage.tsx">
              <span className="text-sm font-semibold tracking-wide" data-magicpath-id="20" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/60" data-magicpath-id="21" data-magicpath-path="DendoraLandingPage.tsx">Software Development</span>
            </SortableContainer>
          </SortableContainer>

          {/* Desktop nav */}
          <SortableContainer dndKitId="725d89bb-6b86-40d0-be9e-b6ce0b44cd9d" containerType="collection" prevTag="nav" className="hidden items-center gap-6 md:flex" data-magicpath-id="22" data-magicpath-path="DendoraLandingPage.tsx">
            {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-black/70 transition hover:text-black" data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="24" data-magicpath-path="DendoraLandingPage.tsx">{n.label}</span>
              </button>)}
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="25" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="26" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="27" data-magicpath-path="DendoraLandingPage.tsx">Contact</span>
            </a>
          </SortableContainer>

          {/* Mobile menu button */}
          <SortableContainer dndKitId="3026d810-2947-4e41-8604-ddbb1e9eee1e" containerType="regular" prevTag="button" className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} data-magicpath-id="28" data-magicpath-path="DendoraLandingPage.tsx">
            {menuOpen ? <X className="h-5 w-5" data-magicpath-id="29" data-magicpath-path="DendoraLandingPage.tsx" /> : <Menu className="h-5 w-5" data-magicpath-id="30" data-magicpath-path="DendoraLandingPage.tsx" />}
          </SortableContainer>
        </SortableContainer>

        {/* Mobile nav */}
        {menuOpen && <SortableContainer dndKitId="063b7656-5d2b-48b0-9924-825e526c7a2c" containerType="regular" prevTag="div" className="border-t border-black/5 bg-white md:hidden" data-magicpath-id="31" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="c3d687a0-4b52-4a75-bce4-a654d3bef83c" containerType="regular" prevTag="nav" className="mx-auto max-w-6xl px-4 py-2" data-magicpath-id="32" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="d11f7776-209f-48c5-9c9c-a932876ce558" containerType="collection" prevTag="div" className="grid gap-1" data-magicpath-id="33" data-magicpath-path="DendoraLandingPage.tsx">
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
      <SortableContainer dndKitId="4ab6464a-ff32-4a2b-adbc-b1482617abac" containerType="regular" prevTag="section" id="home" className="relative" data-magicpath-id="39" data-magicpath-path="DendoraLandingPage.tsx">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(0,0,0,0.06),transparent_60%)]" data-magicpath-id="40" data-magicpath-path="DendoraLandingPage.tsx" />
        <SortableContainer dndKitId="878428e1-a8ad-439d-8116-f5abac9d492c" containerType="regular" prevTag="div" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24" data-magicpath-id="41" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="bf7f0729-b3cf-4a71-8fa2-49e8b4c599a6" containerType="regular" prevTag="div" className="flex flex-col justify-center" data-magicpath-id="42" data-magicpath-path="DendoraLandingPage.tsx">
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

            <SortableContainer dndKitId="6b721998-c1c6-4ee1-83ed-731b2724d818" containerType="regular" prevTag="div" className="mt-8 flex flex-wrap items-center gap-3" data-magicpath-id="47" data-magicpath-path="DendoraLandingPage.tsx">
              <CTAButton onClick={() => scrollTo('contact')} data-magicpath-id="48" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="49" data-magicpath-path="DendoraLandingPage.tsx">Start a project</span>
                <ArrowRight className="h-4 w-4" data-magicpath-id="50" data-magicpath-path="DendoraLandingPage.tsx" />
              </CTAButton>
              <OutlineButton onClick={() => scrollTo('work')} data-magicpath-id="51" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="52" data-magicpath-path="DendoraLandingPage.tsx">See our work</span>
              </OutlineButton>
            </SortableContainer>

            <SortableContainer dndKitId="c3748548-be9b-4032-bafa-ac4fc7f805e3" containerType="regular" prevTag="div" className="mt-10 grid grid-cols-3 gap-6 md:max-w-md" data-magicpath-id="53" data-magicpath-path="DendoraLandingPage.tsx">
              <Stat value="10+ yrs" label="Experience" data-magicpath-id="54" data-magicpath-path="DendoraLandingPage.tsx" />
              <Stat value="100%" label="Remote-first" data-magicpath-id="55" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="766e6bfa-f9a8-4644-922b-2655dc5943e5" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="56" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Brand card */}
            <SortableContainer dndKitId="05105d53-15cd-42ee-b6da-10e9bba10a76" containerType="regular" prevTag="motion.div" initial={prefersReducedMotion ? undefined : {
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
              <SortableContainer dndKitId="54c84aa9-e68e-4fbb-a846-7e643dbe23c1" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="58" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="06a5a394-6f23-414e-9848-a6d8b1a36374" containerType="regular" prevTag="div" className="relative h-14 w-14" data-magicpath-id="59" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="absolute inset-0 rounded-2xl bg-black" data-magicpath-id="60" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute left-1 top-1 h-10 w-10 rounded-xl bg-white" data-magicpath-id="61" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute right-1 top-1 h-10 w-5 rounded-r-xl bg-black" data-magicpath-id="62" data-magicpath-path="DendoraLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="97dbee06-45f7-410a-aa63-4f642d681e13" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="text-xl font-semibold tracking-wide" data-magicpath-id="64" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-black/60" data-magicpath-id="65" data-magicpath-path="DendoraLandingPage.tsx">Software Development</div>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="2031ac3f-75be-4cbd-8e38-850680a4fbac" containerType="regular" prevTag="div" className="mt-6 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-4" data-magicpath-id="66" data-magicpath-path="DendoraLandingPage.tsx">
                <p className="text-sm text-black/70" data-magicpath-id="67" data-magicpath-path="DendoraLandingPage.tsx">
                  <span data-magicpath-id="68" data-magicpath-path="DendoraLandingPage.tsx">Focused, high-quality engineering with an eye for design. We partner with startups and teams to launch and grow products.</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Services */}
      <SortableContainer dndKitId="25aad5ca-19e9-4517-8990-55be624bb0f4" containerType="regular" prevTag="section" id="services" className="border-t border-black/5 bg-white" data-magicpath-id="69" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="41d27b2b-c456-4617-ab41-8e9ac46918c9" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="70" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="971279f0-252e-4841-84af-03fae90c8e90" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="71" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="72" data-magicpath-path="DendoraLandingPage.tsx">What we do</h2>
            <span className="text-sm text-black/60" data-magicpath-id="73" data-magicpath-path="DendoraLandingPage.tsx">Lean, reliable, shipped.</span>
          </SortableContainer>

          <SortableContainer dndKitId="5481227d-384d-4c74-a858-68ab887f797a" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-3" data-magicpath-id="74" data-magicpath-path="DendoraLandingPage.tsx">
            <Feature title="Product Strategy" desc="Scope, roadmap, and validation. We make sure we build the right thing before building it right." data-magicpath-id="75" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Design & UX" desc="Minimal, accessible interfaces that focus on clarity and speed. Prototypes to production-ready design systems." data-magicpath-id="76" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Full‑stack Development" desc="Modern web apps with React, TypeScript, and cloud-native backends. Performance and maintainability first." data-magicpath-id="77" data-magicpath-path="DendoraLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Work */}
      <SortableContainer dndKitId="ef3deb98-0fd2-4bd8-8cb9-4d757b7e7d9d" containerType="regular" prevTag="section" id="work" className="border-t border-black/5" data-magicpath-id="78" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="0ecf0dc9-7e64-4b59-81f3-3077fd87052c" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="79" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="b08d147a-3b4b-422a-8c4c-03b44c0f0df1" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="80" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="81" data-magicpath-path="DendoraLandingPage.tsx">Selected work</h2>
            <span className="text-sm text-black/60" data-magicpath-id="82" data-magicpath-path="DendoraLandingPage.tsx">Recent highlights</span>
          </SortableContainer>

          <SortableContainer dndKitId="89bd006a-f5e0-4e3e-8cf5-dbb8251e69fd" containerType="collection" prevTag="div" className="grid gap-6 md:grid-cols-3" data-magicpath-id="83" data-magicpath-path="DendoraLandingPage.tsx">
            {[{
            name: 'FoundryPulse',
            desc: 'Automating corporate workflows with robust orchestration and clear oversight.',
            mpid: "13cb77af-4541-46dd-8735-77c0fcb964e3"
          }, {
            name: 'SaaS Dashboard',
            desc: 'Composable analytics with real‑time updates and role‑based access.',
            mpid: "59b11292-34a7-4c30-ba48-72fcaabf9adb"
          }, {
            name: 'E‑commerce Revamp',
            desc: 'Headless storefront with lightning‑fast navigation and checkout.',
            mpid: "027a3c45-002d-48a3-bd35-d9dd5d183d67"
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
                <div className="aspect-[16/10] bg-[linear-gradient(120deg,rgba(0,0,0,0.06),transparent)]" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="DendoraLandingPage.tsx" />
                <div className="p-4" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="DendoraLandingPage.tsx">
                  <h3 className="text-base font-semibold" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="88" data-magicpath-path="DendoraLandingPage.tsx">{p.name}</span></h3>
                  <p className="mt-1 text-sm text-black/60" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="90" data-magicpath-path="DendoraLandingPage.tsx">{p.desc}</span></p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm text-black/70" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="DendoraLandingPage.tsx">
                    <span data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="DendoraLandingPage.tsx">Details</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="DendoraLandingPage.tsx" />
                  </div>
                </div>
              </motion.article>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* About */}
      <SortableContainer dndKitId="7076e01a-0364-4b70-b2b9-e67146aa93b5" containerType="regular" prevTag="section" id="about" className="border-t border-black/5 bg-white" data-magicpath-id="94" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="36fb96af-2a26-4bee-b744-3ac22707cbec" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="95" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="9940e198-ae9d-4941-b1c1-3766abc149c3" containerType="regular" prevTag="div" className="grid items-center gap-10 md:grid-cols-2" data-magicpath-id="96" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="d209e9d8-e17b-42c1-99a2-f585e9a7d5ed" containerType="regular" prevTag="div" data-magicpath-id="97" data-magicpath-path="DendoraLandingPage.tsx">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="98" data-magicpath-path="DendoraLandingPage.tsx">Built with intention</h2>
              <p className="mt-4 text-black/65" data-magicpath-id="99" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="100" data-magicpath-path="DendoraLandingPage.tsx">We’re a small team that prefers fewer meetings and more results. Clear scopes, pragmatic stacks, and steady iteration.</span>
              </p>
              <SortableContainer dndKitId="10cf8167-03f3-4e72-ab5c-f538e82d668b" containerType="regular" prevTag="ul" className="mt-6 grid gap-2 text-sm text-black/70" data-magicpath-id="101" data-magicpath-path="DendoraLandingPage.tsx">
                <li className="flex items-center gap-2" data-magicpath-id="102" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="103" data-magicpath-path="DendoraLandingPage.tsx" /> <span data-magicpath-id="104" data-magicpath-path="DendoraLandingPage.tsx">Senior hands‑on engineering</span>
                </li>
                <li className="flex items-center gap-2" data-magicpath-id="105" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="106" data-magicpath-path="DendoraLandingPage.tsx" /> <span data-magicpath-id="107" data-magicpath-path="DendoraLandingPage.tsx">Transparent estimates and delivery</span>
                </li>
                <li className="flex items-center gap-2" data-magicpath-id="108" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="109" data-magicpath-path="DendoraLandingPage.tsx" /> <span data-magicpath-id="110" data-magicpath-path="DendoraLandingPage.tsx">Long‑term maintainability</span>
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="5f3632f2-86ec-495b-bf43-ca00a1f1c4e4" containerType="regular" prevTag="div" className="mt-7 flex gap-3" data-magicpath-id="111" data-magicpath-path="DendoraLandingPage.tsx">
                <OutlineButton onClick={() => scrollTo('contact')} data-magicpath-id="112" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="113" data-magicpath-path="DendoraLandingPage.tsx">Let’s talk</span></OutlineButton>
                <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="114" data-magicpath-path="DendoraLandingPage.tsx">
                  <Globe className="h-4 w-4" data-magicpath-id="115" data-magicpath-path="DendoraLandingPage.tsx" />
                  <span data-magicpath-id="116" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
                </a>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="e1220c4b-485b-49ac-a549-d63c3a61b9ee" containerType="regular" prevTag="div" className="relative" data-magicpath-id="117" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent)]" data-magicpath-id="118" data-magicpath-path="DendoraLandingPage.tsx" />
              <SortableContainer dndKitId="d140535e-591b-471a-a337-5e9d1d4ad3c5" containerType="regular" prevTag="div" className="overflow-hidden rounded-2xl border border-black/10 bg-white p-6" data-magicpath-id="119" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="180f168c-fb5e-44c1-bb15-6924767e1a99" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-2" data-magicpath-id="120" data-magicpath-path="DendoraLandingPage.tsx">
                  <SortableContainer dndKitId="2fe98271-eee1-47ca-be72-9e36808fbc6b" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="121" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="122" data-magicpath-path="DendoraLandingPage.tsx">Stack</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="123" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="124" data-magicpath-path="DendoraLandingPage.tsx">TypeScript, React, Node.js, Go, Kubernetes</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="de480066-ceaf-476a-a889-fb27a303ba2b" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="125" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="126" data-magicpath-path="DendoraLandingPage.tsx">Approach</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="127" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="128" data-magicpath-path="DendoraLandingPage.tsx">Ship small, iterate fast</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="43bcb9a4-b3f4-4738-b80a-e0e2c66f2fe3" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="129" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="130" data-magicpath-path="DendoraLandingPage.tsx">Principles</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="131" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="132" data-magicpath-path="DendoraLandingPage.tsx">Accessibility and performance</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="ece99cfb-8bdc-4149-9a64-c1428dd7a960" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="133" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="134" data-magicpath-path="DendoraLandingPage.tsx">Engagement</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="135" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="136" data-magicpath-path="DendoraLandingPage.tsx">Project or retainer</span></p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact */}
      <SortableContainer dndKitId="22f72b1a-c4ee-4bdf-9bfd-b07c63cd0e76" containerType="regular" prevTag="section" id="contact" className="border-t border-black/5" data-magicpath-id="137" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="a0ed4421-22fa-4f11-9971-9a20e8909f56" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="138" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="a7e62c64-8268-40d9-bf38-e0f366bd1a88" containerType="regular" prevTag="div" className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 md:p-8" data-magicpath-id="139" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="140" data-magicpath-path="DendoraLandingPage.tsx">Let’s build something minimal</h2>
            <p className="mt-2 text-sm text-black/65" data-magicpath-id="141" data-magicpath-path="DendoraLandingPage.tsx">
              <span data-magicpath-id="142" data-magicpath-path="DendoraLandingPage.tsx">We prefer simple emails. Reach us directly — no forms.</span>
            </p>

            <SortableContainer dndKitId="379dfb4b-3340-411f-b6c6-b3fe974944eb" containerType="regular" prevTag="div" className="mt-6 flex flex-wrap items-center gap-3" data-magicpath-id="143" data-magicpath-path="DendoraLandingPage.tsx">
              <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="144" data-magicpath-path="DendoraLandingPage.tsx">
                <Mail className="h-4 w-4" data-magicpath-id="145" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="146" data-magicpath-path="DendoraLandingPage.tsx">hello@dendora.hu</span>
              </a>
              <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="147" data-magicpath-path="DendoraLandingPage.tsx">
                <Globe className="h-4 w-4" data-magicpath-id="148" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="149" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
              </a>
              <a href="https://github.com/dendora" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="150" data-magicpath-path="DendoraLandingPage.tsx">
                <Github className="h-4 w-4" data-magicpath-id="151" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="152" data-magicpath-path="DendoraLandingPage.tsx">GitHub</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="6d498f8a-c8f4-46c8-8053-5fc445af784d" containerType="regular" prevTag="footer" className="border-t border-black/5" data-magicpath-id="153" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="723f016e-51f0-4694-8a7b-85566e2adb14" containerType="regular" prevTag="div" className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-black/60 md:flex-row" data-magicpath-id="154" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="bb4fba4d-06b4-4ba6-a3de-5ee187ecd05f" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="155" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="d09eb0a0-83a2-4b3f-925d-c337e5cd908b" containerType="regular" prevTag="div" className="relative h-7 w-7" data-magicpath-id="156" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="157" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-5 w-5 rounded-md bg-white" data-magicpath-id="158" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-5 w-2.5 rounded-r-md bg-black" data-magicpath-id="159" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <span data-magicpath-id="160" data-magicpath-path="DendoraLandingPage.tsx">© {new Date().getFullYear()} Dendora. All rights reserved.</span>
          </SortableContainer>
          <SortableContainer dndKitId="c0ef6ca0-350c-46be-9c95-bbd9d1e63719" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="161" data-magicpath-path="DendoraLandingPage.tsx">
            <a href="https://dendora.hu" className="inline-flex items-center gap-1 hover:text-black" data-magicpath-id="162" data-magicpath-path="DendoraLandingPage.tsx">
              <Globe className="h-4 w-4" data-magicpath-id="163" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="164" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
            </a>
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-1 hover:text-black" data-magicpath-id="165" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="166" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="167" data-magicpath-path="DendoraLandingPage.tsx">hello@dendora.hu</span>
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};