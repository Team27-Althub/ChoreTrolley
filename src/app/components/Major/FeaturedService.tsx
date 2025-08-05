import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"


const FeaturedService = () => {
    const image3 = 'https://www.daibau.ng/showfile.php?uuid=b4358791a81603a00d5f42e70f8add69d52192e1'
    const image2 = 'https://images.ctfassets.net/ajjw8wywicb3/7FmJC0yRrvfmxEkg0FAujA/2fc0d9df8fb6bbdc82a4ac1067a5d760/HOW_TO_WASH_CLOTHES_The_art_of_washing_different_fabric_370x320.jpg?fm=png'
    const image5 = 'https://de-cleaners.com/wp-content/uploads/2025/03/clean-1.jpg'

    const data = [
        {id:1 , image: image5, Store: 'Expert Home Cleaning', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:2 , image: image3, Store: 'Expert Home Sculptor', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:3 , image: image5, Store: 'Expert Home Cleaning', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:4 , image: image3, Store: 'Expert Home Sculptor', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:5 , image: image5, Store: 'Expert Home Cleaning', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
        {id:6 , image: image2, Store: 'Expert Home Wash', rating: '5.0', star: '⭐⭐⭐⭐⭐'},
    ]


  return (
    <div className='bg-white  py-4 rounded-md  mb-10 shadow-xl'>
      <div className=' mb-5'>
        <div className='flex justify-between  px-5 mb-3 mt-2 items-center'>
          <h2 className='md:text-2xl text-lg font-semibold'>Featured Service Vendors</h2>
          <p className='text-blue-700 md:text-lg text-sm'>See all</p>
        </div>
        <div className='h-[1px] bg-[#7c7c7c] w-full'></div>
      </div>
       <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full px-5 "
    >
      <CarouselContent className='w-full flex justify-center'>
        {data.map((item) => (
          <CarouselItem key={item.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 ">
            <div 
            className="p-4 bg-gray-100 rounded-xl text-center h-56 w-full flex items-start  flex-col justify-end text-white"
            style={{
                backgroundImage: `
                linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
                url('${item.image}')`,
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
