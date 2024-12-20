import React from "react";

const Header = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "100",
        backgroundColor: "black", // Set the background color to black
        color: "white", // Set the text color to white
        padding: "0",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "0",
      }}
    >
      <h1 style={{ fontSize: "3em", margin: "0" }}>Sneh Jaiswal</h1>
      <p style={{ fontSize: "1.5em", marginTop: "10px" }}>
        Full Stack Developer
      </p>
    </header>
  );
};

export default Header;
