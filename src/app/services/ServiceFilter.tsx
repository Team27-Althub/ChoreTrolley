'use client'
import React, { useState } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';

interface ExpandedSections {
  category: boolean;
  rating: boolean;
  priceRange: boolean;
  serviceType: boolean;
}

interface Rating {
  value: string;
  label: string;
  stars: number;
}

const ServiceFilter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedServiceTypes, setSelectedServiceTypes] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    category: true,
    rating: true,
    priceRange: true,
    serviceType: true
  });

  const categories: string[] = [
    'Home Cleaning',
    'Cooking',
    'Laundry',
    'Handy Man',
    'Gardening',
    'Pet Care'
  ];

  const ratings: Rating[] = [
    { value: '5.0', label: '5.0', stars: 5 },
    { value: '4.0', label: '4.0 & up', stars: 4 },
    { value: '3.0', label: '3.0 & up', stars: 3 },
    { value: '2.0', label: '2.0 & up', stars: 2 },
    { value: '1.0', label: '1.0 & up', stars: 1 }
  ];

  const serviceTypes: string[] = [
    'Full time',
    'Part Time',
    'On-Demand'
  ];

  const handleCategoryChange = (category: string): void => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleServiceTypeChange = (serviceType: string): void => {
    setSelectedServiceTypes(prev => 
      prev.includes(serviceType) 
        ? prev.filter(s => s !== serviceType)
        : [...prev, serviceType]
    );
  };

  const toggleSection = (section: keyof ExpandedSections): void => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearAllFilters = (): void => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedRating('');
    setPriceRange([0, 1000]);
    setSelectedServiceTypes([]);
  };

  const renderStars = (count: number, rating: string): React.ReactNode[] => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < count ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className=" bg-white p-6  rounded-lg ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button 
          onClick={clearAllFilters}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Clear all
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search for services"
          value={searchQuery}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Category */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex justify-between items-center w-full mb-3"
        >
          <h3 className="text-base font-medium text-gray-900">Category</h3>
          <ChevronDown 
            className={`w-4 h-4 text-gray-500 transform transition-transform ${
              expandedSections.category ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {expandedSections.category && (
          <div className="space-y-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('rating')}
          className="flex justify-between items-center w-full mb-3"
        >
          <h3 className="text-base font-medium text-gray-900">Rating</h3>
          <ChevronDown 
            className={`w-4 h-4 text-gray-500 transform transition-transform ${
              expandedSections.rating ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {expandedSections.rating && (
          <div className="space-y-3">
            {ratings.map((rating) => (
              <label key={rating.value} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={rating.value}
                  checked={selectedRating === rating.value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedRating(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <div className="ml-3 flex items-center gap-2">
                  <div className="flex">
                    {renderStars(rating.stars)}
                  </div>
                  <span className="text-sm text-gray-700">{rating.label}</span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('priceRange')}
          className="flex justify-between items-center w-full mb-3"
        >
          <h3 className="text-base font-medium text-gray-900">Price Range</h3>
          <ChevronDown 
            className={`w-4 h-4 text-gray-500 transform transition-transform ${
              expandedSections.priceRange ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {expandedSections.priceRange && (
          <div className="space-y-4">
            <div className="relative">
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div 
                className="absolute top-0 h-2 bg-green-600 rounded-lg pointer-events-none"
                style={{ 
                  left: `${(priceRange[0] / 1000) * 100}%`,
                  width: `${((priceRange[1] - priceRange[0]) / 1000) * 100}%`
                }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>₦{priceRange[0]}</span>
              <span>₦{priceRange[1]}M</span>
            </div>
          </div>
        )}
      </div>

      {/* Service Type */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('serviceType')}
          className="flex justify-between items-center w-full mb-3"
        >
          <h3 className="text-base font-medium text-gray-900">Service Type</h3>
          <ChevronDown 
            className={`w-4 h-4 text-gray-500 transform transition-transform ${
              expandedSections.serviceType ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        {expandedSections.serviceType && (
          <div className="space-y-3">
            {serviceTypes.map((serviceType) => (
              <label key={serviceType} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedServiceTypes.includes(serviceType)}
                  onChange={() => handleServiceTypeChange(serviceType)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-700">{serviceType}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Applied Filters Summary */}
      {(selectedCategories.length > 0 || selectedRating || selectedServiceTypes.length > 0) && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Applied Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {category}
                <button
                  onClick={() => handleCategoryChange(category)}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedRating && (
              <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                {selectedRating}+ stars
                <button
                  onClick={() => setSelectedRating('')}
                  className="ml-1 text-yellow-600 hover:text-yellow-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedServiceTypes.map((serviceType) => (
              <span
                key={serviceType}
                className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
              >
                {serviceType}
                <button
                  onClick={() => handleServiceTypeChange(serviceType)}
                  className="ml-1 text-green-600 hover:text-green-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceFilter;