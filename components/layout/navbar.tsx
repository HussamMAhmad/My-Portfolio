"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { LINK_NAV_SECTION } from "@/data/constants";
import { useActiveSection } from "@/hooks/useAtiveSection";

function Navbar() {
  const pathname = usePathname();

  const sectionIds = LINK_NAV_SECTION.map((link) => link.label);
  const activeSection = useActiveSection(sectionIds);

  const active =
    pathname === "/projects" ? "projects" : activeSection;

  const isHomePage = pathname === "/";

  const getSectionHref = (sectionId: string) => {
    if (sectionId === "projects") {
      return "/projects";
    }

    return isHomePage ? `#${sectionId}` : `/?#${sectionId}`;
  };

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-1">
        {LINK_NAV_SECTION.map((link) => {
          const isActive = active === link.label;

          return (
            <motion.li
              key={link.label}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href={getSectionHref(link.label)}
                aria-current={isActive ? "page" : undefined}
                className={`
                  group relative
                  flex items-center
                  rounded-lg
                  px-4 py-2.5
                  text-sm
                  font-medium
                  tracking-wide
                  transition-all duration-300
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-main
                  ${
                    isActive
                      ? "text-main"
                      : "text-text hover:text-main"
                  }
                `}
              >
                <span
                  className="
                    absolute inset-0
                    -z-10
                    rounded-lg
                    bg-transparent
                    transition-all duration-300
                    group-hover:bg-main/5
                  "
                />
                <span className="relative z-10">
                  {link.name}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="desktop-navbar-active"
                    className="
                      absolute
                      bottom-0.5
                      left-1/2
                      h-0.5
                      w-5
                      -translate-x-1/2
                      rounded-full
                      bg-main
                      shadow-[0_0_10px_rgba(0,171,240,0.65)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;