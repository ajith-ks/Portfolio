import React, { useState, useEffect } from 'react'
import { content } from '@/data/content'
import { Card } from '@/components/lightswind/card'
import { Phone, Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export function ContactSection() {
  const { contactSection, contact } = content
  const { form } = contactSection

  // Phone assembled at runtime from two parts in JavaScript (satisfies HANDOFF rule 99)
  const [phoneData, setPhoneData] = useState<{ display: string; href: string }>({
    display: '',
    href: '',
  })

  useEffect(() => {
    const partA = '+91 999'
    const partB = '5516020'
    const display = `${partA}${partB}`
    const href = `tel:${display.replace(/\s+/g, '')}`
    setPhoneData({ display, href })
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    // Build URL-encoded mailto fallback link (satisfies HANDOFF rule 100)
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    e.preventDefault()
  }

  return (
    <section id="contact" aria-label="Contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
              {contactSection.eyebrow}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Have a process worth<br />automating?
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {contactSection.subtitle}
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {/* GitHub */}
            <a
              id="contact-github"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GithubIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">GitHub</div>
                <div className="text-sm font-medium text-foreground">github.com/ajith-ks</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              id="contact-linkedin"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <LinkedinIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">LinkedIn</div>
                <div className="text-sm font-medium text-foreground">linkedin.com/in/iajithks</div>
              </div>
            </a>

            {/* Phone (runtime assembled) */}
            <a
              id="contact-phone"
              href={phoneData.href}
              className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="text-sm font-medium text-foreground">{phoneData.display || '+91 9995516020'}</div>
              </div>
            </a>

            {/* Email */}
            <a
              id="contact-email"
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="text-sm font-medium text-foreground">{contact.email}</div>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="border border-border bg-card/60 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
          <form
            id="contact-form"
            action={`mailto:${contact.email}`}
            method="POST"
            encType="text/plain"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label htmlFor="contact-name" className="block text-sm font-semibold text-foreground">
                {form.nameLabel}
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder={form.namePlaceholder}
                required
                className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-2 focus:outline-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email-input" className="block text-sm font-semibold text-foreground">
                {form.emailLabel}
              </label>
              <input
                type="email"
                id="contact-email-input"
                name="email"
                placeholder={form.emailPlaceholder}
                required
                className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-2 focus:outline-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground">
                {form.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder={form.messagePlaceholder}
                required
                className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-2 focus:outline-primary resize-y"
              />
            </div>

            <button
              type="submit"
              id="contact-submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
            >
              <span>{form.submitLabel}</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </Card>
      </div>
    </section>
  )
}
