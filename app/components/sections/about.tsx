"use client";

import React, { useState } from "react";
import Image from "next/image";
import ButtonIn from "../ui/buttonIn/buttonIn";
import images from "@/app/public/images";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen section flex items-center justify-center bg-secondary-bg"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        <div className="relative w-full max-w-100 aspect-square flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-main animate-spin-slow" />
          <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-main shadow-lg">
            <Image
              src={images.about}
              alt="Hussam Ahmad"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 max-w-[650px] flex flex-col items-start">
          <h2 className="text-[32px] sm:text-[45px] font-bold text-text mb-2">
            About <span className="text-main">Me</span>
          </h2>

          <h3 className="text-[18px] sm:text-[22px] font-semibold text-text mb-4">
            Full-Stack Developer
          </h3>

          <p className="text-[14px] sm:text-[16px] text-text/80 leading-relaxed mb-4">
            I am a passionate Full-Stack Developer with solid expertise in
            building modern, interactive web applications. My technical
            foundation covers crafting responsive UI/UX with HTML, CSS,
            JavaScript, React, Next.js, and Tailwind CSS, alongside architecting
            robust backend APIs and databases.
          </p>

          {isExpanded && (
            <p className="text-[14px] sm:text-[16px] text-text/80 leading-relaxed mb-4 animate-fade-in">
              I specialize in transforming complex design mockups into seamless,
              accessible, and high-performance digital solutions. By combining
              frontend artistry with solid server-side logic, I build end-to-end
              applications optimized for scalability, security, and exceptional
              user experience.
            </p>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full my-6">
            <div className="p-4 border border-main/30 rounded-lg text-center bg-primary-bg">
              <span className="block lg:text-2xl text-[20px] font-bold text-main">3+</span>
              <span className="lg:text-xs text-[10px] text-text">Years Experience</span>
            </div>
            <div className="p-4 border border-main/30 rounded-lg text-center bg-primary-bg">
              <span className="block lg:text-2xl text-[20px] font-bold text-main">30+</span>
              <span className="lg:text-xs text-[10px] text-text">Projects Built</span>
            </div>
            <div className="p-4 border border-main/30 rounded-lg text-center bg-primary-bg">
              <span className="block lg:text-2xl text-[20px] font-bold text-main">100%</span>
              <span className="lg:text-xs text-[10px] text-text">Responsive Code</span>
            </div>
          </div>

          <div className="flex justify-center items-center w-full">
            <ButtonIn
              text={isExpanded ? "Show Less" : "Read More"}
              inOut={true}
              onClick={() => setIsExpanded(!isExpanded)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
