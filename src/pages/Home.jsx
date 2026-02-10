// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Award,
//   Book,
//   Clock,
//   Search,
//   Star,
//   Users,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import Hero from "../component/Hero";

// const Home = () => {
//   return (
//     <>
//       <div>
//         <Hero vid={"/videos/vid3.mp4"} />
//         <section
//           className="flex justify-center py-20 items-center w-full"
//           style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
//         >
//           <div className="w-[90%] h-fit grid gap-4 grid-cols-1 sm:grid-cols-2 grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
//             {[
//               { icon: <Book />, h2Val: "5,000+", pVal: "Study Materials" },
//               { icon: <Users />, h2Val: "1,200+", pVal: "Active Students" },
//               { icon: <Award />, h2Val: "120+", pVal: "courses Covered" },
//               { icon: <Star />, h2Val: "4.5/5", pVal: "User Rating" },
//             ].map((stat, i) => (
//               <>
//                 <div className="flex hover:-translate-y-3 transition duration-200 justify-center items-center flex-col gap-y-2 shadow-xl bg-white rounded-xl w-full h-[10em]">
//                   <span className="bg-blue-500/30 p-3 rounded-2xl text-blue-600">
//                     {stat.icon}
//                   </span>
//                   <h2 className="font-bold text-2xl text-blue-700">
//                     {stat.h2Val}
//                   </h2>
//                   <h3 className="font-medium">{stat.pVal}</h3>
//                 </div>
//               </>
//             ))}
//           </div>
//         </section>
//         <section className="flex justify-center py-20 items-center w-full">
//           <div className="w-[90%] h-fit flex flex-col gap-y-10">
//             <div className="flex flex-col gap-y-5 justify-center items-center">
//               <h2
//                 className="font-bold text-4xl"
//                 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
//               >
//                 Why Students Choose Us
//               </h2>
//               <p
//                 className="font-medium text-[16px] text-center text-black/40"
//                 style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
//               >
//                 Everything you need to excel in your studies, all in one
//                 platform
//               </p>
//             </div>
//             <div className="h-fit grid gap-4 grid-cols-1 sm:grid-cols-2 grid-rows-2 md:grid-cols-3 xl:grid-rows-1">
//               {[
//                 { icon: <Search />, h2Val: "5,000+", pVal: "Study Materials" },
//                 { icon: <Award />, h2Val: "1,200+", pVal: "Active Students" },
//                 { icon: <Clock />, h2Val: "120+", pVal: "courses Covered" },
//               ].map((about, i) => (
//                 <>
//                   <div className="flex hover:-translate-y-3 transition duration-300 hover:scale-102 justify-center items-center flex-col gap-y-2 shadow-xl bg-white rounded-xl w-full h-[10em]">
//                     <span
//                       className="bg-green-500/30 p-3 rounded-2xl text-green-600"
//                       style={{
//                         fontFamily: '"Bricolage Grotesque", sans-serif',
//                       }}
//                     >
//                       {about.icon}
//                     </span>
//                     <h2
//                       className="font-bold text-2xl text-blue-700"
//                       style={{
//                         fontFamily: '"Bricolage Grotesque", sans-serif',
//                       }}
//                     >
//                       {about.h2Val}
//                     </h2>
//                     <h3 className="font-medium">{about.pVal}</h3>
//                   </div>
//                 </>
//               ))}
//             </div>
//           </div>
//         </section>
//         <section
//           className="flex justify-center pb-30 items-center w-full"
//           style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
//         >
//           <div className="w-[90%] flex flex-col justify-center items-center gap-y-9">
//             <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
//               {[
//                 { name: "Computer Science", icon: "💻" },
//                 { name: "Psysics", icon: "🧠" },
//                 { name: "Mass Communication", icon: "📺" },
//                 { name: "Business Admin", icon: "💼" },
//                 { name: "Accounting", icon: "📊" },
//                 { name: "Economics", icon: "📈" },
//                 { name: "Electrical Engineering", icon: "⚡" },
//                 { name: "Medicine", icon: "🩺" },
//                 { name: "Pharmacy", icon: "💊" },
//                 { name: "Law", icon: "⚖️" },
//                 { name: "System Engineering", icon: "🧠" },
//                 { name: "Psychology", icon: "🧠" },
//               ].map((dept, i) => (
//                 <motion.a
//                   key={dept.name}
//                   href={`/search?department=${encodeURIComponent(dept.name)}`}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.05 }}
//                   className="group bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300 border border-gray-100 cursor-pointer"
//                 >
//                   <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
//                     {dept.icon}
//                   </div>
//                   <div className="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
//                     {dept.name}
//                   </div>
//                 </motion.a>
//               ))}
//             </div>
//             <Link
//               to="/"
//               className="group flex items-center justify-center gap-x-1 transition-all duration-300 hover:pr-1 hover:text-blue-600"
//             >
//               View all Departments
//               <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:text-blue-600">
//                 <ArrowRight />
//               </span>
//             </Link>
//           </div>
//         </section>
//         <section className="w-full flex justify-center items-center h-fit py-20 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800">
//           <div className="w-[90%] flex justify-center items-center flex-col gap-y-6">
//             <h2 className="font-bold text-4xl text-white text-shadow-2xs text-center">
//               Never Beg for Past Questions Again
//             </h2>
//             <p className="text-white text-[16px] font-medium max-w-[500px] text-center">
//               Join over 1,200 students who access verified study materials
//               anytime, anywhere — and help your fellow students by sharing
//               yours.
//             </p>
//             <div className="flex justify-center items-center w-full gap-3">
//               <Link
//                 to=""
//                 className="text-black bg-white hover:text-white hover:bg-transparent py-3 px-6 rounded-2xl border-2 shadow-xl border-white transition duration-300"
//               >
//                 Browse Materials Now
//               </Link>
//               <Link
//                 to=""
//                 className="hover:text-black hover:bg-white text-white bg-transparent  py-3 px-6 rounded-2xl border-2 shadow-xl border-white transition duration-300"
//               >
//                 Browse Materials Now
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Home;



import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Book,
  Clock,
  Search,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";

const Home = () => {
  const stats = [
    { icon: Book, h2Val: "5,000+", pVal: "Study Materials" },
    { icon: Users, h2Val: "1,200+", pVal: "Active Students" },
    { icon: Award, h2Val: "120+", pVal: "Courses Covered" },
    { icon: Star, h2Val: "4.5/5", pVal: "User Rating" },
  ];

  const features = [
    {
      icon: Search,
      h2Val: "Smart Search",
      pVal: "Find any material instantly with our intelligent search system",
    },
    {
      icon: Clock,
      h2Val: "24/7 Access",
      pVal: "Study materials available anytime, anywhere on any device",
    },
    {
      icon: Award,
      h2Val: "Verified Content",
      pVal: "All materials reviewed and verified by top students and faculty",
    },
  ];

  const departments = [
    { name: "Computer Science", icon: "💻", gradient: "from-blue-500 to-cyan-500" },
    { name: "Physics", icon: "🧠", gradient: "from-purple-500 to-pink-500" },
    { name: "Mass Communication", icon: "📺", gradient: "from-orange-500 to-red-500" },
    { name: "Business Admin", icon: "💼", gradient: "from-green-500 to-emerald-500" },
    { name: "Accounting", icon: "📊", gradient: "from-yellow-500 to-orange-500" },
    { name: "Economics", icon: "📈", gradient: "from-indigo-500 to-blue-500" },
    { name: "Electrical Engineering", icon: "⚡", gradient: "from-yellow-400 to-amber-500" },
    { name: "Medicine", icon: "🩺", gradient: "from-red-500 to-rose-500" },
    { name: "Pharmacy", icon: "💊", gradient: "from-teal-500 to-cyan-500" },
    { name: "Law", icon: "⚖️", gradient: "from-gray-700 to-gray-900" },
    { name: "System Engineering", icon: "🔧", gradient: "from-slate-500 to-zinc-600" },
    { name: "Psychology", icon: "🧠", gradient: "from-violet-500 to-purple-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Hero vid="/videos/vid3.mp4" />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.h2Val}
                  </h2>
                  <p className="text-gray-600 font-medium">{stat.pVal}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Students Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to excel in your studies, all in one platform
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.h2Val}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.pVal}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Browse by Department
            </h2>
            <p className="text-xl text-gray-600">
              Find materials specific to your course of study
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {departments.map((dept, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${dept.gradient} rounded-2xl p-6 text-center cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-5xl mb-3">{dept.icon}</div>
                <h3 className="text-white font-bold text-lg">{dept.name}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/departments"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Departments
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-5xl font-bold mb-6">
              Never Beg for Past Questions Again
            </h2>
            <p className="text-2xl mb-10 max-w-3xl mx-auto opacity-90">
              Join over 1,200 students who access verified study materials
              anytime, anywhere — and help your fellow students by sharing yours.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/materials"
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold py-5 px-10 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg"
              >
                Browse Materials Now
                <TrendingUp className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;