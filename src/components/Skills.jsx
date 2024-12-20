import React, { useState } from 'react';

const Skills = () => {
  const [currentLanguage, setCurrentLanguage] = useState(0);

  const languages = [
    { name: 'JavaScript', icon: '🟨', description: 'A versatile, high-level programming language commonly used for web development.' },
    { name: 'TypeScript', icon: '🔵', description: 'A superset of JavaScript that adds static types to the language, enhancing productivity and code quality.' },
    { name: 'Python', icon: '🐍', description: 'A widely-used, high-level programming language known for its readability and simplicity.' },
    { name: 'Java', icon: '☕', description: 'A class-based, object-oriented programming language used in web and mobile development.' },
    { name: 'C++', icon: '➕', description: 'An extension of the C programming language, known for its efficiency and control over system resources.' },
    { name: 'C#', icon: '#️⃣', description: 'A modern, object-oriented programming language developed by Microsoft for the .NET platform.' },
    { name: 'Go', icon: '🐹', description: 'A statically typed, compiled programming language designed at Google for building simple, reliable, and efficient software.' },
    { name: 'Swift', icon: '🍎', description: 'A powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS development.' },
    { name: 'Kotlin', icon: '🤖', description: 'A modern, statically typed programming language that runs on the Java Virtual Machine (JVM) and is often used for Android development.' },
    { name: 'Ruby', icon: '♦️', description: 'A dynamic, object-oriented scripting language known for its elegance and developer-friendly syntax.' },
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
