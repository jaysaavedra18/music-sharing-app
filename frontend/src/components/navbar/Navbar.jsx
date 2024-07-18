import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import ScrollIndicator from "../scroll-indicator";
import DarkMode from "../dark-mode";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const list = ["About", "Contact", "Logout"]; // Example list of link names

  return (
    <nav style={{ marginBottom: "2rem" }}>
      <Link to="/" className="title">
        Weallison
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        {list.map((item, index) => (
          <li key={index}>
            <NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
          </li>
        ))}
        <div className="darkmode-wrapper">
          <DarkMode />
        </div>
      </ul>
      <div className="scroll-indicator-container">
        <ScrollIndicator />
      </div>
    </nav>
  );
};
