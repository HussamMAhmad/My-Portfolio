import React from "react";
import { BsCalendarDateFill } from "react-icons/bs";

interface Education {
  period: string;
  title: string;
  subtitle: string;
  description: string;
}

function EduCard({ data }: { data: Education }) {
  return (
    <div className="relative p-6 rounded-2xl bg-secondary-bg/40 border border-main/20 hover:border-main/60 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1">
      <div>
        <div className="flex items-center gap-2 text-main text-[12px] sm:text-[14px] font-semibold mb-3">
          <BsCalendarDateFill />
          <span>{data.period}</span>
        </div>
        <h3 className="text-[16px] sm:text-[20px] font-bold text-text mb-1">
          {data.title}
        </h3>
        <p className="text-[10px] sm:text-[12px] font-medium text-main/80 mb-4">
          {data.subtitle}
        </p>
        <p className="text-text/70 text-[12px] md:text-[14px] leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default EduCard;
