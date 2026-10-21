import { content } from '@/data/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/lightswind/card'
import { GraduationCap, Calendar } from 'lucide-react'
import { NeonTimeline } from '@/components/NeonTimeline'

export function EducationSection() {
  const { educationSection, education } = content

  return (
    <section id="education" aria-label="Education" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 space-y-4 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          {educationSection.eyebrow}
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {educationSection.heading}
        </h2>
      </div>

      <NeonTimeline nodes={3}>
        <div className="flex flex-col gap-6">
          {education.map((item) => (
            <Card
              key={item.degree}
              className="flex flex-col border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    <Calendar className="h-3 w-3" />
                    {item.year}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold leading-tight">{item.degree}</CardTitle>
              </CardHeader>

              <CardContent className="mt-auto pt-0">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.institution}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </NeonTimeline>
    </section>
  )
}
