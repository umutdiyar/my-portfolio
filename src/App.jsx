import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Talents from "./components/Talents";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";

import { ThemeProvider } from "./components/ThemeProvider";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <Talents />
          <Experience />
          <Education />
          <Projects />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
