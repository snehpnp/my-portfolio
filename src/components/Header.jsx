import React from "react";

const Header = () => {
  return (
    <header
      style={{
        // position: "sticky",
        top: "0",
        zIndex: "100",
        backgroundColor: "black",
        color: "white",
        padding: "20px 0", // Add padding for space
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px", // Space between elements
      }}
    >
      <h1 style={{ fontSize: "2.5rem", margin: "0" }}>Sneh Jaiswal 👨‍💻</h1>
      <p style={{ fontSize: "1.2rem", margin: "0" }}>
        Full Stack Developer 💻🌐
      </p>
    </header>
  );
};

export default Header;
