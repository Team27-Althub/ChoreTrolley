"use client";
import React from "react";
import { Star } from "lucide-react";

type ServiceDetailsProps = {
  Details: {
    id: number;
    slug: string;
    title: string;
    category: {
      name: string
    };
    price?: string;
    rating: string;
    description: string;
    imageUrl: string;
  };
};
const ServiceDetails: React.FC<ServiceDetailsProps> = ({ Details }) => {
  return (
    <>
      {/* Back btn */}
      <div className="p-5 md:p-10 lg:p-2">
        <button
          onClick={() => window.history.back()}
          className="text-black  px-4 py-2 "
        >
          &larr; Back
        </button>
      </div>
      <div className="flex items-center justify-center  bg-white rounded-lg shadow-lg mx-3 md:mx-10 lg:mx-20 mb-10 lg:mt-5">
        <div className=" flex flex-col items-center justify-center max-w-3xl mx-auto p-5 md:p-10 text-center">
          {/* image */}
          <div className="w-27 h-27 rounded-full overflow-hidden">
            <img
              src={Details.imageUrl}
              alt={Details.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* title name/ category/ rating */}
          <div className="flex flex-col items-center justify-center mt-1 space-y-1">
            <h1 className="text-3xl font-bold mt-4">{Details.title}</h1>
            <p className="text-gray-500 text-lg">{Details.category.name}</p>
            <div className="flex items-center gap-3 mt-2 ">
              <div className="flex space-x-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <button key={idx}>
                    <Star size={20} fill="#FEAC15" className="text-[#FEAC15]" />
                  </button>
                ))}
              </div>
              <p className="text-sm">{Details.rating}</p>
              {/* Review */}
              <div className="flex items-center gap-1 ">
                <span>(180 reviews)</span>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="mt-6">
            <p className="text-gray-700">{Details.description}</p>
          </div>
          {/* Price */}
          <div className="mt-6">
            {Details.price ? (
              <h2 className="text-xl font-black">#{Details.price}/hr</h2>
            ) : (
              <h2 className="text-2xl font-semibold">Price not available</h2>
            )}
          </div>
          {/* Button */}
          <div className="mt-6">
            <button className="border border-[#013328] text-[#013328] px-6 py-3 rounded-lg ">
              Proceed to Booking
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
