'use client'
import React, { useState } from 'react'
import logo from '../../../../public/miniLogo.png'
import Image from 'next/image'
import { ShoppingCart, Bell, Menu, X } from 'lucide-react' // Import Menu and X icons
import Link from 'next/link'
import { useCart } from 'react-use-cart'
import { usePathname } from 'next/navigation'

const LoggedInNavbar = () => {
  const { totalUniqueItems } = useCart()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Helper function to determine if a link is active
  const isActive = (href:string) => pathname === href

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="w-full h-20 z-50  bg-white shadow-md border border-gray-200 sticky top-0 flex items-center justify-between px-6">
      {/* Logo */}
      <Link href={'/dashbard'}>
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-10 text-base font-medium">
        <Link href={'/dashboard'}>
          <span className={`group relative text-gray-500 hover:text-black ${isActive('/dashboard') ? 'text-black font-bold' : ''}`}>
            Home
            <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#013328] transition-all duration-300 ${isActive('/dashboard') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </span>
        </Link>
        <Link href={'/services'}>
          <span className={`group relative text-gray-500 hover:text-black ${isActive('/services') ? 'text-black font-bold' : ''}`}>
            Services
            <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#013328] transition-all duration-300 ${isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </span>
        </Link>
        <Link href={'/groceries'}>
          <span className={`group relative text-gray-500 hover:text-black ${isActive('/groceries') ? 'text-black font-bold' : ''}`}>
            Groceries
            <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#013328] transition-all duration-300 ${isActive('/groceries') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </span>
        </Link>
      </nav>

      {/* Right Section: Cart, Bell, User Avatar, Mobile Menu Button */}
      <div className="flex items-center gap-6">
        {/* Cart with badge */}
        <Link href={'/cart'}>
          <div className="relative hover:cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black" />
            {totalUniqueItems > 0 && (
              <div className="absolute -top-1 -right-2 bg-[#013328] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalUniqueItems}
              </div>
            )}
          </div>
        </Link>

        {/* Bell icon */}
        <Bell className="w-6 h-6 text-gray-700 hover:text-black" />

        {/* User Avatar */}
        <Link href={'/profile'}>
          <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 text-lg">
            A
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button onClick={toggleMobileMenu} className="md:hidden">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav 
        className={`md:hidden absolute top-20 left-0 w-full z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-96'
        }`}
      >
        <div className="flex flex-col items-center py-4">
          <Link href={'/dashboard'} onClick={toggleMobileMenu} className={`py-2 ${isActive('/dashboard') ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}>
            Home
          </Link>
          <Link href={'/services'} onClick={toggleMobileMenu} className={`py-2 ${isActive('/services') ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}>
            Services
          </Link>
          <Link href={'/groceries'} onClick={toggleMobileMenu} className={`py-2 ${isActive('/groceries') ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}>
            Groceries
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default LoggedInNavbar