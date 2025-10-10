'use client'
import React from 'react'
import { useFetchResourceQuery } from '@/redux/api/crudApi'
import RenderStars from '@/app/services/Stars'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from 'next/link'

interface item {
  id: string,
  imageUrl: string,
  title: string,
  serviceProvider: {
    rating: number,
  }
}


const FeaturedService = () => {
  const { data: serviceData, error, isLoading } = useFetchResourceQuery('/dashboard/services')
  const stuff = sessionStorage.getItem('accessToken')
  console.log(stuff)

  // Skeleton Loader
  const SkeletonCard = () => (
    <div className="p-4 bg-gray-200 animate-pulse rounded-xl h-56 w-full flex flex-col items-start justify-end">
      <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
      <div className="flex gap-1 mb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-3 w-3 bg-gray-300 rounded"></div>
        ))}
      </div>
      <div className="h-3 w-10 bg-gray-300 rounded"></div>
    </div>
  );

  // If loading or error -> Show skeletons
  if (isLoading || error) {
    return (
      <div className="bg-white py-4 rounded-md mb-10 shadow-xl">
        <div className="mb-5">
          <div className="flex justify-between px-5 mb-3 mt-2 items-center">
            <h2 className="md:text-2xl text-lg font-semibold">Featured Service Vendors</h2>
            <Link href={'/services'} className='hover:cursor-pointer'>
              <p className="text-blue-700 md:text-lg text-sm">See all</p>
            </Link>
          </div>
          <div className="h-[1px] bg-[#7c7c7c] w-full"></div>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full px-5">
          <CarouselContent className="-ml-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 shrink-0 min-w-0 basis-1/2 sm:basis-1/3 md:basis-1/4"
              >
                <SkeletonCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    )
  }

  return (
    <div className="bg-white py-4 rounded-md mb-10 shadow-xl">
      <div className="mb-5">
        <div className="flex justify-between px-5 mb-3 mt-2 items-center">
          <h2 className="md:text-2xl text-lg font-semibold">Featured Service Vendors</h2>
          <Link href={'/services'} className='hover:cursor-pointer'>
              <p className="text-blue-700 md:text-lg text-sm">See all</p>
            </Link>
        </div>
        <div className="h-[1px] bg-[#7c7c7c] w-full"></div>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="w-full px-5">
        <CarouselContent className="-ml-4">
          {serviceData?.data?.map((item: item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 shrink-0 min-w-0 basis-1/2 sm:basis-1/3 md:basis-1/4"
            >
              <div
                className="p-4 bg-gray-100 rounded-xl text-center h-56 w-full flex flex-col items-start justify-end text-white"
                style={{
                  backgroundImage: `
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
                    url('https://choretrolley-apiservice-production.up.railway.app${item?.imageUrl}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2 className="text-xl font-normal text-left">{item.title}</h2>
                <RenderStars count={item?.serviceProvider?.rating} />
                <p className="text-sm">{item?.serviceProvider?.rating}.0</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default FeaturedService
