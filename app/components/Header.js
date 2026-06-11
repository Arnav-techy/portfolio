"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  // Close mobile nav on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="header" id="header-nav">
        <div className="header-inner">
          <a href="#" className="header-wordmark">
            ARNAV <span> MISHRA</span>
          </a>

          <nav className="header-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      <nav
        className={`mobile-nav ${mobileOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleNavClick}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
