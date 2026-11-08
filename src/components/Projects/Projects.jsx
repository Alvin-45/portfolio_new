import './Projects.css'

function Projects() {
  const projects=[
    {
      projectname:"SnapGram-An Insta Clone",
      projectdescr:"Its a clone of Instagram developed using MERN stack using React for frontend  Node,Express.js for backend and MongoDB for database",
      technologies:['React','React Bootstrap','Nodejs','Express.js','Redux','MongoDB'],
      image:'/src/assets/snapgram.png'
    },
    {
      projectname:"ChatBoat",
      projectdescr:"A messenger app made using MERN stack inorder to make commuicatin possible between 2 ends with help of Socket.io package.",
      technologies:['React','React Bootstrap','Nodejs','Express.js','Redux'],
      image:'/src/assets/cboat.png'
    },
    {
      projectname:"Nike Website Clone",
      projectdescr:"Its a clone of NIKES's Website as on April 10 2024",
      technologies:['React','React Bootstrap','Redux'],
      image:'/src/assets/nike.png'
    }
  ]
  return (
    <div id="fullprojectpage">
      <div id="projecthead">
<h2 id='head1'>Featured Projects</h2>
      <p className='projectdesc'>Here are some of my works and side projects</p>
    
      </div>
      <div id="boxesclubbed">
        {projects.map((proj,index)=>(
<div className="boxproj" key={index}>
  <img src={proj.image} alt="" className='imgproj'/>
  <h4 className="projname">{proj.projectname}</h4>
  <p className="projdesrc">{proj.projectdescr}</p>
  <div className="projlist">
    {proj.technologies.map((p,index2)=>(
      
        <span className="projlistcont">{p}</span>
      
    ))}
  </div>
</div>
        ))}
      </div>
      </div>
  );
}
export default Projects;