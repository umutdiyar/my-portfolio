import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import "./Projects.css";
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

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center items-center bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg ">
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
                className={`min-h-11 rounded-full px-4 py-2 transition-all duration-200 ${
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

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="project-card overflow-hidden group h-full min-w-0 flex flex-col bg-gradient-to-br dark:from-gray-800 dark:to-gray-700"
              style={{
                "--project-delay": `${index * 0.1}s`,
              }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className={project.imageFit === "contain" ? "project-image-contained" : "project-image-cover"}
                />
              </div>
              <CardContent className="p-5 sm:p-6 flex flex-col flex-1 min-w-0 gap-4">
                <div className="flex flex-wrap justify-between items-start gap-3">
                  <h3 className="min-w-0 flex-1 basis-40 break-words text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-teal-100 to-green-100 dark:from-teal-900 dark:to-green-900 text-teal-800 dark:text-teal-200"
                    >
                      {project.category}
                    </Badge>

                    {project.status && (
                      <Badge
                        variant="secondary"
                        className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                </div>

                <p className="break-words text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 ">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="max-w-full whitespace-normal break-words text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="project-actions mt-auto pt-2 flex flex-wrap gap-3">
                  {project.github && project.github !== "#" && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="min-h-11 flex-1 basis-28 dark:bg-transparent dark:hover:bg-gray-900"
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
                  )}

                  {project.demo && project.demo !== "#" && (
                    <Button
                      asChild
                      className="min-h-11 flex-1 basis-28 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-3 font-medium transition-colors duration-200"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Siteyi Gör
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
    </section>
  );
}

export default Projects;
