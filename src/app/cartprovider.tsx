'use client';

import React from 'react';
import { CartProvider } from 'react-use-cart';
import { ReactNode } from 'react';

export default function CartProviderWrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}