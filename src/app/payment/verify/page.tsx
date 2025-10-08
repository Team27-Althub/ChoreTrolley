'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import LoggedInNavbar from '../../components/Major/LoggedInNavbar';
// import image from '../../../public/Group 77.png';
import { useVerifyOrderQuery } from '@/redux/api/orderApi'; // 👈 Import your RTK Query hook

const PaymentSuccessPage = () => {
  const { cartTotal, emptyCart } = useCart();
  const searchParams = useSearchParams();
  const reference = searchParams.get('reference') || '';

  // 🔥 Fetch order verification using Redux
  const { data, error, isLoading, isSuccess } = useVerifyOrderQuery(reference, {
    skip: !reference, // don't call until reference is available
  });

  // If success, empty the cart once
  React.useEffect(() => {
    if (isSuccess && data?.status === 'success') {
      emptyCart();
    }
  }, [isSuccess, data, emptyCart]);

  return (
    <div className="bg-[#F5F5F4] min-h-screen">
      <LoggedInNavbar />
      <div className="p-6 rounded-lg shadow-sm w-full">
        <div className="md:px-10 grid gap-5 pt-5 pb-10 grid-cols-1 md:grid-cols-[60%_40%]">
          {/* Left Section */}
          <div className="flex flex-col gap-5">
            <div className="h-[400px] flex flex-col items-center justify-center bg-white rounded-xl">
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#013328]"></div>
                  <h2 className="text-xl mt-5 text-gray-600 font-semibold">Processing your payment...</h2>
                </>
              ) : error ? (
                <>
                  <Image src={image} alt="failed" />
                  <h2 className="lg:text-3xl text-2xl font-semibold my-5 text-red-600">
                    Payment Verification Failed
                  </h2>
                  <p className="text-gray-600">We couldn’t verify your transaction. Please try again.</p>
                </>
              ) : (
                <>
                  <Image src="/Group 77.png"  alt="success" />
                  <h2 className="lg:text-4xl text-2xl font-semibold my-5 text-green-700">
                    Order Placed Successfully
                  </h2>
                  <p className="text-lg font-semibold mt-5 mb-10 text-[#4e4e4eaf]">
                    Your order has been verified successfully.
                  </p>
                </>
              )}
            </div>

            {!isLoading && isSuccess && (
              <div className="flex flex-col items-center py-10 px-2 justify-center bg-white rounded-xl">
                <h2 className="lg:text-3xl text-xl font-semibold my-5 text-[#4e4e4efd]">Your Order ID:</h2>
                <h2 className="lg:text-2xl text-lg font-semibold text-[#015e32]">
                  {data?.orderId || reference}
                </h2>
                <p className="lg:text-lg text-sm font-semibold mt-5 text-[#4e4e4eaf]">
                  You can track your order using the ID above.
                </p>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm w-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              <div className="bg-[#fff] rounded-xl py-5 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm">SubTotal</h3>
                  <h3 className="text-xl font-semibold">₦ {cartTotal}</h3>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-sm">Shipping</h3>
                  <h3 className="text-xl font-semibold">₦ 200</h3>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-sm">Tax</h3>
                  <h3 className="text-xl font-semibold">₦ 100</h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold items-center">Total</h3>
                  <h3 className="text-xl font-semibold">₦ {cartTotal + 300}</h3>
                </div>

                <Link href="/booking_confirmation">
                  <Button
                    variant="dashboardDefault"
                    className="text-lg w-full mt-10 text-white rounded-md bg-[#013328] hover:cursor-pointer"
                  >
                    Track My Order
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
