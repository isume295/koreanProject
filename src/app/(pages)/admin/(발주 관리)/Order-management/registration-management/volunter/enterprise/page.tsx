'use client'
import CacheBalanceManagement from '@/src/app/(pages)/admin/(결제 관리)/Payment-management/cache-management/components/CacheBalanceManagement';
import UsageManagement from '@/src/app/(pages)/admin/(결제 관리)/Payment-management/cache-management/components/usageManagement';
import WithDrawalApp from '@/src/app/(pages)/admin/(결제 관리)/Payment-management/cache-management/components/WithDrawalApp';
import CustomTab from '@/src/components/blocks/tabs/Tabs';
import React from 'react'
import Enterprise from './components/Enterprise';
import Myinformation from './components/myinformation';
import EquipmentInformation from './components/EquipmentInformation';
import ArticleInformation from './components/ArticleInformation';

const page = () => {
    const Tabs = [
        { title: "기본 정보", content: <Enterprise/> },
        { title: "마이페이지 정보", content: <Myinformation/> },
        {title:"장비 정보",content:<EquipmentInformation    />},
        {title:"기사 정보",content:<ArticleInformation/>}
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
    };

export default page