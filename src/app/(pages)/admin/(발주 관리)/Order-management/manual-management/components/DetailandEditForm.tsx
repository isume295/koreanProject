"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import Checkbox from "@/src/components/blocks/checkbox/Checkbox";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import ModalWrapper from "@/src/components/blocks/Modals/ModalWrapper";
import Table from "@/src/components/blocks/tabels/Table";
import { Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { SendModalHeader, SendModalTableData } from "./ListTableData";

const DetailandEditForm = () => {
 
  const [selecetedValue, setSelectedValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleModalChange = () => {
    setShowModal(!showModal);
  };

 
  const option1 = [
    { key: "1", label: "광역시도" },
    { key: "2", label: "광역시도" },
    { key: "3", label: "광역시도" },
  ];
  const selectedOption1 = option1[0].key;
  const option2 = [
    { key: "1", label: "선택" },
    { key: "2", label: "선택" },
    { key: "3", label: "선택" },
  ];

  const selectedOption2 = option2[0].key;
  const option3 = [
    { key: "1", label: "선택" },
    { key: "2", label: "선택" },
    { key: "3", label: "선택" },
  ];

  const selectedOption3 = option3[0].key;
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Handle logic for changing selected values
  const handleCheckboxChange = (updatedValues: string[]) => {
    setSelectedValues(updatedValues);
  };
  return (
    <section>
      {/* first from component */}
      <div className="flex flex-col gap-4 rounded-[10px] bg-white py-[20px] px-[24px]">
        <div className="flex items-center  gap-[70px]">
          <div className="flex items-center w-full gap-5">
            <p className="min-w-[81px] text-sm text-[#404251]">장비</p>
            <div className="flex items-center  gap-[8px]">
              <p className=" w-[80px] text-sm text-[#404251]">굴착기</p>
              <span className="text-sm text-[#404251]">{">"}</span>
              <Button
                backgroundColor="bg-[#255DF91A]"
                label="로그인"
                textStyle="text-[#255DF9] font-bold"
                padding="py-[12px] px-[14px]  "
                borderRadius="rounded-[6px]"
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-5">
            <p className="min-w-[81px]  text-sm text-[#404251]">구분</p>
            <div className="w-full">
              <Checkbox
                options={["임대 (장비+기사)", "스페어 (기사)", "렌탈 (장비)"]}
                selectedValues={selectedValues}
                alignment="horizontal"
                onChange={handleCheckboxChange}
                gap="gap-[20px]"
                inputTextStyles=" text-sm text-[#404251] w-full"
                inputStyles=""
              Label={true}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-[70px]">
          <div className="flex items-center w-full gap-5 ">
            <p className="w-[80px] text-sm text-[#404251]">작업일</p>
            <div className="w-full">
              <InputNoLabel type="date" inputParentStyles="w-full" />
            </div>
          </div>
          <div className="flex items-center  gap-5 w-full">
            <p className="w-[80px] text-sm text-[rgb(64,66,81)]">작업위치</p>
            <div className="flex gap-4 w-full">
              <DropDown
                options={option1}
                defaultSelectedKeys={selectedOption1}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option2}
                defaultSelectedKeys={selectedOption2}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option3}
                defaultSelectedKeys={selectedOption3}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-[70px]">
          <div className="flex items-center w-full gap-5 ">
            <div className="w-[75px]"></div>
            <div className="flex w-full gap-4">
              <DropDown
                options={option1}
                defaultSelectedKeys={selectedOption1}
                selectedItemRadius="border border-[#E4E5EA]"
                selectStyles="min-w-[235px] w-auto"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option1}
                defaultSelectedKeys={selectedOption1}
                selectedItemRadius="border border-[#E4E5EA]"
                selectStyles="w-full min-w-[235px]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className="w-[80px]"></div>
            <div className="w-full">
              <InputNoLabel placeholder="상세주소" />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-[70px]">
          <div className="flex items-center w-full gap-5 ">
            <p className="w-[80px] text-sm text-[#404251]">작업일</p>
            <div className="flex items-center gap-2">
              <InputNoLabel placeholder="40" inputParentStyles="w-[94px] " />
              <p className="text-sm text-[#404251]">만원 / 일</p>
              <p className="text-sm text-[#404251]">총 금액 : 000만원</p>
              <Checkbox
                options={["제안 받기"]}
                selectedValues={selectedValues}
                alignment="horizontal"
                onChange={handleCheckboxChange}
                Label={false}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center w-full gap-5 ">
          <p className="w-[80px] text-sm text-[#404251]">작업일</p>
          <div className="w-full">
            {" "}
            <InputNoLabel placeholder="작업내용 입력" />
          </div>
        </div>
        <div className="flex items-center w-full gap-5 ">
          <p className="w-[80px] text-sm text-[#404251]">기타 요청</p>
          <div className="w-full">
            {" "}
            <InputNoLabel placeholder="기타요청 입력" />
          </div>
        </div>
      </div>
      <div className="mt-5 rounded-[10px] bg-white py-[20px] px-[24px]">
        <p className="text-sm text-[#404251]">발주사 정보</p>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex w-full items-center ">
            <p className="w-[81px] text-sm text-[#404251]">작업명</p>
            <div className="w-full">
              {" "}
              <InputNoLabel placeholder="작업명 입력" />
            </div>
          </div>
          <div className="flex w-full gap-[60px]">
            <div className="flex items-center w-1/2">
              <p className="w-[81px] text-sm text-[#404251]">업체명</p>
              <div className="w-full">
                <InputNoLabel placeholder="업체명 입력" />
              </div>
            </div>
            <div className="flex items-center w-1/2">
              <p className="w-[81px] text-sm text-[#404251]">담당자명</p>
              <div className="w-full">
                <InputNoLabel placeholder="담당자명 입력" />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-[60px]">
            <div className="flex items-center w-1/2">
              <p className="w-[81px] text-sm text-[#404251]">연락처</p>
              <div className="w-full">
                <InputNoLabel placeholder="연락처 입력" />
              </div>
            </div>
            <div className="flex items-center w-1/2">
              <p className="w-[81px] text-sm text-[#404251]">세금계산서</p>
              <RadioButton
                options={["필요", "불필요"]}
                selectedValue={selecetedValue}
                onChange={(value) => {
                  setSelectedValue(value);
                }}
                optionStyles="text-sm text-[#333333]"
              />
            </div>
          </div>

          <div className="flex items-center w-full">
            <p className="w-[81px] text-sm text-[#404251]">기타메모</p>
            <div className="w-full">
              {" "}
              <InputNoLabel
                placeholder="기타메모 입력"
                inputStyles="py-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 rounded-[10px] bg-white py-[20px] px-[24px]">
        <p className="text-sm text-[#404251]">장비사업자 장보</p>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex w-full gap-[60px]">
            <div className="flex items-center w-1/2">
              <p className="w-[81px] text-sm text-[#404251]">배차업체</p>
              <div className="w-full">
                <InputNoLabel placeholder="배차업체 입력" />
              </div>
            </div>
            <div className="flex items-center w-1/2">
              <p className="w-[81px] text-sm text-[#404251]">작업자명</p>
              <div className="w-full">
                <InputNoLabel placeholder="작업자명 입력" />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-[60px]">
            <div className="flex items-center w-1/2">
              <p className="w-[81px] text-sm text-[#404251]">연락처</p>
              <div className="w-full">
                <InputNoLabel placeholder="연락처 입력" />
              </div>
            </div>
            <div className="flex items-center w-1/2">
              <p className="w-[81px] text-sm text-[#404251]">수수료</p>
              <div className="w-full">
                <InputNoLabel placeholder="수수료 입력" />
              </div>
            </div>
          </div>
          <div className="flex items-center w-full">
            <p className="w-[81px] text-sm text-[#404251]">기타메모</p>
            <div className="w-full">
              {" "}
              <InputNoLabel
                placeholder="기타메모 입력"
                inputStyles="py-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div>
          <Button
            label="닫기"
            backgroundColor="bg-[#A3A6AB]"
            borderRadius="rounded-[5px]"
            textStyle="text-sm text-white"
            padding="p-[10px]"
            width="w-[148px]"
          />{" "}
        </div>
        <div className="flex gap-4">
          <Button
            label="삭제"
            backgroundColor="bg-[#A3A6AB]"
            borderRadius="rounded-[5px]"
            textStyle="text-sm text-white"
            padding="p-[10px]"
            width="w-[148px]"
          />
          <Button
            label="수정"
            backgroundColor="bg-[#4A4E57]"
            borderRadius="rounded-[5px]"
            textStyle="text-sm text-white"
            padding="p-[10px]"
            width="w-[148px]"
            onPress={handleModalChange}
          />
        </div>
      </div>
      {showModal && (
        <ModalWrapper width="w-[680px] p-5" height="h-[684px]">
          <div className="flex flex-col gap-2">
            <div className=" flex gap-5">
              <p className="min-w-[81px] text-sm text-[#404251]">구분</p>
              <RadioButton
                options={[
                  "발주사(홍길동 | 01011112222)",
                  "장비사업자(김철수 | 01012345678)",
                ]}
                selectedValue={selecetedValue}
                onChange={(value) => {
                  setSelectedValue(value);
                }}
                optionStyles="text-sm text-[#333333]"
              />
            </div>
            <div className="flex items-center gap-5">
              {" "}
              <p className="min-w-[81px] text-sm text-[#404251]">문자내용</p>
              <Textarea
                className="max-w-lg"
                minRows={24}
             size="lg"
                placeholder="로그인"
                variant="bordered"
              />
            </div>
            <div className="flex justify-between py-3 border-b-1 border-[#E4E5EA]">
              <Button
                label="닫기"
                backgroundColor="bg-[#A3A6AB]"
                borderRadius="rounded-[5px]"
                textStyle="text-sm text-white"
                onPress={handleModalChange}
                padding="p-[11px]"
                width="w-[106px]"
              
              />
               <Button
                label="문자 발송"
                backgroundColor="bg-[#4A4E57]"
                borderRadius="rounded-[5px]"
                textStyle="text-sm text-white"
                onPress={handleModalChange}
                padding="p-[11px]"
                width="w-[106px]"
              
              />
            </div>
            <Table data={SendModalTableData} header={SendModalHeader} />
          </div>
        </ModalWrapper>
      )}
      
    </section>
  );
};

export default DetailandEditForm;
