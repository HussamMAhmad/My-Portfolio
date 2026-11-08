"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Loading() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="
      relative flex min-h-screen w-full
      flex-col items-center justify-center
      overflow-hidden bg-primary-bg
      px-5 py-12 text-text
    ">

      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2
          rounded-full bg-main/5 blur-[120px]
        "
      />

      {/* Loading Content */}
      <div className="relative z-10 flex w-full max-w-xl flex-col items-center">

        {/* Animated Logo */}
        <div className="relative mb-12 flex h-28 w-28 items-center justify-center">

          {/* Outer Ring */}
          <div className="
            absolute inset-0 rounded-full
            border border-main/10
          " />

          {/* Rotating Ring */}
          <motion.div
            aria-hidden="true"
            className="
              absolute inset-0 rounded-full
              border-[3px] border-transparent
              border-t-main border-r-main/40
            "
            animate={
              shouldReduceMotion
                ? undefined
                : { rotate: 360 }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner Ring */}
          <div className="
            absolute inset-3 rounded-full
            border border-main/15
          " />

          {/* Logo */}
          <span className="
            relative font-mono text-2xl
            font-bold tracking-tight text-main
          ">
            &lt;/&gt;
          </span>

          {/* Decorative Dots */}
          <span className="
            absolute -right-1 top-5
            h-2 w-2 rounded-full bg-main
            shadow-[0_0_12px_rgba(0,171,240,0.7)]
          " />

          <span className="
            absolute -bottom-1 left-5
            h-1.5 w-1.5 rounded-full bg-main/50
          " />
        </div>

        {/* Skeleton Card */}
        <div className="
          w-full overflow-hidden rounded-3xl
          border border-main/15
          bg-secondary-bg/50
          p-6 shadow-2xl backdrop-blur-xl
          sm:p-8
        ">

          {/* Header */}
          <div className="mb-7 flex items-center justify-between">
            <div className="
              h-7 w-2/5 rounded-lg
              bg-main/15
              animate-pulse
            " />

            <div className="
              h-8 w-8 rounded-xl
              border border-main/10
              bg-main/5
            " />
          </div>

          {/* Text Skeleton */}
          <div className="space-y-4">
            <div className="h-3.5 w-full rounded-full bg-main/10 animate-pulse" />
            <div className="h-3.5 w-11/12 rounded-full bg-main/10 animate-pulse" />
            <div className="h-3.5 w-4/5 rounded-full bg-main/10 animate-pulse" />
            <div className="h-3.5 w-2/3 rounded-full bg-main/10 animate-pulse" />
          </div>

          {/* Tags Skeleton */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="h-8 w-20 rounded-lg bg-main/10 animate-pulse" />
            <div className="h-8 w-24 rounded-lg bg-main/10 animate-pulse" />
            <div className="h-8 w-16 rounded-lg bg-main/10 animate-pulse" />
          </div>

          {/* Progress Bar */}
          <div className="mt-9">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-text">
                Loading Content
              </span>

              <span className="font-mono text-[10px] text-main">
                Please wait
              </span>
            </div>

            <div className="
              h-1.5 w-full overflow-hidden
              rounded-full bg-main/10
            ">
              <motion.div
                className="
                  h-full w-1/3 rounded-full
                  bg-main shadow-[0_0_12px_rgba(0,171,240,0.5)]
                "
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { x: ["-100%", "300%"] }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>

        {/* Loading Status */}
        <div className="mt-9 flex flex-col items-center gap-3">

          <div className="flex items-center gap-3">
            <span className="
              h-1.5 w-1.5 rounded-full bg-main
              shadow-[0_0_10px_rgba(0,171,240,0.7)]
            " />

            <p className="
              font-mono text-xs font-medium
              uppercase tracking-[0.2em] text-text
            ">
              Initializing Experience
            </p>
          </div>

          <p className="text-center text-[11px] text-text">
            Preparing something amazing for you.
          </p>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="
        absolute bottom-6 left-0 right-0
        text-center font-mono text-[10px]
        tracking-widest text-text
      ">
        WEB WIZARD <span className="text-main">©</span> {new Date().getFullYear()}
      </div>

    </main>
  );
}