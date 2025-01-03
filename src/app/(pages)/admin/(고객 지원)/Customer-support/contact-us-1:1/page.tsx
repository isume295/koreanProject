"use client";
import React from "react";
import CustomerSupportTopContent from "../components/CustomerSupportTopContent";
import Table from "@/src/components/blocks/tabels/Table";
import data from "./data";

const ContactUs = () => {
  const { contactUsHeader, contactUsData } = data();
  return (
    <div className="space-y-[20px]">
      <CustomerSupportTopContent
        option={[
          { key: "1", label: "전체" },
          { key: "2", label: "대기" },
          { key: "3", label: "답변완료" },
        ]}
      />
      <Table
        header={contactUsHeader}
        data={contactUsData}
        title="N건의 게시물이 검색되었습니다"
        hasPagination={true}
      />
    </div>
  );
};

export default ContactUs;
