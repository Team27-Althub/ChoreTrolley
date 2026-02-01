import React from 'react'
import MenuButton from '../Minor/MenuButton'
import Link from 'next/link'
import logo from '../../../../public/Frame 38.png'  
import Image from 'next/image'
// import { ShoppingCartIcon } from 'lucide-react'


const Navbar = () => {
  return (
    <div className='flex justify-between py-5 backdrop-blur-sm  top-0 z-50 items-center px-2 md:px-8 bg-gradient-to-r from-[#013328] to-[#014937]'>
      {/* <Image src={logo} alt="Logo" width={150} height={40} /> */}
      <div className='bg-[#f54201] font-semibold rounded-full text-white py-3 px-6'>
       Logo here
      </div> 
        <div className='bg-[#fff] font-semibold rounded-full text-black py-3 px-6'>
               <div className='flex gap-10 justify-between'>
                <div className='hover:border-b-[#093799] hover:border-r-[#093799] hover:border-b hover:border-r px-3 transition-all duration-200 ease-in'>
                    <Link href={''}>Our Team</Link>
                </div>
                <div className='hover:border-b-[#093799] hover:border-r-[#093799] hover:border-b hover:border-r px-3 transition-all duration-200 ease-in'>
                    <Link href={''}>Services</Link>
                </div>
                <div className='hover:border-b-[#093799] hover:border-r-[#093799] hover:border-b hover:border-r px-3 transition-all duration-200 ease-in'>
                    <Link href={''}>FAQs</Link>
                </div>
               </div>
              </div>
      <div className='flex justify-between items-center gap-2 md:gap-4 text-[20px]'>
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
