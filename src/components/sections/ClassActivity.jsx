import Image from 'next/image'
import React from 'react'

function ClassActivity() {
    return (
        <div>
            <h1 className='my-15'>Creating Students success with our Al Quran</h1>

            <div className='flex flex-wrap bg-[red] rounded-[15px] p-5'>
                {[1, 2, 3, 4, 5, 6, 7].map((value, index) => {
                   return <div className='w-[240px] text-center p-3' key={index} >
                        <Image src={'/image.png'} className='m-auto' width={50} height={50} alt='Logo' />

                        <h2 className='text-white'>Online Learning Platform</h2>

                        <p className='text-white'>Following a student courses plan your teacher will guide  and help you learn faster and correctly. </p>
                    </div>
                })}

            </div>
        </div>
    )
}

export default ClassActivity
