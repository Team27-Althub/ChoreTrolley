'use client'
import React from 'react'
import Image from 'next/image'
import cooking from "../../../../public/cooking.png"
import laundry from "../../../../public/laundry.png"
import handyMan from "../../../../public/handyman.png"
import petCare from "../../../../public/petcare.png"
import gardening from "../../../../public/gardening.png"
import homeOrg from "../../../../public/homeorg.png"
import Link  from 'next/link'


const services = [
  { image: cooking,name: "Chef chi", category:  "Cooking & meal prep",},
  { image: laundry,name: "Maria Opeyemi", category:  "Laundry & Ironing",},
  { image: handyMan,name: "David Oladele", category:  "Handyman Services",},
  { image: petCare,name: "Sophia Chen", category:  "Pet Care",},
  { image: gardening,name: "Robert Manwuli", category:  "Gardening & Landscaping",},
  { image: homeOrg,name: "Laura Ikechi", category:  "Home Organisation",},
 
]
const OtherServices = () => {
  return (
    <div className='flex flex-col  justify-center  mx-3 md:mx-10 lg:mx-20 mb-10 lg:mt-5'>
      <h4 className='text-left p-5.5 text-xl font-bold '>You may also like</h4>
        <div className='w-full max-w-7xl mx-auto text-center'>
          <div className='w-full  grid grid-cols-3 grid-rows-2 gap-4 place-items-center  '>
              {services.map((service) => (
                <div key={service.name} className='w-100 h-60 bg-white flex flex-col justify-center items-center text-left space-y-3 rounded-lg shadow-lg'>
                    <Image src={service.image} alt={service.name} width={356} height={85} />
                   <div className=' w-full text-left px-5 space-y-1'>
                     <p className='font-bold text-base'> {service.name}</p>
                    <p className='text-xs text-black/50'>{service.category}</p>
                   </div>
                   <button className='border-2 border-[#013328] px-4 py-3 rounded-lg m-3'>
                      <Link href={'/services'} className='text-[11px] text-[#013328] font-bold'>View Profile</Link>
                   </button>
                </div>
              ))}
          </div>
        </div>
    </div>
  )
}

export default OtherServices