// OrderSummary.tsx
"use client";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { Button } from "@/components/ui/button";
// import FailedOrder from "./FailedOrderModal";
import { useRouter } from "next/navigation";
import { PaystackButton } from 'react-paystack'
import { useCreateOrderMutation } from "@/redux/api/paymentApi";
import { useFetchResourceQuery } from "@/redux/api/crudApi";
// import CheckoutButton from "./CheckoutButton";

type OrderSummaryProps = {
  shipping?: number,
  method?: string
}

const ServiceSummary = ({ shipping = 0, method }: OrderSummaryProps) => {




  const [discountCode, setDiscountCode] = useState("");
  const router = useRouter();
  const [orderFailed, setOrderFailed] = useState(false);

  const userEmail = sessionStorage.getItem('email')
  const id = sessionStorage.getItem('id')
  const date = sessionStorage.getItem('selectedDate')
  const time = sessionStorage.getItem('selectedTimeSlot')
  const name = `${sessionStorage.getItem('firstName')} ${sessionStorage.getItem('lastName')}`

    const [createOrder, { isLoading }] = useCreateOrderMutation();
    const {data: serviceData, isLoading: dataLoading} = useFetchResourceQuery(`/services/${id}`)
    const [errorMsg, setErrorMsg] = useState('');

      const sumTotal = serviceData?.data?.price + 0 + 100

  
    const handleCheckout = async () => {
      const bookingId = sessionStorage.getItem('bookingId')
      const orderData = {
        addressId: 45,
        address: "123 Palm Street, Lagos",
        groceries: null,
        services: [id?.toString()],
        bookingId: bookingId?.toString(),
        shippingMethod: 'Standard',
        contractType: "One-Time",
        paymentMethod: "Card",
        subtotal: serviceData?.data?.price,
        tax: 100,
        shipping: 0,
        total: sumTotal,
      };
  
      try {
        const result = await createOrder(orderData).unwrap(); // ✅ unwrap to access actual data
  
        const order = result.data?.order;
        const paymentUrl = result.data?.paymentUrl;
  
        if (paymentUrl && order) {
          // Store order info for later verification or display
          sessionStorage.setItem(
            "currentOrder",
            JSON.stringify({
              id: order.id,
              code: order.code,
              reference: order.reference,
            })
          );
  
          // Redirect user to Paystack
          window.location.href = paymentUrl;
        } else {
          setErrorMsg("Missing payment URL from server.");
          console.error("Invalid response:", result);
        }
      } catch (error) {
        console.error("Checkout error:", error);
        setErrorMsg("Something went wrong while starting payment.");
      }
    };




  


  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Summary
      </h2>

      {/* Order Items */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        { serviceData?.data &&  
        (
          <div>
            <div key={serviceData.data.id} className="flex items-center justify-between py-1">
                <div className="flex items-center">
                {/* <img
                    src={serviceData.data.imageUrl}
                    alt={serviceData.data.name}
                    className="w-16 h-16 rounded-md object-cover mr-4"
                /> */}
                <div>
                    <p className="text-lg font-medium text-gray-900">
                    Service Provider
                    </p>
                </div>
                </div>
                <span className="text-base font-normal text-gray-900">
                    {serviceData.data.title}
                </span>
            </div>
            <div key={serviceData.data.id} className="flex items-center justify-between py-1">
                <div className="flex items-center">
                {/* <img
                    src={serviceData.data.imageUrl}
                    alt={serviceData.data.name}
                    className="w-16 h-16 rounded-md object-cover mr-4"
                /> */}
                <div>
                    <p className="text-lg font-medium text-gray-900">
                    Date
                    </p>

                </div>
                </div>
                <span className="text-base font-normal text-gray-900">
                 {date?.slice(0,10)}
                </span>
            </div>
            <div key={serviceData.data.id} className="flex items-center justify-between py-1">
                <div className="flex items-center">
                {/* <img
                    src={serviceData.data.imageUrl}
                    alt={serviceData.data.name}
                    className="w-16 h-16 rounded-md object-cover mr-4"
                /> */}
                <div>
                    <p className="text-lg font-medium text-gray-900">
                    Time
                    </p>
                </div>
                </div>
                <span className="text-base font-normal text-gray-900">
                {time}
                </span>
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
                <h3 className="text-xl font-semibold">₦{serviceData.data.price.toLocaleString()}</h3>
                </div>
                <div className="flex justify-between  items-center">
                <h3 className="text-sm ">tax</h3>
                <h3 className="text-xl font-semibold">₦ 100</h3>
                </div>
                <div className="flex justify-between ">
                <h3 className="text-xl font-semibold items-center">Total</h3>
                <h3 className="text-xl font-semibold">₦{serviceData.data.price+ 100}</h3>
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
                onClick={handleCheckout}
                disabled={isLoading}
                className="text-lg w-full mt-10 text-white rounded-md bg-[#013328] hover:cursor-pointer "
                >
                {isLoading ? "Processing..." : "Pay Now"}
                </Button>
                

                {errorMsg && (
                    <p className="text-red-600 mt-2 text-sm">{errorMsg}</p>
                )}
            </div>
          </div>
        )}
      </div>

      {/* Failed Order Modal */}
      {/* <FailedOrder
        open={orderFailed}
        message="Something went wrong, please try again.... or contact support"
        redirectPath="/" //Redirect to home
        buttonLabel="Try again"
        onClose={() => setOrderFailed(false)}
      /> */}
    </div>
  );
};

export default ServiceSummary;
