'use client';
import Image from "next/image";
import dynamic from "next/dynamic";
import "../../styles/header.module.css";
import quran from "../../../public/images/quran.webp";
import "react-multi-carousel/lib/styles.css";

// ✅ Dynamically import react-multi-carousel to avoid SSR errors
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

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
    <section className="bg-darkGray1 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">

        {/* ✅ Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold leading-snug text-lightCream">
            Recite the <span className="text-green">Quran</span> in an orderly and clear manner
          </h1>
          <p className="mt-4 text-grayBlue">
            Comprehensive Arabic, Quran, and Islamic studies courses suitable for all ages and skill levels online.
          </p>

          <div className="mt-6 space-x-4">
            <button className="bg-[#659a68] cursor-pointer text-white px-5 py-2 rounded-full hover:bg-green/90 transition">
              Find your course
            </button>
            <button className="border cursor-pointer px-5 py-2 rounded-full hover:bg-green hover:text-white transition">
              Sign up for Free
            </button>
          </div>
        </div>

        {/* ✅ Right Carousel */}
        <div className="w-100 md:w-1/2 mt-10 md:mt-0 relative bg-darkGray2 rounded-xl p-0  md:p-8 text-center">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2500}
            showDots={true}
            arrows={false}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="p-4"
          >
            {courses.map((course, index) => (
              <div key={index} className="p-4">
                <div className="bg-transparent w-full border-4 border-double border-white rounded-xl shadow-md p-6 text-center">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={180}
                    height={140}
                    className="mx-auto w-full h-auto rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
                  <p className="text-green font-bold mt-2">{course.price}</p>
                  <p className="text-grayBlue text-sm mt-2">Live Classes · Beginner</p>

                  <div className="mt-4 flex justify-center space-x-3">
                    <button className="bg-green text-white px-4 py-2 rounded-full hover:bg-green/90">
                      Register Now
                    </button>
                    <button className="border border-green text-green px-4 py-2 rounded-full hover:bg-green hover:text-white">
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
