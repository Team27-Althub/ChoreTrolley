'use client';

import React from 'react';
import { CartProvider } from 'react-use-cart';

export default function CartProviderWrapper({ children }) {
  return <CartProvider>{children}</CartProvider>;
}