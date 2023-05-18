import React from "react";
import "./education.css";
import Grid from "@mui/material/Unstable_Grid2";
import { useMediaQuery } from "@mui/material";

const Education = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
      <div className="education-body">
        <div className="education-blackbackground">
          <Grid container spacing={2}>
            <Grid xs={1} sm={1} md={2}/>
            <Grid xs={10} sm={10} md={4}>
              <div className="education-item education-col-2">
                <div className="education-title">Education</div>
                <div className="education">
                  <div className="program-name">
                    Bachelor of Architectural Studies
                  </div>
                  <div className="program-description">
                    Technology of Architecture, Landscape, and Urbanism Specialist
                  </div>
                  <div className="university-name">
                    University of Toronto - John H.Daniels Faculty of Architecture,
                    Landscape, and Design
                  </div>
                  <div className="program-dates">09/2020 - Present</div>
                </div>
              </div>
            </Grid>
            <Grid xs={1} sm={1} md={0}/>


            <Grid xs={1} sm={1} md={0}/>
            <Grid xs={10} sm={10} md={4}>
              <div className="education-item education-col-2">
                <div className="award-title">Awards</div>
                <div className="awards-container">
                  <div className="awards-item">
                    <div className="awards-title">
                      Best Designer at Ibn Sina Competition (04/2016)
                    </div>
                    <div className="awards-description">
                      This award goes to the talented designer who spearheaded the
                      project that secured the first rank in the Industrial Design
                      field at the competition held between Tehran's High Schools
                      of National Organization for Development of Exceptional
                      Talents. Their innovative approach to designing a series of
                      pedestrian bridges showcased their exceptional skills and
                      creativity in the field of industrial design.
                    </div>
                  </div>
                  <div className="awards-item">
                    <div className="awards-title">2019 Nitor Award (06/2019)</div>
                    <div className="awards-description">
                      This award goes to a graduating student who will be continuing with
                      post-secondary education and demonstrates a positive attitude, enthusiasm
                      for learning, a sense of humor, involvement in school and community, a passion
                      for one or more talent areas, an inclusive spirit of kindness, and friendship.
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={1} sm={1} md={2}/>
          </Grid>
          <div className="education-container"></div>
        </div>
      </div>
  );
};

export default Education;
