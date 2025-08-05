'use client';
import React from 'react';
import { FullOrderDetails } from './TrackOrderPage'; // Import the type from TrackOrderPage
import Image from 'next/image';

interface OrderDetailsPageProps {
  order: FullOrderDetails;
  onBack: () => void;
}

const OrderDetailsPage: React.FC<OrderDetailsPageProps> = ({ order, onBack }) => {
  // Placeholder for payment and delivery details
  const deliveryFee = 1500; // Example delivery fee
  const totalAmount = order.products.reduce((acc, product) => acc + product.price, 0) + deliveryFee;

  return (
    <div className="flex flex-col bg-white min-h-screen p-4 sm:p-6">
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
        <h1 className="flex-grow text-center text-2xl font-bold">
          Order {order.orderId}
        </h1>
      </div>

      {/* Status and date */}
      <div className="flex flex-col space-y-2 mb-6 p-4 rounded-xl border border-gray-200">
        <div className="bg-[#EAE4F2] text-[#013328] px-3 py-1 rounded-full w-max text-sm font-semibold">
          {order.deliveryStatus}
        </div>
        <p className="font-semibold text-lg">On Wednesday, 09-07</p>
        <p className="text-sm text-gray-500">Placed on : 01-01-2025</p>
      </div>

      {/* Products list */}
      {order.products.map((product) => (
        <div key={product.id} className="flex space-x-4 mb-6">
          <Image
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-lg"
            width={96}
            height={96}
          />
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500 text-sm mt-1">QTY: {product.quantity}</p>
            <p className="text-xl font-bold mt-2">₦ {product.price.toLocaleString()}</p>
          </div>
        </div>
      ))}

      {/* Payment method */}
      <div className="py-6 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-4">Payment method</h2>
        <div className="flex flex-col text-sm text-gray-600 space-y-1">
          <div className="flex justify-between">
            <span>Items(s) total:</span>
            <span>₦ {order.products.reduce((acc, p) => acc + p.price, 0).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee:</span>
            <span>₦ {deliveryFee.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
          <span>Total</span>
          <span>₦ {totalAmount.toLocaleString()}</span>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="py-6 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-2">Shipping Details</h2>
        <p className="text-gray-600">{order.shippingAddress}</p>
        <p className="text-gray-600 mt-1">
          Delivery between {order.deliveryStart} and {order.deliveryEnd}
        </p>
      </div>
    </div>
  );
};

export default OrderDetailsPage;