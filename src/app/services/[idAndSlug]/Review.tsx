"use client";

import { formatDistanceToNow } from "date-fns";
import { Star } from "lucide-react";

type ReviewProps = {
  name: string;
  review: string;
  createdAt: string;
};

export default function Review({ name, review, createdAt }: ReviewProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="w-full flex items-center justify-between">
        <h4 className="font-bold text-sm ">{name}</h4>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <button key={idx} className="focus:outline-none">
              <Star size={20} fill="#D9D9D9" className="text-gray-300" />
            </button>
          ))}
        </div>
      </div>
      <span className="text-gray-500 text-sm mt-1 block">
        {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
      </span>
      <p className="text-xs text-gray-600 ">{review}</p>
    </div>
  );
}
