import eCommerceApp from "../assets/eCommerce-webApp-Screenshot.png";
import weatherApp from "../assets/weatherApp.png";
import myPortfolio from "../assets/my-portfolio-photo.png";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95, icon: "devicon-html5-plain colored" },
      { name: "CSS3", level: 90, icon: "devicon-css3-plain colored" },
      {
        name: "JavaScript",
        level: 85,
        icon: "devicon-javascript-plain colored",
      },
      { name: "React.js", level: 80, icon: "devicon-react-plain colored" },
      { name: "Vue.js", level: 85, icon: "devicon-vuejs-plain colored" },
      {
        name: "TailwindCSS",
        level: 90,
        icon: "devicon-tailwindcss-plain colored",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        level: 75,
        icon: "devicon-nodejs-plain-wordmark colored",
      },
      { name: "C#", level: 85, icon: "devicon-csharp-plain colored" },
      {
        name: "ASP .NET Core MVC",
        level: 90,
        icon: "devicon-dotnetcore-plain colored",
      },
      {
        name: "SQL",
        level: 80,
        icon: "devicon-microsoftsqlserver-plain-wordmark colored",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 80, icon: "devicon-git-plain colored" },
      { name: "GitHub", level: 85, icon: "devicon-github-plain colored" },
      { name: "VS Code", level: 95, icon: "devicon-vscode-plain colored" },
      {
        name: "Visual Studio",
        level: 95,
        icon: "devicon-visualstudio-plain colored",
      },
      { name: "Figma", level: 70, icon: "devicon-figma-plain colored" },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    title: "Core Team Member",
    company: "AWS Cloud Club Okan University",
    period: "Şubat 2026 - Halen",
    description:
      "AWS Cloud Club bünyesinde sponsorluk ekibinde aktif rol alarak, etkinlikler için şirketlerle iletişim kurma, iş birlikleri geliştirme ve sponsorluk süreçlerini yönetme sorumluluğunu üstleniyorum.",
    type: "work",
    technologies: [
      "AWS Cloud",
      "Sponsorship",
      "Teamwork",
      "Partnerships",
      "Networking",
      "Communication",
    ],
  },

  {
    id: 2,
    title: "Core Team Member",
    company: "GDG On Campus Istanbul Okan University",
    period: "Eylül 2025 - Şubat 2026",
    description:
      "GDG On Campus Okan topluluğunda’da etkinlikler için sponsorluk süreçlerinde aktif rol alarak şirketlerle iletişim, teklif hazırlama ve iş birlikleri geliştirme süreçlerine katkı sağladım.",
    type: "work",
    technologies: [
      "Teamwork",
      "Organization",
      "Event Management",
      "Problem Solving",
    ],
  },
  {
    id: 3,
    title: "BT Destek Uzmanı",
    company: "Omreon Bilişim Teknolojileri",
    period: "Temmuz 2024 - Ekim 2024",
    description:
      "Logo Yazılım bünyesinde sistem altyapı yönetimi ve operasyonel süreç iyileştirme görevlerini üstlendim.",
    type: "work",
    technologies: ["System Administration", "Windows Server", "Network"],
  },
  {
    id: 4,
    title: "Stajyer Yazılım Geliştirici",
    company: "Beezsoft Yazılım Danışmanlık",
    period: "Eylül 2023 - Haziran 2024",
    description:
      "Vue.js, TailwindCSS, Axios ve Pinia State Management kullanarak kullanıcı dostu web uygulamaları geliştirdim.",
    type: "work",
    technologies: [
      "TailwindCSS",
      "JavaScript",
      "Vue.js",
      "Pinia",
      "Axios",
      "Mockoon",
    ],
  },
  {
    id: 5,
    title: "Bilgisayar Programcılığı",
    company: "Okan Üniversitesi",
    period: "Eylül 2025 - Halen",
    description:
      "Web geliştirme, kullanıcı arayüz tasarımı, algoritma tasarımı, veri yapıları ve nesne yönelimli programlama konularında eğitim alıyorum.",
    type: "education",
    technologies: [
      "Algorithms",
      "Data Structures",
      "OOP",
      "Web Development",
      "User İnterface Design",
    ],
  },
  {
    id: 6,
    title: "Bilişim Teknolojileri - Yazılım Geliştirme",
    company: "Tuzla Mesleki ve Teknik Anadolu Lisesi",
    period: "Eylül 2020 - Haziran 2024",
    description:
      "Algoritmalar, veri yapıları, web geliştirme, OOP, C#, .NET, ASP.NET MVC ve SQL üzerine eğitim aldım ve projeler geliştirdim.",
    type: "education",
    technologies: [
      "Programming Fundamentals",
      "Web Basics",
      "Database",
      "OOP",
      "Algorithms",
      "Data Structures",
    ],
  },
];

export const certificates = [
  {
    name: "Yükseköğretimde Yapay Zeka Teknolojileri Konferansı",
    issuer: "İstanbul Okan Üniversitesi",
    date: "5 Kasım 2025",
    credentialId: "OKAN-2025",
  },
  {
    name: "Başlangıç ve Orta Seviye Frontend Web Development Patikası",
    issuer: "Patika Academy",
    date: "2024 / 2025",
    credentialId: "PATIKA-2024 / 2025",
  },

  {
    name: "Web Programlama 101-201-301",
    issuer: "Turkcell Geleceği Yazanlar",
    date: "2023",
    credentialId: "Turkcell Akademi - 2023",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Ticaret Web Uygulaması",
    description:
      "Kendi geliştirdiğim HTML, CSS, JavaScript ve C# tabanlı e-ticaret uygulaması. Ürünleri görüntüleyip sepete eklemeye olanak tanır ve temel e-ticaret işleyişini öğretir.",
    image: eCommerceApp,
    github: "https://github.com/umutdiyar/eCommerce-webApp",
    demo: "#",
    technologies: [
      "HTML5",
      "TailwindCSS",
      "JavaScript",
      "JQuery",
      "C#",
      ".NET 8",
      "ASP.NET MVC",
      "Entity Framework Core",
    ],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Hava Durumu Web Uygulaması",
    description:
      "APİ entegrasyonu ile kendi geliştirdiğim modern bir hava durumu uygulaması. Kullanıcılar herhangi bir şehrin güncel hava durumunu kolayca görüntüleyebilir.",
    image: weatherApp,
    github: "https://github.com/umutdiyar/weather-app",
    demo: "https://weather-app-umutdiyar.vercel.app/",
    technologies: [
      "TailwindCSS",
      "JavaScript",
      "Vue.js",
      "Axios",
      "RESTful APIs",
    ],
    category: "Frontend",
  },
  {
    id: 3,
    title: "Film Arama Web Uygulaması",
    description:
      "React ile geliştirdiğim modern ve kullanıcı dostu bir film arama uygulaması. Gerçek zamanlı arama ve filtreleme özellikleri sunar.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop&crop=top",
    github: "https://github.com/umutdiyar/movie-finder",
    demo: "https://moviefinder-umutdiyar.vercel.app/",
    technologies: [
      "TailwindCSS",
      "JavaScript",
      "React.js",
      "Lucide React",
      "RESTful APIs",
    ],
    category: "Frontend",
  },
  {
    id: 4,
    title: "Portfolyo Web Uygulaması",
    description:
      "React.js ile geliştirdiğim kişisel portfolyo web sitesi. Kişisel projelerimi ve becerilerimi sergileyen animasyonlar, responsive tasarım odaklı modern bir web sayfasıdır.",
    image: myPortfolio,
    github: "https://github.com/umutdiyar/my-portfolio",
    demo: "https://umutdiyarbalci.vercel.app/",
    technologies: [
      "TailwindCSS",
      "JavaScript",
      "React.js",
      "Framer Motion",
      "ShadcnUi",
      "Lucide React",
    ],
    category: "Frontend",
  },
];

export const personalInfo = {
  name: "Umut Diyar Balcı",
  title: "Junior Yazılım Geliştirici",
  email: "umutdiyarbalci@gmail.com",
  phone: "+90 551 167 25 80",
  location: "İstanbul, Türkiye",
  github: "https://github.com/umutdiyar",
  linkedin: "https://www.linkedin.com/in/umut-diyar-balc%C4%B1/",
  age: 19,
  languages: ["Türkçe (Ana Dil)", "İngilizce (A2)"],
  interests: ["Web Geliştirme", "Teknoloji Blogları", "Müzik", "Kitap Okuma"],
};
