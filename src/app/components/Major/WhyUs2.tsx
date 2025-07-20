import React from 'react'
import Image from 'next/image'


type content = {
    first: string,
    second:string,
    image: any
}

const WhyUs2 = ({first, second, image}: content) => {
  return (
    <div className='pt-5  h-[250px] bg-[#fff] border-[#dddddd] border-2 rounded-md flex ps-5   justify-between '>
      <div>
        <h2 className='text-2xl mb-5 font-bold '>{first}</h2>
        <p className='text-sm  text-[#8a8989]'>{second}</p>
      </div>
      <div className='flex justify-end items-end'>
        <Image src={image} alt=''/>
      </div>
    </div>
  )
}

export default WhyUs2
