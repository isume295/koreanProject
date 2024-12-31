import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import TextInput from "@/src/components/blocks/inputs/Input";
import React from "react";

const RegistrationModal = () => {
  return (
    <div className="flex flex-col text-[14px] space-y-[40px] bg-white p-10 w-[545px]">
      <div className="grid grid-cols-8 gap-[20px]">
        <p className="col-span-2 text-[#333333]">제목</p>
        <div className="col-span-6 text-[#A3A6AB]">
          <TextInput type={""} placeholder={"제목 입력"} />
        </div>
        <p className="col-span-2 text-[#333333]">구분</p>
        <div className="col-span-6">
          <RadioButton
            options={["전체", "발주사", "장비사업자"]}
            selectedValue="전체"
            onChange={() => {}}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
        </div>
        <p className="col-span-2 text-[#333333]">배너이미지</p>
        <div className="col-span-6">
          <div className="flex items-center gap-[10px]">
            <Button
              label={"파일 선택"}
              backgroundColor={"#A3A6AB"}
              borderRadius={"rounded-[5px]"}
              textStyle={"text-white w-[65px]"}
            />
            <p className="text-[#A3A6AB]">선택된 파일 없음</p>
          </div>
          <p>*이미지는 400KB 미만, 너비 720px, JPG, PNG 파일만 등록 가능</p>
        </div>

        <p className="col-span-2 text-[#333333]">노출기간</p>
        <div className="col-span-6 text-[#333333]">
          <div></div>
        </div>
        <p className="col-span-2 text-[#333333]">랜딩페이지</p>
        <div className="col-span-6 text-[#333333]"></div>
      </div>
      <div className="flex justify-center items-center gap-[16px] ">
        <Button
          label={"취소"}
          backgroundColor={"bg-[#A3A6AB]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-white w-[148px]"}
        />
        <Button
          label={"등록"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-white w-[148px]"}
        />
      </div>
    </div>
  );
};

export default RegistrationModal;
