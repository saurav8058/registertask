import React from "react";

const NumbersSection = () => {
  const stats = [
    { number: "1M", label: "CUSTOMERS", gradient: "from-[#FFA229] to-[#2F5795]" },
    { number: "12M", label: "YEARS OF EXCELLENCE", gradient: "from-[#F53843] to-[#2F5795]" },
    { number: "41M", label: "RAD ENGINEERS", gradient: "from-[#FFA229] to-[#2F5795]" },
    { number: "78M", label: "COUNTRIES", gradient: "from-[#FFA229] to-[#2F5795]" },
    { number: "3287M", label: "PARTNERS", gradient: "from-[#FFA229] to-[#2F5795]" },
    { number: "41M", label: "AWARDS RECEIVED", gradient: "from-[#FFA229] to-[#2F5795]" },
  ];

  return (
    <div className="bg-white py-6 px-4">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <p className="text-sm font-medium text-yellow-500 uppercase mb-2">
          Why Register Karo
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-10">
          Some Numbers are important
        </h2>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative text-center flex flex-col items-center mx-4">
              {/* Plus icon, tightly positioned to the top-right of the number */}
              <span
                className="absolute top-5 right-1 text-3xl font-bold text-[#181617]"
                style={{
                  transform: "translate(50%, -50%)",
                  fontSize: "1.5rem", 
                  
                }}
              >
                +
              </span>

              {/* Number with gradient */}
              <p
                className={`text-3xl font-bold text-transparent ${stat.gradient ? `bg-gradient-to-b ${stat.gradient}` : 'bg-gradient-to-b from-[#F53843] to-[#2F5795]'} `}
                style={{
                  backgroundClip: "text",
                  fontFamily: "Montserrat",
                  fontSize: "42px",
                  fontWeight: "800",
                  lineHeight: "63px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {stat.number}
              </p>
              {/* Label with bold text and color #181617 */}
              <p className="text-sm font-bold text-[#181617]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
