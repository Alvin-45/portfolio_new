
import React, { useState, useEffect } from "react";
import "../Navbar/Nav.css";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <a id="logo" href="/" onClick={closeMenu}>
        A<span>J</span>
        <div className="logo-dot"></div>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul id="navend" className={menuOpen ? "show-menu" : ""}>
        <li><a href="/" onClick={closeMenu}>Home</a></li>
        <li><a href="#aboutfullbody" onClick={closeMenu}>About</a></li>
        <li><a href="#allExperience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#fullprojectpage" onClick={closeMenu}>Projects</a></li>
        <li><a href="#fullskillpage" onClick={closeMenu}>Skills</a></li>
        <li><a href="#fullcontactpage" onClick={closeMenu}>Contact</a></li>
      </ul>

    </nav>
  );
}

export default Nav;
