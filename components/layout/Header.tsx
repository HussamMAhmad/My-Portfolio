"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import images from "@/public/images";
import Navbar from "./navbar";
import NavbarMobile from "./navbar_mobile/navbar-mobile";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const isProjectsPage = pathname === "/projects";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const showSolidBackground = isScrolled || isProjectsPage;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            showSolidBackground
              ? "bg-primary-bg/90 backdrop-blur-xl shadow-lg shadow-black/10"
              : "bg-transparent"
          }
        `}
      >
        <div
          className={`
            mx-auto flex h-20 max-w-7xl items-center
            justify-between px-5 sm:px-8 lg:px-10
            transition-all duration-300
            ${isScrolled ? "h-[68px]" : "h-20"}
          `}
        >
          <Link
            href="/"
            aria-label="Web Wizerd - Home"
            className="group relative flex items-center gap-1"
          >
            <motion.div
              whileHover={{ rotate: -5, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative"
            >
              <Image
                src={images.icon}
                alt=""
                width={64}
                height={67}
                priority
                className="
                  h-11 w-11
                  sm:h-12 sm:w-12
                  object-contain
                "
              />
            </motion.div>

            <Image
              src={images.webWizerd}
              alt="Web Wizerd"
              width={100}
              height={50}
              priority
              className="
                h-auto w-[78px]
                sm:w-[90px]
                object-contain
              "
            />
          </Link>

          <div className="hidden lg:block">
            <Navbar />
          </div>

          <motion.button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            className="
              relative z-[60]
              flex h-11 w-11
              items-center justify-center
              rounded-xl
              border border-white/10
              bg-secondary-bg/60
              text-text
              backdrop-blur-md
              transition-all duration-300
              hover:border-main/40
              hover:bg-main/10
              hover:text-main
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-main
              lg:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={23} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={23} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
              className="
                fixed inset-0 z-40
                bg-black/50
                backdrop-blur-sm
                lg:hidden
              "
              aria-hidden="true"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed left-4 right-4 top-[76px]
                z-50
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-primary-bg/95
                shadow-2xl shadow-black/30
                backdrop-blur-2xl
                lg:hidden
              "
            >
              <NavbarMobile putClass={isMenuOpen} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
