import React from 'react'
// import Image from 'next/image'



type props = {
    category: string,
    opinion: string,
    rating: string,
    name: string,
    role: string,
    dateJoined: string,
    image: any
}

const TestimonialCard = ({category, opinion, rating, name, role, dateJoined, image}:props) => {
  return (
    <div className='bg-[#fff] rounded-sm   p-3 border-[#dddddd] border-2'>
        <p className='text-[12px] '>{category}</p>
        <h2 className=' text-lg mb-4 mt-5 text-[#8a8989]'>{opinion}</h2>
        <span className=''>{rating}</span>
        <div className='flex justify-between mt-4 items-end'>
            <div className=''>
                <h4 className='text-[13px] font-bold'>{name}</h4>
                <p className='text-[12px] text-[#8a8989]'>{role}</p>
                <p className='text-[12px] text-[#8a8989]'>Joined since {dateJoined}</p>
            </div>
            <div>
                <img src={image} alt="Logo"  width={70} className='h-[70px] rounded-[50px]'/>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
