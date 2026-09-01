"use client";
import { LINK_NAV_SECTION } from "@/data/constants";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useAtiveSection";

function Navbar() {
  const sectionIds = LINK_NAV_SECTION.map((link) => link.label);
  const active = useActiveSection(sectionIds);

  return (
    <ul className="links max-lg:hidden lg:flex">
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
    </ul>
  );
}

export default Navbar;
