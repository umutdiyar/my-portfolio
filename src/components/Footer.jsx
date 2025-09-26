import React from "react";
import { personalInfo } from "../data/mockData";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.github,
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      color: "hover:text-red-500",
    },
  ];

  const quickLinks = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımda", href: "#about" },
    { name: "Yetenekler", href: "#skills" },
    { name: "Deneyim", href: "#experience" },
    { name: "Eğitim", href: "#education" },
    { name: "Projeler", href: "#projects" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-24">
          {/* Hakkında */}
          <div className="space-y-4">
            <h3 className="text-2xl bg-gradient-to-r  from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              Umut Diyar Balcı
            </h3>
            <p className="leading-relaxed text-gray-400">
              Junior Yazılım Geliştirici olarak modern web teknolojileri ile
              kullanıcı dostu uygulamalar geliştiriyorum.
            </p>
          </div>

          {/* Hızlı Erişim */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Hızlı Erişim
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="relative transition-colors duration-200 font-medium group text-gray-400 hover:text-white text-left"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">İletişim</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 dark:bg-gray-700 rounded-full text-gray-300 ${social.color} transition-all duration-200 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="leading-relaxed text-gray-400 mt-4">
              İşbirliklerine ve yeni projelere her zaman açığım. Fikirlerinizi
              paylaşmak veya birlikte çalışmak isterseniz, benimle iletişime
              geçebilirsiniz.
            </p>
          </div>
        </div>

        {/* Alt bölüm */}
        <div className="border-t border-gray-700 dark:border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <span className="text-gray-400 text-sm md:text-base">
            © {currentYear} <b>Umut Diyar Balcı</b> Tarafından Yapıldı. Tüm
            hakları saklıdır.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
