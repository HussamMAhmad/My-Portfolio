import React from "react";
import Image from "next/image";
import images from "@/app/public/images";
import "./magicImage.css"

function MagicImage() {
  return (
    <div className="image max-lg:hidden">
      <Image src={images.wizard} alt="wizard" className="wizard"/>
    </div>
  );
}

export default MagicImage;
