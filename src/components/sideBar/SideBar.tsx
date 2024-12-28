import React from "react";
import { ISideBar } from "./type";

const SideBar = ({ children }: ISideBar) => {
  return (
    <div className="flex w-full">
      <div className="flex-1">sidebar</div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default SideBar;
