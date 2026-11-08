import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import images from "@/public/images";
import "./magicImage.css";

function MagicImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="magic-image"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="wizard-wrapper"
      >
        <Image
          src={images.wizard}
          alt="Hussam Ahmad — Full-Stack Developer"
          className="wizard"
          priority
          sizes="(max-width: 640px) 360px, (max-width: 1024px) 480px, 560px"
        />
      </motion.div>

      <span
        aria-hidden="true"
        className="dot dot-one"
      />

      <span
        aria-hidden="true"
        className="dot dot-two"
      />

      <span
        aria-hidden="true"
        className="dot dot-three"
      />
    </motion.div>
  );
}

export default MagicImage;