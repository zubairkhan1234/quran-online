import Image from 'next/image'
import React from 'react'
import Buttons from '../buttons/Buttons'

function Courses() {
    return (
        <div className=''>
            <h1 className='my-15'>Featured Courses</h1>
            <div className='flex justify-between flex-wrap'>
                {[1, 2, 4, 5, 6, 7,8,8,9,0].map((value, index) => {
                    return <div className='border-1 w-[300px] rounded-[10px] m-[10px]' key={index + 22}>
                        <div className='p-3'>
                            <Image src={'/image.png'} width={100} height={150} alt='logo1' />
                            <h3>Reading Quran Basic </h3>
                            <div>
                                <div>
                                    <p>Duration</p>
                                    <p>Live Classes</p>
                                </div>
                                <div>
                                    <p>Level</p>
                                    <p>Beginner</p>
                                </div>
                            </div>
                            <div className='flex justify-around'>
                                <Buttons fill={true} className={`{bg-[${'#659a68'}]}`}>
                                    Regitster Now
                                </Buttons>
                                <Buttons>
                                    See Details
                                </Buttons>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Courses
