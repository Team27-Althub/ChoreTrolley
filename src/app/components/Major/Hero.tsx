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
        
        <section className=" text-black py-20 px-6 lg:px-24 relative">
            <div className="max-w-7xl mx-auto">
                {/* Text Section */}
                <div className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#f6b891] leading-tight">
                    Your Life, Seamlessly<br />Managed
                </h1>
                <p className="text-lg mt-6 text-[#FFFFFF] max-w-2xl">
                    From fresh groceries to sparkling clean homes, we connect you with trusted services on demand.
                </p>
                </div>

                {/* Filter/Search Bar */}
                <div className="bg-gradient-to-r from-[#004136] to-[#0a6150] p-4 rounded-md flex flex-col lg:flex-row items-center gap-4 lg:gap-0 w-[60%]">
                {/* Category */}
                <div className="flex items-center gap-2 ps-4 py-2 text-white w-full lg:w-[20%] border-r border-white">
                    <ChevronDown size={12} />
                    <span className=" text-[12px]">Select Category</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 ps-4 py-2 text-white w-full lg:w-[20%] border-r border-white">
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
                    <button className="bg-white text-black font-medium px-5 py-2 rounded-md hover:bg-gray-200 transition">
                    Search
                    </button>
                </div>
                </div>
            </div>
            <Image
                src={heroBG}
                alt='girl smiling'
                className='absolute bottom-0 lg:h-[450px] h-[350px] w-[190px] md:w-[250px] md:right-20 right-0   z-0'
            />
        </section>
        
    </div>
  );
};

export default Hero;
