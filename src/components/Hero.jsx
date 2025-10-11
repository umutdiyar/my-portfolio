import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Junior Yazılım Geliştirici",
    "Frontend Developer",
    "React.js Developer",
    "Vue.js Developer",
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText === currentText) {
            setTimeout(() => setIsDeleting(true), 2000);
          } else {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          }
        } else {
          if (displayText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          } else {
            setDisplayText(currentText.slice(0, displayText.length - 1));
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-green-400/10 to-teal-400/10 dark:from-green-600/10 dark:to-teal-600/10 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Merhaba, Ben{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Umut Diyar
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 h-10">
            <span className="font-medium">
              {displayText}
              <span className="animate-pulse text-blue-600">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Web geliştirme alanında kendimi sürekli geliştiren, modern
            teknolojilerle kullanıcı dostu uygulamalar oluşturan bir yazılım
            geliştiricisiyim.
          </p>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-6 mb-12">
            <a
              href="https://github.com/umutdiyar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white  hover:scale-110 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/umut-diyar-balc%C4%B1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:umutdiyarbalci@gmail.com"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:bg-gray-600 hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="bg-blue-600  hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
            >
              Projelerimi Görüntüle
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              size="lg"
              className="bg-transparent dark:bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
            >
              İletişime Geç
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute inset-x-0 flex justify-center animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="p-2 sm:p-3 my-8 rounded-full text-gray-600 dark:text-gray-400 
                       hover:text-blue-600 dark:hover:text-blue-400 
                       transition-colors duration-200"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} className="sm:w-8 sm:h-8 w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
