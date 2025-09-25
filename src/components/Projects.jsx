import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projelerim
          </h2>
          <div className="w-32 h-1 rounded bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Geliştirdiğim, geliştirmekte olduğum projeler ve çalışmalarım
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
