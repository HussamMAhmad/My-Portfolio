"use client";
import Link from "next/link";
import Image from "next/image";
import images from "@/public/images";
import { useState , useEffect} from "react";
import Navbar from "./navbar";
import { Menu, X } from "lucide-react";
import NavbarMobile from "./navbar_mobile/navbar-mobile";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickyClass = isSticky ? "bg-primary-bg" : "bg-transparent";
  return (
    <header className={`header ${stickyClass} transition-colors duration-300`}>
      <Link href="#home" className="logo">
        <Image
          src={images.icon}
          alt="Web Wizerd logo"
          className="w-12.5 h-12.5"
          priority
        />
        <Image
          src={images.webWizerd}
          alt="Web Wizerd logo"
          className="w-25 h-12.5"
          priority
        />
      </Link>
      <Navbar />
      <div className="lg:hidden">
        {toggle ? (
          <X className="text-text" onClick={() => setToggle(false)} />
        ) : (
          <Menu className="text-text" onClick={() => setToggle(true)} />
        )}
      </div>
      <div
        className={`fixed inset-x-0 transition-all lg:hidden
      ${toggle ? " pointer-events-auto" : "  pointer-events-none"}
        `}
      >
        <NavbarMobile putClass={toggle} />
      </div>
    </header>
  );
}

export default Header;
