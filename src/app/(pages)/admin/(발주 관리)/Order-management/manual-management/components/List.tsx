'use client'
import React from 'react'
import TopContent from './TopContent'
import { useRouter } from 'next/navigation'
import Table from '@/src/components/blocks/tabels/Table'
import { ListHeader, ManualListData } from './ListTableData'

const List = () => {
  const handleNavigation=()=>{
    const route=useRouter()
    route.push("/")
  }
  return (
    <div className="flex flex-col gap-4">
      <TopContent
        onPressExcelButton={() => {}}
        onPressLinkButton={handleNavigation}
      />
      <Table header={ListHeader} hasPagination={true} data={ManualListData} title="N건의 게시물이 검색되었습니다"/>
      </div>
  )
}

export default List