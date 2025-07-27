import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from 'react-use-cart';
import CartProviderWrapper from "./cartprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// function CartProviderWrapper({ children }) {
//   return <CartProvider>{children}</CartProvider>;
// }

export const metadata: Metadata = {
  title: "ChoreTrolley",
  description: "ChoreTrolley — a tech-driven platform designed to simplify home life by providing trusted household services such as cleaning, cooking, laundry, grocery shopping, and more, all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProviderWrapper>
          {children}
        </CartProviderWrapper>
      </body>
    </html>
  );
}
