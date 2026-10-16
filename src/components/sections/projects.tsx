import { useState, useRef, useEffect } from 'react'
import { content } from '@/data/content'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/lightswind/card'
import { X } from 'lucide-react'

type ProjectItem = typeof content.projects[number]

export function ProjectsSection() {
  const { projectsSection, projects } = content
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const featuredProjects = projects.slice(0, 4)
  const moreProjects = projects.slice(4, 8)

  const handleOpenModal = (project: ProjectItem, trigger: HTMLElement) => {
    triggerRef.current = trigger
    setSelectedProject(project)
  }

  useEffect(() => {
    if (selectedProject && dialogRef.current) {
      if (!dialogRef.current.open) {
        dialogRef.current.showModal()
        // Prevent body scroll behind dialog
        document.body.style.overflow = 'hidden'
      }
    }
  }, [selectedProject])

  const handleClose = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close()
    }
    document.body.style.overflow = ''
    setSelectedProject(null)
    triggerRef.current?.focus()
  }

  const renderProjectCard = (project: ProjectItem) => (
    <Card
      key={project.id}
      className="flex flex-col border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
    >
      <CardHeader className="space-y-2 pb-3">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
          {project.category}
        </span>
        <CardTitle className="text-xl font-bold leading-snug">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between pt-0">
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-border/80 bg-background/60 px-2 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-border/80 pt-4">
          <span className="text-xs font-semibold text-primary">{project.highlight}</span>
          <button
            type="button"
            onClick={(e) => handleOpenModal(project, e.currentTarget)}
            className="inline-flex items-center gap-1 text-xs font-bold text-foreground transition-colors hover:text-primary cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Read More →
          </button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="projects" aria-label="Featured Projects" className="mx-auto max-w-6xl px-6 py-24">
      {/* Featured Projects Header */}
      <div className="mb-14 space-y-4 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          {projectsSection.eyebrow}
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {projectsSection.heading}
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          {projectsSection.subtitle}
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((p) => renderProjectCard(p))}
      </div>

      {/* More Projects Header */}
      <div className="mb-12 mt-24 space-y-4 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-wider text-primary">
          {projectsSection.moreEyebrow}
        </span>
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {projectsSection.moreHeading}
        </h3>
      </div>

      {/* More Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {moreProjects.map((p) => renderProjectCard(p))}
      </div>

      {/* Project Details Dialog Modal */}
      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={(e) => {
          if (e.target === dialogRef.current) handleClose()
        }}
        className="backdrop:bg-black/80 backdrop:backdrop-blur-sm fixed inset-0 m-auto w-[92vw] max-w-3xl rounded-2xl border border-border bg-background p-0 text-foreground shadow-2xl overflow-hidden focus:outline-none"
      >
        {selectedProject && (
          <div className="flex max-h-[85vh] flex-col">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-border p-6 sm:p-8">
              <div className="space-y-2 pr-6">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  {selectedProject.category}
                </span>
                <h2 className="text-xl font-bold leading-tight sm:text-2xl">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md border border-border/80 bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close modal"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* 1. Project Overview */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  Project Overview
                </h3>
                <div
                  className="text-sm leading-relaxed text-muted-foreground [&_p]:mb-2 [&_p:last-child]:mb-0"
                  dangerouslySetInnerHTML={{ __html: selectedProject.caseStudy.overview }}
                />
              </div>

              {/* 2. Business Challenge */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  Business Challenge
                </h3>
                <div
                  className="text-sm leading-relaxed text-muted-foreground [&_p]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-muted-foreground [&_li]:leading-normal"
                  dangerouslySetInnerHTML={{ __html: selectedProject.caseStudy.challenge }}
                />
              </div>

              {/* 3. Solution */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  Solution
                </h3>
                <div
                  className="text-sm leading-relaxed text-muted-foreground [&_p]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: selectedProject.caseStudy.solution }}
                />
              </div>

              {/* 4. How It Works */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  How It Works
                </h3>
                <div
                  className="space-y-3 text-sm leading-relaxed text-muted-foreground [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-muted/50 [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-xs [&_pre]:leading-relaxed [&_pre]:text-foreground [&_pre]:shadow-xs [&_p]:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: selectedProject.caseStudy.howItWorks }}
                />
              </div>

              {/* 5. My Contribution */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  My Contribution
                </h3>
                <div
                  className="text-sm leading-relaxed text-muted-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-muted-foreground [&_li]:leading-normal"
                  dangerouslySetInnerHTML={{ __html: selectedProject.caseStudy.contribution }}
                />
              </div>

              {/* 6. Outcome */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  Outcome
                </h3>
                <div className="rounded-r-xl border-l-4 border-primary bg-primary/10 p-4 text-sm leading-relaxed text-foreground font-medium">
                  {selectedProject.caseStudy.outcome}
                </div>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
