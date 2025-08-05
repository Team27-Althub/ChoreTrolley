// Payment.tsx
'use client'
import React, { useState } from 'react';
import { CreditCardIcon, BuildingIcon } from 'lucide-react'; // Example icons

const Payment: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>('Pay with Card'); // Set a default selection

  const paymentOptions = [
    { id: 'card', name: 'Pay with Card', icon: CreditCardIcon },
    { id: 'bank-transfer', name: 'Pay with Bank Transfer', icon: BuildingIcon },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">Payment</h2>
      <p className="text-gray-500 mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
        All transactions are secure and encrypted.
      </p>

      <div className="space-y-4">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            className={`flex items-center justify-between p-4 border rounded-md cursor-pointer ${
              selectedPayment === option.name
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => setSelectedPayment(option.name)}
          >
            <div className="flex items-center">
              <input
                id={option.id}
                name="payment-method"
                type="radio"
                checked={selectedPayment === option.name}
                onChange={() => setSelectedPayment(option.name)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label htmlFor={option.id} className="ml-3 block text-base font-medium text-gray-700">
                {option.name}
              </label>
            </div>
            <option.icon className="h-6 w-6 text-gray-500" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;