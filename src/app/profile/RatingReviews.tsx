'use client';
import React, { useState } from 'react';
import RateProductPage from './RateSelectedProdust'; // Assuming the file is in the same directory

// Define a type for the product data to be passed as a prop
interface ProductData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  orderId: string;
  deliveryDate: string;
}

const ratingsData: ProductData[] = [
  {
    id: 1,
    image: 'https://www.altimus.ae/cdn/shop/files/New_Project_69_512x385.jpg?v=1729755134',
    title: 'Milk',
    subtitle: 'Dairy & Eggs',
    orderId: '#CTS9876',
    deliveryDate: '2025-07-09 15:12:01',
  },
  {
    id: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
    title: 'Fresh Tomatoes',
    subtitle: 'Fresh Cow Milk',
    orderId: '#CTS0876',
    deliveryDate: '2025-07-09 15:12:01',
  },
  {
    id: 3,
    image: 'https://c.ndtvimg.com/2023-08/brlp7gk_uncooked-rice-or-rice-grains_625x300_18_August_23.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307',
    title: 'Rice',
    subtitle: 'Pantry Staples',
    orderId: '#CTS0876',
    deliveryDate: '2025-07-09 15:12:01',
  },
  {
    id: 4,
    image: 'https://images.ctfassets.net/ajjw8wywicb3/2sGz5dCo8LlJoenyCauJ9H/50da004ddfeb3aa2fa839d854d3c9c67/HOW_TO_WASH_CLOTES_How_to_do_Laundry_570x310.jpg?fm=png',
    title: 'Laundry & Ironing',
    subtitle: 'Household Service',
    orderId: '#CTS0876',
    deliveryDate: '2025-07-09 15:12:01',
  },
];

const RatingsReviews = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);

  const handleRateProductClick = (product: ProductData) => {
    setSelectedProduct(product);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  // Conditionally render based on state
  if (selectedProduct) {
    return (
      <div className=" bg-gray-100 min-h-screen">
        <RateProductPage product={selectedProduct} onBack={handleBackClick} />
      </div>
    );
  }

  return (
    <div className="px-6 py-4">
      <h2 className="text-2xl font-bold mb-6">Feature Coming Soon...</h2>

      {/* {ratingsData.map((item) => (
        <div key={item.id} className="border rounded-md mb-6 p-4 ">
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.subtitle}</p>
              <p className="text-sm mt-1">
                Order <span className="font-semibold">{item.orderId}</span>
              </p>
              <p className="text-sm text-gray-500">
                Delivery on {item.deliveryDate}
              </p>
            </div>
          </div>
          <div className="border-t mt-4 flex pt-4 justify-center">
            <button
              onClick={() => handleRateProductClick(item)} // Add onClick handler here
              className="text-sm text-[#013328] hover:underline"
            >
              Rate this Product
            </button>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default RatingsReviews;