"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  RiGithubFill,
  RiExternalLinkFill,
  RiCodeSSlashLine,
  RiServerLine,
} from "react-icons/ri";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  tags: string[];
  githubUrl?: string;
  githubUrls?: {
    frontend?: string;
    backend?: string;
  };
  liveUrl?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-main/10
        bg-primary-bg/40
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-main/25
        hover:bg-primary-bg/60
      "
    >
      {/* Image */}
      <div
        className="
          relative
          aspect-[16/10]
          w-full
          overflow-hidden
          bg-primary-bg
        "
      >
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.03]
          "
        />

        {/* Very subtle image overlay */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-primary-bg/35
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          flex
          flex-1
          flex-col
          p-5
          sm:p-6
        "
      >
        {/* Project title */}
        <div>
          <h3
            className="
              text-lg
              font-semibold
              tracking-tight
              text-text
              transition-colors
              duration-300
              group-hover:text-main
              sm:text-xl
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-text
              sm:leading-7
            "
          >
            {project.description}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-auto pt-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  border
                  border-main/10
                  bg-main/5
                  px-2.5
                  py-1
                  text-[10px]
                  font-medium
                  text-main
                  transition-colors
                  duration-300

                  group-hover:border-main/15

                  sm:text-[11px]
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div
            aria-hidden="true"
            className="
              my-5
              h-px
              w-full
              bg-main/10
            "
          />

          {/* Links */}
          <div
            className="
              flex
              min-h-7
              flex-wrap
              items-center
              justify-between
              gap-3
            "
          >
            {/* GitHub */}
            <div className="flex flex-wrap items-center gap-2">
              {project.githubUrls ? (
                <>
                  {project.githubUrls.frontend && (
                    <Link
                      href={project.githubUrls.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} frontend repository`}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        text-xs
                        font-medium
                        text-text
                        transition-colors
                        duration-300
                        hover:text-main
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-main
                      "
                    >
                      <RiCodeSSlashLine
                        aria-hidden="true"
                        className="text-base text-main"
                      />

                      <span>Frontend</span>
                    </Link>
                  )}

                  {project.githubUrls.backend && (
                    <>
                      {project.githubUrls.frontend && (
                        <span
                          aria-hidden="true"
                          className="text-text/30"
                        >
                          /
                        </span>
                      )}

                      <Link
                        href={project.githubUrls.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} backend repository`}
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          text-xs
                          font-medium
                          text-text
                          transition-colors
                          duration-300
                          hover:text-main
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-main
                        "
                      >
                        <RiServerLine
                          aria-hidden="true"
                          className="text-base text-main"
                        />

                        <span>Backend</span>
                      </Link>
                    </>
                  )}
                </>
              ) : (
                project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-medium
                      text-text
                      transition-colors
                      duration-300
                      hover:text-main
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-main
                    "
                  >
                    <RiGithubFill
                      aria-hidden="true"
                      className="text-base"
                    />

                    <span>Source Code</span>
                  </Link>
                )
              )}
            </div>

            {/* Live Demo */}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="
                  group/demo
                  ml-auto
                  inline-flex
                  items-center
                  gap-1.5
                  text-xs
                  font-semibold
                  text-main
                  transition-colors
                  duration-300
                  hover:text-text
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-main
                "
              >
                <span>Live Demo</span>

                <RiExternalLinkFill
                  aria-hidden="true"
                  className="
                    text-base
                    transition-transform
                    duration-300
                    group-hover/demo:translate-x-0.5
                  "
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;