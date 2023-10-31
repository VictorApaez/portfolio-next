import React from "react";

type SectionHeaderProps = {
  header: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ header }) => {
  return (
    <div className="flex place-items-center md:ml-20 ml-4 relative z-10 text-content-header">
      <h1 className="text-5xl md:text-5xl">{header}</h1>
      <div
        className="ml-2 md:ml-5 w-1/4 md:w-1/3 h-[3px]"
        style={{ backgroundColor: "#eb3a22" }}
      ></div>
    </div>
  );
};
