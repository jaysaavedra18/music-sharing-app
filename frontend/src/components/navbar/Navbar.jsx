import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import ScrollIndicator from "../scroll-indicator";
import DarkMode from "../dark-mode";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [list, setList] = useState(["Timeline", "About", "Contact"]); // Example list of link names
  const currentUserId = localStorage.getItem("currentUserId");
  useEffect(() => {
    if (currentUserId) {
      setList((prevList) => {
        if (!prevList.includes("Logout")) {
          return [...prevList, "Logout"];
        }
        return prevList;
      });
    }
  }, [currentUserId, list]);
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
