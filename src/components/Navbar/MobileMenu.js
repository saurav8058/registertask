import Link from "next/link";

const MobileMenu = ({ isMobileMenuOpen }) => (
  isMobileMenuOpen && (
    <nav className="md:hidden bg-white shadow-md">
      <ul className="flex flex-col space-y-2 py-4 px-6">
        <li><Link href="/" className="block text-black font-medium hover:text-blue-600">Home</Link></li>
        <li><Link href="/service1" className="block text-black font-medium hover:text-blue-600">Service 1</Link></li>
        <li><Link href="/blog" className="block text-black font-medium hover:text-blue-600">Blog</Link></li>
        <li><Link href="/contact-us" className="block text-black font-medium hover:text-blue-600">Contact Us</Link></li>
        <li><Link href="/about-us" className="block text-black font-medium hover:text-blue-600">About Us</Link></li>
      </ul>
      <div className="px-6">
        <button className="w-full h-[46px] bg-[#FFA229] text-white font-medium rounded hover:bg-[#e68a00]">
          Talk An Expert
        </button>
      </div>
    </nav>
  )
);

export default MobileMenu;
