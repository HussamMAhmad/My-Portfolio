"use client";

import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS_DATA } from "@/data/data-projects";
import TitleSec from "@/components/ui/title-sec";
import ProjectCard from "@/components/ui/projectCard";
import { CATEGORIES } from "@/data/constants";

import {
  MdOutlineSearch,
  MdOutlineFolderOpen,
  MdClose,
  MdFilterList,
} from "react-icons/md";

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        activeCategory === "all" ||
        project.category === activeCategory;

      const searchableContent = [
        project.title,
        project.description,
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedSearch ||
        searchableContent.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleReset = () => {
    setActiveCategory("all");
    setSearchQuery("");
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <main className="min-h-screen w-full bg-secondary-bg px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8">

      <div className="mx-auto w-full max-w-7xl">

        {/* Page Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mb-12 flex flex-col items-center text-center"
        >
          <TitleSec partOne="All" partTwo="Projects" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-text sm:text-base">
            Explore a complete collection of my full-stack applications,
            front-end interfaces, and technical experiments.
          </p>

          {/* Projects Counter */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-main/20 bg-main/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-main" />

            <span className="text-xs font-semibold text-main">
              {PROJECTS_DATA.length} Projects in Portfolio
            </span>
          </div>
        </motion.div>

        {/* Filters & Search */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="
            mb-10 rounded-2xl
            border border-main/15
            bg-primary-bg/40
            p-4 sm:p-5
          "
        >
          <div className="flex flex-col gap-6">

            {/* Filter Header */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-center gap-2">
                <MdFilterList className="text-xl text-main" />

                <span className="text-sm font-bold text-text">
                  Explore Projects
                </span>
              </div>

              {/* Search */}
              <div className="relative w-full lg:max-w-sm">
                <label htmlFor="project-search" className="sr-only">
                  Search projects by name, description, or technology
                </label>

                <input
                  id="project-search"
                  type="search"
                  placeholder="Search projects or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="
                    w-full rounded-xl
                    border border-main/15
                    bg-secondary-bg/60
                    py-3 pl-11 pr-11
                    text-sm text-text
                    placeholder:text-text/40
                    outline-none transition-all duration-300
                    hover:border-main/30
                    focus:border-main focus:ring-2 focus:ring-main/10
                  "
                />

                <MdOutlineSearch
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute left-3.5 top-1/2
                    -translate-y-1/2 text-xl text-main/70
                  "
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="
                      absolute right-3 top-1/2
                      -translate-y-1/2 rounded-md
                      p-1 text-text/50 transition-colors
                      hover:text-main
                    "
                  >
                    <MdClose className="text-lg" />
                  </button>
                )}
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((item) => {
                const isActive = activeCategory === item.value;

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setActiveCategory(item.value)}
                    aria-pressed={isActive}
                    className={`
                      rounded-xl border px-4 py-2.5
                      text-xs font-semibold
                      transition-all duration-300
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-main
                      ${
                        isActive
                          ? "border-main bg-main text-primary-bg shadow-[0_4px_15px_rgba(0,171,240,0.15)]"
                          : "border-main/10 bg-secondary-bg/60 text-text hover:border-main/40 hover:bg-main/5 hover:text-main"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

          </div>
        </motion.div>

        {/* Results Information */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-text">
            Showing{" "}
            <span className="font-bold text-main">
              {filteredProjects.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-text">
              {PROJECTS_DATA.length}
            </span>{" "}
            projects
          </p>

          {(activeCategory !== "all" || searchQuery) && (
            <button
              type="button"
              onClick={handleReset}
              className="
                text-xs font-semibold text-text/60
                transition-colors hover:text-main
              "
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            key={`${activeCategory}-${searchQuery}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              grid grid-cols-1 gap-6
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (

          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              flex min-h-[350px] flex-col
              items-center justify-center
              rounded-3xl border border-dashed
              border-main/20 bg-primary-bg/30
              px-5 py-16 text-center
            "
          >
            <div className="
              mb-5 flex h-20 w-20
              items-center justify-center
              rounded-2xl border border-main/15
              bg-main/5 text-main
            ">
              <MdOutlineFolderOpen className="text-4xl" />
            </div>

            <h3 className="text-xl font-bold text-text">
              No Projects Found
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-7 text-text">
              We couldn't find any projects matching your current search
              or selected category. Try changing your filters.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="
                mt-7 rounded-xl bg-main
                px-6 py-3 text-sm font-bold
                text-primary-bg transition-all
                duration-300 hover:-translate-y-0.5
                hover:shadow-[0_8px_20px_rgba(0,171,240,0.2)]
              "
            >
              Show All Projects
            </button>
          </motion.div>
        )}

      </div>
    </main>
  );
}