"use client";

import React from "react";
import Link from "next/link";
import SocialLink from "../ui/socialLinks/socialLink";
import { LINK_SOCIAL_MEDIA } from "@/app/data/constants";
import { FaLongArrowAltUp } from "react-icons/fa";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-secondary-bg/30 border-t border-main/15 pt-16 pb-12 px-4 mt-24 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* الجزء العلوي: الهوية + التنقل + التواصل */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          
          {/* الهوية وحالة التوفر */}
          <div className="flex flex-col items-center md:items-start gap-3 max-w-sm">
            <span className="text-xl font-extrabold tracking-tight text-text">
              Hussam <span className="text-main">Mahmad</span>
            </span>
            <p className="text-text/70 text-xs sm:text-sm leading-relaxed">
              Full-Stack Developer crafting scalable web applications and intuitive digital experiences.
            </p>
            {/* Badge التوفر للعمل */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-main/10 border border-main/20 text-main text-xs font-medium mt-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Available for freelance & full-time roles</span>
            </div>
          </div>

          {/* روابط التنقل السريع */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-main">Navigation</span>
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-text/80">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-main transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* شبكة التواصل الاجتماعي */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-main">Connect</span>
            <div className="flex items-center gap-3">
              {LINK_SOCIAL_MEDIA.map((link) => (
                <SocialLink key={link.url} icon={link.icon} url={link.url} />
              ))}
            </div>
          </div>

        </div>

        {/* خط فاصل سفلي */}
        <div className="w-full h-[1px] bg-main/10" />

        {/* الجزء السفلي: حقوق النشر وزر التمرير */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-text/60">
          <p>
            © {new Date().getFullYear()} Hussam Mahmad. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to Top"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-main/10 border border-main/20 text-main text-xs font-semibold hover:bg-main hover:text-primary-bg transition-all duration-300 cursor-pointer"
          >
            <span>Back to top</span>
            <FaLongArrowAltUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}