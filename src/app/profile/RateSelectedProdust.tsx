// RateProductPage.tsx
import React from 'react';

// Define a type for the product data to be passed as a prop
interface ProductData {
  id: number;
  title: string;
  subtitle: string;
  orderId: string;
  deliveryDate: string;
  image: string;
}

interface RateProductPageProps {
  product: ProductData;
  onBack: () => void; // A function to go back to the list
}

const RateProductPage: React.FC<RateProductPageProps> = ({ product, onBack }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl w-full  p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={onBack} // Add onClick handler to the back button
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <h1 className="flex-grow text-center text-xl font-semibold">Rate this Product</h1>
      </div>

      {/* Product Details Section */}
      <div className="flex items-center space-x-4 pb-6 border-b border-gray-200 mb-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-sm text-gray-500">{product.subtitle}</p>
          <p className="text-sm text-gray-500">Order {product.orderId}</p>
          <p className="text-sm text-gray-500">Delivery on {product.deliveryDate}</p>
        </div>
      </div>

      {/* Rating Section */}
      <div className="mb-6">
        <p className="text-gray-700 mb-2">Tap the stars to choose</p>
        <div className="flex space-x-1 text-gray-300 text-3xl cursor-pointer">
          <span className="hover:text-yellow-400">★</span>
          <span className="hover:text-yellow-400">★</span>
          <span className="hover:text-yellow-400">★</span>
          <span className="hover:text-yellow-400">★</span>
          <span className="hover:text-yellow-400">★</span>
        </div>
      </div>

      {/* Review Fields */}
      <form className="space-y-6">
        <div>
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
            What did you like about this product ?
          </label>
          <textarea
            id="review"
            name="review"
            rows={4}
            placeholder="What did you like the most about it?"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ade Oluwa"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-400 hover:bg-[#013328] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default RateProductPage;