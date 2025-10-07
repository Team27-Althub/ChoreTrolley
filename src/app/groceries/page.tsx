'use client'
import React, { useState, useEffect } from 'react'
import LoggedInNavbar from '../components/Major/LoggedInNavbar'
import { Button } from '@/components/ui/button'
import { Filter, X } from 'lucide-react'
import GroceryFilter from './GroceriesFilter'
import { useCart } from 'react-use-cart'
import ResponseModal from '../components/Minor/ResponseModal'
 import { useFetchResourceQuery } from '@/redux/api/crudApi'
 import RenderStars from '../services/Stars'
 import GroceryCardSkeleton from '../components/Major/Skeleton'

const GroceriesPage = () => {
  const [display1, setDisplay1] = useState('hidden')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { addItem, updateItemQuantity, items } = useCart()
  const {data: groceryData, isLoading:groceriesLoading, error:groceriesError} = useFetchResourceQuery('/groceries')

  // Prevent body scrolling when the filter sidebar is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFilterOpen])

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const image1 = 'https://assets.clevelandclinic.org/transform/LargeFeatureImage/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg'
  const image2 = 'https://www.stylecraze.com/wp-content/uploads/2013/07/Benefits-Of-Pears_1200px.jpg.webp'
  const image3 = 'https://www.healthxchange.sg/adobe/dynamicmedia/deliver/dm-aid--c06c2aed-90cf-4360-a423-7f053b2a44d9/pineapple-health-benefits-and-ways-to-enjoy.jpg?preferwebp=true'

  const data = [
    {id:'1' , name: 'Apple', image: image1, category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    {id:'2' , name: 'Pear', image: image2, category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    {id:'3' , name: 'Apple', image: image1, category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    {id:'4' , name: 'Pear', image: image2, category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    {id:'5' , name: 'Apple', image: image1, category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    {id:'6' , name: 'Pineapple', image: image3, category: 'Home Cleaning', price: 200, description:'Top-rated home cleaning service with eco-friendly products. Deep cleaning, regular maintenance, and move-out cleans.', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
  ]

  return (
    <div className='bg-[#F5F5F4] rounded-lg relative overflow-x-hidden'>
      <LoggedInNavbar/>
      
      {/* Success message modal */}
      <div className={`${display1} fixed w-[100vw] top-20 bg-green-400 z-50`}>
        <ResponseModal responses='Product added successfully'/>
      </div>

      {/* Mobile Filter Button */}
      <div className='flex items-center justify-between p-4 md:hidden'>
        <h2 className='font-bold text-xl'>All Groceries</h2>
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

      <div className='grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 my-5 mx-3 md:mx-10 lg:mx-20'>
        {/* Desktop Filter Section */}
        <div className='bg-white hidden md:block'>
          <GroceryFilter/>
        </div>
        
        {/* Groceries List */}
        <div className=''>
          <h2 className='mb-10 font-bold text-xl hidden md:block'>All Groceries</h2>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:px-5'>
            {
            groceriesLoading || groceriesError ? (
              // Show 6 skeletons
              Array.from({ length: 6 }).map((_, i) => <GroceryCardSkeleton key={i} />)
            ) : (
               groceryData?.data?.map((service: any) => {
              const addingItems = () => {
                addItem(service)
                setDisplay1('block')
                setTimeout(() => {
                  setDisplay1('hidden')
                }, 2000)
              }

              const currentItem = items.find((item) => item.id === service.id)
              const quantity = currentItem?.quantity || 0

              return (
                <div 
                  className="bg-[#fff] rounded-xl w-full h-80 flex flex-col gap-1 shadow-xl" 
                  key={service.id}
                >
                  <img src={service.imageUrl} alt={service.name} className='h-[45%] rounded-t-2xl object-cover' />
                  <div className='px-2 mt-4'>
                    <h2 className='text-xl font-normal text-left'>{service.name}</h2>
                    <p className='text-sm text-gray-500'>{service.groceryType}</p>
                    <div className='flex gap-3'>
                      {/* // <p className='text-sm'>{service.star}</p> */}
                      <RenderStars count={service?.serviceProvider?.rating}/>
                      <p className='text-sm'>{service.rating}</p>
                    </div>
                    <h3 className='font-semibold text-xl mt-2'>${service.price}</h3>
                    
                    
                    <Button 
                      onClick={addingItems}
                      variant='dashboardDefault'
                      className={`text-lg w-full mt-2 text-white rounded-md bg-[#013328] hover:cursor-pointer ${quantity > 0 ? 'hidden' : ''}`}>
                      Add to cart
                    </Button>

                    
                    <div className={`grid grid-cols-3 gap-2 ${quantity === 0 ? 'hidden' : ''}`}>
                      <Button 
                        onClick={() => {
                          if (quantity > 1) {
                            updateItemQuantity(service.id, quantity - 1)
                          } else {
                            updateItemQuantity(service.id, 0) // Remove the item
                          }
                        }}
                        variant='dashboardDefault'
                        className="text-lg w-full mt-2 text-white rounded-md bg-[#013328] hover:cursor-pointer">
                        -
                      </Button>
                      <div className='flex items-center justify-center'>
                        {quantity}
                      </div>
                      <Button 
                        onClick={() => updateItemQuantity(service.id, quantity + 1)}
                        variant='dashboardDefault'
                        className="text-lg w-full mt-2 text-white rounded-md bg-[#013328] hover:cursor-pointer">
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              )
            }))}
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar Filter Section */}
      <div 
        id='mobile-filter-sidebar'
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-lg z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${
          isFilterOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex items-center justify-end border-b'>
          {/* <h3 className='text-xl font-bold'>Filters</h3> */}
          <Button variant='ghost' onClick={toggleFilter} aria-label='Close filters' className=''>
            <X size={24} />
          </Button>
        </div>
        <div className='p-4 overflow-y-auto h-[calc(100vh-65px)]'>
          <GroceryFilter/>
        </div>
      </div>
      
      {/* Overlay to dim background */}
      {isFilterOpen && (
        <div 
          onClick={toggleFilter} 
          className='fixed inset-0 bg-[#b1b1b1ad] z-50 md:hidden transition-opacity duration-300'
        />
      )}
    </div>
  )
}

export default GroceriesPage