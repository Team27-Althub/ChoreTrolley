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
 import { useFetchResourceQuery } from '@/redux/api/crudApi'
import Link from 'next/link'
// import Router from 'next/navigation'
import { useRouter } from 'next/navigation'


const Dashboard = () => {

  // const {data: serviceData, error, isLoading} = useFetchResourceQuery('/dashboard/services')
  const {data: categoryData, error: categoryError, isLoading: categoryLoading} = useFetchResourceQuery('/dashboard/categories')
  const user = sessionStorage.getItem('firstName')

  return (
    <div className='bg-[#F5F5F4] '>
      <LoggedInNavbar/>
      <div className='px-2 md:px-10 pb-10'>

        <section className='md:flex justify-between my-10'>
          <h2 className='text-2xl font-semibold'><span className='text-[#727272] font-normal'>Welcome,</span> {user}</h2>
          <div className=' flex md:gap-3 justify-between  mt-10 md:mt-0'>
            <Link href={'/groceries'}>
              <Button  variant='dashboardDefault'className="md:text-lg w-40 text-sm rounded-lg text-black border border-2 border-black hover:bg-[#013328] hover:border-0 hover:text-white  hover:cursor-pointer">
                Start Shopping
              </Button>
            </Link>
            <Link href={'/services'}>
              <Button variant='dashboardDefault'className="md:text-lg w-40 text-sm text-white rounded-lg bg-[#013328] hover:cursor-pointer">
                Find Services
              </Button>
            </Link>
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
