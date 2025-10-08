// DeliveryInformation.tsx
import React, {useState} from 'react';
import { MapPinIcon } from 'lucide-react'
import { ProviderResponse } from '../components/Major/profileType';
import nigeriaCities from '../profile/cityData';


interface Props {
  profile: ProviderResponse
}

const DeliveryInformation: React.FC<Props> = ({profile}) => {

  const [selectedCity, setSelectedCity] = useState('')

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">Delivery Information</h2>
      <p className="text-gray-500 mb-6">Where should we deliver your groceries or send the service provider?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            defaultValue={profile?.data?.firstName}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            defaultValue={profile?.data?.lastName}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
          Address
        </label>
        <div className="relative">
          <input
            type="text"
            id="address"
            defaultValue={profile?.data?.address}
            className="mt-1 block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
          <select
            id="state"
            value={profile?.data?.state}
            disabled
            className="mt-1 block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            {nigeriaCities.map((data, idx) => (
              <option key={idx} value={data.state}>
                {data.state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <select
            id="city"
            disabled
            defaultValue={profile?.data?.city}
            className="mt-1 block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
           
            <option value={profile?.data?.city}>{profile?.data?.city}</option>
            {/* Add more cities as needed */}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={profile?.data?.phone}
          placeholder="Enter phone number"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <p className="mt-2 text-sm text-gray-500">
          For delivery updates and urgent contact.
        </p>
      </div>
    </div>
  );
};

export default DeliveryInformation;