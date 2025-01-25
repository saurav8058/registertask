import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#011B5B] text-[#AAB5CD] font-inter py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="mb-4">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>
          <div className="flex justify-center md:justify-start gap-4 text-white">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="#" aria-label="Google">
              <i className="fab fa-google text-lg"></i>
            </a>
            <a href="#" aria-label="Apple">
              <i className="fab fa-apple text-lg"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-lg"></i>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full">
          <div className="flex flex-wrap justify-center md:justify-between gap-8">
            {/* Inline Headings */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-[#FFA229] font-inter">Start a Business</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Solutions</a></li>
                <li><a href="#" className="hover:underline">Integrations</a></li>
                <li><a href="#" className="hover:underline">Enterprise</a></li>
                <li><a href="#" className="hover:underline"> Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-[#FFA229]">Government Registration</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Partners</a></li>
                <li><a href="#" className="hover:underline">Community</a></li>
                <li><a href="#" className="hover:underline">Developers</a></li>
                <li><a href="#" className="hover:underline">App</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-[#FFA229]">Compliance & Tax</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Channels</a></li>
                <li><a href="#" className="hover:underline">Scale</a></li>
                <li><a href="#" className="hover:underline">Watch the Demo</a></li>
                <li><a href="#" className="hover:underline">Our Competition</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-[#FFA229]">BIS & CDSCO</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">News</a></li>
                <li><a href="#" className="hover:underline">Leadership</a></li>
                <li><a href="#" className="hover:underline">Media Kit</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#FFA229] text-[#FFF] w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-yellow-300 transition"
          aria-label="Back to Top"
        >
          ↑
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} RegisterKaro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
