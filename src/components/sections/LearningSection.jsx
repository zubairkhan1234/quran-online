'use client';

import React from "react";
import Image from "next/image";
import quranImage from '../../../public/images/quraninmobile.webp';
export default function LearningSection() {
  return (
    <section className="bg-[#f6f4f0] ">
      <div className="container mx-auto px-5 md:px-10 ld:px-0 py-5 md:py-10 ">
        {/* First Row */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
          {/* Left Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Easy Quran learning through{" "}
              <span className="text-[#659a68]">online</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Online Quran learning gives you the convenience of learning Quran
              lessons at your own time and place. This is an important opportunity
              for religious education that can be easily pursued.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              Learn for All Levels
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src={quranImage}
              alt="Quran app on phone"
              width={450}
              height={300}
              className="rounded-xl shadow-lg w-full h-auto md:h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className=" flex flex-col-reverse lg:flex-row gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center w-full">
            <Image
              src={quranImage}
              alt="Reading Quran"
              width={450}
              height={300}
              className="rounded-xl shadow-lg w-full h-auto md:h-[350px] object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="w-full pt-5 md:pt-10 lg:pt-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to memorize Quran{" "}
              <span className="text-[#659a68]">easily online</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Memorizing the Quran is a noble and rewarding endeavor. With the
              advent of online resources, it’s become more accessible than ever.
            </p>

            <ul className="grid grid-cols-2 gap-2 mb-6 text-gray-700 text-sm">
              <li>Set Your Intention</li>
              <li>Listen and Repeat</li>
              <li>Break it Down</li>
              <li>Create a Dedicated Space</li>
              <li>Schedule Memorization Sessions</li>
              <li>Choose a Specific Surah</li>
            </ul>

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              Learn for All Levels
            </button>
          </div>
        </div>
      </div>
    </section>

  );
}
