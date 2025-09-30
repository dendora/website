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
    mpid: "a97d6588-4373-4b26-bcc2-85607b16b7b9"
  }, {
    id: 'services',
    label: 'Services',
    mpid: "109663b2-52c8-4a48-a7ff-1c63b1b8eb7a"
  }, {
    id: 'work',
    label: 'Work',
    mpid: "a54275ca-081c-48e4-8660-6c55b2f068ca"
  }, {
    id: 'about',
    label: 'About',
    mpid: "e996569d-8b70-40c2-9462-db454be48530"
  }, {
    id: 'contact',
    label: 'Contact',
    mpid: "d0da4c06-15ab-4c99-8b63-01719375f19f"
  }] as const;
  const Feature: React.FC<{
    title: string;
    desc: string;
  }> = ({
    title,
    desc
  }) => <SortableContainer dndKitId="cfdb4507-c78a-4c39-abee-33070314d35d" containerType="regular" prevTag="div" className="group relative rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md" data-magicpath-id="0" data-magicpath-path="DendoraLandingPage.tsx">
      <SortableContainer dndKitId="f314b49c-c427-4357-a8da-b8491c0502e8" containerType="regular" prevTag="div" className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white" data-magicpath-id="1" data-magicpath-path="DendoraLandingPage.tsx">
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
  }) => <SortableContainer dndKitId="d6ece625-61aa-490b-bd0d-f59c3a34e865" containerType="regular" prevTag="div" className="flex flex-col items-start" data-magicpath-id="6" data-magicpath-path="DendoraLandingPage.tsx">
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
  return <SortableContainer dndKitId="925609f2-97aa-45cd-9c22-64e9445a3314" containerType="regular" prevTag="div" className="min-h-dvh w-full bg-white text-black antialiased" data-magicpath-id="11" data-magicpath-path="DendoraLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="4853f0fc-ab14-489c-aacd-ef770cde2692" containerType="regular" prevTag="header" className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur" data-magicpath-id="12" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="01ed5998-ee8c-43a9-92eb-181d31d2ae6a" containerType="regular" prevTag="div" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" data-magicpath-id="13" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="960f2714-4a29-4164-9f3c-da2082da0fdd" containerType="regular" prevTag="button" onClick={() => scrollTo('home')} className="group flex items-center gap-3" aria-label="Dendora home" data-magicpath-id="14" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="6bf2e0fa-9e6c-4cd8-b64d-856229242154" containerType="regular" prevTag="div" className="relative h-8 w-8" data-magicpath-id="15" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="16" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-6 w-6 rounded-lg bg-white" data-magicpath-id="17" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-6 w-3 rounded-r-lg bg-black" data-magicpath-id="18" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="85cd1c9e-7f33-4c91-87c7-a2b954781a3a" containerType="regular" prevTag="div" className="flex flex-col items-start text-left" data-magicpath-id="19" data-magicpath-path="DendoraLandingPage.tsx">
              <span className="text-sm font-semibold tracking-wide" data-magicpath-id="20" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/60" data-magicpath-id="21" data-magicpath-path="DendoraLandingPage.tsx">Software Development</span>
            </SortableContainer>
          </SortableContainer>

          {/* Desktop nav */}
          <SortableContainer dndKitId="fa3b9b9f-5b65-439d-8463-eb5adfb27d39" containerType="collection" prevTag="nav" className="hidden items-center gap-6 md:flex" data-magicpath-id="22" data-magicpath-path="DendoraLandingPage.tsx">
            {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-black/70 transition hover:text-black" data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="24" data-magicpath-path="DendoraLandingPage.tsx">{n.label}</span>
              </button>)}
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="25" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="26" data-magicpath-path="DendoraLandingPage.tsx" />
              <span data-magicpath-id="27" data-magicpath-path="DendoraLandingPage.tsx">Contact</span>
            </a>
          </SortableContainer>

          {/* Mobile menu button */}
          <SortableContainer dndKitId="2848dc25-5a80-43b3-a91f-1ab4d147c7d7" containerType="regular" prevTag="button" className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} data-magicpath-id="28" data-magicpath-path="DendoraLandingPage.tsx">
            {menuOpen ? <X className="h-5 w-5" data-magicpath-id="29" data-magicpath-path="DendoraLandingPage.tsx" /> : <Menu className="h-5 w-5" data-magicpath-id="30" data-magicpath-path="DendoraLandingPage.tsx" />}
          </SortableContainer>
        </SortableContainer>

        {/* Mobile nav */}
        {menuOpen && <SortableContainer dndKitId="2f6041c7-298b-4a2e-844b-80b5ba3a1480" containerType="regular" prevTag="div" className="border-t border-black/5 bg-white md:hidden" data-magicpath-id="31" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="0bda9a58-74e8-4dec-9c82-911418d93af2" containerType="regular" prevTag="nav" className="mx-auto max-w-6xl px-4 py-2" data-magicpath-id="32" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="3d16b263-fdbe-4d63-a4a3-3621f9b1bbb0" containerType="collection" prevTag="div" className="grid gap-1" data-magicpath-id="33" data-magicpath-path="DendoraLandingPage.tsx">
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
      <SortableContainer dndKitId="3f8ad510-6eff-4cf5-8129-5d450e2dcdec" containerType="regular" prevTag="section" id="home" className="relative" data-magicpath-id="39" data-magicpath-path="DendoraLandingPage.tsx">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(0,0,0,0.06),transparent_60%)]" data-magicpath-id="40" data-magicpath-path="DendoraLandingPage.tsx" />
        <SortableContainer dndKitId="e2d9b110-8876-4f1b-9451-b9b204545822" containerType="regular" prevTag="div" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24" data-magicpath-id="41" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="c38777c9-b75d-42fa-9396-1576401d095a" containerType="regular" prevTag="div" className="flex flex-col justify-center" data-magicpath-id="42" data-magicpath-path="DendoraLandingPage.tsx">
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

            <SortableContainer dndKitId="42ad777f-f26f-47ae-8e3a-917afb0c107c" containerType="regular" prevTag="div" className="mt-8 flex flex-wrap items-center gap-3" data-magicpath-id="47" data-magicpath-path="DendoraLandingPage.tsx">
              <CTAButton onClick={() => scrollTo('contact')} data-magicpath-id="48" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="49" data-magicpath-path="DendoraLandingPage.tsx">Start a project</span>
                <ArrowRight className="h-4 w-4" data-magicpath-id="50" data-magicpath-path="DendoraLandingPage.tsx" />
              </CTAButton>
              <OutlineButton onClick={() => scrollTo('work')} data-magicpath-id="51" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="52" data-magicpath-path="DendoraLandingPage.tsx">See our work</span>
              </OutlineButton>
            </SortableContainer>

            <SortableContainer dndKitId="538a557c-3cdb-46d9-8ca7-384213c564b9" containerType="regular" prevTag="div" className="mt-10 grid grid-cols-3 gap-6 md:max-w-md" data-magicpath-id="53" data-magicpath-path="DendoraLandingPage.tsx">
              <Stat value="10+ yrs" label="Experience" data-magicpath-id="54" data-magicpath-path="DendoraLandingPage.tsx" />
              <Stat value="100%" label="Remote-first" data-magicpath-id="55" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="94f5a519-683d-498a-b954-7312a4281830" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="56" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Brand card */}
            <SortableContainer dndKitId="f12a200f-47d0-4e85-a520-3a0ac144993a" containerType="regular" prevTag="motion.div" initial={prefersReducedMotion ? undefined : {
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
              <SortableContainer dndKitId="7c173dbe-a371-4ada-b585-9bfdb3548154" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="58" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="8c856d05-3c4c-4243-8705-a2e9e7441128" containerType="regular" prevTag="div" className="relative h-14 w-14" data-magicpath-id="59" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="absolute inset-0 rounded-2xl bg-black" data-magicpath-id="60" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute left-1 top-1 h-10 w-10 rounded-xl bg-white" data-magicpath-id="61" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute right-1 top-1 h-10 w-5 rounded-r-xl bg-black" data-magicpath-id="62" data-magicpath-path="DendoraLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="4257f280-bba9-488e-af30-1ba90158adaa" containerType="regular" prevTag="div" data-magicpath-id="63" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="text-xl font-semibold tracking-wide" data-magicpath-id="64" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-black/60" data-magicpath-id="65" data-magicpath-path="DendoraLandingPage.tsx">Software Development</div>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="4979013c-fde1-451c-ada1-82578c75b7e8" containerType="regular" prevTag="div" className="mt-6 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-4" data-magicpath-id="66" data-magicpath-path="DendoraLandingPage.tsx">
                <p className="text-sm text-black/70" data-magicpath-id="67" data-magicpath-path="DendoraLandingPage.tsx">
                  <span data-magicpath-id="68" data-magicpath-path="DendoraLandingPage.tsx">Focused, high-quality engineering with an eye for design. We partner with startups and teams to launch and grow products.</span>
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Services */}
      <SortableContainer dndKitId="d1a818ea-af24-46ac-a419-1920bf47cbc9" containerType="regular" prevTag="section" id="services" className="border-t border-black/5 bg-white" data-magicpath-id="69" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="96e58d21-c30a-476e-920e-6955fe0a8496" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="70" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="5fd98cd8-58f6-463b-982d-deca57ed0243" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="71" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="72" data-magicpath-path="DendoraLandingPage.tsx">What we do</h2>
            <span className="text-sm text-black/60" data-magicpath-id="73" data-magicpath-path="DendoraLandingPage.tsx">Lean, reliable, shipped.</span>
          </SortableContainer>

          <SortableContainer dndKitId="1b70f926-f444-418b-b568-fbb0eca381c8" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-3" data-magicpath-id="74" data-magicpath-path="DendoraLandingPage.tsx">
            <Feature title="Product Strategy" desc="Scope, roadmap, and validation. We make sure we build the right thing before building it right." data-magicpath-id="75" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Design & UX" desc="Minimal, accessible interfaces that focus on clarity and speed. Prototypes to production-ready design systems." data-magicpath-id="76" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Full‑stack Development" desc="Modern web apps with React, TypeScript, and cloud-native backends. Performance and maintainability first." data-magicpath-id="77" data-magicpath-path="DendoraLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Work */}
      <SortableContainer dndKitId="d364f8de-e8db-4c19-ba49-05698e564ebc" containerType="regular" prevTag="section" id="work" className="border-t border-black/5" data-magicpath-id="78" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="8e15ad27-eea4-436d-a92e-53b77ca0866e" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="79" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="32e1b79d-beb4-4583-b76d-d9e3bbfb8d83" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="80" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="81" data-magicpath-path="DendoraLandingPage.tsx">Selected work</h2>
            <span className="text-sm text-black/60" data-magicpath-id="82" data-magicpath-path="DendoraLandingPage.tsx">Recent highlights</span>
          </SortableContainer>

          <SortableContainer dndKitId="b3dbafc4-5193-40f0-8fe8-bdc9f4919a7f" containerType="collection" prevTag="div" className="grid gap-6 md:grid-cols-3" data-magicpath-id="83" data-magicpath-path="DendoraLandingPage.tsx">
            {[{
            name: 'SaaS Dashboard',
            desc: 'Composable analytics with real‑time updates and role‑based access.',
            mpid: "4fd546db-9e16-4ed7-af91-948b8522a4dc"
          }, {
            name: 'E‑commerce Revamp',
            desc: 'Headless storefront with lightning‑fast navigation and checkout.',
            mpid: "b7bc8678-f473-4b9b-aee7-8a5b787fdcb7"
          }, {
            name: 'Mobile Companion',
            desc: 'Cross‑platform app for field operations with offline sync.',
            mpid: "835ef208-3cd0-40c7-bfcd-f9794e653f1c"
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
      <SortableContainer dndKitId="ac65a3de-acc4-41cd-9183-b203b94c45a0" containerType="regular" prevTag="section" id="about" className="border-t border-black/5 bg-white" data-magicpath-id="94" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="c958f022-c59e-43a4-b18c-8344cba5c1bc" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="95" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="f6c01604-1c96-40b6-910c-f491f38365e0" containerType="regular" prevTag="div" className="grid items-center gap-10 md:grid-cols-2" data-magicpath-id="96" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="64fbf7ff-b8a7-4423-bd23-e7b7479ffed2" containerType="regular" prevTag="div" data-magicpath-id="97" data-magicpath-path="DendoraLandingPage.tsx">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="98" data-magicpath-path="DendoraLandingPage.tsx">Built with intention</h2>
              <p className="mt-4 text-black/65" data-magicpath-id="99" data-magicpath-path="DendoraLandingPage.tsx">
                <span data-magicpath-id="100" data-magicpath-path="DendoraLandingPage.tsx">We’re a small team that prefers fewer meetings and more results. Clear scopes, pragmatic stacks, and steady iteration.</span>
              </p>
              <SortableContainer dndKitId="b579a9f0-3af0-4e50-8caf-63da39a72a5d" containerType="regular" prevTag="ul" className="mt-6 grid gap-2 text-sm text-black/70" data-magicpath-id="101" data-magicpath-path="DendoraLandingPage.tsx">
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
              <SortableContainer dndKitId="0e66411f-88c1-4691-b74e-eced4615855d" containerType="regular" prevTag="div" className="mt-7 flex gap-3" data-magicpath-id="111" data-magicpath-path="DendoraLandingPage.tsx">
                <OutlineButton onClick={() => scrollTo('contact')} data-magicpath-id="112" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="113" data-magicpath-path="DendoraLandingPage.tsx">Let’s talk</span></OutlineButton>
                <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="114" data-magicpath-path="DendoraLandingPage.tsx">
                  <Globe className="h-4 w-4" data-magicpath-id="115" data-magicpath-path="DendoraLandingPage.tsx" />
                  <span data-magicpath-id="116" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
                </a>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="8f42b162-74cf-42bc-af9f-5d079385bd44" containerType="regular" prevTag="div" className="relative" data-magicpath-id="117" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent)]" data-magicpath-id="118" data-magicpath-path="DendoraLandingPage.tsx" />
              <SortableContainer dndKitId="8edacf9f-e9f2-427f-99a8-85eddcd0d390" containerType="regular" prevTag="div" className="overflow-hidden rounded-2xl border border-black/10 bg-white p-6" data-magicpath-id="119" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="f44f18d1-313a-4ba9-8d57-79fb05995bce" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-2" data-magicpath-id="120" data-magicpath-path="DendoraLandingPage.tsx">
                  <SortableContainer dndKitId="2ac8d24a-f784-45e3-a86b-a305f14d3eaf" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="121" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="122" data-magicpath-path="DendoraLandingPage.tsx">Stack</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="123" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="124" data-magicpath-path="DendoraLandingPage.tsx">TypeScript, React, Node.js, Go, Kubernetes</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="3f85986d-5eb3-46c5-bc11-9a2f27639569" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="125" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="126" data-magicpath-path="DendoraLandingPage.tsx">Approach</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="127" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="128" data-magicpath-path="DendoraLandingPage.tsx">Ship small, iterate fast</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="e7ffc3e4-9e18-41b5-b534-63e7c78c55f5" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="129" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="130" data-magicpath-path="DendoraLandingPage.tsx">Principles</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="131" data-magicpath-path="DendoraLandingPage.tsx"><span data-magicpath-id="132" data-magicpath-path="DendoraLandingPage.tsx">Accessibility and performance</span></p>
                  </SortableContainer>
                  <SortableContainer dndKitId="b68dfd47-265d-40d2-bd41-39c968208850" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="133" data-magicpath-path="DendoraLandingPage.tsx">
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
      <SortableContainer dndKitId="f02a0039-f6d0-4d14-a386-1940c34b7a5e" containerType="regular" prevTag="section" id="contact" className="border-t border-black/5" data-magicpath-id="137" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="29deacde-67c5-4171-8d0a-5ec7d83ba457" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="138" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="4c38ff92-8cc0-4dab-9885-f1bd2d057d9f" containerType="regular" prevTag="div" className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 md:p-8" data-magicpath-id="139" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="140" data-magicpath-path="DendoraLandingPage.tsx">Let’s build something minimal</h2>
            <p className="mt-2 text-sm text-black/65" data-magicpath-id="141" data-magicpath-path="DendoraLandingPage.tsx">
              <span data-magicpath-id="142" data-magicpath-path="DendoraLandingPage.tsx">We prefer simple emails. Reach us directly — no forms.</span>
            </p>

            <SortableContainer dndKitId="bcc64f25-2cfa-4363-92f3-7aa4b348fec6" containerType="regular" prevTag="div" className="mt-6 flex flex-wrap items-center gap-3" data-magicpath-id="143" data-magicpath-path="DendoraLandingPage.tsx">
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
      <SortableContainer dndKitId="eaf1c940-3866-41ca-bbb2-68fdf06b4c0c" containerType="regular" prevTag="footer" className="border-t border-black/5" data-magicpath-id="153" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="183c8735-d11f-48ce-951d-9fa9d9180b2b" containerType="regular" prevTag="div" className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-black/60 md:flex-row" data-magicpath-id="154" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="7d9f2f74-5ec9-4da9-8927-ed30092d559c" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="155" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="1041640f-ffcd-4c0f-b8be-4f10e0d54577" containerType="regular" prevTag="div" className="relative h-7 w-7" data-magicpath-id="156" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="157" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-5 w-5 rounded-md bg-white" data-magicpath-id="158" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-5 w-2.5 rounded-r-md bg-black" data-magicpath-id="159" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <span data-magicpath-id="160" data-magicpath-path="DendoraLandingPage.tsx">© {new Date().getFullYear()} Dendora. All rights reserved.</span>
          </SortableContainer>
          <SortableContainer dndKitId="8d0577af-3caa-489c-9062-26d0a3bbfbb2" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="161" data-magicpath-path="DendoraLandingPage.tsx">
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