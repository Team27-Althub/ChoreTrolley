'use client'
import React from 'react'
import { useFetchResourceQuery } from '@/redux/api/crudApi'

const ServiceFilter = ({ filters, setFilters }: any) => {
      const {data: serviceCategory, error:category, isLoading:loading} = useFetchResourceQuery('/services/categories')
  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setFilters((prev: any) => ({
        ...prev,
        categories: [],
      }))
    } else {
      setFilters((prev: any) => ({
        ...prev,
        categories:
          prev.categories.includes(category)
            ? prev.categories.filter((c: string) => c !== category)
            : [...prev.categories, category],
      }))
    }
  }

  const handleRatingChange = (rating: string) => {
    setFilters((prev: any) => ({
      ...prev,
      rating: prev.rating === rating ? '' : rating,
    }))
  }

  const handlePriceChange = (e: any) => {
    const value = Number(e.target.value)
    setFilters((prev: any) => ({
      ...prev,
      priceRange: [0, value],
    }))
  }

  const handleServiceTypeChange = (type: string) => {
    setFilters((prev: any) => ({
      ...prev,
      serviceTypes:
        prev.serviceTypes.includes(type)
          ? prev.serviceTypes.filter((t: string) => t !== type)
          : [...prev.serviceTypes, type],
    }))
  }

  return (
    <div className="p-4 space-y-6">
      {/* Search */}
      <div>
        <h2 className="font-bold mb-2 text-lg">Search</h2>
        <input
          type="text"
          value={filters.search}
          onChange={(e) =>
            setFilters((prev: any) => ({ ...prev, search: e.target.value }))
          }
          placeholder="Search services..."
          className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#013328]"
        />
      </div>

        {/* Category Filter */}
        <div>
          <h2 className="font-bold mb-2 text-lg">Category</h2>
          <div className="space-y-2">
            {/* “All” option */}
            <label className="block cursor-pointer">
              <input
                type="checkbox"
                checked={filters.categories.length === 0}
                onChange={() =>
                  setFilters((prev: any) => ({
                    ...prev,
                    categories: [],
                  }))
                }
                className="mr-2 accent-[#013328]"
              />
              All
            </label>

            {/* Dynamic categories from API */}
            {serviceCategory?.data?.map((category: any) => (
              <label key={category.id} className="block cursor-pointer capitalize">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category.name)}
                  onChange={() => {
                    setFilters((prev: any) => {
                      const isSelected = prev.categories.includes(category.name)
                      return {
                        ...prev,
                        categories: isSelected
                          ? prev.categories.filter((c: string) => c !== category.name)
                          : [...prev.categories, category.name],
                      }
                    })
                  }}
                  className="mr-2 accent-[#013328]"
                />
                {category.name}
              </label>
            ))}
          </div>
        </div>


      {/* Price Range */}
      <div>
        <h2 className="font-bold mb-2 text-lg">Price Range</h2>
        <input
          type="range"
          min="0"
          max="500000"
          step="500"
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
          className="w-full accent-[#013328]"
        />
        <p className="text-sm text-gray-600 mt-1">
          Up to ₦{filters.priceRange[1].toLocaleString()}
        </p>
      </div>

      {/* Rating */}
      <div>
        <h2 className="font-bold mb-2 text-lg">Minimum Rating</h2>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="block cursor-pointer">
              <input
                type="checkbox"
                checked={filters.rating === String(rating)}
                onChange={() => handleRatingChange(String(rating))}
                className="mr-2 accent-[#013328]"
              />
              {rating}★ & up
            </label>
          ))}
        </div>
      </div>

      {/* Service Type */}
      <div>
        <h2 className="font-bold mb-2 text-lg">Service Type</h2>
        <div className="space-y-2">
          {['Online', 'Onsite'].map((type) => (
            <label key={type} className="block cursor-pointer">
              <input
                type="checkbox"
                checked={filters.serviceTypes.includes(type)}
                onChange={() => handleServiceTypeChange(type)}
                className="mr-2 accent-[#013328]"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() =>
          setFilters({
            search: '',
            categories: [],
            rating: '',
            priceRange: [0, 500000],
            serviceTypes: [],
          })
        }
        className="w-full bg-gray-200 hover:bg-[#013328] hover:text-white text-gray-700 font-medium py-2 rounded-md transition-colors"
      >
        Reset Filters
      </button>
    </div>
  )
}

export default ServiceFilter
