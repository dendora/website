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
    mpid: "ebf0149a-a8ff-4f5a-bb60-0f951d05c0f9"
  }, {
    id: 'services',
    label: 'Services',
    mpid: "efcfbfe0-475e-4894-a22f-04cba3d0980e"
  }, {
    id: 'work',
    label: 'Work',
    mpid: "c0de7a5c-84c5-4047-97ad-c56f68033f4a"
  }, {
    id: 'about',
    label: 'About',
    mpid: "9f9cc2ef-b2c2-4475-bc0b-f9d44d497d13"
  }, {
    id: 'contact',
    label: 'Contact',
    mpid: "74178ac3-1076-4382-bcbe-1afc86c75c6d"
  }] as const;
  const Feature: React.FC<{
    title: string;
    desc: string;
  }> = ({
    title,
    desc
  }) => <SortableContainer dndKitId="fb66c922-f6b5-43f7-a0f0-ae291e4cae65" containerType="regular" prevTag="div" className="group relative rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md" data-magicpath-id="0" data-magicpath-path="DendoraLandingPage.tsx">
      <SortableContainer dndKitId="c75cfdaf-5359-4eed-86cf-f15dd851d290" containerType="regular" prevTag="div" className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white" data-magicpath-id="1" data-magicpath-path="DendoraLandingPage.tsx">
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
  }) => <SortableContainer dndKitId="12dd50e5-74ff-403e-9093-71c73c19ab11" containerType="regular" prevTag="div" className="flex flex-col items-start" data-magicpath-id="6" data-magicpath-path="DendoraLandingPage.tsx">
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
  return <SortableContainer dndKitId="16152a39-f663-47cd-a697-d09987160047" containerType="regular" prevTag="div" className="min-h-dvh w-full bg-white text-black antialiased" data-magicpath-id="11" data-magicpath-path="DendoraLandingPage.tsx">
      {/* Header */}
      <SortableContainer dndKitId="05008045-5ef2-429f-ace4-55dd28f1bc89" containerType="regular" prevTag="header" className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur" data-magicpath-id="12" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="614f952d-da0e-440f-8baf-7f6998ebe156" containerType="regular" prevTag="div" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" data-magicpath-id="13" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="d150147b-52b8-41ff-a91b-1b9798d50d2b" containerType="regular" prevTag="button" onClick={() => scrollTo('home')} className="group flex items-center gap-3" aria-label="Dendora home" data-magicpath-id="14" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Logo */}
            <SortableContainer dndKitId="7a30dd21-fbb0-4fd9-b7be-2debf56e7ba4" containerType="regular" prevTag="div" className="relative h-8 w-8" data-magicpath-id="15" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="16" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-6 w-6 rounded-lg bg-white" data-magicpath-id="17" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-6 w-3 rounded-r-lg bg-black" data-magicpath-id="18" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="8284b556-f285-4164-b95b-85802bb57f6d" containerType="regular" prevTag="div" className="flex flex-col items-start text-left" data-magicpath-id="19" data-magicpath-path="DendoraLandingPage.tsx">
              <span className="text-sm font-semibold tracking-wide" data-magicpath-id="20" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/60" data-magicpath-id="21" data-magicpath-path="DendoraLandingPage.tsx">Software Development</span>
            </SortableContainer>
          </SortableContainer>

          {/* Desktop nav */}
          <SortableContainer dndKitId="b81b355a-0d16-4ca7-9ea9-87b2dd342f5f" containerType="collection" prevTag="nav" className="hidden items-center gap-6 md:flex" data-magicpath-id="22" data-magicpath-path="DendoraLandingPage.tsx">
            {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-black/70 transition hover:text-black" data-magicpath-uuid={(n as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="23" data-magicpath-path="DendoraLandingPage.tsx">
                {n.label}
              </button>)}
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="24" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="25" data-magicpath-path="DendoraLandingPage.tsx" />
              Contact
            </a>
          </SortableContainer>

          {/* Mobile menu button */}
          <SortableContainer dndKitId="029135c8-b443-4213-82f3-c317249c6dc5" containerType="regular" prevTag="button" className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} data-magicpath-id="26" data-magicpath-path="DendoraLandingPage.tsx">
            {menuOpen ? <X className="h-5 w-5" data-magicpath-id="27" data-magicpath-path="DendoraLandingPage.tsx" /> : <Menu className="h-5 w-5" data-magicpath-id="28" data-magicpath-path="DendoraLandingPage.tsx" />}
          </SortableContainer>
        </SortableContainer>

        {/* Mobile nav */}
        {menuOpen && <SortableContainer dndKitId="4a2aea4a-591c-4ff3-9d16-e41a6b955e7c" containerType="regular" prevTag="div" className="border-t border-black/5 bg-white md:hidden" data-magicpath-id="29" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="2c408790-cafb-4526-ab49-93458769055d" containerType="regular" prevTag="nav" className="mx-auto max-w-6xl px-4 py-2" data-magicpath-id="30" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="3fb4664a-3cda-44d9-a116-e5b60d341e06" containerType="collection" prevTag="div" className="grid gap-1" data-magicpath-id="31" data-magicpath-path="DendoraLandingPage.tsx">
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
      <SortableContainer dndKitId="c6921663-4969-4b31-9a56-97ecc5ea9c80" containerType="regular" prevTag="section" id="home" className="relative" data-magicpath-id="35" data-magicpath-path="DendoraLandingPage.tsx">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(0,0,0,0.06),transparent_60%)]" data-magicpath-id="36" data-magicpath-path="DendoraLandingPage.tsx" />
        <SortableContainer dndKitId="081707e5-fc48-477d-b794-545a445c23d8" containerType="regular" prevTag="div" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24" data-magicpath-id="37" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="336c5985-d504-46d9-abf0-ed64171dfe9e" containerType="regular" prevTag="div" className="flex flex-col justify-center" data-magicpath-id="38" data-magicpath-path="DendoraLandingPage.tsx">
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

            <SortableContainer dndKitId="95bebfc8-8fc9-4c6f-8664-55b0595fa200" containerType="regular" prevTag="div" className="mt-8 flex flex-wrap items-center gap-3" data-magicpath-id="41" data-magicpath-path="DendoraLandingPage.tsx">
              <CTAButton onClick={() => scrollTo('contact')} data-magicpath-id="42" data-magicpath-path="DendoraLandingPage.tsx">
                Start a project
                <ArrowRight className="h-4 w-4" data-magicpath-id="43" data-magicpath-path="DendoraLandingPage.tsx" />
              </CTAButton>
              <OutlineButton onClick={() => scrollTo('work')} data-magicpath-id="44" data-magicpath-path="DendoraLandingPage.tsx">
                See our work
              </OutlineButton>
            </SortableContainer>

            <SortableContainer dndKitId="3782d5ab-a608-46df-bc3e-0f3fedc9db20" containerType="regular" prevTag="div" className="mt-10 grid grid-cols-3 gap-6 md:max-w-md" data-magicpath-id="45" data-magicpath-path="DendoraLandingPage.tsx">
              <Stat value="10+ yrs" label="Experience" data-magicpath-id="46" data-magicpath-path="DendoraLandingPage.tsx" />
              <Stat value="100%" label="Remote-first" data-magicpath-id="47" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="667c3218-33bd-41e3-bf60-7dccdfe5e847" containerType="regular" prevTag="div" className="flex items-center justify-center" data-magicpath-id="48" data-magicpath-path="DendoraLandingPage.tsx">
            {/* Brand card */}
            <SortableContainer dndKitId="00ddd76a-726c-4367-8ccf-87cf2b86f9cd" containerType="regular" prevTag="motion.div" initial={prefersReducedMotion ? undefined : {
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
          }} className="relative w-full max-w-md overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm" aria-label="Dendora brand" data-magicpath-id="49" data-magicpath-path="DendoraLandingPage.tsx">
              <SortableContainer dndKitId="7a9e916a-496a-4c5d-bb8e-99dc91fd8a04" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="50" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="880d6e4a-1147-478f-8099-859d70e6dce8" containerType="regular" prevTag="div" className="relative h-14 w-14" data-magicpath-id="51" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="absolute inset-0 rounded-2xl bg-black" data-magicpath-id="52" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute left-1 top-1 h-10 w-10 rounded-xl bg-white" data-magicpath-id="53" data-magicpath-path="DendoraLandingPage.tsx" />
                  <div className="absolute right-1 top-1 h-10 w-5 rounded-r-xl bg-black" data-magicpath-id="54" data-magicpath-path="DendoraLandingPage.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="38b3658b-04e2-420f-98ad-66a365e361de" containerType="regular" prevTag="div" data-magicpath-id="55" data-magicpath-path="DendoraLandingPage.tsx">
                  <div className="text-xl font-semibold tracking-wide" data-magicpath-id="56" data-magicpath-path="DendoraLandingPage.tsx">DENDORA</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-black/60" data-magicpath-id="57" data-magicpath-path="DendoraLandingPage.tsx">Software Development</div>
                </SortableContainer>
              </SortableContainer>
              <SortableContainer dndKitId="e34fff7a-9276-414b-836a-96b28c454976" containerType="regular" prevTag="div" className="mt-6 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-4" data-magicpath-id="58" data-magicpath-path="DendoraLandingPage.tsx">
                <p className="text-sm text-black/70" data-magicpath-id="59" data-magicpath-path="DendoraLandingPage.tsx">
                  Focused, high-quality engineering with an eye for design. We partner with startups and teams to launch and grow products.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Services */}
      <SortableContainer dndKitId="91b35279-9c38-4b93-ade5-e13ccc619c6a" containerType="regular" prevTag="section" id="services" className="border-t border-black/5 bg-white" data-magicpath-id="60" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="1c0d6236-f4c3-49fc-a096-1929a51638bb" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="61" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="d77ddadb-a73a-4758-8ed7-9d7fa1f28969" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="62" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="63" data-magicpath-path="DendoraLandingPage.tsx">What we do</h2>
            <span className="text-sm text-black/60" data-magicpath-id="64" data-magicpath-path="DendoraLandingPage.tsx">Lean, reliable, shipped.</span>
          </SortableContainer>

          <SortableContainer dndKitId="65999713-9a79-47ae-ae02-4cc84947cc35" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-3" data-magicpath-id="65" data-magicpath-path="DendoraLandingPage.tsx">
            <Feature title="Product Strategy" desc="Scope, roadmap, and validation. We make sure we build the right thing before building it right." data-magicpath-id="66" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Design & UX" desc="Minimal, accessible interfaces that focus on clarity and speed. Prototypes to production-ready design systems." data-magicpath-id="67" data-magicpath-path="DendoraLandingPage.tsx" />
            <Feature title="Full‑stack Development" desc="Modern web apps with React, TypeScript, and cloud-native backends. Performance and maintainability first." data-magicpath-id="68" data-magicpath-path="DendoraLandingPage.tsx" />
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Work */}
      <SortableContainer dndKitId="64588d23-27c2-411c-9da3-bda64c931c8a" containerType="regular" prevTag="section" id="work" className="border-t border-black/5" data-magicpath-id="69" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="e08baaa4-a690-4f5e-90dd-8d8f75940a85" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="70" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="5da8fde8-d5b8-48b9-ad08-80a3d8b7d3cc" containerType="regular" prevTag="div" className="mb-8 flex items-end justify-between" data-magicpath-id="71" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="72" data-magicpath-path="DendoraLandingPage.tsx">Selected work</h2>
            <span className="text-sm text-black/60" data-magicpath-id="73" data-magicpath-path="DendoraLandingPage.tsx">Recent highlights</span>
          </SortableContainer>

          <SortableContainer dndKitId="4409b459-07d6-41b6-8dc6-33a095c5e30b" containerType="collection" prevTag="div" className="grid gap-6 md:grid-cols-3" data-magicpath-id="74" data-magicpath-path="DendoraLandingPage.tsx">
            {[{
            name: 'SaaS Dashboard',
            desc: 'Composable analytics with real‑time updates and role‑based access.',
            mpid: "7ba5ff13-2038-4d02-b235-024d671d5b35"
          }, {
            name: 'E‑commerce Revamp',
            desc: 'Headless storefront with lightning‑fast navigation and checkout.',
            mpid: "ccb73494-292b-4946-963c-f56a61878b0f"
          }, {
            name: 'Mobile Companion',
            desc: 'Cross‑platform app for field operations with offline sync.',
            mpid: "09d2e06d-14d2-42f4-856c-d0fa6837bf95"
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
          }} className="group relative overflow-hidden rounded-xl border border-black/10 bg-white" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="DendoraLandingPage.tsx">
                <div className="aspect-[16/10] bg-[linear-gradient(120deg,rgba(0,0,0,0.06),transparent)]" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="DendoraLandingPage.tsx" />
                <div className="p-4" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="77" data-magicpath-path="DendoraLandingPage.tsx">
                  <h3 className="text-base font-semibold" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="78" data-magicpath-path="DendoraLandingPage.tsx">{p.name}</h3>
                  <p className="mt-1 text-sm text-black/60" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-field="desc:unknown" data-magicpath-id="79" data-magicpath-path="DendoraLandingPage.tsx">{p.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm text-black/70" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="DendoraLandingPage.tsx">
                    <span data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="81" data-magicpath-path="DendoraLandingPage.tsx">Details</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" data-magicpath-uuid={(p as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="DendoraLandingPage.tsx" />
                  </div>
                </div>
              </motion.article>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* About */}
      <SortableContainer dndKitId="9c2cb5e0-100d-414f-89e9-048762c13f69" containerType="regular" prevTag="section" id="about" className="border-t border-black/5 bg-white" data-magicpath-id="83" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="8e6a11b4-13ef-42ce-a41e-ce54202351b8" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="84" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="6fbb684c-c140-4f23-8774-4bbfe8e71b35" containerType="regular" prevTag="div" className="grid items-center gap-10 md:grid-cols-2" data-magicpath-id="85" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="9d41fda8-ca09-456a-b78a-19e780ce1dd9" containerType="regular" prevTag="div" data-magicpath-id="86" data-magicpath-path="DendoraLandingPage.tsx">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="87" data-magicpath-path="DendoraLandingPage.tsx">Built with intention</h2>
              <p className="mt-4 text-black/65" data-magicpath-id="88" data-magicpath-path="DendoraLandingPage.tsx">
                We’re a small team that prefers fewer meetings and more results. Clear scopes, pragmatic stacks, and steady iteration.
              </p>
              <SortableContainer dndKitId="bdc25631-f7ed-4841-994d-c19d948a9fdf" containerType="regular" prevTag="ul" className="mt-6 grid gap-2 text-sm text-black/70" data-magicpath-id="89" data-magicpath-path="DendoraLandingPage.tsx">
                <li className="flex items-center gap-2" data-magicpath-id="90" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="91" data-magicpath-path="DendoraLandingPage.tsx" /> Senior hands‑on engineering
                </li>
                <li className="flex items-center gap-2" data-magicpath-id="92" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="93" data-magicpath-path="DendoraLandingPage.tsx" /> Transparent estimates and delivery
                </li>
                <li className="flex items-center gap-2" data-magicpath-id="94" data-magicpath-path="DendoraLandingPage.tsx">
                  <CheckCircle2 className="h-4 w-4" data-magicpath-id="95" data-magicpath-path="DendoraLandingPage.tsx" /> Long‑term maintainability
                </li>
              </SortableContainer>
              <SortableContainer dndKitId="cfd802de-feff-4776-b606-91e22199b8e1" containerType="regular" prevTag="div" className="mt-7 flex gap-3" data-magicpath-id="96" data-magicpath-path="DendoraLandingPage.tsx">
                <OutlineButton onClick={() => scrollTo('contact')} data-magicpath-id="97" data-magicpath-path="DendoraLandingPage.tsx">Let’s talk</OutlineButton>
                <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="98" data-magicpath-path="DendoraLandingPage.tsx">
                  <Globe className="h-4 w-4" data-magicpath-id="99" data-magicpath-path="DendoraLandingPage.tsx" />
                  dendora.hu
                </a>
              </SortableContainer>
            </SortableContainer>
            <SortableContainer dndKitId="aa8deaa9-3d7e-43a9-b43a-feaf6b1a98c1" containerType="regular" prevTag="div" className="relative" data-magicpath-id="100" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent)]" data-magicpath-id="101" data-magicpath-path="DendoraLandingPage.tsx" />
              <SortableContainer dndKitId="3c300cd6-980b-4053-b436-d8f0d582ae19" containerType="regular" prevTag="div" className="overflow-hidden rounded-2xl border border-black/10 bg-white p-6" data-magicpath-id="102" data-magicpath-path="DendoraLandingPage.tsx">
                <SortableContainer dndKitId="258f8e0c-2fd4-44c1-877c-60d0b294ede4" containerType="regular" prevTag="div" className="grid gap-4 md:grid-cols-2" data-magicpath-id="103" data-magicpath-path="DendoraLandingPage.tsx">
                  <SortableContainer dndKitId="c8813b69-9cfa-49a0-a866-366a2c368f8a" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="104" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="105" data-magicpath-path="DendoraLandingPage.tsx">Stack</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="106" data-magicpath-path="DendoraLandingPage.tsx">TypeScript, React, Node.js, Go, Kubernetes</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="78064faa-7a97-4dcf-91a4-53343a2380cd" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="107" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="108" data-magicpath-path="DendoraLandingPage.tsx">Approach</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="109" data-magicpath-path="DendoraLandingPage.tsx">Ship small, iterate fast</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="f7b32546-5771-4ae8-a0e3-8559df80eb53" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="110" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="111" data-magicpath-path="DendoraLandingPage.tsx">Principles</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="112" data-magicpath-path="DendoraLandingPage.tsx">Accessibility and performance</p>
                  </SortableContainer>
                  <SortableContainer dndKitId="f54531c4-f5ae-44b4-8907-f1af56f696f6" containerType="regular" prevTag="div" className="rounded-xl border border-black/10 p-4" data-magicpath-id="113" data-magicpath-path="DendoraLandingPage.tsx">
                    <div className="text-sm font-semibold" data-magicpath-id="114" data-magicpath-path="DendoraLandingPage.tsx">Engagement</div>
                    <p className="mt-1 text-sm text-black/60" data-magicpath-id="115" data-magicpath-path="DendoraLandingPage.tsx">Project or retainer</p>
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Contact */}
      <SortableContainer dndKitId="d06c0717-3acc-45fa-8f4f-865c6dc42844" containerType="regular" prevTag="section" id="contact" className="border-t border-black/5" data-magicpath-id="116" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="4d19dd56-bd9c-407e-9abf-02fb62d30fc4" containerType="regular" prevTag="div" className="mx-auto max-w-6xl px-4 py-16 md:py-20" data-magicpath-id="117" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="9f2f303c-118d-4e06-8a57-aa88ea492f3a" containerType="regular" prevTag="div" className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 md:p-8" data-magicpath-id="118" data-magicpath-path="DendoraLandingPage.tsx">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl" data-magicpath-id="119" data-magicpath-path="DendoraLandingPage.tsx">Let’s build something minimal</h2>
            <p className="mt-2 text-sm text-black/65" data-magicpath-id="120" data-magicpath-path="DendoraLandingPage.tsx">
              We prefer simple emails. Reach us directly — no forms.
            </p>

            <SortableContainer dndKitId="98d55723-081f-4cdf-800a-5586e1baa1cb" containerType="regular" prevTag="div" className="mt-6 flex flex-wrap items-center gap-3" data-magicpath-id="121" data-magicpath-path="DendoraLandingPage.tsx">
              <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85" data-magicpath-id="122" data-magicpath-path="DendoraLandingPage.tsx">
                <Mail className="h-4 w-4" data-magicpath-id="123" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="124" data-magicpath-path="DendoraLandingPage.tsx">hello@dendora.hu</span>
              </a>
              <a href="tel:+3612345678" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="125" data-magicpath-path="DendoraLandingPage.tsx">
                <Phone className="h-4 w-4" data-magicpath-id="126" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="127" data-magicpath-path="DendoraLandingPage.tsx">+36 1 234 5678</span>
              </a>
              <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="128" data-magicpath-path="DendoraLandingPage.tsx">
                <Globe className="h-4 w-4" data-magicpath-id="129" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="130" data-magicpath-path="DendoraLandingPage.tsx">dendora.hu</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5" data-magicpath-id="131" data-magicpath-path="DendoraLandingPage.tsx">
                <Github className="h-4 w-4" data-magicpath-id="132" data-magicpath-path="DendoraLandingPage.tsx" />
                <span data-magicpath-id="133" data-magicpath-path="DendoraLandingPage.tsx">GitHub</span>
              </a>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Footer */}
      <SortableContainer dndKitId="0a9235a7-f9d8-4fe6-847c-9888b35bdf87" containerType="regular" prevTag="footer" className="border-t border-black/5" data-magicpath-id="134" data-magicpath-path="DendoraLandingPage.tsx">
        <SortableContainer dndKitId="4fcb5090-632e-4e36-b46a-13777d3ad80a" containerType="regular" prevTag="div" className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-black/60 md:flex-row" data-magicpath-id="135" data-magicpath-path="DendoraLandingPage.tsx">
          <SortableContainer dndKitId="425dc23d-5f14-41c8-b6c4-96b89364cbe7" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="136" data-magicpath-path="DendoraLandingPage.tsx">
            <SortableContainer dndKitId="2261f7ce-2adb-4979-9484-e1ec8de036ee" containerType="regular" prevTag="div" className="relative h-7 w-7" data-magicpath-id="137" data-magicpath-path="DendoraLandingPage.tsx">
              <div className="absolute inset-0 rounded-lg bg-black" data-magicpath-id="138" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute left-1 top-1 h-5 w-5 rounded-md bg-white" data-magicpath-id="139" data-magicpath-path="DendoraLandingPage.tsx" />
              <div className="absolute right-1 top-1 h-5 w-2.5 rounded-r-md bg-black" data-magicpath-id="140" data-magicpath-path="DendoraLandingPage.tsx" />
            </SortableContainer>
            <span data-magicpath-id="141" data-magicpath-path="DendoraLandingPage.tsx">© {new Date().getFullYear()} Dendora. All rights reserved.</span>
          </SortableContainer>
          <SortableContainer dndKitId="3754ca91-8a30-4f79-a3fd-c96577c56101" containerType="regular" prevTag="div" className="flex items-center gap-4" data-magicpath-id="142" data-magicpath-path="DendoraLandingPage.tsx">
            <a href="https://dendora.hu" className="inline-flex items-center gap-1 hover:text-black" data-magicpath-id="143" data-magicpath-path="DendoraLandingPage.tsx">
              <Globe className="h-4 w-4" data-magicpath-id="144" data-magicpath-path="DendoraLandingPage.tsx" />
              dendora.hu
            </a>
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-1 hover:text-black" data-magicpath-id="145" data-magicpath-path="DendoraLandingPage.tsx">
              <Mail className="h-4 w-4" data-magicpath-id="146" data-magicpath-path="DendoraLandingPage.tsx" />
              hello@dendora.hu
            </a>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};