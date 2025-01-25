import React from 'react';

const CompanyLogos = () => {
  return (
    <div
      className="w-full max-w-[1440px] mx-auto p-6 sm:p-8 md:p-16 flex flex-wrap items-center justify-center gap-8 bg-[#f5f5f5] rounded-tl-[20px] opacity-100"
    >
      {[
        '/assets/coinbase.png',
        '/assets/spotify.png',
        '/assets/slack.png',
        '/assets/dropbox.png',
        '/assets/webflow.png',
        '/assets/zoom.png',
      ].map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Logo ${index + 1}`}
          className="w-[100px] h-[36px] sm:w-[120px] sm:h-[42px] md:w-[140px] md:h-[48px] object-contain transition-transform hover:scale-110"
        />
      ))}
    </div>
  );
};

export default CompanyLogos;
