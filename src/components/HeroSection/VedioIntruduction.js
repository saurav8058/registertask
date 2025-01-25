const VideoIntroduction = () => {
  return (
    <section className="py-12 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Video Introductions</h2>
          <p className="text-gray-300 mb-8">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt quis dui.
          </p>
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full flex items-center justify-center w-14 h-14">
                <i className="fas fa-lightbulb text-yellow-400 text-2xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Explore ideas together</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full flex items-center justify-center w-14 h-14">
                <i className="fas fa-cogs text-yellow-400 text-2xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Bring those ideas to life</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="md:w-1/2">
          <div className="relative">
            <img
              src="/assets/Vedio.png"
              alt="Video Thumbnail"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroduction;
