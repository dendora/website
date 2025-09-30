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
    label: 'Home'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'work',
    label: 'Work'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'contact',
    label: 'Contact'
  }] as const;
  const Feature: React.FC<{
    title: string;
    desc: string;
  }> = ({
    title,
    desc
  }) => <div className="group relative rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
        <CheckCircle2 className="h-4 w-4" />
      </div>
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-black/60">{desc}</p>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-black/5 transition group-hover:ring-2" />
    </div>;
  const Stat: React.FC<{
    value: string;
    label: string;
  }> = ({
    value,
    label
  }) => <div className="flex flex-col items-start">
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className="text-sm text-black/60">{label}</div>
    </div>;
  const CTAButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    ...props
  }) => <button {...props} className={cn('inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30', className)}>
      {children}
    </button>;
  const OutlineButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className,
    children,
    ...props
  }) => <button {...props} className={cn('inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:border-black/20 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10', className)}>
      {children}
    </button>;

  // @return
  return <div className="min-h-dvh w-full bg-white text-black antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <button onClick={() => scrollTo('home')} className="group flex items-center gap-3" aria-label="Dendora home">
            {/* Logo */}
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-lg bg-black" />
              <div className="absolute left-1 top-1 h-6 w-6 rounded-lg bg-white" />
              <div className="absolute right-1 top-1 h-6 w-3 rounded-r-lg bg-black" />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-semibold tracking-wide">DENDORA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-black/60">Software Development</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-black/70 transition hover:text-black">
                <span>{n.label}</span>
              </button>)}
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/85">
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && <div className="border-t border-black/5 bg-white md:hidden">
            <nav className="mx-auto max-w-6xl px-4 py-2">
              <div className="grid gap-1">
                {navItems.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="w-full rounded-md px-2 py-2 text-left text-sm text-black/80 hover:bg-black/5">
                    <span>{n.label}</span>
                  </button>)}
                <a href="mailto:hello@dendora.hu" className="mt-1 inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm font-medium text-white">
                  <Mail className="h-4 w-4" />
                  <span>Contact</span>
                </a>
              </div>
            </nav>
          </div>}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,rgba(0,0,0,0.06),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <motion.h1 initial={prefersReducedMotion ? undefined : {
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
          }} className="text-4xl font-semibold tracking-tight md:text-5xl">
              <span>Minimal software, maximal impact.</span>
            </motion.h1>
            <p className="mt-4 text-base text-black/65 md:text-lg">
              <span>We build lean, dependable web and mobile products. Strategy, design, and engineering — delivered with clarity.</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTAButton onClick={() => scrollTo('contact')}>
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <OutlineButton onClick={() => scrollTo('work')}>
                <span>See our work</span>
              </OutlineButton>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 md:max-w-md">
              <Stat value="10+ yrs" label="Experience" />
              <Stat value="100%" label="Remote-first" />
            </div>
          </div>

          <div className="flex items-center justify-center">
            {/* Brand card */}
            <motion.div initial={prefersReducedMotion ? undefined : {
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
          }} className="relative w-full max-w-md overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm" aria-label="Dendora brand">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14">
                  <div className="absolute inset-0 rounded-2xl bg-black" />
                  <div className="absolute left-1 top-1 h-10 w-10 rounded-xl bg-white" />
                  <div className="absolute right-1 top-1 h-10 w-5 rounded-r-xl bg-black" />
                </div>
                <div>
                  <div className="text-xl font-semibold tracking-wide">DENDORA</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-black/60">Software Development</div>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-black/10 bg-gradient-to-br from-black/[0.02] to-transparent p-4">
                <p className="text-sm text-black/70">
                  <span>Focused, high-quality engineering with an eye for design. We partner with startups and teams to launch and grow products.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What we do</h2>
            <span className="text-sm text-black/60">Lean, reliable, shipped.</span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Feature title="Product Strategy" desc="Scope, roadmap, and validation. We make sure we build the right thing before building it right." />
            <Feature title="Design & UX" desc="Minimal, accessible interfaces that focus on clarity and speed. Prototypes to production-ready design systems." />
            <Feature title="Full‑stack Development" desc="Modern web apps with React, TypeScript, and cloud-native backends. Performance and maintainability first." />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Selected work</h2>
            <span className="text-sm text-black/60">Recent highlights</span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[{
            name: 'FoundryPulse',
            desc: 'Automating corporate workflows with robust orchestration and clear oversight.',
            brandBg: 'bg-[#0B0D10]',
            image: {
              src: '/foundrypulse-wordmark.png',
              alt: 'FoundryPulse wordmark with pouring ladle and pulse icon'
            }
          }, {
            name: 'SaaS Dashboard',
            desc: 'Composable analytics with real‑time updates and role‑based access.',
            brandBg: 'bg-[linear-gradient(120deg,rgba(0,0,0,0.06),transparent)]',
            image: undefined
          }, {
            name: 'E‑commerce Revamp',
            desc: 'Headless storefront with lightning‑fast navigation and checkout.',
            brandBg: 'bg-[linear-gradient(120deg,rgba(0,0,0,0.06),transparent)]',
            image: undefined
          }].map((p, i) => <motion.article key={p.name} initial={prefersReducedMotion ? undefined : {
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
          }} className="group relative overflow-hidden rounded-xl border border-black/10 bg-white">
                <div className={cn("aspect-[16/10]", p.brandBg)}>
                  <div className="flex h-full w-full items-center justify-between px-4 py-3">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white">
                      {p.image ? <picture>
                          <source srcSet={p.image.src} />
                          <img src={p.image.src} alt={p.image.alt} className="h-6 w-auto" />
                        </picture> : <div className="relative h-8 w-8" aria-hidden="true">
                          <div className="absolute inset-0 rounded-[6px] bg-white/10" />
                          <div className="absolute left-1 top-1 h-6 w-6 rounded-[5px] bg-white" />
                          <div className="absolute right-1 top-1 h-6 w-2.5 rounded-r-[5px] bg-black/80" />
                        </div>}
                      <span className="text-sm font-medium tracking-tight">{p.name}</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                      <span>Case study</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold"><span>{p.name}</span></h3>
                  <p className="mt-1 text-sm text-black/60"><span>{p.desc}</span></p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm text-black/70">
                    <span>Details</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.article>)}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Built with intention</h2>
              <p className="mt-4 text-black/65">
                <span>We’re a small team that prefers fewer meetings and more results. Clear scopes, pragmatic stacks, and steady iteration.</span>
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-black/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> <span>Senior hands‑on engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> <span>Transparent estimates and delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> <span>Long‑term maintainability</span>
                </li>
              </ul>
              <div className="mt-7 flex gap-3">
                <OutlineButton onClick={() => scrollTo('contact')}><span>Let’s talk</span></OutlineButton>
                <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5">
                  <Globe className="h-4 w-4" />
                  <span>dendora.hu</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent)]" />
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-black/10 p-4">
                    <div className="text-sm font-semibold">Stack</div>
                    <p className="mt-1 text-sm text-black/60"><span>TypeScript, React, Node.js, Go, Kubernetes</span></p>
                  </div>
                  <div className="rounded-xl border border-black/10 p-4">
                    <div className="text-sm font-semibold">Approach</div>
                    <p className="mt-1 text-sm text-black/60"><span>Ship small, iterate fast</span></p>
                  </div>
                  <div className="rounded-xl border border-black/10 p-4">
                    <div className="text-sm font-semibold">Principles</div>
                    <p className="mt-1 text-sm text-black/60"><span>Accessibility and performance</span></p>
                  </div>
                  <div className="rounded-xl border border-black/10 p-4">
                    <div className="text-sm font-semibold">Engagement</div>
                    <p className="mt-1 text-sm text-black/60"><span>Project or retainer</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Let’s build something minimal</h2>
            <p className="mt-2 text-sm text-black/65">
              <span>We prefer simple emails. Reach us directly — no forms.</span>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85">
                <Mail className="h-4 w-4" />
                <span>hello@dendora.hu</span>
              </a>
              <a href="https://dendora.hu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5">
                <Globe className="h-4 w-4" />
                <span>dendora.hu</span>
              </a>
              <a href="https://github.com/dendora" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black/5">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-black/60 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative h-7 w-7">
              <div className="absolute inset-0 rounded-lg bg-black" />
              <div className="absolute left-1 top-1 h-5 w-5 rounded-md bg-white" />
              <div className="absolute right-1 top-1 h-5 w-2.5 rounded-r-md bg-black" />
            </div>
            <span>© {new Date().getFullYear()} Dendora. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://dendora.hu" className="inline-flex items-center gap-1 hover:text-black">
              <Globe className="h-4 w-4" />
              <span>dendora.hu</span>
            </a>
            <a href="mailto:hello@dendora.hu" className="inline-flex items-center gap-1 hover:text-black">
              <Mail className="h-4 w-4" />
              <span>hello@dendora.hu</span>
            </a>
          </div>
        </div>
      </footer>
    </div>;
};