import React, { useState } from "react";
import logo from "../images/genuine hydraulics logo.jpg";
import "../styles/navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" />
          <span>Genuine Hydraulics</span>
        </div>

        {/* Menu Items */}
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Hamburger Button (Mobile) */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


