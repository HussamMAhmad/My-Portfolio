import React from "react";
import TitleSec from "../ui/title-sec";
import {
  TECHNICAL_ECOSYSTEM_MAIN,
  TECHNICAL_ECOSYSTEM_SUB,
} from "@/data/constants";
import { MainCard, SubCard } from "../ui/skillsCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full section mx-auto justify-center flex items-center flex-col gap-8 bg-primary-bg"
    >
      <TitleSec partOne="Technical" partTwo="Ecosystem" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {TECHNICAL_ECOSYSTEM_MAIN.map((item) => (
          <MainCard key={item.id} data={item} />
        ))}
        {TECHNICAL_ECOSYSTEM_SUB.map((item) => (
          <SubCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
