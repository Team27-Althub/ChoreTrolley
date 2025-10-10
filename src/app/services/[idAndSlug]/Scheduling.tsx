"use client";
import React from "react";
import { useState } from "react";
import { Hourglass } from "lucide-react";

const Scheduling = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const dayArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    dayArray.push(null); // Empty slots for days before the first of the month
  }
  for (let day = 1; day <= daysInMonth; day++) {
    dayArray.push(new Date(year, month, day));
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };
  const handleClickTimeSlot = (time: string) => {
    setSelectedTimeSlot(time);
  };
  const portfolioCards = [
    {
      id: 1,
      title: "Standard Cleaning",
      description:
        "Routine cleaning of all rooms, dusting, vacuuming, mopping floors, and bathroom sanitation.",
      price: "200",
      unit: "hr",
    },
    {
      id: 2,
      title: "Deep Cleaning",
      description:
        "Thorough cleaning, including kitchen degreasing, detailed bathroom scrubbing, and baseboard cleaning.",
      price: "45",
      unit: "hr",
    },
    {
      id: 3,
      title: "Laundry & Ironing ",
      description:
        "Washing, drying, folding, and ironing clothes to perfection.",
      price: "500",
      unit: "load",
    },
    {
      id: 4,
      title: "Post Event Cleanup",
      description:
        "Comprehensive cleaning services after parties or special gatherings.",
      price: "1000",
      unit: "hr",
    },
    {
      id: 5,
      title: "Window Washing",
      description:
        "Interior and exterior window cleaning for a streak-free shine.",
      price: "100",
      unit: "window",
    },
    {
      id: 6,
      title: "Organizing & Decluttering",
      description:
        "Professional organization of spaces like closets, pantries, and garages.",
      price: "500",
      unit: "hr",
    },
  ];

  return (
    <div className="flex items-center flex-col justify-center gap-5">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl py-5 md:py-10 lg:py-6 bg-white rounded-lg shadow-lg">
        <div className="w-full px-6 ">
          <h3 className="font-bold text-xl">Availability & Scheduling</h3>
        </div>
        {/* Divider */}
        <div className="w-full my-2"></div>
        {/* Calendar */}
        <div className=" w-full  h-64 px-7 lg:px-15 overflow-y-scroll scrollbar-hide ">
          <div className="grid grid-cols-7 gap-y-3 text-center ">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                className="w-17 h-13  flex items-center justify-center"
                key={day}
              >
                <h4 className="font-normal text-2xl text-[#7E818C] ">{day}</h4>
              </div>
            ))}
            {dayArray.map((date, index) => (
              <div
                key={index}
                className={`w-13 h-13 flex items-center justify-center m-1 cursor-pointer rounded-full text-2xl
                    ${
                      date &&
                      selectedDate?.toDateString() === date.toDateString()
                        ? "bg-[#013328] text-white"
                        : "hover:bg-gray-200"
                    }
                    ${!date ? "invisible" : ""}
                  `}
                onClick={() => date && handleDateClick(date)}
              >
                {date ? date.getDate() : ""}
              </div>
            ))}
          </div>
        </div>
        {/* Time Slots */}
        <div
          className="w-full p-6 mt-5 space-y-5 "
          style={{ boxShadow: "0 -2px 4px -1px rgba(0,0,0,0.1)" }}
        >
          <p className="text-base pl-2"> Choose a Time Slot:</p>
          <div className="flex flex-wrap gap-3 mt-3">
            {[
              "09:00 AM",
              "10:30 AM",
              "01:00 PM",
              "02:30 PM",
              "04:00 PM",
              "05:30 PM",
            ].map((time) => (
              <button
                key={time}
                className={`px-4 py-3 border border-[#0000004D]/30 rounded-4xl text-sm ${
                  selectedTimeSlot === time ? "bg-[#013328] text-white" : ""
                }`}
                onClick={() => handleClickTimeSlot(time)}
              >
                {time}
              </button>
            ))}
            <div className="flex items-center gap-2 mt-2 pl-1">
              <Hourglass size={16} className="text-[#FD000080]" />
              <p className="text-base">
                Selected Time:{" "}
                <strong className="font-black">
                  {selectedTimeSlot || "00:00"}
                </strong>
              </p>
            </div>
          </div>
          <button className="w-full h-15 mt-3 rounded-lg bg-[#013328] text-white font-medium text-base ">
            Book Now
          </button>
        </div>
      </div>

      {/* Service Portfolio */}
      <div className="flex flex-col items-center justify-center w-full max-w-3xl p-5 md:p-10 bg-white rounded-lg shadow-lg">
        <div className="w-full px-6">
          <h3 className="font-bold text-xl">Service Portfolio</h3>
        </div>
        {/* Divider */}
        <div className="border-b border-gray-300 w-full my-2"></div>
        {/* Cards */}
        <div className=" w-full px-3  py-2">
          <div className="grid grid-rows-3 grid-cols-2 gap-3">
            {/* Cards */}
            {portfolioCards.map((item) => (
              <div
                key={item.id}
                className=" border border-gray-300 rounded-lg p-3 m-2 flex items-center justify-center"
              >
                <div className="flex flex-col items-start gap-2">
                  <h4 className="font-bold text-sm ">{item.title}</h4>
                  <p className="text-xs text-gray-600 ">{item.description}</p>
                  <span className="font-black text-xl">
                    # {item.price}/{item.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
