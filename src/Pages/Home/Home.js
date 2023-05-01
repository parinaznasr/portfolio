import React, {
    useState,
    useRef,
} from "react";
import "./Home.css";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
import Contact from "../../Pages/Home/Contact/Contact";

const FirstComponent = (props) => {

    const bottomRef = useRef();
    const [viewContacts, setViewContacts] = useState(false);

    const navigate = useNavigate();

    const contactClicked = async ()  => {
        setViewContacts(true);
        // setViewContacts(!viewContacts);
        await sleep(400);
        scrollToBottom();
        // viewContacts ? scrollToBottom(): scrollToTop();
    }

    const cvClicked = (event) =>{
        navigate('./cv')
    }

    const scrollToBottom = () => {
        const element = document.getElementById('contactscomponentid');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToTop = () => {
        const element = document.getElementById('iconsid');
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
            <div id="iconsid"></div>
            <div className="icon-container">
                <div className="icon-list">
                    <div className="icon fade-in" onClick={() => { }}>
                        <BlurOnIcon sx={{ fontSize: 100 }} />
                        <div>Projects</div>
                    </div>
                    <div className="icon fade-in">
                        <PersonIcon sx={{ fontSize: 100 }} onClick={cvClicked}/>
                        <div>CV</div>
                    </div>
                    <div className="icon fade-in" onClick={contactClicked}>
                        <SendIcon sx={{ fontSize: 100 }} />
                        <div>Contanct</div>
                    </div>
                </div>
            </div>

            {viewContacts &&
            <Contact />
            }
            <div id="contactscomponentid"></div>
        </div>
    );
}

export default FirstComponent;
