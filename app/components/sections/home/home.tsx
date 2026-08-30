import React from "react";
import MagicImage from "../../ui/magicImage/magicImage";
import ButtonIn from "../../ui/buttonIn/buttonIn";
import "./home.css";
import SocialLink from "../../ui/socialLinks/socialLink";
import { LINK_SOCIAL_MEDIA } from "@/app/data/constants";

export default function Home() {
  return (
    <div id="home" className="px-[10px] sm:px-[90px] lg:pt-30 max-lg:pt-[100px] pb-[20px] h-screen w-full relative">
      <div className="lg:max-w-[55%] max-lg:w-full flex flex-col justify-between items-start h-full">
        <div>
          <h1 className="relative text-[24px] sm:text-[42px] font-bold mb-[10] mt-2.5 text-text">
            Hi,I'm <span className="sm:text-[50px] text-[25px]">Hussam Ahmad</span>
          </h1>
          <div className="mb-7.5 relative w-fit">
            <span className="animate_text">Full-Stack Developer</span>
          </div>
          <span className="text-[14px] sm:text-[16px] mb-12.5 block relative text-text">
            A Full-Stack Developer is someone who creates complete web
            applications by building both the front-end and the back-end. While
            Front-End focuses on the user interface (client-side) and Back-End
            handles the logic and databases (server-side), Full-Stack Developers
            bridge both sides to build fully functional products using
            technologies like HTML, CSS, JavaScript, Node.js, and databases.
          </span>
          <div className="buttons flex gap-8">
            <ButtonIn text="Hire me" inOut={true} />
            <ButtonIn text="Lets Talk" inOut={false} />
          </div>
        </div>
        <div className="flex gap-5">
          {LINK_SOCIAL_MEDIA.map((link) => (
            <SocialLink key={link.url} icon={link.icon} url={link.url} />
          ))}
        </div>
      </div>
      <MagicImage />
    </div>
  );
}