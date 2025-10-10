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
  const [filters, setFilters] = useState({
    category: 'All',
    price: 50000, // adjust to your product range
    rating: 1,
    search: '',
  })

  const { addItem, updateItemQuantity, items } = useCart()
  const {
    data: groceryData,
    isLoading: groceriesLoading,
    error: groceriesError,
  } = useFetchResourceQuery('/groceries')

  // Prevent body scroll when mobile filter is open
  useEffect(() => {
    document.body.style.overflow = isFilterOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFilterOpen])

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen)

  // 🔍 Filtering Logic
  const filteredGroceries = groceryData?.data?.filter((item:any) => {
    const categoryMatch =
      filters.category === 'All' ||
      item.category?.name?.toLowerCase() === filters.category.toLowerCase()

    const priceNum = parseFloat(item.price)
    const priceMatch = !isNaN(priceNum) && priceNum <= filters.price

    const ratingNum = parseFloat(item.rating)
    const ratingMatch = !isNaN(ratingNum) && ratingNum >= filters.rating

    const searchMatch = item.name
      ?.toLowerCase()
      .includes(filters.search.toLowerCase())

    return categoryMatch && priceMatch && ratingMatch && searchMatch
  })

  return (
    <div className='bg-[#F5F5F4] min-h-[100vh] rounded-lg relative overflow-x-hidden'>
      <LoggedInNavbar />

      {/* Success message modal */}
      <div className={`${display1} fixed w-[100vw] top-20 bg-green-400 z-50`}>
        <ResponseModal responses='Product added successfully' />
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
        <div className='bg-white hidden md:block rounded-lg'>
          <GroceryFilter filters={filters} setFilters={setFilters} />
        </div>

        {/* Groceries List */}
        <div>
          <h2 className='mb-5 font-bold text-xl hidden md:block'>
            Showing {filteredGroceries?.length || 0} Results
          </h2>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:px-5'>
            {groceriesLoading || groceriesError ? (
              Array.from({ length: 6 }).map((_, i) => (
                <GroceryCardSkeleton key={i} />
              ))
            ) : filteredGroceries?.length === 0 ? (
              <p className='text-gray-600 col-span-full text-center'>
                No groceries match your filters.
              </p>
            ) : (
              filteredGroceries.map((service:any) => {
                const addingItems = () => {
                  addItem({
                    id: service.id,
                    name: service.name,
                    price: parseFloat(service.price),
                    imageUrl: `https://choretrolley-apiservice-production.up.railway.app${service.imageUrl}`,
                    groceryType: service.groceryType,
                    rating: parseFloat(service.rating),
                  })
                  setDisplay1('block')
                  setTimeout(() => setDisplay1('hidden'), 2000)
                }

                const currentItem = items.find((item) => item.id === service.id)
                const quantity = currentItem?.quantity || 0

                return (
                  <div
                    className='bg-[#fff] rounded-xl w-full h-80 flex flex-col shadow-xl'
                    key={service.id}
                  >
                    <img
                      src={`https://choretrolley-apiservice-production.up.railway.app${service.imageUrl}`}
                      alt={service.name}
                      className='h-[45%] rounded-t-2xl object-cover'
                    />
                    <div className='px-2 mt-4 flex flex-col justify-between pb-2 h-[55%]'>
                      <div>
                        <h2 className=' text-sm md:text-lg font-semibold  leading-tight text-left'>
                        {service.name}
                        </h2>
                        <p className='text-sm text-gray-500'>
                          {service.category?.name}
                        </p>
                        <div className='flex gap-3'>
                          <RenderStars count={parseFloat(service.rating)} />
                          <p className='text-sm'>{service.rating}</p>
                        </div>
                        <h3 className='font-semibold text-sm md:text-[16px]'>
                          ₦{service.price}
                        </h3>
                      </div>

                     <div>
                       <Button
                        onClick={addingItems}
                        variant='dashboardDefault'
                        className={`text-lg w-full mt-2 text-white rounded-md bg-[#013328] hover:cursor-pointer ${
                          quantity > 0 ? 'hidden' : ''
                        }`}
                        >
                          Add to cart
                        </Button>

                        <div
                          className={`grid grid-cols-3 gap-2 ${
                            quantity === 0 ? 'hidden' : ''
                          }`}
                        >
                          <Button
                            onClick={() =>
                              updateItemQuantity(
                                service.id,
                                Math.max(0, quantity - 1)
                              )
                            }
                            variant='dashboardDefault'
                            className='text-lg w-full mt-2 text-white rounded-md bg-[#013328] hover:cursor-pointer'
                          >
                            -
                          </Button>
                          <div className='flex items-center justify-center'>
                            {quantity}
                          </div>
                          <Button
                            onClick={() =>
                              updateItemQuantity(service.id, quantity + 1)
                            }
                            variant='dashboardDefault'
                            className='text-lg w-full mt-2 text-white rounded-md bg-[#013328] hover:cursor-pointer'
                          >
                            +
                          </Button>
                        </div>
                     </div>
                    </div>
                  </div>
                )
              })
            )}
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
          <Button variant='ghost' onClick={toggleFilter} aria-label='Close filters'>
            <X size={24} />
          </Button>
        </div>
        <div className='p-4 overflow-y-auto h-[calc(100vh-65px)]'>
          <GroceryFilter filters={filters} setFilters={setFilters} />
        </div>
      </div>

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
