import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'jenkins',
    role: 'CI pipeline lab',
    description:
      'A hands-on Jenkins continuous integration lab — building and running automated pipelines against a Python codebase to practice jobs, triggers, and build stages.',
    tags: ['Jenkins', 'Python', 'CI'],
    status: 'Public Repo',
    link: 'https://github.com/hahapratik/jenkins-demo',
  },
  {
    title: 'jenkins-cicd-demo',
    role: 'Full CI/CD pipeline demo',
    description:
      'End-to-end CI/CD demonstration with Jenkins — taking a web app from commit to deployment, wiring up the pipeline stages that power the Jenkins + Docker + Argo CD workflow.',
    tags: ['Jenkins', 'CI/CD', 'HTML'],
    status: 'Public Repo',
    link: 'https://github.com/hahapratik/jenkins-cicd-demo',
  },

   {
    title: 'github-actions',
    role: 'GitHub Actions automation and workflows',
    description:
      'A practical demonstration of continuous integration and deployment using GitHub Actions, featuring automated YAML pipelines for building, testing, and delivering code directly within GitHub.',
    tags: ['GitHub Actions', 'CI/CD', 'YAML', 'Automation'],
    status: 'Public Repo',
    link: 'https://github.com/hahapratik/Github-Actions',
  },

]

export function Projects() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs text-primary">{'// public repositories'}</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Projects
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-mono text-lg font-medium text-card-foreground">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-1 font-mono text-xs text-primary">{project.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-6 font-mono text-xs text-muted-foreground">{project.status}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
