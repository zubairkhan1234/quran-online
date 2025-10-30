'use client';
import Image from 'next/image'
import React from 'react'
import data from '../../db/testimonials.json'
import dynamic from "next/dynamic";
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
        className="absolute left-[15px] top-40 -translate-y-1/2 bg-[#659a68]  px-4 py-2 rounded shadow-lg hover:bg-[#659a68] transition-all z-10"
        aria-label="Previous Slide"
    >
        <FaArrowLeft size={15} className="text-black" />
    </button>
);

const CustomRightArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-[15px] top-40 -translate-y-1/2 bg-[#659a68]  px-4 py-2 rounded shadow-lg hover:bg-[#659a68] transition-all z-10"
        aria-label="Next Slide"
    >
        <FaArrowRight size={15} className=" text-black" />
    </button>
);
function ClassActivity() {
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
        <div className='container m-auto px-5 md:px-10 ld:px-0  py-5 md:py-10'>
            <h2 className="text-4xl font-bold text-gray-900 mb-3 text-center">
                Hear From Our <span className="text-[#659a68]">Quran Learners</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center mb-5">
                Discover how our Al Quran learning platform has helped students around the world
                strengthen their connection with the Book of Allah. Real experiences from real learners
                who found peace, guidance, and confidence through our online Quran classes.
            </p>


            <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] mt-10 md:mt-0 relative bg-darkGray2 rounded-xl mx-auto p-0">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
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
                    {data.map((testimonial, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-gradient-to-tr from-black to-[#659a68] border-4 border-double border-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">

                                {/* Profile Image */}
                                <Image
                                    src={testimonial.profileImage}
                                    alt={testimonial.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full w-[100px] h-[100px] border-2 border-white mb-4 object-cover"
                                />

                                {/* Name and Country */}
                                <h3 className="text-2xl font-semibold text-white">{testimonial.name}</h3>
                                <p className="text-yellow-300 text-sm">{testimonial.country}</p>

                                {/* Star Rating */}
                                <div className="flex justify-center mt-2">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i}>
                                            {i < testimonial.rating ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.457a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.456a1 1 0 00-1.175 0l-3.38 2.456c-.785.57-1.84-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5 text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.457a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.456a1 1 0 00-1.175 0l-3.38 2.456c-.785.57-1.84-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.967z" />
                                                </svg>
                                            )}
                                        </span>
                                    ))}
                                </div>

                                {/* Message */}
                                <p className="text-white text-base mt-4 italic leading-relaxed">
                                    “{testimonial.message}”
                                </p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

        </div>
    )
}

export default ClassActivity
