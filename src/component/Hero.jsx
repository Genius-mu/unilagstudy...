// import { Link } from "react-router-dom";
// import { Search, Upload } from "lucide-react";

// const Hero = ({ vid }) => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Video Background */}
//       <video
//         className="absolute inset-0 h-full w-full object-cover"
//         src={vid}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/80" />

//       {/* Content Layer */}
//       <div className="relative z-10 pt-16 h-full text-white">
//         {/* Hero content */}
//         <div className="w-full flex h-[calc(100%-80px)] items-center justify-center">
//           <div className="w-[90%] flex justify-between items-center">
//             <div className="flex flex-col gap-y-3">
//               <h2
//                 className="font-bold text-5xl max-w-[500px]"
//                 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
//               >
//                 Your UNILAG Study Materials Hub
//               </h2>
//               <p
//                 className="text-[16px] max-w-[500px]"
//                 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
//               >
//                 Access past questions, lecture notes, summaries and handouts —
//                 all verified and organized by department, course code & level.
//               </p>
//               <div className="flex w-fit justify-center gap-x-3 items-center">
//                 <Link
//                   to="/"
//                   className="text-[15px] py-3 px-7 rounded-2xl flex text-center items-center bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 gap-x-2 border-2 border-blue-600 hover:border-blue-700"
//                 >
//                   <Search className="w-4 h-4" /> Start Searching
//                 </Link>
//                 <Link
//                   to="/"
//                   className="text-[15px] py-3 px-7 rounded-2xl flex text-center items-center bg-transparent border-2 border-white hover:scale-102 transition duration-300 gap-x-2 hover:border-blue-600"
//                 >
//                   <Upload className="w-4 h-4" /> Upload & Earn Access
//                 </Link>
//               </div>
//             </div>
//             <div className="w-fit h-fit">
//               <img src="/svgs/svg2.svg" alt="" className="w-[24em] h-[24em]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import { Link } from "react-router-dom";
import { Search, Upload, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = ({ vid }) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

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

      {/* Dynamic Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-blue-900/60" />

      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-200" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full text-white">
        <div className="w-full flex h-full items-center justify-center px-4 md:px-8 lg:px-16">
          <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-y-6 max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 w-fit"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">UNILAG Students Platform</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                Your UNILAG Study Materials{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Hub
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-200 leading-relaxed"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                Access past questions, lecture notes, summaries and handouts —
                all verified and organized by department, course code & level.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              >
                <Link
                  to="/search"
                  className="group text-base py-4 px-8 rounded-full flex items-center bg-blue-600 hover:bg-blue-700 transition-all duration-300 gap-x-2 border-2 border-blue-600 hover:border-blue-500 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                >
                  <Search className="w-5 h-5" />
                  Start Searching
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/upload"
                  className="group text-base py-4 px-8 rounded-full flex items-center bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 gap-x-2 shadow-lg hover:scale-105"
                >
                  <Upload className="w-5 h-5" />
                  Upload & Earn Access
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex items-center gap-6 text-sm text-gray-300 mt-4"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="font-medium">1,200+ students</span>
                </div>
                <div className="h-4 w-px bg-gray-600" />
                <span>⭐ 4.5/5 rating</span>
              </motion.div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="hidden lg:block w-fit h-fit relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <img
                src="/svgs/svg2.svg"
                alt="Study illustration"
                className="w-[28em] h-[28em] relative z-10 drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;