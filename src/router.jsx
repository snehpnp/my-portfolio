import { Routes, Route } from "react-router-dom";
import HeroSection from "./App/components/HeroSection";
import About from "./App/components/About";
import Projects from "./App/components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./App/components/";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/skills" element={<Skills />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}
