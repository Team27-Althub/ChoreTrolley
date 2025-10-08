'use client'
import React from 'react'
import ContractType from './ContractType'
import DeliveryInformation from './DeliveryInformation'
import Payment from './Payment'
import ShippingMethod from './ShippingMethod'
import YourDetails from './YourDetails'
import LoggedInNavbar from '../components/Major/LoggedInNavbar'
import OrderSummary from './OrderSummary'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useFetchResourceQuery } from "@/redux/api/crudApi";



const CheckoutPage = () => {

  const { data: profileData, error: profileError, isLoading: profileLoading } = useFetchResourceQuery('/profile')

    const handleShippingSelect = (method: string, price: number) => {
    console.log("Selected shipping:", method, price);
    // You can dispatch to Redux here if needed
  };

  return (
    <div className="bg-[#F5F5F4] ">
        <LoggedInNavbar/>
        <Link href={'/cart'} className='flex px-10 text-xl items-center mt-5'>
          <ArrowLeft/>  Back
        </Link>
        <h2 className='mx-10  my-5 text-2xl font-semibold'>Checkout</h2>
        <div className='px-10 grid gap-5 pt-5 pb-10 grid-cols-1 md:grid-cols-[60%_40%]'>
            <div className='flex flex-col gap-5'>
                <YourDetails profile={profileData}/>
                <DeliveryInformation profile={profileData}/>
                <ShippingMethod onSelect={handleShippingSelect}/>
                {/* <ContractType/> */}
                {/* <Payment/> */}
            </div>
            <div>
                <OrderSummary/>
                {/* lol */}
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage
