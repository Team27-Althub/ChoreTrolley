import React from 'react';
import { MapPin, Phone, ChevronDown, Star } from 'lucide-react';

const PersonalInfoForm = () => {
  return (
    <div className="bg-white max-w-3xl mx-auto p-8 rounded-lg shadow-md">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src="https://i.pravatar.cc/80?img=5"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">Ade Oluwa</h2>
          <p className="text-gray-500 text-sm">Home-owner</p>
          <div className="flex items-center gap-1 text-sm mt-1">
            <Star className="text-yellow-400 fill-yellow-400" size={14} />
            <Star className="text-yellow-400 fill-yellow-400" size={14} />
            <Star className="text-yellow-400 fill-yellow-400" size={14} />
            <Star className="text-yellow-400 fill-yellow-400" size={14} />
            <Star className="text-yellow-400 fill-yellow-400" size={14} />
            <span className="font-semibold">5.0</span>
            <span className="text-gray-500">(18 reviews)</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">First Name</label>
            <input
              type="text"
              defaultValue="Ade"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Last Name</label>
            <input
              type="text"
              defaultValue="Oluwa"
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Address</label>
          <div className="relative">
            <input
              type="text"
              defaultValue="123 Shodeinde Close VI, Lagos"
              className="w-full border rounded-md px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-green-500"
            />
            <MapPin className="absolute right-3 top-3 text-gray-400" size={18} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">State</label>
            <div className="relative">
              <select className="w-full border rounded-md px-3 py-2 appearance-none outline-none focus:ring-2 focus:ring-green-500">
                <option>Lagos</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400" size={18} />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">City</label>
            <div className="relative">
              <select className="w-full border rounded-md px-3 py-2 appearance-none outline-none focus:ring-2 focus:ring-green-500">
                <option>Lagos</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone (Optional)</label>
          <div className="relative">
            <input
              type="tel"
              defaultValue="081 346 8972"
              className="w-full border rounded-md px-3 py-2 pr-10 outline-none focus:ring-2 focus:ring-green-500"
            />
            <Phone className="absolute right-3 top-3 text-gray-400" size={18} />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            For delivery updates and urgent contact.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-200 text-gray-600 font-medium py-2 rounded-md hover:bg-[#013328] hover:text-white transition-colors"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
