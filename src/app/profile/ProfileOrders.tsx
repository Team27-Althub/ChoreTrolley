'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import OrderDetailsPage from './OrderDetailsPage';
import { FullOrderDetails } from './TrackOrderPage'; // Assuming this interface is defined in OrderDetailsPage.tsx

const statusColors: Record<string, string> = {
  pending: '#FFE0A8',
  complete: '#0CEA0052',
  inProgress: '#0027E93B',
  all: '#F5F5F4',
};

const statusLabels: Record<string, string> = {
  pending: 'Pending',
  complete: 'Completed',
  inProgress: 'InProgress',
};

// Expanded data to match the FullOrderDetails interface
const orders: FullOrderDetails[] = [
  {
    id: 'CTS9876',
    orderId: '#CTS9876',
    deliveryStatus: 'InProgress',
    deliveryDate: 'Wednesday, 09-07',
    recipientName: 'Ade Oluwa',
    shippingAddress: 'No 35 Ajonse Estate, Lagos.',
    deliveryStart: '08 July',
    deliveryEnd: '09 July',
    products: [{ id: 1, image: 'https://images.ctfassets.net/ajjw8wywicb3/2sGz5dCo8LlJoenyCauJ9H/50da004ddfeb3aa2fa839d854d3c9c67/HOW_TO_WASH_CLOTES_How_to_do_Laundry_570x310.jpg?fm=png', name: 'Laundry & Ironing', quantity: 1, price: 20000 }],
    trackingHistory: [
      // You can add tracking history here if needed, but OrderDetailsPage doesn't use it
    ],
  },
  {
    id: 'CTS9877',
    orderId: '#CTS9877',
    deliveryStatus: 'Pending',
    deliveryDate: 'Monday, 15-08',
    recipientName: 'Jane Doe',
    shippingAddress: '45 Apple Street, Lekki, Lagos.',
    deliveryStart: '16 August',
    deliveryEnd: '17 August',
    products: [{ id: 2, image: 'https://www.kleenolng.com/wp-content/uploads/2025/04/5-Rewarding-Benefits-of-Hiring-a-Professional-Cleaning-Service-770x420.jpgg', name: 'Cleaning Service', quantity: 1, price: 15000 }],
    trackingHistory: [],
  },
  {
    id: 'CTS9878',
    orderId: '#CTS9878',
    deliveryStatus: 'Completed',
    deliveryDate: 'Friday, 02-08',
    recipientName: 'John Smith',
    shippingAddress: '23 Banana Avenue, Ikeja, Lagos.',
    deliveryStart: '01 August',
    deliveryEnd: '02 August',
    products: [{ id: 3, image: 'https://goodbeeplumbinganddrains.com/wp-content/uploads/2023/01/iStock-1341381755.jpg', name: 'Plumbing Service', quantity: 1, price: 5000 }],
    trackingHistory: [],
  },
];

const ProfileOrders = () => {
  const [selected, setSelected] = useState<string>('');
  const [showInfo, setShowInfo] = useState(false);
  const [passInfo, setPassInfo] = useState<FullOrderDetails | null>(null);

  const filteredOrders = selected
    ? orders.filter((order) => order.deliveryStatus.toLowerCase() === selected)
    : orders;

  const handleOrderClick = (order: FullOrderDetails) => {
    setPassInfo(order);
    setShowInfo(true);
  };
  
  const handleBack = () => {
    setShowInfo(false);
    setPassInfo(null);
  };

  if (showInfo && passInfo) {
    return (
      <div className='bg-white rounded-md py-3 mb-5 shadow-xl relative'>
        <OrderDetailsPage order={passInfo} onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className='bg-white rounded-md py-3 mb-5 min-h-full shadow-xl relative'>
      <div className='flex justify-between px-4 py-3'>
        <h2 className='text-2xl font-semibold'>Order History</h2>

        <Select value={selected} onValueChange={setSelected}>
          <SelectTrigger
            className="rounded-2xl px-4 py-2"
            style={{
              backgroundColor: selected ? statusColors[selected] : '#F5F5F4',
            }}
          >
            <SelectValue className="text-sm" placeholder="All">
              {selected ? statusLabels[selected] : 'All'}
            </SelectValue>
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value="all" className="bg-[#F5F5F4] my-1">
                All
              </SelectItem>
              <SelectItem value="Pending" className="bg-[#FFE0A8] my-1">
                Pending
              </SelectItem>
              <SelectItem value="Completed" className="bg-[#0CEA0052] my-1">
                Completed
              </SelectItem>
              <SelectItem value="InProgress" className="bg-[#0027E93B] my-1">
                In Progress
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='h-[1px] bg-[#c7c7c7] w-full'></div>

      <div className='mt-5 px-4 '>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, index) => (
            <div
              className='py-3 px-2 rounded-md transition-all hover:cursor-pointer hover:bg-[#e4e3e3]'
              key={order.id + index}
              onClick={() => handleOrderClick(order)} // Click handler to show details
            >
              <div className='flex justify-between mb-5'>
                <div>
                  <h4 className='font-semibold text-lg'>
                    Order {order.orderId} - {order.products[0].name}
                  </h4>
                  <p className='text-sm text-[#0000008e]'>{order.deliveryDate}</p>
                </div>
                <Button variant={`status${order.deliveryStatus}` as 'statusInProgress' | 'statusPending' | 'statusCompleted'}>
                  {order.deliveryStatus}
                </Button>
              </div>
              {/* <div className='h-[1px] bg-[#c7c7c7] w-full'></div> */}
            </div>
          ))
        ) : (
          <p className="text-center text-sm text-gray-400 mt-6">
            No orders found for this status.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileOrders;