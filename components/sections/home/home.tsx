"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import MagicImage from "../../ui/magicImage/magicImage";
import ButtonIn from "../../ui/buttonIn/buttonIn";
import SocialLink from "../../ui/socialLinks/socialLink";
import { LINK_SOCIAL_MEDIA } from "@/data/constants";
import "./home.css";

export default function Home() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        px-4
        pb-10
        pt-28
        sm:px-6
        sm:pt-32
        lg:px-8
        lg:pt-28
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-[-15%]
            top-[15%]
            h-72
            w-72
            rounded-full
            bg-main/5
            blur-3xl
            sm:h-96
            sm:w-96
          "
        />

        <div
          className="
            absolute
            bottom-[-10%]
            right-[-10%]
            h-80
            w-80
            rounded-full
            bg-main/5
            blur-3xl
            sm:h-[28rem]
            sm:w-[28rem]
          "
        />
      </div>

      <div
        className="
          mx-auto
          grid
          min-h-[calc(100svh-7rem)]
          w-full
          max-w-7xl
          items-center
          gap-12
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-8
        "
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            flex-col
            items-start
            justify-center
          "
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              mb-3
              text-sm
              font-medium
              tracking-[0.18em]
              text-main
              uppercase
              sm:text-base
            "
          >
            Welcome to my portfolio
          </motion.p>

          {/* Heading */}
          <h1
            id="home-title"
            className="
              max-w-3xl
              text-3xl
              font-bold
              leading-[1.15]
              tracking-tight
              text-text
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Hi, I&apos;m <span className="text-main">Hussam Ahmad</span>
          </h1>

          {/* Animated role */}
          <div className="mt-4 mb-6 relative w-fit">
            <span className="animate_text">Full-Stack Developer</span>
          </div>

          {/* Description */}
          <p
            className="
              max-w-2xl
              text-sm
              leading-7
              text-text
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            Passionate software developer specializing in building scalable
            full-stack web applications. Experienced in crafting reactive user
            interfaces with React & Next.js, and architecting resilient backend
            systems with Node.js, TypeScript, PostgreSQL, and MongoDB.
          </p>

          {/* Actions */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-4
              sm:mt-10
              sm:gap-5
            "
          >
            <ButtonIn text="Hire me" inOut={true} contact={true} />

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
              aria-label="Open Hussam Ahmad resume"
            >
              <ButtonIn text="My Resume" inOut={false} />
            </Link>
          </div>

          <div
            className="
              mt-10
              flex
              w-full
              items-center
              gap-4
              border-t
              border-main/10
              pt-5
              sm:mt-12
              sm:w-auto
              sm:pr-12
            "
          >
            {LINK_SOCIAL_MEDIA.map((link) => (
              <SocialLink key={link.url} icon={link.icon} url={link.url} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            items-center
            justify-center
            lg:justify-end
          "
        >
          <MagicImage />
        </motion.div>
      </div>
    </section>
  );
}
