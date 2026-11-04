
import React, { useState, useEffect } from "react";
import '../Navbar/Nav.css';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <a id="logo" href="/">AJ</a>

      <ul id="navend">
        <li><a href="/">Home</a></li>
        <li><a href="#aboutfullbody">About</a></li>
        <li><a href="#allExperience">Experience</a></li>
        <li><a href="#fullprojectpage">Projects</a></li>
        <li><a href="#fullskillpage">Skills</a></li>
        <li><a href="#fullcontactpage">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
