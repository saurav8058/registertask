const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* First Row: Text */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-orange-600">
            WHY REGISTERKARO.IN
          </h2>
          <h3 className="text-3xl font-bold mt-2 mb-6">
            Why Choose Register Karo
          </h3>
          <p className="text-gray-600">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>

        {/* Second Row: Two Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
            <div className="text-4xl text-orange-500">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4 className="font-semibold text-lg mt-4 mb-2">
              Confidential & Safe
            </h4>
            <p className="text-gray-600 text-center">
              All your private information is safe with us.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
            <div className="text-4xl text-green-500">
              <i className="fas fa-check-circle"></i>
            </div>
            <h4 className="font-semibold text-lg mt-4 mb-2">No Hidden Fee</h4>
            <p className="text-gray-600 text-center">
              Everything is put before you with no hidden charges or conditions.
            </p>
          </div>
        </div>

        {/* Third Row: Three Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
            <div className="text-4xl text-blue-500">
              <i className="fas fa-smile"></i>
            </div>
            <h4 className="font-semibold text-lg mt-4 mb-2">
              Guaranteed Satisfaction
            </h4>
            <p className="text-gray-600 text-center">
              We ensure that you stay 100% satisfied with our offered services.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
            <div className="text-4xl text-pink-500">
              <i className="fas fa-user-tie"></i>
            </div>
            <h4 className="font-semibold text-lg mt-4 mb-2">
              Expert CA/CS Assistance
            </h4>
            <p className="text-gray-600 text-center">
              Prompt support from our in-house expert professionals.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
            <div className="text-4xl text-orange-500">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h4 className="font-semibold text-lg mt-4 mb-2">
              Confidential & Safe
            </h4>
            <p className="text-gray-600 text-center">
              All your private information is safe with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
