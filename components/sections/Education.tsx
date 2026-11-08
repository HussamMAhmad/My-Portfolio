"use client";

import React from "react";
import { motion } from "framer-motion";

import EduCard from "../ui/eduCard";
import TitleSec from "../ui/title-sec";
import { EDUCATION_DATA } from "@/data/constants";

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="
        relative w-full overflow-hidden
        bg-primary-bg
        px-4 py-20
        sm:px-6 sm:py-24
        lg:px-8 lg:py-28
      "
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[-10%] top-[20%]
          h-80 w-80 rounded-full
          bg-main/5 blur-3xl
        "
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center"
        >
          <TitleSec partOne="My" partTwo="Journey" />

          <p className="mt-4 max-w-2xl text-center text-sm leading-7 text-text sm:text-base">
            My academic background and educational experiences
            that have shaped my journey as a developer.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {EDUCATION_DATA.map((item, index) => (
            <EduCard
              key={`${item.period}-${item.title}`}
              data={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}