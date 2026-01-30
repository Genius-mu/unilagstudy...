import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData);
  };

  return (
    <div
      className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-12"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      <div className="w-[90%] py-30 relative h-fit overflow-hidden max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex flex-col gap-y-6"
        >
          <div>
            <h1 className="font-bold text-5xl text-blue-700 mb-4">
              Welcome Back!
            </h1>
            <p className="text-xl text-gray-600">
              Access thousands of study materials and past questions
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-y-4">
            {[
              {
                icon: "📚",
                title: "5,000+ Study Materials",
                description: "Access verified past questions anytime",
              },
              {
                icon: "🎓",
                title: "1,200+ Active Students",
                description: "Join our growing community",
              },
              {
                icon: "⭐",
                title: "4.5/5 User Rating",
                description: "Trusted by students nationwide",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-x-4"
              >
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            {/* Header */}
            <div className="mb-8">
              <h2 className="font-bold text-3xl text-gray-900 mb-2">
                Sign In
              </h2>
              <p className="text-gray-600">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full py-3 pl-12 pr-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full py-3 pl-12 pr-12 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition duration-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-x-2"
              >
                Sign In
                <ArrowRight size={20} />
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-x-4 my-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-1 gap-3">
              <button className="w-full border-2 border-gray-200 hover:border-gray-300 py-3 px-4 rounded-xl font-semibold text-gray-700 transition duration-300 flex items-center justify-center gap-x-3">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-800 font-bold transition duration-300"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>

          {/* Mobile Features */}
          <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "📚", text: "5,000+ Materials" },
              { icon: "🎓", text: "1,200+ Students" },
              { icon: "⭐", text: "4.5/5 Rating" },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-4 text-center"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <p className="text-sm font-semibold text-gray-700">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;