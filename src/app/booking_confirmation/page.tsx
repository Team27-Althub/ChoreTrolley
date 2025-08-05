'use client'
import React from 'react'
import ContractType from '../checkout/ContractType'
import DeliveryInformation from '../checkout/DeliveryInformation'
import Payment from '../checkout/Payment'
import ShippingMethod from '../checkout/ShippingMethod'
import YourDetails from '../checkout/YourDetails'
import LoggedInNavbar from '../components/Major/LoggedInNavbar'
import OrderSummary from '../checkout/OrderSummary'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useCart } from 'react-use-cart'
import { Button } from '@/components/ui/button'
import image from '../../../public/Group 77.png'
import Image from 'next/image'



const CheckoutPage = () => {

              const {
                // isEmpty,
                // totalUniqueItems,
                // items,
                cartTotal,
                // updateItemQuantity,
                // removeItem,
              } = useCart();

  return (
    <div className="bg-[#F5F5F4] ">
        <LoggedInNavbar/>
    <div className=" p-6 rounded-lg shadow-sm w-full">
      {/* <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2> */}
        <div className='md:px-10 grid gap-5 pt-5 pb-10 grid-cols-1 md:grid-cols-[60%_40%]'>
            <div className='flex flex-col gap-5'>
                <div className='h-[400px] flex flex-col items-center justify-center bg-white rounded-xl'>
                    <Image src={image} alt=''/>
                    <h2 className='lg:text-4xl text-2xl font-semibold my-5'>Order Place Successfully</h2>
                    <p className='text-lg font-semibold mt-5 mb-10 text-[#4e4e4eaf]'>Your order has been successfully placed.</p>
                </div>
                <div className=' flex flex-col items-center py-10 px-2 justify-center bg-white rounded-xl'>
                    <h2 className='lg:text-4xl text-2xl font-semibold my-5 text-[#4e4e4efd]'>Your order ID is:</h2>
                    <h2 className='lg:text-4xl text-2xl  font-semibold text-[#015e32]'>CHORETROLLEY-CONF-20240510-12345</h2>
                    <p className='lg:text-lg text-sm  font-semibold mt-5  text-[#4e4e4eaf]'>Your order has been successfully placed.</p>
                </div>
            </div>
            <div>
                <div className="bg-white p-6 rounded-lg shadow-sm w-full">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

      <div className='bg-[#fff] rounded-xl py-5 flex flex-col gap-2'>
            <div className='flex justify-between  items-center'>
                <h3 className='text-sm '>SubTotal</h3>
                <h3 className='text-xl font-semibold'>₦ {cartTotal}</h3>
                </div>
                <div className='flex justify-between  items-center'>
                <h3 className='text-sm '>Shipping</h3>
                <h3 className='text-xl font-semibold'>₦ 200</h3>
                </div>
                <div className='flex justify-between  items-center'>
                <h3 className='text-sm '>tax</h3>
                <h3 className='text-xl font-semibold'>₦ 100</h3>
                </div>
                <div className='flex justify-between '>
                <h3 className='text-xl font-semibold items-center'>Total</h3>
                <h3 className='text-xl font-semibold'>₦ {cartTotal + 200 + 100}</h3>
                </div>
                <Link href='/booking_confirmation'>
                <Button 
                    variant='dashboardDefault'
                    className="text-lg w-full mt-10 text-white rounded-md bg-[#013328] hover:cursor-pointer ">
                    Track My Order
                </Button>
                </Link>
            </div>
        </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default CheckoutPage
