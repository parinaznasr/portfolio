import React from "react";
import "./header.css";


const Header = () => {
  return (
    <div className="header-body">
      <div className="header-style">
        <div className="header-photo"></div>
          <div className="header-description">Curriculum Vitae</div>
        {/*<div className="header-description">Architecture CV</div>*/}
        <div className="header-name">Yasaman Pazoki Toroudi</div>
      </div>
    </div>
  );
}

export default Header;
