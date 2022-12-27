import React, {
  Component,
  useState,
  useRef,
} from "react";
import "./FirstComponent.css";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
import ContactComponent from "../ContactComponent";

const FirstComponent = (props) => {

  const bottomRef = useRef();
  const [viewContacts, setViewContacts] = useState(false);

  const navigate = useNavigate();

  const takeToComponent = async ()  => {
    // navigate(`/contact`);
    setViewContacts(true);
    await sleep(400);
    scrollToBottom();
  }

  const scrollToBottom = () => {
    const element = document.getElementById('contactscomponentid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

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

      {viewContacts &&
          <ContactComponent />
      }
      <div id="contactscomponentid"></div>
    </div>
  );
}

export default FirstComponent;