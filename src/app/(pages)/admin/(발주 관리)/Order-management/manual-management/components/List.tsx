"use client";
import React from "react";
import TopContent from "./TopContent";

import Table from "@/src/components/blocks/tabels/Table";
import ListTableData from "./ListTableData";
import { useDisclosure } from "@nextui-org/react";
import DetailsModal from "./DetailsModal";

const List = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { ListHeader, ManualListData } = ListTableData({ openForm: onOpen });

  return (
    <div className="flex flex-col gap-4">
      <TopContent />
      <Table
        header={ListHeader}
        hasPagination={true}
        data={ManualListData}
        title="N건의 게시물이 검색되었습니다"
      />

      <DetailsModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default List;
