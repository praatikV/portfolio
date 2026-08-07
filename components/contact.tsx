'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

// Create a free form at https://formspree.io/forms and paste your endpoint here.
const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const socials = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/praatikV',
    hoverColor: 'group-hover:text-violet-500',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/pratikkumarverman',
    hoverColor: 'group-hover:text-sky-500',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    href: 'https://www.instagram.com/praatik.v/',
    hoverColor: 'group-hover:text-pink-500',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:pratikvermann@gmail.com',
    hoverColor: 'group-hover:text-emerald-500',
  },
]

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
        <div>
          <p className="font-mono text-xs text-primary">{'// say hello'}</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Open to opportunities, collaborations, or just talking shop about pipelines and
            Kubernetes.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <social.icon
                    className={`size-4 text-muted-foreground transition-colors ${social.hoverColor}`}
                    aria-hidden="true"
                  />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-mono text-xs text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="rounded-md border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-mono text-xs text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-md border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-mono text-xs text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-y rounded-md border border-border bg-card px-3 py-2.5 text-sm leading-relaxed text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-fit rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'sent' && (
              <p className="font-mono text-xs text-primary" role="status">
                Message sent. Thanks!
              </p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-destructive" role="status">
                Something went wrong — email me instead.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
