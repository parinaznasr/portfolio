import React, { useEffect } from "react";
import Header from "./header/index.js";
import AboutMe from "./aboutme/index.js";
import Education from "./education/index.js";
import Personalskills from "./personalskills/index.js";
import Softwareskills from "./softwareskills/index.js";
import Experience from "./experience/index.js";
import "./CV.css";
import Footer from "../../UtilComponents/Footer/Footer";
import Section from "./Section/Section";


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
        <div className="cvbody">
            <div id="bodycomponent"></div>
            <Header/>
            <AboutMe/>
            <Section/>
            <Education/>
            <Experience/>
            <Softwareskills/>
            <Personalskills/>
            <Footer />
        </div>
    );
}

export default CVComponent;
