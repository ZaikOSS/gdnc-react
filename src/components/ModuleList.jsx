import React from "react";
import ModuleItem from "./ModuleItem";
import modules from "../module.json"; // Import the JSON file
import "./moduleList.css";

const ModuleList = () => {
  return (
    <div className="p-6 bg-black text-green-500">
      <h2 className="text-2xl font-semibold mb-4 animate-flicker">
        Modules by Semester
      </h2>
      {modules.map((semester, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-4 animate-flicker">
            {semester.semester}
          </h3>
          <ul className="space-y-4">
            {semester.modules.map((module, moduleIndex) => (
              <ModuleItem
                key={moduleIndex}
                name={module.name}
                description={module.description}
                file={module.file}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ModuleList;
