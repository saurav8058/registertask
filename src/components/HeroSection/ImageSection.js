import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-white via-[rgba(255,240,220,0.67)] to-[rgba(237,246,255,0.7)] py-10 md:py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Google Rating */}
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-yellow-500 font-medium mb-4">
            <img
              src="/assets/star.png" // Ensure this is in the public folder
              alt="Google Rating"
              className="w-6 h-6"
            />
            <span>Google Rating</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
            Your trusted partner <br />
            for compliance business needs
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 mt-4">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various <span className="font-bold">registrations</span>,{" "}
            <span className="font-bold">tax filings</span>, and other{" "}
            <span className="font-bold">legal matters</span>.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6 justify-center lg:justify-start">
            {/* Customer Rating */}
            <div className="flex flex-col items-center space-y-2">
              <img
                src="/assets/Square.jpg"
                alt="Customer Rating"
                className="w-20 h-20 object-cover"
              />
              <span className="text-2xl font-bold">4.5+</span>
              <span className="text-gray-500">Customer Rating</span>
            </div>
            {/* Clients */}
            <div className="flex flex-col items-center space-y-2">
              <img
                src="/assets/midicon.jpg"
                alt="Clients"
                className="w-20 h-20 object-cover"
              />
              <span className="text-2xl font-bold">20,000+</span>
              <span className="text-gray-500">Clients</span>
            </div>
            {/* Financial Stability */}
            <div className="flex flex-col items-center space-y-2">
              <img
                src="/assets/hand.jpg"
                alt="Financial Stability"
                className="w-20 h-20 object-cover"
              />
              <span className="text-2xl font-bold">99.8%</span>
              <span className="text-gray-500">Financial Stability</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            <button className="bg-[#1C4670] text-white px-6 py-3 rounded font-medium hover:bg-[#e68a00]">
              Talk An Expert
            </button>
            <button className="text-[#282828] font-medium flex items-center space-x-2">
              <span>See how it works</span>
              <img
                src="/assets/play.png"
                alt="Play"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-full md:w-[485px] lg:w-[600px] xl:w-[700px]">
            <img
              src="/assets/hero.jpg" // Replace with your image in the public folder
              alt="Hero Illustration"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Floating Buttons */}
          <div className="absolute top-0 right-0 flex flex-col gap-4">
            <button className="bg-white shadow-lg px-6 py-2 rounded text-gray-800 hover:bg-gray-100">
              Annual Compliance
            </button>
            <button className="bg-white shadow-lg px-6 py-2 rounded text-gray-800 hover:bg-gray-100">
              Payroll Services
            </button>
            <button className="bg-white shadow-lg px-6 py-2 rounded text-gray-800 hover:bg-gray-100">
              Company Formation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
