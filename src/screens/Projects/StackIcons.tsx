import React from "react";
import { Icon } from "@/data/icons";

type StackIconsProp = {
  icons: Icon[];
};

export const StackIcons: React.FC<StackIconsProp> = ({ icons }) => {
  return (
    <ul className="flex flex-row mb-4">
      {icons.map((icon, index) => {
        const { name, url, alt } = icon;
        return (
          <li className="m-2 flex flex-col place-items-center">
            <img src={url} alt={alt} className="w-10" />
            {/* <p className="text-sm">{name}</p> */}
          </li>
        );
      })}
    </ul>
  );
};
