import React, { useEffect, useState } from "react";
import ModuleItem from "./ModuleItem";
import "./moduleList.css";

const ModuleList = () => {
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file URL
    const fetchModules = async () => {
      try {
        const response = await fetch(
          "https://zaikoss.github.io/api_gdnc_website/module.json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setModules(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchModules();
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 bg-black text-green-500">Loading modules...</div>
    );
  }

  if (error) {
    return <div className="p-6 bg-black text-red-500">Error: {error}</div>;
  }

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
