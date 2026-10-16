import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { HangingIdCard } from '@/components/lightswind/hanging-id-card'
import { ToggleTheme } from '@/components/lightswind/toggle-theme'
import { content } from '@/data/content'
import { AboutSection } from '@/components/sections/about'
import { ServicesSection } from '@/components/sections/services'
import photoLight from '@/assets/ajith-id-light.webp'
import photoDark from '@/assets/ajith-id-dark.webp'

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
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

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
          </ul>
        )}
      </header>

      <main>
        <section id="hero" className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-16 pt-32">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block">{NAME}</span>
                <span className="shine-text block pb-1">{ROLE}</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{BIO}</p>

              <div className="flex flex-wrap gap-3">
                <a href="#projects" className={`${buttonBase} bg-primary text-primary-foreground hover:opacity-90`}>
                  View work
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBase} border border-border hover:bg-accent`}
                >
                  Download resume
                </a>
                <a href="#contact" className={`${buttonBase} border border-border hover:bg-accent`}>
                  Get in touch
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <HangingIdCard name={NAME} role={ROLE}>
                <div>
                  <div className="bg-gradient-to-b from-emerald-50 to-white dark:from-zinc-800 dark:to-zinc-900">
                    {/* Light mode photo */}
                    <img
                      src={photoLight}
                      alt={`Portrait of ${NAME}`}
                      className="block aspect-[4/5] w-full object-cover object-top dark:hidden"
                    />
                    {/* Dark mode photo (lazy: not fetched while hidden) */}
                    <img
                      src={photoDark}
                      alt={`Portrait of ${NAME}`}
                      loading="lazy"
                      className="hidden aspect-[4/5] w-full object-cover object-top dark:block"
                    />
                  </div>
                  <div className="px-4 py-3 text-center">
                    <p className="text-sm font-bold leading-tight text-zinc-900 dark:text-white">{NAME}</p>
                    <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">{ROLE}</p>
                    <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                      Process Automation
                    </p>
                  </div>
                </div>
              </HangingIdCard>
            </div>
          </div>
        </section>

        {/* Anchors for the nav links; the sections are built in step 7b */}
        <AboutSection />
        <ServicesSection />
        <section id="education" aria-label="Experience and education" className="py-12" />
        <section id="projects" aria-label="Projects" className="py-12" />
        <section id="skills" aria-label="Skills" className="py-12" />
        <section id="contact" aria-label="Contact" className="py-12" />
      </main>
    </div>
  )
}
