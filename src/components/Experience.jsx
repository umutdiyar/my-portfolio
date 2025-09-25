import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { experiences } from "../data/mockData";
import { Briefcase, Calendar } from "lucide-react";

function Experience() {
  const workExperience = experiences.filter((exp) => exp.type === "work");

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            Profesyonel Deneyim
          </h2>
          <div className="w-52 h-1 rounded bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sonraki deneyimler için hazırlandığım yolculuktan kesitler
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            {workExperience.map((exp, index) => (
              <div
                key={exp.id}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 transform w-16 h-16 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={24} />
                </div>

                <Card
                  className={`ml-24 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:ml-0"
                      : "md:ml-auto md:mr-0"
                  } hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br dark:from-gray-800 dark:to-gray-700`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="text-blue-600 mr-2" size={16} />
                      <span className="text-sm font-medium text-blue-600">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>

                    <h4 className="text-lg font-semibold text-gray-700 mb-3 dark:text-gray-300">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
