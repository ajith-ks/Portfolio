import { content } from '@/data/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/lightswind/card'
import { Award } from 'lucide-react'

export function CertificationsSection() {
  const { certificationsSection, certifications } = content

  const getCertHref = (link: string) => {
    if (link.startsWith('http://') || link.startsWith('https://')) {
      return link
    }
    return import.meta.env.BASE_URL + link.replace(/^\//, '')
  }

  return (
    <section id="certifications" aria-label="Certifications" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 space-y-4 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          {certificationsSection.eyebrow}
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {certificationsSection.heading}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <Card
            key={cert.name}
            className="flex flex-col border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <CardHeader className="space-y-3 pb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold leading-snug">{cert.name}</CardTitle>
              <p className="text-sm font-medium text-muted-foreground">{cert.issuer}</p>
            </CardHeader>

            <CardContent className="mt-auto pt-4">
              <a
                href={getCertHref(cert.link)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:underline"
              >
                {certificationsSection.viewCertificateLabel}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
