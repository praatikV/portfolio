const ICON_BASE = 'https://thesvg.org/icons'

type Skill = { name: string; slug: string; variant?: string }

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Containers & Orchestration',
    skills: [
      { name: 'Docker', slug: 'docker' },
      { name: 'Kubernetes', slug: 'kubernetes' },
      { name: 'Argo CD', slug: 'argocd' },
    ],
  },
  {
    title: 'CI/CD & GitOps',
    skills: [
      { name: 'Jenkins', slug: 'jenkins' },
      { name: 'GitHub Actions', slug: 'github-actions' },
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github', variant: 'light' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS', slug: 'amazon-web-services', variant: 'light' },
      { name: 'Azure', slug: 'azure' },
      { name: 'Terraform', slug: 'terraform' },
      { name: 'Ansible', slug: 'ansible' },
    ],
  },
  {
    title: 'Monitoring',
    skills: [{ name: 'Prometheus', slug: 'prometheus' }
            { name: 'Grafana', slug: 'grafana' },
            ],
  },
  {
    title: 'Systems & Tooling',
    skills: [
      { name: 'Linux', slug: 'linux' },
      { name: 'Arch Linux', slug: 'arch-linux' },
      { name: 'Bash', slug: 'bash', variant: 'light' },
      { name: 'Vim', slug: 'vim' },
      { name: 'Neovim', slug: 'neovim' },
      { name: 'VS Code', slug: 'visual-studio-code' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', slug: 'python' },
      { name: 'Java', slug: 'java' },
      { name: 'C', slug: 'c' },
      { name: 'C++', slug: 'c-plusplus' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'HTML5', slug: 'html5' },
      { name: 'CSS', slug: 'css' },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs text-primary">{'// toolchain'}</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Skills
        </h2>
        <div className="mt-12 flex flex-col gap-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40"
                  >
                    <img
                      src={`${ICON_BASE}/${skill.slug}/${skill.variant ?? 'default'}.svg`}
                      alt=""
                      width={24}
                      height={24}
                      loading="lazy"
                      className="size-6 shrink-0 opacity-70 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-card-foreground">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
