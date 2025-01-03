import Table from '@/src/components/blocks/tabels/Table'
import React from 'react'
import { VolunetData, VolunterHeader } from './VolunterTableData'

const Volunter = () => {
  return (
    <div className='flex flex-col gap-[30px] bg-white py-[20px] px-[24px] rounded-[10px]'>
        <div className='flex gap-5'>
            <p className='text-sm text-[#80808E]'>지원자수<span className='text-sm text-[#255DF9]'>5</span></p>
            <p className='text-sm text-[#80808E]'>오더상태<span className='text-sm text-[#255DF9]'>배차완료</span></p>
        </div>
        <div className=''>
            <Table data={VolunetData} header={VolunterHeader} hasPagination={false}/>
        </div>
    </div>
  )
}

export default Volunter