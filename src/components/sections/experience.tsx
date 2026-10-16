import { content } from '@/data/content'
import { Card, CardContent } from '@/components/lightswind/card'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

export function ExperienceSection() {
  const { experienceSection, experience } = content
  const exp = experience[0]

  return (
    <section id="experience" aria-label="Professional Experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 space-y-4 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          {experienceSection.eyebrow}
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {experienceSection.heading}
        </h2>
      </div>

      <Card className="overflow-hidden border border-border bg-card/60 backdrop-blur-sm shadow-lg">
        <div className="border-b border-border/80 bg-muted/30 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold tracking-tight text-foreground">{exp.company}</h3>
              </div>
              <p className="text-base font-semibold text-primary">{exp.role}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground sm:text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                {exp.dates}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {exp.location}
              </span>
            </div>
          </div>
        </div>

        <CardContent className="p-6 sm:p-8">
          <div className="relative pl-6 sm:pl-8 before:absolute before:bottom-3 before:left-2 sm:before:left-3 before:top-3 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-border before:to-border">
            <div className="space-y-6">
              {exp.bullets.map((bullet, idx) => {
                const colonIndex = bullet.indexOf(':')
                const label = colonIndex !== -1 ? bullet.substring(0, colonIndex) : null
                const rest = colonIndex !== -1 ? bullet.substring(colonIndex + 1) : bullet

                return (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div className="absolute -left-6 sm:-left-8 top-1 flex h-4 sm:h-5 w-4 sm:w-5 items-center justify-center rounded-full border-2 border-background bg-primary shadow-xs">
                      <div className="h-1.5 w-1.5 rounded-full bg-background" />
                    </div>
                    <div className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {label ? (
                        <>
                          <strong className="font-semibold text-foreground">{label}:</strong>
                          {rest}
                        </>
                      ) : (
                        bullet
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
