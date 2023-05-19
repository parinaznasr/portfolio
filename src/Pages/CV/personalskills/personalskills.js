import React from "react";
import './personalskills.css'
import Grid from "@mui/material/Unstable_Grid2";

const PersonalSkills = () => {
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

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 899;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
        console.log(width)
    }, [window.innerWidth]);

  return(
      <div className="skills-section">
          <Grid container spacing={2}>
              <Grid xs={1} sm={1} md={2}/>
              <Grid xs={10} md={8}>
                  <h2 className="skills-title">Soft Skills</h2>
              </Grid>
              <Grid xs={1} sm={1} md={2}/>
          </Grid>
          { (width > breakpoint) ?
          <Grid container spacing={2} className="ss-content">
                  <Grid xs={2} sm={2} md={2}/>
                  <Grid xs={4} sm={4} md={4}>
                  <ul className="skills-list">
                      { skills.slice((skills.length)/2, skills.length).map((item, index)=> {return(<li key={index}>{item}</li>)})}
                  </ul>
              </Grid>
              <Grid xs={4} sm={4} md={4}>
                  <ul className="skills-list">
                      { skills.slice(0,(skills.length)/2).map((item, index)=> {return(<li key={index}>{item}</li>)})}
                  </ul>
              </Grid>
                  <Grid xs={2} sm={2} md={2}/>
          </Grid> :
          <Grid container spacing={2}>
                  <Grid xs={1} sm={1} md={2}/>
                  <Grid xs={10} sm={10} md={8}>
                      <ul className="skills-list">
                          { skills.map((item, index)=> {return(<li key={index}>{item}</li>)})}
                      </ul>
                  </Grid>
                  <Grid xs={1} sm={1} md={2}/>
              </Grid>
          }
      </div>
  );
}

export default PersonalSkills;
