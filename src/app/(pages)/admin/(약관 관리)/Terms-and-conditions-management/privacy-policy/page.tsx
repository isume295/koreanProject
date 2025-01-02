'use client'
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";
import PrivacyPolicy from "./components/PrivacyPolicy";
import UsageManagement from "../../../(결제 관리)/Payment-management/cache-management/components/usageManagement";
import EquipmentBusiness from "./components/EquipmentBusiness";

const Page = () => {
  const Tabs = [
    { title: "발주사", content: <PrivacyPolicy/> },
    { title: "장비사업자", content: <EquipmentBusiness/> },
  ];
  return (
    <div className="">
      <CustomTab
        items={Tabs}
        containerPadding="p-[6px]"
        raduis="rounded-[14px]"
        selectedBgColor="bg-[#404251]"
      />
    </div>
  );
}

export default Page;
