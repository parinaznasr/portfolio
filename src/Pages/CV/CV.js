import React, { useEffect } from "react";
import Header from "./header/index.js";
import AboutMe from "./aboutme/index.js";
import Education from "./education/education";
import PersonalSkills from "./personalskills/personalskills";
import SoftwareSkills from "./softwareskills/softwareskills";
import Experience from "./experience/experience";
import "./CV.css";
import Footer from "../../UtilComponents/Footer/Footer";


const CVComponent = () => {

    useEffect(() => {
        scrollToTop();
    })

    const scrollToTop = () => {
        const element = document.getElementById('header-body');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="cvbody" id="bodycomponent">
            <Header/>
            <AboutMe/>
            <Education/>
            <Experience/>
            <SoftwareSkills/>
            <PersonalSkills/>
            <Footer />
        </div>
    );
}

export default CVComponent;
