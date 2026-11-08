"use client";

import React from "react";
import { motion } from "framer-motion";

import TitleSec from "../ui/title-sec";
import {
  TECHNICAL_ECOSYSTEM_MAIN,
  TECHNICAL_ECOSYSTEM_SUB,
} from "@/data/constants";

import {
  MainCard,
  SubCard,
} from "../ui/skillsCard";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="
        relative
        w-full
        overflow-hidden
        bg-primary-bg
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[10%]
          h-80
          w-80
          rounded-full
          bg-main/5
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* Section heading */}
        <motion.div
          id="skills-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mb-10
            flex
            flex-col
            items-center
            sm:mb-12
          "
        >
          <TitleSec
            partOne="Technical"
            partTwo="Ecosystem"
          />

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
            The technologies and tools I use to build
            modern, scalable, and high-performance web applications.
          </p>
        </motion.div>

        {/* Main skills */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {TECHNICAL_ECOSYSTEM_MAIN.map((item) => (
            <MainCard
              key={item.id}
              data={item}
            />
          ))}

          {TECHNICAL_ECOSYSTEM_SUB.map((item) => (
            <SubCard
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}