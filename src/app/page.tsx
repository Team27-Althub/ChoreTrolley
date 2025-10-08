import Image from "next/image";
import Navbar from "./components/Major/Navbar";
import Footer from "./components/Major/Footer";
import TestimonialCard from "./components/Major/TestimonialCard";
import { Star } from "lucide-react";
import icon1 from '../../public/pepicons-print_rewind-time.svg'
import icon2 from '../../public/solar_shield-check-broken.svg'
import icon3 from '../../public/Group.svg'
import tools from '../../public/tools.svg'
import clock from '../../public/clock.svg'
import iron from '../../public/iron.svg'
import pot from '../../public/pot.svg'
import truck from '../../public/truck.svg'
import safe from '../../public/safe.svg'
import WhyUs1 from "./components/Major/WhyUs1";
import WhyUs2 from "./components/Major/WhyUs2";
import JoinUs from "./components/Major/JoinUs";
import Hero from "./components/Major/Hero";
import LoggedInNavbar from "./components/Major/LoggedInNavbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="bg-[#fff] py-10 px-5 md:px-20"id="howItWorks">
        <h2 className="text-center text-xl font-bold ">How ChoreTrolly Works</h2>
        <p className="text-center text-sm text-[#8a8989] mt-2">Experience the ultimate convenience in three simple steps.</p>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-10 gap-5">
          <div className="flex gap-3 items-center">
            <Image src={icon3} alt=""  width={40} className="h-[40px]"/>
            <div>
              <h3 className="text-xl">Choose Your Needs</h3>
              <p className="text-[#8a8989]  text-[12px]">Select from a range of groceries or household services like cleaning and laundry.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={icon1} alt=""  width={40} className="h-[40px]"/>
            <div>
              <h3 className="text-xl">Schedule & Confirm</h3>
              <p className="text-[#8a8989]  text-[12px]">Easily book services at your preferred time or add groceries to your cart.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={icon2} alt=""  width={40} className="h-[40px]"/>
            <div>
              <h3 className="text-xl">Enjoy Seamless Service</h3>
              <p className="text-[#8a8989]  text-[12px]">Relax while verified professionals handle your chores or groceries are delivered.</p>
            </div>
          </div>
        </div>

      </div>


      <div className="bg-[#F5F5F4] lg:px-14 px-9  pb-20 pt-25" id="whyUs">
        <h2 className="text-center text-3xl font-bold  ">Why Choose ChoreTrolly?</h2>
        <p className="text-center text-xl text-[#8a8989] my-2 ">ChoreTrolly is not just any App, we’re your partner in managing household needs.</p> 
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-15">
          <WhyUs1 
            first="Verified Professionals" 
            second="All our service providers are thoroughly vetted and background-checked for your peace of mind." 
            image={tools}
          />
          <WhyUs1 
            first="On-Demand & Flexible" 
            second="Book services instantly or schedule them for later, adapting to your busy lifestyle." 
            image={clock}
          />
          <WhyUs1 
            first="Secure Payments" 
            second="Our secure payment gateway ensures your transactions are safe and protected." 
            image={safe}
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          <WhyUs2 
            first="Grocery delivery" 
            second="Get your groceries delivered right to your doorstep, fresh and on time." 
            image={truck}
          />
          <WhyUs2
            first="Delicious Home Cooking" 
            second="Experienced chefs prepare delightful meals tailored to your preferences, right in your kitchen." 
            image={pot}
          />
        </div>
        <div className="mt-5">
          <WhyUs2
            first="Professional laundry Services" 
            second="Enjoy perfectly cleaned and ironed clothes, handled with care by our laundry experts." 
            image={iron}
          />
        </div>
      </div>



      <div className="bg-[#F5F5F4]  py-20  lg:px-20 px-9"  id="testimonials">
        <h2 className="text-center text-3xl font-bold ">What Our Customers Say</h2>
        <p className="text-center text-xl text-[#8a8989] my-2 ">Hear from real users who have simplified their lives with ChoreTrolly.</p> 
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-20 w-full mt-15 ">
          <TestimonialCard 
            category={'Groceries'} 
            opinion="“Harry came in and helped do the laundry that has been piling up for weeks due to our very busy work schedule. His diligence and honesty is exceptional.”"
            rating={'⭐⭐⭐⭐⭐'}
            name="James"
            role="developer"
            dateJoined="2025"
            image={'https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg'}
          />
          <TestimonialCard 
            category={'Groceries'} 
            opinion="“Harry came in and helped do the laundry that has been piling up for weeks due to our very busy work schedule. His diligence and honesty is exceptional.”"
            rating={'⭐⭐⭐⭐⭐'}
            name="James"
            role="developer"
            dateJoined="2025"
            image={'https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg'}
          />
          <TestimonialCard 
            category={'Groceries'} 
            opinion="“Harry came in and helped do the laundry that has been piling up for weeks due to our very busy work schedule. His diligence and honesty is exceptional.”"
            rating={'⭐⭐⭐⭐⭐'}
            name="James"
            role="developer"
            dateJoined="2025"
            image={'https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg'}
          />
          <TestimonialCard 
            category={'Groceries'} 
            opinion="“Harry came in and helped do the laundry that has been piling up for weeks due to our very busy work schedule. His diligence and honesty is exceptional.”"
            rating={'⭐⭐⭐⭐⭐'}
            name="James"
            role="developer"
            dateJoined="2025"
            image={'https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg'}
          />
          <TestimonialCard 
            category={'Groceries'} 
            opinion="“Harry came in and helped do the laundry that has been piling up for weeks due to our very busy work schedule. His diligence and honesty is exceptional.”"
            rating={'⭐⭐⭐⭐⭐'}
            name="James"
            role="developer"
            dateJoined="2025"
            image={'https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg'}
          />
          <TestimonialCard 
            category={'Groceries'} 
            opinion="“Harry came in and helped do the laundry that has been piling up for weeks due to our very busy work schedule. His diligence and honesty is exceptional.”"
            rating={'⭐⭐⭐⭐⭐'}
            name="James"
            role="developer"
            dateJoined="2025"
            image={'https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg'}
          />
      </div>
    </div>


      <div className="md:px-20 px-5 my-10">
        <JoinUs/>
      </div>
      <Footer/>
    </div>
  );
} 
