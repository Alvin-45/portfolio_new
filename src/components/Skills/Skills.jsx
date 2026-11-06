import React from "react";
import Card from 'react-bootstrap/Card';
import './Skills.css'
import { data } from "react-router-dom";
function Skills() {
  const skills = [
    { Frontend: [{ name: 'React', level: '95%' },{ name: 'Bootstrap', level: '90%' },{ name: 'Tailwind CSS', level: '75%' },{ name: 'Redux', level: '80%' },{ name: 'TypeScript', level: '60%' }] },
    { Backend: [{ name: 'Node.js', level: '80%' },{ name: 'Express.js', level: '80%' },{ name: 'MongoDB', level: '90%' },{ name: '.NET', level: '75%' },{ name: 'C#', level: '65%' }] },
    { Database: [{ name: 'MongoDB', level: '90%' },{ name: 'MySQL', level: '50%' },{ name: 'Oracle', level: '98%' }] }
  ];
  return (
    <div id="fullskillpage">
      <h2 id="head1" >Skills & Experiences</h2>
      <p className="headdesrc">Technologies and skills I have worked with</p>
      <div id="skillcards">
        {skills.map((skillCategory, index) => (
          <Card key={index} className="skill-card">
            <Card.Body>
              <Card.Title className="skillhead">{Object.keys(skillCategory)[0]}</Card.Title>
              <Card.Text>
                {skillCategory[Object.keys(skillCategory)[0]].map((skill, idx) => (
                  <div key={idx}>
                    <div classname="silldefflex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong className="skillname">{skill.name}</strong>  <strong className="skilllevel">{skill.level}</strong>
                    </div>
                       
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: skill.level }}></div>
                    </div>
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