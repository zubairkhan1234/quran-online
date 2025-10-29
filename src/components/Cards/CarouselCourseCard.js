import Image from 'next/image'
import React from 'react'

import { FiBarChart } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";

const CarouselCourseCard = ({ item }) => {
    return (
        <div className=' bg-white rounded-2xl  w-full py-5 px-3'>
            {/* image wrapper  */}
            <div >
                <Image
                    src={item.image}
                    height={100}
                    width={200}
                    alt={item.title}
                    className=' block m-auto rounded-md'
                />
            </div>
            {/* details wrapper */}

            <div>
                <h3 className=' py-2 text-xl font-bold'>
                    {item.title}
                </h3>
                <h4 className=' text-lg font-semibold text-[#659a68]'>
                    {item.price}
                </h4>
                {/* this is  the duration level box  */}
                <div className=" grid grid-cols-2 my-3 border border-black py-2 px-4 rounded-md">
                    {/* duration column  */}
                    <div className="flex items-center gap-x-1">
                        <div>
                            <IoMdTime className="inline-block mr-2 text-xl text-green" />
                        </div>
                        <div>
                            <p className=" text-[11px]">Duration</p>
                            <p className="  text-[#659a68]">Beginner</p>
                        </div>
                    </div>
                    {/* Level column  */}
                    <div className="flex items-center gap-x-1 justify-end my-[2px] border-l border-black">
                        <div>
                            <FiBarChart className="inline-block mr-2 text-xl text-green" />
                        </div>
                        <div>
                            <p className=" text-[11px]">Level</p>
                            <p className="  text-[#659a68]">Beginner</p>
                        </div>
                    </div>


                </div>
                {/* buttons row  */}
                <div className=' flex justify-between'>
                    <button className=' py-2 px-4 rounded-full text-white bg-black w-[47%]'>Register</button>
                    <button className=' py-2 px-4 rounded-full text-black border border-black w-[47%]'>See Details</button>
                </div>
            </div>
        </div>
    )
}

export default CarouselCourseCard