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
    mpid: "79c781b3-cd98-4a34-97ce-db47ee65e12b"
  }, {
    id: 'services',
    label: 'Services',
    mpid: "5f885908-ddf2-4460-9320-f94dacc91a22"
  }, {
    id: 'work',
    label: 'Work',
    mpid: "d1249b13-dc5e-4cde-8457-6422610bfc12"
  }, {
    id: 'about',
    label: 'About',
    mpid: "13880f4d-3dfd-4e84-bfe5-aa4b19293b14"
  }, {
    id: 'contact',
    label: 'Contact',
    mpid: "9784c62c-f3bc-4753-bbf4-870bfd07b98f"
  }] as const;
  const Feature: React.FC<{
    title: string;
    desc: string;
  }> = ({
    title,
    desc
  }) => <SortableContainer dndKitId="69259f14-d19b-43b0-95a3-e64f864da440" containerType="regular" prevTag="div" className="group relative rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md" data-magicpath-id="0" data-magicpath-path="DendoraLandingPage.tsx">
      <SortableContainer dndKitId="ab759cac-9fcf-434d-ad60-05846614a9c2" containerType="regular" prevTag="div" className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white" data-magicpath-id="1" data-magicpath-path="DendoraLandingPage.tsx">
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
  }) => <SortableContainer dndKitId="3f209bd0-8cc4-4009-946b-f350dd6ed410" containerType="regular" prevTag="div" className="flex flex-col items-start" data-magicpath-id="6" data-magicpath-path="DendoraLandingPage.tsx">
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
  return <SortableContainer dndKitId="0f612996-1ce9-41b8-a740-7352fdbb0305" containerType="regular" prevTag="div" className="min-h-dvh w-full bg-white text-black antialiased" data-magicpath-id="11" data-magicpath-path="DendoraLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="d7407644-b67a-4be1-9672-4fb435ea5c26" containerType="regular" prevTag="header" className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur" data-magicpath-id="12" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="34548466-7bf9-4b1e-a171-17da0937c431" containerType="regular" prevTag="div" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" data-magicpath-id="13" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="9675490b-3efe-46f8-9c18-a1c26ef90629" containerType="regular" prevTag="button" onClick={() => scrollTo('home')} className="group flex items-center gap-3" aria-label="Dendora home" data-magicpath-id="14" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="12433538-1e41-4892-a10e-4c6d65e0e90b" containerType="regular" prevTag="div" className="relative h-8 w-8" data-magicpath-id="15" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="16" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-6 w-6 rounded-lg bg-white" data-magicpath-id="17" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-6 w-3 rounded-r-lg bg-black" data-magicpath-id="18" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="45c2d4fa-2680-4976-ac07-8d3846a43094" containerType="regular" prevTag="div" className="flex flex-col items-start text-left" data-magicpath-id="19" data-magicpath-path="DendoraLandingPage.tsx">
              <span className="text-sm font-semibold tracking-wide" data-magicpath-id="20" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/60" data-magicpath-id="21" data-magicpath-path="DendoraLandingPage.tsx">Software Development</span>
            </SortableContainer>
          </SortableContainer>

          {/* Desktop nav */}
          <SortableContainer dndKitId="2c835c28-96bd-40dc-a095-398ecd04c773" containerType="collection" prevTag="nav" className="hidden items-center gap-6 md:flex" data-magicpath-id="22" data-magicpath-path="DendoraLandingPage.tsx">
            {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-black/70 transition hover:text-black" data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="24" data-magicpath-path="DendoraLandingPage.tsx">{n.label}</span>
              </button>)}
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="25" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="26" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="27" data-magicpath-path="DendoraLandingPage.tsx">Contact</span>
            </a>
          </SortableContainer>

          {/* Mobile menu button */}
          <SortableContainer dndKitId="bfda1ad1-272e-4f65-8b08-d75295fe89ac" containerType="regular" prevTag="button" className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} data-magicpath-id="28" data-magicpath-path="DendoraLandingPage.tsx">
            {menuOpen ? <X className="h-5 w-5" data-magicpath-id="29" data-magicpath-path="DendoraLandingPage.tsx" /> : <Menu className="h-5 w-5" data-magicpath-id="30" data-magicpath-path="DendoraLandingPage.tsx" />}
          </SortableContainer>
        </SortableContainer>

        {/* Mobile nav */}
        {menuOpen && <SortableContainer dndKitId="9115cf88-ac29-4913-9df4-0a75b90154a6" containerType="regular" prevTag="div" className="border-t border-black/5 bg-white md:hidden" data-magicpath-id="31" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="07d3de7b-f53d-4cbf-87fa-b5257fbc6fdd" containerType="regular" prevTag="nav" className="mx-auto max-w-6xl px-4 py-2" data-magicpath-id="32" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="c9a245be-159d-4072-9cc5-2febb766426c" containerType="collection" prevTag="div" className="grid gap-1" data-magicpath-id="33" data-magicpath-path="DendoraLandingPage.tsx">
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
      <SortableContainer dndKitId="cb3c9f59-9030-4ce6-bef3-e8b0d34140e2" containerType="regular" prevTag="section" id="home" className="relative" data-magicpath-id="39" data-magicpath-path="DendoraLandingPage.tsx">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(0,0,0,0.06),transparent_60%)]" data-magicpath-id="40" data-magicpath-path="DendoraLandingPage.tsx" />
        <SortableContainer dndKitId="c5426dc8-ed6b-4bf9-a17a-3b58e7d46ac7" containerType="regular" prevTag="div" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24" data-magicpath-id="41" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="c621cc53-b1e1-47c7-8ef5-408159476704" containerType="regular" prevTag="div" className="flex flex-col justify-center" data-magicpath-id="42" data-magicpath-path="DendoraLandingPage.tsx">
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

            <SortableContainer dndKitId="8a6d8526-85c6-4201-ba09-ddb06bb0608b" containerType="regular" prevTag="div" className="mt-8 flex flex-wrap items-center gap-3" data-magicpath-id="47" data-magicpath-path="DendoraLandingPage.tsx">
              <CTAButton onClick={() => scrollTo('contact')} data-magicpath-id="48" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="49" data-magicpath-path="DendoraLandingPage.tsx">Start a project</span>
                <ArrowRight className="h-4 w-4" data-magicpath-id="50" data-magicpath-path="DendoraLandingPage.tsx" />
              </CTAButton>
              <OutlineButton onClick={() => scrollTo('work')} data-magicpath-id="51" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="52" data-magicpath-path="DendoraLandingPage.tsx">See our work</span>
              </OutlineButton>
            </SortableContainer>

            <SortableContainer dndKitId="cac3f2fb-57fa-46b5-8f9a-b76a8f2ed6e3" containerType="regular" prevTag="div" className="mt-10 grid grid-cols-3 gap-6 md:max-w-md" data-magicpath-id="53" data-magicpath-path="DendoraLandingPage.tsx">
              <Stat value="10+ yrs" label="Experience" data-magicpath-id="54" data-magicpath-path="DendoraLandingPage.tsx" />
              <Stat value="100%" label="Remote-first" data-magicpath-id="55" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="3c0d81b2-e0f2-40e8-8afa-bc895c7f9449" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="56" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Brand card */}
            <SortableContainer dndKitId="ac2c0cc6-84f1-4bba-a88c-98eb48c63ca4" containerType="regular" prevTag="motion.div" initial={prefersReducedMotion ? undefined : {
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
              <SortableContainer dndKitId="c258c0f0-516e-4c51-9f99-6ef3b8f3ddc9" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="58" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="a38a5495-d2e4-42b0-ab95-47758cd25f98" containerType="regular" prevTag="div" className="relative h-14 w-14" data-magicpath-id="59" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="absolute inset-0 rounded-2xl bg-black" data-magicpath-id="60" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute left-1 top-1 h-10 w-10 rounded-xl bg-white" data-magicpath-id="61" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute right-1 top-1 h-10 w-5 rounded-r-xl bg-black" data-magicpath-id="62" data-magicpath-path="DendoraLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="b88cc371-b2f5-4708-8800-9ddfe151195b" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="text-xl font-semibold tracking-wide" data-magicpath-id="64" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-black/60" data-magicpath-id="65" data-magicpath-path="DendoraLandingPage.tsx">Software Development</div>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="53ba95bc-81b1-4921-8208-89211716879c" containerType="regular" prevTag="div" className="mt-6 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-4" data-magicpath-id="66" data-magicpath-path="DendoraLandingPage.tsx">
                <p className="text-sm text-black/70" data-magicpath-id="67" data-magicpath-path="DendoraLandingPage.tsx">
                  <span data-magicpath-id="68" data-magicpath-path="DendoraLandingPage.tsx">Focused, high-quality engineering with an eye for design. We partner with startups and teams to launch and grow products.</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Services */}
      <SortableContainer dndKitId="e09980b2-d906-46c6-bfaa-ccd8f9ea40d6" containerType="regular" prevTag="section" id="services" className="border-t border-black/5 bg-white" data-magicpath-id="69" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="61399fdb-2a36-4c89-98d8-70699bc4babe" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="70" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="bdd29eff-fb0b-4e26-86bc-cc7166e1c88d" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="71" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="72" data-magicpath-path="DendoraLandingPage.tsx">What we do</h2>
            <span className="text-sm text-black/60" data-magicpath-id="73" data-magicpath-path="DendoraLandingPage.tsx">Lean, reliable, shipped.</span>
          </SortableContainer>

          <SortableContainer dndKitId="2ae14180-508c-4963-aeb2-98545ae0e635" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-3" data-magicpath-id="74" data-magicpath-path="DendoraLandingPage.tsx">
            <Feature title="Product Strategy" desc="Scope, roadmap, and validation. We make sure we build the right thing before building it right." data-magicpath-id="75" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Design & UX" desc="Minimal, accessible interfaces that focus on clarity and speed. Prototypes to production-ready design systems." data-magicpath-id="76" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Full‑stack Development" desc="Modern web apps with React, TypeScript, and cloud-native backends. Performance and maintainability first." data-magicpath-id="77" data-magicpath-path="DendoraLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Work */}
      <SortableContainer dndKitId="d68671db-d5fc-4e74-b33b-7ba65b1f7930" containerType="regular" prevTag="section" id="work" className="border-t border-black/5" data-magicpath-id="78" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="8934555d-93a5-4216-9c61-5c577744d4c5" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="79" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="a944b932-9712-4c4e-af1a-c0a4229fb802" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="80" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="81" data-magicpath-path="DendoraLandingPage.tsx">Selected work</h2>
            <span className="text-sm text-black/60" data-magicpath-id="82" data-magicpath-path="DendoraLandingPage.tsx">Recent highlights</span>
          </SortableContainer>

          <SortableContainer dndKitId="f07cc84e-c45b-4115-b19c-c6a987891f70" containerType="collection" prevTag="div" className="grid gap-6 md:grid-cols-3" data-magicpath-id="83" data-magicpath-path="DendoraLandingPage.tsx">
            {[{
            name: 'FoundryPulse',
            desc: 'Automating corporate workflows with robust orchestration and clear oversight.',
            brandBg: 'bg-[#0B0D10]',
            image: {
              src: '/foundrypulse-wordmark.png',
              alt: 'FoundryPulse wordmark with pouring ladle and pulse icon'
            },
            mpid: "e4442e95-46b4-4605-8133-4c23bac81999"
          }, {
            name: 'SaaS Dashboard',
            desc: 'Composable analytics with real‑time updates and role‑based access.',
            brandBg: 'bg-[linear-gradient(120deg,rgba(0,0,0,0.06),transparent)]',
            image: undefined,
            mpid: "43a8d6f0-943f-4e6b-8815-191a9ac4ae44"
          }, {
            name: 'E‑commerce Revamp',
            desc: 'Headless storefront with lightning‑fast navigation and checkout.',
            brandBg: 'bg-[linear-gradient(120deg,rgba(0,0,0,0.06),transparent)]',
            image: undefined,
            mpid: "118aa54c-4c87-45c2-bc7d-330ca1cccbf5"
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
      <SortableContainer dndKitId="bbfd8f94-6f5f-4f09-ba3f-7784c1ca673f" containerType="regular" prevTag="section" id="about" className="border-t border-black/5 bg-white" data-magicpath-id="106" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="7964c06b-1265-4738-928a-24cea69d8e26" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="107" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="2f6a27ee-edd9-4c3b-8c3b-3c0e1c94193a" containerType="regular" prevTag="div" className="grid items-center gap-10 md:grid-cols-2" data-magicpath-id="108" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="16716d2b-b62d-479d-be77-c6605ee4dc7d" containerType="regular" prevTag="div" data-magicpath-id="109" data-magicpath-path="DendoraLandingPage.tsx">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="110" data-magicpath-path="DendoraLandingPage.tsx">Built with intention</h2>
              <p className="mt-4 text-black/65" data-magicpath-id="111" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="112" data-magicpath-path="DendoraLandingPage.tsx">We’re a small team that prefers fewer meetings and more results. Clear scopes, pragmatic stacks, and steady iteration.</span>
              </p>
              <SortableContainer dndKitId="7bc799b1-a0f2-48f7-8aa6-07cbc9fd2aed" containerType="regular" prevTag="ul" className="mt-6 grid gap-2 text-sm text-black/70" data-magicpath-id="113" data-magicpath-path="DendoraLandingPage.tsx">
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
              <SortableContainer dndKitId="4420fdf3-5c93-40df-b1b0-a310bdbbe80e" containerType="regular" prevTag="div" className="mt-7 flex gap-3" data-magicpath-id="123" data-magicpath-path="DendoraLandingPage.tsx">
                <OutlineButton onClick={() => scrollTo('contact')} data-magicpath-id="124" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="125" data-magicpath-path="DendoraLandingPage.tsx">Let’s talk</span></OutlineButton>
                <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="126" data-magicpath-path="DendoraLandingPage.tsx">
                  <Globe className="h-4 w-4" data-magicpath-id="127" data-magicpath-path="DendoraLandingPage.tsx" />
                  <span data-magicpath-id="128" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
                </a>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="cc44b52a-ef8a-49de-8365-1d09faa7394a" containerType="regular" prevTag="div" className="relative" data-magicpath-id="129" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent)]" data-magicpath-id="130" data-magicpath-path="DendoraLandingPage.tsx" />
              <SortableContainer dndKitId="fc4696a9-0972-4c36-b4ec-b43a1444b2d5" containerType="regular" prevTag="div" className="overflow-hidden rounded-2xl border border-black/10 bg-white p-6" data-magicpath-id="131" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="75cf0a21-2348-4a8d-8a5d-044e1a23dba4" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-2" data-magicpath-id="132" data-magicpath-path="DendoraLandingPage.tsx">
                  <SortableContainer dndKitId="d62ece23-edcd-4f35-9c47-3cbf02c8347d" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="133" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="134" data-magicpath-path="DendoraLandingPage.tsx">Stack</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="135" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="136" data-magicpath-path="DendoraLandingPage.tsx">TypeScript, React, Node.js, Go, Kubernetes</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="f2ed512e-fe02-486a-817f-f6816ac19e45" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="137" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="138" data-magicpath-path="DendoraLandingPage.tsx">Approach</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="139" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="140" data-magicpath-path="DendoraLandingPage.tsx">Ship small, iterate fast</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="26bf87f2-4f8a-4495-8617-f1581a7a1748" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="141" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="142" data-magicpath-path="DendoraLandingPage.tsx">Principles</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="143" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="144" data-magicpath-path="DendoraLandingPage.tsx">Accessibility and performance</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="aa84f284-de21-41e7-a5a1-e78488fd13fa" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="145" data-magicpath-path="DendoraLandingPage.tsx">
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
      <SortableContainer dndKitId="9eb1616d-84b9-42a4-889c-16272712df35" containerType="regular" prevTag="section" id="contact" className="border-t border-black/5" data-magicpath-id="149" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="c10d89a4-10d5-42b8-8259-60c9286d8ea9" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="150" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="9b70f09e-a0df-4b7d-8cbb-8c8824769a45" containerType="regular" prevTag="div" className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 md:p-8" data-magicpath-id="151" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="152" data-magicpath-path="DendoraLandingPage.tsx">Let’s build something minimal</h2>
            <p className="mt-2 text-sm text-black/65" data-magicpath-id="153" data-magicpath-path="DendoraLandingPage.tsx">
              <span data-magicpath-id="154" data-magicpath-path="DendoraLandingPage.tsx">We prefer simple emails. Reach us directly — no forms.</span>
            </p>

            <SortableContainer dndKitId="83f9d280-c4f9-44b4-912b-0efcbf47536e" containerType="regular" prevTag="div" className="mt-6 flex flex-wrap items-center gap-3" data-magicpath-id="155" data-magicpath-path="DendoraLandingPage.tsx">
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
      <SortableContainer dndKitId="dc612ece-da85-41ac-88f3-28dfa3b488b3" containerType="regular" prevTag="footer" className="border-t border-black/5" data-magicpath-id="165" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="c4ccf6d2-e7b2-4ca1-87b7-9e28fb520505" containerType="regular" prevTag="div" className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-black/60 md:flex-row" data-magicpath-id="166" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="5296e5fb-c859-4879-8244-88bebbae7a82" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="167" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="bdf38f29-7977-4b61-85cd-bb13ebd1028a" containerType="regular" prevTag="div" className="relative h-7 w-7" data-magicpath-id="168" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="169" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-5 w-5 rounded-md bg-white" data-magicpath-id="170" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-5 w-2.5 rounded-r-md bg-black" data-magicpath-id="171" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <span data-magicpath-id="172" data-magicpath-path="DendoraLandingPage.tsx">© {new Date().getFullYear()} Dendora. All rights reserved.</span>
          </SortableContainer>
          <SortableContainer dndKitId="eb52f9fd-6e2c-4c8e-a52e-061566a42d67" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="173" data-magicpath-path="DendoraLandingPage.tsx">
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