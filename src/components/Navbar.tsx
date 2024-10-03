"use client";
import Image from 'next/image';
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <Image src="/logo.png" alt="logo" width={150} height={50} />
          {/* <span className="ml-3 text-3xl font-bold text-blue-500 tracking-wide">YourBrand</span> */}
        </a>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 items-center">
          <a href="/" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Home</a>
          <a href="/profile" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Company Profile</a>
          <a href="/products" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Our Products</a>
          <a href="/application" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Application</a>
          <a href="/videos" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Videos</a>
          <a href="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Contact Us</a>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col space-y-4 items-center mt-4 pb-4">
            <li><a href="/" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Home</a></li>
            <li><a href="/profile" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Company Profile</a></li>
            <li><a href="/products" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Our Products</a></li>
            <li><a href="/application" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Application</a></li>
            <li><a href="/videos" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Videos</a></li>
            <li><a href="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
