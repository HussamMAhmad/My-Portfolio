"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BsCalendarDateFill } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi2";

interface Education {
  period: string;
  title: string;
  subtitle: string;
  description: string;
}

interface EduCardProps {
  data: Education;
  index: number;
}

function EduCard({ data, index }: EduCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.12,
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      className="
        group relative isolate flex h-full min-h-[290px]
        flex-col overflow-hidden rounded-2xl
        bg-secondary-bg/40 p-[1px]
      "
    >
{/* Animated Border Beam */}
{!shouldReduceMotion && (
  <motion.div
    aria-hidden="true"
    className="
      pointer-events-none absolute
      -inset-[100%]
      bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#00abf0_345deg,transparent_360deg)]
    "
    animate={{ rotate: 360 }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    }}
  />
)}

      {/* Card Content */}
      <div
        className="
          relative z-10 flex h-full flex-col
          rounded-[15px] bg-secondary-bg
          p-6
        "
      >
        {/* Period */}
        <div className="mb-6 flex items-center gap-3">
          <div className="
            flex h-10 w-10 items-center justify-center
            rounded-xl border border-main/10
            bg-main/5 text-main
          ">
            <BsCalendarDateFill size={16} />
          </div>

          <span className="text-sm font-semibold text-main">
            {data.period}
          </span>
        </div>

        {/* Icon */}
        <div className="
          mb-4 flex h-11 w-11 items-center justify-center
          rounded-xl bg-main/5 text-main
        ">
          <HiOutlineAcademicCap size={26} />
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-bold leading-snug text-text sm:text-xl">
          {data.title}
        </h3>

        {/* Subtitle */}
        <p className="mb-4 text-sm font-semibold text-main">
          {data.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm leading-7 text-text">
          {data.description}
        </p>

        {/* Bottom Accent */}
        <div className="mt-auto pt-7">
          <div className="h-px w-full overflow-hidden bg-main/10">
            <div
              className="
                h-full w-0 bg-main
                transition-all duration-500
                group-hover:w-full
              "
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default EduCard;