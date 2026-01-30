import { motion } from "framer-motion";

const Hero3 = ({ vid }) => {
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
        {/* Hero3 content */}
        <div className="w-[90%] max-w-[1000px] mx-auto flex flex-col gap-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-4">
              Get Started Today
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-[700px] mx-auto">
              Join thousands of students accessing verified study materials and
              past questions
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
