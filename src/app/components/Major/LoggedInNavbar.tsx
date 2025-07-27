import React from 'react'
import logo from '../../../../public/miniLogo.png'
import Image from 'next/image'
import { ShoppingCart, Bell } from 'lucide-react'
import Link from 'next/link'

const LoggedInNavbar = () => {
  return (
    <div className="w-full h-20 bg-white shadow-md border border-gray-200 flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={40} height={40} />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-10 text-base font-medium">
        <Link href={'/dashboard'}>
         <span className="group relative text-black font-bold">
            Home
             <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#013328] transition-all duration-300 group-hover:w-full"></span>
        </span>
        </Link>
        <Link href={'/services'}>
          <span className="text-gray-500 group relative hover:text-black">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#013328] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
        <Link href={'/groceries'}>
          <span className="text-gray-500 group relative hover:text-black">
            Groceries
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#013328] transition-all duration-300 group-hover:w-full"></span>
        </span>
        </Link>
      </nav>

      {/* Right Section: Cart, Bell, User Avatar */}
      <div className="flex items-center gap-6">
        {/* Cart with badge */}
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          <div className="absolute -top-1 -right-2 bg-[#013328] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            0
          </div>
        </div>

        {/* Bell icon */}
        <Bell className="w-6 h-6" />

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 text-lg">
          A
        </div>
      </div>
    </div>
  )
}

export default LoggedInNavbar
