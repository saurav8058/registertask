import React from "react";

const FAQ = () => {
  const faqs = [
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* FAQ Header */}
        <h1
          className="text-center"
          style={{
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "21px",
            letterSpacing: "1.5px",
            color: "#EB8D15",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            textDecoration: "underline",
          }}
        >
          FAQ
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 py-4 border-b">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4 px-4 py-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative border-b last:border-none flex items-center"
              style={{
                fontFamily: "Inter",
              }}
            >
              {/* Left Border with Linear Gradient */}
              <div
                className="absolute"
                style={{
                  width: "10px",
                  height: "48px",
                  top: "1px",
                  left: "-4px",
                  background: "linear-gradient(180deg, #FFA229 0%, #1C4670 84.9%)",
                  opacity: 0.8,
                }}
              ></div>

              {/* FAQ Content */}
              <button className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-100 flex justify-between items-center pl-6">
                <span>{faq}</span>
                <span className="text-gray-400">&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <div className="w-full max-w-3xl mt-4">
        <button className="w-full flex justify-center items-center py-3 text-blue-500 hover:underline text-center">
          <span>Show more</span>
          <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
