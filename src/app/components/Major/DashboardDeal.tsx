import React from 'react'
import { Button } from '@/components/ui/button'

const DashboardDeal = () => {
  return (
    <div className='bg-white rounded-lg p-4 gap-3 flex flex-col shadow-xl'>
      <h4 className='font-semibold text-lg'>Unlock exclusive deals</h4>
      <p className='text-sm text-[#0000008e] '>Get 15% off your first 3 service bookings this month. Don&apos;t miss out!</p>
      <Button value={'dashboardDefault'} className=' rounded-lg w-28 text-[#013328] border-[1px] border-[#013328] hover:bg-[#013328] hover:border-0 hover:text-white  hover:cursor-pointer'>
        Claim Offer
      </Button>
    </div>
  )
}

export default DashboardDeal
