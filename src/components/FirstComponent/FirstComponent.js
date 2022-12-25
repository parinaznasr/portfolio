import React, {
  Component
} from "react";
import "./FirstComponent.css";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";


const FirstComponent = (props) => {
  const navigate = useNavigate();

  const takeToComponent = () => {
    navigate(`/contact`);
  }

  return (
    <div className="body">
      <div className="section1">
        <div className="title fade-in">
          PORTFOLIO
          <div className="name">
            Yasaman Pazoki Toroudi
          </div>
        </div>
      </div>

      <div className="icon-container">
        <div className="icon-list">
          <div className="icon fade-in" onClick={() => { }}>
            <BlurOnIcon sx={{ fontSize: 100 }} />
            <div>Projects</div>
          </div>
          <div className="icon fade-in">
            <PersonIcon sx={{ fontSize: 100 }} />
            <div>CV</div>
          </div>
          <div className="icon fade-in" onClick={takeToComponent}>
            <SendIcon sx={{ fontSize: 100 }} />
            <div>Contanct</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstComponent;