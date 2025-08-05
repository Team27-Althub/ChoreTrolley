// ContractType.tsx
'use client'
import React, { useState } from 'react';
import { ArrowRightLeftIcon, ArrowBigRightDash} from 'lucide-react'; // Example icons

const ContractType: React.FC = () => {
  const [selectedContract, setSelectedContract] = useState<string>('One Time'); // Set a default selection

  const contractOptions = [
    { id: 'one-time', name: 'One Time', icon: ArrowRightLeftIcon },
    { id: 'recurring', name: 'Recurring', icon: ArrowBigRightDash },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">Contract type</h2>
      <p className="text-gray-500 mb-6">Choose the type of contract you want</p>

      <div className="space-y-4">
        {contractOptions.map((option) => (
          <div
            key={option.id}
            className={`flex items-center justify-between p-4 border rounded-md cursor-pointer ${
              selectedContract === option.name
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => setSelectedContract(option.name)}
          >
            <div className="flex items-center">
              <input
                id={option.id}
                name="contract-type"
                type="radio"
                checked={selectedContract === option.name}
                onChange={() => setSelectedContract(option.name)}
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

export default ContractType;