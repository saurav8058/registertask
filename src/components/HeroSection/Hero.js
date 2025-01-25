import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFA229] to-[#1C4670] min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center space-y-8 md:space-y-16 px-4 sm:px-6 lg:px-12">
        {/* Top Text */}
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-6">
          1% OF THE INDUSTRY
        </h2>

        {/* Main Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
          Welcome to your new digital reality. Now.
        </h1>

        {/* Search Box and Submit Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-10 space-y-4 sm:space-y-0 max-w-4xl mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full sm:w-[calc(100%-120px)] px-4 py-3 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-base sm:text-lg"
          />
          <button
            className="bg-[#FFA229] hover:bg-orange-700 text-white font-bold py-3 px-4 sm:ml-4 mt-4 sm:mt-0 rounded-md w-full sm:w-auto text-base sm:text-lg"
          >
            Submit
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white text-lg sm:text-xl font-medium">Instant results</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white text-lg sm:text-xl font-medium">User-friendly interface</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white text-lg sm:text-xl font-medium">Personalized customization</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
