import { Button } from "@/src/components/blocks/buttons/Button";
import Link from "next/link";

export const ListHeader = [
  { label: "번호" },
  { label: "등록일시" },
  { label: "배정일시" },
  { label: "상태" },
  { label: "담당자" },
  { label: "비용" },
  { label: "기간" },
  { label: "장소" },
  { label: "장비" },
  { label: "문자안내" },
];

export const ManualListData = [
  {
    number: 7,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    AssigmentDate: "2023-08-10 00:00",
    Situation: <Link href={'/admin/Order-management/manual-management/DetailandEdit'} className="text-[#429FFF] underline">모집중</Link>,
    Manager: "이중재",
    Expense: "400,000",
    Period: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Location: "서울 성북구 3일로",
    Equipment: "굴착기 | 미니 008 | 타이어, 크리샤",
    TextInformation: <span className="text-[#429FFF]">발송하기</span>,
  },
  {
    number: 7,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    AssigmentDate: "2023-08-10 00:00",
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    Manager: "이중재",
    Expense: "400,000",
    Period: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Location: "서울 성북구 3일로",
    Equipment: "굴착기 | 미니 008 | 타이어, 크리샤",
    TextInformation: <span className="text-[#429FFF]">발송하기</span>,
  },
  {
    number: 7,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    AssigmentDate: "2023-08-10 00:00",
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    Manager: "이중재",
    Expense: "400,000",
    Period: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Location: "서울 성북구 3일로",
    Equipment: "굴착기 | 미니 008 | 타이어, 크리샤",
    TextInformation: <span className="text-[#429FFF]">발송하기</span>,
  },
  {
    number: 7,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    AssigmentDate: "2023-08-10 00:00",
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    Manager: "이중재",
    Expense: "400,000",
    Period: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Location: "서울 성북구 3일로",
    Equipment: "굴착기 | 미니 008 | 타이어, 크리샤",
    TextInformation: <span className="text-[#429FFF]">발송하기</span>,
  },
  {
    number: 7,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    AssigmentDate: "2023-08-10 00:00",
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    Manager: "이중재",
    Expense: "400,000",
    Period: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Location: "서울 성북구 3일로",
    Equipment: "굴착기 | 미니 008 | 타이어, 크리샤",
    TextInformation: <span className="text-[#429FFF]">발송하기</span>,
  },
  {
    number: 7,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    AssigmentDate: "2023-08-10 00:00",
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    Manager: "이중재",
    Expense: "400,000",
    Period: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Location: "서울 성북구 3일로",
    Equipment: "굴착기 | 미니 008 | 타이어, 크리샤",
    TextInformation: <span className="text-[#429FFF]">발송하기</span>,
  },
  {
    number: 7,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    AssigmentDate: "2023-08-10 00:00",
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    Manager: "이중재",
    Expense: "400,000",
    Period: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Location: "서울 성북구 3일로",
    Equipment: "굴착기 | 미니 008 | 타이어, 크리샤",
    TextInformation: <span className="text-[#429FFF]">발송하기</span>,
  },
  {
    number: 7,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    AssigmentDate: "2023-08-10 00:00",
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    Manager: "이중재",
    Expense: "400,000",
    Period: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Location: "서울 성북구 3일로",
    Equipment: "굴착기 | 미니 008 | 타이어, 크리샤",
    TextInformation: <span className="text-[#429FFF]">발송하기</span>,
  },
  {
    number: 7,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    AssigmentDate: "2023-08-10 00:00",
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    Manager: "이중재",
    Expense: "400,000",
    Period: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Location: "서울 성북구 3일로",
    Equipment: "굴착기 | 미니 008 | 타이어, 크리샤",
    TextInformation: <span className="text-[#429FFF]">발송하기</span>,
  },
];

export const applyForMemebershipHeader = [
  { label: "번호" },
  { label: "신청일시" },
  { label: "사업자명" },
  { label: "구분" },
  { label: "ID" },
  { label: "대표자" },
  { label: "승인" },
];

export const applyForMemebershipData = [
  {
    number: 4,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Manager: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    id: "Fdod1",
    Period: "이중재",
    approval: (
      <div className="flex gap-2 justify-center items-center">
        <Button
          label={"거절"}
          backgroundColor={"bg-[#ABAFB7]"}
          borderRadius={"rounded-[4px]"}
          textStyle={"text-[14px] text-white font-[400]"}
          onPress={() => {}}
          width="w-[46px]"
        />
        <Button
          label={"승인"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[4px]"}
          textStyle={"text-[14px] text-white font-[400]"}
          onPress={() => {}}
          width="w-[46px]"
        />
      </div>
    ),
  },
  {
    number: 4,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Manager: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    id: "Fdod1",
    Period: "이중재",
    approval: (
      <div className="flex gap-2 justify-center items-center">
        <Button
          label={"거절"}
          backgroundColor={"bg-[#ABAFB7]"}
          borderRadius={"rounded-[4px]"}
          textStyle={"text-[14px] text-white font-[400]"}
          onPress={() => {}}
          width="w-[46px]"
        />
        <Button
          label={"승인"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[4px]"}
          textStyle={"text-[14px] text-white font-[400]"}
          onPress={() => {}}
          width="w-[46px]"
        />
      </div>
    ),
  },
  {
    number: 4,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    Manager: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    id: "Fdod1",
    Period: "이중재",
    approval: (
      <div className="flex gap-2 justify-center items-center">
        <Button
          label={"거절"}
          backgroundColor={"bg-[#ABAFB7]"}
          borderRadius={"rounded-[4px]"}
          textStyle={"text-[14px] text-white font-[400]"}
          width="w-[46px]"
          onPress={() => {}}
        />
        <Button
          label={"승인"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[4px]"}
          textStyle={"text-[14px] text-white font-[400]"}
          onPress={() => {}}
          width="w-[46px]"
        />
      </div>
    ),
  },
  {
    number: 4,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    Manager: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    id: "Fdod1",
    Period: "이중재",
    approval: (
      <div className="flex gap-2 justify-center items-center">
        <Button
          label={"거절"}
          backgroundColor={"bg-[#ABAFB7]"}
          borderRadius={"rounded-[4px]"}
          textStyle={"text-[14px] text-white font-[400]"}
          onPress={() => {}}
          width="w-[46px]"
        />
        <Button
          label={"승인"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[4px]"}
          textStyle={"text-[14px] text-white font-[400]"}
          onPress={() => {}}
          width="w-[46px]"
        />
      </div>
    ),
  },
];

export const completeOrRejectHeader = [
  { label: "번호" },
  { label: "신청일시" },
  { label: "사업자명" },
  { label: "구분" },
  { label: "ID" },
  { label: "대표자" },
  { label: "처리일시" },
  { label: "처리내역" },
  { label: "처리 관리자" },
];

export const completeOrRejectData = [
  {
    number: 4,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    Manager: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    id: "Fdod1",
    Period: "이중재",
    processingDateAndTime: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    processingDetails: <span className="text-[#A3A6AB]">승인</span>,
    processingManager: "처리 관리자",
  },
  {
    number: 4,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    Manager: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    id: "Fdod1",
    Period: "이중재",
    processingDateAndTime: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    processingDetails: <span className="text-[#F05858]">승인</span>,
    processingManager: "처리 관리자",
  },
  {
    number: 4,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    Manager: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    id: "Fdod1",
    Period: "이중재",
    processingDateAndTime: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    processingDetails: <span className="text-[#F05858]">승인</span>,
    processingManager: "처리 관리자",
  },
  {
    number: 4,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    Manager: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: <Link href={''} className="text-[#429FFF] underline">모집중</Link>,
    id: "Fdod1",
    Period: "이중재",
    processingDateAndTime: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    processingDetails: <span className="text-[#A3A6AB]">승인</span>,
    processingManager: "처리 관리자",
  },
];
