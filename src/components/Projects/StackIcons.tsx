import React from "react";
import { Icon } from "@/data/icons";

type StackIconsProp = {
  icons: Icon[];
};

export const StackIcons: React.FC<StackIconsProp> = ({ icons }) => {
  return (
    <ul className="flex flex-row bg-primary-1 mb-4">
      {icons.map((icon, index) => {
        const { name, url, alt } = icon;
        return (
          <li className="m-2 flex flex-col place-items-center">
            <img src={url} alt={alt} className="w-8" />
            <p className="text-sm">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
