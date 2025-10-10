import React from 'react';
import heroImage from '../../../../public/personWaving.svg';
import Link from 'next/link';
import Image from 'next/image'; // Make sure to import your image properly

const JoinUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#003d2f] to-[#037b5c] text-white  px-6 lg:ps-24 p rounded-lg   pt-7">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className=" py-2">
          <h1 className="text-4xl xl:text-5xl font-bold mb-6">
            Ready to Simplify Your Life
          </h1>
          <p className="text-lg mb-8">
            Join ChoreTrolly today and reclaim your time.
          </p>
          <div className="flex gap-4">
            <Link href={'/signUp'}>
              <button className="bg-white hover:cursor-pointer  text-gray-900 font-semibold lg:px-5 px-2 py-3 rounded hover:bg-gray-200 transition">
                Start Shopping Groceries
              </button>
            </Link>
            <Link href={'/signUp'}>
              <button className="border hover:cursor-pointer border-white px-5 py-3 rounded hover:bg-white hover:text-gray-900 transition">
                Find Household Services
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0">
          <Image
            src={heroImage}
            alt="Happy person waving"
            className="w-[300px] lg:w-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
