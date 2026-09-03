import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import "./socialLink.css";

interface ButtonPorps {
  icon?: IconType;
  url: string;
}

function SocialLink({ icon: Icon, url }: ButtonPorps) {
  if (!Icon) return null;

  return (
    <Link href={url} target="_blank" className="link">
      <Icon className="icon" />
    </Link>
  );
}

export default SocialLink;
