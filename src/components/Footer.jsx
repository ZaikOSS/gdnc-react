import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-green-500 py-6 mt-8 border-t-4 border-green-600">
      <div className="container mx-auto text-center">
        <p className="text-sm font-mono text-shadow-lg">
          © 2025 GDNC Website. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/zakaria-ouadifi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-600 transition-all duration-300 transform hover:scale-110"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-4 text-xs text-gray-400 font-mono">
          Made by <strong>Zaikos</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
