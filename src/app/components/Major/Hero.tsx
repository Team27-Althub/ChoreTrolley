import React from 'react';
import { ChevronDown, Calendar, MapPin, Clock } from 'lucide-react';
import heroBG from '../../../../public/image.png'
import Image from 'next/image';

const Hero = () => {

    

  return (
    <div
        className='bg-gradient-to-r from-[#013328] to-[#014937] h-[100vh]'
        // style={{
        //         backgroundImage: `url(${heroBG})`,
        //         backgroundPosition: "center",
        //         backgroundSize: "cover",
        //         backgroundRepeat: "no-repeat",
        //       }}
    >
               
        
        <section className=" text-black   px-6 lg:px-10  relative md:pt-10 ">
            <div className=" flex items-center">
                {/* Text Section */}
                <div className="flex justify-center  flex-col pt-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-[#f6b891] leading-tight">
                    Need Some Help??<br />Say   Less
                </h2>
                <p className="text-lg mt-6 text-[#FFFFFF] md:w-[55%]">
                    From fresh groceries to sparkling clean homes, we provide you with trusted services on demand.
                </p>
                </div>

               
            </div>
                <div className=''>
                    <div className='bg-white absolute right-72 top-16 p-4 w-[100px] h-[150px] rounded-md'>
                        <Image
                        src={heroBG}
                        alt='girl smiling'
                        className=' md:flex  hidden bottom-0 w-full  right-0   z-0'
                        />  
                    </div>
                    <div className='bg-white absolute right-40 top-44 p-4 w-[100px] h-[150px] rounded-md'>
                        <Image
                        src={heroBG}
                        alt='girl smiling'
                        className=' md:flex  hidden bottom-0 w-full  right-0   z-0'
                        />  
                    </div>
                    <div className='bg-white absolute right-10 top-80 p-4 w-[100px] h-[150px] rounded-md'>
                        <Image
                        src={heroBG}
                        alt='girl smiling'
                        className=' md:flex  hidden bottom-0 w-full  right-0   z-0'
                        />  
                    </div>
                    <div className='bg-white absolute right-72 top-80 p-4 w-[100px] h-[150px] rounded-md'>
                        <Image
                        src={heroBG}
                        alt='girl smiling'
                        className=' md:flex  hidden bottom-0 w-full  right-0   z-0'
                        />  
                    </div><div className='bg-white absolute right-10 top-16  p-4 w-[100px] h-[150px] rounded-md'>
                        <Image
                        src={heroBG}
                        alt='girl smiling'
                        className=' md:flex  hidden bottom-0 w-full  right-0   z-0'
                        />  
                    </div>
                    {/* <div className='bg-white h-72'></div> */}
                </div>

        </section>
        
    </div>
  );
};

export default Hero;
