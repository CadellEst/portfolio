"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ShootingStars } from "@/components/ShootingStars";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const specialties = [
  {
    title: "Next.js product builds",
    description: "SSR/ISR, image optimization, and edge-friendly patterns for experiences that load instantly.",
  },
  {
    title: "Design systems",
    description: "Composable UI kits with Tailwind and headless components for teams that ship quickly and consistently.",
  },
  {
    title: "Growth-minded UX",
    description: "Cohesive flows with micro-interactions, tracking hooks, and A/B ready layouts that convert.",
  },
  {
    title: "AI-ready frontends",
    description: "Interfaces that surface data clearly, stay accessible, and play nicely with AI/LLM workflows.",
  },
];

const stats = [
  { label: "Years building", value: "3+" },
  { label: "Launch-ready projects", value: "15" },
  { label: "Favourite stack", value: "Next.js + TS + Tailwind" },
];

const focusAreas = ["Premium marketing sites", "Dashboards and client portals", "Content-driven experiences", "API-first frontends"];

const coverStars = [
  { top: "12%", left: "18%", delay: "0s", duration: "3.2s" },
  { top: "26%", left: "42%", delay: "0.8s", duration: "4s" },
  { top: "18%", left: "68%", delay: "1.2s", duration: "3.6s" },
  { top: "36%", left: "22%", delay: "1.6s", duration: "4.4s" },
  { top: "44%", left: "58%", delay: "0.4s", duration: "3.8s" },
  { top: "62%", left: "32%", delay: "2s", duration: "4.2s" },
  { top: "70%", left: "18%", delay: "2.4s", duration: "3.5s" },
  { top: "16%", left: "84%", delay: "2.8s", duration: "3.7s" },
  { top: "54%", left: "78%", delay: "1.1s", duration: "4.6s" },
  { top: "78%", left: "46%", delay: "0.6s", duration: "3.3s" },
  { top: "68%", left: "70%", delay: "1.9s", duration: "4.1s" },
];

export default function Page() {
  const [showCover, setShowCover] = useState(true);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!opening) return;
      setShowCover(false);
    }, 1700);
    return () => clearTimeout(timer);
  }, [opening]);

  const handleEnter = () => {
    setOpening(true);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cadell Estephane",
    jobTitle: "Frontend Engineer",
    description:
      "Frontend engineer specializing in Next.js, TypeScript, and Tailwind to deliver fast, premium, SEO-first web experiences.",
    url: "https://www.linkedin.com/in/cadell-estephane/",
    sameAs: ["https://github.com/CadellEst", "https://www.linkedin.com/in/cadell-estephane/"],
    knowsAbout: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Performance", "SEO"],
  };

  return (
    <>
      {showCover ? (
        <div className={`book-gate ${opening ? "opening" : ""}`}>
          <div className="book-stars" aria-hidden>
            {coverStars.map((star, index) => (
              <span
                key={index}
                className="book-star"
                style={{ top: star.top, left: star.left, animationDelay: star.delay, animationDuration: star.duration }}
              />
            ))}
          </div>
          <div className="book-panel left">
            <div className="book-insignia">
              <div className="book-crest">CE</div>
              <p className="book-subtitle">Portfolio of Cadell Estephane</p>
              <p className="book-tagline">Frontend engineer crafting luxury-grade web products.</p>
            </div>
          </div>
          <div className="book-panel right">
            <div className="book-cta">
              <p className="book-heading">Open the book</p>
              <p className="book-copy">Step into a cinematic space of polished builds.</p>
              <p className="book-hook">Every project is staged like a scene - let&apos;s roll the opening shot.</p>
              <button className="book-button" onClick={handleEnter}>
                Open portfolio
              </button>
            </div>
          </div>
          <div className="book-glow" aria-hidden />
        </div>
      ) : null}

      <main className="relative isolate overflow-hidden">
        <div className="glow-ring" aria-hidden />
        <div className="grid-lines" aria-hidden />
        <div className="noise absolute inset-0" aria-hidden />
        <ShootingStars />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-10 sm:pt-14 lg:pt-16">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <header className="mb-12 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-lg font-semibold text-gold shadow-glow">CE</div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-pewter">Frontend Engineer</p>
                <p className="text-sm text-champagne/80">Cadell Estephane</p>
              </div>
            </div>
            <nav className="hidden items-center gap-4 text-sm font-semibold text-champagne/80 sm:flex">
              <Link href="#projects" className="rounded-full border border-transparent px-3 py-2 transition hover:border-gold hover:text-white">
                Projects
              </Link>
              <Link href="#expertise" className="rounded-full border border-transparent px-3 py-2 transition hover:border-gold hover:text-white">
                Expertise
              </Link>
              <Link href="#contact" className="rounded-full border border-gold/60 bg-gold px-4 py-2 text-ink transition hover:-translate-y-0.5">
                Get in touch
              </Link>
            </nav>
          </header>

          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-6 py-10 shadow-card sm:px-10">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-azure/5" aria-hidden />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-pewter">
                  Available for impactful roles and select clients
                </div>
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-pewter">Luxury-grade web experiences</p>
                  <h1 className="text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                    I craft fast, polished digital products with a wealthy, modern finish.
                  </h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-champagne/80">
                    Frontend engineer focused on Next.js, TypeScript, and Tailwind. I build premium, performant interfaces
                    that feel expensive - combining sharp UX, modern motion, accessibility, and SEO discipline so both humans and AI can parse them clearly.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/assets/Cadell-CV.pdf"
                    target="_blank"
                    className="button-cta inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink"
                  >
                    Download CV
                  </Link>
                  <Link
                    href="mailto:cewebenterprise@gmail.com?subject=Project%20for%20Cadell"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-champagne transition hover:border-gold"
                  >
                    Book a call
                  </Link>
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs text-pewter">
                    <span className="h-2 w-2 rounded-full bg-jade shadow-glow" />
                    <span>Based in the UK - Remote friendly</span>
                  </div>
                </div>
              </div>

              <div className="grid w-full max-w-xs grid-cols-1 gap-3 self-start text-sm text-champagne/80 sm:grid-cols-2 lg:max-w-sm">
                {stats.map((stat) => (
                  <div key={stat.label} className="card-shell rounded-2xl px-4 py-5 text-center">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-pewter">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="expertise" className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card-shell rounded-3xl p-8 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-pewter">Focus</p>
                  <h2 className="mt-2 text-3xl text-white">What I deliver</h2>
                  <p className="mt-3 max-w-2xl text-base text-champagne/80">
                    High-touch builds that balance premium visuals with conversion-first product thinking.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-champagne/90">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {specialties.map((specialty) => (
                  <div key={specialty.title} className="rounded-2xl border border-white/5 bg-ink/60 p-4 shadow-inner">
                    <h3 className="text-lg font-semibold text-white">{specialty.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-pewter">{specialty.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink/90 via-ink/70 to-onyx/70 p-8 shadow-card">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-transparent" aria-hidden />
              <div className="relative space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-pewter">Tooling</p>
                <h2 className="text-3xl text-white">Modern stack</h2>
                <p className="text-sm text-champagne/80">
                  Next.js (App Router), TypeScript, Tailwind, headless UI, Axios, keen-slider, Vercel, and analytics hooks
                  for release-ready shipping.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold text-champagne/90">
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Type-safe components</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Image optimization</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Performance budgets</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Analytics ready</span>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="mt-16 lg:mt-20">
            <div className="mb-8 flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-pewter">Selected work</p>
              <h2 className="text-3xl text-white">Projects that feel expensive</h2>
              <p className="max-w-3xl text-base text-champagne/80">
                Screenshots refresh automatically using a live capture service (with local fallbacks) so the work always
                looks current.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section id="contact" className="mt-16 lg:mt-20">
            <div className="card-shell relative overflow-hidden rounded-3xl p-8 shadow-card">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/15 via-transparent to-azure/10" aria-hidden />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-pewter">Let&apos;s build</p>
                  <h2 className="text-3xl text-white">Tell me about the product you want to ship</h2>
                  <p className="max-w-2xl text-base text-champagne/80">
                    From polished marketing sites to product UIs, I bring structure, clear communication, and swift
                    delivery. Reach out for full-time roles or select client partnerships.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-pewter">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Next.js App Router</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">TypeScript</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Tailwind UI</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Motion and polish</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="mailto:cewebenterprise@gmail.com?subject=Let%27s%20work%20together"
                    className="button-cta inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink"
                  >
                    Email Cadell
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/cadell-estephane/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-champagne transition hover:border-gold"
                  >
                    Connect on LinkedIn
                  </Link>
                  <Link
                    href="https://github.com/CadellEst"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-champagne transition hover:border-gold"
                  >
                    View GitHub
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
