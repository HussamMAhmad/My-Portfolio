import React from "react";
import MagicImage from "../../ui/magicImage/magicImage";
import ButtonIn from "../../ui/buttonIn/buttonIn";
import "./home.css";
import SocialLink from "../../ui/socialLinks/socialLink";
import { LINK_SOCIAL_MEDIA } from "@/data/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div
      id="home"
      className="px-[16px] sm:px-[24px] pt-40 sm:pt-28 lg:pt-36 pb-12 h-screen w-full relative"
    >
      <div className="lg:max-w-[55%] max-lg:w-full flex flex-col justify-between items-start h-full">
        <div>
          <h1 className="relative text-[24px] sm:text-[42px] font-bold mb-[10] mt-2.5 text-text">
            Hi,I'm{" "}
            <span className="sm:text-[50px] text-[25px] text-main">
              Hussam Ahmad
            </span>
          </h1>
          <div className="mb-7.5 relative w-fit">
            <span className="animate_text">Full-Stack Developer</span>
          </div>
          <p className="text-[14px] sm:text-[16px] mb-12.5 block relative text-text leading-relaxed">
            Passionate software developer specializing in building scalable
            full-stack web applications. Experienced in crafting reactive user
            interfaces with React & Next.js, and architecting resilient backend
            systems with Node.js, TypeScript, PostgreSQL, and MongoDB.
          </p>
          <div className="buttons flex gap-8">
            <Link href="#contact">
              <ButtonIn text="Hire me" inOut={true} />
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ButtonIn text="My Resume" inOut={false} />
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center pt-4 border-t border-solid border-main/10 w-full sm:w-auto">
          {LINK_SOCIAL_MEDIA.map((link) => (
            <SocialLink key={link.url} icon={link.icon} url={link.url} />
          ))}
        </div>
      </div>
      <MagicImage />
    </div>
  );
}
