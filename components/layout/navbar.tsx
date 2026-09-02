"use client";
import { LINK_NAV_SECTION } from "@/data/constants";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useAtiveSection";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const sectionIds = LINK_NAV_SECTION.map((link) => link.label);
  const activeSection = useActiveSection(sectionIds);
  const active = pathname === "/projects" ? "projects" : activeSection;
  const isHomePage = pathname === "/";
  const getSectionHref = (sectionId: string) => {
    if (sectionId === "projects") return "/projects";
    return isHomePage ? `#${sectionId}` : `/?#${sectionId}`;
  };
  return (
    <ul className="links max-lg:hidden lg:flex">
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
    </ul>
  );
}

export default Navbar;
