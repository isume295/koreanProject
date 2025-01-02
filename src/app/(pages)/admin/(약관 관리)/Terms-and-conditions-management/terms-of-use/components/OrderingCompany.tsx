import { Button } from "@/src/components/blocks/buttons/Button";
import Table from "@/src/components/blocks/tabels/Table";
import React, { useState } from "react";

import ModalWrapper from "@/src/components/blocks/Modals/ModalWrapper";
import MarkDown from "@/src/components/blocks/markdown/MarkDown";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import { EquipmentOperatorHeader, EquipmentOperatorTableData, OrderingCompanyHeader, OrderingCompanyTableData } from "./TermUseTableData";

const OrderingCompany = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const handleRegistration = () => {
    setShowRegistration(!showRegistration);
  };
  return (
    <div>
      <div className="flex justify-end">
        <Button
          label="등록"
          backgroundColor="bg-[#404251]"
          textStyle="text-sm text-white"
          padding="px-[20px] py-[16px]"
          borderRadius="rounded-[100px]"
          width="w-[66px]"
          onPress={handleRegistration}
        />
      </div>
      <div className="mt-[14px]">
        <Table
          data={EquipmentOperatorTableData}
          header={EquipmentOperatorHeader}
          hasPagination={true}
        />
      </div>
      {showRegistration && (
        <ModalWrapper width="w-[678px]" height="h-[630px]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-5 w-full">
              <p className="min-w-[81px] text-sm text-[#333333]">제목</p>
              <div className="w-full">
                <InputNoLabel placeholder="제목 입력" />
              </div>
            </div>
            <div className="flex gap-5">
              <p className="min-w-[81px] text-sm text-[#333333]">내용</p>
              <div>
                <MarkDown  />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[16px] mt-[40px]">
              <Button
                label="취소"
                backgroundColor="bg-[#A3A6AB]"
                textStyle="text-sm text-white"
                borderRadius="rounded-[5px]"
                padding="p-[11px]"
                width="w-[148px]"
                onPress={handleRegistration}
              />
              <Button
                label="등록"
                backgroundColor="bg-[#4A4E57]"
                textStyle="text-sm text-white"
                borderRadius="rounded-[5px]"
                padding="p-[11px]"
                width="w-[148px]"
              />
            </div>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};

export default OrderingCompany;
