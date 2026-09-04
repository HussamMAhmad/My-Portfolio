import React from "react";
import { RiGithubFill, RiExternalLinkFill, RiCodeSSlashLine, RiServerLine } from "react-icons/ri";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";

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
    <div className="group rounded-3xl bg-primary-bg/40 border border-main/20 hover:border-main/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg">
      <div className="relative w-full md:h-48 h-100 overflow-hidden bg-primary-bg/50">
        <Image
          src={project.image}
          alt={project.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-[16px] sm:text-[20px] font-bold text-text mb-2 group-hover:text-main transition-colors">
            {project.title}
          </h3>
          <p className="text-text/70 text-[12px] sm:text-[14px] leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-main/10 text-main font-mono text-[11px] border border-main/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-main/10">
            <div className="flex items-center gap-3 flex-wrap">
              {project.githubUrls ? (
                <>
                  {project.githubUrls.frontend && (
                    <Link
                      href={project.githubUrls.frontend}
                      target="_blank"
                      rel="noreferrer"
                      title="Frontend Repository"
                      className="flex items-center gap-1.5 text-[12px] font-semibold text-text/80 hover:text-main transition-colors bg-main/5 px-2.5 py-1 rounded-lg border border-main/10 hover:border-main/30"
                    >
                      <RiCodeSSlashLine className="text-[15px] text-main" />
                      <span>Frontend</span>
                    </Link>
                  )}
                  {project.githubUrls.backend && (
                    <Link
                      href={project.githubUrls.backend}
                      target="_blank"
                      rel="noreferrer"
                      title="Backend Repository"
                      className="flex items-center gap-1.5 text-[12px] font-semibold text-text/80 hover:text-main transition-colors bg-main/5 px-2.5 py-1 rounded-lg border border-main/10 hover:border-main/30"
                    >
                      <RiServerLine className="text-[15px] text-main" />
                      <span>Backend</span>
                    </Link>
                  )}
                </>
              ) : (
                project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[12px] font-semibold text-text/80 hover:text-main transition-colors"
                  >
                    <RiGithubFill className="text-[18px]" />
                    <span>Source Code</span>
                  </Link>
                )
              )}
            </div>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[12px] font-semibold text-main hover:underline transition-all ml-auto"
              >
                <RiExternalLinkFill className="text-[18px]" />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;