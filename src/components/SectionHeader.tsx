import React from "react";

type SectionHeaderProps = {
  header: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ header }) => {
  return (
    <div className="flex place-items-center mb-20 ml-20 relative z-10 text-content-header">
      <h1 className="text-5xl">{header}</h1>
      <div className="ml-5 w-1/3 h-[3px] bg-accent-2"></div>
    </div>
  );
};
