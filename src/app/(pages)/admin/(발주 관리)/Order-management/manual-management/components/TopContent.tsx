
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import React from "react";

const TopContent = () => {
  const dropDownOptions = [
    {
      key: "1",
      label: "등록일",
    },
    {
      key: "2",
      label: "등록일",
    },
    {
      key: "4",
      label: "등록일",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {/* first content */}
      <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[630px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">등록일</span>
        <DropDown
          options={dropDownOptions}
          defaultSelectedKeys={"1"}
          selectStyles="w-[93px] text-[14px] font-[400] text-[#333333]"
          insideStyles="text-[14px] font-[400] text-[#333333]"
          selectedItemRadius="rounded-[100px]"
        />
        <RadioButton
          options={["전체", "설정"]}
          selectedValue="전체"
          onChange={() => {}}
          optionStyles="flex  flex-col gap-2 text-[14px] font-[400] text-[#333333]"
        />
        <div className="flex justify-center items-center gap-[5px] text-[#333333]">
          <span className="py-[14px] px-[17px] bg-[#F2F3F5] text-[14px] font-[400] rounded-[100px]">
            2024-01-01
          </span>
          <span>~</span>
          <span className="py-[14px] px-[17px] bg-[#F2F3F5] text-[14px] font-[400] rounded-[100px]">
            2024-01-01
          </span>
        </div>
      </div>
      {/* second content */}
      <div>
        <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[540px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">상태</span>

          <RadioButton
            options={["전체", "모집중", "배차완료", "수금완료", "배차취소"]}
            selectedValue="전체"
            onChange={() => {}}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
        </div>
      </div>
      {/* third content */}

      <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[340px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">검색어</span>
        <div className="flex gap-3">
          <SearchInput placeholder="검색어를 입력해주세요" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default TopContent;
