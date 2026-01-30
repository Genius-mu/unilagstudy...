import { useState } from "react";
import { Search, Filter } from "lucide-react";

const Hero2 = ({ vid }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={vid}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content Layer */}
      <div className="relative flex justify-center items-center z-10 pt-16 h-full text-white">
        {/* Hero2 content */}
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col gap-y-6">
          <h1 className="font-bold text-4xl md:text-5xl text-white text-center">
            Find Your Study Materials
          </h1>
          <p className="text-white text-center text-lg">
            Search through thousands of verified past questions and study
            materials
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-[700px] mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for courses, materials, departments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-12 pr-4 rounded-2xl shadow-xl border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Filter Toggle Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-x-2 bg-white text-blue-700 py-3 px-6 rounded-2xl shadow-lg hover:bg-blue-50 transition duration-300"
            >
              <Filter size={20} />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
