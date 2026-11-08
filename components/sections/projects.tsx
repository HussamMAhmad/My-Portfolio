"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import TitleSec from "@/components/ui/title-sec";
import ProjectCard from "../ui/projectCard";
import { TOP_PROJECTS } from "@/data/data-projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-secondary-bg
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          id="projects-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex flex-col items-center sm:mb-12"
        >
          <TitleSec partOne="My" partTwo="Projects" />

          <p
            className="
              mt-4
              max-w-2xl
              text-center
              text-sm
              leading-7
              text-text
              sm:text-base
            "
          >
            A selection of projects built with modern technologies,
            thoughtful architecture, and a focus on real-world usability.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {TOP_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
            delay: 0.1,
          }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <Link
            href="/projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              border
              border-main/20
              bg-main/5
              px-6
              py-3
              text-sm
              font-semibold
              text-main
              transition-all
              duration-300

              hover:border-main
              hover:bg-main
              hover:text-primary-bg

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-main
              focus-visible:ring-offset-2
              focus-visible:ring-offset-secondary-bg

              sm:px-7
              sm:py-3.5
            "
          >
            <span>View All Projects</span>

            <HiOutlineArrowNarrowRight
              aria-hidden="true"
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}