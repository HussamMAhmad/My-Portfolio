import React from "react";
import { Sections } from "../components/sections";
import Footer from "../components/layout/footer";

function HomeContainer() {
  return (
    <>
      <Sections.Home />
      <Sections.About />
      <Sections.Skills />
      <Sections.Projects />
      <Sections.Education />
      <Sections.Contact />
      <Footer/>
    </>
  );
}

export default HomeContainer;
