import React from 'react'
import LoggedInNavbar from '../components/Major/LoggedInNavbar'
import image from '../../../public/service image.png'
import Image from 'next/image'
import ServiceFilter from './ServiceFilter'

const ServicePage = () => {

  const data = [
        {id:1 , Store: 'Expert Home Cleaning', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:2 , Store: 'Expert Home Sculptor', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:3 , Store: 'Expert Home Cleaning', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:4 , Store: 'Expert Home Sculptor', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:5 , Store: 'Expert Home Cleaning', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:6 , Store: 'Expert Home Wash', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    ]


  return (
    <div className='bg-[#F5F5F4] rounded-lg'>
      <LoggedInNavbar/>
      <div className='grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 my-5 mx-3 md:mx-10 lg:mx-20'>
        <div className='bg-white hidden md:block'>
          <ServiceFilter/>
        </div>
        <div className=''>
          <h2 className='mb-10 font-bold text-xl'>All services</h2>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 px-5'>
            {data.map((service, idx) => {
              return (
                 <div 
                  className=" bg-[#fff] rounded-xl  h-96 w-full flex   flex-col gap-1 ">
                  <Image src={image} alt="" className='h-[45%] rounded-t-2xl w-full' />
                  <div className='px-2 mt-4'>
                    <h2 className='text-xl font-normal text-left'>{service.Store}</h2>
                    <p className='text-sm text-gray-500'>{service.category}</p>
                    <div className='flex gap-3'>
                      <p className='text-sm'>{service.star}</p>
                      <p className='text-sm'>{service.rating}</p>
                    </div>
                    <h3 className='font-semibold text-xl'>${service.price}/hr</h3>
                    <p className='text-[12px] text-gray-500'>{service.description}</p>
                  </div>
                </div>
            )})}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage
