'use client';
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/header.module.css";
import quran from "../../../public/images/quran.webp";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { FiBarChart } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";

// ✅ Dynamically import react-multi-carousel to avoid SSR errors
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

/* ===========================================================
   ✅ Custom Arrows Components
   These components will receive "onClick" from react-multi-carousel
   and trigger next/prev slide navigation.
=========================================================== */

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-1 top-60 -translate-y-1/2 bg-[#659a68]  px-4 py-2 rounded shadow-lg hover:bg-[#659a68] transition-all z-10"
    aria-label="Previous Slide"
  >
    <FaArrowLeft size={15} className="text-black" />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-1 top-60 -translate-y-1/2 bg-[#659a68]  px-4 py-2 rounded shadow-lg hover:bg-[#659a68] transition-all z-10"
    aria-label="Next Slide"
  >
    <FaArrowRight size={15} className=" text-black" />
  </button>
);

function HeroSection() {
  const courses = [
    { title: "Reading Quran Basics", price: "$99.00", image: quran },
    { title: "Quran & Tajweed", price: "$35.00", image: quran },
    { title: "Quran Recitation", price: "$70.00", image: quran },
    { title: "Quran Memorization", price: "$120.00", image: quran },
  ];

  // ✅ Responsive configuration for react-multi-carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="text-white sections-dark  ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-2  md:px-6 pb-3 md:pb-6">
        {/* ✅ Left Content */}
        <div className="md:w-1/2 p-2 md:pr-8">
          <h1 className="text-4xl font-bold leading-snug text-lightCream">
            Recite the <span className="text-green">Quran</span> in an orderly and clear manner
          </h1>
          <p className="mt-4 text-grayBlue">
            Comprehensive Arabic, Quran, and Islamic studies courses suitable for all ages and skill levels online.
          </p>

          <div className="mt-6 space-x-4 flex flex-col md:flex-row justify-start md:justify-start">
            <button className="bg-[#659a68] mb-3 md:mb-0 me-3 md:m-0 cursor-pointer text-white px-5 py-2 rounded-full hover:bg-green/90 transition">
              Find your course
            </button>
            <button className="border cursor-pointer px-5 py-2 rounded-full hover:bg-green hover:text-white transition">
              Sign up for Free
            </button>
          </div>
        </div>

        {/* ✅ Right Carousel with Custom Arrows */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative bg-darkGray2 rounded-xl p-0 ">
          <Carousel
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            autoPlaySpeed={2500}
            showDots={false}
            arrows={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="p-4"
          >
            {courses.map((course, index) => (
              <div key={index} className="p-4">
                <div className="bg-transparent w-full bg-gradient-to-tr from-black to-lime-50 border-4 border-double border-white rounded-xl shadow-md p-6 ">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={180}
                    height={100}
                    className=" w-full h-auto rounded-lg"
                  />
                  <h3 className="text-2xl mt-4">{course.title}</h3>
                  <p className="text-yellow-300 text-3xl font-bold  mt-2">{course.price}</p>
                  {/* this is  the duration level box  */}
                  <div className=" grid grid-cols-2 my-3 border border-white py-2 px-4 rounded-md">
                    {/* duration column  */}
                    <div className="flex items-center gap-x-1">
                      <div>
                        <IoMdTime  className="inline-block mr-2 text-xl text-green" />
                      </div>
                      <div>
                        <p className=" text-[11px]">Duration</p>
                        <p className="  text-yellow-300">Beginner</p>
                      </div>
                    </div>
                     {/* Level column  */}
                    <div className="flex items-center gap-x-1 justify-end my-[2px] border-l border-white">
                      <div>
                        <FiBarChart className="inline-block mr-2 text-xl text-green" />
                      </div>
                      <div>
                        <p className=" text-[11px]">Level</p>
                        <p className="  text-yellow-300">Beginner</p>
                      </div>
                    </div>
                    
                   
                  </div>

                  <div className="flex flex-col md:flex-row justify-between mt-5">
                    <button className="bg-[#659a68] mb-3 md:mb-0 md:m-0 w-full md:w-[47%] text-white px-4 py-2 rounded-full hover:bg-green/90">
                      Register Now
                    </button>
                    <button className="  text-white w-full  md:w-[47%] px-4 py-2 border border-white rounded-full hover:bg-green hover:text-white">
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
