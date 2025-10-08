'use client'
import React from 'react';
import { ProviderResponse } from '../components/Major/profileType';



interface Props {
  profile: ProviderResponse
}

const YourDetails: React.FC<Props> = ({profile}) => {

  // const  profileInfo = profile?.data
  console.log(profile?.data?.user?.email)
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">Your Details</h2>
      <p className="text-gray-500 mb-6">Please review your contact information.</p>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          disabled
          value={profile?.data?.user?.email}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <p className="mt-2 text-sm text-gray-500">
          You will receive order updates on this email address.
        </p>
      </div>
    </div>
  );
};

export default YourDetails;