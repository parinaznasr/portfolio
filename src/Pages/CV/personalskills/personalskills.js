import React from "react";
import './personalskills.css'
import Grid from "@mui/material/Unstable_Grid2";

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
          {/*<Container>*/}
          {/*    <Grid container spacing={2}>*/}
          {/*        <Grid xs={2}/>*/}
          {/*        <Grid xs={8}>*/}
          {/*            <h2 className="skills-title">Soft Skills</h2>*/}
          {/*            <ul className="skills-list">*/}
          {/*                { skills.map((item, index)=> {return(<li key={index}>{item}</li>)})}*/}
          {/*            </ul>*/}
          {/*        </Grid>*/}
          {/*        <Grid xs={2}/>*/}
          {/*    </Grid>*/}
          {/*</Container>*/}
          {/*<Container>*/}
          <Grid container spacing={2}>
              <Grid xs={12}>
                  <h2 className="skills-title">Soft Skills</h2>
              </Grid>
          </Grid>
          <Grid container spacing={1}>
              <Grid xs={2}/>
              <Grid xs={4}>
                  <ul className="skills-list">
                      { skills.slice(0,(skills.length)/2).map((item, index)=> {return(<li key={index}>{item}</li>)})}
                  </ul>
              </Grid>
              <Grid xs={5}>
                  <ul className="skills-list">
                      { skills.slice((skills.length)/2, skills.length).map((item, index)=> {return(<li key={index}>{item}</li>)})}
                  </ul>
              </Grid>
              <Grid xs={1}/>
          </Grid>
          {/*</Container>*/}
      </div>
  );
}

export default Personalskills;
