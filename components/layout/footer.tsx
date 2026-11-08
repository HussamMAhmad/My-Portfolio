"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import SocialLink from "../ui/socialLinks/socialLink";
import {
  LINK_SOCIAL_MEDIA,
  LINK_NAV_SECTION,
} from "@/data/constants";
import { FaLongArrowAltUp } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Footer() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "instant" : "smooth",
    });
  };

  const getNavHref = (label: string) => {
    if (label === "projects") return "/projects";

    return pathname === "/" ? `#${label}` : `/#${label}`;
  };

  return (
    <footer className="relative mt-20 w-full overflow-hidden border-t border-main/15 bg-primary-bg">

      {/* Top Accent */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-main/60 to-transparent"
      />

      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-main/5 blur-[100px]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="flex flex-col items-center gap-4 sm:items-start"
          >
            <Link
              href="/"
              aria-label="Go to homepage"
              className="text-2xl font-extrabold tracking-tight text-text transition-colors hover:text-main"
            >
              Hussam <span className="text-main">Ahmad.</span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-text">
              Full-Stack Developer crafting scalable web applications and
              intuitive digital experiences with modern technologies.
            </p>

            {/* Availability */}
            <div className="inline-flex items-center gap-2 rounded-full border border-main/15 bg-main/5 px-3.5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="text-xs font-medium text-text">
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="flex flex-col items-center gap-5 sm:items-start"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-main">
              Navigation
            </h3>

            <ul className="flex flex-col items-center gap-4 sm:items-start">
              {LINK_NAV_SECTION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={getNavHref(item.label)}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-text transition-colors duration-300 hover:text-main"
                  >
                    <span className="h-1 w-1 rounded-full bg-main/40 transition-all duration-300 group-hover:h-1.5 group-hover:w-1.5 group-hover:bg-main" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="flex flex-col items-center gap-5 sm:items-start"
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-main">
              Let's Connect
            </h3>

            <p className="max-w-[240px] text-center text-sm leading-6 text-text sm:text-left">
              Have a project in mind? Let's create something meaningful together.
            </p>

            <div className="flex items-center gap-3">
              {LINK_SOCIAL_MEDIA.map((link) => (
                <SocialLink
                  key={link.url}
                  icon={link.icon}
                  url={link.url}
                />
              ))}
            </div>

            <Link
              href={getNavHref("contact")}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-main transition-colors hover:text-text"
            >
              Get in touch
              <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-main/20 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col-reverse items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

          <p className="text-xs leading-relaxed text-text">
            © {new Date().getFullYear()} Hussam Ahmad. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="
              group inline-flex items-center gap-3
              rounded-xl border border-main/20 bg-main/5
              px-4 py-2.5 text-xs font-semibold text-main
              transition-all duration-300
              hover:-translate-y-1 hover:border-main
              hover:bg-main hover:text-primary-bg
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-main focus-visible:ring-offset-2
              focus-visible:ring-offset-primary-bg
            "
          >
            Back to top

            <FaLongArrowAltUp className="text-sm transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}