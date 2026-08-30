import React from "react";

type SkillType = string;

type Prop = {
  skills: SkillType[];
  title: string;
  subtitle?: string;
  description?: string;
};

interface CardProp {
  data: Prop;
}

export function MainCard({ data }: CardProp) {
  return (
    <div className="md:col-span-2 p-6 rounded-3xl bg-primary-bg/50 border-solid border border-main/20 flex flex-col justify-between hover:border-main/50 duration-300 transition-all">
      <div>
        <div className="text-main text-[12px] font-mono uppercase tracking-widest mb-2">
          {data.subtitle}
        </div>
        <h3 className="text-[20px] font-bold text-text mb-4">{data.title}</h3>
        <p className="text-text/70 text-[14px] mb-6">{data.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((s, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-xl bg-main/15 text-main text-[12px] font-semibold border-solid border border-main/30"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SubCard({ data }: CardProp) {
  return (
    <div className="md:col-span-2 p-6 rounded-3xl bg-primary-bg/50 border border-solid border-main/20 hover:border-main/50 duration-300 transition-all">
      <h4 className="text-[20px] font-bold text-text mb-3">{data.title}</h4>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((s, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-lg bg-text/5 text-text/80 text-[12px] border border-solid border-text/10"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
