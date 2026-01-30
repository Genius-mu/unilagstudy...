import { Link } from "react-router-dom";
import { Search, Upload } from "lucide-react";

const Hero = () => {
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
      <div className="relative z-10 pt-16 h-full text-white">
        {/* Hero content */}
        <div className="w-full flex h-[calc(100%-80px)] items-center justify-center">
          <div className="w-[90%] flex justify-between items-center">
            <div className="flex flex-col gap-y-3">
              <h2
                className="font-bold text-5xl max-w-[500px]"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                Your UNILAG Study Materials Hub
              </h2>
              <p
                className="text-[16px] max-w-[500px]"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                Access past questions, lecture notes, summaries and handouts —
                all verified and organized by department, course code & level.
              </p>
              <div className="flex w-fit justify-center gap-x-3 items-center">
                <Link
                  to="/"
                  className="text-[15px] py-3 px-7 rounded-2xl flex text-center items-center bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 gap-x-2 border-2 border-blue-600 hover:border-blue-700"
                >
                  <Search className="w-4 h-4" /> Start Searching
                </Link>
                <Link
                  to="/"
                  className="text-[15px] py-3 px-7 rounded-2xl flex text-center items-center bg-transparent border-2 border-white hover:scale-102 transition duration-300 gap-x-2 hover:border-blue-600"
                >
                  <Upload className="w-4 h-4" /> Upload & Earn Access
                </Link>
              </div>
            </div>
            <div className="w-fit h-fit">
                <img src="/svgs/svg2.svg" alt="" className="w-[24em] h-[24em]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
