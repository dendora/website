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
    mpid: "44281d09-23d2-45db-8449-c32ba469dc53"
  }, {
    id: 'services',
    label: 'Services',
    mpid: "1d5f72e4-0a78-4d64-a2db-85d7c874ad61"
  }, {
    id: 'work',
    label: 'Work',
    mpid: "eba51a17-f6ec-4514-ad02-93c9268feb7e"
  }, {
    id: 'about',
    label: 'About',
    mpid: "bdf43455-ec9b-4ae1-bc68-122d8d975c1e"
  }, {
    id: 'contact',
    label: 'Contact',
    mpid: "9df65293-9ed3-4fa8-acdb-640897d6ecb1"
  }] as const;
  const Feature: React.FC<{
    title: string;
    desc: string;
  }> = ({
    title,
    desc
  }) => <SortableContainer dndKitId="5fc15884-527e-4488-a15a-fa3f95a0feca" containerType="regular" prevTag="div" className="group relative rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md" data-magicpath-id="0" data-magicpath-path="DendoraLandingPage.tsx">
      <SortableContainer dndKitId="3f5feb55-6e74-422f-8576-626c7d8eb96a" containerType="regular" prevTag="div" className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white" data-magicpath-id="1" data-magicpath-path="DendoraLandingPage.tsx">
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
  }) => <SortableContainer dndKitId="97c52d3d-92d5-41ac-9cf1-1a7437dd289a" containerType="regular" prevTag="div" className="flex flex-col items-start" data-magicpath-id="6" data-magicpath-path="DendoraLandingPage.tsx">
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
  return <SortableContainer dndKitId="7b5a48d2-bbee-4bb5-981c-a58337df5e1f" containerType="regular" prevTag="div" className="min-h-dvh w-full bg-white text-black antialiased" data-magicpath-id="11" data-magicpath-path="DendoraLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="54dc2ac9-3da3-4a94-8d90-3a9c0beb68b7" containerType="regular" prevTag="header" className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur" data-magicpath-id="12" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="af1970c1-8566-4308-aaed-8d61099ebef5" containerType="regular" prevTag="div" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" data-magicpath-id="13" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="e53117b2-6b51-4510-ac75-9d621414ad9e" containerType="regular" prevTag="button" onClick={() => scrollTo('home')} className="group flex items-center gap-3" aria-label="Dendora home" data-magicpath-id="14" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="383f19d6-fe66-4d2f-9a11-5182192ec73b" containerType="regular" prevTag="div" className="relative h-8 w-8" data-magicpath-id="15" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="16" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-6 w-6 rounded-lg bg-white" data-magicpath-id="17" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-6 w-3 rounded-r-lg bg-black" data-magicpath-id="18" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="36b8990e-443e-4b68-ad0d-44f122cf76c1" containerType="regular" prevTag="div" className="flex flex-col items-start text-left" data-magicpath-id="19" data-magicpath-path="DendoraLandingPage.tsx">
              <span className="text-sm font-semibold tracking-wide" data-magicpath-id="20" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/60" data-magicpath-id="21" data-magicpath-path="DendoraLandingPage.tsx">Software Development</span>
            </SortableContainer>
          </SortableContainer>

          {/* Desktop nav */}
          <SortableContainer dndKitId="df794278-8fa7-45c4-b1b7-434cb80f7cdd" containerType="collection" prevTag="nav" className="hidden items-center gap-6 md:flex" data-magicpath-id="22" data-magicpath-path="DendoraLandingPage.tsx">
            {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-black/70 transition hover:text-black" data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="24" data-magicpath-path="DendoraLandingPage.tsx">{n.label}</span>
              </button>)}
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="25" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="26" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="27" data-magicpath-path="DendoraLandingPage.tsx">Contact</span>
            </a>
          </SortableContainer>

          {/* Mobile menu button */}
          <SortableContainer dndKitId="631f9674-b38c-485b-8e75-659b921480cb" containerType="regular" prevTag="button" className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} data-magicpath-id="28" data-magicpath-path="DendoraLandingPage.tsx">
            {menuOpen ? <X className="h-5 w-5" data-magicpath-id="29" data-magicpath-path="DendoraLandingPage.tsx" /> : <Menu className="h-5 w-5" data-magicpath-id="30" data-magicpath-path="DendoraLandingPage.tsx" />}
          </SortableContainer>
        </SortableContainer>

        {/* Mobile nav */}
        {menuOpen && <SortableContainer dndKitId="6b4a11d4-ef04-4e6e-b1d2-c45d2fe8ab90" containerType="regular" prevTag="div" className="border-t border-black/5 bg-white md:hidden" data-magicpath-id="31" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="5f818ab1-e934-49c6-bdb7-609525adc168" containerType="regular" prevTag="nav" className="mx-auto max-w-6xl px-4 py-2" data-magicpath-id="32" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="49e6ea77-1dd8-4196-9094-e8c74677c031" containerType="collection" prevTag="div" className="grid gap-1" data-magicpath-id="33" data-magicpath-path="DendoraLandingPage.tsx">
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
      <SortableContainer dndKitId="41a98be6-df1f-4adf-8adc-6b3a6fd8e7e0" containerType="regular" prevTag="section" id="home" className="relative" data-magicpath-id="39" data-magicpath-path="DendoraLandingPage.tsx">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(0,0,0,0.06),transparent_60%)]" data-magicpath-id="40" data-magicpath-path="DendoraLandingPage.tsx" />
        <SortableContainer dndKitId="8334a41e-5969-4a1a-acc6-7ff49ad36595" containerType="regular" prevTag="div" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24" data-magicpath-id="41" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="585cc3c1-e882-49e4-956b-4c41f7e1da68" containerType="regular" prevTag="div" className="flex flex-col justify-center" data-magicpath-id="42" data-magicpath-path="DendoraLandingPage.tsx">
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

            <SortableContainer dndKitId="2cab60d2-219a-48c7-949c-801d3beb40de" containerType="regular" prevTag="div" className="mt-8 flex flex-wrap items-center gap-3" data-magicpath-id="47" data-magicpath-path="DendoraLandingPage.tsx">
              <CTAButton onClick={() => scrollTo('contact')} data-magicpath-id="48" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="49" data-magicpath-path="DendoraLandingPage.tsx">Start a project</span>
                <ArrowRight className="h-4 w-4" data-magicpath-id="50" data-magicpath-path="DendoraLandingPage.tsx" />
              </CTAButton>
              <OutlineButton onClick={() => scrollTo('work')} data-magicpath-id="51" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="52" data-magicpath-path="DendoraLandingPage.tsx">See our work</span>
              </OutlineButton>
            </SortableContainer>

            <SortableContainer dndKitId="ad9521c7-604f-4818-a1c2-f6002e9f0e74" containerType="regular" prevTag="div" className="mt-10 grid grid-cols-3 gap-6 md:max-w-md" data-magicpath-id="53" data-magicpath-path="DendoraLandingPage.tsx">
              <Stat value="10+ yrs" label="Experience" data-magicpath-id="54" data-magicpath-path="DendoraLandingPage.tsx" />
              <Stat value="100%" label="Remote-first" data-magicpath-id="55" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="4174db7b-2f5c-4bf5-b28c-f135c4d9c6cf" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="56" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Brand card */}
            <SortableContainer dndKitId="a36cdaa0-cc71-44a6-9f0d-4d2957d59456" containerType="regular" prevTag="motion.div" initial={prefersReducedMotion ? undefined : {
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
              <SortableContainer dndKitId="c372c3c6-2aa3-4cdf-a067-3ea1bdfe9e99" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="58" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="72e8def0-c4e4-4bcf-b3d3-dbd437d3a4d4" containerType="regular" prevTag="div" className="relative h-14 w-14" data-magicpath-id="59" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="absolute inset-0 rounded-2xl bg-black" data-magicpath-id="60" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute left-1 top-1 h-10 w-10 rounded-xl bg-white" data-magicpath-id="61" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute right-1 top-1 h-10 w-5 rounded-r-xl bg-black" data-magicpath-id="62" data-magicpath-path="DendoraLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="9a039392-00c3-4e27-a807-54152dfe8280" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="text-xl font-semibold tracking-wide" data-magicpath-id="64" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-black/60" data-magicpath-id="65" data-magicpath-path="DendoraLandingPage.tsx">Software Development</div>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="b51ac9c7-bb74-495e-843f-145532ec9bd2" containerType="regular" prevTag="div" className="mt-6 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-4" data-magicpath-id="66" data-magicpath-path="DendoraLandingPage.tsx">
                <p className="text-sm text-black/70" data-magicpath-id="67" data-magicpath-path="DendoraLandingPage.tsx">
                  <span data-magicpath-id="68" data-magicpath-path="DendoraLandingPage.tsx">Focused, high-quality engineering with an eye for design. We partner with startups and teams to launch and grow products.</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Services */}
      <SortableContainer dndKitId="80528790-8277-4f4a-97f7-04edb11b5255" containerType="regular" prevTag="section" id="services" className="border-t border-black/5 bg-white" data-magicpath-id="69" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="714ed54e-f6d4-48a2-8b3b-0c2d92ec5e37" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="70" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="76fed7f5-4f0c-48cb-9ef7-4ea494520333" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="71" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="72" data-magicpath-path="DendoraLandingPage.tsx">What we do</h2>
            <span className="text-sm text-black/60" data-magicpath-id="73" data-magicpath-path="DendoraLandingPage.tsx">Lean, reliable, shipped.</span>
          </SortableContainer>

          <SortableContainer dndKitId="dfdee0c4-a4c2-40cb-b561-188ebf0febe4" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-3" data-magicpath-id="74" data-magicpath-path="DendoraLandingPage.tsx">
            <Feature title="Product Strategy" desc="Scope, roadmap, and validation. We make sure we build the right thing before building it right." data-magicpath-id="75" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Design & UX" desc="Minimal, accessible interfaces that focus on clarity and speed. Prototypes to production-ready design systems." data-magicpath-id="76" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Full‑stack Development" desc="Modern web apps with React, TypeScript, and cloud-native backends. Performance and maintainability first." data-magicpath-id="77" data-magicpath-path="DendoraLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Work */}
      <SortableContainer dndKitId="b4fcf703-e9ce-4910-aed4-19b881c0565b" containerType="regular" prevTag="section" id="work" className="border-t border-black/5" data-magicpath-id="78" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="fa021691-82c9-4957-b42a-347d167df299" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="79" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="c8e179c1-46ab-400c-bfc7-13c6305e1ff9" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="80" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="81" data-magicpath-path="DendoraLandingPage.tsx">Selected work</h2>
            <span className="text-sm text-black/60" data-magicpath-id="82" data-magicpath-path="DendoraLandingPage.tsx">Recent highlights</span>
          </SortableContainer>

          <SortableContainer dndKitId="0c352888-b282-41c1-b6e1-8cb37c9dcb31" containerType="collection" prevTag="div" className="grid gap-6 md:grid-cols-3" data-magicpath-id="83" data-magicpath-path="DendoraLandingPage.tsx">
            {[{
            name: 'SaaS Dashboard',
            desc: 'Composable analytics with real‑time updates and role‑based access.',
            mpid: "092ab2e2-c5f1-41e8-88fb-f3a903acd615"
          }, {
            name: 'E‑commerce Revamp',
            desc: 'Headless storefront with lightning‑fast navigation and checkout.',
            mpid: "1355f6bf-7cae-472e-bc38-b1897e9ff0a0"
          }, {
            name: 'Mobile Companion',
            desc: 'Cross‑platform app for field operations with offline sync.',
            mpid: "6b883197-984a-4b16-a96b-49a8a5c20e65"
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
      <SortableContainer dndKitId="bce1ab2b-35a1-4b4e-839b-46645485e909" containerType="regular" prevTag="section" id="about" className="border-t border-black/5 bg-white" data-magicpath-id="94" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="1560c764-1713-45e8-9bbb-5e970b9e22b7" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="95" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="3ee35b85-e859-4529-9256-740076aeece8" containerType="regular" prevTag="div" className="grid items-center gap-10 md:grid-cols-2" data-magicpath-id="96" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="5064625b-6735-44a1-9966-aad85fd4723f" containerType="regular" prevTag="div" data-magicpath-id="97" data-magicpath-path="DendoraLandingPage.tsx">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="98" data-magicpath-path="DendoraLandingPage.tsx">Built with intention</h2>
              <p className="mt-4 text-black/65" data-magicpath-id="99" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="100" data-magicpath-path="DendoraLandingPage.tsx">We’re a small team that prefers fewer meetings and more results. Clear scopes, pragmatic stacks, and steady iteration.</span>
              </p>
              <SortableContainer dndKitId="31a2e5ea-6329-45a2-a9de-58a0c6cf219c" containerType="regular" prevTag="ul" className="mt-6 grid gap-2 text-sm text-black/70" data-magicpath-id="101" data-magicpath-path="DendoraLandingPage.tsx">
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
              <SortableContainer dndKitId="f7cc5381-8736-43e8-afe8-2c9a800f04b6" containerType="regular" prevTag="div" className="mt-7 flex gap-3" data-magicpath-id="111" data-magicpath-path="DendoraLandingPage.tsx">
                <OutlineButton onClick={() => scrollTo('contact')} data-magicpath-id="112" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="113" data-magicpath-path="DendoraLandingPage.tsx">Let’s talk</span></OutlineButton>
                <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="114" data-magicpath-path="DendoraLandingPage.tsx">
                  <Globe className="h-4 w-4" data-magicpath-id="115" data-magicpath-path="DendoraLandingPage.tsx" />
                  <span data-magicpath-id="116" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
                </a>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="4f59bd42-0660-4bc7-a965-059e9d9ae4c4" containerType="regular" prevTag="div" className="relative" data-magicpath-id="117" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent)]" data-magicpath-id="118" data-magicpath-path="DendoraLandingPage.tsx" />
              <SortableContainer dndKitId="e2fd19fb-6666-4c0f-bcfa-780742eb091b" containerType="regular" prevTag="div" className="overflow-hidden rounded-2xl border border-black/10 bg-white p-6" data-magicpath-id="119" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="c613f99f-e4f5-40e5-9ca5-decaf865e464" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-2" data-magicpath-id="120" data-magicpath-path="DendoraLandingPage.tsx">
                  <SortableContainer dndKitId="0ad9bf12-7ba2-4749-9d57-37140c685a3a" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="121" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="122" data-magicpath-path="DendoraLandingPage.tsx">Stack</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="123" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="124" data-magicpath-path="DendoraLandingPage.tsx">TypeScript, React, Node.js, Go, Kubernetes</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="8c8d7998-4e5b-4815-8867-9a57a8d57afd" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="125" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="126" data-magicpath-path="DendoraLandingPage.tsx">Approach</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="127" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="128" data-magicpath-path="DendoraLandingPage.tsx">Ship small, iterate fast</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="a55933d8-1fdf-4649-b775-ec77fac29541" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="129" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="130" data-magicpath-path="DendoraLandingPage.tsx">Principles</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="131" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="132" data-magicpath-path="DendoraLandingPage.tsx">Accessibility and performance</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="3211f4bf-7808-4874-9482-122a8c41d697" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="133" data-magicpath-path="DendoraLandingPage.tsx">
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
      <SortableContainer dndKitId="0c58f19a-feee-4efd-bbe5-3776ed38e615" containerType="regular" prevTag="section" id="contact" className="border-t border-black/5" data-magicpath-id="137" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="b86e8558-5914-4afa-8fd8-923c17093c18" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="138" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="37a6368a-2073-435b-a63c-eb080a848a30" containerType="regular" prevTag="div" className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 md:p-8" data-magicpath-id="139" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="140" data-magicpath-path="DendoraLandingPage.tsx">Let’s build something minimal</h2>
            <p className="mt-2 text-sm text-black/65" data-magicpath-id="141" data-magicpath-path="DendoraLandingPage.tsx">
              <span data-magicpath-id="142" data-magicpath-path="DendoraLandingPage.tsx">We prefer simple emails. Reach us directly — no forms.</span>
            </p>

            <SortableContainer dndKitId="f7a36b73-d4bd-43e9-957f-0e19dd074ff1" containerType="regular" prevTag="div" className="mt-6 flex flex-wrap items-center gap-3" data-magicpath-id="143" data-magicpath-path="DendoraLandingPage.tsx">
              <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="144" data-magicpath-path="DendoraLandingPage.tsx">
                <Mail className="h-4 w-4" data-magicpath-id="145" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="146" data-magicpath-path="DendoraLandingPage.tsx">hello@dendora.hu</span>
              </a>
              <a href="tel:+3612345678" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="147" data-magicpath-path="DendoraLandingPage.tsx">
                <Phone className="h-4 w-4" data-magicpath-id="148" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="149" data-magicpath-path="DendoraLandingPage.tsx">+36 1 234 5678</span>
              </a>
              <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="150" data-magicpath-path="DendoraLandingPage.tsx">
                <Globe className="h-4 w-4" data-magicpath-id="151" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="152" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="153" data-magicpath-path="DendoraLandingPage.tsx">
                <Github className="h-4 w-4" data-magicpath-id="154" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="155" data-magicpath-path="DendoraLandingPage.tsx">GitHub</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="8f905b61-df00-4796-8ded-9bedc1203ab7" containerType="regular" prevTag="footer" className="border-t border-black/5" data-magicpath-id="156" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="eb69ba10-0f83-4a41-9d2c-4dd6ebfc895a" containerType="regular" prevTag="div" className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-black/60 md:flex-row" data-magicpath-id="157" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="a35cc005-0957-4a77-a41a-9aaa6a1eb7f7" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="158" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="c390639b-91f2-4b25-ab6b-b311e1812d70" containerType="regular" prevTag="div" className="relative h-7 w-7" data-magicpath-id="159" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="160" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-5 w-5 rounded-md bg-white" data-magicpath-id="161" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-5 w-2.5 rounded-r-md bg-black" data-magicpath-id="162" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <span data-magicpath-id="163" data-magicpath-path="DendoraLandingPage.tsx">© {new Date().getFullYear()} Dendora. All rights reserved.</span>
          </SortableContainer>
          <SortableContainer dndKitId="0d69c96d-e271-433d-bbeb-14ab82e8d229" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="164" data-magicpath-path="DendoraLandingPage.tsx">
            <a href="https://dendora.hu" className="inline-flex items-center gap-1 hover:text-black" data-magicpath-id="165" data-magicpath-path="DendoraLandingPage.tsx">
              <Globe className="h-4 w-4" data-magicpath-id="166" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="167" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
            </a>
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-1 hover:text-black" data-magicpath-id="168" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="169" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="170" data-magicpath-path="DendoraLandingPage.tsx">hello@dendora.hu</span>
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};