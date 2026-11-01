
import React from 'react'
import '../Experience/Experience.css'

function Experience() {

  const experiences = [
    {
      role: "Software Engineer",
      date: "2024 - Present",
      company: "Manappuram Comptech And Consultants Ltd.",
      side: "right",
      description: "Working on scalable web applications using .NET,C#,Angular and modern backend technologies.",
      points: [
        "Developed scalable web applications",
        "Improved application performance",
        "Worked with REST APIs and databases",
        "Worked in making Application Vulnerability and Penetration Testing Compilent",
        "Contributed in product development"
      ]
    },
    {
      role: "ME(A)RN Stack Developer Intern",
      date: "2023 - 2024",
      company: "Luminar Technolab Kochi",
      side: "left",
      description: "Developed and maintained web applications using MEAN and MERN stack.",
      points: [
        "Built responsive web applications",
        "Integrated REST APIs",
        "Worked with SQL databases"
      ]
    }
  ]

  return (
    <div id="allExperience">

      <h1 id="head1">Experience</h1>
      <p id="expdesc">My professional journey and achievements</p>

      <div className="timeline">

        {experiences.map((exp, index) => (
          <div className={`timeline-item ${exp.side}`} key={index}>

            <div className="timeline-dot"></div>

            <div className="experience-card">

              <h3>{exp.role}</h3>

              <span className="exp-date">
                <i className="bi bi-calendar-event"></i>
                {exp.date}
              </span>

              <h4>{exp.company}</h4>

              <p>{exp.description}</p>

              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Experience
