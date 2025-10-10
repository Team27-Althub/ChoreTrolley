'use client'
import React, { useState } from 'react'
import ContractType from '@/app/checkout/ContractType'
import DeliveryInformation from '@/app/checkout/DeliveryInformation'
import Payment from '@/app/checkout/Payment'
import ShippingMethod from '@/app/checkout/ShippingMethod'
import YourDetails from '@/app/checkout/YourDetails'
import LoggedInNavbar from '@/app/components/Major/LoggedInNavbar'
import OrderSummary from './ServiceSummary'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useFetchResourceQuery } from "@/redux/api/crudApi";



const CheckoutPage = () => {

  const { data: profileData, error: profileError, isLoading: profileLoading } = useFetchResourceQuery('/profile')
  const [shippingMethod, setShippingMethod] = useState<string>()
  const [shippingAmount, setShippingAmount] = useState<number>()

    const handleShippingSelect = (method: string, price: number) => {
    console.log("Selected shipping:", method, price);
    setShippingAmount(price)
    setShippingMethod(method)
  };

  return (


    <div className="bg-[#F5F5F4] ">
        {/* <LoggedInNavbar/> */}
        <Link href={'/cart'} className='flex px-2 md:px-10 text-xl items-center pt-5'>
          <ArrowLeft/>  Back
        </Link>
        <h2 className='mx-2 md:mx-10  my-5 text-2xl font-semibold'>Checkout</h2>
        <div className='px-2 md:px-10 grid gap-5 pt-5 pb-10 grid-cols-1 md:grid-cols-[60%_40%]'>
            <div className='flex flex-col gap-5'>
                <YourDetails profile={profileData}/>
                <DeliveryInformation profile={profileData}/>
                {/* <ShippingMethod onSelect={handleShippingSelect} /> */}
                {/* <ContractType/> */}
                {/* <Payment/> */}
            </div>
            <div>
                <OrderSummary shipping={shippingAmount} method={shippingMethod}/>
                {/* lol */}
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage
