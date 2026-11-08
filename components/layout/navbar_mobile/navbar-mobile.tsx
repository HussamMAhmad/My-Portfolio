"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { LINK_NAV_SECTION } from "@/data/constants";
import { useActiveSection } from "@/hooks/useAtiveSection";

interface NavbarMobileProps {
  putClass: boolean;
}

function NavbarMobile({ putClass }: NavbarMobileProps) {
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
    <nav
      aria-label="Mobile navigation"
      className="w-full p-5 sm:p-6"
    >
      <motion.ul
        initial="hidden"
        animate={putClass ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.06,
              delayChildren: 0.08,
            },
          },
        }}
        className="flex flex-col gap-2"
      >
        {LINK_NAV_SECTION.map((link) => {
          const isActive = active === link.label;
          return (
            <motion.li
              key={link.label}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <Link
                href={getSectionHref(link.label)}
                className={`
                  group relative
                  flex items-center
                  overflow-hidden
                  rounded-xl
                  px-4 py-3.5
                  text-base font-medium
                  transition-all duration-300
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-main
                  ${
                    isActive
                      ? "bg-main/10 text-main"
                      : "text-text hover:bg-white/5 hover:text-main"
                  }
                `}
              >
                <span
                  className={`
                    absolute left-0 top-1/2
                    h-6 w-1
                    -translate-y-1/2
                    rounded-r-full
                    bg-main
                    transition-all duration-300
                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                />

                <span
                  className="
                    absolute inset-y-0 left-0
                    w-0
                    bg-main/5
                    transition-all duration-300
                    group-hover:w-full
                  "
                />

                <span className="relative z-10">
                  {link.name}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="mobile-active-dot"
                    className="
                      relative z-10
                      ml-auto
                      h-2 w-2
                      rounded-full
                      bg-main
                      shadow-[0_0_12px_rgba(0,171,240,0.7)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={
          putClass
            ? {
                scaleX: 1,
                opacity: 1,
              }
            : {
                scaleX: 0,
                opacity: 0,
              }
        }
        transition={{
          duration: 0.5,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-5
          h-px
          origin-left
          bg-gradient-to-r
          from-main
          via-main/30
          to-transparent
        "
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={
          putClass
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: 8,
              }
        }
        transition={{
          duration: 0.4,
          delay: 0.35,
        }}
        className="
          mt-4
          px-1
          text-xs
          tracking-wide
          text-text/40
        "
      >
        Web Wizard
      </motion.p>
    </nav>
  );
}

export default NavbarMobile;