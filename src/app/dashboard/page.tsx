'use client'
import React from 'react'
import LoggedInNavbar from '../components/Major/LoggedInNavbar'
import { Button } from '@/components/ui/button'
import FeaturedService from '../components/Major/FeaturedService'
// import bowl from '../../../public/1.svg'
import Image from 'next/image'
import GroceriesCategories from '../components/Major/GroceriesCategories'
import DashboardOrders from '../components/Major/DashboardOrders'
import DashboardDeal from '../components/Major/DashboardDeal'

// import Router from 'next/navigation'
import { useRouter } from 'next/navigation'


const Dashboard = () => {
  return (
    <div className='bg-[#F5F5F4] '>
      <LoggedInNavbar/>
      <div className='px-10 pb-10'>

        <section className='md:flex justify-between my-10'>
          <h2 className='text-2xl font-semibold'><span className='text-[#727272] font-normal'>Welcome,</span> Ade</h2>
          <div className='gap-3 flex  mt-10 md:mt-0'>
            <Button variant='dashboardDefault'className="md:text-lg text-sm rounded-lg text-black border border-2 border-black hover:bg-[#013328] hover:border-0 hover:text-white  hover:cursor-pointer">
              Start Shopping Groceries
            </Button>
            <Button variant='dashboardDefault'className="md:text-lg text-sm text-white rounded-lg bg-[#013328] hover:cursor-pointer">
              Find Household Services
            </Button>
          </div>
        </section>

        <div className=''>
          <div className='grid grid-cols-1 lg:grid-cols-[60%_40%] gap-5 '>
            <div className=''>
              <FeaturedService/>
              <GroceriesCategories/>
            </div>


            
            <div className=''>
              <DashboardOrders/>
              <DashboardDeal/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
