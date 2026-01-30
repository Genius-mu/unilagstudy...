import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  BookOpen,
  Upload,
  Users,
  Star,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GetStartedPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("free");

  return (
    <div
      className="w-full min-h-screen bg-gray-50"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 py-20">
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
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Users size={32} />,
                title: "Create Your Account",
                description:
                  "Sign up for free in less than a minute. No credit card required.",
              },
              {
                step: "02",
                icon: <BookOpen size={32} />,
                title: "Browse Materials",
                description:
                  "Search and access thousands of verified past questions and study materials.",
              },
              {
                step: "03",
                icon: <Upload size={32} />,
                title: "Share & Earn",
                description:
                  "Upload your own materials to help others and build your reputation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-xl p-8 hover:-translate-y-3 transition duration-300 border-2 border-gray-100 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600 mt-4">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>

                {/* Arrow for desktop */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-600">
                    <ArrowRight size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 text-lg">
              Start free and upgrade as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "₦0",
                period: "forever",
                description: "Perfect for getting started",
                features: [
                  "Access to 1,000+ materials",
                  "Basic search functionality",
                  "Upload up to 5 materials/month",
                  "Community support",
                  "Download materials",
                ],
                popular: false,
                cta: "Get Started Free",
                value: "free",
              },
              {
                name: "Student",
                price: "₦2,500",
                period: "per month",
                description: "Best for active students",
                features: [
                  "Access to all 5,000+ materials",
                  "Advanced search & filters",
                  "Unlimited uploads",
                  "Priority support",
                  "Offline downloads",
                  "No ads",
                  "Early access to new features",
                ],
                popular: true,
                cta: "Start Free Trial",
                value: "student",
              },
              {
                name: "Premium",
                price: "₦5,000",
                period: "per month",
                description: "For serious learners",
                features: [
                  "Everything in Student plan",
                  "One-on-one tutoring sessions",
                  "Custom material requests",
                  "Analytics dashboard",
                  "API access",
                  "Dedicated account manager",
                  "Lifetime access guarantee",
                ],
                popular: false,
                cta: "Contact Sales",
                value: "premium",
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-3 transition duration-300 ${
                  plan.popular
                    ? "border-4 border-blue-600"
                    : "border-2 border-gray-100"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-x-2">
                      <Star size={16} fill="white" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6 mt-2">
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-end justify-center gap-x-1">
                    <span className="font-bold text-5xl text-blue-700">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 mb-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <ul className="flex flex-col gap-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-x-3">
                        <div className="bg-green-500/20 rounded-full p-1 mt-0.5">
                          <Check className="text-green-600" size={16} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedPlan(plan.value)}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition duration-300 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl text-gray-900 mb-4">
              Why Students Love Us
            </h2>
            <p className="text-gray-600 text-lg">
              Trusted by over 1,200 students nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={32} />,
                title: "Lightning Fast",
                description:
                  "Find what you need in seconds with our advanced search technology.",
                color: "yellow",
              },
              {
                icon: <Shield size={32} />,
                title: "Verified Content",
                description:
                  "All materials are reviewed and verified by our community of students.",
                color: "green",
              },
              {
                icon: <Users size={32} />,
                title: "Active Community",
                description:
                  "Join a thriving community of students helping each other succeed.",
                color: "blue",
              },
              {
                icon: <BookOpen size={32} />,
                title: "Comprehensive Library",
                description:
                  "Access materials across 120+ courses and multiple departments.",
                color: "purple",
              },
              {
                icon: <Star size={32} />,
                title: "Quality Guaranteed",
                description:
                  "Rated 4.5/5 by students who've used our platform for their studies.",
                color: "orange",
              },
              {
                icon: <Upload size={32} />,
                title: "Easy Sharing",
                description:
                  "Upload and share your materials effortlessly to help fellow students.",
                color: "pink",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition duration-300 hover:-translate-y-2"
              >
                <div
                  className={`bg-${benefit.color}-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-${benefit.color}-600`}
                >
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl text-gray-900 mb-4">
              What Students Say
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chioma Adeleke",
                department: "Computer Science, 300L",
                avatar: "👩🏾‍💻",
                rating: 5,
                text: "This platform saved me during exam prep! I found all my past questions in one place. No more begging classmates!",
              },
              {
                name: "Tunde Okafor",
                department: "Law, 400L",
                avatar: "👨🏿‍⚖️",
                rating: 5,
                text: "The quality of materials here is outstanding. Everything is organized and easy to find. Highly recommend!",
              },
              {
                name: "Fatima Ibrahim",
                department: "Medicine, 500L",
                avatar: "👩🏽‍⚕️",
                rating: 5,
                text: "Best investment I've made in my education. The materials are current and the community is super helpful.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition duration-300"
              >
                {/* Rating */}
                <div className="flex gap-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={20}
                      fill="#FCD34D"
                      className="text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-x-3">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.department}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800">
        <div className="w-[90%] max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-6"
          >
            <h2 className="font-bold text-4xl md:text-5xl text-white">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-white text-xl">
              Join over 1,200 students who never beg for past questions again
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
              <Link
                to="/signup"
                className="bg-white text-blue-700 hover:bg-blue-50 py-4 px-8 rounded-xl font-bold text-lg shadow-xl transition duration-300 flex items-center gap-x-2"
              >
                Get Started Free
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/search"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 py-4 px-8 rounded-xl font-bold text-lg shadow-xl transition duration-300"
              >
                Browse Materials
              </Link>
            </div>
            <p className="text-white text-sm">
              No credit card required • 7-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;
