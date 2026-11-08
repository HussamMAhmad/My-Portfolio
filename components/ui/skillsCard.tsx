"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type SkillData = {
  id?: string;
  skills: string[];
  title: string;
  subtitle?: string;
  description?: string;
};

interface CardProp {
  data: SkillData;
}

export function MainCard({ data }: CardProp) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -4 }
      }
      className="
        group
        relative
        flex
        min-h-[250px]
        flex-col
        justify-between
        overflow-hidden
        rounded-2xl
        border
        border-main/10
        bg-secondary-bg/40
        p-5
        transition-colors
        duration-300
        hover:border-main/25
        hover:bg-secondary-bg/70
        sm:p-6
        md:col-span-2
      "
    >
      {/* Subtle accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-28
          w-28
          rounded-full
          bg-main/5
          blur-2xl
          transition-colors
          duration-300
          group-hover:bg-main/10
        "
      />

      <div className="relative z-10">
        {data.subtitle && (
          <span
            className="
              mb-3
              block
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-main
              sm:text-xs
            "
          >
            {data.subtitle}
          </span>
        )}

        <h3
          className="
            mb-3
            text-lg
            font-bold
            tracking-tight
            text-text
            sm:text-xl
          "
        >
          {data.title}
        </h3>

        {data.description && (
          <p
            className="
              max-w-2xl
              text-sm
              leading-7
              text-text
              sm:text-base
            "
          >
            {data.description}
          </p>
        )}
      </div>

      <div className="relative z-10 mt-7 flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-lg
              border
              border-main/10
              bg-main/5
              px-3
              py-1.5
              text-[10px]
              font-medium
              text-main
              transition-colors
              duration-300
              hover:border-main/25
              hover:bg-main/10
              sm:text-xs
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function SubCard({ data }: CardProp) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 15 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -3 }
      }
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-main/10
        bg-secondary-bg/25
        p-5
        transition-colors
        duration-300
        hover:border-main/25
        hover:bg-secondary-bg/50
        sm:p-6
        md:col-span-2
      "
    >
      <h4
        className="
          mb-5
          text-lg
          font-bold
          tracking-tight
          text-text
          sm:text-xl
        "
      >
        {data.title}
      </h4>

      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-lg
              border
              border-text/10
              bg-text/5
              px-3
              py-1.5
              text-[10px]
              font-medium
              text-text
              transition-colors
              duration-300
              hover:border-main/20
              hover:bg-main/5
              hover:text-main
              sm:text-xs
            "
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-main
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.article>
  );
}