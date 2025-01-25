import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <p className="text-[#EB8D15]  text-center uppercase text-sm font-bold mb-6">
            Welcome to RegisterKaro.in
          </p>
      <h2 className="text-3xl font-bold text-center mb-12">Explore Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Company Formation */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/assets/Linkvector.svg.png"
              className="w-12 h-12 text-orange-500"
            
            >
              
            </img>
          </div>
          <h3 className="text-xl text-center font-bold mb-2">Company Formation</h3>
          <p className="text-gray-600 text-center">
            Build web-based solutions that enhance customer experience.
          </p>
          <div className="flex items-center justify-center mt-8">
  <a
    href="#"
    className="inline-flex items-center space-x-2 text-[#001038] hover:underline"
  >
    <span>Learn More</span>
    <img
      src="/assets/Arrow.png" 
      alt="Arrow"
      className="w-4 h-4"
    />
  </a>
</div>
        </div>

        {/* Company Secretarial Services */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
          <img
              src="/assets/Linkvector-1.svg.png"
              className="w-12 h-12 text-orange-500"
            
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Company Secretarial Services</h3>
          <p className="text-gray-600 text-center">
            Make data-driven decisions and utilize technology to reach business goals.
          </p>
          <div className="flex items-center justify-center mt-8">
  <a
    href="#"
    className="inline-flex items-center space-x-2 text-[#001038] hover:underline"
  >
    <span>Learn More</span>
    <img
      src="/assets/Arrow.png" 
      alt="Arrow"
      className="w-4 h-4"
    />
  </a>
</div>
        </div>

        {/* Virtual Office Address */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
          <img
              src="/assets/Linkvector-2.svg.png"
              className="w-12 h-12 text-orange-500"
            
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Virtual Office Address</h3>
          <p className="text-gray-600 text-center">
            Foster customer relationships by effectively serving your market.
          </p>
          <div className="flex items-center justify-center mt-8">
  <a
    href="#"
    className="inline-flex items-center space-x-2 text-[#001038] hover:underline"
  >
    <span>Learn More</span>
    <img
      src="/assets/Arrow.png" 
      alt="Arrow"
      className="w-4 h-4"
    />
  </a>
</div>
        </div>

        {/* Annual Compliance Services */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
          <img
              src="/assets/Linkvector-3.svg.png"
              className="w-12 h-12 text-orange-500"
            
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Annual Compliance Services</h3>
          <p className="text-gray-600 text-center">
            Turn your ideas into modern products with our design experts.
          </p>
          <div className="flex items-center justify-center mt-8">
  <a
    href="#"
    className="inline-flex items-center space-x-2 text-[#001038] hover:underline"
  >
    <span>Learn More</span>
    <img
      src="/assets/arrow.png" 
      alt="Arrow"
      className="w-4 h-4"
    />
  </a>
</div>
        </div>

        {/* Payroll Services */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
          <img
              src="/assets/Linkvector-4.svg.png"
              className="w-12 h-12 text-orange-500"
            
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Payroll Services</h3>
          <p className="text-gray-600 text-center">
            Expand your business across the globe with minimal effort.
          </p>
          <div className="flex items-center justify-center mt-8">
  <a
    href="#"
    className="inline-flex items-center space-x-2 text-[#001038] hover:underline"
  >
    <span>Learn More</span>
    <img
      src="/assets/Arrow.png" 
      alt="Arrow"
      className="w-4 h-4"
    />
  </a>
</div>
        </div>

        {/* Bookkeeping Services */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
          <img
              src="/assets/Linkvector-5.svg.png"
              className="w-12 h-12 text-orange-500"
            
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Bookkeeping Services</h3>
          <p className="text-gray-600 text-center">
            Steering user behaviours with creative design, data insights & technology.
          </p>
          <div className="flex items-center justify-center mt-8">
  <a
    href="#"
    className="inline-flex items-center space-x-2 text-[#001038] hover:underline"
  >
    <span>Learn More</span>
    <img
      src="/assets/Arrow.png" 
      alt="Arrow"
      className="w-4 h-4"
    />
  </a>
</div>


        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="#"
          className=" font-inter text-[16px] px-6 py-3 rounded-md text-center bg-[#1C4670] text-white hover:bg-blue-600 text-lg"
        >
          See All Services
        </a>
      </div>
    </div>
  );
};

export default Services;
