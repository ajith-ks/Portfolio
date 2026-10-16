import { content } from '@/data/content'
import { CountUp } from '@/components/lightswind/count-up'
import { ScrollReveal } from '@/components/lightswind/scroll-reveal'

const STATS = [
  { value: 7, suffix: '+', label: 'Years of experience' },
  { value: 15, suffix: '+', label: 'Hours saved weekly' },
  { value: 1000, suffix: '+', label: 'Users managed' },
  { value: 99, suffix: '%', label: 'Data accuracy' },
]

export function AboutSection() {
  const { aboutParagraphs } = content

  return (
    <section id="about" aria-label="About" className="mx-auto max-w-6xl px-6 py-24">
      <ScrollReveal as="h2" size="2xl" align="left" variant="primary">
        About me
      </ScrollReveal>

      <div className="mt-8 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {aboutParagraphs.map((paragraph, index) => (
            <ScrollReveal key={index} as="p" size="md" variant="muted">
              {paragraph}
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card/60 p-5 text-center backdrop-blur-sm"
            >
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                numberClassName="text-3xl font-bold text-primary"
              />
              <span className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}