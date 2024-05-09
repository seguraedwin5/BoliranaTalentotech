import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-5 ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-gray-800 text-sm: 2xl mb-4 text-2xl">
          © 2024 Bolirana talento tech. Todos los derechos reservados.
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
