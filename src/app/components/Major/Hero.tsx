import React from 'react';
import { ChevronDown, Calendar, MapPin, Clock } from 'lucide-react';
import heroBG from '../../../../public/heroImage.png'
import Image from 'next/image';

const Hero = () => {
  return (
    <div
        className='bg-gradient-to-r from-[#013328] to-[#014937] '
        // style={{
        //         backgroundImage: `url(${heroBG})`,
        //         backgroundPosition: "center",
        //         backgroundSize: "cover",
        //         backgroundRepeat: "no-repeat",
        //       }}
    >
        
        <section className=" text-black  grid md:grid-cols-[60%_40%] px-6 lg:px-20  relative md:pt-10 ">
            <div className="max-w-7xl mx-auto pt-20">
                {/* Text Section */}
                <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#f6b891] leading-tight">
                    Your Life, Seamlessly<br />Managed
                </h2>
                <p className="text-lg mt-6 text-[#FFFFFF] max-w-2xl">
                    From fresh groceries to sparkling clean homes, we provide you with trusted services on demand.
                </p>
                </div>

                {/* Filter/Search Bar */}
                <div className="bg-gradient-to-r from-[#004136] to-[#0a6150] p-4 rounded-md flex flex-col lg:flex-row items-center gap-4 lg:gap-0 ">
                {/* Category */}
                <div className="flex items-center gap-2 ps-4 py-2 text-white w-full lg:w-[20%] border-r border-white">
                    <ChevronDown size={12} />
                    <span className=" text-[12px]">Select Category</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 ps-2 py-2 text-white w-full lg:w-[20%] border-r border-white">
                    <MapPin size={12} />
                    <span className=" text-[12px]">Choose Location</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 ps-4 py-2 text-white w-full lg:w-[20%] border-r border-white">
                    <Calendar size={12} />
                    <span className=" text-[12px]">Select Date</span>
                </div>

                {/* Time */}
                <div className="flex items-center gap-2 ps-4 py-2 text-white w-full lg:w-[20%] border-r border-white">
                    <Clock size={12} />
                    <span className=" text-[12px]">Choose Time</span>
                </div>

                {/* Search Button */}
                <div className="w-full lg:w-[20%] flex justify-center lg:justify-end px-4">
                    <button className="bg-white text-black font-medium  text-sm px-5 py-1 rounded-md hover:bg-gray-200 transition">
                    Search
                    </button>
                </div>
                </div>
            </div>
            <div className='md:flex items-end hidden '>
                <Image
                src={heroBG}
                alt='girl smiling'
                className=' bottom-0 lg:h-[450px] h-[350px] w-[230px] md:w-[300px] lg:w-[450px] md:right-20 right-0   z-0'
                />  
            </div>
        </section>
        
    </div>
  );
};

export default Hero;
