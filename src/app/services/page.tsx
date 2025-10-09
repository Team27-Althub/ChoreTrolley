'use client'
import React, { useState } from 'react'
import LoggedInNavbar from '../components/Major/LoggedInNavbar'
import { Button } from '@/components/ui/button'
import { Filter, X } from 'lucide-react' // Import the 'X' icon for closing
import ServiceFilter from './ServiceFilter'
  import { useFetchResourceQuery } from '@/redux/api/crudApi'
  import RenderStars from './Stars'
  import GroceryCardSkeleton from '../components/Major/Skeleton'
  import Link from 'next/link'

const ServicePage = () => {
    const {data: serviceData, error, isLoading} = useFetchResourceQuery('/services')
    const {data: serviceCategory, error:category, isLoading:loading} = useFetchResourceQuery('/services/categories')

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
            {
               isLoading || error ? (

                Array.from({ length: 6 }).map((_, i) => <GroceryCardSkeleton key={i} />)
                ) : (
              serviceData?.data?.map((service:any) => (
                <Link 
               key={service.id}
               // Use both id and slug in the URL
              href={`/services/${service.id}-${service.title}`} 
                className="bg-white rounded-xl w-full flex flex-col gap-1 shadow-xl"
               
              >
                  <img src={`https://choretrolley-apiservice-production.up.railway.app${service.imageUrl}`} alt="" className='h-[45%] rounded-t-2xl w-full object-cover' />
                  <div className='px-2 mt-4'>
                    <h2 className='md:text-xl font-semibold text-lg  text-left'>{service.title}</h2>
                    <p className='text-sm text-gray-500'>{service.category.name}</p>
                    <div className='flex gap-3'>
                      <RenderStars count={service?.serviceProvider?.rating}/>
                      <p className='text-sm'>{service?.serviceProvider?.rating}.0</p> 
                    </div>
                    <h3 className='font-semibold md:text-xl text-lg'>₦{service.price}/hr</h3>
                  <p className='text-[12px] hidden md:block text-gray-500'>{service.description.slice(0,150)}..</p>
                  <p className='text-[12px] block md:hidden text-gray-500'>{service.description.slice(0,90)}....</p>
                  </div>
                </Link>
              )))}
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