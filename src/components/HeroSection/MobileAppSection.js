import React from "react";

const MobileAppSection = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-4 h-81">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Manage Your Services by your Mobile Phone</h2>
          <p className="text-lg mb-6">
            Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="#" className="inline-block">
              <img
                src="/assets/Frame1.jpg"
                alt="Get it on App Store"
                className="h-12"
              />
            </a>
            <a href="#" className="inline-block">
              <img
                src="/assets/Frame2.jpg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative gap-2">
          {/* First Phone */}
          <div
            className="relative overflow-hidden w-[150px] lg:w-[200px]"
            style={{ height: "280px" }}
          >
            <img
              src="/assets/Phone.png"
              alt="Phone Left"
              className="absolute top-1/4 w-full"
              style={{ transform: "translateY(30%)" }}
            />
          </div>

          {/* Second Phone */}
          <div
            className="relative overflow-hidden w-[180px] lg:w-[250px]"
            style={{ height: "320px" }}
          >
            <img
              src="/assets/Phone.png"
              alt="Phone Right"
              className="absolute top-0 w-full"
              style={{ transform: "translateY(10%)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
