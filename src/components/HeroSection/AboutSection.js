import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        {/* Left Text Section */}
        <div>
          <p className="text-orange-500 uppercase text-xs sm:text-sm font-bold mb-2">
            Welcome to RegisterKaro.in
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            About <span className="text-orange-500">Register Karo</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            We have been using Intelegencia as our DevOps vendor for our field service
            applications over the last couple of years, and I’m extremely pleased with
            their performance, ability to execute, and willingness to adapt in our ever-changing
            environment.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Perry is an outstanding leader who is fanatical about customer satisfaction.
            He has built a solid team that consistently delivers on projects, exceeding
            expectations. I strongly recommend their services to any organization looking for
            reliable and predictable outcomes.
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-[#1C4670] text-sm font-medium hover:underline"
          >
            <span>Learn More</span>
            <img
              src="/assets/arrow.png"
              alt="Arrow"
              className="w-4 h-4"
            />
          </a>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="rounded-md overflow-hidden shadow-md">
            <Image
              src="/assets/Frame.png" // Replace with actual image path
              alt="Register Karo Team"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-md"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-20 sm:w-24 h-20 sm:h-24 bg-[#FFA229] rounded-full mix-blend-multiply">
            {/* Decorative Circle */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
