import React from "react";
import EduCard from "../ui/eduCard";
import TitleSec from "../ui/title-sec";
import { EDUCATION_DATA } from "@/app/data/constants";

function Education() {
  return (
    <section
      id="education"
      className="section gap-8 flex justify-evenly items-center flex-col"
    >
      <TitleSec partOne="My" partTwo="Journey" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {EDUCATION_DATA.map((item, index) => (
          <EduCard
            key={index}
            title={item.title}
            period={item.period}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Education;
