import Image from 'next/image'
import React from 'react'
import Buttons from '../buttons/Buttons'

function Navigation() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md header-dark">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image src="/logo.png" width={80} height={20} alt="Logo34" />
      </div>

      {/* Links + Buttons */}
      <div className="flex items-center  space-x-8">
        <ul className="flex space-x-6 text-light-creeme font-medium">
          <li className="hover:text-[#659a68] cursor-pointer">Home</li>
          <li className="hover:text-[#659a68] cursor-pointer">Courses</li>
          <li className="hover:text-[#659a68] cursor-pointer">Learning Styles</li>
          <li className="hover:text-[#659a68] cursor-pointer">Blog</li>
          <li className="hover:text-[#659a68] cursor-pointer">About Us</li>
        </ul>

        {/* Call-to-Action Button */}
        <div className='ms-8'>
          <Buttons fill={true} > 
            Sign In
          </Buttons>
          <Buttons >
            Sign Up
          </Buttons>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

