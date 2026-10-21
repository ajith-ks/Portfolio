import { content } from '@/data/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/lightswind/card'
import { Zap, Server, ClipboardCheck, BarChart2 } from 'lucide-react'
import { SkillIcon } from '@/data/skill-icons'

const CATEGORY_ICONS = [Zap, Server, ClipboardCheck, BarChart2]

export function SkillsSection() {
  const { skillsSection, skills } = content

  return (
    <section id="skills" aria-label="Skills & Technologies" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 space-y-4 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          {skillsSection.eyebrow}
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {skillsSection.heading}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((cat, idx) => {
          const Icon = CATEGORY_ICONS[idx] || Zap
          return (
            <Card
              key={cat.category}
              className="border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-bold">{cat.category}</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-xs transition-colors hover:border-primary/50 hover:bg-accent"
                    >
                      <SkillIcon name={tag} size={16} className="shrink-0" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
