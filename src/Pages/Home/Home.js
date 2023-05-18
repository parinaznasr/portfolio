import React, {
    useState,
    useRef, useEffect,
} from "react";
import "./Home.css";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
import Contact from "../../Pages/Home/Contact/Contact";

const FirstComponent = (props) => {
    const [viewContacts, setViewContacts] = useState(false);
    const [iconSize, setIconSize] = useState(90);

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

    const projectClicked = (event) =>{
        navigate('./projects')
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

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setIconSize(60);
            } else {
                setIconSize(90);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                        <div id="contactscomponentid"></div>
                        <BlurOnIcon sx={{ fontSize: iconSize, transition: 'font-size 0.2s ease-in-out'}}  onClick={projectClicked} />
                        <div>Projects</div>
                    </div>
                    <div className="icon fade-in">
                        <PersonIcon sx={{ fontSize: iconSize, transition: 'font-size 0.2s ease-in-out' }} onClick={cvClicked}/>
                        <div>CV</div>
                    </div>
                    <div className="icon fade-in" onClick={contactClicked}>
                        <SendIcon sx={{ fontSize: iconSize, transition: 'font-size 0.2s ease-in-out', }} />
                        <div>Contanct</div>
                    </div>
                </div>
            </div>

            {viewContacts &&
            <Contact />
            }
        </div>
    );
}

export default FirstComponent;
