const HappyClients = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-4">
          Our Happy Clients
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Professionally cultivate one-to-one customer service with robust ideas.
          Dynamically innovate resource-leveling customer service for state of
          the art customer service.
        </p>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <img src="/assets/coinbase.png" alt="Coinbase" className="w-[120px] md:w-[150px] h-auto object-contain" />
          <img src="/assets/spotify.png" alt="Spotify" className="w-[120px] md:w-[150px] h-auto object-contain" />
          <img src="/assets/slack.png" alt="Slack" className="w-[120px] md:w-[150px] h-auto object-contain" />
          <img src="/assets/dropbox.png" alt="Dropbox" className="w-[120px] md:w-[150px] h-auto object-contain" />
          <img src="/assets/webflow.png" alt="Webflow" className="w-[120px] md:w-[150px] h-auto object-contain" />
          <img src="/assets/zoom.png" alt="Zoom" className="w-[120px] md:w-[150px] h-auto object-contain" />
        </div>

        {/* Show More Button */}
        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
            Show more <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
