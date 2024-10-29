import React from "react";
import colorSharp from "../assets/img/color-sharp.png";
import '../assets/css/Skills.css';

export const Skills = () => {

  const skills = [
    { name: "HTML/CSS+Bootstrap", percentage: 95, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "JavaScript & JQuery", percentage: 85, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "React Js & Redux", percentage: 85, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "Next Js", percentage: 75, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "Tailwind CSS", percentage: 85, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "Docker Containers", percentage: 80, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "Node & Express JS", percentage: 80, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "Java & Springboot", percentage: 75, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "DBMS", percentage: 85, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "C++", percentage: 80, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "Python", percentage: 70, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "AI/ML", percentage: 70, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
    { name: "Linux", percentage: 85, color: "linear-gradient(90.21deg, #9b0fa8 -5.91%, rgb(0 22 201 / 50%) 111.58%)" },
  ];


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Presenting a multifaceted skill set dedicated to enhancing functionality and aesthetics in web development</p>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-bar">
                    <div className="skill-name">{skill.name}</div>
                    <div className="progress-bar">
                      <div
                        className="filled-bar"
                        style={{ width: `${skill.percentage}%`, background: skill.color }}>
                        <span className="percentage">{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background Decorative Shape" />
    </section>
  );
};
