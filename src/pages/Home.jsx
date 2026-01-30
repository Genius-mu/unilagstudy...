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
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";

const Home = () => {
  return (
    <>
      <div>
        <Hero vid={"/videos/vid3.mp4"} />
        <section
          className="flex justify-center py-20 items-center w-full"
          style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
        >
          <div className="w-[90%] h-fit grid gap-4 grid-cols-1 sm:grid-cols-2 grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
            {[
              { icon: <Book />, h2Val: "5,000+", pVal: "Study Materials" },
              { icon: <Users />, h2Val: "1,200+", pVal: "Active Students" },
              { icon: <Award />, h2Val: "120+", pVal: "courses Covered" },
              { icon: <Star />, h2Val: "4.5/5", pVal: "User Rating" },
            ].map((stat, i) => (
              <>
                <div className="flex hover:-translate-y-3 transition duration-200 justify-center items-center flex-col gap-y-2 shadow-xl bg-white rounded-xl w-full h-[10em]">
                  <span className="bg-blue-500/30 p-3 rounded-2xl text-blue-600">
                    {stat.icon}
                  </span>
                  <h2 className="font-bold text-2xl text-blue-700">
                    {stat.h2Val}
                  </h2>
                  <h3 className="font-medium">{stat.pVal}</h3>
                </div>
              </>
            ))}
          </div>
        </section>
        <section className="flex justify-center py-20 items-center w-full">
          <div className="w-[90%] h-fit flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-5 justify-center items-center">
              <h2
                className="font-bold text-4xl"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                Why Students Choose Us
              </h2>
              <p
                className="font-medium text-[16px] text-center text-black/40"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                Everything you need to excel in your studies, all in one
                platform
              </p>
            </div>
            <div className="h-fit grid gap-4 grid-cols-1 sm:grid-cols-2 grid-rows-2 md:grid-cols-3 xl:grid-rows-1">
              {[
                { icon: <Search />, h2Val: "5,000+", pVal: "Study Materials" },
                { icon: <Award />, h2Val: "1,200+", pVal: "Active Students" },
                { icon: <Clock />, h2Val: "120+", pVal: "courses Covered" },
              ].map((about, i) => (
                <>
                  <div className="flex hover:-translate-y-3 transition duration-300 hover:scale-102 justify-center items-center flex-col gap-y-2 shadow-xl bg-white rounded-xl w-full h-[10em]">
                    <span
                      className="bg-green-500/30 p-3 rounded-2xl text-green-600"
                      style={{
                        fontFamily: '"Bricolage Grotesque", sans-serif',
                      }}
                    >
                      {about.icon}
                    </span>
                    <h2
                      className="font-bold text-2xl text-blue-700"
                      style={{
                        fontFamily: '"Bricolage Grotesque", sans-serif',
                      }}
                    >
                      {about.h2Val}
                    </h2>
                    <h3 className="font-medium">{about.pVal}</h3>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
        <section
          className="flex justify-center pb-30 items-center w-full"
          style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
        >
          <div className="w-[90%] flex flex-col justify-center items-center gap-y-9">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              {[
                { name: "Computer Science", icon: "💻" },
                { name: "Mass Communication", icon: "📺" },
                { name: "Law", icon: "⚖️" },
                { name: "Business Admin", icon: "💼" },
                { name: "Accounting", icon: "📊" },
                { name: "Economics", icon: "📈" },
                { name: "Electrical Engineering", icon: "⚡" },
                { name: "Medicine", icon: "🩺" },
                { name: "Pharmacy", icon: "💊" },
                { name: "Psychology", icon: "🧠" },
                { name: "Psychology", icon: "🧠" },
                { name: "Psychology", icon: "🧠" },
              ].map((dept, i) => (
                <motion.a
                  key={dept.name}
                  href={`/search?department=${encodeURIComponent(dept.name)}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center transition-all duration-300 border border-gray-100 cursor-pointer"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {dept.icon}
                  </div>
                  <div className="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {dept.name}
                  </div>
                </motion.a>
              ))}
            </div>
            <Link
              to="/"
              className="group flex items-center justify-center gap-x-1 transition-all duration-300 hover:pr-1 hover:text-blue-600"
            >
              View all Departments
              <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:text-blue-600">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </section>
        <section className="w-full flex justify-center items-center h-fit py-20 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800">
          <div className="w-[90%] flex justify-center items-center flex-col gap-y-6">
            <h2 className="font-bold text-4xl text-white text-shadow-2xs text-center">
              Never Beg for Past Questions Again
            </h2>
            <p className="text-white text-[16px] font-medium max-w-[500px] text-center">
              Join over 1,200 students who access verified study materials
              anytime, anywhere — and help your fellow students by sharing
              yours.
            </p>
            <div className="flex justify-center items-center w-full gap-3">
              <Link
                to=""
                className="text-black bg-white hover:text-white hover:bg-transparent py-3 px-6 rounded-2xl border-2 shadow-xl border-white transition duration-300"
              >
                Browse Materials Now
              </Link>
              <Link
                to=""
                className="hover:text-black hover:bg-white text-white bg-transparent  py-3 px-6 rounded-2xl border-2 shadow-xl border-white transition duration-300"
              >
                Browse Materials Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
