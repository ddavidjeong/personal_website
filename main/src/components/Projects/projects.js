import React from "react";

function Projects() {
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Project 1
          </h3>
          <p>A brief description of my project.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Project 2
          </h3>
          <p>A brief description of my project.</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Project 3
          </h3>
          <p>A brief description of my project.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
