import { useState } from "react";
import Link from "next/link";

// DesktopMenu Component
const DesktopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="hidden md:flex items-center space-x-6 mr-10">
      {/* Home Link */}
      <Link href="/" className="text-black font-medium hover:text-blue-600">
        Home
      </Link>
      
      {/* Our Services Dropdown */}
      <div className="relative">
        <button
          className="text-black font-medium hover:text-blue-600 flex items-center"
          onClick={toggleDropdown}
        >
          Our Services
          <img 
            src="/assets/Angle.jpg" 
            alt="Angle Down"
            className="w-[10px] h-[6px] ml-2"
          />
        </button>

        {/* Dropdown Menu (visible when isOpen is true) */}
        {isOpen && (
          <div className="absolute bg-white shadow-md rounded mt-2 w-48">
            <Link href="/service1" className="block px-4 py-2 hover:bg-gray-100">Service 1</Link>
            <Link href="/service2" className="block px-4 py-2 hover:bg-gray-100">Service 2</Link>
            <Link href="/service3" className="block px-4 py-2 hover:bg-gray-100">Service 3</Link>
          </div>
        )}
      </div>

      {/* Blog Link */}
      <Link href="/blog" className="text-black font-medium hover:text-blue-600">Blog</Link>

      {/* Contact Us Link */}
      <Link href="/contact-us" className="text-black font-medium hover:text-blue-600">Contact Us</Link>

      {/* About Us Link */}
      <Link href="/about-us" className="text-black font-medium hover:text-blue-600">About Us</Link>

      {/* Search Button */}
      <SearchButton />

      {/* Talk to Expert Button */}
      <TalkToExpertButton />
    </nav>
  );
};

// SearchButton Component
const SearchButton = () => (
  <button className="w-6 h-6 flex items-center justify-center relative">
    <img
      src="/assets/search.jpg" 
      alt="Search"
      className="w-6 h-6"
    />
  </button>
);

// TalkToExpertButton Component
const TalkToExpertButton = () => (
  <button className="w-[157px] h-[46px] bg-[#FFA229] text-white font-medium rounded hover:bg-[#e68a00]">
    Talk An Expert
  </button>
);

export default DesktopMenu;
