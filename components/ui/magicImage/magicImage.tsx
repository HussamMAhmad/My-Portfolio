import React from "react";
import Image from "next/image";
import images from "@/public/images";
import "./magicImage.css";

function MagicImage() {
  return (
    <div className="image max-lg:hidden">
      <Image
        src={images.wizard}
        alt="wizard"
        className="wizard"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

export default MagicImage;
