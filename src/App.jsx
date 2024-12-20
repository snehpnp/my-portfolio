import React, { useState } from 'react';
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GitHubContributions from './components/GitHubContributions'
const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);


  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='container' style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'black', color: 'white',marginTop:"5px" }}>
      
      <Header />
      <About />
      <Projects />
      <Blogs />
      <Education />
      <Skills />
      <Contact formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} submitted={submitted} />
      <GitHubContributions />
      <Footer />
    </div>
  );
};

export default App;
