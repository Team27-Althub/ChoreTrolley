import React from 'react';
import { ChevronDown, Calendar, MapPin, Clock } from 'lucide-react';
import heroBG from '../../../../public/image.png'
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
                {/* Filter/Search Bar */}
                <div className='flex justify-center'>
                <div className=" lg:w-[60%] w-full lg:mx-10  bg-gradient-to-r from-[#004136] to-[#0a6150] py-4 mb-10 rounded-md flex  items-center ">
                {/* Category */}
                <div className="flex items-center justify-center gap-2 text-center py-2 text-white w-full lg:w-[20%] border-r border-white">
                    <ChevronDown size={12} />
                    <span className=" text-[12px] gap-1 flex"><span className='hidden md:block'>Select</span> Category</span>
                </div>

                {/* Location */}
                <div className=" items-center gap-2 text-center  py-2 flex justify-center text-white w-full lg:w-[20%] border-r border-white">
                    <MapPin size={12} />
                    <span className=" text-[12px] gap-1 flex"> <span className='hidden md:block'>Choose</span> Location</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2  py-2 justify-center text-white w-full lg:w-[20%] border-r border-white">
                    <Calendar size={12} />
                    <span className=" text-[12px] gap-1 flex"><span className='hidden md:block'>Select</span> Date</span>
                </div>

                {/* Time */}
                <div className="flex items-center gap-2 py-2 justify-center text-white w-full lg:w-[20%] border-r border-white">
                    <Clock size={12} />
                    <span className=" text-[12px] gap-1 flex"><span className='hidden md:block'>Choose</span> Time</span>
                </div>

                {/* Search Button */}
                <div className="w-full lg:w-[20%] flex justify-center">
                    <button className="bg-white text-black font-medium  text-sm px-3 md:px-5 py-1 rounded-md hover:bg-gray-200 transition">
                    Search
                    </button>
                </div>
                </div>
                </div>
        
        <section className=" text-black   px-6 lg:px-10  relative md:pt-10 ">
            <div className="max-w-7xl mx-auto py-10">
                {/* Text Section */}
                <div className="mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-[#f6b891] leading-tight">
                    Your Life, Seamlessly<br />Managed
                </h2>
                <p className="text-lg mt-6 text-[#FFFFFF] md:w-[55%]">
                    From fresh groceries to sparkling clean homes, we provide you with trusted services on demand.
                </p>
                </div>

               
            </div>

                <Image
                src={heroBG}
                alt='girl smiling'
                className='absolute md:flex  hidden bottom-0 w-[42%]  right-0   z-0'
                />  

        </section>
        
    </div>
  );
};

export default Hero;
