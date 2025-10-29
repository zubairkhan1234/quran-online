'use client';
import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import quran from '../../../public/images/quran.webp';
import CarouselCourseCard from '../Cards/CarouselCourseCard';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

/* ===========================================================
   ✅ Custom Left & Right Arrows
   These will override the default carousel arrows
=========================================================== */

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-[30%]  bg-[#659a68] rounded text-white px-4 py-2 shadow-lg hover:bg-[#4d8050] transition-all z-10"
    aria-label="Previous Slide"
  >
    <FaArrowLeft size={18} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-[30%]  bg-[#659a68] text-white px-4 py-2 rounded shadow-lg hover:bg-[#4d8050] transition-all z-10"
    aria-label="Next Slide"
  >
    <FaArrowRight size={18} />
  </button>
);

/* ===========================================================
   ✅ Courses Component
=========================================================== */

function Courses() {
  const courses = [
    { title: "Reading Quran Basics", price: "$99.00", image: quran },
    { title: "Quran & Tajweed", price: "$35.00", image: quran },
    { title: "Quran Recitation", price: "$70.00", image: quran },
    { title: "Quran Memorization", price: "$120.00", image: quran },
    { title: "Islamic Studies", price: "$65.00", image: quran },
  ];

  // ✅ Responsive Breakpoints
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 15,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bg-[#f6f4f0]">
      <div className="px-8 py-10 bg-[#f6f4f0] container m-auto">
        {/* ✅ Main Wrapper */}
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-extrabold text-gray-800">
              Explore Featured <span className="text-[#659a68]">Courses</span>
            </h2>
          </div>

          {/* ✅ Carousel Wrapper */}
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3500}
            arrows={true}
            showDots={false}
            keyBoardControl={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            customTransition="transform 600ms ease-in-out"
            transitionDuration={600}
            containerClass="relative"
            itemClass="px-3"
          >
            {courses.map((item, index) => (
              <div key={index}>
                <CarouselCourseCard item={item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Courses;
