import React from "react";
import '../Navbar/Nav.css'
function Nav() {
  return (
    <nav>
      <ul id="nav-list" style={{ listStyleType: "none", display: "flex", justifyContent: "space-around" ,color: "white", fontSize: "20px", margin: "0", padding: "0"}}>
        <li><a id="logo" href="/">AJ</a></li>
<div id="navend">
<li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
</div>
        
      </ul>
    </nav>
  );
}
export default Nav;