import React from "react";
import "./aboutme.css";
import Grid from "@mui/material/Unstable_Grid2";

const AboutMe = () => {
    return (
        <div className="aboutme-container">
            <Grid container spacing={2}>
                <Grid xs={1} md={2} />
                <Grid xs={10} md={8}>
                    <div className="aboutme-title">About Me</div>
                    <div className="aboutme-description">
                        As an architecture student, my objective is to secure a summer internship that aligns with my field of interest, such as sustainable design, while utilizing my relevant skills in Rhino, Grasshopper, AutoCad, and Adobe Creative Suite. I am eager to gain valuable experience in specific aspects of the field, such as green building practices and urban planning, while contributing to a dynamic team and expanding my professional network.
                    </div>
                </Grid>
                <Grid xs={1} md={2} />
            </Grid>
        </div>
    );
}

export default AboutMe;
