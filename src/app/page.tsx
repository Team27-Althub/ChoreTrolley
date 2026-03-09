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
import RenderStars from "./services/Stars";
import Navbar2 from "./components/Major/Navbar2";
import LandingPage from "./components/Major/LandingInspo";

export default function Home() {

  const reviews = [
  {
    name: "Grace Adebayo",
    imageUrl: 'https://atodmagazine.com/wp-content/uploads/2021/02/Nigeria-1050x700.jpg',
    occupation: "Nurse",
    rating: 5,
    category: "All-in-One",
    dateJoined: "2025-03-12",
    review:
      "I’m so impressed with their home management service. My apartment is spotless every week, the meals are healthy and delicious, and my laundry is always neatly folded. Truly a lifesaver for my busy schedule!",
  },
  {
    name: "Chinedu Okeke",
    imageUrl: 'https://wikimediafoundation.org/wp-content/uploads/2018/02/sam_oye_wiki_indaba_2017_portraits1-e1534046032973.jpg?w=1024',
    occupation: "Civil Engineer",
    rating: 4.6,
    category: "Cleaning & Laundry",
    dateJoined: "2025-11-25",
    review:
      "The cleaning and laundry services are top-notch. They’re always on time and very organized. The cooking could use a bit more variety, but overall, I’m very satisfied with their professionalism.",
  },
  {
    name: "Fatima Mohammed",
    imageUrl: 'https://c8.alamy.com/comp/2G7BED7/friendly-young-student-yankari-national-park-eastern-nigeria-2G7BED7.jpg',
    occupation: "Teacher",
    rating: 5,
    category: "Cooking & Cleaning",
    dateJoined: "2025-01-09",
    review:
      "Absolutely love their service! They keep my home sparkling clean, meals are well-prepared, and my clothes smell amazing after every wash. It’s like having a personal assistant for everything at home.",
  },
  {
    name: "Daniel Johnson",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJjmY9AdPysVgXzAPXU71nZeYGpE9dgBn4A&s',
    occupation: "Accountant",
    rating: 4,
    category: "All-in-One",
    dateJoined: "2025-09-30",
    review:
      "Their team is reliable and efficient. I come home to a clean space, folded laundry, and freshly cooked food. It’s been such a relief not having to worry about daily chores after work.",
  },
  {
    name: "Blessing Eze",
    imageUrl: 'https://www.shutterstock.com/image-photo/smile-black-woman-portrait-office-260nw-2467959915.jpg',
    occupation: "Pharmacist",
    rating: 4,
    category: "Cleaning",
    dateJoined: "2025-02-15",
    review:
      "Fantastic service! They handle cleaning, cooking, and laundry perfectly. My weekends are finally free, and my house has never looked better. Highly recommend for anyone with a busy lifestyle.",
  },
  {
    name: "Oluwatobi Ajayi",
    imageUrl: 'https://www.shutterstock.com/image-photo/smiling-nigerian-man-standing-isolated-260nw-2304008651.jpg',
    occupation: "Software Developer",
    rating: 4.9,
    category: "Laundry & Cooking",
    dateJoined: "2025-06-22",
    review:
      "Amazing experience so far. Their meals are well-balanced and tasty, and my clothes come back fresh and neatly ironed every time. Definitely worth every penny!",
  },
];


  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="bg-[#fff] py-10 px-5 md:px-20"id="howItWorks">
        <h2 className="text-center text-xl font-bold ">How we operate</h2>
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
        <h2 className="text-center text-3xl font-bold  ">Why Choose Us?</h2>
        <p className="text-center text-xl text-[#8a8989] my-2 ">We is not just any App, we’re your partner in managing household needs.</p> 
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
        <p className="text-center text-xl text-[#8a8989] my-2 ">Hear from real users who have simplified their lives with Us.</p> 
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-20 w-full mt-15 ">

          {reviews.map((review) => {
            return (
              <TestimonialCard 
                category={review.category} 
                opinion={review.review}
                rating={<RenderStars count={review.rating}/>}
                name={review.name}
                role={review.occupation}
                dateJoined={review.dateJoined}
                image={review.imageUrl}
              />
              )
            })}
      </div>
    </div>

      {/* <LandingPage/> */}

      <div className="md:px-20 px-5 my-10">
        <JoinUs/>
      </div>
      <Footer/>

      
    </div>
  );
} 
