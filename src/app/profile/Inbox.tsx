'use client';
import React, { useState } from 'react';
import TrackOrderPage, { FullOrderDetails } from './TrackOrderPage'; // Import the new component and its type

// Data for the inbox and tracking page
const inboxMessages: FullOrderDetails[] = [
  {
    id: 1,
    orderId: '#CTS9876',
    deliveryStatus: 'Delivered',
    deliveryDate: 'July 15th, 2025',
    recipientName: 'Ade Oluwa',
    shippingAddress: 'Badagry, Lagos State',
        deliveryStart: '08 July', // New property
    deliveryEnd: '09 July',   // New property
    products: [
      { id: 1, image: 'https://www.altimus.ae/cdn/shop/files/New_Project_69_512x385.jpg?v=1729755134', name: 'Milk', quantity: 1, price: 20000 },
      { id: 2, image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg', name: 'Fresh Tomatoes', quantity: 1, price: 20000 },
      { id: 3, image: 'https://c.ndtvimg.com/2023-08/brlp7gk_uncooked-rice-or-rice-grains_625x300_18_August_23.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307', name: 'Rice', quantity: 1, price: 20000 },
      { id: 4, image: 'https://images.ctfassets.net/ajjw8wywicb3/2sGz5dCo8LlJoenyCauJ9H/50da004ddfeb3aa2fa839d854d3c9c67/HOW_TO_WASH_CLOTES_How_to_do_Laundry_570x310.jpg?fm=png', name: 'Laundry', quantity: 1, price: 20000  },
    ],
    trackingHistory: [
      { id: 1, date: 'July 14, 2025', time: '10:13', description: 'Package delivered and [Received] by [Ade Oluwa] Collection site is [LOS-LTL]' },
      { id: 2, date: 'July 13, 2025', time: '10:13', description: '[Joseph Joe] in [Lagos] Scanned for delivery; the delivery driver is [Joseph Joe]' },
      { id: 3, date: 'July 12, 2025', time: '10:13', description: 'Package Arrived at Site [Lagos Distribution Center]' },
      { id: 4, date: 'July 4, 2025', time: '10:13', description: 'Order Shipped' },
      { id: 5, date: 'July 3, 2025', time: '10:13', description: 'Awaiting Shipment' },
      { id: 6, date: 'July 2, 2025', time: '10:13', description: 'Order being packaged' },
      { id: 7, date: 'July 1, 2025', time: '10:13', description: 'Order Paid for Successfully' },
      { id: 8, date: 'July 1, 2025', time: '10:13', description: 'Order Submitted' },
    ],
  },
  {
    id: 2,
    orderId: '#CTS9877',
    deliveryStatus: 'In Transit',
    deliveryDate: 'July 18th, 2025',
    recipientName: 'Ade Oluwa',
    shippingAddress: 'Lagos State',
    deliveryStart: '08 July', // New property
    deliveryEnd: '09 July',   // New property
    products: [{ id: 1, image: 'https://www.altimus.ae/cdn/shop/files/New_Project_69_512x385.jpg?v=1729755134', name: 'Milk', quantity: 1, price: 20000 }],
    trackingHistory: [
        { id: 1, date: 'July 16, 2025', time: '12:00', description: 'Order Shipped' },
        { id: 2, date: 'July 15, 2025', time: '10:00', description: 'Order Confirmed' },
    ],
  },
];

const Inbox = () => {
  const [selectedOrder, setSelectedOrder] = useState<FullOrderDetails | null>(null);

  const handleSelectOrder = (order: FullOrderDetails) => {
    setSelectedOrder(order);
  };

  const handleBack = () => {
    setSelectedOrder(null);
  };

  const getStatusTitle = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'Package Delivered';
      case 'In Transit':
        return 'Package ready for Pickup';
      default:
        return 'Order Confirmed';
    }
  };

  if (selectedOrder) {
    return <TrackOrderPage order={selectedOrder} onBack={handleBack} />;
  }

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-6">Inbox</h1>

      <div className="space-y-6">
        {inboxMessages.map((message) => (
          <div
            key={message.id}
            onClick={() => handleSelectOrder(message)}
            className="bg-white rounded-xl shadow-sm p-4 border border-gray-200 cursor-pointer"
          >
            <h2 className="font-bold text-lg mb-2">
              {getStatusTitle(message.deliveryStatus)}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              package <span className="font-semibold">{message.orderId}</span> is {message.deliveryStatus.toLowerCase()}.
              You can track it here.
            </p>
            <div className="flex items-center space-x-3">
              <img
                src={message.products[0].image}
                alt={message.products[0].name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold">{message.products[0].name}</p>
                <p className="text-gray-500 text-sm">Groceries</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;