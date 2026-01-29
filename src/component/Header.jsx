import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-20">
      <div className="w-[90%] mx-auto flex justify-between items-center py-4 text-white">
        <h1 className="text-2xl font-bold">unix</h1>

        <nav className="flex space-x-6">
          <Link to="/" className="font-medium hover:text-gray-300">
            Home
          </Link>
          <Link to="/search" className="font-medium hover:text-gray-300">
            Search
          </Link>
          <Link to="/upload" className="font-medium hover:text-gray-300">
            Upload
          </Link>
          <Link to="/login" className="font-medium hover:text-gray-300">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
