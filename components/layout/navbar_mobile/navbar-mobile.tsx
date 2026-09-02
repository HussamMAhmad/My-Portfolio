"use client";
import React from "react";
import { LINK_NAV_SECTION } from "@/data/constants";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useAtiveSection";
import "./navbar_mobile.css";
import { usePathname } from "next/navigation";
interface NavbarMobileProp {
  putClass: boolean;
}

function NavbarMobile({ putClass }: NavbarMobileProp) {
  const pathname = usePathname();
  const sectionIds = LINK_NAV_SECTION.map((link) => link.label);
  const activeSection = useActiveSection(sectionIds);
  const active = pathname === "/projects" ? "projects" : activeSection;
  const isHomePage = pathname === "/";
  const getSectionHref = (sectionId: string) => {
    if (sectionId === "projects") return "/projects";
    return isHomePage ? `#${sectionId}` : `/?#${sectionId}`;
  };
  const animationClass = putClass ? "slide-in" : "slide-out";
  return (
    <>
      <ul className={`links-mobile ${animationClass}`}>
        {LINK_NAV_SECTION.map((link) => (
          <li key={link.label}>
            <Link
              href={getSectionHref(link.label)}
              className={`${active === link.label ? "text-main" : "text-text"} hover:text-main  duration-(--main-transition)`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <span className="active-nav"></span>
      </ul>
    </>
  );
}

export default NavbarMobile;
