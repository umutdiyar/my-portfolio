import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { skills } from "../data/mockData";
import {
  Code,
  Database,
  Wrench,
  TrendingUp,
  Cpu,
  BadgeCheckIcon,
} from "lucide-react";

function Talents() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("talents");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categoryIcons = {
    Frontend: <Code className="text-blue-600" size={24} />,
    Backend: <Database className="text-green-600" size={24} />,
    Tools: <Wrench className="text-purple-600" size={24} />,
  };

  const categoryColors = {
    Frontend: "from-blue-500 to-cyan-500",
    Backend: "from-green-500 to-emerald-500",
    Tools: "from-purple-500 to-pink-500",
  };

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter(
          (category) => category.category.toLowerCase() === activeTab
        );

  const tabs = [
    { id: "all", label: "Tümü", icon: <TrendingUp size={16} /> },
    { id: "frontend", label: "Frontend", icon: <Code size={16} /> },
    { id: "backend", label: "Backend", icon: <Database size={16} /> },
    { id: "tools", label: "Araçlar", icon: <Wrench size={16} /> },
  ];

  return (
    <section
      id="talents"
      className="py-20 bg-gray-50 relative overflow-hidden dark:bg-gray-800"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-lg mb-4">
            <Cpu className="text-teal-600" size={20} />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Teknolojiler
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Yeteneklerim
          </h2>
          <div className="w-36 h-1 bg-gradient-to-r rounded from-teal-600 to-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kullandığım teknolojiler ve seviye durumlarım
          </p>
        </div>

        <div className="flex justify-center mb-12 ">
          <div className="bg-white dark:bg-gray-900 p-2 rounded-full shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex sm:space-x-1 justify-center gap-2 sm:flex-nowrap flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-teal-600 to-green-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-teal-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className={
            filteredSkills.length === 1
              ? "flex justify-center"
              : "grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          }
        >
          {filteredSkills.map((skillCategory, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-lg w-full ${
                filteredSkills.length === 1
                  ? "w-[90%] sm:w-[70%] md:w-[50%] lg:w-[32%]"
                  : "w-full"
              }`}
              style={{
                animationDelay: `${categoryIndex * 0.2}s`,
                animation: isVisible ? "fadeInUp 0.8s ease-out forwards" : "",
              }}
            >
              <CardContent className="p-8">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    {categoryIcons[skillCategory.category]}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {skillCategory.category}
                    </h3>
                  </div>
                  {
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-teal-100 to-green-100 dark:from-teal-900 dark:to-green-900 text-teal-800 dark:text-teal-200"
                    >
                      <BadgeCheckIcon className="w-4 mr-2" />
                      {skillCategory.items.length} Teknoloji
                    </Badge>
                  }
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl transform group-hover/skill:scale-110 transition-transform duration-200">
                            <i
                              className={`${skill.icon} text-3xl dark:invert group-hover/skill:scale-110 transition-transform`}
                            ></i>
                          </div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
                        </div>
                      </div>

                      {/* Skill Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${
                              categoryColors[skillCategory.category]
                            } relative transition-all duration-1000 ease-out shadow-sm`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              animationDelay: `${
                                categoryIndex * 0.2 + skillIndex * 0.1
                              }s`,
                            }}
                          >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                          </div>
                        </div>

                        {/* Skill Level Indicator */}
                        <div
                          className="absolute top-0 h-3 w-1 bg-white rounded-full shadow-md transition-all duration-1000 ease-out"
                          style={{
                            left: isVisible
                              ? `calc(${skill.level}% - 2px)`
                              : "0%",
                            animationDelay: `${
                              categoryIndex * 0.2 + skillIndex * 0.1 + 0.5
                            }s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}

export default Talents;
