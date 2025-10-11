import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { projects } from "../data/mockData";
import { Github, ExternalLink, Filter } from "lucide-react";

function Projects() {
  const [filter, setFilter] = useState("Tümü");
  const categories = ["Tümü", "Frontend", "Full Stack", "Backend"];
  const filteredProjects =
    filter === "Tümü"
      ? projects
      : projects.filter((project) => project.category === filter);

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

        <div className="flex justify-center mb-12 px-6 sm:px-0">
          <div className="flex flex-wrap gap-2 justify-center items-center space-x-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg ">
            <Filter
              className="text-gray-600 dark:text-gray-300 ml-2 flex-shrink-0 hidden sm:block"
              size={20}
            />
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "ghost"}
                size="sm"
                className={`rounded-full px-4 py-2 transition-all duration-200 ${
                  filter === category
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-purple-600"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group h-full flex flex-col bg-gradient-to-br dark:from-gray-800 dark:to-gray-700"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-teal-100 to-green-100 dark:from-teal-900 dark:to-green-900 text-teal-800 dark:text-teal-200"
                  >
                    {project.category}
                  </Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 ">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 mt-0.5 dark:bg-transparent dark:hover:bg-gray-900"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </a>
                  </Button>
                  {project.demo && project.demo !== "#" && (
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-3 font-medium transition-all duration-200 hover:scale-105"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Bu kategoride henüz proje bulunmuyor.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
