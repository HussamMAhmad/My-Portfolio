"use client";
import React from "react";
import { LINK_NAV_SECTION } from "@/app/data/constants";
import Link from "next/link";
import { useActiveSection } from "@/app/hooks/useAtiveSection";
import "./navbar_mobile.css"; 

interface NavbarMobileProp {
  putClass: boolean;
}

function NavbarMobile({ putClass }: NavbarMobileProp) {
  const sectionIds = LINK_NAV_SECTION.map((link) => link.label);
  const active = useActiveSection(sectionIds);
const animationClass = putClass ? "slide-in" : "slide-out";
  return (
    <>
      <ul className={`links-mobile ${animationClass}`}>
        {LINK_NAV_SECTION.map((link) => (
          <li key={link.label}>
            <Link
              href={`#${link.label}`}
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
