import React from "react";
import "./education.css";

const education = () => {
  return (
    <div className="education-body">
      <div className="education-blackbackground">
        <div className="education-container">
          <div className="education-item">
          <div className="education-title">Education</div>
            <div className="education">
              <div className="education-item">
                <div className="education-item-title">
                  Bachelor of Architectural Studies<br />
                  (Technology of Architecture, Landscape, and Urbanism Specialist Stream)
                </div>
                <div className="education-school">University of Toronto - John H.Daniels Faculty of Architecture, Landscape, and Design</div>
                <div className="education-item-date">
                  09/2020 - Present
                </div>
              </div>
            </div>
          </div>

          <div className="education-item">
          <div className="education-title">Awards</div>
            <div className="education">
              <div className="education-item">
                <div className="awards">
                  Award 1
                </div>
                <div className="awards">
                  Award 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default education;
