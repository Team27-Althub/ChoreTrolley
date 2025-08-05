import React from 'react'
import Image from 'next/image'


type content = {
    first: string,
    second:string,
    image: any
}

const WhyUs1 = ({first, second, image}: content) => {
  return (
    <div className='pt-5 max-w-96 h-[400px] bg-[#fff] border-[#dddddd] border-2 rounded-md flex  items-end justify-between flex-col'>
      <div>
        <h2 className='text-2xl mb-5 font-bold text-center'>{first}</h2>
        <p className='text-sm text-center text-[#8a8989] px-5'>{second}</p>
      </div>
      <div className='flex justify-end w-[200px]'>
        <Image src={image} alt='' className='w-full'/>
      </div>
    </div>
  )
}

export default WhyUs1
