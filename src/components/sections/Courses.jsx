'use client';
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import quran from '../../../public/images/quran.webp';
function Courses() {
    const courses = [
        { title: "Reading Quran Basics", price: "$99.00", image: quran },
        { title: "Quran & Tajweed", price: "$35.00", image: quran },
        { title: "Quran Recitation", price: "$70.00", image: quran },
        { title: "Quran Memorization", price: "$120.00", image: quran },
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // number of slides visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, // for tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // for mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (

        <section className="bg-softGray py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-darkGray1 text-center mb-10">
                    Explore Featured <span className="text-green">Courses</span>
                </h2>
                <div className='explore-courses'>
                    <Slider {...settings}>
                        {courses.map((course, index) => (
                            <div key={index} className="p-4">
                                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        width={180}
                                        height={140}
                                        className="mx-auto rounded-md"
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
        
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Courses
