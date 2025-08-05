'use client'
import React, { useState } from 'react'
import LoggedInNavbar from '../components/Major/LoggedInNavbar'
import { Button } from '@/components/ui/button'
import { Filter, X } from 'lucide-react' // Import the 'X' icon for closing
import ServiceFilter from './ServiceFilter'

const ServicePage = () => {
  const image3 = 'https://www.daibau.ng/showfile.php?uuid=b4358791a81603a00d5f42e70f8add69d52192e1'
  const image2 = 'https://images.ctfassets.net/ajjw8wywicb3/7FmJC0yRrvfmxEkg0FAujA/2fc0d9df8fb6bbdc82a4ac1067a5d760/HOW_TO_WASH_CLOTHES_The_art_of_washing_different_fabric_370x320.jpg?fm=png'
  const image5 = 'https://de-cleaners.com/wp-content/uploads/2025/03/clean-1.jpg'

  const data = [
    {id:1 , image: image5, Store: 'Expert Home Cleaning', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    {id:2 , image: image3, Store: 'Expert Home Sculptor', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    {id:3 , image: image5, Store: 'Expert Home Cleaning', category: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    {id:4 , image: image3, Store: 'Expert Home Sculptor', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    {id:5 , image: image5, Store: 'Expert Home Cleaning', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    {id:6 , image: image2, Store: 'Expert Home Wash', category: 'Home Cleaning', price: '200', description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
  ]

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <div className='bg-[#F5F5F4] rounded-lg relative overflow-x-hidden'>
      <LoggedInNavbar/>
      
      {/* Mobile Filter Button */}
      <div className='flex items-center justify-between p-4 md:hidden'>
        <h2 className='font-bold text-xl'>All services</h2>
        <Button 
          variant='secondary' 
          className='flex items-center text-black border-black border gap-2'
          onClick={toggleFilter}
          aria-expanded={isFilterOpen}
          aria-controls='mobile-filter-sidebar'
        >
          <Filter size={16} />
          Filters
        </Button>
      </div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 my-5 mx-3 md:mx-10 lg:mx-20'>
        {/* Desktop Filter Section */}
        <div className='bg-white hidden md:block'>
          <ServiceFilter/>
        </div>
        
        {/* Services List */}
        <div className=''>
          <h2 className='mb-10 font-bold text-xl hidden md:block'>All services</h2>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 px-5'>
            {data.map((service, idx) => (
              <div 
                className="bg-white rounded-xl w-full flex flex-col gap-1 shadow-xl"
                key={idx}
              >
                <img src={service.image} alt="" className='h-[45%] rounded-t-2xl w-full object-cover' />
                <div className='px-2 mt-4'>
                  <h2 className='md:text-xl font-semibold text-lg  text-left'>{service.Store}</h2>
                  <p className='text-sm text-gray-500'>{service.category}</p>
                  <div className='flex gap-3'>
                    <p className='text-sm'>{service.star}</p>
                    <p className='text-sm'>{service.rating}</p>
                  </div>
                  <h3 className='font-semibold md:text-xl text-lg'>${service.price}/hr</h3>
                  <p className='text-[12px] text-gray-500'>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar Filter Section */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-lg z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${
          isFilterOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex items-center justify-end  border-b'>
          {/* <h3 className='text-xl font-bold'>Filters</h3> */}
          <Button variant='ghost' onClick={toggleFilter}>
            <X size={24} />
          </Button>
        </div>
        <div className='px-4 py-10 overflow-y-auto h-[100vh]'>
          <ServiceFilter/>
        </div>
      </div>
      
      {/* Overlay to dim background */}
      {isFilterOpen && (
        <div 
          onClick={toggleFilter} 
          className='fixed inset-0 bg-[#b1b1b1ad] bg-opacity-50 z-50 md:hidden transition-opacity duration-300'
        />
      )}
    </div>
  )
}

export default ServicePage