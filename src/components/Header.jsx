import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımda", href: "#about" },
    { name: "Yetenekler", href: "#talents" },
    { name: "Deneyim", href: "#experience" },
    { name: "Eğitim", href: "#education" },
    { name: "Projeler", href: "#projects" },
    { name: "İletişim", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              Umut Diyar.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center md:mx-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium group px-3 py-2"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
