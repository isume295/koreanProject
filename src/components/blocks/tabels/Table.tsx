/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Table as NextTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import { IHeader, ITable } from "./type";

const Table = ({
  header,
  data,
  hasPagination = false,
  title = undefined,
}: ITable) => {
  return (
    <div className="w-full">
      <NextTable
        aria-label="Data Table"
        shadow="none"
        bgcolor="red"
        width={"100%"}
        className="w-full"
        classNames={{
          table: ["border border-[#E6EBF1]"],

          th: [
            "font-[400] text-[14px] bg-[#F1F3F6] text-[#4B505D] h-[43px] first:rounded-none last:rounded-none rounded-none text-center",
          ],
          td: [
            " text-center font-normal text-base rounded-none text-[#A3A6AB] font-[400] text-[14px] ",
          ],
        }}
        topContent={
          title ? (
            <div className="font-[400] text-[16px] text-[#333333]">{title}</div>
          ) : null
        }
        bottomContent={
          <div className="flex w-full justify-center rounded-none mt-8">
            {hasPagination && (
              <Pagination
                classNames={{
                  wrapper: "gap-0 overflow-visible h-8 bg-transparent",
                  item: "w-8 h-8 text-small rounded-none bg-transparent",
                  cursor: "bg-transparent text-[#255DF9] font-bold",
                }}
                page={3}
                total={3}
                onChange={(page) => console.log(page)}
              />
            )}
          </div>
        }
      >
        <TableHeader>
          {header?.map((item: IHeader, index: number) => (
            <TableColumn key={index}>{item.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data?.map((item: any, index: number) => (
            <TableRow
              key={index}
              className="border-b-1 border-[#E6EBF1] border-r-1 m-0"
            >
              {Object.keys(item).map((key: string, index: number) => (
                <TableCell key={index} className="border-r-1 border-[#E6EBF1]">
                  {item[key]} {/* Access the value of the key */}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </NextTable>
    </div>
  );
};

export default Table;
