import React from "react";
import Link from "next/link"; // أو يمكنك استخدام <a> إذا لم تكن تستخدم Next.js
import TitleSec from "../ui/title-sec";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "sub-tracker-pg",
    title: "Advanced Subscription Manager",
    description:
      "A relational subscription management architecture with automated alerts, secure authentication, and rate limiting.",
    image: "/images/projects/subscription-app.png",
    tags: ["TypeScript", "PostgreSQL", "Prisma", "Node.js", "JWT", "Arcjet"],
    githubUrl: "https://github.com/hussammahmad",
    liveUrl: "https://example.com",
  },
  {
    id: "sub-tracker-mongo",
    title: "Smart Subscription Tracking System",
    description:
      "Full-stack web platform built to track recurring payments with scheduled background workflows and dynamic HTML email notifications.",
    image: "/images/projects/sub-mongo.png",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Upstash", "Nodemailer"],
    githubUrl: "https://github.com/hussammahmad",
  },
  {
    id: "boxtasks",
    title: "BoxTasks - Task Management Platform",
    description:
      "A responsive task handling interface featuring state persistence, dynamic filtering, and interactive UI components.",
    image: "/images/projects/boxtasks.png",
    tags: ["React.js", "Material UI", "Context API", "Tailwind CSS"],
    githubUrl: "https://github.com/hussammahmad",
    liveUrl: "https://example.com",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full section flex flex-col items-center bg-secondary-bg">
      <TitleSec partOne="My" partTwo="Projects" />

      {/* شبكة المشاريع */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl bg-primary-bg/40 border border-main/20 hover:border-main/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            {/* غلاف الصورة */}
            <div className="relative w-full h-48 overflow-hidden bg-primary-bg/50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* تفاصيل المشروع */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-main transition-colors">
                  {project.title}
                </h3>
                <p className="text-text/70 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* قائمة وسوم التقنيات */}
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

                {/* روابط المشروع */}
                <div className="flex items-center gap-4 pt-4 border-t border-main/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-text/80 hover:text-main transition-colors"
                  >
                    <i className="bx bxl-github text-lg" />
                    <span>Source Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-main hover:underline transition-all"
                    >
                      <i className="bx bx-link-external text-lg" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* زر عرض جميع المشاريع */}
      <div className="mt-12 text-center">
        <Link
          href="/projects" // أبدل الرابط بـ صفحة /projects أو رابط حسابك في GitHub
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-main/10 border border-main/30 text-main font-semibold text-sm hover:bg-main hover:text-primary-bg transition-all duration-300 group shadow-md"
        >
          <span>View All Projects</span>
          <i className="bx bx-right-arrow-alt text-xl group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}