'use client'
import React from 'react'

const GroceryFilter = ({ filters, setFilters }:any) => {
  const handleCategoryChange = (category:any) => {
    setFilters((prev:any) => ({
      ...prev,
      category,
    }))
  }

  const handleRatingChange = (rating:any) => {
    setFilters((prev:any) => ({
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
            setFilters((prev:any) => ({ ...prev, search: e.target.value }))
          }
          placeholder="Search groceries..."
          className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#013328]"
        />
      </div>

      {/* Category Filter */}
      <div>
        <h2 className="font-bold mb-2 text-lg">Category</h2>
        <div className="space-y-2">
          {["All", "Fruits", "Vegetables", "Snacks", "Drinks", "Meat"].map(
            (type) => (
              <label key={type} className="block cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={type}
                  checked={filters.category === type}
                  onChange={() => handleCategoryChange(type)}
                  className="mr-2 accent-[#013328]"
                />
                {type}
              </label>
            )
          )}
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
            setFilters((prev:any) => ({ ...prev, price: +e.target.value }))
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
                type="radio"
                name="rating"
                value={rating}
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
            category: "All",
            price: 500,
            rating: 1,
            search: "",
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
