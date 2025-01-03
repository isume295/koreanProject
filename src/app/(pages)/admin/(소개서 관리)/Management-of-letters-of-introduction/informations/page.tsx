"use client";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";
import EquipmentInformation from "../../../(회원 관리)/Membership-Management/membership-management/equipmentExponent/components/EquipmentInformation";
import BasicInfo from "../../../(회원 관리)/Membership-Management/membership-management/equipmentExponent/components/BasicInfo";
import ArticleInformation from "../../../(회원 관리)/Membership-Management/membership-management/equipmentExponent/components/ArticleInformation";

const Informations = () => {
  const Tabs = [
    { title: "채팅 관리", content: <BasicInfo /> },
    { title: "안내 문구", content: <EquipmentInformation /> },
    { title: "안내 문구", content: <ArticleInformation /> },
  ];
  return (
    <div>
      <CustomTab
        items={Tabs}
        containerPadding="p-[6px]"
        raduis="rounded-[14px]"
        selectedBgColor="bg-[#404251]"
      />
    </div>
  );
};

export default Informations;
