import React from 'react'
import { Calendar } from 'lucide-react';
import Link from 'next/link';




const Navbar2 = () => {
  return (
    <div className='flex justify-between p-7'>
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
    <div className='bg-[#fff] font-semibold flex gap-3 text-[#f54201] items-center rounded-full  py-3 px-6'>
       <Calendar className="w-6 h-6 text-[#f54201]" />
       Book now
      </div>

    </div>
  )
}

export default Navbar2
