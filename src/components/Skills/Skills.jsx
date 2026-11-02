import React from "react";
import Card from 'react-bootstrap/Card';
import './Skills.css'
import { data } from "react-router-dom";
function Skills() {
  const skills = [
    { frontend: [{ name: 'React', level: '95%' },{ name: 'Bootstrap', level: 'Intermediate' },{ name: 'Tailwind CSS', level: 'Intermediate' },{ name: 'Material UI', level: 'Intermediate' },{ name: 'Redux', level: 'Beginner' },{ name: 'Next.js', level: 'Beginner' },{ name: 'TypeScript', level: 'Beginner' }] },
    { backend: [{ name: 'Node.js', level: 'Intermediate' },{ name: 'Express.js', level: 'Intermediate' },{ name: 'MongoDB', level: 'Intermediate' },{ name: 'MySQL', level: 'Beginner' },{ name: 'PostgreSQL', level: 'Beginner' }] },
    { database: [{ name: 'MongoDB', level: 'Intermediate' },{ name: 'MySQL', level: 'Beginner' },{ name: 'PostgreSQL', level: 'Beginner' }] }
  ];
  return (
    <div id="fullskillpage">
      <h2 id="head1" >Skills & Experiences</h2>
      <div id="skillcards">
        {skills.map((skillCategory, index) => (
          <Card key={index} className="skill-card">
            <Card.Body>
              <Card.Title>{Object.keys(skillCategory)[0]}</Card.Title>
              <Card.Text>
                {skillCategory[Object.keys(skillCategory)[0]].map((skill, idx) => (
                  <div key={idx}>
                    <strong>{skill.name}</strong> - {skill.level}
                  </div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default Skills;