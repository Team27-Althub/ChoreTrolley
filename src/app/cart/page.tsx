'use client'
import React from 'react'
import LoggedInNavbar from '../components/Major/LoggedInNavbar'
import { useCart } from 'react-use-cart'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import image from '../../../public/emptycart.svg'

const CartPage = () => {
 const {
  isEmpty,
  items,
  cartTotal,
  updateItemQuantity,
  removeItem,
 } = useCart();

 const shippingFee = 200;
 const tax = 100;
 const total = cartTotal + shippingFee + tax;

 return (
  <div className='bg-[#F5F5F4] h-full min-h-screen w-full overflow-y-auto'>
   <LoggedInNavbar />
   <div className='py-10 px-5 md:px-10 lg:px-20'>
    <h2 className='text-xl font-semibold mb-8'>Your Cart</h2>
    {isEmpty ? (
     <div className='flex flex-col items-center justify-center  w-full h-[50vh]'>
      <p className='text-xl text-gray-500'>Your cart is empty.</p>
      <Image src={image} alt='' width={300} height={300} className='mt-10'/>
      <Link href='/groceries'>
       <Button variant='dashboardDefault' className='mt-5 p-5 bg-[#013328] text-xl text-white hover:cursor-pointer'>
        Start Shopping
       </Button>
      </Link>
     </div>
    ) : (
     <div className='grid grid-cols-1 md:grid-cols-[60%_40%] gap-5'>
      {/* Cart Items Section */}
      <div className='bg-white rounded-xl shadow-md py-5 px-5'>
       <div className='flex justify-between px-3 md:px-10'>
        <h3 className='text-xl font-semibold'>Item (s)</h3>
        <h3 className='text-xl font-semibold'>Price</h3>
       </div>
       <div className='w-full h-[1px] bg-[#cecccc] my-3'></div>
       <div className='px-3 md:px-5'>
        {items.map((item) => (
         <div key={item.id} className='flex flex-row justify-between items-center py-5 px-3 border-[1px] my-3 border-[#cecccc] rounded-lg'>
          <div className='flex items-center space-x-4 w-full md:w-auto mb-4 md:mb-0'>
           <Image
            src={item.image}
            alt={item.name || 'Item image'}
            width={100}
            height={100}
            className='w-20 h-20 object-cover rounded-md'
           />
           <div className='flex-grow'>
            <h3 className='text-lg font-semibold'>{item.name}</h3>
            <p className='text-sm text-[#929292]'>{item.category}</p>
          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
           <div className='flex items-center space-x-2'>
            <Button 
             onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
             variant='ghost' 
             className='p-1 h-8 w-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300'>
             -
            </Button>
            <span className='text-lg font-medium'>{item.quantity}</span>
            <Button 
             onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
             variant='ghost'
             className='p-1 h-8 w-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300'>
             +
            </Button>
           </div>
          </div>
           </div>
          </div>
          
          {/* Quantity and price controls */}
            <h3 className='text-lg font-semibold w-20 text-right'>₦ {item.itemTotal}</h3>
         </div>
        ))}
       </div>
      </div>
      {/* Order Summary Section */}
      <div className='bg-white rounded-xl shadow-md py-5 px-5 h-fit sticky top-28'>
       <h3 className='text-xl font-semibold mb-3'>Order Summary</h3>
       <div className='w-full h-[1px] bg-[#cecccc] my-3'></div>
       <div className='space-y-4'>
        <div className='flex justify-between items-center'>
         <h3 className='text-sm'>SubTotal</h3>
         <h3 className='text-lg font-semibold'>₦ {cartTotal.toFixed(2)}</h3>
        </div>
        <div className='flex justify-between items-center'>
         <h3 className='text-sm'>Shipping</h3>
         <h3 className='text-lg font-semibold'>₦ {shippingFee.toFixed(2)}</h3>
        </div>
        <div className='flex justify-between items-center'>
         <h3 className='text-sm'>Tax</h3>
         <h3 className='text-lg font-semibold'>₦ {tax.toFixed(2)}</h3>
        </div>
       </div>
       <div className='w-full h-[1px] bg-[#cecccc] my-5'></div>
       <div className='flex justify-between items-center'>
        <h3 className='text-xl font-semibold'>Total</h3>
        <h3 className='text-xl font-semibold'>₦ {total.toFixed(2)}</h3>
       </div>
       <Link href='/checkout'>
        <Button 
         variant='dashboardDefault'
         className="text-lg w-full mt-10 text-white rounded-md bg-[#013328] hover:cursor-pointer">
         Proceed to Checkout
        </Button>
       </Link>
      </div>
     </div>
    )}
   </div>
  </div>
 )
}

export default CartPage