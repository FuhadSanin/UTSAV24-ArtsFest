import React, { useState, useDeferredValue, useEffect } from "react";
import "./Navbar.css";

const navItems = [
  { id: "home", name: "HOME" },
  { id: "team", name: "TEAMS" },
  { id: "events", name: "EVENTS" },
  { id: "scoreboard", name: "SCOREBOARD" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ismobile, setIsmobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentItem, setCurrentItem] = useState(navItems[0].id);

  const handleItemClick = (id, event) => {
    if (id === "events") {
      window.location.href = "/events";
      return;
    }
    setCurrentItem(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (ismobile) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentItem(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "-7% 0% -93% 0%" }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [navItems, setCurrentItem]);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsmobile(true);
      } else {
        setIsmobile(false);
      }
    };

    // Check mobile on mount and on window resize
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check scroll on mount and on scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${isScrolled ? "blur" : ""}`}>
      {ismobile && (
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
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
        </div>
      )}
      {isScrolled && (
        <ul className={`navbar ${isOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={(event) => handleItemClick(item.id, event)}
              className={`${isScrolled ? "blur" : ""}`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
