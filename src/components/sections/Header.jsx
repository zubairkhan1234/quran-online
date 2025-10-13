

'use client';
import Image from "next/image";
import Slider from "react-slick";
import "../../styles/header.module.css"
import quran from '../../../public/images/quran.webp'


function HeroSection() {

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
        slidesToShow: 1, // number of slides visible at once
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        
    };

    return (
        <>
            <section className="bg-darkGray1 text-white py-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">

                    {/* Left Content */}
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

                    {/* Right Card */}
                    <div className="md:w-1/2 mt-10 md:mt-0 relative bg-darkGray2 rounded-xl p-8 text-center">
                        <Slider {...settings}>
                            {courses.map((course, index) => (
                                <div key={index} className="p-4">
                                    <div className="bg-trasparent w-100 md:w-1.3/2 md:ml-auto borders border-4 border-double border-white-500 rounded-xl shadow-md p-6 text-center">
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
                        </Slider>
                    </div>
                </div>
            </section>





        </>
    );
}

export default HeroSection
