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
  TrendingUp,
  Award,
  Clock,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hero3 from "../component/Hero3";

const GetStartedPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly
  const [showPlanModal, setShowPlanModal] = useState(false);

  const plans = [
    {
      name: "Free",
      price: { monthly: "₦0", yearly: "₦0" },
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Access to 1,000+ materials",
        "Basic search functionality",
        "Upload up to 5 materials/month",
        "Community support",
        "Download materials",
        "Standard quality PDFs",
      ],
      popular: false,
      cta: "Get Started Free",
      value: "free",
      badge: null,
    },
    {
      name: "Student",
      price: { monthly: "₦2,500", yearly: "₦25,000" },
      savings: "Save ₦5,000/year",
      period: billingCycle === "monthly" ? "per month" : "per year",
      description: "Best for active students",
      features: [
        "Access to all 5,000+ materials",
        "Advanced search & filters",
        "Unlimited uploads",
        "Priority support",
        "Offline downloads",
        "No ads",
        "Early access to new features",
        "HD quality PDFs",
        "Mobile app access",
      ],
      popular: true,
      cta: "Start 7-Day Free Trial",
      value: "student",
      badge: "Most Popular",
    },
    {
      name: "Premium",
      price: { monthly: "₦5,000", yearly: "₦50,000" },
      savings: "Save ₦10,000/year",
      period: billingCycle === "monthly" ? "per month" : "per year",
      description: "For serious learners",
      features: [
        "Everything in Student plan",
        "One-on-one tutoring sessions",
        "Custom material requests",
        "Analytics dashboard",
        "API access",
        "Dedicated account manager",
        "Lifetime access guarantee",
        "Priority content creation",
        "Exclusive webinars",
      ],
      popular: false,
      cta: "Contact Sales",
      value: "premium",
      badge: "Best Value",
    },
  ];

  const handlePlanSelection = (planValue) => {
    setSelectedPlan(planValue);
    setShowPlanModal(true);
  };

  return (
    <div
      className="w-full min-h-screen bg-gray-50"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      {/* Hero Section */}
      <section className="w-full relative flex justify-center items-center h-[35em] bg-blue-600 overflow-hidden">
        <Hero3 vid={"/videos/vid3.mp4"} />
      </section>

      {/* Stats Bar */}
      <section className="w-full bg-white border-b border-gray-200 py-8">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                5,000+
              </div>
              <div className="text-sm text-gray-600">Study Materials</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                1,200+
              </div>
              <div className="text-sm text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                120+
              </div>
              <div className="text-sm text-gray-600">Courses Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                4.5/5
              </div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-4xl md:text-5xl text-gray-900 mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Get started in three simple steps and join thousands of successful
              students
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: "01",
                icon: <Users size={40} />,
                title: "Create Your Account",
                description:
                  "Sign up for free in less than a minute. No credit card required to start.",
                color: "blue",
              },
              {
                step: "02",
                icon: <BookOpen size={40} />,
                title: "Browse Materials",
                description:
                  "Search and access thousands of verified past questions and study materials organized by department.",
                color: "blue",
              },
              {
                step: "03",
                icon: <Upload size={40} />,
                title: "Share & Earn",
                description:
                  "Upload your own materials to help others and build your reputation in the community.",
                color: "blue",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full group hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-5 -left-5 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 mt-6 group-hover:bg-blue-100 transition-colors duration-300">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-2xl text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 text-blue-400 z-10">
                    <ArrowRight size={40} strokeWidth={2} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-4xl md:text-5xl text-gray-900 mb-4"
            >
              Choose Your Plan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl mb-8"
            >
              Start free and upgrade as you grow
            </motion.p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-md">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  billingCycle === "yearly"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-blue-600 scale-105 md:scale-110"
                    : "border border-gray-200 hover:border-blue-300"
                } hover:-translate-y-2`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                      <Star size={16} fill="white" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8 mt-2">
                  <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="flex items-end justify-center gap-1">
                      <span className="font-bold text-5xl md:text-6xl text-blue-600">
                        {plan.price[billingCycle]}
                      </span>
                    </div>
                    <span className="text-gray-600 mt-2">/{plan.period}</span>
                    {billingCycle === "yearly" && plan.savings && (
                      <span className="text-green-600 text-sm font-semibold mt-2">
                        {plan.savings}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                          <Check className="text-green-600" size={16} />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanSelection(plan.value)}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900 hover:shadow-md"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Plan Comparison Note */}
          <div className="text-center mt-12">
            <p className="text-gray-600">
              All plans include access to our community and basic features.{" "}
              <Link
                to="/pricing"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Compare all features →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-4xl md:text-5xl text-gray-900 mb-4"
            >
              Why Students Love Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl"
            >
              Trusted by over 1,200 students nationwide
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={36} />,
                title: "Lightning Fast",
                description:
                  "Find what you need in seconds with our advanced search technology and smart filters.",
              },
              {
                icon: <Shield size={36} />,
                title: "Verified Content",
                description:
                  "All materials are reviewed and verified by our community of top students and moderators.",
              },
              {
                icon: <Users size={36} />,
                title: "Active Community",
                description:
                  "Join a thriving community of students helping each other succeed through collaboration.",
              },
              {
                icon: <BookOpen size={36} />,
                title: "Comprehensive Library",
                description:
                  "Access materials across 120+ courses and multiple departments, all in one place.",
              },
              {
                icon: <Star size={36} />,
                title: "Quality Guaranteed",
                description:
                  "Rated 4.5/5 by students who've used our platform to excel in their studies.",
              },
              {
                icon: <Upload size={36} />,
                title: "Easy Sharing",
                description:
                  "Upload and share your materials effortlessly to help fellow students and earn rewards.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-4xl md:text-5xl text-gray-900 mb-4"
            >
              What Students Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg md:text-xl"
            >
              Don't just take our word for it
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chioma Adeleke",
                department: "Computer Science, 300L",
                avatar: "👩🏾‍💻",
                rating: 5,
                text: "This platform saved me during exam prep! I found all my past questions in one place. No more begging classmates for materials!",
              },
              {
                name: "Tunde Okafor",
                department: "Law, 400L",
                avatar: "👨🏿‍⚖️",
                rating: 5,
                text: "The quality of materials here is outstanding. Everything is organized and easy to find. Highly recommend to every student!",
              },
              {
                name: "Fatima Ibrahim",
                department: "Medicine, 500L",
                avatar: "👩🏽‍⚕️",
                rating: 5,
                text: "Best investment I've made in my education. The materials are current and the community is super helpful and supportive.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
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
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
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
      <section className="w-full py-24 bg-blue-600">
        <div className="w-[90%] max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-8"
          >
            <h2 className="font-bold text-4xl md:text-6xl text-white leading-tight">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto">
              Join over 1,200 students who never beg for past questions again
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              <Link
                to="/signup"
                className="bg-white text-blue-600 hover:bg-gray-50 py-4 px-10 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                Get Started Free
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/search"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 py-4 px-10 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Browse Materials
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mt-4">
              <div className="flex items-center gap-2">
                <Check size={16} />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plan Selection Modal */}
      <AnimatePresence>
        {showPlanModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPlanModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedPlan === "free" && "Start Free"}
                    {selectedPlan === "student" && "Start Your Free Trial"}
                    {selectedPlan === "premium" && "Contact Our Team"}
                  </h3>
                  <p className="text-gray-600">
                    {selectedPlan === "free" &&
                      "No credit card required to get started"}
                    {selectedPlan === "student" &&
                      "7 days free, then ₦2,500/month"}
                    {selectedPlan === "premium" && "Let's discuss your needs"}
                  </p>
                </div>
                <button
                  onClick={() => setShowPlanModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <Link
                  to="/signup"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 hover:shadow-lg"
                >
                  {selectedPlan === "premium"
                    ? "Contact Sales"
                    : "Continue to Sign Up"}
                </Link>
                <button
                  onClick={() => setShowPlanModal(false)}
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GetStartedPage;
