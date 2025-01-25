import React from "react";

const StepsComponent = () => {
  const steps = [
    { icon: "📄", label: "Fill up Application Form", bgColor: "bg-[#EB5757]" },
    { icon: "💳", label: "Make Online Payment", bgColor: "bg-[#27AE60]" },
    { icon: "⚙️", label: "Executive will Process Application", bgColor: "bg-[#F2994A]" },
    { icon: "📧", label: "Get Confirm Mail", bgColor: "bg-[#828282]" },
  ];

  return (
    <div className="bg-[#FFA229] p-6  shadow-md w-full">
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center space-x-4  px-4 py-2 "
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${step.bgColor}`}
            >
              <span className="text-2xl">{step.icon}</span>
            </div>
            <p className="text-base font-semibold text-gray-800">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsComponent;
