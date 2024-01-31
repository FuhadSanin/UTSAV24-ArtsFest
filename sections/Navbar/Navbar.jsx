import React, { useState, useDeferredValue, useEffect } from "react";
import "./Navbar.css";

const navItems = ["Home", "About", "Services", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ismobile, setIsmobile] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsmobile(true);
    } else {
      setIsmobile(false);
    }
  }, []);

  return (
    <nav>
      {ismobile && <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </div>}
      <ul className={`navbar ${isOpen ? "open" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index} onClick={() => scrollTo(item)}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
