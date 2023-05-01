import React, { useEffect } from "react";
import Header from "./header/index.js";
import AboutMe from "./aboutme/index.js";
import Education from "./education/index.js";
import Personalskills from "./personalskills/index.js";
import Softwareskills from "./softwareskills/index.js";
import Experience from "./experience/index.js";
import "./CV.css";
import Footer from "../../UtilComponents/Footer/Footer";


const CVComponent = () => {

    useEffect(() => {
        console.log("Hello");
        scrollToTop();
    })


    const scrollToTop = () => {
        const element = document.getElementById('bodycomponent');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="cvbody">
            <div id="bodycomponent"></div>
            <Header/>
            <AboutMe/>
            <Education/>
            <Personalskills/>
            <Softwareskills/>
            <Experience/>
            <Footer />
        </div>
    );
}

export default CVComponent;
