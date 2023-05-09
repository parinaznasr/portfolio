import React from "react";
import './personalskills.css'
import styled from "styled-components";
import {StyledSection} from "../../../styles/StyledSeciton";

const StyledSoftSkills = styled.div`
  width: 100%;
  height: auto;
  bottom: 0px;
  right: 0px;
  padding: 10px 0;
  white-space: nowrap;
  background-color: rgb(234, 221, 212);
  font-size: calc(0.8em, 0.2vw);
  display: flex;
  align-items: center;
  justify-content: center;

`;

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
      // <StyledSection>
      //     <StyledSoftSkills>
      //         <ul className="personal-skills">
      //             <h2>Personal Skills</h2>
      //             <ul>
      //                 {
      //                     skills.map(item => {return (<li>{item}</li>)} )
      //                 }
      //             </ul>
      //             {/*<li className="personal-skill">*/}
      //             {/*    <div className="personal-skill-icon"><i className="fas fa-comments"></i></div>*/}
      //             {/*    <div className="personal-skill-name">Excellent communication skills, both written and verbal</div>*/}
      //             {/*</li>*/}
      //             {/*<li className="personal-skill">*/}
      //             {/*    <div className="personal-skill-icon"><i className="fas fa-users"></i></div>*/}
      //             {/*    <div className="personal-skill-name">Strong teamwork and collaboration skills</div>*/}
      //             {/*</li>*/}
      //             {/*<li className="personal-skill">*/}
      //             {/*    <div className="personal-skill-icon"><i className="fas fa-clock"></i></div>*/}
      //             {/*    <div className="personal-skill-name">Ability to work under pressure and meet deadlines</div>*/}
      //             {/*</li>*/}
      //             {/*<li className="personal-skill">*/}
      //             {/*    <div className="personal-skill-icon"><i className="fas fa-check"></i></div>*/}
      //             {/*    <div className="personal-skill-name">Detail-oriented and highly organized</div>*/}
      //             {/*</li>*/}
      //             {/*<li className="personal-skill">*/}
      //             {/*    <div className="personal-skill-icon"><i className="fas fa-lightbulb"></i></div>*/}
      //             {/*    <div className="personal-skill-name">Creativity and innovation in problem-solving</div>*/}
      //             {/*</li>*/}
      //             {/*<li className="personal-skill">*/}
      //             {/*    <div className="personal-skill-icon"><i className="fas fa-users"></i></div>*/}
      //             {/*    <div className="personal-skill-name">Leadership skills, including the ability to motivate and inspire a team</div>*/}
      //             {/*</li>*/}
      //             {/*<li className="personal-skill">*/}
      //             {/*    <div className="personal-skill-icon"><i className="fas fa-rocket"></i></div>*/}
      //             {/*    <div className="personal-skill-name">Adaptability and flexibility in a fast-paced environment</div>*/}
      //             {/*</li>*/}
      //             {/*<li className="personal-skill">*/}
      //             {/*    <div className="personal-skill-icon"><i className="fas fa-cogs"></i></div>*/}
      //             {/*    <div className="personal-skill-name">Strong problem-solving and critical-thinking skills</div>*/}
      //             {/*</li>*/}
      //         </ul>
      //     </StyledSoftSkills>
      // </StyledSection>
      <div className="skills-section">
          <h2 className="skills-title">Soft Skills</h2>
          <ul className="skills-list">
              <li>Excellent communication skills, both written and verbal</li>
              <li>Strong teamwork and collaboration skills</li>
              <li>Ability to work under pressure and meet deadlines</li>
              <li>Detail-oriented and highly organized</li>
              <li>Creativity and innovation in problem-solving</li>
              <li>Leadership skills, including the ability to motivate and inspire a team</li>
              <li>Adaptability and flexibility in a fast-paced environment</li>
              <li>Strong problem-solving and critical-thinking skills</li>
          </ul>
      </div>


  );
}

export default Personalskills;
