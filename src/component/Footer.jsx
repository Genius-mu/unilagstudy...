// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2026 UNILAG Study Hub. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/privacy" className="hover:text-blue-300">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-300">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-blue-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
