"use client";
import React, { useState } from "react";
import CustomerSupportTopContent from "../components/CustomerSupportTopContent";
import Table from "@/src/components/blocks/tabels/Table";
import { Button } from "@/src/components/blocks/buttons/Button";
import data from "./data";

const NoticeManagement = () => {
  const [activePage, setActivePage] = useState(1);

  // const [isModalVisible, setModalVisible] = useState(false);

  const { noticeHeader, noticeData } = data();
  return (
    <div className="space-y-[20px]">
      <CustomerSupportTopContent
        option={[
          { key: "1", label: "전체" },
          { key: "2", label: "진행" },
          { key: "3", label: "종료" },
        ]}
      />
      <div className="bg-white px-[24px] text-[14px] py-[20px] space-y-[20px] rounded-[10px]">
        <div className="flex  items-center justify-between">
          <p className="text-[16px] text-[#333333]">
            N건의 게시물이 검색되었습니다
          </p>
          <div>
            <Button
              label={"등록"}
              backgroundColor={"bg-[#404251]"}
              borderRadius={"rounded-full"}
              textStyle={"text-[14px]  text-white"}
              // onPress={() => setModalVisible(true)}
            />
          </div>
        </div>
        <Table
          header={noticeHeader}
          data={noticeData}
          title=""
          hasPagination={false}
        />
        <div className="flex items-center justify-center text-[14px] text-[#4B505D] gap-[20px]">
          {Array.from({ length: 10 }, (_, index) => (
            <p
              key={index}
              onClick={() => setActivePage(index + 1)} // Set active page on click
              className={`cursor-pointer  ${
                activePage === index + 1 ? "text-main-color " : ""
              }`}
            >
              {index + 1}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeManagement;
