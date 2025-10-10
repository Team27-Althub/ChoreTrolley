'use client'
import React, { useState, useEffect, useMemo } from 'react';

interface ShippingOption {
  id: string;
  name: string;
  price: number;
}

interface ShippingMethodProps {
  onSelect: (method: string, price: number) => void;
}

const ShippingMethod: React.FC<ShippingMethodProps> = ({ onSelect }) => {
  const [selectedShipping, setSelectedShipping] = useState<string>('Standard');

  const shippingOptions: ShippingOption[] = useMemo(
    () => [
      { id: 'economy', name: 'Economy', price: 1000 },
      { id: 'standard', name: 'Standard', price: 2500 },
      { id: 'express', name: 'Express', price: 5000 },
    ],
    []
  );

  // Notify parent anytime the user selects a new option
  useEffect(() => {
    const selectedOption = shippingOptions.find(
      (option) => option.name === selectedShipping
    );
    if (selectedOption) {
      onSelect(selectedOption.name, selectedOption.price);
    }
  }, [onSelect, selectedShipping, shippingOptions]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">Shipping Method</h2>
      <p className="text-gray-500 mb-6">Choose your preferred delivery speed.</p>

      <div className="space-y-4">
        {shippingOptions.map((option) => (
          <div
            key={option.id}
            className={`flex items-center justify-between p-4 border rounded-md cursor-pointer ${
              selectedShipping === option.name
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => setSelectedShipping(option.name)}
          >
            <div className="flex items-center">
              <input
                id={option.id}
                name="shipping-method"
                type="radio"
                checked={selectedShipping === option.name}
                onChange={() => setSelectedShipping(option.name)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label
                htmlFor={option.id}
                className="ml-3 block text-base font-medium text-gray-700"
              >
                {option.name}
              </label>
            </div>
            <span className="text-lg font-semibold text-gray-900">
              ₦{option.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingMethod;
