import React from "react";
import gdncImage from "../assets/gdnc.jpeg"; // Assuming the image is in the 'assets' folder
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="p-8 text-center rounded-lg mb-8 shadow-lg border border-green-600">
      <h1 className="text-5xl font-mono font-bold mb-4 text-shadow-lg">
        Welcome to GDNC
      </h1>

      <a
        href="https://www.linkedin.com" // Replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="relative block mx-auto mb-4"
      >
        <img
          src={gdncImage}
          alt="GDNC"
          className="hero-image cursor-pointer transition-transform transform hover:scale-105 border-4 border-green-500"
        />
      </a>

      <p className="text-lg text-gray-300">
        Explore the modules and resources from the Génie du Développement
        Numérique et Cybersécurité program.
      </p>
    </div>
  );
};

export default HeroSection;
