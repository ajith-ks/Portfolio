import { content } from '@/data/content'
import { CountUp } from '@/components/lightswind/count-up'
import { Workflow, Network, BarChart3 } from 'lucide-react'
import profileReal from '@/assets/profile-real.webp'

const SERVICE_ICONS = [Workflow, Network, BarChart3]

export function AboutSection() {
  const { about, aboutParagraphs } = content
  const { highlights } = about

  return (
    <section id="about" aria-label="About Me" className="mx-auto max-w-6xl px-6 py-24">
      <div className="space-y-4">
        <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          {about.eyebrow}
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {about.heading}
        </h2>
      </div>

      <div className="mt-10 grid items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {about.services.map((service, index) => {
              const Icon = SERVICE_ICONS[index] || Workflow
              return (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-colors hover:border-primary/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{service}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right column: authentic profile portrait */}
        <div className="flex justify-center lg:col-span-5">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card/60 p-3 shadow-xl backdrop-blur-sm transition-all hover:border-primary/40">
            <img
              src={profileReal}
              alt="Ajith KS"
              className="aspect-square h-auto w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Professional Highlights (6 stats) */}
      <div id="highlights" className="mt-20 border-t border-border/60 pt-16">
        <div className="mb-12 space-y-3 text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
            {highlights.eyebrow}
          </span>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {highlights.heading}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {highlights.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card/60 p-5 text-center backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                numberClassName="text-3xl font-bold text-primary sm:text-4xl"
              />
              <span className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}