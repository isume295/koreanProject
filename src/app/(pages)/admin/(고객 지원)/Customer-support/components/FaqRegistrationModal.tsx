"use client";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import TableModal from "@/src/components/blocks/Modals/TableModal";
import React, { useState } from "react";

export const Register = () => {
  const [selectedFirst, setSelectedFirst] = useState("사용");

  return (
    <div className="flex flex-col gap-[10px] tex-[14px] text-[#333333]">
      <div className="flex flex-row items-center gap-[20px]">
        <p className="w-[80px] flex justify-start">FAQ 타이틀</p>
        <InputNoLabel inputStyles="w-[409px]" />
      </div>
      <div className="flex flex-row items-center gap-[20px]">
        <p className="w-[80px] flex justify-start">FAQ 내용</p>
        <InputNoLabel inputStyles="h-[80px] w-[409px]" />
      </div>
      <div className="flex flex-row gap-[20px]">
        <p className="w-[80px] flex justify-start">상태</p>
        <RadioButton
          options={["사용", "미사용"]}
          selectedValue={selectedFirst}
          onChange={(value) => setSelectedFirst(value)}
          optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
        />
      </div>
    </div>
  );
};
const FaqRegistrationModal = () => {
  return (
    <div className="">
      <TableModal
        content={<Register />}
        disabledButtonLabel={"취소"}
        enabledButtonLabel={"등록"}
        handleDisabledButton={() => {}}
        handleEnabledButton={() => {}}
        height="h-[346px]"
        width="w-[590px]"
      />
    </div>
  );
};

export default FaqRegistrationModal;
