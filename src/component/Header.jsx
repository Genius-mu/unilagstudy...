import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Sparkles } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);
  const location = useLocation();

  // Enhanced scroll effect with progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);

      // Calculate scroll progress for gradient effects
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / windowHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for interactive glass effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (event.target.closest('button[aria-label="Toggle menu"]')) return;
      if (event.target.closest("nav")) return;
      setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside, { capture: true });
    return () => {
      document.removeEventListener("click", handleClickOutside, {
        capture: true,
      });
    };
  }, [isMenuOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/search", label: "Search" },
    { to: "/upload", label: "Upload" },
    { to: "/login", label: "Login" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&display=swap');

        /* Enhanced Liquid Glass Effects */
        .liquidGlass-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(59, 130, 246, 0.15), transparent 60%),
            radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1), transparent 50%);
          filter: blur(40px);
          opacity: 0.7;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .liquidGlass-tint {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            rgba(59, 130, 246, 0.08) 50%,
            rgba(255, 255, 255, 0.05) 100%
          );
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .liquidGlass-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: linear-gradient(
            to bottom right, 
            rgba(255, 255, 255, 0.08), 
            transparent 40%
          );
          transform: rotate(30deg);
          pointer-events: none;
          animation: shineShift 8s ease-in-out infinite;
        }

        @keyframes shineShift {
          0%, 100% { transform: rotate(30deg) translateX(0); }
          50% { transform: rotate(30deg) translateX(10%); }
        }

        /* Scroll Progress Bar */
        .scroll-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
          background-size: 200% 100%;
          animation: gradientFlow 3s ease infinite;
          transition: width 0.1s ease-out;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Enhanced Animations */
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .slide-in {
          animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu-item {
          animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .mobile-menu-item:nth-child(1) { animation-delay: 0.05s; }
        .mobile-menu-item:nth-child(2) { animation-delay: 0.1s; }
        .mobile-menu-item:nth-child(3) { animation-delay: 0.15s; }
        .mobile-menu-item:nth-child(4) { animation-delay: 0.2s; }
        .mobile-menu-item:nth-child(5) { animation-delay: 0.25s; }

        /* Logo glow effect */
        .logo-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
                      0 0 40px rgba(59, 130, 246, 0.1);
          transition: box-shadow 0.3s ease;
        }

        .logo-glow:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5),
                      0 0 60px rgba(59, 130, 246, 0.2);
        }

        /* Enhanced nav link effects */
        .nav-link-active {
          color: #60a5fa;
        }

        .nav-link-active::after {
          width: 100% !important;
        }

        /* Shimmer effect for CTA */
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        /* Mobile menu backdrop blur */
        .mobile-backdrop {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Ripple effect */
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          width: 20px;
          height: 20px;
          animation: ripple 0.6s ease-out;
        }
      `}</style>

      <header
        ref={headerRef}
        className={`w-full fixed left-0 z-50 flex flex-col justify-center items-center transition-all duration-500 ${
          isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
        } bg-black/60 top-0 backdrop-blur-[12px] backdrop-saturate-150 shadow-2xl overflow-visible`}
        style={{
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
        }}
      >
        {/* Enhanced Liquid Glass Effects */}
        <div className="liquidGlass-effect"></div>
        <div className="liquidGlass-tint"></div>
        <div className="liquidGlass-shine"></div>

        {/* Scroll Progress Bar */}
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        {/* Bottom gradient line */}
        <hr className="absolute bottom-0 left-0 right-0 border-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />

        <div className="w-[90%] max-w-7xl mx-auto flex justify-between items-center h-full text-white relative z-20">
          {/* Enhanced Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-9 h-9 md:w-11 md:h-11 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 logo-glow relative overflow-hidden">
              <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <h1
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-white group-hover:to-blue-300 transition-all duration-300"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                unix
              </h1>
              <span className="text-[10px] text-blue-300/70 font-medium -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                UNILAG Hub
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-300 relative group ${
                  isActiveLink(link.to)
                    ? "nav-link-active bg-blue-500/10"
                    : "hover:text-blue-400 hover:bg-white/5"
                }`}
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ${
                    isActiveLink(link.to) ? "w-3/4" : "w-0 group-hover:w-3/4"
                  }`}
                ></span>
                {isActiveLink(link.to) && (
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-blue-400 animate-pulse" />
                )}
              </Link>
            ))}

            {/* Desktop CTA */}
            <Link
              to="/signup"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 relative overflow-hidden group"
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
            </Link>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all duration-300 relative z-50 group"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white absolute inset-0 scale-in" />
              ) : (
                <Menu className="w-6 h-6 text-white absolute inset-0 scale-in" />
              )}
            </div>
            <div className="absolute inset-0 rounded-xl bg-blue-400/0 group-hover:bg-blue-400/10 transition-colors duration-300"></div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isMenuOpen && (
          <>
            {/* Enhanced Backdrop */}
            <div
              className="fixed inset-0 bg-gradient-to-br from-black/70 via-blue-950/40 to-black/70 mobile-backdrop z-30 md:hidden fade-in overflow-hidden"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Enhanced Menu Panel */}
            <nav className="fixed top-20 md:top-24 right-0 w-full sm:w-96 h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] bg-gradient-to-br from-gray-950 via-blue-950/50 to-gray-950 shadow-2xl z-40 md:hidden slide-in overflow-y-auto border-l border-blue-500/20 overflow-hidden">
              {/* Enhanced glass effect on mobile menu */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl"></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>

              <div className="relative z-10 p-6 space-y-3">
                {/* Mobile menu header */}
                <div className="mb-6 pb-6 border-b border-white/10 fade-in">
                  <h3
                    className="text-lg font-semibold text-white mb-1"
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                  >
                    Navigation
                  </h3>
                  <p className="text-sm text-gray-400">Explore UNILAG Hub</p>
                </div>

                {navLinks.map((link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`mobile-menu-item block px-6 py-4 text-lg font-medium rounded-2xl transition-all duration-300 border relative overflow-hidden group ${
                      isActiveLink(link.to)
                        ? "bg-blue-500/20 text-blue-400 border-blue-400/50 shadow-lg shadow-blue-500/20"
                        : "text-white hover:bg-white/10 hover:text-blue-400 border-transparent hover:border-blue-400/30"
                    }`}
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {link.label}
                      {isActiveLink(link.to) && (
                        <Sparkles className="w-4 h-4 text-blue-400" />
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  </Link>
                ))}

                {/* Enhanced CTA in mobile menu */}
                <div className="mobile-menu-item pt-4 space-y-3">
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full px-6 py-4 text-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] relative overflow-hidden group"
                    style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 shimmer"></div>
                  </Link>
                </div>
              </div>

              {/* Enhanced mobile menu footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent border-t border-white/5">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      unix
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} UNILAG Hub. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </nav>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
