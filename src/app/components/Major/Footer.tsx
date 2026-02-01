import React from 'react'
import logo from '../../../../public/Frame 38.png'
import Image from 'next/image'
import { InstagramIcon, Twitter, Linkedin, Github  } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-[#013328] py-14 px-5'>
      {/* <Image src={logo} alt="Logo" width={150} height={40} /> */}
      <div className='bg-[#f54201] font-semibold rounded-full w-[150px] text-white py-3 px-6'>
       Logo here
      </div> 
      <p className='text-[#F3F4F6] mt-5'>Helping you find trusted domestic services — fast, <br /> flexible, and close to home.</p>
      <div className='mt-5 flex gap-4'>
        <InstagramIcon size={20} color='#fff' />
        <Twitter size={20} color='#fff' />
        <Linkedin size={20} color='#fff' />
        <Github size={20} color='#fff' />
      </div>
      <div className='bg-[#fff] mt-10 h-0.5'></div>
      <div className='flex justify-between mt-5 text-[#F3F4F6] text-sm md:text-lg'>
        <div>© 2025 ChoreTrolly. All rights reserved.</div>
        <div className='flex gap-3 underline'>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookies Settings</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
