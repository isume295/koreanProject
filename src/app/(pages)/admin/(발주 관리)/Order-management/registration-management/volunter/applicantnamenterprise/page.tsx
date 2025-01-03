'use client'
import React from 'react'
import ApplicantNameEnterprise from './components/enterprise'
import CustomTab from '@/src/components/blocks/tabs/Tabs';
import UsageManagement from '@/src/app/(pages)/admin/(결제 관리)/Payment-management/cache-management/components/usageManagement';
import WithDrawalApp from '@/src/app/(pages)/admin/(결제 관리)/Payment-management/cache-management/components/WithDrawalApp';

const page = () => {
    const Tabs = [
        { title: "기본 정보", content: <ApplicantNameEnterprise/> },
        { title: "마이페이지 정보", content: <UsageManagement/> },
        {title:"장비 정보",content:<WithDrawalApp/>},
        {title:"기사 정보",content:<WithDrawalApp/>}
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

export default page