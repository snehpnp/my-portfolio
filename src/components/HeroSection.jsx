import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-purple-700">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-yellow-400">Sneh Jaiswal</span>
        </h1>
        <p className="mt-4 text-lg text-white">
          Full Stack Developer | MERN Stack | React Enthusiast
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition">
          View My Work
        </button>
      </motion.div>
    </section>
  );
}
