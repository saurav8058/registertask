import React from "react";

const Partners = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-lg md:text-xl font-medium  text-[#272D37] mb-8">
          Trusted By Over 100+ Startups and Freelance Businesses
        </h2>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          <img
            src="/assets/Oracle.png" // Replace with your actual Oracle logo
            alt="Oracle"
            className="max-w-[100px] mx-auto"
          />
          <img
            src="/assets/Morphesus.png" // Replace with your actual Morpheus logo
            alt="Morpheus"
            className="max-w-[100px] mx-auto"
          />
           <img
            src="/assets/Morphesus.png" // Replace with your actual Morpheus logo
            alt="Morpheus"
            className="max-w-[100px] mx-auto"
          />
          <img
            src="/assets/Samsung.png" // Replace with your actual Samsung logo
            alt="Samsung"
            className="max-w-[100px] mx-auto"
          />
          <img
            src="/assets/Monday.png" // Replace with your actual Monday.com logo
            alt="Monday.com"
            className="max-w-[100px] mx-auto"
          />
          <img
            src="/assets/Segment.png" // Replace with your actual Segment logo
            alt="Segment"
            className="max-w-[100px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
