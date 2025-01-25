import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Chris",
      role: "President and CEO, Printotech, USA",
      image: "/path-to-image1.jpg",
      rating: 4.5,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      name: "Taylor",
      role: "CTO, TechCorp, Canada",
      image: "/path-to-image2.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Jordan",
      role: "Manager, Innovate Ltd, UK",
      image: "/path-to-image3.jpg",
      rating: 3.5,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      name: "Sam",
      role: "Founder, Visionary Group, India",
      image: "/path-to-image4.jpg",
      rating: 4,
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      name: "Alex",
      role: "Designer, Creative Minds, Australia",
      image: "/path-to-image5.jpg",
      rating: 2.5,
      text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }).map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-500 text-lg">
            &#9733;
          </span>
        ))}
        {hasHalfStar && (
          <span className="text-yellow-500 text-lg">&#x272E;</span>
        )}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300 text-lg">
            &#9734;
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="relative bg-blue-900 py-16">
      <div className="text-center mb-10">
        <h2 className="text-white text-2xl font-bold">
          What People Say About Us
        </h2>
      </div>
      
      {/* Swiper carousel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination]}
        className="px-6"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700 text-sm mb-4 italic">
                {testimonial.text}
              </p>
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Buttons at the bottom center */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        <button
          className="swiper-button-prev bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-600"
          aria-label="Previous"
        >
          &#10094;
        </button>
        <button
          className="swiper-button-next bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-600"
          aria-label="Next"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
