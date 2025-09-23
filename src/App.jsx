import { motion } from "framer-motion";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <motion.div
          className="p-6 bg-white rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl font-bold">Framer Motion Çalışıyor 🚀</h1>
          <h2 className="text-xl font-bold text-red-800 my-2">
            ShadcnUi çalışıyor:
          </h2>
          <Button>Click Me</Button>
          <p className="text-yellow-400 font-bold mt-2">
            TailwindCSS Çalışıyor!
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default App;
