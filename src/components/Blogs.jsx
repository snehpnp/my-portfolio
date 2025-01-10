import React, { useState } from "react";
import NodejsImg from "../assets/Images/nodejs.jfif";
import ReactImg from "../assets/Images/reactjs.jfif";
import MongoDBImg from "../assets/Images/mongodb.png";
import SqlImg from "../assets/Images/SQL.jfif";
import HtmlImg from "../assets/Images/html.jfif";
import CssImg from "../assets/Images/css.png";
import MernImg from "../assets/Images/Mern.png";
import nosqlImg from "../assets/Images/nosqlvsmysql.jfif";
import html5Img from "../assets/Images/html5.png";
import muibootstrapjfif from "../assets/Images/muibootstrap.jfif";
import ExpresjsImg from "../assets/Images/expressjs.png";
import reduxpngImg from "../assets/Images/redux.png";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const cards = [
    { id: 1, title: "Build Fast and Scalable Web Applications with Node.js ✨", heading: "What is Node.js and Why is it Important?", description: "Node.js is a powerful runtime environment that allows you to write server-side JavaScript. Learn about its features, use cases, and benefits. 🚀", image: NodejsImg, link: "https://dummy-link.com", emoji: "✨" },
    { id: 2, title: "Create Dynamic Web Apps with React.js ⚛️", heading: "Introduction to Component-Based Architecture and Virtual DOM", description: "React.js is a popular JavaScript library used for building user interfaces. Understand its core concepts and features. 🔍", image: ReactImg, link: "https://dummy-link.com", emoji: "⚛️" },
    { id: 3, title: "Flexible Data Management with MongoDB 📚", heading: "Using Document-Based Databases and JSON", description: "MongoDB is a NoSQL database that stores data in JSON-like documents. Learn about its advantages, use cases, and queries. 📊", image: MongoDBImg, link: "https://dummy-link.com", emoji: "📚" },
    { id: 4, title: "Querying Databases with SQL 🔠", heading: "Introduction to Relational Databases and SQL Syntax", description: "SQL is a standard language used to manage and query relational databases. Understand basic SQL commands and operations. 📑", image: SqlImg, link: "https://dummy-link.com", emoji: "🔠" },
    { id: 5, title: "Structure Web Pages with HTML 🧱", heading: "Using Elements, Tags, and Attributes", description: "HTML provides the basic structure of web pages. Learn about various HTML elements and tags. 📜", image: HtmlImg, link: "https://dummy-link.com", emoji: "🧱" },
    { id: 6, title: "Make Web Pages Beautiful with CSS ✨", heading: "Styling, Layout, and Responsive Design", description: "CSS is used to style web pages and make them visually appealing. Understand CSS selectors, properties, and values. 🌸", image: CssImg, link: "https://dummy-link.com", emoji: "✨" },
    { id: 7, title: "Build Full-Stack Web Apps with the MERN Stack 💻", heading: "Using Node.js, Express, React.js, and MongoDB", description: "The MERN stack is a popular full-stack development stack that allows you to build end-to-end web applications. 🌐", image: MernImg, link: "https://dummy-link.com", emoji: "💻" },
    { id: 8, title: "NoSQL vs. SQL: What's Best for Your Project? 🆚", heading: "Different Database Models and Their Use Cases", description: "Both MongoDB and SQL are popular databases, but they have different characteristics. Learn which one is suitable for your project. ⚖️", image: nosqlImg, link: "https://dummy-link.com", emoji: "🆚" },
    { id: 9, title: "Create Modern Web Experiences with HTML5 ✨🆕", heading: "Introduction to New Elements, APIs, and Capabilities", description: "HTML5 has added many new features and capabilities to web development. Learn about them and improve your web pages. 📈", image: html5Img, link: "https://dummy-link.com", emoji: "✨🆕" },
    { id: 10, title: "Using Bootstrap, Tailwind CSS, and Material UI 🎨", heading: "Ready-to-Use Components and Styling Tools", description: "CSS frameworks help you style web pages quickly and efficiently. Learn about some popular frameworks. 🖌️", image: muibootstrapjfif, link: "https://dummy-link.com", emoji: "🎨" },
    { id: 11, title: "Build RESTful APIs with Express.js ⚙️", heading: "Using Routing, Middleware, and HTTP Methods", description: "Express.js is a Node.js framework that simplifies building web servers and APIs. 🚧", image: ExpresjsImg, link: "https://dummy-link.com", emoji: "⚙️" },
    { id: 12, title: "Using Redux, Context API, and Zustand 🗄️", heading: "Sharing and Updating Data Between Components", description: "State management in React.js is an important concept that helps you efficiently manage application data. 🔄", image: reduxpngImg, link: "https://dummy-link.com", emoji: "🗄️" },
  ];

  const cardsPerPage = 4;
  const currentCards = cards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * cardsPerPage < cards.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "2rem", color: "white", textAlign: "center" }}>
        Blogs
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",  // 4 items per row
          gap: "20px",
          alignItems: "stretch",  // Ensures all items stretch to the same height
          justifyContent: "center",
        }}
      >
        {currentCards.map((card) => (
          <div
            key={card.id}
            style={{
              backgroundColor: "black",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              color: "white",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%",
                height: "200px",  // Fixed height for image
                objectFit: "cover",  // Ensures image doesn't distort
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.25rem", color: "white" }}>{card.title}</h3>
            <p style={{ fontSize: "0.9rem", color: "#666", margin: "10px 0" }}>
              {card.description}
            </p>
            <a
              href={card.link}
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Read More
            </a>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: currentPage === 0 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * cardsPerPage >= cards.length}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor:
              (currentPage + 1) * cardsPerPage >= cards.length ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Blogs;
