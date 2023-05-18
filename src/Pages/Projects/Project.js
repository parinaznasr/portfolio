import React from "react";
import Footer from "../../UtilComponents/Footer/Footer";
import Header from "./header";
import ProjectImageList from "./ProjectImageList";
import ProjectGalleria from "./ProjectGalleria";

const ProjectsComponent = () => {
    return (
        <>
            <div id="bodycomponent"/>
            <Header/>
            <ProjectGalleria/>
            <ProjectImageList/>
            <div className="projectbody">
                <Footer/>
            </div>
        </>
    );
}

export default ProjectsComponent;
