'use client'

import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

const theme = {
  dark: ['#1c1c1c', '#3d3d3d', '#6e6e6e', '#a5a5a5', '#e8e8e8'],
}

export function GithubActivity() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="activity" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="font-mono text-xs text-primary">{'// commit history'}</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          GitHub Activity
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          A live view of my contributions on{' '}
          <a
            href="https://github.com/praatikV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            github.com/praatikV
          </a>{' '}
          — pipelines, Terraform configs, and daily lab work.
        </p>
        <div className="mt-10 min-h-40 overflow-x-auto rounded-lg border border-border bg-card p-6">
          {mounted ? (
            <GitHubCalendar
              username="praatikV"
              colorScheme="dark"
              theme={theme}
              blockSize={11}
              blockMargin={3}
              fontSize={12}
              style={{ color: 'var(--muted-foreground)' }}
            />
          ) : (
            <div className="h-28 w-full animate-pulse rounded bg-muted" aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  )
}
