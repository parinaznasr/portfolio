import React from "react";
import "./aboutme.css";
import {StyledSection} from "../../../styles/StyledSeciton";

const aboutme = () => {
  return (
      <StyledSection>
          <div className="aboutme-container">
              <div className="aboutme-title">
                  About Me
              </div>
              <div className="aboutme-description">
                  A highly motivated student of Architectural Studies: Technology of Architecture, Landscape, and Urbanism Specialist Stream at the University of Toronto. Engaged in creative design projects since middle school where I had the chance to develop a problem-solving mindset and expanded my creativity. Enthusiatic to learn more deeply and combine new design techniques with neuroscience to enhance people's quality of life on different scales. I believe in the significance of environmental design in bringing equity to society, addressing crucial urban issues and offering an equal chance to grow.
              </div>
          </div>
      </StyledSection>
  );
}

export default aboutme;
