import React, { Component } from "react";
import './softwareskills.css'
const Softwareskills = () => {
  return(
    <div className="ss-body">
      <div className="ss-grid">
        <img className="ss-image" src={'./images/logos/rhinoceros.png'} alt={"rhino"}/>
        <img className="ss-image" src={'./images/logos/grasshopper-solid.png'} alt={"grasshopper"}/>
        <img className="ss-image" src={'./images/logos/adobe-photoshop-logo.png'} alt={"Adobe Photoshop"}/>
        <img className="ss-image" src={'./images/logos/Adobe_Illustrator.png'} alt={"Illustrator"}/>

        <img className="ss-image" src={'./images/logos/ru.png'} alt={"ru"}/>
        <img className="ss-image" src={'./images/logos/Adobe-InDesign-Logo.png'} alt={"Adobe InDesign"}/>
        <img className="ss-image" src={'./images/logos/Adobe_After_Effects.png'} alt={"Adobe After Effects"}/>
        <img className="ss-image" src={'./images/logos/Autocad-Logo.png'} alt={"Autocad"}/>
        <img className="ss-image" src={'./images/logos/Blender.png'} alt={"Blender"}/>

        <img className="ss-image" src={'./images/logos/3ds-max.png'} alt={"3ds"}/>
        <img className="ss-image" src={'./images/logos/Processing.png'} alt={"Processing"}/>
        <img className="ss-image" src={'./images/logos/revit-logo.png'} alt={"Revit"}/>
        <img className="ss-image" src={'./images/logos/sketchup.png'} alt={"Sketchup"}/>
      </div>
    </div>
  );
}

export default Softwareskills;
