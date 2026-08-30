import React from "react";
import About from "./components/sections/about";
import { Sections } from "./components/sections";

function HomeContainer() {
  return (
    <>
      <Sections.Home />
      <Sections.About />
      <Sections.Education />
      <Sections.Skills />
    </>
  );
}

export default HomeContainer;
