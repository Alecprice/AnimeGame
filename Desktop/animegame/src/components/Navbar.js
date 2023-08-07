import React from "react";
import "../styles/Navbar.css"; // You'll create this CSS file in the next step

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Anime Trivia</div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Game 1</a>
        </li>
        <li>
          <a href="/contact">Game 2</a>
        </li>
        <li>
          <a href="/contact">Game 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
