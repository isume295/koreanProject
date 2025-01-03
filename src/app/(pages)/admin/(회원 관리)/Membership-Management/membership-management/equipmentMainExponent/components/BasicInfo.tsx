"use client";
import React from "react";
import cameraIcon from "../../../../../../../assets/mdi_camera.svg";
import TextInput from "@/src/components/blocks/inputs/Input";
import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import { Button } from "@/src/components/blocks/buttons/Button";
import ModalWithTable from "../../../components/modals/ModalWithTable";
import { useDisclosure } from "@nextui-org/react";
import ModalWithInputArea from "../../../components/modals/ModalWithInputArea";
import SanctionModal from "../../../components/modals/SanctionModal";

const MultipleInputs = ({
  displayType = "input",
  type,
  firstLabel,
  secondLabel,
  secondPlaceholder,
  firstPlaceholder,
}: {
  type: string;
  firstLabel: string;
  secondLabel: string;
  firstPlaceholder: string;
  secondPlaceholder: string;
  displayType?: "input" | "text";
}) => {
  return (
    <div className="flex w-full gap-5">
      {displayType === "input" ? (
        <>
          <div className="flex-1">
            <TextInput
              type={type}
              label={firstLabel}
              placeholder={firstPlaceholder}
            />
          </div>
          <div className="flex-1">
            <TextInput
              type={type}
              label={secondLabel}
              placeholder={secondPlaceholder}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
              {firstLabel}
            </span>
            <span className="font-[400] text-[14px] text-[#333333]">
              {firstPlaceholder}
            </span>
          </div>
          <div className="flex-1 flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
              {secondLabel}
            </span>
            <span className="font-[400] text-[14px] text-[#333333]">
              {secondPlaceholder}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

const EquipmentMainExponentPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenTable,
    onOpen: onOpenTable,
    onOpenChange: onOpenChangeTable,
  } = useDisclosure();

  const {
    isOpen: isOpenInputArea,
    onOpen: onOpenInputArea,
    onOpenChange: onOpenChangeInputArea,
  } = useDisclosure();
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="w-full flex flex-col justify-start items-center bg-white gap-4 py-8  px-9 rounded-[10px]">
        <div className="w-full pb-4 border-b-1 border-[#D9D9D9]">
          <div className="w-[678px] flex flex-col items-start gap-3 ">
            <span className="text-[14px] font-[700] text-[#ABAFB7]">
              상세 정보
            </span>

            <MultipleInputs
              displayType="text"
              type={"text"}
              firstLabel={"승인요청 일시"}
              secondLabel={"최근 접속"}
              firstPlaceholder={"2024-01-15 12:12:20"}
              secondPlaceholder={"2024-01-15 12:12:20"}
            />

            <MultipleInputs
              displayType="text"
              type={"text"}
              firstLabel={"구분"}
              secondLabel={"기업/개인"}
              firstPlaceholder={"카카오"}
              secondPlaceholder={"기업"}
            />

            <MultipleInputs
              type={"text"}
              secondLabel={"대표자명"}
              firstLabel={"사업자명"}
              firstPlaceholder={"아산기업"}
              secondPlaceholder={"홍길동"}
            />

            <MultipleInputs
              type={"text"}
              firstLabel={"사무실 번호"}
              secondLabel={"휴대폰 번호"}
              firstPlaceholder={"0211112222"}
              secondPlaceholder={"01011112222"}
            />

            <div className="flex w-full ">
              <div className="w-full">
                <TextInput
                  type={"text"}
                  label="주소"
                  labelWidth="w-[105px]"
                  placeholder={"서울특별시 금천구 가산디지털로~~"}
                />
              </div>
            </div>

            <div className="flex w-full text-[14px] font-[400] text-[#ABAFB7] items-center">
              <span className="w-[100px]">사업자등록증</span>
              <div className="flex gap-3">
                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-[6px]" />
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label={"사진 첨부"}
                  containerStyle="w-[63px] h-[63px] bg-[#F1F3F6] rounded-[6px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-4 border-b-1 border-[#D9D9D9]">
          <div className="w-[678px] flex flex-col items-start gap-4 ">
            <div className="flex w-full text-[14px] font-[400] text-[#ABAFB7] items-center">
              <span className="w-[100px]">사업자등록증</span>
              <div className="flex gap-3">
                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-[6px]" />
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label={"사진 첨부"}
                  containerStyle="w-[63px] h-[63px] bg-[#F1F3F6] rounded-[6px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-4 border-b-1 border-[#D9D9D9]">
          <div className="w-[678px] flex flex-col items-start gap-4 ">
            <span className="text-[14px] font-[700] text-[#ABAFB7]">
              마케팅 수신 동의
            </span>
            <div className="flex w-full text-[14px] font-[400] ">
              <span className="w-[105px]">상태</span>
              <div className="flex gap-4">
                <span>동의</span>
                <span
                  className="text-[#429FFF] underline pb-1 cursor-pointer"
                  onClick={onOpenTable}
                >
                  변경
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-4  ">
          <div className="w-[678px] flex flex-col items-start gap-4 ">
            <span className="text-[14px] font-[700] text-[#ABAFB7]">
              회원 상태
            </span>
            <div className="flex w-full text-[14px] font-[400]   ">
              <span className="w-[105px]">상태</span>
              <div className="flex gap-4">
                <span>정상</span>
                <span
                  onClick={onOpen}
                  className="text-[#F05858] underline pb-1 cursor-pointer"
                >
                  제재하기
                </span>
                <span
                  onClick={onOpenInputArea}
                  className="text-[#F05858] underline pb-1 cursor-pointer"
                >
                  해제하기
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        label={"저장"}
        backgroundColor={"bg-[#4A4E57]"}
        borderRadius={"rounded-[5px]"}
        textStyle={" font-[400] text-[14px] text-white"}
        width="w-[106px]"
        onPress={() => {}}
      />
      <ModalWithInputArea
        isOpen={isOpenInputArea}
        onOpenChange={onOpenChangeInputArea}
      />
      <SanctionModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <ModalWithTable isOpen={isOpenTable} onOpenChange={onOpenChangeTable} />
    </div>
  );
};

export default EquipmentMainExponentPage;
