import React, { useState } from 'react';

const Skills = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);

  const languages = [
    {
      name: "HTML",
      category: "Frontend",
      description: "The foundation of web pages, providing structure and content.",
      icon: "🧱",
    },
    {
      name: "CSS",
      category: "Frontend",
      description: "Used for styling HTML elements, controlling layout, colors, and fonts.",
      icon: "🎨",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      description: "A CSS framework providing pre-styled components and a responsive grid system.",
      icon: "🗂️",
    },
    {
      name: "Material UI",
      category: "Frontend",
      description: "A React component library implementing Google's Material Design.",
      icon: "Ⓜ️",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      description: "A utility-first CSS framework for highly customized styling.",
      icon: "💨",
    },
    {
      name: "React",
      category: "Frontend",
      description: "A JavaScript library for building user interfaces, especially single-page applications.",
      icon: "⚛️",
    },
    {
      name: "Redux",
      category: "Frontend",
      description: "A state management library for React applications.",
      icon: "🔄",
    },
    {
      name: "Node.js",
      category: "Backend",
      description: "A JavaScript runtime environment that allows running JavaScript on the server.",
      icon: "⚙️",
    },
    {
      name: "Express.js",
      category: "Backend",
      description: "A Node.js web application framework for building APIs and handling routing.",
      icon: "🚀",
    },
      {
      name: "Bun",
      category: "Backend",
      description: "A fast all-in-one JavaScript runtime.",
      icon: "🐇",
    },
    {
      name: "SQL",
      category: "Backend",
      description: "A language for managing and querying relational databases.",
      icon: "🗄️",
    },
    {
      name: "MongoDB",
      category: "Backend",
      description: "A NoSQL database that stores data in JSON-like documents.",
      icon: "🌱",
    },
    {
      name: "Redis",
      category: "Backend",
      description: "An in-memory data store often used as a cache or message broker.",
      icon: "⚡",
    },
    {
      name: "Vite",
      category: "Build Tool",
      description: "A build tool for faster development experiences, especially with modern frameworks.",
      icon: "⚡",
    },
    {
      name: "GitHub",
      category: "Version Control",
      description: "A web-based platform for version control using Git.",
      icon: "🐱",
    },
    {
      name: "Postman",
      category: "API Testing",
      description: "A tool for testing APIs by sending HTTP requests and inspecting responses.",
      icon: "📮",
    },
  ];

  const handlePrev = () => {
    setCurrentLanguage((prev) => (prev === 0 ? languages.length - 3 : prev - 3));
  };

  const handleNext = () => {
    setCurrentLanguage((prev) => (prev + 3 >= languages.length ? 0 : prev + 3));
  };

  return (
    <section
      style={{
        padding: '40px 20px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          color: 'white',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        💼 Skills
      </h2>

      {/* Language Carousel */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          textAlign: 'center',
        }}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          style={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
        >
          &#8592; Prev
        </button>

        {/* Language Cards */}
        {languages.slice(currentLanguage, currentLanguage + 4).map((language, index) => (
          <div
            key={index}
            style={{
              width: '300px',
              padding: '20px',
              backgroundColor: '#333',
              borderRadius: '12px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <h3 style={{ fontSize: '2rem', color: '#00bcd4' }}>
              {language.icon} {language.name}
            </h3>
            <p style={{ fontSize: '1rem', color: 'white', marginBottom: '20px' }}>
              {language.description}
            </p>
          </div>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          style={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
        >
          Next &#8594;
        </button>
      </div>

      {/* Adding hover effects for the card */}
      <style>
        {`
          div:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
