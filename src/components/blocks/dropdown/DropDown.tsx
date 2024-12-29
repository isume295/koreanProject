"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { DropDownProp } from "./type";

const DropDown = ({
  options,
  defaultSelectedKeys,
  selectStyles,
  insideStyles,
  selectedItemRadius = "rounded-md",
}: DropDownProp) => {
  return (
    <div className="flex items-center">
      <div>
        <Select
          className="text-[14px] font-[400] text-[#333333]"
          classNames={{
            mainWrapper: [`${selectStyles}`],
            trigger: [`${insideStyles} ${selectedItemRadius}`],
            value: ["text-[14px]"],
          }}
          disallowEmptySelection={true}
          defaultSelectedKeys={[defaultSelectedKeys]}
          aria-label="Toggle selection"
        >
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default DropDown;
