'use client'
import Link from "next/link";

export const VolunterHeader = [
  { label: "번호" },
  { label: "지원일시" },
  { label: "지원자명" },
  { label: "대표자" },
  { label: "지원 금액" },
  { label: "채팅보기" },
  { label: "-여부" },
  { label: "환급신청" },
  { label: "환급실행" },
  { label: "계약서" },
  { label: "세금계산서" },
  { label: "작업일보" },
];
export const VolunetData = [
  {
    number: 1,
    dateandtime: (
      <div className="flex justify-center flex-col">
        <p className="text-sm text-[#A3A6AB]">2023-01-08</p>
        <p className="text-sm text-[#A3A6AB]">12:32:22</p>
      </div>
    ),
    applicanName: "(주)알바트레이팅",
    exponent: <Link href={"/admin/Order-management/registration-management/volunter/enterprise"} className="text-sm text-[#429FFF] underline">이중재</Link>,
    supportaccount:<Link href={""} className="text-sm text-[#429FFF] underline">70만원</Link>,
    viewchat:<Link href={""} className="text-sm text-[#429FFF] underline">보기</Link>,
    selection:"-",
    requestrefund:<Link href={""} className="text-sm text-[#429FFF] underline">Y</Link>,
    executerefund:<Link href={""} className="text-sm text-[#429FFF] underline">Y</Link>,
    contract:"",
    taxinvoice:"",
    dailyreport:""

  },
  {
    number: 1,
    dateandtime: (
      <div className="flex justify-center flex-col">
        <p className="text-sm text-[#A3A6AB]">2023-01-08</p>
        <p className="text-sm text-[#A3A6AB]">12:32:22</p>
      </div>
    ),
    applicanName: "(주)알바트레이팅",
    exponent: <Link href={"/admin/Order-management/registration-management/volunter/applicantnamenterprise"} className="text-sm text-[#429FFF] underline">이중재</Link>,
    supportaccount:<Link href={""} className="text-sm text-[#429FFF] underline">70만원</Link>,
    viewchat:<Link href={""} className="text-sm text-[#429FFF] underline">보기</Link>,
    selection:"선정",
    requestrefund:"-",
    executerefund:"-",
    contract:<Link href={""} className="text-sm text-[#429FFF] underline">보기</Link>,
    taxinvoice:<Link href={""} className="text-sm text-[#429FFF] underline">보기</Link>,
    dailyreport:<Link href={""} className="text-sm text-[#429FFF] underline">보기</Link>

  },
  {
    number: 1,
    dateandtime: (
      <div className="flex justify-center flex-col">
        <p className="text-sm text-[#A3A6AB]">2023-01-08</p>
        <p className="text-sm text-[#A3A6AB]">12:32:22</p>
      </div>
    ),
    applicanName: "(주)알바트레이팅",
    exponent: <Link href={"/admin/Order-management/registration-management/volunter/enterprise"} className="text-sm text-[#429FFF] underline">이중재</Link>,
    supportaccount:<Link href={""} className="text-sm text-[#429FFF] underline">70만원</Link>,
    viewchat:<Link href={""} className="text-sm text-[#429FFF] underline">보기</Link>,
    selection:"-",
    requestrefund:<Link href={""} className="text-sm text-[#429FFF] underline">Y</Link>,
    executerefund:<Link href={""} className="text-sm text-[#F05858] underline">N</Link>,
    contract:"",
    taxinvoice:"",
    dailyreport:""

  },
  {
    number: 1,
    dateandtime: (
      <div className="flex justify-center flex-col">
        <p className="text-sm text-[#A3A6AB]">2023-01-08</p>
        <p className="text-sm text-[#A3A6AB]">12:32:22</p>
      </div>
    ),
    applicanName: "(주)알바트레이팅",
    exponent: <Link href={"/admin/Order-management/registration-management/volunter/enterprise"} className="text-sm text-[#429FFF] underline">이중재</Link>,
    supportaccount:<Link href={""} className="text-sm text-[#429FFF] underline">70만원</Link>,
    viewchat:<Link href={""} className="text-sm text-[#429FFF] underline">보기</Link>,
    selection:"-",
    requestrefund:<Link href={""} className="text-sm text-[#F05858] underline">N</Link>,
    executerefund:<Link href={""} className="text-sm text-[#F05858] underline">N</Link>,
    contract:"",
    taxinvoice:"",
    dailyreport:""

  },
  {
    number: 1,
    dateandtime: (
      <div className="flex justify-center flex-col">
        <p className="text-sm text-[#A3A6AB]">2023-01-08</p>
        <p className="text-sm text-[#A3A6AB]">12:32:22</p>
      </div>
    ),
    applicanName: "(주)알바트레이팅",
    exponent: <Link href={"/admin/Order-management/registration-management/volunter/enterprise"} className="text-sm text-[#429FFF] underline">이중재</Link>,
    supportaccount:<Link href={""} className="text-sm text-[#429FFF] underline">70만원</Link>,
    viewchat:<Link href={""} className="text-sm text-[#429FFF] underline">보기</Link>,
    selection:"-",
    requestrefund:<Link href={""} className="text-sm text-[#F05858] underline">N</Link>,
    executerefund:<Link href={""} className="text-sm text-[#F05858] underline">N</Link>,
    contract:"",
    taxinvoice:"",
    dailyreport:""

  },
  
];
