import React from "react";
import lolMeImage from "../assets/Lol-me.jpg"; // Make sure the image path is correct

const AboutMe = () => {
  return (
    <div className="p-8 bg-black text-green-500 rounded-lg shadow-2xl max-w-4xl mx-auto my-8">
      <h1 className="text-5xl font-mono font-bold text-center mb-8 text-shadow-lg">
        Zaikos AKA Japoni
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mb-8">
        <div className="w-full md:w-1/3">
          <img
            src={lolMeImage}
            alt="Me"
            className="w-full h-auto rounded-lg border-4 border-green-500 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-700"
          />
        </div>

        <div className="w-full md:w-2/3">
          <p className="text-lg text-gray-300 mb-6">
            Welcome! I'm a student in the{" "}
            <strong className="text-green-400">
              Génie du Développement Numérique et Cybersécurité
            </strong>{" "}
            branch. Here, you can explore modules related to my studies and
            download resources. 🚀
          </p>

          <p className="text-md text-gray-400">
            I'm passionate about cybersecurity and digital development,
            constantly learning and exploring new technologies. My journey in
            this field has been both challenging and rewarding, and I’m excited
            to share my work and projects here. Let's innovate and build the
            future together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
