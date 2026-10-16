import { content } from '@/data/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/lightswind/card'
import { KeyRound, Workflow, Network, Server, FileSpreadsheet, BarChart3 } from 'lucide-react'

const EXPERTISE_ICONS = [
  KeyRound,
  Workflow,
  Network,
  Server,
  FileSpreadsheet,
  BarChart3,
]

export function ExpertiseSection() {
  const { expertise } = content

  return (
    <section id="expertise" aria-label="Automation Expertise" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 space-y-4 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          {expertise.eyebrow}
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {expertise.heading}
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.items.map((item, idx) => {
          const Icon = EXPERTISE_ICONS[idx] || Workflow

          return (
            <Card
              key={item.name}
              className="border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <CardHeader className="space-y-4 pb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
