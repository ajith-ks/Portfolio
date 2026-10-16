import { content } from '@/data/content'
import { ScrollReveal } from '@/components/lightswind/scroll-reveal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/lightswind/card'

const SERVICE_CATEGORIES = [
  { title: 'Workflow Automation & Process Orchestration', category: 'Workflow Automation' },
  { title: 'Systems Integration & API Engineering', category: 'Infrastructure Automation' },
  { title: 'Data Engineering & Analytics', category: 'Data Engineering & Analytics' },
] as const

export function ServicesSection() {
  const { services, projects } = content

  return (
    <section id="services" aria-label="Services" className="mx-auto max-w-6xl px-6 py-24">
      <ScrollReveal as="h2" size="2xl" align="left" variant="primary">
        Services
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((title, index) => {
          const config = SERVICE_CATEGORIES[index]
          const related = projects.filter((project) => project.category === config.category)

          return (
            <Card key={title} hoverable className="flex flex-col">
              <CardHeader spacing="relaxed">
                <ScrollReveal as="h3" size="lg" align="left" variant="default">
                  {title}
                </ScrollReveal>
              </CardHeader>
              <CardContent padding="lg" className="flex-1">
                {related.length > 0 ? (
                  <ul className="space-y-3">
                    {related.map((project) => (
                      <li key={project.title} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span className="text-sm leading-relaxed text-foreground">
                          {project.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Projects in this area are listed under Projects.
                  </p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}