'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Buttons from '../buttons/Buttons'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  // ✅ Single source of menu links
  const menuItems = ['Home', 'Courses', 'Learning Styles', 'Blog', 'About Us']

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md relative header-dark">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image src="/logo.png" width={80} height={20} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-6 text-light-creeme font-medium">
          {menuItems.map((item, i) => (
            <li key={i} className="hover:text-[#659a68] cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        <div className="ms-8 flex gap-2">
          <Buttons fill={true}>Sign In</Buttons>
          <Buttons>Sign Up</Buttons>
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <FaTimes
            size={24}
            onClick={toggleMenu}
            className="cursor-pointer text-gray-800"
          />
        ) : (
          <FaBars
            size={24}
            onClick={toggleMenu}
            className="cursor-pointer text-white"
          />
        )}
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <Image src="/logo.png" width={80} height={20} alt="Logo" />
          <FaTimes
            size={20}
            onClick={toggleMenu}
            className="cursor-pointer text-gray-800"
          />
        </div>

        <ul className="flex flex-col space-y-6 mt-6 px-6 text-gray-800 font-medium">
          {menuItems.map((item, i) => (
            <li key={i} className="hover:text-[#659a68] cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 px-6 flex flex-col gap-3">
          <Buttons fill={true}>Sign In</Buttons>
          <Buttons>Sign Up</Buttons>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  )
}

export default Navigation


