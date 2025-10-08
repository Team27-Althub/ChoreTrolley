"use client"
import React from "react";
import { useState } from "react";
import { Star } from "lucide-react";
import Review from "./Review"
import { reviews } from "../../../lib/review";



const CustomerReview = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className=" flex items-center justify-center  bg-white rounded-lg shadow-lg   ">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl py-5 md:py-10 lg:py-6 bg-white rounded-lg shadow-lg">
        <div className="w-full px-6 ">
          <h3 className="font-bold text-xl">Customer Review</h3>
        </div>
        {/* Divider */}
        <div className="border-b border-gray-300 w-full my-2"></div>
        {/* Rating */}
        <div className="w-full flex items-center p-3 space-x-3">
          <h1 className="font-black text-[2.5rem] text-[#0C6B57]">5.0</h1>
          <div className="flex space-x-1 text-yellow-500">
            {Array.from({length: 5}).map((_, idx) => (
              <button key={idx} onClick={() => setRating(idx + 1)}>
                <Star  size={20} fill={idx + 1 <= rating ? "currentColor" : "none"} className={idx + 1 <= rating ? "text-[#FEAC15]" : "text-gray-300"}/>
              </button>
            )) }
          </div>
            <span className="text-xl text-black/50">(180 reviews)</span>
        </div>
        {/* Cards */}
        <div className=" w-full  h-270 px-2 overflow-y-scroll scrollbar-hide">
          {reviews.map((review,idx) => (
              <div
                key={idx + 1} 
                className="w-full border border-gray-300 rounded-lg p-3 my-5 flex items-center justify-center"
              >
               <Review name={review.name} review={review.review} createdAt={review.createdAt} />
               
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
