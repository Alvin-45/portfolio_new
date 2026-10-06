import React from "react";
import Card from 'react-bootstrap/Card';
import './Skills.css'
function Skills() {
  return (
    <div id="fullskillpage">
      <h2>Skills</h2>
      <div className="cards" id="cards">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/aspnet.jpg" style={{ width: '100%', height: '250px' }}/>      
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10" style={{ width: '100%' }}/>      
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10" style={{ width: '100%' }}/>      
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10" style={{ width: '100%' }}/>      
    </Card>
      </div>
    </div>
  );
}
export default Skills;