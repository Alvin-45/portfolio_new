import React from "react";
import '../Navbar/Nav.css'
function Nav() {
  return (
    <nav>
      <ul id="nav-list" style={{ listStyleType: "none", display: "flex", justifyContent: "space-around" ,color: "white", fontSize: "20px", margin: "0", padding: "0"}}>
        <li><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brilliance" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7"/>
</svg></a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Nav;