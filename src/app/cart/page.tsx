'use client'
import React from 'react'
import LoggedInNavbar from '../components/Major/LoggedInNavbar'
import { useCart } from 'react-use-cart'
import { Button } from '@/components/ui/button'

const page = () => {
  

  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  return (
    <div className='bg-[#F5F5F4] h-[100vh]  w-full overflow-y-auto'>
      <LoggedInNavbar/>
      <div className='py-10 px-20'>
        <h2 className='text-xl font-semibold'>Cart</h2>
        <div className='mt-10 grid grid-cols-[60%_40%] gap-5'>
          <div className='bg-[#fff] rounded-xl  py-5'>
            <div className='flex justify-between px-13'>
              <h3 className='text-xl font-semibold'>Item (s)</h3>
              <h3 className='text-xl font-semibold'>Price</h3>
            </div>
            <div className='w-full h-[1px] bg-[#cecccc] my-3'></div>
            <div className='px-10'>
            {items.map((item, idx) => {
              return (
                <div key={idx} className='flex justify-between items-center py-5 px-3  border-[1px] my-3 border-[#cecccc] rounded-lg'>
                    <div>
                      <h3 className='text-lg font-semibold'>{item.name}</h3>
                      <p className='text-sm text-[#929292]'>{item.category}</p>
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold'>${item.price}</h3>
                    </div>
                </div>
              )
            })}
            </div>
          </div>
          <div className='bg-[#fff] rounded-xl py-5 h-80'>
            <div className='flex justify-between px-13'>
              <h3 className='text-xl font-semibold'>Order summary</h3>
            </div>
            <div className='w-full h-[1px] bg-[#cecccc] my-3'></div>
            <div className='flex justify-between px-13 items-center'>
              <h3 className='text-sm '>SubTotal</h3>
              <h3 className='text-xl font-semibold'>${cartTotal}</h3>
            </div>
            <div className='flex justify-between px-13 items-center'>
              <h3 className='text-sm '>Shipping</h3>
              <h3 className='text-xl font-semibold'>$200</h3>
            </div>
            <div className='flex justify-between px-13 items-center'>
              <h3 className='text-sm '>tax</h3>
              <h3 className='text-xl font-semibold'>$100</h3>
            </div>
            <div className='w-full h-[1px] bg-[#cecccc] my-3'></div>
            <div className='flex justify-between px-13'>
              <h3 className='text-xl font-semibold items-center'>Total</h3>
              <h3 className='text-xl font-semibold'>${cartTotal + 200 + 100}</h3>
            </div>
            <Button 
              variant='dashboardDefault'
              className="text-lg w-full mt-10 text-white rounded-md bg-[#013328] hover:cursor-pointer ">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
