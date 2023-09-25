import React from "react";
import { Icon } from "@/data/icons";

type StackIconsProp = {
  icons: Icon[];
};

export const StackIcons: React.FC<StackIconsProp> = ({ icons }) => {
  return (
    <ul className="flex flex-row">
      {icons.map((icon, index) => {
        const { name, url, alt } = icon;
        return (
          <li className="m-2 flex flex-col place-items-center">
            <img src={url} alt={alt} className="w-8" />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
