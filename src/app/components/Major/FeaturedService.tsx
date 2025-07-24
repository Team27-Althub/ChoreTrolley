import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

const FeaturedService = () => {
    const data = [
        {id:1 , Store: 'Expert Home Cleaning', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:2 , Store: 'Expert Home Sculptor', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:3 , Store: 'Expert Home Cleaning', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:4 , Store: 'Expert Home Sculptor', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:5 , Store: 'Expert Home Cleaning', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:6 , Store: 'Expert Home Wash', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    ]


  return (
    <div className='bg-white  py-4 rounded-md  mb-5'>
      <div className=' mb-5'>
        <div className='flex justify-between  px-5 mb-3 mt-2 items-center'>
          <h2 className='text-2xl font-semibold'>Featured Service Vendors</h2>
          <p className='text-blue-700'>See all</p>
        </div>
        <div className='h-[1px] bg-[#7c7c7c] w-full'></div>
      </div>
       <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full px-5 "
    >
      <CarouselContent className='w-full flex justify-center'>
        {data.map((item) => (
          <CarouselItem key={item.id} className="basis-full sm:basis-1/2 md:basis-1/4 ">
            <div 
            className="p-4 bg-gray-100 rounded-xl text-center h-56 w-full flex items-start  flex-col justify-end text-white"
            style={{
                backgroundImage: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
                url('https://home-services.zohosites.com/home-service.png')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            >
              <h2 className='text-xl font-normal text-left'>{item.Store}</h2>
              <p className='text-sm'>{item.star}</p>
              <p className='text-sm'>{item.rating}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
  )
}

export default FeaturedService
