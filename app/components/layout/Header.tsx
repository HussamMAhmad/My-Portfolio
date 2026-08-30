"use client";
import Link from "next/link";
import Image from "next/image";
import images from "@/app/public/images";
import { useState } from "react";
import Navbar from "./navbar";
import { Menu , X} from "lucide-react";
import NavbarMobile from "./navbar_mobile/navbar-mobile";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
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
      {toggle && <NavbarMobile putClass={toggle} />}
    </header>
  );
}

export default Header;
