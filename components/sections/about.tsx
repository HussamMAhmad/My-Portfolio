"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ButtonIn from "@/components/ui/buttonIn/buttonIn";
import images from "@/public/images";
import TitleSec from "@/components/ui/title-sec";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-title"
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
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-10%]
          top-[15%]
          h-72
          w-72
          rounded-full
          bg-main/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-15%]
          right-[-10%]
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
          grid
          w-full
          max-w-7xl
          items-center
          gap-12
          lg:grid-cols-[0.85fr_1.15fr]
          lg:gap-20
        "
      >
        {/* =========================
            Image
        ========================= */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            flex
            w-full
            max-w-md
            items-center
            justify-center
          "
        >
          {/* Outer decorative ring */}
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              aspect-square
              w-[88%]
              rounded-full
              border
              border-dashed
              border-main/30
            "
          />

          {/* Inner glow */}
          <div
            aria-hidden="true"
            className="
              absolute
              h-[65%]
              w-[65%]
              rounded-full
              bg-main/10
              blur-3xl
            "
          />

          {/* Image */}
          <div
            className="
              relative
              aspect-square
              w-[78%]
              overflow-hidden
              rounded-full
              border-2
              border-main/50
              bg-primary-bg
              shadow-2xl
              shadow-black/20
            "
          >
            <Image
              src={images.about}
              alt="Hussam Ahmad"
              fill
              sizes="
                (max-width: 640px) 70vw,
                (max-width: 1024px) 45vw,
                400px
              "
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            {/* Image overlay */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-primary-bg/20
                via-transparent
                to-transparent
              "
            />
          </div>

          {/* Floating accent */}
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[12%]
              right-[5%]
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-main/30
              bg-primary-bg
              text-main
              shadow-lg
              shadow-black/20
            "
          >
            <span className="h-2 w-2 rounded-full bg-main shadow-[0_0_12px_rgba(0,171,240,0.8)]" />
          </motion.div>
        </motion.div>

        {/* =========================
            Content
        ========================= */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            flex-col
            items-start
          "
        >
          <div id="about-title">
            <TitleSec
              partOne="About"
              partTwo="me"
            />
          </div>

          <h3
            className="
              mb-5
              mt-4
              text-lg
              font-semibold
              text-text
              sm:text-xl
              lg:text-2xl
            "
          >
            Full-Stack Developer
          </h3>

          <p
            className="
              max-w-3xl
              text-sm
              leading-7
              text-text
              sm:text-base
              sm:leading-8
            "
          >
            I am a passionate Full-Stack Developer with solid
            expertise in building modern, interactive web
            applications. My technical foundation covers crafting
            responsive UI/UX with HTML, CSS, JavaScript, React,
            Next.js, and Tailwind CSS, alongside architecting
            robust backend APIs and databases.
          </p>

          {/* Expanded content */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                <p
                  className="
                    mt-4
                    max-w-3xl
                    text-sm
                    leading-7
                    text-text
                    sm:text-base
                    sm:leading-8
                  "
                >
                  I specialize in transforming complex design
                  mockups into seamless, accessible, and
                  high-performance digital solutions. By combining
                  frontend artistry with solid server-side logic,
                  I build end-to-end applications optimized for
                  scalability, security, and exceptional user
                  experience.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* =========================
              Stats
          ========================= */}
          <div
            className="
              my-8
              grid
              w-full
              grid-cols-3
              gap-3
              sm:my-10
              sm:gap-4
            "
          >
            <div
              className="
                group
                rounded-xl
                border
                border-main/10
                bg-primary-bg/70
                p-4
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-main/30
                hover:bg-main/5
              "
            >
              <span
                className="
                  block
                  text-xl
                  font-bold
                  text-main
                  sm:text-2xl
                "
              >
                3+
              </span>

              <span
                className="
                  mt-1
                  block
                  text-[10px]
                  font-medium
                  text-text
                  sm:text-xs
                "
              >
                Years Experience
              </span>
            </div>

            <div
              className="
                group
                rounded-xl
                border
                border-main/10
                bg-primary-bg/70
                p-4
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-main/30
                hover:bg-main/5
              "
            >
              <span
                className="
                  block
                  text-xl
                  font-bold
                  text-main
                  sm:text-2xl
                "
              >
                15+
              </span>

              <span
                className="
                  mt-1
                  block
                  text-[10px]
                  font-medium
                  text-text
                  sm:text-xs
                "
              >
                Projects Built
              </span>
            </div>

            <div
              className="
                group
                rounded-xl
                border
                border-main/10
                bg-primary-bg/70
                p-4
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-main/30
                hover:bg-main/5
              "
            >
              <span
                className="
                  block
                  text-xl
                  font-bold
                  text-main
                  sm:text-2xl
                "
              >
                100%
              </span>

              <span
                className="
                  mt-1
                  block
                  text-[10px]
                  font-medium
                  text-text
                  sm:text-xs
                "
              >
                Responsive Code
              </span>
            </div>
          </div>

          {/* Read more */}
          <div className="flex w-full justify-center sm:justify-start">
            <ButtonIn
              text={isExpanded ? "Show Less" : "Read More"}
              inOut={true}
              onClick={() => setIsExpanded((prev) => !prev)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}