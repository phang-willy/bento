import type { Project } from "@/types/Projects";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";
import { formatDate } from "@/utils/formatDate";
import projectsData from "@/data/projects.json";

function Projects() {
  const projects = (projectsData.projects as Project[]).slice().sort((a, b) => {
    return b.dates.start.localeCompare(a.dates.start);
  });

  return (
    <Section id="projects" title="Projets" stickyPriority={0}>
      <div className="flex flex-col gap-8 p-4">
        {projects.map((project) => (
          <article key={project.id} className="card p-6 flex flex-col gap-3">
            <header className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.for}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(project.dates.start)} - {project.dates.end ? formatDate(project.dates.end) : 'Présent'}</p>
            </header>
            <p className="text-base text-gray-700 dark:text-gray-300">{project.description}</p>
            <footer className="flex flex-wrap gap-2 mt-2">
              {project.stacks.map((stack) => (
                <Badge key={stack.id}>{stack.name}</Badge>
              ))}
            </footer>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Projects;