import React from 'react'
import MenuButton from '../Minor/MenuButton'
import Link from 'next/link'
import logo from '../../../../public/Frame 38.png'
import Image from 'next/image'
import { ShoppingCartIcon } from 'lucide-react'


const Navbar = () => {
  return (
    <div className='flex justify-between py-5 backdrop-blur-sm sticky top-0 z-50 items-center px-2 md:px-8 bg-gradient-to-r from-[#013328] to-[#014937]'>
      <Image src={logo} alt="Logo" width={150} height={40} />
      <div className='flex justify-between items-center gap-4 md:gap-8 text-[20px]'>
         {/* <ShoppingCartIcon size={32} color='#fff'/> */}
        <Link href='/login'>
         <MenuButton buttonType='Login' />
        </Link>
        <Link href='/signUp'>
         <MenuButton buttonType='Signup'/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
