import React from "react";
import Link from "next/link";
import TitleSec from "@/components/ui/title-sec";
import ProjectCard from "../ui/projectCard";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { PROJECTS_DATA } from "@/data/constants";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full section flex flex-col items-center bg-secondary-bg"
    >
      <TitleSec partOne="My" partTwo="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-main/10 border border-main/30 text-main font-semibold text-[14px] hover:bg-main hover:text-primary-bg transition-all duration-300 group shadow-md"
        >
          <span>View All Projects</span>
          <HiOutlineArrowNarrowRight className="text-[20px] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
