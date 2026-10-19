import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { HangingIdCard } from '@/components/lightswind/hanging-id-card'
import { ToggleTheme } from '@/components/lightswind/toggle-theme'
import { SlidingLogoMarquee, type SlidingLogoMarqueeItem } from '@/components/lightswind/sliding-logo-marquee'
import { content } from '@/data/content'
import { AboutSection } from '@/components/sections/about'
import { SkillsSection } from '@/components/sections/skills'
import { ExperienceSection } from '@/components/sections/experience'
import { ProjectsSection } from '@/components/sections/projects'
import { ExpertiseSection } from '@/components/sections/expertise'
import { EducationSection } from '@/components/sections/education'
import { CertificationsSection } from '@/components/sections/certifications'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import idCardPortraitLight from '@/assets/id-card-portrait-light.webp'
import idCardPortraitDark from '@/assets/id-card-portrait-dark.webp'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

// The theme toggle switches the "dark" class on <html>, so apply the saved
// (or system) theme once, before the first render.
try {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark')
  }
} catch {
  /* storage unavailable: keep the default theme */
}

type Basics = {
  fullName?: string
  headline?: string
  shortBio?: string
}

const basics = content as unknown as Basics
const NAME = basics.fullName ?? 'Ajith KS'
const ROLE = basics.headline ?? 'Automation Engineer'
const BIO =
  basics.shortBio ??
  'Building intelligent workflows that connect people, systems and data. 7+ years specializing in enterprise automation, workflow optimization and systems integration.'

const RESUME_URL = import.meta.env.BASE_URL + 'resume/Ajith_KS_Automation_Engineer_Resume.pdf'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const MARQUEE_ITEMS: SlidingLogoMarqueeItem[] = content.marquee.map((name) => ({
  id: name,
  content: (
    <span className="flex items-center justify-center whitespace-nowrap rounded-full border border-border bg-card/60 px-5 py-2 text-sm font-semibold tracking-wide text-muted-foreground backdrop-blur-sm shadow-sm transition-colors hover:border-primary hover:text-foreground">
      {name}
    </span>
  ),
}))

const buttonBase =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Smooth scrolling (skipped for people who prefer reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ anchors: true })
    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="fixed inset-x-4 top-4 z-50 mx-auto max-w-6xl">
        <nav
          aria-label="Main"
          className="flex items-center justify-between gap-4 rounded-full border border-border bg-background/80 px-6 py-3 backdrop-blur-md"
        >
          <a href="#hero" className="text-lg font-bold">
            {NAME}
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Resume
            </a>
            <ToggleTheme />
            <button
              type="button"
              className="rounded-full border border-border px-3 py-1.5 text-sm md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <ul
            id="mobile-menu"
            className="mt-2 flex flex-col gap-3 rounded-2xl border border-border bg-background/95 p-5 backdrop-blur-md md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block text-base" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-semibold text-primary"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        )}
      </header>

      <main>
        <div className="relative w-full">
          <div className="dot-pattern pointer-events-none absolute inset-0 z-0" aria-hidden />
          <section id="hero" className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-16 pt-32">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="font-mono text-sm font-semibold tracking-wider text-primary">
                Hello
              </p>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block">I'm {NAME}</span>
                <span className="shine-text block pb-1">{ROLE}</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{BIO}</p>

              <div className="flex flex-wrap gap-3">
                <a href="#projects" className={`${buttonBase} bg-primary text-primary-foreground hover:opacity-90`}>
                  View My Work
                </a>
                <a href="#contact" className={`${buttonBase} border border-border hover:bg-accent`}>
                  Get In Touch
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBase} border border-border hover:bg-accent`}
                >
                  Download Resume
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-border border border-muted-foreground/50 bg-background hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label="GitHub">
                  <GithubIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
                <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-border border border-muted-foreground/50 bg-background hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label="LinkedIn">
                  <LinkedinIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
                <a href={`mailto:${content.contact.email}`} className="flex h-9 w-9 items-center justify-center rounded-border border border-muted-foreground/50 bg-background hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label="Email">
                  <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>

            <div className="relative flex justify-center items-center py-4">
              {/* Subtle dotted background around component per Lightswind reference */}
              <div className="absolute inset-0 max-w-sm mx-auto opacity-15 dark:opacity-20 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:16px_16px] rounded-3xl pointer-events-none" />

              <HangingIdCard
                name={NAME}
                role={ROLE}
                ropeLength={80}
                ropeColor="#27272a"
                accentColor="#10b981"
                cardWidth="w-72 sm:w-80"
              >
                <div className="flex flex-col h-full bg-card w-full">
                  {/* Gradient Header with Dotted Texture */}
                  <div className="relative px-5 pt-8 pb-6 flex flex-col items-center bg-gradient-to-br from-emerald-600 via-primary to-teal-950 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                    {/* Overlapping Circular Portrait with Subtle Border and Active Indicator */}
                    <div className="mt-2 relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-emerald-400 via-primary to-teal-300 backdrop-blur-md shadow-2xl border border-white/50 overflow-hidden group">
                      {/* Light mode portrait */}
                      <img
                        src={idCardPortraitLight}
                        alt={`Portrait of ${NAME}`}
                        className="w-full h-full object-cover rounded-full filter contrast-105 dark:hidden"
                        loading="eager"
                      />
                      {/* Dark mode portrait */}
                      <img
                        src={idCardPortraitDark}
                        alt={`Portrait of ${NAME}`}
                        className="hidden w-full h-full object-cover rounded-full filter contrast-105 dark:block"
                        loading="eager"
                      />
                      <div className="absolute bottom-1 right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-2 border-white shadow-md" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col items-center text-center bg-card text-card-foreground flex-1 gap-3">
                    <div>
                      <h3 className="text-xl font-extrabold tracking-tight text-foreground">{NAME}</h3>
                      <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                        <span>{ROLE}</span>
                      </div>
                    </div>

                    <div className="w-full border-t border-border/60 my-0.5" />

                    {/* Two-Column Information Panel */}
                    <div className="grid grid-cols-2 gap-2.5 w-full text-left bg-muted/40 p-3 rounded-xl border border-border/50">
                      <div>
                        <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Specialty</span>
                        <span className="font-bold text-foreground text-xs">Process Automation</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Location</span>
                        <span className="font-bold text-foreground text-xs">Bangalore, India</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Experience</span>
                        <span className="font-bold text-foreground text-xs">7+ Years</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Focus</span>
                        <span className="font-bold text-foreground text-xs">Systems Integration</span>
                      </div>
                    </div>

                    {/* Barcode-Style Footer */}
                    <div className="flex flex-col items-center mt-1 w-full gap-1">
                      <div className="flex gap-[2.5px] items-end h-7 px-3 py-0.5 bg-white/90 dark:bg-black/40 rounded-lg border border-border/40 w-full justify-center">
                        {Array.from({ length: 36 }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-foreground rounded-[1px]"
                            style={{
                              width: i % 4 === 0 ? "3.5px" : i % 2 === 0 ? "2px" : "1px",
                              height: `${50 + Math.sin(i * 1.4) * 45}%`,
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between w-full px-1 text-[10px]">
                        <span className="font-mono font-bold tracking-widest text-primary">AJITH KS</span>
                        <span className="text-muted-foreground font-semibold text-[9px] uppercase tracking-wider">PORTFOLIO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </HangingIdCard>
            </div>
          </div>
        </section>

        {/* Tech Marquee Strip */}
        <div className="relative z-10 border-y border-border/60 bg-muted/20 py-4">
          <SlidingLogoMarquee
            items={MARQUEE_ITEMS}
            speed={20}
            height="50px"
            gap="1.5rem"
            showControls={false}
          />
        </div>
        </div>

        {/* Sections */}
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ExpertiseSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
