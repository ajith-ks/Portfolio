import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Download,
  Send,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const RESUME_URL =
  import.meta.env.BASE_URL + 'resume/Ajith_KS_Automation_Engineer_Resume.pdf'

type DockItem = {
  id: string
  label: string
  icon: React.ElementType
  href: string
  external?: boolean
}

const ITEMS: DockItem[] = [
  { id: 'hero',       label: 'Home',       icon: Home,          href: '#hero' },
  { id: 'about',      label: 'About',      icon: User,          href: '#about' },
  { id: 'experience', label: 'Experience', icon: Briefcase,     href: '#experience' },
  { id: 'projects',   label: 'Projects',   icon: FolderOpen,    href: '#projects' },
  { id: 'education',  label: 'Education',  icon: GraduationCap, href: '#education' },
  { id: 'resume',     label: 'Resume',     icon: Download,      href: RESUME_URL, external: true },
  { id: 'contact',    label: 'Contact',    icon: Send,          href: '#contact' },
]

const SPRING = { type: 'spring' as const, stiffness: 300, damping: 24 }

function DockButton({
  item,
  active,
}: {
  item: DockItem
  active: boolean
}) {
  const Icon = item.icon
  const [hovered, setHovered] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.external) return
    e.preventDefault()
    const target = document.querySelector(item.href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {hovered && (
          <motion.span
            key="tooltip"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-0.5 text-xs font-medium text-card-foreground shadow-sm pointer-events-none"
            role="tooltip"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        href={item.href}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
        onClick={handleClick}
        aria-label={item.label}
        title={item.label}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.92 }}
        transition={SPRING}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          'bg-white shadow-sm border border-zinc-200/80 dark:bg-zinc-900 dark:border-zinc-700/60',
          active
            ? 'text-primary ring-1 ring-primary/60'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </motion.a>
    </div>
  )
}

export function PortfolioDock() {
  const [visible, setVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const reducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = ITEMS
      .filter(i => !i.external)
      .map(i => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const ratios = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => ratios.set(e.target.id, e.intersectionRatio))
        let best = 'hero'
        let bestRatio = 0
        ratios.forEach((r, id) => { if (r > bestRatio) { bestRatio = r; best = id } })
        setActiveSection(best)
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const enterExit = reducedMotion ? {} : { initial: { opacity: 0, y: 24 }, exit: { opacity: 0, y: 24 } }
  const transition = reducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 260, damping: 28 }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="dock"
          {...enterExit}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
          className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 pointer-events-none"
          aria-label="Page navigation dock"
          role="navigation"
        >
          <div
            className={cn(
              'pointer-events-auto flex items-center gap-2 rounded-full px-4 py-2',
              'border border-zinc-200/80 bg-white/85 shadow-xl backdrop-blur-xl',
              'dark:border-zinc-700/60 dark:bg-zinc-950/90',
            )}
          >
            {ITEMS.map(item => (
              <DockButton
                key={item.id}
                item={item}
                active={activeSection === item.id}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
