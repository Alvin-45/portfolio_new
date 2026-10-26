import React from 'react'
import '../About/About.css'
function About() {
  return (
    <div id='aboutfullbody'>
        <h1 id='head1'>About</h1>
        <div id="aboutfull">
            <div id="aboutleft">
                <h4 id="headabout" className="text-light">Creative Developer & Problem Solver</h4>
                <p id="desc" className="text-light">I'm a Software Developer passionate about building modern, responsive, and user-friendly digital experiences. With hands-on experience in web development, I enjoy turning ideas into functional applications using technologies like React.js, Node.js, Express.js, and MongoDB.

My approach combines technical skills with creative problem-solving, focusing on writing clean, maintainable code and building applications that are both visually appealing and practical. I’m always exploring new technologies and improving my skills to stay up to date with modern development practices.

Beyond coding, I enjoy experimenting with new ideas, working on personal projects, and learning from real-world challenges. I'm always eager to collaborate, take on new opportunities, and grow as a developer.</p>
            </div>
            <div id="aboutright">
                <h5 id="head2">What I Bring</h5>
                <ul>
                    <li>2.5+ years of experience</li>
                    <li>Expertise in HTML,JavaScript,React,Node Js,DotNet,MongoDB,Angular,Express and modern web Technologies</li>
                    <li>Agile methodoogy and collaborative team player.</li>
                    <li>Strong focus on performance optimization and  scalabiliry.</li>
                    </ul>
            </div>
        </div>
        </div>
  )
}

export default About