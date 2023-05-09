import React from "react";
import './personalskills.css'

const Personalskills = () => {
  const skills = [
      'Excellent communication skills, both written and verbal',
      'Strong teamwork and collaboration skills',
      'Ability to work under pressure and meet deadlines',
      'Detail-oriented and highly organized',
      'Creativity and innovation in problem-solving',
      'Leadership skills, including the ability to motivate and inspire a team',
      'Adaptability and flexibility in a fast-paced environment',
      'Strong problem-solving and critical-thinking skills'
  ]
  return(
      <div className="skills-section">
          <h2 className="skills-title">Soft Skills</h2>
          <ul className="skills-list">
              { skills.map((item, index)=> {return(<li key={index}>{item}</li>)})}
          </ul>
      </div>
  );
}

export default Personalskills;
