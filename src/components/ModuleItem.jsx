import React from "react";

const ModuleItem = ({ name, description, file }) => {
  return (
    <li className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-green-500 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
      <div className="space-y-2">
        <span className="text-xl font-mono font-bold text-green-400 text-shadow-lg">
          {name}
        </span>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <a
        href={file}
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security feature to prevent malicious activity
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 mt-2 md:mt-0 transition duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 relative overflow-hidden"
      >
        <span className="font-mono text-lg tracking-wider z-10 relative">
          Download
        </span>
        {/* Glitch effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg glitch-effect"></div>
      </a>
    </li>
  );
};

export default ModuleItem;
