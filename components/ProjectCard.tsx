"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const [src, setSrc] = useState(project.image);

  return (
    <article className="card-shell relative flex h-full flex-col gap-4 rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-ink/60">
        <Image
          src={src}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover transition duration-700"
          onError={() => project.fallbackImage && setSrc(project.fallbackImage)}
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent" />
        {project.highlight ? (
          <div className="absolute left-4 top-4 rounded-full bg-amberGlass px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
            {project.highlight}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2 text-sm uppercase tracking-[0.14em] text-pewter">
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs">{project.tagline}</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-pewter">{project.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={`${project.title}-${tech}`}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-champagne"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="button-cta inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition"
          >
            Live site
          </Link>
        ) : null}
        {project.repoUrl ? (
          <Link
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-champagne transition hover:border-gold hover:text-white"
          >
            Code
          </Link>
        ) : null}
      </div>
    </article>
  );
}
