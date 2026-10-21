import { useState, useEffect } from 'react'
import { content } from '@/data/content'
import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export function Footer() {
  const { footer, contact } = content
  const [phoneHref, setPhoneHref] = useState('')

  useEffect(() => {
    const partA = '+91999'
    const partB = '5516020'
    setPhoneHref(`tel:${partA}${partB}`)
  }, [])

  return (
    <footer className="border-t border-border/60 bg-muted/20 py-16 pb-20">
      <div className="mx-auto max-w-6xl px-6 text-center space-y-6">
        <p className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {footer.brand}
        </p>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {footer.tagline}
        </p>

        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={phoneHref || 'tel:+919995516020'}
            aria-label="Phone"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>

        <p className="pt-4 text-xs font-medium text-muted-foreground">
          {footer.copyright}
        </p>
      </div>
    </footer>
  )
}
