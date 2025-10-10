"use client";
import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

interface CustomDatePickerProps {
  label?: string;
  storageKey?: string;
  onDateSelect?: (date: Date) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label = "Select Date",
  storageKey = "selectedDate",
  onDateSelect,
}) => {
  const today = new Date();

  // Normalize today's date (ignore time)
  const normalizeDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const normalizedToday = normalizeDate(today);

  const storedDate =
    typeof window !== "undefined" ? sessionStorage.getItem(storageKey) : null;
  const initialDate = storedDate ? new Date(storedDate) : today;

  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);
  const [selectedMonth, setSelectedMonth] = useState<number>(
    initialDate.getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    initialDate.getFullYear()
  );

  // Current + next two months
  const nextTwoMonths = [0, 1, 2].map((offset) => {
    const date = new Date(today.getFullYear(), today.getMonth() + offset, 1);
    return {
      label: date.toLocaleString("default", { month: "long" }),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
  });

  const getDaysInMonth = (month: number, year: number) => {
    const date = new Date(year, month, 1);
    const days: Date[] = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    sessionStorage.setItem(storageKey, date.toISOString());
    onDateSelect?.(date);
    console.log(sessionStorage.getItem('selectedDate'))
  };

  const days = getDaysInMonth(selectedMonth, selectedYear);

  useEffect(() => {
    sessionStorage.setItem(storageKey, selectedDate.toISOString());
  }, []);

  return (
    <div className="w-full max-w-md flex flex-col">
      {/* Label */}
      <label className="text-gray-700 font-medium text-sm mb-2">{label}</label>

      {/* Container */}
      <div className="border border-gray-300 rounded-lg p-4 focus-within:ring-2 focus-within:ring-[#013328] bg-white transition-all duration-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-600" />
            <select
              value={selectedMonth}
              onChange={(e) => {
                const chosen = nextTwoMonths.find(
                  (m) => m.month === Number(e.target.value)
                );
                if (chosen) {
                  setSelectedMonth(chosen.month);
                  setSelectedYear(chosen.year);
                }
              }}
              className="bg-transparent text-gray-800 text-sm font-semibold focus:outline-none"
            >
              {nextTwoMonths.map((m, i) => (
                <option key={i} value={m.month}>
                  {m.label} {m.year}
                </option>
              ))}
            </select>
          </div>
          <span className="text-sm text-gray-500">
            {selectedDate.toDateString()}
          </span>
        </div>

        {/* Calendar Header */}
        <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => {
            const isSelected =
              normalizeDate(day).toDateString() ===
              normalizeDate(selectedDate).toDateString();

            // FIXED: proper comparison ignoring time
            const isPast = normalizeDate(day) < normalizedToday;

            return (
              <button
                key={day.toISOString()}
                disabled={isPast}
                onClick={() => handleDateSelect(day)}
                className={`p-2 text-sm rounded-xl transition ${
                  isSelected
                    ? "bg-[#013328] text-white font-semibold"
                    : isPast
                    ? "text-gray-300 cursor-not-allowed"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomDatePicker;
