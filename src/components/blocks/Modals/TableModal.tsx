import React from "react";
import { TableModalType } from "./type";

const TableModal: React.FC<TableModalType> = ({
  content,
  disabledButtonLabel,
  enabledButtonLabel,
}) => {
  return (
    <div className="p-10 space-y-10 w-[413px] bg-white">
      <div className="">{content}</div>

      <div className="flex items-center justify-center gap-[16px]">
        {disabledButtonLabel && (
          <button className="text-white text-[14px] items-center justify-center p-[11px] bg-[#ABAFB7] flex gap-[10px] rounded-[5px] w-[148px]">
            {disabledButtonLabel}
          </button>
        )}

        <button className="text-white text-[14px] items-center justify-center bg-[#4A4E57] p-[11px] flex gap-[10px] rounded-[5px] w-[148px]">
          {enabledButtonLabel}
        </button>
      </div>
    </div>
  );
};

export default TableModal;
