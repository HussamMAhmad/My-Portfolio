"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: "fullstack" | "frontend" | "backend";
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ALL_PROJECTS: Project[] = [
  {
    id: "sub-tracker-pg",
    title: "Advanced Subscription Manager",
    category: "fullstack",
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
    category: "fullstack",
    description:
      "Full-stack web platform built to track recurring payments with scheduled background workflows and dynamic HTML email notifications.",
    image: "/images/projects/sub-mongo.png",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Upstash", "Nodemailer"],
    githubUrl: "https://github.com/hussammahmad",
  },
  {
    id: "boxtasks",
    title: "BoxTasks - Task Management Platform",
    category: "frontend",
    description:
      "A responsive task handling interface featuring state persistence, dynamic filtering, and interactive UI components.",
    image: "/images/projects/boxtasks.png",
    tags: ["React.js", "Material UI", "Context API", "Tailwind CSS"],
    githubUrl: "https://github.com/hussammahmad",
    liveUrl: "https://example.com",
  },
];

const CATEGORIES = [
  { label: "All Projects", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = ALL_PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full min-h-screen py-16 px-4 max-w-6xl mx-auto">
      {/* زر العودة والعنوان */}
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-text/60 hover:text-main transition-colors mb-6"
        >
          <i className="bx bx-left-arrow-alt text-lg" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-3xl sm:text-5xl font-bold text-text">
          All <span className="text-main">Projects</span>
        </h1>
        <p className="text-text/70 text-sm mt-3 max-w-2xl">
          Explore a complete collection of my full-stack applications, front-end interfaces, and technical experiments.
        </p>
      </div>

      {/* أدوات التحكم: التبويبات والشريط الخاص بالبحث */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
        {/* أزرار الفلترة */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.value
                  ? "bg-main text-primary-bg shadow-md"
                  : "bg-secondary-bg/60 text-text/70 border border-main/10 hover:text-text"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* مربع البحث */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search by tech or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 rounded-xl bg-secondary-bg/40 border border-main/20 text-text text-xs focus:outline-none focus:border-main transition-colors"
          />
          <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-text/40 text-base" />
        </div>
      </div>

      {/* شبكة المشاريع المفلترة */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-secondary-bg/40 border border-main/20 hover:border-main/60 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="relative w-full h-48 overflow-hidden bg-primary-bg/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

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
      ) : (
        <div className="text-center py-20 text-text/50">
          <i className="bx bx-folder-open text-5xl mb-3 block" />
          <p className="text-sm">No projects matched your search criteria.</p>
        </div>
      )}
    </main>
  );
}