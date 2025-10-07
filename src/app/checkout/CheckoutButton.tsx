import { useCreateOrderMutation } from "@/redux/api/paymentApi";
import { useState } from "react";

export default function CheckoutButton() {
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheckout = async () => {
    const orderData = {
      addressId: 45,
      address: "123 Palm Street, Lagos",
      groceries: [20],
      services: [],
      shippingMethod: "Standard",
      paymentMethod: "Card",
      subtotal: 5000,
      tax: 250,
      shipping: 1000,
      total: 6250,
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
    <div>
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </button>

      {errorMsg && (
        <p className="text-red-600 mt-2 text-sm">{errorMsg}</p>
      )}
    </div>
  );
}
