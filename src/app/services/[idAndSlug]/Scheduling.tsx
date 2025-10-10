"use client";
import React, { useState, useEffect } from "react";
import { Hourglass } from "lucide-react";
import CustomDatePicker from "./DatePicker";
import Link from "next/link";
import { useCreateServiceOrderMutation } from "@/redux/api/paymentApi";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/components/Minor/ReactToast";

const Scheduling = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [createServiceOrder, { isLoading }] = useCreateServiceOrderMutation();
  const router = useRouter()
  const { toast } = useToast()
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("selectedDate");
    if (stored) setSelectedDate(new Date(stored));
  }, []);

  // Today's date
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // Generate next 2 months only
  const maxSelectableDate = new Date(year, month + 2, 0); // last day of 2nd month ahead

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const dayArray: (Date | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    dayArray.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    dayArray.push(date);
  }

  // Handle date click
  const handleDateClick = (date: Date) => {
    if (date <= maxSelectableDate && date >= today) {
      setSelectedDate(date);
      sessionStorage.setItem("selectedDate", date.toDateString());
    } else {
      alert("You can only book within the next 2 months.");
    }
  };

  // Generate time slots (8 AM to 4 PM, 1 hour increment)
  const timeSlots = Array.from({ length: 9 }, (_, i) => {
    const hour = 8 + i;
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour.toString().padStart(2, "0")}:00 ${ampm}`;
  });

  const handleClickTimeSlot = (time: string) => {
    setSelectedTimeSlot(time);
    sessionStorage.setItem("selectedTimeSlot", time);
    console.log(sessionStorage.getItem('selectedTimeSlot'))
  };

  useEffect(() => {
    // Restore previous selections from sessionStorage if available
    const storedDate = sessionStorage.getItem("selectedDate");
    const storedTime = sessionStorage.getItem("selectedTimeSlot");
    console.log(storedDate, storedTime)

    if (storedDate) setSelectedDate(new Date(storedDate));
    if (storedTime) setSelectedTimeSlot(storedTime);
  }, []);

  const url = sessionStorage.getItem('url')

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

  
    const handleCheckout = async () => {

        const userEmail = sessionStorage.getItem('email')
        const id = sessionStorage.getItem('id')
        const date = sessionStorage.getItem('selectedDate')
        const time = sessionStorage.getItem('selectedTimeSlot')
        const name = `${sessionStorage.getItem('firstName')} ${sessionStorage.getItem('lastName')}`

      const orderData = {
        customerName: name,
        customerEmail: userEmail,
        date: date,
        timeSlot: time,
        serviceId: id
        };
  
      try {
        const result = await createServiceOrder(orderData).unwrap(); // ✅ unwrap to access actual data
        router.push(`${url}/checkout`)
        toast({
        title: "Successful",
        description: `Service booked successfully`,
        type: "success",
      });
        
      } catch (error:any) {
        console.error("Checkout error:", error);
        toast({
        title: "Duplicate Booking",
        description: error?.data?.message,
        type: "error",
      });
      }
    };

  return (
    <div className="flex items-center flex-col justify-center gap-5">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl py-5 md:py-10 lg:py-6 bg-white rounded-lg shadow-lg">
        <div className="w-full px-6 ">
          <h3 className="font-bold text-xl">Availability & Scheduling</h3>
        </div>

        <CustomDatePicker
          label=""
          onDateSelect={(date) => setSelectedDate(date)}
        />

        {/* Calendar */}
        {/* <div className="w-full h-64 px-7 lg:px-15 overflow-y-scroll scrollbar-hide ">
          <div className="grid grid-cols-7 gap-y-3 text-center ">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                className="w-17 h-13 flex items-center justify-center"
                key={day}
              >
                <h4 className="font-normal text-lg md:text-xl lg:text-2xl text-[#7E818C] ">
                  {day}
                </h4>
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
        </div> */}

        {/* Time Slots */}
        <div
          className="w-full p-6 mt-5 space-y-5"
          style={{ boxShadow: "0 -2px 4px -1px rgba(0,0,0,0.1)" }}
        >
          <p className="text-base pl-2">Choose a Time Slot:</p>
          <div className="flex flex-wrap gap-3 mt-3">
            {timeSlots.map((time) => (
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
          </div>

          <div className="flex items-center gap-2 mt-2 pl-1">
            <Hourglass size={16} className="text-[#FD000080]" />
            <p className="text-base">
              Selected Time:{" "}
              <strong className="font-black">
                {selectedTimeSlot || "00:00"}
              </strong>
            </p>
          </div>

            <button onClick={handleCheckout} className="w-full h-15 mt-3 rounded-lg bg-[#013328] text-white font-medium text-base">
              Book Now
            </button>
        </div>
      </div>

      {/* Service Portfolio */}
      <div className="flex flex-col items-center justify-center w-full max-w-3xl p-5 md:p-10 bg-white rounded-lg shadow-lg">
        <div className="w-full px-6">
          <h3 className="font-bold text-xl">Service Portfolio</h3>
        </div>
        <div className="border-b border-gray-300 w-full my-2"></div>
        <div className="w-full px-3 py-2">
          <div className="grid grid-rows-3 md:grid-cols-2 gap-3">
            {portfolioCards.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-3 m-2 flex items-center justify-center"
              >
                <div className="flex flex-col items-start gap-2">
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
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
