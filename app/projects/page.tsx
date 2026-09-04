"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/data-projects";
import TitleSec from "@/components/ui/title-sec";
import { MdOutlineSearch, MdOutlineFolderOpen } from "react-icons/md";
import ProjectCard from "@/components/ui/projectCard";
import { CATEGORIES } from "@/data/constants";

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full min-h-screen pt-40 sm:pt-30 py-16 px-4 bg-secondary-bg">
      <div className="max-w-6xl mx-auto">

      <div className="mb-10">
        <TitleSec partOne="All" partTwo="Projects" />
        <p className="text-text/70 text-[14px] mt-3 max-w-2xl">
          Explore a complete collection of my full-stack applications, front-end
          interfaces, and technical experiments.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {CATEGORIES.map((item) => (
            <button
              key={item.value}
              onClick={() => setActiveCategory(item.value)}
              className={`px-4 py-2 rounded-xl text-[12px] cursor-pointer font-semibold transition-all ${
                activeCategory === item.value
                  ? "bg-main text-primary-bg shadow-md"
                  : "bg-secondary-bg/60 text-text/70 border border-solid border-main/10 hover:text-text"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search by tech or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 rounded-xl bg-secondary-bg/40 border border-solid border-main/20 text-text text-[12px] focus:outline-none focus:border-main transition-colors"
          />
          <MdOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40 text-[16px]" />
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-text/50 flex items-center justify-center">
          <MdOutlineFolderOpen className="text-[48px] mb-3 block" />
          <p className="text-[14px]">No projects matched your search.</p>
        </div>
      )}
      </div>
    </main>
  );
}