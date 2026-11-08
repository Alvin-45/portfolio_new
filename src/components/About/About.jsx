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
                    <li>Expertise in HTML, JavaScript, React, Node Js, DotNet, MongoDB, Angular, Express and modern web Technologies</li>
                    <li>Agile methodoogy and collaborative team player.</li>
                    <li>Strong focus on performance optimization and  scalabiliry.</li>
                    </ul>
            </div>
        </div>
        <div id="boxesclub" style={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"10px"}}>
            <div id="box1" className='bx1'>
                <svg  className="symbol"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 70"
  width="100%"
  fill="none"
>
  <defs>
    <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#00CFFF" />
      <stop offset="100%" stopColor="#4263EB" />
    </linearGradient>
  </defs>

  <g
    stroke="url(#codeGradient)"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M30 10 L8 30 L30 50" />
    <path d="M70 10 L92 30 L70 50" />
    <path d="M58 5 L42 55" />
  </g>
</svg>
<h1 className='symbolhead'>50+</h1>
<p className='decrnew'>Projects Completed</p>
            </div>
            <div id="box2" className='bx1'>
                <svg className='symbol'
    id="trophy"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 50"
    width="100%"
    fill="none"
>
    <defs>
        <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00CFFF" />
            <stop offset="100%" stopColor="#4263EB" />
        </linearGradient>
    </defs>

    <g
        stroke="url(#trophyGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 8 H44 V22 C44 32 38 39 32 39 C26 39 20 32 20 22 V8Z" />
        <path d="M20 14 H12 V21 C12 29 17 33 24 34" />
        <path d="M44 14 H52 V21 C52 29 47 33 40 34" />
        <path d="M32 39 V49" />
        <path d="M23 55 H41" />
        <path d="M26 49 H38 V55 H26 Z" />
    </g>
</svg><br /> 
<h1 className='symbolhead'>2.5+</h1>
<p className='decrnew'>Years Experience</p>

            </div>
            <div id="box3" className='bx1'>
                <svg
    id="lightning" className='symbol'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 64"
    width="100%"
    fill="none"
>
    <defs>
        <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00CFFF" />
            <stop offset="100%" stopColor="#4263EB" />
        </linearGradient>
    </defs>

    <path
        d="M36 4 L13 35 H29 L24 60 L51 25 H34 L36 4Z"
        stroke="url(#lightningGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
</svg>
<h1 className='symbolhead'>20+</h1>
<p className='decrnew'>Projects Completed</p>

            </div>
            <div id="box4" className='bx1'>
                <svg className='symbol'
    id="rocket"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 60"
    width="100%"
    fill="none"
>
    <defs>
        <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00CFFF" />
            <stop offset="100%" stopColor="#4263EB" />
        </linearGradient>
    </defs>

    <g
        transform="rotate(-40 32 32)"
        stroke="url(#rocketGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {/* Rocket body */}
        <path d="M32 5 C23 14 20 25 20 38 L32 47 L44 38 C44 25 41 14 32 5Z" />

        {/* Rocket window */}
        <circle cx="32" cy="23" r="5" />

        {/* Left fin */}
        <path d="M20 32 L11 39 L13 48 L25 42" />

        {/* Right fin */}
        <path d="M44 32 L53 39 L51 48 L39 42" />

        {/* Flame */}
        <path d="M26 44 C26 51 29 56 32 60 C35 56 38 51 38 44" />

        {/* Flame detail */}
        <path d="M30 48 C30 52 32 54 32 54 C32 54 34 52 34 48" />
    </g>
</svg>
<h1 className='symbolhead'>500+</h1>
<p className='decrnew'>Code Commits</p>

            </div>
        </div>
        </div>
  )
}

export default About