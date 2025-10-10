'use client'
import React from 'react'
import { useFetchResourceQuery } from '@/redux/api/crudApi'

const GroceryFilter = ({ filters, setFilters }: any) => {
  const {
    data: serviceCategory,
    error: categoryError,
    isLoading: loading,
  } = useFetchResourceQuery('/category/grocery')

  const handleCategoryChange = (selectedCategory: string) => {
    setFilters((prev: any) => ({
      ...prev,
      category: selectedCategory,
    }))
  }

  const handleRatingChange = (rating: number) => {
    setFilters((prev: any) => ({
      ...prev,
      rating,
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
          placeholder="Search groceries..."
          className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#013328]"
        />
      </div>

      {/* Category Filter */}
      <div>
        <h2 className="font-bold mb-2 text-lg">Category</h2>
        <div className="space-y-2">
          {/* “All” Checkbox */}
          <label className="block cursor-pointer">
            <input
              type="checkbox"
              checked={filters.category === 'All'}
              onChange={() => handleCategoryChange('All')}
              className="mr-2 accent-[#013328]"
            />
            All
          </label>

          {/* Dynamic Categories */}
          {loading && <p className="text-sm text-gray-500">Loading categories...</p>}
          {categoryError && <p className="text-sm text-red-500">Error loading categories</p>}

          {serviceCategory?.data?.map((cat: any) => (
            <label key={cat.id} className="block cursor-pointer capitalize">
              <input
                type="checkbox"
                checked={filters.category === cat.name}
                onChange={() => handleCategoryChange(cat.name)}
                className="mr-2 accent-[#013328]"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h2 className="font-bold mb-2 text-lg">Price Range</h2>
        <input
          type="range"
          min="0"
          max="50000"
          step="5"
          value={filters.price}
          onChange={(e) =>
            setFilters((prev: any) => ({ ...prev, price: +e.target.value }))
          }
          className="w-full accent-[#013328]"
        />
        <p className="text-sm text-gray-600 mt-1">Up to ₦{filters.price}</p>
      </div>

      {/* Rating Filter */}
      <div>
        <h2 className="font-bold mb-2 text-lg">Minimum Rating</h2>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="block cursor-pointer">
              <input
                type="checkbox"
                checked={filters.rating === rating}
                onChange={() => handleRatingChange(rating)}
                className="mr-2 accent-[#013328]"
              />
              {rating}★ & up
            </label>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() =>
          setFilters({
            category: 'All',
            price: 500,
            rating: 1,
            search: '',
          })
        }
        className="w-full bg-gray-200 hover:bg-[#013328] hover:text-white text-gray-700 font-medium py-2 rounded-md transition-colors"
      >
        Reset Filters
      </button>
    </div>
  )
}

export default GroceryFilter
