import React from "react";

interface Title {
  partOne: string;
  partTwo: string;
}

function TitleSec({ partOne, partTwo }: Title) {
  return (
    <h2 className="text-[32px] sm:text-[45px] font-bold text-text mb-2">
      {partOne} <span className="text-main">{partTwo}</span>
    </h2>
  );
}

export default TitleSec;
