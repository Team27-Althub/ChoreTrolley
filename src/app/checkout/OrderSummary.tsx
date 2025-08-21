// OrderSummary.tsx
"use client";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Button } from "@/components/ui/button";
import FailedOrder from "./FailedOrderModal";
import { useRouter } from "next/navigation";

const OrderSummary: React.FC = () => {
  const router = useRouter();
  const [orderFailed, setOrderFailed] = useState(false);

  const placeOrder = async () => {
    // Remove success, replace with Api
    const success = Math.random() > 0.5; 
    try {
      if (success) {
        router.push("/booking_confirmation");
      } else {
        setOrderFailed(true); //Show Modal
      }
    } catch (error) {
      setOrderFailed(true); //Show Modal
    }
  };
  const {
    // isEmpty,
    // totalUniqueItems,
    items,
    cartTotal,
    // updateItemQuantity,
    // removeItem,
  } = useCart();

  const [discountCode, setDiscountCode] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Order Summary
      </h2>

      {/* Order Items */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-3">
            <div className="flex items-center">
              {/* <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover mr-4"
              /> */}
              <div>
                <p className="text-base font-medium text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
            <span className="text-base font-semibold text-gray-900">
              ₦{item.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Discount Code */}
      <div className="mb-6">
        <label
          htmlFor="discount-code"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Discount Code (Optional)
        </label>
        <div className="flex">
          <input
            type="text"
            id="discount-code"
            placeholder="Enter code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="flex-1 block w-full px-4 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-r-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="bg-[#fff] rounded-xl py-5 flex flex-col gap-2">
        <div className="flex justify-between  items-center">
          <h3 className="text-sm ">SubTotal</h3>
          <h3 className="text-xl font-semibold">₦ {cartTotal}</h3>
        </div>
        <div className="flex justify-between  items-center">
          <h3 className="text-sm ">Shipping</h3>
          <h3 className="text-xl font-semibold">₦ 200</h3>
        </div>
        <div className="flex justify-between  items-center">
          <h3 className="text-sm ">tax</h3>
          <h3 className="text-xl font-semibold">₦ 100</h3>
        </div>
        <div className="flex justify-between ">
          <h3 className="text-xl font-semibold items-center">Total</h3>
          <h3 className="text-xl font-semibold">₦ {cartTotal + 200 + 100}</h3>
        </div>
        {/* <Link href='/booking_confirmation'>
              <Button 
                variant='dashboardDefault'
                onClick={placeOrder}
                className="text-lg w-full mt-10 text-white rounded-md bg-[#013328] hover:cursor-pointer ">
                 Proceed to Payment
              </Button>
            </Link> */}
        <Button
          variant="dashboardDefault"
          onClick={placeOrder}
          className="text-lg w-full mt-10 text-white rounded-md bg-[#013328] hover:cursor-pointer "
        >
          Proceed to Payment
        </Button>
      </div>
      {/* Failed Order Modal */}
      <FailedOrder
        open={orderFailed}
        message="Something went wrong, please try again.... or contact support"
        redirectPath="/" //Redirect to home
        buttonLabel="Try again"
        onClose={() => setOrderFailed(false)}
      />
    </div>
  );
};

export default OrderSummary;
