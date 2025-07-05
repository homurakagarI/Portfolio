import { Button } from "@/components/ui/button"

export interface Project {
  title: string
  description: string
  link: string
  thumbnail: string
  screenshots?: string[] // Array of screenshot URLs
}

export function ProjectCard({
  project,
  onView,
}: {
  project: Project
  onView: (project: Project) => void
}) {
  return (
    <div className="rounded-lg border bg-card p-4 flex flex-col items-start">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="mb-4 w-full h-64 object-cover rounded-md"
      />
      <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
      <Button onClick={() => onView(project)}>
        View Project
      </Button>
    </div>
  )
}
