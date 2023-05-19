import React from "react";
import Footer from "../../UtilComponents/Footer/Footer";
import ProjectImageList from "./ProjectImageList";
import ProjectGalleria from "./ProjectGalleria";

const ProjectsComponent = () => {
    return (
        <>
            <div id="bodycomponent"/>
            <ProjectGalleria/>
            <ProjectImageList/>
            <div className="projectbody">
                <Footer/>
            </div>
        </>
    );
}

export default ProjectsComponent;
