import React, { useState } from 'react';

const Navbar = () => {
  // State to control the mobile menu and dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-white font-bold text-lg">Logo</a>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <div className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Home</a>
          <a href="#" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">About</a>

          {/* Services Dropdown */}
          <div 
            className="relative group" 
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-white hover:bg-blue-500 px-3 py-2 rounded-md flex items-center">
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Web Design</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">SEO</a>

                {/* Submenu for Mobile Apps */}
                <div 
                  className="relative group" 
                  onMouseEnter={() => setIsSubDropdownOpen(true)}
                  onMouseLeave={() => setIsSubDropdownOpen(false)}
                >
                  <button className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                    Mobile Apps
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  {/* Submenu Items */}
                  {isSubDropdownOpen && (
                    <div className="absolute left-full top-0 mt-2 bg-white rounded-md shadow-lg">
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">iOS Apps</a>
                      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Android Apps</a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <a href="#" className="text-white hover:bg-blue-500 px-3 py-2 rounded-md">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
