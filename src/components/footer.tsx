import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo/Name */}
        <div className="text-xl font-semibold mb-4 md:mb-0">
          © 2024 My Website
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:text-gray-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition duration-300"
          >
            Privacy Policy
          </a>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook text-xl hover:text-gray-400"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter text-xl hover:text-gray-400"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram text-xl hover:text-gray-400"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
