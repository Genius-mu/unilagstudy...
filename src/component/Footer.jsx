import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const X = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                UNILAG Hub
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted platform for accessing verified study materials, past
              questions, and lecture notes at the University of Lagos.
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: X,
                  href: "#",
                  label: "X",
                },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white text-lg font-semibold mb-6"
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Browse Materials", href: "/search" },
                { label: "All Departments", href: "/departments" },
                { label: "Upload Resources", href: "/upload" },
                { label: "Pricing", href: "/pricing" },
                { label: "How it Works", href: "/how-it-works" },
                { label: "FAQs", href: "/faqs" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group w-fitgit "
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Departments */}
          <div>
            <h4
              className="text-white text-lg font-semibold mb-6"
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
            >
              Popular Departments
            </h4>
            <ul className="space-y-3">
              {[
                "Computer Science",
                "Mass Communication",
                "Law",
                "Medicine",
                "Engineering",
                "Business Admin",
              ].map((dept, index) => (
                <li key={index}>
                  <Link
                    to={`/search?department=${encodeURIComponent(dept)}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-white text-lg font-semibold mb-6"
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  University of Lagos,
                  <br />
                  Akoka, Lagos State
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:support@unilaghub.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  support@unilaghub.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+2348012345678"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +234 801 234 5678
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h5
                className="text-white font-medium mb-3"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                Stay Updated
              </h5>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} UNILAG Study Hub. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
