import Header from "../component/Header";

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/vid3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content Layer */}
      <div className="relative z-10 h-full text-white">
        {/* Header now sits on the video */}
        {/* <Header /> */}

        {/* Hero content */}
        <div className="flex h-[calc(100%-80px)] items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Build Stunning Websites
            </h1>
            <p className="text-lg md:text-xl mb-6">
              React + Tailwind done right
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
