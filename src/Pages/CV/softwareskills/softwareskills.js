import React, {useEffect, useState} from "react";
import './softwareskills.css'
import Grid from "@mui/material/Unstable_Grid2";

const SoftwareSkills = () => {
  const [hoveredImg, setHoveredImg] = useState(null);

  const handleMouseEnter = (imgName) => {
    setHoveredImg(imgName);
  };

  const handleMouseLeave = () => {
    setHoveredImg(null);
  };

  const Tooltip = ({ name, text }) => {
    return (<div className="tooltip">{name}<br/>{text}</div>);
  };

  const StyledImage = (props) => {
    const {image, name, desc, alt} = props;
    return (
      <div className="ss-item">
        <img
            className="ss-image"
            src={image}
            alt={alt}
            onMouseEnter={() => handleMouseEnter(name)}
            onMouseLeave={handleMouseLeave}
        />
        { hoveredImg === name && (
            <Tooltip name={name} text={desc} style={{ maxHeight: hoveredImg ===name ? '100%' : 0 }}/>
        )}
      </div>
  )
  }

  const software = [
    { name: "rhino", prof: "1", alt:"rhino", image:"./images/logos/rhinoceros.png", desc:""},
    { name: "grasshopper", prof: "1", alt:"grasshopper", image:"./images/logos/grasshopper-solid.png", desc:""},
    { name: "Adobe Photoshop", prof: "1", alt:"PS", image:"./images/logos/adobe-photoshop-logo.png", desc:""},
    { name: "Illustrator", prof: "1", alt:"Illustrator", image:"./images/logos/Adobe_Illustrator.png", desc:""},
    { name: "Ru", prof: "2", alt:"Ru", image:"./images/logos/ru.png", desc:""},
    { name: "InDesign", prof: "2", alt:"InDesign", image:"./images/logos/Adobe-InDesign-Logo.png", desc:""},
    { name: "Adobe After Effects", prof: "2", alt:"Adobe After Effects", image:"./images/logos/Adobe_After_Effects.png", desc:""},
    { name: "Autocad", prof: "2", alt:"Autocad", image:"./images/logos/Autocad-Logo.png", desc:""},
    { name: "Blender", prof: "2", alt:"Blender", image:"./images/logos/Blender.png", desc:""},
    { name: "3ds", prof: "3", alt:"3ds", image:"./images/logos/3ds-max.png", desc:""},
    { name: "Processing", prof: "3", alt:"Processing", image:"./images/logos/Processing.png", desc:""},
    { name: "Revit", prof: "3", alt:"Revit", image:"./images/logos/revit-logo.png", desc:""},
    { name: "Sketchup", prof: "3", alt:"Sketchup", image:"./images/logos/sketchup.png", desc:""},
  ]
  return(
      <div>
        <Grid container spacing={1}>
          <Grid xs={12}>
            <h2 className="ss-title">Software Skills</h2>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid xs={2}/>
          <Grid xs={8}>
            <div className="ss-body">
              <div className="ss-grid">
                {
                  software.filter(item=> item.prof ==="1").map((item, index)=> {
                    return(<StyledImage key={index} image={item.image} name={item.name} alt={item.alt} desc={item.desc}/>)
                  })
                }
              </div>
              <div className="ss-grid">
                {
                  software.filter(item=> item.prof ==="2").map((item , index) => {
                    return(<StyledImage key={index} image={item.image} name={item.name} alt={item.alt} desc={item.desc}/>)
                  })
                }
              </div>
              <div className="ss-grid">
                {
                  software.filter(item=> item.prof ==="3").map((item, index)=> {
                    return(<StyledImage key={index} image={item.image} name={item.name} alt={item.alt} desc={item.desc}/>)
                  })
                }
              </div>
              <div className="tooltip"></div>
            </div>
          </Grid>
          <Grid xs={2}/>
        </Grid>
      </div>
  );
}

export default SoftwareSkills;
