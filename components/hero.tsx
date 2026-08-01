export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
      <p className="mb-6 font-mono text-sm text-primary">
        {'> _ building a full DevOps lab, one pipeline at a time'}
      </p>
      <h1 className="text-balance text-5xl font-medium leading-tight tracking-tight text-foreground md:text-7xl">
        Pratik Kumar Verman
      </h1>
      <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
        Aspiring DevOps Engineer
        <br />
        CI/CD with Jenkins &amp; Docker, infrastructure with Terraform,
        <br className="hidden md:block" />
        {' and GitOps deployments with Argo CD on Kubernetes.'}
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border px-5 py-2.5 font-mono text-xs text-foreground transition-colors hover:bg-secondary"
        >
          Get in touch
        </a>
        <a
          href="/resume.pdf"
          className="rounded-md border border-border px-5 py-2.5 font-mono text-xs text-foreground transition-colors hover:bg-secondary"
        >
          Resume
        </a>
      </div>
      <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {[
          { value: 'Delhi NCR', label: 'Based in India' },
          { value: 'Arch Linux', label: 'Daily driver + Fish shell' },
          { value: 'GitOps', label: 'Current focus' },
          { value: 'BCA \u201927', label: 'MDU, Rohtak' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 bg-background p-6">
            <dt className="order-2 font-mono text-xs text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 text-2xl font-medium text-foreground">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
