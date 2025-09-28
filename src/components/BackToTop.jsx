"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((scrolled / totalHeight) * 100);

      setVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 60 }}
          whileHover={{ scale: 1.1, rotate: 6 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full 
                     bg-white dark:bg-neutral-900 
                     text-neutral-900 dark:text-neutral-100 
                     shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] 
                     transition-colors"
        >
          {/* İkon */}
          <ArrowUp className="h-5 w-5 relative z-10" />

          {/* Progress Circle (arka plan) */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="opacity-20"
            />
            <motion.path
              d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="100 100"
              animate={{ strokeDasharray: `${progress} 100` }}
              className="text-primary dark:text-primary"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
