'use client'
import React from 'react'
import LoggedInNavbar from '../components/Major/LoggedInNavbar'
import image from '../../../public/service image.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GroceryFilter from './GroceriesFilter'
import { useCart } from 'react-use-cart'
import { useState } from 'react'
import ResponseModal from '../components/Minor/ResponseModal'

const GroceriesPage = () => {

  const [display1, setDisplay1] = useState('hidden')
  // const {addItem} = useCart()
  const { addItem } = useCart()

  const data = [
        {id:1 , name: 'Apple', category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:2 , name: 'Pear', category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:3 , name: 'Apple', category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:4 , name: 'Pear', category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:5 , name: 'Apple', category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:6 , name: 'Pineapple', category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    ]





  return (
    <div className='bg-[#F5F5F4] rounded-lg relative'>
      <LoggedInNavbar/>
      <div className={`${display1} absolute w-[100vw] top-20 bg-green-400`}>
        <ResponseModal responses='Product added successfully'/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 my-5 mx-3 md:mx-10 lg:mx-20'>
        <div className='bg-white hidden md:block'>
          <GroceryFilter/>
        </div>
        <div className=''>
          <h2 className='mb-10 font-bold text-xl'>All Groceries</h2>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 px-5'>
            {data.map((service, idx) => {

                   const addingItems = ()=>{
                      addItem(service)
                  
                      setTimeout(()=> {
                        setDisplay1('block')
                      }, 1000)
                  
                      setTimeout(()=> {
                        setDisplay1('hidden')
                      }, 3000)
                    }

              return (
                 <div 
                  className=" bg-[#fff] rounded-xl  h-80 w-full flex   flex-col gap-1 " key={idx}>
                  <Image src={image} alt="" className='h-[45%] rounded-t-2xl' />
                  <div className='px-2 mt-4'>
                    <h2 className='text-xl font-normal text-left'>{service.item}</h2>
                    <p className='text-sm text-gray-500'>{service.category}</p>
                    <div className='flex gap-3'>
                      <p className='text-sm'>{service.star}</p>
                      <p className='text-sm'>{service.rating}</p>
                    </div>
                    <h3 className='font-semibold text-xl mt-2'>${service.price}</h3>
                    <Button 
                    onClick={addingItems}
                    variant='dashboardDefault'
                    className="text-lg w-full mt-2 text-white rounded-md bg-[#013328] hover:cursor-pointer">
                      Add to cart
                    </Button>
                  </div>
                </div>
            )})}

          </div>
        </div>
      </div>
    </div>
  )
}

export default GroceriesPage
