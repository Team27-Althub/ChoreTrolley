'use client';
import React, {useState} from 'react';
import OrderDetailsPage from './OrderDetailsPage';

// Interfaces for the data structure
interface Product {
  id: number;
  image: string;
  name: string;
  quantity: number; // Added for OrderDetailsPage
  price: number;     // Added for OrderDetailsPage
}

interface TrackingEvent {
  id: number;
  date: string;
  time: string;
  description: string;
}

export interface FullOrderDetails {
  id: string;
  orderId: string;
  deliveryDate: string;
  deliveryStatus: string;
  recipientName: string;
  shippingAddress: string;
  deliveryStart: string; // Added for OrderDetailsPage
  deliveryEnd: string;   // Added for OrderDetailsPage
  products: Product[];
  trackingHistory: TrackingEvent[];
}

interface TrackOrderPageProps {
  order: FullOrderDetails;
  onBack: () => void;
}
const TrackOrderPage: React.FC<TrackOrderPageProps> = ({ order, onBack }) => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const handleShowOrderDetails = () => {
    setShowOrderDetails(true);
  };

  const handleBackFromDetails = () => {
    setShowOrderDetails(false);
  };

  if (showOrderDetails) {
    return <OrderDetailsPage order={order} onBack={handleBackFromDetails} />;
  }

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={onBack}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <h1 className="flex-grow text-center text-xl font-semibold">
          Track Order {order.orderId} ({order.deliveryStatus})
        </h1>
      </div>

      {/* Delivered Banner */}
      <div className="bg-[#E4F2E4] border border-[#B8D7B8] text-[#013328] rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-bold">Delivered on {order.deliveryDate}</span>
        </div>
        <p className="text-sm">
          Package Received by [<span className="font-semibold">{order.recipientName}</span>], Collection site is [<span className="font-semibold">Lagos</span>]
          <br />
          July 15, 2025, 6:50
        </p>
        <div className="flex items-center text-sm mt-4 text-[#013328]">
          <a href="#" className="flex-grow underline">can&apos;t find your package?</a>
          <a href="#" className="flex items-center space-x-1 underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Contact ChoreTrolly</span>
          </a>
        </div>
      </div>

      {/* Package Info */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Package Info</h2>
          <a 
           href="#"
           onClick={(e) => {
              e.preventDefault();
              handleShowOrderDetails();
            }}
           className="flex items-center text-sm font-semibold text-[#013328]">
            Order details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {order.products.map((product) => (
            <img key={product.id} src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
          ))}
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 mb-6">
        <div className="flex items-center space-x-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 11l3 3m0 0l3-3m-3 3v2m-5.455-8.59A6.996 6.996 0 0112 3a7 7 0 017 7c0 5.25-7 11-7 11s-7-5.75-7-11a7 7 0 015.455-8.59z" />
          </svg>
          <span className="font-semibold text-gray-700">Ship to {order.recipientName}</span>
        </div>
        <p className="text-sm text-gray-600 ml-7">{order.shippingAddress}</p>
      </div>

      {/* Tracking Status */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 mb-6">
        <h2 className="font-bold text-lg mb-4">Tracking Status</h2>
        <div className="relative pl-8">
          {/* Timeline dots and lines */}
          <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-300"></div>
          {order.trackingHistory.map((event, index) => (
            <div key={event.id} className="relative mb-6 last:mb-0">
              <div
                className={`absolute -left-5 top-1.5 h-3 w-3 rounded-full ${
                  index === 0 ? 'bg-green-500' : 'bg-gray-300'
                }`}
              ></div>
              <p className="font-semibold text-gray-800">{event.description}</p>
              <p className="text-sm text-gray-500">{event.date}, {event.time}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">Times are shown in local timezone.</p>
      </div>
    </div>
  );
};

export default TrackOrderPage;