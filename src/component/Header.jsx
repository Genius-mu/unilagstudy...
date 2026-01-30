import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <style>{`
        .liquidGlass-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15), transparent 50%),
                      radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.08), transparent 50%),
                      radial-gradient(circle at 100% 50%, rgba(255, 255, 255, 0.08), transparent 50%);
          filter: blur(30px);
          opacity: 0.6;
          pointer-events: none;
        }

        .liquidGlass-tint {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .liquidGlass-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), transparent 40%);
          transform: rotate(30deg);
          pointer-events: none;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .slide-in {
          animation: slideIn 0.3s ease-out;
        }

        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

      <header className="w-full fixed left-0 z-20 flex flex-col justify-center items-center h-[5em] bg-black/50 top-0 backdrop-blur-[8px] backdrop-saturate-300 shadow-xl overflow-hidden">
        {/* Liquid Glass Effects */}
        <div className="liquidGlass-effect"></div>
        <div className="liquidGlass-tint"></div>
        <div className="liquidGlass-shine"></div>

        {/* Bottom gradient line */}
        <hr className="absolute bottom-0 left-0 right-0 border-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
        <div className="w-[90%] mx-auto flex justify-between items-center py-4 text-white">
          <h1 className="text-2xl font-bold">unix</h1>

          <nav className="flex space-x-6">
            <Link to="/" className="font-medium hover:text-blue-500 transition duration-200">
              Home
            </Link>
            <Link to="/search" className="font-medium hover:text-blue-500 transition duration-200">
              Search
            </Link>
            <Link to="/upload" className="font-medium hover:text-blue-500 transition duration-200">
              Upload
            </Link>
            <Link to="/login" className="font-medium hover:text-blue-500 transition duration-200">
              Login
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
